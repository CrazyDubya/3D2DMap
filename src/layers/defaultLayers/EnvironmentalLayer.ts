/**
 * Environmental Layer - Ecological Systems
 *
 * Manages: Emissions, tree canopy, heat island effect, water quality
 * Dependencies: Economic (business activity, GDP)
 * Updates: Every 48 sim-hours
 *
 * Demonstrates long-term environmental feedback loops.
 */

import type { SimulationState } from '../../types/dataModel';
import { eventBus } from '../EventBus';
import { layerDB, STORES } from '../../database/LayerDB';

/**
 * Environmental layer update function
 * Models environmental quality influenced by economic activity
 */
export async function updateEnvironmentalLayer(
  state: SimulationState,
  layerId: string
): Promise<void> {
  // Get all tiles
  const tilesResult = await layerDB.getAll(STORES.TILES);
  const tiles = tilesResult.data;

  // Get economic layer for dependencies
  const layers = await layerDB.getAll(STORES.LAYERS);
  const economicLayer = layers.data.find((l: any) => l.display_name === 'Economic');

  for (const tile of tiles as any[]) {
    const tileId = tile.tile_id;

    // Get current environmental variables
    const emissionsVar = await layerDB.getVariable(tileId, layerId, 'emissions');
    const treeCanopyVar = await layerDB.getVariable(tileId, layerId, 'tree_canopy');
    const heatIslandVar = await layerDB.getVariable(tileId, layerId, 'heat_island');
    const waterQualityVar = await layerDB.getVariable(tileId, layerId, 'water_quality');

    let emissions = (emissionsVar?.value as number) || 50 + Math.random() * 100;
    let treeCanopy = (treeCanopyVar?.value as number) || 15 + Math.random() * 30; // Percentage
    let heatIsland = (heatIslandVar?.value as number) || 2 + Math.random() * 3; // Degrees above baseline
    let waterQuality = (waterQualityVar?.value as number) || 70 + Math.random() * 20; // 0-100 score

    // Read economic activity
    let gdp = 100;
    let businessCount = 0;

    if (economicLayer) {
      const gdpVar = await layerDB.getVariable(
        tileId,
        (economicLayer as any).layer_id,
        'gdp'
      );
      const bizCountVar = await layerDB.getVariable(
        tileId,
        (economicLayer as any).layer_id,
        'business_count'
      );

      gdp = (gdpVar?.value as number) || 100;
      businessCount = (bizCountVar?.value as number) || 0;
    }

    // Emissions scale with economic activity
    const economicEmissions = (gdp / 100) * 30 + businessCount * 10;
    emissions = emissions * 0.9 + economicEmissions * 0.1; // Exponential moving average

    // Tree canopy slowly grows but can be reduced by development
    const developmentPressure = Math.min(10, businessCount * 0.5);
    treeCanopy = treeCanopy * 0.99 + (Math.random() * 0.5 - developmentPressure * 0.1);
    treeCanopy = Math.max(0, Math.min(100, treeCanopy));

    // Heat island effect: emissions increase heat, trees reduce it
    const emissionHeat = emissions * 0.02;
    const treeCooling = treeCanopy * 0.05;
    heatIsland = 2 + emissionHeat - treeCooling;
    heatIsland = Math.max(0, heatIsland);

    // Water quality degrades with emissions, improves with vegetation
    const emissionPollution = emissions * 0.1;
    const vegetationBenefit = treeCanopy * 0.15;
    waterQuality = waterQuality * 0.95 + (vegetationBenefit - emissionPollution) * 0.05;
    waterQuality = Math.max(0, Math.min(100, waterQuality));

    // Publish updated variables
    await eventBus.publishVariable(tileId, layerId, 'emissions', emissions);
    await eventBus.publishVariable(tileId, layerId, 'tree_canopy', treeCanopy);
    await eventBus.publishVariable(tileId, layerId, 'heat_island', heatIsland);
    await eventBus.publishVariable(tileId, layerId, 'water_quality', waterQuality);

    // Generate events for environmental crises
    if (emissions > 150) {
      await eventBus.publishEvent(
        layerId,
        'pollution_alert',
        state.sim_time + 1000 * 60 * 60 * 24, // 1 day later
        {
          tile_id: tileId,
          emissions_level: emissions,
          severity: 'high'
        }
      );
    }

    if (heatIsland > 5) {
      await eventBus.publishEvent(
        layerId,
        'heat_wave',
        state.sim_time + 1000 * 60 * 60 * 12, // 12 hours later
        {
          tile_id: tileId,
          temperature_increase: heatIsland,
          duration_hours: Math.floor(heatIsland * 2)
        }
      );
    }

    if (waterQuality < 40) {
      await eventBus.publishEvent(
        layerId,
        'water_contamination',
        state.sim_time + 1000 * 60 * 60 * 6, // 6 hours later
        {
          tile_id: tileId,
          quality_score: waterQuality,
          health_risk: 'moderate'
        }
      );
    }

    // Positive event: urban forest achievement
    if (treeCanopy > 40) {
      await eventBus.publishEvent(
        layerId,
        'urban_forest',
        state.sim_time + 1000 * 60 * 60 * 168, // 1 week later
        {
          tile_id: tileId,
          canopy_coverage: treeCanopy,
          carbon_sequestration: treeCanopy * 0.5
        }
      );
    }
  }

  console.log(`[EnvironmentalLayer] Updated ${tiles.length} tiles`);
}
