/**
 * Layer Stack Database - IndexedDB Abstraction
 *
 * Provides a persistent storage layer for the city simulation using IndexedDB.
 * Implements the relational + key-value hybrid model described in the spec.
 */

import type {
  Tile,
  Layer,
  LayerVariable,
  SimulationEvent,
  DistrictMetric,
  Household,
  Business,
  PolicyInstrument,
  PolicyChange,
  Snapshot,
  QueryResult
} from '../types/dataModel';

const DB_NAME = 'LayerStackDB';
const DB_VERSION = 1;

/**
 * IndexedDB store names matching our schema
 */
export const STORES = {
  TILES: 'tiles',
  LAYERS: 'layers',
  LAYER_VARS: 'layer_vars',
  EVENTS: 'events',
  DISTRICT_METRICS: 'district_metrics',
  HOUSEHOLDS: 'households',
  BUSINESSES: 'businesses',
  POLICIES: 'policies',
  POLICY_CHANGES: 'policy_changes',
  SNAPSHOTS: 'snapshots'
} as const;

/**
 * Main database class providing CRUD operations and indexing
 */
export class LayerDB {
  private db: IDBDatabase | null = null;
  private dbPromise: Promise<IDBDatabase> | null = null;

  constructor() {
    this.dbPromise = this.initDB();
  }

  /**
   * Initialize IndexedDB with all required object stores and indexes
   */
  private async initDB(): Promise<IDBDatabase> {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(DB_NAME, DB_VERSION);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => {
        this.db = request.result;
        resolve(request.result);
      };

      request.onupgradeneeded = (event) => {
        const db = (event.target as IDBOpenDBRequest).result;

        // 1. Tiles - Spatial Spine
        if (!db.objectStoreNames.contains(STORES.TILES)) {
          const tileStore = db.createObjectStore(STORES.TILES, {
            keyPath: 'tile_id',
            autoIncrement: true
          });
          tileStore.createIndex('coords', ['x', 'y', 'z'], { unique: true });
          tileStore.createIndex('district', 'district_id', { unique: false });
        }

        // 2. Layers - Layer Catalogue
        if (!db.objectStoreNames.contains(STORES.LAYERS)) {
          const layerStore = db.createObjectStore(STORES.LAYERS, {
            keyPath: 'layer_id'
          });
          layerStore.createIndex('category', 'category', { unique: false });
          layerStore.createIndex('visible', 'visible', { unique: false });
          layerStore.createIndex('priority', 'priority', { unique: false });
        }

        // 3. Layer Variables - The Multi-Layer Spreadsheet (High-volume writes)
        if (!db.objectStoreNames.contains(STORES.LAYER_VARS)) {
          const varStore = db.createObjectStore(STORES.LAYER_VARS, {
            keyPath: ['tile_id', 'layer_id', 'var_key']
          });
          // Index for quick layer sweeps
          varStore.createIndex('layer_var', ['layer_id', 'var_key'], { unique: false });
          // Index for hover tooltips (all vars for a tile)
          varStore.createIndex('tile', 'tile_id', { unique: false });
          // Index for timestamp-based queries
          varStore.createIndex('timestamp', 'timestamp', { unique: false });
        }

        // 4. Events - Event Queue
        if (!db.objectStoreNames.contains(STORES.EVENTS)) {
          const eventStore = db.createObjectStore(STORES.EVENTS, {
            keyPath: 'event_id',
            autoIncrement: true
          });
          eventStore.createIndex('ts_due', 'ts_due', { unique: false });
          eventStore.createIndex('status', 'status', { unique: false });
          eventStore.createIndex('layer', 'layer_id', { unique: false });
        }

        // 5. District Metrics - Aggregates
        if (!db.objectStoreNames.contains(STORES.DISTRICT_METRICS)) {
          const metricStore = db.createObjectStore(STORES.DISTRICT_METRICS, {
            keyPath: ['district_id', 'layer_id', 'metric_key', 'sim_date']
          });
          metricStore.createIndex('district_layer', ['district_id', 'layer_id'], { unique: false });
        }

        // 6. Households - Agent System
        if (!db.objectStoreNames.contains(STORES.HOUSEHOLDS)) {
          const hhStore = db.createObjectStore(STORES.HOUSEHOLDS, {
            keyPath: 'household_id'
          });
          hhStore.createIndex('tile', 'home_tile', { unique: false });
          hhStore.createIndex('ideology', 'ideology', { unique: false });
        }

        // 7. Businesses - Agent System
        if (!db.objectStoreNames.contains(STORES.BUSINESSES)) {
          const bizStore = db.createObjectStore(STORES.BUSINESSES, {
            keyPath: 'business_id'
          });
          bizStore.createIndex('sector', 'sector', { unique: false });
          bizStore.createIndex('tile', 'hq_tile', { unique: false });
        }

        // 8. Policies - Governance
        if (!db.objectStoreNames.contains(STORES.POLICIES)) {
          const policyStore = db.createObjectStore(STORES.POLICIES, {
            keyPath: 'policy_id'
          });
          policyStore.createIndex('gov_model', 'gov_model', { unique: false });
        }

        // 9. Policy Changes - Audit Log
        if (!db.objectStoreNames.contains(STORES.POLICY_CHANGES)) {
          const changeStore = db.createObjectStore(STORES.POLICY_CHANGES, {
            keyPath: 'change_id',
            autoIncrement: true
          });
          changeStore.createIndex('policy', 'policy_id', { unique: false });
          changeStore.createIndex('timestamp', 'timestamp', { unique: false });
        }

        // 10. Snapshots - Timeline Management
        if (!db.objectStoreNames.contains(STORES.SNAPSHOTS)) {
          db.createObjectStore(STORES.SNAPSHOTS, {
            keyPath: 'snapshot_id'
          });
        }
      };
    });
  }

  /**
   * Ensure database is initialized before operations
   */
  private async ensureDB(): Promise<IDBDatabase> {
    if (this.db) return this.db;
    if (this.dbPromise) return this.dbPromise;
    this.dbPromise = this.initDB();
    return this.dbPromise;
  }

  // ============================================================================
  // GENERIC CRUD OPERATIONS
  // ============================================================================

  /**
   * Generic insert operation
   */
  async insert<T>(storeName: string, record: T): Promise<T> {
    const db = await this.ensureDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction([storeName], 'readwrite');
      const store = tx.objectStore(storeName);
      const request = store.add(record);

      request.onsuccess = () => resolve(record);
      request.onerror = () => reject(request.error);
    });
  }

  /**
   * Generic bulk insert operation (optimized for high-volume writes)
   */
  async bulkInsert<T>(storeName: string, records: T[]): Promise<number> {
    const db = await this.ensureDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction([storeName], 'readwrite');
      const store = tx.objectStore(storeName);
      let count = 0;

      for (const record of records) {
        const request = store.add(record);
        request.onsuccess = () => count++;
      }

      tx.oncomplete = () => resolve(count);
      tx.onerror = () => reject(tx.error);
    });
  }

  /**
   * Generic update operation (insert or update)
   */
  async upsert<T>(storeName: string, record: T): Promise<T> {
    const db = await this.ensureDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction([storeName], 'readwrite');
      const store = tx.objectStore(storeName);
      const request = store.put(record);

      request.onsuccess = () => resolve(record);
      request.onerror = () => reject(request.error);
    });
  }

  /**
   * Generic get by primary key
   */
  async get<T>(storeName: string, key: IDBValidKey): Promise<T | undefined> {
    const db = await this.ensureDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction([storeName], 'readonly');
      const store = tx.objectStore(storeName);
      const request = store.get(key);

      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }

  /**
   * Generic get all records
   */
  async getAll<T>(storeName: string, limit?: number): Promise<QueryResult<T>> {
    const db = await this.ensureDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction([storeName], 'readonly');
      const store = tx.objectStore(storeName);
      const request = store.getAll(undefined, limit);

      request.onsuccess = () => resolve({
        data: request.result,
        count: request.result.length
      });
      request.onerror = () => reject(request.error);
    });
  }

  /**
   * Generic query by index
   */
  async queryByIndex<T>(
    storeName: string,
    indexName: string,
    query: IDBValidKey | IDBKeyRange,
    limit?: number
  ): Promise<QueryResult<T>> {
    const db = await this.ensureDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction([storeName], 'readonly');
      const store = tx.objectStore(storeName);
      const index = store.index(indexName);
      const request = index.getAll(query, limit);

      request.onsuccess = () => resolve({
        data: request.result,
        count: request.result.length
      });
      request.onerror = () => reject(request.error);
    });
  }

  /**
   * Generic delete operation
   */
  async delete(storeName: string, key: IDBValidKey): Promise<void> {
    const db = await this.ensureDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction([storeName], 'readwrite');
      const store = tx.objectStore(storeName);
      const request = store.delete(key);

      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  }

  /**
   * Clear all records from a store
   */
  async clear(storeName: string): Promise<void> {
    const db = await this.ensureDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction([storeName], 'readwrite');
      const store = tx.objectStore(storeName);
      const request = store.clear();

      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  }

  // ============================================================================
  // SPECIALIZED HIGH-PERFORMANCE QUERIES
  // ============================================================================

  /**
   * Get all variables for a specific tile (for hover tooltips)
   * Optimized with tile index
   */
  async getTileVariables(tileId: number): Promise<LayerVariable[]> {
    const result = await this.queryByIndex<LayerVariable>(
      STORES.LAYER_VARS,
      'tile',
      tileId
    );
    return result.data;
  }

  /**
   * Get all variables for a specific layer (for layer sweeps)
   * Optimized with layer_var compound index
   */
  async getLayerVariables(layerId: string, varKey?: string): Promise<LayerVariable[]> {
    const query = varKey
      ? IDBKeyRange.only([layerId, varKey])
      : IDBKeyRange.bound([layerId], [layerId, '\uffff']);

    const result = await this.queryByIndex<LayerVariable>(
      STORES.LAYER_VARS,
      'layer_var',
      query
    );
    return result.data;
  }

  /**
   * Get specific variable value for a tile and layer
   */
  async getVariable(
    tileId: number,
    layerId: string,
    varKey: string
  ): Promise<LayerVariable | undefined> {
    return this.get<LayerVariable>(STORES.LAYER_VARS, [tileId, layerId, varKey]);
  }

  /**
   * Update or insert a variable value
   */
  async setVariable(
    tileId: number,
    layerId: string,
    varKey: string,
    value: number | Record<string, unknown>
  ): Promise<LayerVariable> {
    const variable: LayerVariable = {
      tile_id: tileId,
      layer_id: layerId,
      var_key: varKey,
      value,
      timestamp: Date.now()
    };
    return this.upsert<LayerVariable>(STORES.LAYER_VARS, variable);
  }

  /**
   * Get pending events ordered by due time
   */
  async getPendingEvents(limit?: number): Promise<SimulationEvent[]> {
    const result = await this.queryByIndex<SimulationEvent>(
      STORES.EVENTS,
      'status',
      'pending',
      limit
    );
    // Sort by ts_due (IndexedDB doesn't support multi-index sorting)
    return result.data.sort((a, b) => a.ts_due - b.ts_due);
  }

  /**
   * Get all visible layers ordered by priority
   */
  async getVisibleLayers(): Promise<Layer[]> {
    const result = await this.queryByIndex<Layer>(
      STORES.LAYERS,
      'visible',
      true
    );
    // Sort by priority (higher = draws later)
    return result.data.sort((a, b) => a.priority - b.priority);
  }

  /**
   * Get tiles by coordinates (range query)
   */
  async getTilesByRegion(
    x1: number, y1: number, z1: number,
    x2: number, y2: number, z2: number
  ): Promise<Tile[]> {
    const result = await this.getAll<Tile>(STORES.TILES);
    // Filter in memory (IndexedDB compound key ranges are tricky)
    return result.data.filter(tile =>
      tile.x >= x1 && tile.x <= x2 &&
      tile.y >= y1 && tile.y <= y2 &&
      tile.z >= z1 && tile.z <= z2
    );
  }

  // ============================================================================
  // SNAPSHOT OPERATIONS
  // ============================================================================

  /**
   * Create a snapshot of current simulation state
   */
  async createSnapshot(
    name: string,
    description: string,
    simTime: number,
    policyState: Record<string, number>,
    layerIds: string[]
  ): Promise<Snapshot> {
    const snapshot: Snapshot = {
      snapshot_id: crypto.randomUUID(),
      name,
      description,
      sim_time: simTime,
      real_time: Date.now(),
      policy_state: policyState,
      layer_states: layerIds
    };

    return this.insert<Snapshot>(STORES.SNAPSHOTS, snapshot);
  }

  /**
   * Close database connection
   */
  close(): void {
    if (this.db) {
      this.db.close();
      this.db = null;
      this.dbPromise = null;
    }
  }
}

// Singleton instance
export const layerDB = new LayerDB();
