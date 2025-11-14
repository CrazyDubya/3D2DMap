/**
 * Layer System - Main Exports
 *
 * Centralized export point for the entire layer stack system
 */

// Core types
export * from '../types/dataModel';

// Database
export { layerDB, LayerDB, STORES } from '../database/LayerDB';

// Layer management
export { layerRegistry, LayerRegistry } from './LayerRegistry';
export { eventBus, EventBus } from './EventBus';
export { layerRenderer, LayerRenderer } from './LayerRenderer';

// Default layers
export { registerDefaultLayers } from './defaultLayers';
export {
  updateEconomicLayer,
  updatePsycheLayer,
  updateEnvironmentalLayer
} from './defaultLayers';

// Simulation
export { simulationEngine, SimulationEngine } from '../simulation/SimulationEngine';

// UI Components (re-export for convenience)
export { LayerPalette } from '../components/LayerPalette';

// Example/Demo
export { LayerSystemDemo } from '../examples/LayerSystemDemo';
