/**
 * Event Bus System - Layer Communication Infrastructure
 *
 * Provides publish/subscribe mechanism for layers to communicate without tight coupling.
 * Supports variable publishing, event emission, and conflict resolution.
 */

import type {
  LayerVariable,
  SimulationEvent,
  ConflictResolver,
  ConflictResolutionMode
} from '../types/dataModel';
import { layerDB, STORES } from '../database/LayerDB';

/**
 * Subscriber callback for variable changes
 */
type VariableSubscriber = (variable: LayerVariable) => void;

/**
 * Subscriber callback for events
 */
type EventSubscriber = (event: SimulationEvent) => void;

/**
 * Variable publisher metadata
 */
interface Publisher {
  layer_id: string;
  priority: number;
  weight?: number;
}

/**
 * Central event bus for layer communication
 */
export class EventBus {
  private variableSubscribers: Map<string, Set<VariableSubscriber>> = new Map();
  private eventSubscribers: Map<string, Set<EventSubscriber>> = new Map();
  private variablePublishers: Map<string, Set<Publisher>> = new Map();
  private conflictResolver: ConflictResolver = { mode: 'priority' };

  /**
   * Subscribe to variable changes for a specific variable key
   */
  subscribeToVariable(varKey: string, callback: VariableSubscriber): () => void {
    if (!this.variableSubscribers.has(varKey)) {
      this.variableSubscribers.set(varKey, new Set());
    }
    this.variableSubscribers.get(varKey)!.add(callback);

    // Return unsubscribe function
    return () => {
      this.variableSubscribers.get(varKey)?.delete(callback);
    };
  }

  /**
   * Subscribe to events of a specific type
   */
  subscribeToEvent(eventType: string, callback: EventSubscriber): () => void {
    if (!this.eventSubscribers.has(eventType)) {
      this.eventSubscribers.set(eventType, new Set());
    }
    this.eventSubscribers.get(eventType)!.add(callback);

    // Return unsubscribe function
    return () => {
      this.eventSubscribers.get(eventType)?.delete(callback);
    };
  }

  /**
   * Register a layer as a publisher for a variable
   */
  registerPublisher(
    varKey: string,
    layerId: string,
    priority: number,
    weight?: number
  ): void {
    if (!this.variablePublishers.has(varKey)) {
      this.variablePublishers.set(varKey, new Set());
    }
    this.variablePublishers.get(varKey)!.add({ layer_id: layerId, priority, weight });
  }

  /**
   * Unregister a layer as a publisher
   */
  unregisterPublisher(varKey: string, layerId: string): void {
    const publishers = this.variablePublishers.get(varKey);
    if (publishers) {
      const toRemove = Array.from(publishers).find(p => p.layer_id === layerId);
      if (toRemove) {
        publishers.delete(toRemove);
      }
    }
  }

  /**
   * Get all publishers for a variable
   */
  getPublishers(varKey: string): Publisher[] {
    return Array.from(this.variablePublishers.get(varKey) || []);
  }

  /**
   * Set conflict resolution mode
   */
  setConflictResolver(resolver: ConflictResolver): void {
    this.conflictResolver = resolver;
  }

  /**
   * Publish a variable value
   * If multiple layers publish to the same variable, uses conflict resolver
   */
  async publishVariable(
    tileId: number,
    layerId: string,
    varKey: string,
    value: number | Record<string, unknown>
  ): Promise<void> {
    const publishers = this.getPublishers(varKey);

    // If only one publisher or this is the only one, write directly
    if (publishers.length <= 1) {
      const variable = await layerDB.setVariable(tileId, layerId, varKey, value);
      this.notifyVariableSubscribers(varKey, variable);
      return;
    }

    // Multiple publishers - need conflict resolution
    const resolvedValue = await this.resolveConflict(
      tileId,
      varKey,
      layerId,
      value,
      publishers
    );

    const variable = await layerDB.setVariable(tileId, layerId, varKey, resolvedValue);
    this.notifyVariableSubscribers(varKey, variable);
  }

  /**
   * Resolve conflicts when multiple layers write to the same variable
   */
  private async resolveConflict(
    tileId: number,
    varKey: string,
    currentLayerId: string,
    currentValue: number | Record<string, unknown>,
    publishers: Publisher[]
  ): Promise<number | Record<string, unknown>> {
    const mode = this.conflictResolver.mode;

    switch (mode) {
      case 'priority': {
        // Highest priority wins
        const sorted = publishers.sort((a, b) => b.priority - a.priority);
        if (sorted[0].layer_id === currentLayerId) {
          return currentValue;
        }
        // Get existing value from higher priority layer
        const existingVar = await layerDB.getVariable(
          tileId,
          sorted[0].layer_id,
          varKey
        );
        return existingVar?.value ?? currentValue;
      }

      case 'weighted': {
        // Weighted average (only works for numeric values)
        if (typeof currentValue !== 'number') {
          // Fall back to priority for non-numeric
          return this.resolveConflict(
            tileId,
            varKey,
            currentLayerId,
            currentValue,
            publishers
          );
        }

        const weights = this.conflictResolver.weights || {};
        let totalWeight = 0;
        let weightedSum = 0;

        for (const publisher of publishers) {
          const weight = weights[publisher.layer_id] || 1.0;
          const variable = await layerDB.getVariable(
            tileId,
            publisher.layer_id,
            varKey
          );

          if (variable && typeof variable.value === 'number') {
            weightedSum += variable.value * weight;
            totalWeight += weight;
          }
        }

        return totalWeight > 0 ? weightedSum / totalWeight : currentValue;
      }

      case 'first_write': {
        // First writer wins - check if variable exists
        const existing = await layerDB.getVariable(tileId, publishers[0].layer_id, varKey);
        return existing ? existing.value : currentValue;
      }

      case 'last_write': {
        // Last writer wins - always use current value
        return currentValue;
      }

      default:
        return currentValue;
    }
  }

  /**
   * Notify all subscribers of a variable change
   */
  private notifyVariableSubscribers(varKey: string, variable: LayerVariable): void {
    const subscribers = this.variableSubscribers.get(varKey);
    if (subscribers) {
      subscribers.forEach(callback => callback(variable));
    }
  }

  /**
   * Publish an event to the queue
   */
  async publishEvent(
    layerId: string,
    eventType: string,
    tsDue: number,
    payload: Record<string, unknown>
  ): Promise<SimulationEvent> {
    const event: SimulationEvent = {
      event_id: 0, // Will be auto-assigned
      ts_due: tsDue,
      layer_id: layerId,
      event_type: eventType,
      payload,
      status: 'pending',
      created_at: Date.now()
    };

    const savedEvent = await layerDB.insert<SimulationEvent>(STORES.EVENTS, event);
    this.notifyEventSubscribers(eventType, savedEvent);
    return savedEvent;
  }

  /**
   * Notify all subscribers of an event
   */
  private notifyEventSubscribers(eventType: string, event: SimulationEvent): void {
    const subscribers = this.eventSubscribers.get(eventType);
    if (subscribers) {
      subscribers.forEach(callback => callback(event));
    }
  }

  /**
   * Get next pending event from the queue
   */
  async popNextEvent(currentSimTime: number): Promise<SimulationEvent | null> {
    const events = await layerDB.getPendingEvents(1);
    if (events.length === 0) return null;

    const event = events[0];
    if (event.ts_due > currentSimTime) return null;

    // Mark as processing
    event.status = 'processing';
    await layerDB.upsert(STORES.EVENTS, event);
    return event;
  }

  /**
   * Mark an event as completed
   */
  async completeEvent(eventId: number): Promise<void> {
    const event = await layerDB.get<SimulationEvent>(STORES.EVENTS, eventId);
    if (event) {
      event.status = 'done';
      await layerDB.upsert(STORES.EVENTS, event);
    }
  }

  /**
   * Cancel a pending event
   */
  async cancelEvent(eventId: number): Promise<void> {
    const event = await layerDB.get<SimulationEvent>(STORES.EVENTS, eventId);
    if (event) {
      event.status = 'canceled';
      await layerDB.upsert(STORES.EVENTS, event);
    }
  }

  /**
   * Clear all subscriptions
   */
  clearSubscriptions(): void {
    this.variableSubscribers.clear();
    this.eventSubscribers.clear();
  }

  /**
   * Get conflict tiles - tiles where multiple layers disagree
   * Returns tiles where variance across publishers exceeds threshold
   */
  async getConflictTiles(
    varKey: string,
    threshold = 0.2
  ): Promise<number[]> {
    const publishers = this.getPublishers(varKey);
    if (publishers.length <= 1) return [];

    const conflictTiles: number[] = [];
    const allVars = await layerDB.getLayerVariables(publishers[0].layer_id, varKey);

    for (const variable of allVars) {
      if (typeof variable.value !== 'number') continue;

      const values: number[] = [variable.value];

      // Get values from other publishers for the same tile
      for (let i = 1; i < publishers.length; i++) {
        const otherVar = await layerDB.getVariable(
          variable.tile_id,
          publishers[i].layer_id,
          varKey
        );
        if (otherVar && typeof otherVar.value === 'number') {
          values.push(otherVar.value);
        }
      }

      // Calculate variance
      if (values.length > 1) {
        const mean = values.reduce((a, b) => a + b, 0) / values.length;
        const variance = values.reduce((sum, val) => sum + Math.pow(val - mean, 2), 0) / values.length;
        const stdDev = Math.sqrt(variance);

        // If standard deviation is high relative to mean, mark as conflict
        if (mean > 0 && stdDev / mean > threshold) {
          conflictTiles.push(variable.tile_id);
        }
      }
    }

    return conflictTiles;
  }
}

// Singleton instance
export const eventBus = new EventBus();
