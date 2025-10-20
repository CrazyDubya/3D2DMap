/**
 * Psyche Layer - Psychological Climate
 *
 * Manages: Stress, optimism, meme virality, social cohesion
 * Dependencies: Environmental (heat_island), Economic (unemployment, rent)
 * Updates: Every 6 sim-hours
 *
 * This layer demonstrates cross-layer dependencies and feedback loops.
 */

import type { SimulationState } from '../../types/dataModel';
import { eventBus } from '../EventBus';
import { layerDB, STORES } from '../../database/LayerDB';

/**
 * Psyche layer update function
 * Models psychological state influenced by multiple factors
 */
export async function updatePsycheLayer(
  state: SimulationState,
  layerId: string
): Promise<void> {
  // Get all tiles
  const tilesResult = await layerDB.getAll(STORES.TILES);
  const tiles = tilesResult.data;

  // Get layer IDs for dependencies
  const layers = await layerDB.getAll(STORES.LAYERS);
  const economicLayer = layers.data.find((l: any) => l.display_name === 'Economic');
  const envLayer = layers.data.find((l: any) => l.display_name === 'Environmental');

  for (const tile of tiles as any[]) {
    const tileId = tile.tile_id;

    // Get current psyche variables
    const stressVar = await layerDB.getVariable(tileId, layerId, 'stress');
    const optimismVar = await layerDB.getVariable(tileId, layerId, 'optimism');
    const memeViralityVar = await layerDB.getVariable(tileId, layerId, 'meme_virality');

    let stress = (stressVar?.value as number) || 0.3 + Math.random() * 0.2;
    let optimism = (optimismVar?.value as number) || 0.6 + Math.random() * 0.2;
    let memeVirality = (memeViralityVar?.value as number) || 0.1;

    // Read dependencies from other layers
    let unemploymentFactor = 0;
    let rentStressFactor = 0;
    let heatStressFactor = 0;

    if (economicLayer) {
      const unemploymentVar = await layerDB.getVariable(
        tileId,
        (economicLayer as any).layer_id,
        'unemployment'
      );
      const rentVar = await layerDB.getVariable(
        tileId,
        (economicLayer as any).layer_id,
        'rent'
      );

      unemploymentFactor = (unemploymentVar?.value as number) || 0.05;
      const rent = (rentVar?.value as number) || 1500;
      // Assume median income ~$60k/year = $5k/month
      // High rent-to-income ratio = stress
      const rentToIncomeRatio = rent / 5000;
      rentStressFactor = Math.max(0, (rentToIncomeRatio - 0.3) * 0.5);
    }

    if (envLayer) {
      const heatVar = await layerDB.getVariable(
        tileId,
        (envLayer as any).layer_id,
        'heat_island'
      );
      heatStressFactor = ((heatVar?.value as number) || 0) * 0.01;
    }

    // Calculate stress from multiple factors
    stress = 0.2 + // baseline
      unemploymentFactor * 0.5 + // unemployment drives stress
      rentStressFactor +          // high rent drives stress
      heatStressFactor;           // heat drives stress

    stress = Math.max(0, Math.min(1, stress)); // Clamp to [0, 1]

    // Optimism inversely related to stress
    optimism = 0.9 - stress * 0.8;

    // Meme virality increases with stress (people seek distraction)
    memeVirality = stress * 0.3 + Math.random() * 0.1;

    // Social cohesion decreases with high stress
    const socialCohesion = Math.max(0.2, 1 - stress * 0.6);

    // Publish updated variables
    await eventBus.publishVariable(tileId, layerId, 'stress', stress);
    await eventBus.publishVariable(tileId, layerId, 'optimism', optimism);
    await eventBus.publishVariable(tileId, layerId, 'meme_virality', memeVirality);
    await eventBus.publishVariable(tileId, layerId, 'social_cohesion', socialCohesion);

    // Generate events for critical thresholds
    if (stress > 0.7) {
      await eventBus.publishEvent(
        layerId,
        'high_stress',
        state.sim_time + 1000 * 60 * 60 * 2, // 2 hours later
        {
          tile_id: tileId,
          stress_level: stress,
          factors: {
            unemployment: unemploymentFactor,
            rent: rentStressFactor,
            heat: heatStressFactor
          }
        }
      );
    }

    // Viral meme event
    if (memeVirality > 0.5 && Math.random() < 0.1) {
      await eventBus.publishEvent(
        layerId,
        'viral_meme',
        state.sim_time + 1000 * 60 * 30, // 30 minutes later
        {
          tile_id: tileId,
          virality: memeVirality,
          spread_radius: Math.floor(memeVirality * 5)
        }
      );
    }
  }

  console.log(`[PsycheLayer] Updated ${tiles.length} tiles`);
}
