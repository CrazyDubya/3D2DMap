# Layer Stack Data Model - Complete Documentation

## Overview

This is a comprehensive implementation of a layer-based city simulation system inspired by Photoshop-style layer stacks, designed for maximum modularity, hot-swappable plugins, and real-time 3D visualization.

## Architecture

The system uses a **hybrid relational + key-value data model** that provides:
- **Structured relationships** for tiles, layers, agents, and policies
- **Flexible variable storage** via entity-component pattern
- **Event-driven communication** between layers
- **Hot-swappable plugins** for modders
- **Persistent browser storage** via IndexedDB

### Core Components

```
┌─────────────────────────────────────────────────────────┐
│                    Simulation Engine                     │
│  • Manages simulation loop                               │
│  • Coordinates layer updates                             │
│  • Processes events                                      │
└─────────────────┬───────────────────────────────────────┘
                  │
    ┌─────────────┼─────────────┐
    │             │             │
┌───▼────┐  ┌────▼────┐  ┌────▼────┐
│ Layer  │  │ Event   │  │ Layer   │
│Registry│  │ Bus     │  │Renderer │
└───┬────┘  └────┬────┘  └────┬────┘
    │            │            │
    │     ┌──────▼──────┐     │
    └────▶│   LayerDB   │◀────┘
          │  (IndexedDB)│
          └─────────────┘
```

## Data Model

### 1. Spatial Spine - Tiles

Every piece of data anchors to a tile in 3D space:

```typescript
interface Tile {
  tile_id: number;      // Primary key
  x: number;            // Axial X coordinate
  y: number;            // Axial Y coordinate
  z: number;            // Height slice
  district_id?: number; // Optional grouping
  mask?: Polygon;       // Fine-grained collision
}
```

### 2. Layer Catalogue

Layers are independent data sheets stacked on the city grid:

```typescript
interface Layer {
  layer_id: string;         // UUID
  display_name: string;     // "Economic" or "Psyche - Stress"
  category: LayerCategory;  // economic, social, environmental, etc.
  canonical_hue: string;    // #2563eb (visual color)
  tick_rate: number;        // Sim-hours between updates
  blend_mode: BlendMode;    // overlay, add, multiply, xor, priority
  priority: number;         // Draw order (higher = on top)
  opacity: number;          // 0.0 to 1.0
  visible: boolean;         // Is layer active?
  variables: string[];      // ["gdp", "unemployment", "rent"]
  reads?: string[];         // Dependencies on other layers
  writes?: string[];        // Variables published to bus
}
```

### 3. Layer Variables - The Multi-Layer Spreadsheet

Entity-component-style storage for massive scale:

```typescript
interface LayerVariable {
  tile_id: number;       // Which tile
  layer_id: string;      // Which layer
  var_key: string;       // "stress", "gdp", "pipe_age"
  value: number | JSON;  // Numeric or small blob
  timestamp: number;     // Last write (ms)
}
```

**Composite key:** `[tile_id, layer_id, var_key]`

**Indexes:**
- `(layer_id, var_key)` - Fast layer sweeps
- `(tile_id)` - Hover tooltips (all vars for a tile)
- `(timestamp)` - Time-series queries

### 4. Event Queue

Decouples layer communication:

```typescript
interface SimulationEvent {
  event_id: number;          // Auto-increment
  ts_due: number;            // When to fire (sim time)
  layer_id: string;          // Publisher
  event_type: string;        // "heat_wave", "protest", "recession"
  payload: JSON;             // Event-specific data
  status: EventStatus;       // pending, processing, done, canceled
}
```

## Default Layers

The system ships with 7 default layers:

| Layer | Color | Variables | Tick Rate | Purpose |
|-------|-------|-----------|-----------|---------|
| **Economic** | Blue `#2563eb` | gdp, unemployment, rent, business_count | 24h | Foundation - economic activity |
| **Social** | Green `#10b981` | happiness, crime_idx, edu_score, health | 12h | Social indicators |
| **Environmental** | Teal `#14b8a6` | emissions, tree_canopy, heat_island, water_quality | 48h | Ecological systems |
| **Psyche** | Violet `#8b5cf6` | stress, optimism, meme_virality, social_cohesion | 6h | Psychological climate |
| **Politics** | Red `#f43f5e` | faction_a, faction_b, protest_potential, legitimacy | 168h | Political dynamics |
| **Infrastructure - Sewer** | Cyan `#06b6d4` | pipe_age, leak_risk, overflow, maintenance | 72h | Underground utilities |
| **Infrastructure - Transport** | Amber `#eab308` | traffic_load, bus_headway, bike_flow, congestion | 2h | Transportation systems |

## Layer Interaction Patterns

### 1. Replacement
A new layer overrides a variable from a core layer:
```typescript
// CryptoLayer replaces Economic layer's money_supply
await eventBus.publishVariable(tileId, 'crypto_layer', 'money_supply', tokenValue);
```

### 2. Competition
Multiple layers write to the same variable; resolver picks winner:
```typescript
// Two political factions compete for district_policy
// Higher legitimacy wins (priority mode)
eventBus.setConflictResolver({ mode: 'priority' });
```

### 3. Interlock
Layer B only fires if Layer A crosses a threshold:
```typescript
// Disease layer triggers when Sewer overflow flag is set
const overflow = await layerDB.getVariable(tileId, 'sewer_layer', 'overflow');
if (overflow?.value > 0.5) {
  await eventBus.publishVariable(tileId, 'disease_layer', 'infection_rate', 0.8);
}
```

### 4. Feedback Loop
Layers continuously read each other:
```typescript
// Heat ⟷ Stress feedback
// Heat increases stress → stress reduces tree planting → heat increases
```

## Plugin System

### Creating a Custom Layer

```typescript
const myPlugin: LayerPlugin = {
  id: "cyber_security",
  display_name: "Cyber Security",
  canonical_hue: "#0ea5e9",
  variables: ["server_load", "hack_risk", "firewall_strength"],
  reads: ["economic.gdp"],  // Reads from Economic layer
  writes: ["hack_risk"],     // Publishes hack_risk to bus
  tick_rate: 4,              // Update every 4 sim-hours
  update_fn: "mods/cyber.js", // Module path
  blend_mode: "overlay",
  category: "custom",
  schema_version: "1.0.0"
};

// Register plugin
const layerId = await layerRegistry.registerPlugin(myPlugin);
```

### Update Function Template

```typescript
export async function updateCyberLayer(
  state: SimulationState,
  layerId: string
): Promise<void> {
  const tiles = await layerDB.getAll('tiles');

  for (const tile of tiles.data) {
    const tileId = tile.tile_id;

    // Read dependencies
    const gdp = await layerDB.getVariable(tileId, 'economic_layer', 'gdp');

    // Compute new values
    const serverLoad = (gdp?.value || 100) * 0.01;
    const hackRisk = serverLoad > 5 ? 0.8 : 0.2;

    // Publish variables
    await eventBus.publishVariable(tileId, layerId, 'server_load', serverLoad);
    await eventBus.publishVariable(tileId, layerId, 'hack_risk', hackRisk);

    // Generate events
    if (hackRisk > 0.7) {
      await eventBus.publishEvent(
        layerId,
        'cyber_attack',
        state.sim_time + 1000 * 60 * 30, // 30 min later
        { tile_id: tileId, severity: hackRisk }
      );
    }
  }
}
```

## Rendering & Visualization

### Blend Modes

```typescript
type BlendMode = 'overlay' | 'add' | 'multiply' | 'xor' | 'priority';
```

- **overlay**: Standard alpha blending (default)
- **add**: Additive blending (bright hotspots)
- **multiply**: Darkens overlaps (shadows)
- **xor**: Highlights differences (conflict visualization)
- **priority**: Top layer fully replaces base

### Color Mapping

Each layer converts its primary variable to color intensity:

```typescript
// Value normalization (0-1)
const intensity = (value - min) / (max - min);

// Apply to layer's canonical color
const color = [
  baseColor.r * intensity,
  baseColor.g * intensity,
  baseColor.b * intensity,
  layer.opacity
];
```

### 3D Height Extrusion

Tile height is driven by the top-priority layer's primary variable:

```typescript
const height = normalizedValue * 10; // Scale to 0-10 units
```

## Usage Example

### Initialize and Run Simulation

```typescript
import { simulationEngine } from './simulation/SimulationEngine';
import { layerRegistry } from './layers/LayerRegistry';

// Initialize
await simulationEngine.initialize();

// Start simulation
simulationEngine.start();

// Adjust speed
simulationEngine.setSpeed(2); // 2x speed

// Subscribe to updates
simulationEngine.onTick(async (state) => {
  console.log(`Sim time: ${state.sim_time}, Tick: ${state.tick_count}`);

  // Get render data
  const renderData = await simulationEngine.getRenderData();
  // ... update 3D scene
});
```

### Layer Management

```typescript
import { layerRegistry } from './layers/LayerRegistry';

// Toggle layer visibility
await layerRegistry.setLayerVisibility('economic_layer', false);

// Adjust opacity
await layerRegistry.setLayerOpacity('psyche_layer', 0.5);

// Solo a layer
await layerRegistry.soloLayer('environmental_layer');

// Reorder layers (drag-drop simulation)
await layerRegistry.reorderLayers([
  'economic_layer',
  'social_layer',
  'psyche_layer'
]);
```

### Reading Layer Data

```typescript
import { layerDB } from './database/LayerDB';

// Get all variables for a tile (hover tooltip)
const vars = await layerDB.getTileVariables(42);
// → [
//     { tile_id: 42, layer_id: 'economic', var_key: 'gdp', value: 250 },
//     { tile_id: 42, layer_id: 'psyche', var_key: 'stress', value: 0.65 },
//     ...
//   ]

// Get specific variable
const stress = await layerDB.getVariable(42, 'psyche_layer', 'stress');
// → { tile_id: 42, layer_id: 'psyche_layer', var_key: 'stress', value: 0.65 }

// Get all tiles for a layer variable (heat map)
const allStress = await layerDB.getLayerVariables('psyche_layer', 'stress');
```

### Creating Snapshots

```typescript
// Save current state
const snapshotId = await simulationEngine.createSnapshot(
  'Pre-Carbon-Tax',
  'State before implementing carbon policy'
);

// Later: Load snapshot for A/B comparison
// (Full implementation would restore from snapshot)
```

## UI Components

### LayerPalette

```tsx
import { LayerPalette } from './components/LayerPalette';

function App() {
  return <LayerPalette onLayerChange={() => console.log('Layer changed')} />;
}
```

**Features:**
- ✓ Drag to reorder (sets priority)
- ✓ Eye icon to toggle visibility
- ✓ Scroll wheel over opacity bar for quick adjustment
- ✓ 'S' button for solo mode
- ✓ '×' button to remove layer
- ✓ Filter to hide/show inactive layers
- ✓ Conflict highlight (coming soon)

## Performance Optimizations

### Sparse Storage

Only store variables that differ from default:
- 90% of tiles may use city-wide defaults
- Only exception tiles write to `layer_vars`

### Event-Driven Updates

Layers sleep until a watched variable changes:
```typescript
eventBus.subscribeToVariable('heat_island', async (variable) => {
  // Only wake up when heat changes
  if (variable.value > 35) {
    // Trigger stress update
  }
});
```

### Batched Writes

```typescript
// Bad: 10,000 individual inserts
for (const tile of tiles) {
  await layerDB.insert('layer_vars', variable);
}

// Good: Single batch operation
await layerDB.bulkInsert('layer_vars', variables);
```

### GPU-Side Rendering

The `LayerRenderer` outputs data ready for GPU instancing:
```typescript
const renderData = await layerRenderer.generateRenderData();
// → [{ tile_id, position: [x,y,z], color: [r,g,b,a], height }]

// Use with Three.js InstancedMesh (1 draw call for 10k tiles)
```

## Conflict Resolution

When multiple layers write to the same variable:

```typescript
// Set resolution mode
eventBus.setConflictResolver({
  mode: 'weighted',
  weights: {
    'economic_layer': 1.5,  // Economic has 1.5x weight
    'psyche_layer': 1.0
  }
});

// Modes:
// - 'priority': Highest layer.priority wins
// - 'weighted': Weighted average of all values
// - 'first_write': First writer wins (immutable)
// - 'last_write': Last writer wins (always current)
```

## Debugging & Inspection

### Conflict Tiles

```typescript
const conflicts = await eventBus.getConflictTiles('stress', 0.2);
// → [42, 87, 103]  (tile IDs with high variance)
```

### Heat Maps

```typescript
const heatMap = await layerRenderer.generateHeatMap('economic_layer', 'gdp');
// → Map { 0 => 120, 1 => 340, 2 => 89, ... }
```

### Export Plugin

```typescript
const plugin = layerRegistry.exportLayerPlugin('cyber_layer');
// → { id, display_name, variables, update_fn, ... }
// Save to JSON for sharing with modders
```

## Directory Structure

```
src/
├── types/
│   └── dataModel.ts           # Type definitions
├── database/
│   └── LayerDB.ts             # IndexedDB abstraction
├── layers/
│   ├── EventBus.ts            # Pub/sub + conflict resolution
│   ├── LayerRegistry.ts       # Plugin management
│   ├── LayerRenderer.ts       # Visual compositing
│   └── defaultLayers/
│       ├── EconomicLayer.ts   # Default layer implementations
│       ├── PsycheLayer.ts
│       ├── EnvironmentalLayer.ts
│       └── index.ts
├── simulation/
│   └── SimulationEngine.ts    # Main orchestrator
├── components/
│   └── LayerPalette.tsx       # UI component
└── examples/
    └── LayerSystemDemo.tsx    # Full demo app
```

## Future Extensions

### Multi-Scale Agent System

The design in your notes about multi-scale LLM agents maps perfectly:

- **Macro tier** (10k-1M agents): Write to aggregate district metrics
- **Meso tier** (100-10k): Individual households/businesses in database
- **Micro tier** (10-500): Named NPCs with full state
- **Router**: Uses layer variables (stress, density) to decide escalation

### Comparative Lens

Split-view A/B comparison:
```typescript
// Load two snapshots side-by-side
const leftSnapshot = await loadSnapshot('baseline');
const rightSnapshot = await loadSnapshot('carbon_tax_scenario');

// Render both, highlight differences
```

### Causal Trace

Click a tile → show why a variable has its current value:
```
GDP drop at tile 42:
├─ 42% pollution (Environmental layer)
├─ 28% commute time (Transport layer)
└─ 30% crime (Social layer)
```

## License

MIT

## Contributors

Built for the 3D2DMap city simulation project.

---

**Questions or issues?** Check the examples folder or open an issue on GitHub.
