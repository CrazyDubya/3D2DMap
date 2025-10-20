# Layer System Quick Start Guide

## What You Just Got

A complete **layer stack data model** for city simulation with:

✅ **7 default layers** (Economic, Social, Environmental, Psyche, Politics, Infrastructure)
✅ **IndexedDB storage** (persistent in browser)
✅ **Event-driven architecture** (layers communicate via pub/sub)
✅ **Plugin system** (hot-swap custom layers)
✅ **3D rendering** (Three.js + blend modes)
✅ **UI controls** (Layer Palette with drag-reorder, solo, opacity)
✅ **Conflict resolution** (when layers fight over the same variable)

## Installation

```bash
# Already installed TypeScript and dependencies
npm install
```

## Run the Demo

### Option 1: Use the Demo Component

```bash
npm run dev
```

Then update `src/main.jsx` to mount the demo:

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { LayerSystemDemo } from './examples/LayerSystemDemo';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LayerSystemDemo />
  </React.StrictMode>
);
```

### Option 2: Use the Layer System in Your App

```typescript
import {
  simulationEngine,
  layerRegistry,
  layerRenderer,
  LayerPalette
} from './layers';

// 1. Initialize
await simulationEngine.initialize();

// 2. Start simulation
simulationEngine.start();

// 3. Render layers
const renderData = await layerRenderer.generateRenderData();
// ... use with Three.js InstancedMesh

// 4. Show UI
<LayerPalette onLayerChange={() => updateScene()} />
```

## Quick Examples

### Read a Variable

```typescript
import { layerDB } from './database/LayerDB';

// Get stress level for tile 42
const stress = await layerDB.getVariable(42, 'psyche_layer', 'stress');
console.log(stress?.value); // → 0.65
```

### Create a Custom Layer

```typescript
import { layerRegistry } from './layers/LayerRegistry';

const plugin = {
  id: "traffic_ai",
  display_name: "AI Traffic Predictor",
  canonical_hue: "#ff6b35",
  variables: ["predicted_congestion", "route_optimization"],
  tick_rate: 1, // Every sim-hour
  update_fn: "mods/traffic_ai.js",
  category: "infrastructure"
};

await layerRegistry.registerPlugin(plugin);
```

### Subscribe to Events

```typescript
import { eventBus } from './layers/EventBus';

eventBus.subscribeToEvent('heat_wave', (event) => {
  console.log('Heat wave!', event.payload);
  // → { tile_id: 42, temperature_increase: 5.2 }
});
```

### Control Simulation

```typescript
import { simulationEngine } from './simulation/SimulationEngine';

// Play/pause
simulationEngine.toggle();

// Change speed
simulationEngine.setSpeed(5); // 5x speed

// Create snapshot
await simulationEngine.createSnapshot('Pre-Policy', 'Before carbon tax');

// Reset
await simulationEngine.reset();
```

### Manage Layers

```typescript
import { layerRegistry } from './layers/LayerRegistry';

// Hide Economic layer
await layerRegistry.setLayerVisibility('economic_layer', false);

// Make Psyche layer semi-transparent
await layerRegistry.setLayerOpacity('psyche_layer', 0.5);

// Solo mode (only show Environmental)
await layerRegistry.soloLayer('environmental_layer');
```

## Architecture at a Glance

```
┌─────────────────────────────────────────┐
│     SimulationEngine (orchestrator)     │
│  • Tick loop                             │
│  • Event processing                      │
│  • State management                      │
└──────────┬──────────────────────────────┘
           │
     ┌─────┴─────┬──────────┬──────────┐
     │           │          │          │
┌────▼────┐ ┌───▼───┐ ┌───▼────┐ ┌───▼────┐
│ Layer   │ │Event  │ │Layer   │ │Layer   │
│Registry │ │ Bus   │ │Renderer│ │  DB    │
└─────────┘ └───────┘ └────────┘ └────────┘
```

## Files You Should Know

| File | Purpose |
|------|---------|
| `src/types/dataModel.ts` | Type definitions (Tile, Layer, etc.) |
| `src/database/LayerDB.ts` | IndexedDB wrapper |
| `src/layers/LayerRegistry.ts` | Plugin manager |
| `src/layers/EventBus.ts` | Pub/sub + conflict resolution |
| `src/layers/LayerRenderer.ts` | Color blending + 3D prep |
| `src/simulation/SimulationEngine.ts` | Main loop |
| `src/components/LayerPalette.tsx` | UI for managing layers |
| `src/examples/LayerSystemDemo.tsx` | Full working example |

## Default Layers

| Layer | Updates Every | Key Variables |
|-------|--------------|---------------|
| Economic | 24h | gdp, unemployment, rent |
| Social | 12h | happiness, crime, education |
| Environmental | 48h | emissions, trees, heat, water |
| Psyche | 6h | stress, optimism, memes |
| Politics | 1 week | factions, protests, legitimacy |
| Sewer | 3 days | pipe age, leaks, overflow |
| Transport | 2h | traffic, buses, bikes |

## Layer Interaction Example

**Psyche layer** reads from **Economic** and **Environmental**:

```typescript
// In PsycheLayer.ts update function
const unemployment = await layerDB.getVariable(tile, 'economic', 'unemployment');
const heatIsland = await layerDB.getVariable(tile, 'environmental', 'heat_island');

const stress = 0.2 + unemployment * 0.5 + heatIsland * 0.01;

await eventBus.publishVariable(tile, 'psyche', 'stress', stress);
```

When **Environmental** publishes a heat wave → **Psyche** stress increases → **Politics** sees protest potential rise.

## Blend Modes Explained

```typescript
// overlay: Standard alpha blending (good default)
layer.blend_mode = 'overlay';

// add: Bright hotspots (good for highlighting)
layer.blend_mode = 'add';

// multiply: Darkens overlaps (good for shadows)
layer.blend_mode = 'multiply';

// xor: Shows differences (good for conflicts)
layer.blend_mode = 'xor';

// priority: Top layer wins (no blending)
layer.blend_mode = 'priority';
```

## Performance Tips

### ✅ DO
- Use `bulkInsert` for batch writes
- Index frequently-queried fields
- Let layers sleep (event-driven updates)
- Use GPU instancing for rendering

### ❌ DON'T
- Insert variables one-by-one in a loop
- Query entire database every frame
- Update all layers every tick
- Create new geometry per frame

## Troubleshooting

### Simulation not updating?
```typescript
// Check if paused
console.log(simulationEngine.getState().paused);

// Start it
simulationEngine.start();
```

### Layers not visible?
```typescript
// Check layer visibility
const layers = await layerRegistry.getVisibleLayers();
console.log(layers);

// Show all layers
await layerRegistry.unsoloAll();
```

### No render data?
```typescript
// Check if layers have variables
const vars = await layerDB.getLayerVariables('economic_layer', 'gdp');
console.log(vars.length); // Should be > 0
```

## Next Steps

1. **Read the full docs**: See `LAYER_SYSTEM.md`
2. **Create your first plugin**: Copy `EconomicLayer.ts` as a template
3. **Add UI controls**: Integrate `LayerPalette` into your app
4. **Connect to agents**: Use multi-scale LLM system (see your notes)
5. **Build timeline comparison**: Implement snapshot loading

## Questions?

Check the example in `src/examples/LayerSystemDemo.tsx` — it's a complete working demo with:
- 3D visualization
- Layer controls
- Simulation controls
- Real-time updates

---

**Happy simulating!** 🏙️
