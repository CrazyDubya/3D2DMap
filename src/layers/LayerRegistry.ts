/**
 * Layer Registry - Plugin System & Layer Management
 *
 * Manages layer lifecycle, hot-swapping, and plugin loading.
 * Central registry for all active layers and their update functions.
 */

import type {
  Layer,
  LayerPlugin,
  SimulationState,
  BlendMode,
  LayerCategory
} from '../types/dataModel';
import { DEFAULT_LAYERS } from '../types/dataModel';
import { layerDB, STORES } from '../database/LayerDB';
import { eventBus } from './EventBus';

/**
 * Layer update function signature
 * Takes current sim state and returns updated variables
 */
export type LayerUpdateFn = (
  state: SimulationState,
  layerId: string
) => Promise<void>;

/**
 * Registered layer with update logic
 */
interface RegisteredLayer {
  layer: Layer;
  updateFn?: LayerUpdateFn;
  lastTick: number;  // Last simulation time this layer updated
  isLoaded: boolean; // Whether update function is loaded
}

/**
 * Central registry managing all simulation layers
 */
export class LayerRegistry {
  private layers: Map<string, RegisteredLayer> = new Map();
  private updateQueue: Set<string> = new Set();
  private defaultUpdateFns: Map<string, LayerUpdateFn> = new Map();

  constructor() {
    this.initializeDefaultLayers();
  }

  /**
   * Initialize default layers on startup
   */
  private async initializeDefaultLayers(): Promise<void> {
    for (const layerConfig of DEFAULT_LAYERS) {
      const layer: Layer = {
        layer_id: crypto.randomUUID(),
        ...layerConfig
      };

      await layerDB.upsert<Layer>(STORES.LAYERS, layer);

      this.layers.set(layer.layer_id, {
        layer,
        lastTick: 0,
        isLoaded: false
      });

      // Register variables as publishable
      if (layer.writes) {
        for (const varKey of layer.writes) {
          eventBus.registerPublisher(
            varKey,
            layer.layer_id,
            layer.priority,
            1.0
          );
        }
      }
    }
  }

  /**
   * Register a custom layer from a plugin
   */
  async registerPlugin(plugin: LayerPlugin): Promise<string> {
    const layer: Layer = {
      layer_id: plugin.id,
      display_name: plugin.display_name,
      category: plugin.category || 'custom',
      canonical_hue: plugin.canonical_hue,
      tick_rate: plugin.tick_rate,
      blend_mode: plugin.blend_mode || 'overlay',
      priority: plugin.priority || 100,
      opacity: 0.8,
      visible: false, // Start hidden for new plugins
      variables: plugin.variables,
      reads: plugin.reads,
      writes: plugin.writes,
      metadata: {
        plugin_version: plugin.schema_version,
        update_fn_path: plugin.update_fn
      }
    };

    await layerDB.upsert<Layer>(STORES.LAYERS, layer);

    this.layers.set(layer.layer_id, {
      layer,
      lastTick: 0,
      isLoaded: false
    });

    // Register publishable variables
    if (layer.writes) {
      for (const varKey of layer.writes) {
        eventBus.registerPublisher(
          varKey,
          layer.layer_id,
          layer.priority,
          1.0
        );
      }
    }

    // Load update function (hot-swap capable)
    await this.loadUpdateFunction(layer.layer_id, plugin.update_fn);

    console.log(`[LayerRegistry] Registered plugin: ${plugin.display_name}`);
    return layer.layer_id;
  }

  /**
   * Load or reload a layer's update function
   * Supports hot-swapping by dynamic import
   */
  private async loadUpdateFunction(
    layerId: string,
    modulePath: string
  ): Promise<void> {
    try {
      // Dynamic import for hot-swapping
      // In production, this would load WASM/JS modules
      // For now, we'll use a placeholder system
      const registered = this.layers.get(layerId);
      if (!registered) return;

      // Check if we have a built-in update function
      const builtInFn = this.defaultUpdateFns.get(modulePath);
      if (builtInFn) {
        registered.updateFn = builtInFn;
        registered.isLoaded = true;
        return;
      }

      // In a real implementation, this would be:
      // const module = await import(modulePath);
      // registered.updateFn = module.default || module.update;
      // registered.isLoaded = true;

      console.log(`[LayerRegistry] Update function loaded: ${modulePath}`);
    } catch (error) {
      console.error(`[LayerRegistry] Failed to load update function: ${modulePath}`, error);
    }
  }

  /**
   * Register a default update function (for built-in layers)
   */
  registerUpdateFunction(name: string, fn: LayerUpdateFn): void {
    this.defaultUpdateFns.set(name, fn);
  }

  /**
   * Get a layer by ID
   */
  getLayer(layerId: string): Layer | undefined {
    return this.layers.get(layerId)?.layer;
  }

  /**
   * Get all registered layers
   */
  getAllLayers(): Layer[] {
    return Array.from(this.layers.values()).map(r => r.layer);
  }

  /**
   * Get visible layers sorted by priority
   */
  async getVisibleLayers(): Promise<Layer[]> {
    return await layerDB.getVisibleLayers();
  }

  /**
   * Update layer visibility
   */
  async setLayerVisibility(layerId: string, visible: boolean): Promise<void> {
    const registered = this.layers.get(layerId);
    if (!registered) return;

    registered.layer.visible = visible;
    await layerDB.upsert<Layer>(STORES.LAYERS, registered.layer);
  }

  /**
   * Update layer opacity
   */
  async setLayerOpacity(layerId: string, opacity: number): Promise<void> {
    const registered = this.layers.get(layerId);
    if (!registered) return;

    registered.layer.opacity = Math.max(0, Math.min(1, opacity));
    await layerDB.upsert<Layer>(STORES.LAYERS, registered.layer);
  }

  /**
   * Update layer priority (draw order)
   */
  async setLayerPriority(layerId: string, priority: number): Promise<void> {
    const registered = this.layers.get(layerId);
    if (!registered) return;

    registered.layer.priority = priority;
    await layerDB.upsert<Layer>(STORES.LAYERS, registered.layer);
  }

  /**
   * Reorder layers (for drag-and-drop in UI)
   */
  async reorderLayers(layerIds: string[]): Promise<void> {
    // Assign priorities based on position in array
    for (let i = 0; i < layerIds.length; i++) {
      await this.setLayerPriority(layerIds[i], i * 10);
    }
  }

  /**
   * Solo a layer (hide all others)
   */
  async soloLayer(layerId: string): Promise<void> {
    for (const [id, registered] of this.layers) {
      if (id === layerId) {
        registered.layer.visible = true;
      } else {
        registered.layer.visible = false;
      }
      await layerDB.upsert<Layer>(STORES.LAYERS, registered.layer);
    }
  }

  /**
   * Un-solo (restore previous visibility states)
   * For simplicity, makes all layers visible
   */
  async unsoloAll(): Promise<void> {
    for (const registered of this.layers.values()) {
      registered.layer.visible = true;
      await layerDB.upsert<Layer>(STORES.LAYERS, registered.layer);
    }
  }

  /**
   * Remove a layer and clean up its data
   */
  async removeLayer(layerId: string): Promise<void> {
    const registered = this.layers.get(layerId);
    if (!registered) return;

    // Unregister publishers
    if (registered.layer.writes) {
      for (const varKey of registered.layer.writes) {
        eventBus.unregisterPublisher(varKey, layerId);
      }
    }

    // Delete layer from database
    await layerDB.delete(STORES.LAYERS, layerId);

    // Remove from memory
    this.layers.delete(layerId);

    console.log(`[LayerRegistry] Removed layer: ${registered.layer.display_name}`);
  }

  /**
   * Process simulation tick for all layers
   * Only updates layers whose tick_rate has elapsed
   */
  async tick(state: SimulationState): Promise<void> {
    for (const [layerId, registered] of this.layers) {
      // Skip if not visible or not loaded
      if (!registered.layer.visible || !registered.isLoaded || !registered.updateFn) {
        continue;
      }

      // Check if enough sim time has elapsed for this layer's tick rate
      const elapsedHours = (state.sim_time - registered.lastTick) / (1000 * 60 * 60);
      if (elapsedHours >= registered.layer.tick_rate) {
        // Add to update queue
        this.updateQueue.add(layerId);
      }
    }

    // Process update queue
    await this.processUpdateQueue(state);
  }

  /**
   * Process all layers in the update queue
   */
  private async processUpdateQueue(state: SimulationState): Promise<void> {
    // Sort by priority (higher priority updates first)
    const sortedLayers = Array.from(this.updateQueue)
      .map(id => this.layers.get(id)!)
      .sort((a, b) => b.layer.priority - a.layer.priority);

    for (const registered of sortedLayers) {
      if (registered.updateFn) {
        try {
          await registered.updateFn(state, registered.layer.layer_id);
          registered.lastTick = state.sim_time;
        } catch (error) {
          console.error(
            `[LayerRegistry] Error updating layer ${registered.layer.display_name}:`,
            error
          );
        }
      }
    }

    this.updateQueue.clear();
  }

  /**
   * Get layers by category
   */
  getLayersByCategory(category: LayerCategory): Layer[] {
    return Array.from(this.layers.values())
      .filter(r => r.layer.category === category)
      .map(r => r.layer);
  }

  /**
   * Export layer configuration for modding
   */
  exportLayerPlugin(layerId: string): LayerPlugin | null {
    const registered = this.layers.get(layerId);
    if (!registered) return null;

    const layer = registered.layer;
    return {
      id: layer.layer_id,
      display_name: layer.display_name,
      canonical_hue: layer.canonical_hue,
      variables: layer.variables,
      reads: layer.reads,
      writes: layer.writes,
      tick_rate: layer.tick_rate,
      update_fn: (layer.metadata?.update_fn_path as string) || 'custom.js',
      blend_mode: layer.blend_mode,
      priority: layer.priority,
      category: layer.category,
      schema_version: (layer.metadata?.plugin_version as string) || '1.0.0'
    };
  }

  /**
   * Clear all layers (for reset)
   */
  async clearAll(): Promise<void> {
    for (const layerId of this.layers.keys()) {
      await this.removeLayer(layerId);
    }
    this.layers.clear();
    this.updateQueue.clear();
  }
}

// Singleton instance
export const layerRegistry = new LayerRegistry();
