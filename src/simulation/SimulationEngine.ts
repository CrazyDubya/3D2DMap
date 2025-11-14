/**
 * Simulation Engine - Main Orchestrator
 *
 * Manages the simulation loop, coordinates layer updates, processes events,
 * and maintains global simulation state.
 */

import type { SimulationState, Tile } from '../types/dataModel';
import { layerDB, STORES } from '../database/LayerDB';
import { layerRegistry } from '../layers/LayerRegistry';
import { eventBus } from '../layers/EventBus';
import { layerRenderer } from '../layers/LayerRenderer';
import { registerDefaultLayers } from '../layers/defaultLayers';

/**
 * Simulation configuration
 */
interface SimulationConfig {
  startTime?: number;        // Initial sim time (default: current timestamp)
  tickInterval?: number;     // Real milliseconds between ticks (default: 1000 = 1 second)
  timeScale?: number;        // Sim time per real second (default: 3600 = 1 hour per real second)
  autoStart?: boolean;       // Start simulation immediately (default: false)
}

/**
 * Main simulation engine
 */
export class SimulationEngine {
  private state: SimulationState;
  private config: Required<SimulationConfig>;
  private intervalHandle: number | null = null;
  private lastRealTime: number = 0;
  private initialized: boolean = false;

  // Callbacks
  private onTickCallbacks: Set<(state: SimulationState) => void> = new Set();
  private onStateChangeCallbacks: Set<(state: SimulationState) => void> = new Set();

  constructor(config: SimulationConfig = {}) {
    this.config = {
      startTime: config.startTime || Date.now(),
      tickInterval: config.tickInterval || 1000,
      timeScale: config.timeScale || 3600,
      autoStart: config.autoStart || false
    };

    this.state = {
      sim_time: this.config.startTime,
      tick_count: 0,
      paused: true,
      speed: 1.0,
      random_seed: Math.floor(Math.random() * 1000000)
    };
  }

  /**
   * Initialize the simulation
   * Sets up database, registers layers, and creates initial world state
   */
  async initialize(): Promise<void> {
    if (this.initialized) {
      console.warn('[SimEngine] Already initialized');
      return;
    }

    console.log('[SimEngine] Initializing simulation...');

    // Register default layer update functions
    registerDefaultLayers();

    // Create initial tile grid (example: 10x10 grid)
    await this.createInitialWorld();

    this.initialized = true;
    this.notifyStateChange();

    if (this.config.autoStart) {
      this.start();
    }

    console.log('[SimEngine] Initialization complete');
  }

  /**
   * Create initial world (tiles, agents, etc.)
   */
  private async createInitialWorld(): Promise<void> {
    // Check if tiles already exist
    const existingTiles = await layerDB.getAll(STORES.TILES);
    if (existingTiles.count > 0) {
      console.log(`[SimEngine] Using existing ${existingTiles.count} tiles`);
      return;
    }

    // Create a 10x10 grid of tiles
    const gridSize = 10;
    const tiles: Tile[] = [];

    for (let x = 0; x < gridSize; x++) {
      for (let y = 0; y < gridSize; y++) {
        tiles.push({
          tile_id: 0, // Will be auto-assigned
          x,
          y,
          z: 0, // Ground level
          district_id: Math.floor((x * gridSize + y) / 20) // ~5 tiles per district
        });
      }
    }

    await layerDB.bulkInsert(STORES.TILES, tiles);
    console.log(`[SimEngine] Created ${tiles.length} tiles`);

    // Initialize some basic variables for each tile
    const allTiles = await layerDB.getAll(STORES.TILES);
    const layers = layerRegistry.getAllLayers();

    for (const layer of layers) {
      for (const tile of allTiles.data as Tile[]) {
        // Initialize first variable for each layer with random values
        if (layer.variables.length > 0) {
          const varKey = layer.variables[0];
          const initialValue = Math.random() * 100;

          await eventBus.publishVariable(
            tile.tile_id,
            layer.layer_id,
            varKey,
            initialValue
          );
        }
      }
    }

    console.log('[SimEngine] Initialized layer variables');
  }

  /**
   * Start the simulation
   */
  start(): void {
    if (!this.initialized) {
      throw new Error('Simulation not initialized. Call initialize() first.');
    }

    if (!this.state.paused) {
      console.warn('[SimEngine] Already running');
      return;
    }

    this.state.paused = false;
    this.lastRealTime = Date.now();

    this.intervalHandle = window.setInterval(() => {
      this.tick();
    }, this.config.tickInterval);

    this.notifyStateChange();
    console.log('[SimEngine] Started');
  }

  /**
   * Pause the simulation
   */
  pause(): void {
    if (this.state.paused) return;

    this.state.paused = true;

    if (this.intervalHandle !== null) {
      clearInterval(this.intervalHandle);
      this.intervalHandle = null;
    }

    this.notifyStateChange();
    console.log('[SimEngine] Paused');
  }

  /**
   * Toggle pause/play
   */
  toggle(): void {
    if (this.state.paused) {
      this.start();
    } else {
      this.pause();
    }
  }

  /**
   * Set simulation speed multiplier
   */
  setSpeed(speed: number): void {
    this.state.speed = Math.max(0.1, Math.min(10, speed));
    this.notifyStateChange();
  }

  /**
   * Main simulation tick
   * This is called at regular intervals and advances the simulation
   */
  private async tick(): Promise<void> {
    const now = Date.now();
    const realDelta = now - this.lastRealTime;
    this.lastRealTime = now;

    // Advance sim time based on speed and time scale
    const simDelta = (realDelta / 1000) * this.config.timeScale * this.state.speed;
    this.state.sim_time += simDelta;
    this.state.tick_count++;

    try {
      // 1. Process pending events
      await this.processEvents();

      // 2. Update all layers
      await layerRegistry.tick(this.state);

      // 3. Notify callbacks
      this.notifyTick();

    } catch (error) {
      console.error('[SimEngine] Error during tick:', error);
    }
  }

  /**
   * Process pending events from the event queue
   */
  private async processEvents(): Promise<void> {
    let event = await eventBus.popNextEvent(this.state.sim_time);
    let processedCount = 0;
    const maxEventsPerTick = 100; // Safety limit

    while (event && processedCount < maxEventsPerTick) {
      // Handle the event based on type
      await this.handleEvent(event);

      // Mark as complete
      await eventBus.completeEvent(event.event_id);

      // Get next event
      event = await eventBus.popNextEvent(this.state.sim_time);
      processedCount++;
    }

    if (processedCount > 0) {
      console.log(`[SimEngine] Processed ${processedCount} events`);
    }
  }

  /**
   * Handle a single event
   */
  private async handleEvent(event: any): Promise<void> {
    console.log(`[SimEngine] Handling event: ${event.event_type}`, event.payload);

    // Event handling logic would go here
    // For now, just log it
    // In a full implementation, this would trigger specific layer responses
  }

  /**
   * Get current simulation state
   */
  getState(): SimulationState {
    return { ...this.state };
  }

  /**
   * Get simulation time as formatted string
   */
  getFormattedTime(): string {
    const date = new Date(this.state.sim_time);
    return date.toLocaleString();
  }

  /**
   * Subscribe to tick events
   */
  onTick(callback: (state: SimulationState) => void): () => void {
    this.onTickCallbacks.add(callback);
    return () => this.onTickCallbacks.delete(callback);
  }

  /**
   * Subscribe to state changes (pause/play/speed)
   */
  onStateChange(callback: (state: SimulationState) => void): () => void {
    this.onStateChangeCallbacks.add(callback);
    return () => this.onStateChangeCallbacks.delete(callback);
  }

  /**
   * Notify tick callbacks
   */
  private notifyTick(): void {
    this.onTickCallbacks.forEach(cb => {
      try {
        cb(this.state);
      } catch (error) {
        console.error('[SimEngine] Error in tick callback:', error);
      }
    });
  }

  /**
   * Notify state change callbacks
   */
  private notifyStateChange(): void {
    this.onStateChangeCallbacks.forEach(cb => {
      try {
        cb(this.state);
      } catch (error) {
        console.error('[SimEngine] Error in state change callback:', error);
      }
    });
  }

  /**
   * Get current render data from layer renderer
   */
  async getRenderData() {
    return await layerRenderer.generateRenderData();
  }

  /**
   * Create a snapshot of current state
   */
  async createSnapshot(name: string, description: string): Promise<string> {
    // Get current policy states (would come from policy system)
    const policyState: Record<string, number> = {};

    // Get active layer IDs
    const layers = await layerRegistry.getVisibleLayers();
    const layerIds = layers.map(l => l.layer_id);

    const snapshot = await layerDB.createSnapshot(
      name,
      description,
      this.state.sim_time,
      policyState,
      layerIds
    );

    console.log(`[SimEngine] Created snapshot: ${snapshot.snapshot_id}`);
    return snapshot.snapshot_id;
  }

  /**
   * Reset simulation to initial state
   */
  async reset(): Promise<void> {
    this.pause();

    // Clear all data
    await layerDB.clear(STORES.LAYER_VARS);
    await layerDB.clear(STORES.EVENTS);
    await layerDB.clear(STORES.HOUSEHOLDS);
    await layerDB.clear(STORES.BUSINESSES);

    // Reset state
    this.state = {
      sim_time: this.config.startTime,
      tick_count: 0,
      paused: true,
      speed: 1.0,
      random_seed: Math.floor(Math.random() * 1000000)
    };

    // Reinitialize world
    await this.createInitialWorld();

    this.notifyStateChange();
    console.log('[SimEngine] Reset complete');
  }

  /**
   * Shutdown and cleanup
   */
  shutdown(): void {
    this.pause();
    this.onTickCallbacks.clear();
    this.onStateChangeCallbacks.clear();
    eventBus.clearSubscriptions();
    console.log('[SimEngine] Shutdown complete');
  }
}

// Global singleton instance
export const simulationEngine = new SimulationEngine({
  autoStart: false,
  tickInterval: 1000, // 1 second real time
  timeScale: 3600     // 1 hour sim time per real second
});
