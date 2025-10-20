/**
 * Economic Layer - Default Implementation
 *
 * Manages: GDP, unemployment, rent, business activity
 * Dependencies: None (foundational layer)
 * Updates: Every 24 sim-hours
 */

import type { SimulationState } from '../../types/dataModel';
import { eventBus } from '../EventBus';
import { layerDB, STORES } from '../../database/LayerDB';

/**
 * Economic layer update function
 * Simulates basic economic activity per tile
 */
export async function updateEconomicLayer(
  state: SimulationState,
  layerId: string
): Promise<void> {
  // Get all tiles
  const tilesResult = await layerDB.getAll(STORES.TILES);
  const tiles = tilesResult.data;

  for (const tile of tiles as any[]) {
    const tileId = tile.tile_id;

    // Get current economic variables or initialize
    const gdpVar = await layerDB.getVariable(tileId, layerId, 'gdp');
    const unemploymentVar = await layerDB.getVariable(tileId, layerId, 'unemployment');
    const rentVar = await layerDB.getVariable(tileId, layerId, 'rent');

    let gdp = (gdpVar?.value as number) || 100 + Math.random() * 400;
    let unemployment = (unemploymentVar?.value as number) || 0.05 + Math.random() * 0.15;
    let rent = (rentVar?.value as number) || 1000 + Math.random() * 2000;

    // Simple economic simulation
    // GDP grows with random walk + trend
    const growthRate = 0.02 + (Math.random() - 0.5) * 0.04;
    gdp *= (1 + growthRate);

    // Unemployment inversely related to GDP growth
    if (growthRate > 0.01) {
      unemployment = Math.max(0.02, unemployment - 0.005);
    } else {
      unemployment = Math.min(0.25, unemployment + 0.01);
    }

    // Rent follows GDP with lag
    const rentGrowth = growthRate * 0.5 + (Math.random() - 0.5) * 0.02;
    rent *= (1 + rentGrowth);

    // Count businesses in this tile
    const businessesResult = await layerDB.queryByIndex(
      STORES.BUSINESSES,
      'tile',
      tileId
    );
    const businessCount = businessesResult.count;

    // Publish updated variables
    await eventBus.publishVariable(tileId, layerId, 'gdp', gdp);
    await eventBus.publishVariable(tileId, layerId, 'unemployment', unemployment);
    await eventBus.publishVariable(tileId, layerId, 'rent', rent);
    await eventBus.publishVariable(tileId, layerId, 'business_count', businessCount);

    // Generate events for significant changes
    if (unemployment > 0.15) {
      await eventBus.publishEvent(
        layerId,
        'high_unemployment',
        state.sim_time + 1000 * 60 * 60, // 1 hour later
        { tile_id: tileId, unemployment_rate: unemployment }
      );
    }

    if (gdp < 80) {
      await eventBus.publishEvent(
        layerId,
        'recession',
        state.sim_time + 1000 * 60 * 60 * 24, // 1 day later
        { tile_id: tileId, gdp }
      );
    }
  }

  console.log(`[EconomicLayer] Updated ${tiles.length} tiles`);
}
