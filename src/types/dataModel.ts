/**
 * Core Type Definitions for Layer Stack Data Model
 *
 * This file defines the TypeScript types for the comprehensive city simulation
 * layer stack system, including tiles, layers, variables, events, agents, and policies.
 */

// ============================================================================
// 1. SPATIAL SPINE - Tile System
// ============================================================================

/**
 * Represents a single spatial unit in the city grid.
 * Everything (population, infrastructure, etc.) anchors to a tile.
 */
export interface Tile {
  tile_id: number;           // Primary key, autoincrement
  x: number;                 // Axial X coordinate
  y: number;                 // Axial Y coordinate
  z: number;                 // Height slice / elevation
  district_id?: number;      // Optional district grouping
  mask?: Polygon;            // Fine collision geometry (WKB polygon)
}

export interface Polygon {
  type: 'Polygon';
  coordinates: number[][][];
}

// ============================================================================
// 2. LAYER CATALOGUE - Layer Metadata
// ============================================================================

export type BlendMode = 'overlay' | 'add' | 'multiply' | 'xor' | 'priority';
export type LayerCategory = 'economic' | 'social' | 'environmental' | 'infrastructure' | 'politics' | 'custom';

/**
 * Defines a single data layer in the stack.
 * Each layer represents a complete "sheet" of data across the city grid.
 */
export interface Layer {
  layer_id: string;          // UUID - unique layer identifier
  display_name: string;      // Human-readable name: "Psyche – Stress Index"
  category: LayerCategory;   // Grouping for UI organization
  canonical_hue: string;     // Hex color: #8b5cf6
  update_fn?: string;        // Reference to WASM/Python/JS module
  tick_rate: number;         // Sim-hours between updates
  blend_mode: BlendMode;     // How this layer composites with others
  priority: number;          // Default draw order (higher = on top)
  opacity: number;           // 0.0 to 1.0
  visible: boolean;          // Is this layer currently active?
  variables: string[];       // List of variable keys this layer uses
  reads?: string[];          // Variables this layer reads from other layers
  writes?: string[];         // Variables this layer publishes
  metadata?: Record<string, unknown>; // Extensible metadata for modders
}

// ============================================================================
// 3. VARIABLE FACT STORE - The Multi-Layer Spreadsheet
// ============================================================================

/**
 * Entity-component-style storage for layer variables.
 * Each row represents one variable for one layer at one tile.
 */
export interface LayerVariable {
  tile_id: number;           // Foreign key to tiles
  layer_id: string;          // Foreign key to layers (UUID)
  var_key: string;           // Variable name: "stress", "crime_idx", "pipe_age"
  value: number | Record<string, unknown>; // Numeric value or small JSON blob
  timestamp: number;         // Last write epoch (ms)
}

/**
 * Composite key for efficient variable lookups
 */
export type VariableKey = {
  tile_id: number;
  layer_id: string;
  var_key: string;
};

// ============================================================================
// 4. EVENT QUEUE - Decoupled Layer Communication
// ============================================================================

export type EventStatus = 'pending' | 'processing' | 'done' | 'canceled';

/**
 * Event-driven system for layer communication and time-delayed effects.
 * Layers publish events; engine consumes them by timestamp.
 */
export interface SimulationEvent {
  event_id: number;          // Primary key, autoincrement
  ts_due: number;            // Sim time when this event should fire (ms)
  layer_id: string;          // Which layer published this event
  event_type: string;        // Event classification: "burst", "protest", "shock"
  payload: Record<string, unknown>; // Event data: {tiles: [42,43], severity: 0.8}
  status: EventStatus;       // Current processing state
  created_at: number;        // Real-time creation timestamp
}

// ============================================================================
// 5. AGGREGATES - Dashboard & AI Metrics
// ============================================================================

/**
 * Pre-computed metrics for districts/regions.
 * Materialized view or nightly rollup for performance.
 */
export interface DistrictMetric {
  district_id: number;       // Foreign key to districts
  layer_id: string;          // Which layer this metric comes from
  metric_key: string;        // "mean_crime", "median_rent", "peak_load"
  value: number;             // Computed aggregate value
  sim_date: string;          // ISO date string for temporal tracking
  computed_at: number;       // Real timestamp of computation
}

// ============================================================================
// 6. AGENTS - Human & Institutional Entities
// ============================================================================

export type Ideology = 'liberal' | 'conservative' | 'populist' | 'apathetic' | 'radical';
export type GovernanceModel = 'democracy' | 'autocracy' | 'technocracy' | 'anarchy';

/**
 * Household agent - represents residential population unit
 */
export interface Household {
  household_id: string;      // UUID
  home_tile: number;         // FK to tiles
  income_bucket: number;     // 0-10 income decile
  ideology: Ideology;        // Political leaning
  stress: number;            // Current stress level (0.0-1.0)
  population: number;        // Number of people in household
  metadata?: Record<string, unknown>;
}

export type BusinessSector = 'manufacturing' | 'retail' | 'health' | 'tech' | 'gang' | 'utility';

/**
 * Business/institutional agent - factories, shops, gangs, utilities
 */
export interface Business {
  business_id: string;       // UUID
  sector: BusinessSector;    // Type of business
  hq_tile: number;           // FK to tiles - headquarters location
  output_var?: string;       // Variable this business produces: "widgets_ph"
  payroll: number;           // Total employment cost
  employees: number;         // Headcount
  revenue: number;           // Annual revenue
  metadata?: Record<string, unknown>;
}

// ============================================================================
// 7. POLICIES & GOVERNANCE
// ============================================================================

/**
 * Policy instrument - player-adjustable lever that affects simulation
 */
export interface PolicyInstrument {
  policy_id: string;         // UUID
  display_name: string;      // "Carbon Tax Rate"
  gov_model: GovernanceModel; // Which governance system can use this
  var_target: string;        // Variable this policy controls
  min_value: number;         // Slider minimum
  max_value: number;         // Slider maximum
  step_size: number;         // Increment size
  current_value: number;     // Current setting
  legitimacy_test_fn?: string; // Function to check if policy is valid
  description?: string;      // Help text for players
}

/**
 * Policy change log - audit trail of player actions
 */
export interface PolicyChange {
  change_id: number;         // Primary key
  policy_id: string;         // FK to policy_instruments
  old_value: number;         // Previous value
  new_value: number;         // New value
  timestamp: number;         // When change occurred (sim time)
  player_id?: string;        // Who made the change (multiplayer)
}

// ============================================================================
// 8. SNAPSHOTS - Timeline Management
// ============================================================================

/**
 * Snapshot metadata for saving/loading simulation states
 */
export interface Snapshot {
  snapshot_id: string;       // UUID
  name: string;              // User-friendly name
  description?: string;      // Notes about this snapshot
  sim_time: number;          // Simulation clock value at snapshot
  real_time: number;         // Real-world timestamp
  random_seed?: number;      // For reproducibility
  policy_state: Record<string, number>; // All policy values at snapshot time
  layer_states: string[];    // List of included layer IDs
  compressed_data?: string;  // Base64-encoded Parquet/compressed data
}

// ============================================================================
// 9. PLUGIN SYSTEM - Hot-Swappable Layers
// ============================================================================

/**
 * Layer plugin definition - allows modders to add custom layers
 */
export interface LayerPlugin {
  id: string;                // Unique layer identifier (namespaced)
  display_name: string;      // UI display name
  canonical_hue: string;     // Default color
  variables: string[];       // Variable keys this layer manages
  reads?: string[];          // Dependencies on other layers
  writes?: string[];         // Variables published to global bus
  tick_rate: number;         // Update frequency (sim hours)
  update_fn: string;         // Module path: "mods/cyber_layer.wasm"
  blend_mode?: BlendMode;    // How to composite (default: overlay)
  priority?: number;         // Draw order (default: 100)
  category?: LayerCategory;  // Grouping (default: custom)
  schema_version: string;    // Plugin API version: "1.0.0"
}

// ============================================================================
// 10. RENDERING & VISUALIZATION
// ============================================================================

/**
 * Tile rendering data - prepared for GPU instancing
 */
export interface TileRenderData {
  tile_id: number;
  position: [number, number, number]; // x, y, z in 3D space
  color: [number, number, number, number]; // RGBA
  height: number;            // Extrusion for 3D visualization
  layer_id: string;          // Which layer generated this
}

/**
 * Layer stack render state - controls how layers composite
 */
export interface LayerStackState {
  active_layers: string[];   // Ordered list (bottom to top)
  solo_layer?: string;       // If set, only this layer renders
  conflict_highlight: boolean; // Show tiles with variable conflicts
  opacity_overrides: Record<string, number>; // Per-layer opacity
}

// ============================================================================
// 11. SIMULATION ENGINE STATE
// ============================================================================

/**
 * Core simulation clock and state
 */
export interface SimulationState {
  sim_time: number;          // Current simulation time (ms since epoch)
  tick_count: number;        // Number of ticks elapsed
  paused: boolean;           // Is simulation running?
  speed: number;             // Playback speed multiplier (0.5x, 1x, 2x, etc.)
  random_seed: number;       // For deterministic runs
}

/**
 * Variable conflict resolution configuration
 */
export type ConflictResolutionMode = 'priority' | 'weighted' | 'first_write' | 'last_write';

export interface ConflictResolver {
  mode: ConflictResolutionMode;
  weights?: Record<string, number>; // Layer weights for weighted mode
}

// ============================================================================
// 12. DEFAULT LAYER CONFIGURATIONS
// ============================================================================

/**
 * Default layers that ship with the simulation
 */
export const DEFAULT_LAYERS: Omit<Layer, 'layer_id'>[] = [
  {
    display_name: 'Economic',
    category: 'economic',
    canonical_hue: '#2563eb',
    tick_rate: 24,
    blend_mode: 'overlay',
    priority: 100,
    opacity: 0.8,
    visible: true,
    variables: ['gdp', 'unemployment', 'rent', 'business_count']
  },
  {
    display_name: 'Social',
    category: 'social',
    canonical_hue: '#10b981',
    tick_rate: 12,
    blend_mode: 'overlay',
    priority: 90,
    opacity: 0.8,
    visible: true,
    variables: ['happiness', 'crime_idx', 'edu_score', 'health_idx']
  },
  {
    display_name: 'Environmental',
    category: 'environmental',
    canonical_hue: '#14b8a6',
    tick_rate: 48,
    blend_mode: 'overlay',
    priority: 80,
    opacity: 0.8,
    visible: true,
    variables: ['emissions', 'tree_canopy', 'heat_island', 'water_quality']
  },
  {
    display_name: 'Psyche',
    category: 'social',
    canonical_hue: '#8b5cf6',
    tick_rate: 6,
    blend_mode: 'overlay',
    priority: 110,
    opacity: 0.7,
    visible: false,
    variables: ['stress', 'optimism', 'meme_virality', 'social_cohesion']
  },
  {
    display_name: 'Politics',
    category: 'politics',
    canonical_hue: '#f43f5e',
    tick_rate: 168, // Weekly
    blend_mode: 'overlay',
    priority: 95,
    opacity: 0.75,
    visible: false,
    variables: ['faction_a', 'faction_b', 'protest_potential', 'legitimacy']
  },
  {
    display_name: 'Infrastructure - Sewer',
    category: 'infrastructure',
    canonical_hue: '#06b6d4',
    tick_rate: 72,
    blend_mode: 'overlay',
    priority: 70,
    opacity: 0.6,
    visible: false,
    variables: ['pipe_age', 'leak_risk', 'overflow', 'maintenance_score']
  },
  {
    display_name: 'Infrastructure - Transport',
    category: 'infrastructure',
    canonical_hue: '#eab308',
    tick_rate: 2,
    blend_mode: 'overlay',
    priority: 105,
    opacity: 0.85,
    visible: false,
    variables: ['traffic_load', 'bus_headway', 'bike_flow', 'congestion']
  }
];

// ============================================================================
// 13. UTILITY TYPES
// ============================================================================

/**
 * Generic database query result wrapper
 */
export interface QueryResult<T> {
  data: T[];
  count: number;
  error?: Error;
}

/**
 * Batch update operation for performance
 */
export interface BatchUpdate<T> {
  operation: 'insert' | 'update' | 'delete';
  records: T[];
}
