/**
 * Default Layer Implementations
 *
 * Export all built-in layer update functions
 */

export { updateEconomicLayer } from './EconomicLayer';
export { updatePsycheLayer } from './PsycheLayer';
export { updateEnvironmentalLayer } from './EnvironmentalLayer';

// Import all default layers for registration
import { updateEconomicLayer } from './EconomicLayer';
import { updatePsycheLayer } from './PsycheLayer';
import { updateEnvironmentalLayer } from './EnvironmentalLayer';
import { layerRegistry } from '../LayerRegistry';

/**
 * Register all default layer update functions with the registry
 */
export function registerDefaultLayers(): void {
  layerRegistry.registerUpdateFunction('economic.update', updateEconomicLayer);
  layerRegistry.registerUpdateFunction('psyche.update', updatePsycheLayer);
  layerRegistry.registerUpdateFunction('environmental.update', updateEnvironmentalLayer);

  console.log('[DefaultLayers] Registered all default layer update functions');
}
