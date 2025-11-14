/**
 * Layer Renderer - Visual Compositing Engine
 *
 * Handles layer-to-color conversion, blend modes, and GPU-ready render data.
 * Converts layer variables into visual representation for Three.js rendering.
 */

import type {
  Layer,
  TileRenderData,
  LayerStackState,
  BlendMode
} from '../types/dataModel';
import { layerDB } from '../database/LayerDB';
import { layerRegistry } from './LayerRegistry';

/**
 * Color utilities
 */
class ColorUtils {
  /**
   * Convert hex color to RGB array
   */
  static hexToRgb(hex: string): [number, number, number] {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (!result) return [0, 0, 0];

    return [
      parseInt(result[1], 16) / 255,
      parseInt(result[2], 16) / 255,
      parseInt(result[3], 16) / 255
    ];
  }

  /**
   * Convert RGB to hex
   */
  static rgbToHex(r: number, g: number, b: number): string {
    const toHex = (n: number) => {
      const hex = Math.round(n * 255).toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    };
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  }

  /**
   * Apply opacity to RGB
   */
  static applyOpacity(
    rgb: [number, number, number],
    opacity: number
  ): [number, number, number, number] {
    return [...rgb, Math.max(0, Math.min(1, opacity))];
  }

  /**
   * Normalize a value to 0-1 range for color intensity
   */
  static normalize(value: number, min: number, max: number): number {
    return Math.max(0, Math.min(1, (value - min) / (max - min)));
  }
}

/**
 * Blend mode implementations
 */
class BlendModes {
  /**
   * Overlay blend mode
   */
  static overlay(
    base: [number, number, number, number],
    top: [number, number, number, number]
  ): [number, number, number, number] {
    const alpha = top[3];
    return [
      base[0] * (1 - alpha) + top[0] * alpha,
      base[1] * (1 - alpha) + top[1] * alpha,
      base[2] * (1 - alpha) + top[2] * alpha,
      Math.min(1, base[3] + top[3])
    ];
  }

  /**
   * Additive blend mode
   */
  static add(
    base: [number, number, number, number],
    top: [number, number, number, number]
  ): [number, number, number, number] {
    return [
      Math.min(1, base[0] + top[0] * top[3]),
      Math.min(1, base[1] + top[1] * top[3]),
      Math.min(1, base[2] + top[2] * top[3]),
      Math.min(1, base[3] + top[3])
    ];
  }

  /**
   * Multiply blend mode
   */
  static multiply(
    base: [number, number, number, number],
    top: [number, number, number, number]
  ): [number, number, number, number] {
    return [
      base[0] * top[0],
      base[1] * top[1],
      base[2] * top[2],
      Math.min(1, base[3] + top[3])
    ];
  }

  /**
   * XOR blend mode (useful for conflict visualization)
   */
  static xor(
    base: [number, number, number, number],
    top: [number, number, number, number]
  ): [number, number, number, number] {
    return [
      Math.abs(base[0] - top[0]),
      Math.abs(base[1] - top[1]),
      Math.abs(base[2] - top[2]),
      Math.min(1, base[3] + top[3])
    ];
  }

  /**
   * Priority blend mode (top layer fully replaces base)
   */
  static priority(
    _base: [number, number, number, number],
    top: [number, number, number, number]
  ): [number, number, number, number] {
    return top;
  }

  /**
   * Apply blend mode
   */
  static blend(
    mode: BlendMode,
    base: [number, number, number, number],
    top: [number, number, number, number]
  ): [number, number, number, number] {
    switch (mode) {
      case 'overlay':
        return this.overlay(base, top);
      case 'add':
        return this.add(base, top);
      case 'multiply':
        return this.multiply(base, top);
      case 'xor':
        return this.xor(base, top);
      case 'priority':
        return this.priority(base, top);
      default:
        return this.overlay(base, top);
    }
  }
}

/**
 * Main layer rendering engine
 */
export class LayerRenderer {
  private stackState: LayerStackState = {
    active_layers: [],
    conflict_highlight: false,
    opacity_overrides: {}
  };

  /**
   * Set the current layer stack state
   */
  setStackState(state: Partial<LayerStackState>): void {
    this.stackState = { ...this.stackState, ...state };
  }

  /**
   * Get current stack state
   */
  getStackState(): LayerStackState {
    return this.stackState;
  }

  /**
   * Generate render data for all visible layers
   * Returns array of tile render data ready for GPU instancing
   */
  async generateRenderData(): Promise<TileRenderData[]> {
    // Get visible layers sorted by priority
    const layers = await this.getActiveLayersOrdered();

    if (layers.length === 0) {
      return [];
    }

    // Get all tiles
    const tilesResult = await layerDB.getAll(layerDB.constructor.name === 'LayerDB' ? 'tiles' : 'tiles');
    const tiles = tilesResult.data as any[];

    const renderData: TileRenderData[] = [];

    for (const tile of tiles) {
      const tileId = tile.tile_id;

      // Composite all layers for this tile
      const compositedColor = await this.compositeTileLayers(tileId, layers);

      // Calculate height based on layer data (for 3D extrusion)
      const height = await this.calculateTileHeight(tileId, layers);

      renderData.push({
        tile_id: tileId,
        position: [tile.x, tile.y, tile.z],
        color: compositedColor,
        height,
        layer_id: layers[layers.length - 1].layer_id // Top layer ID
      });
    }

    return renderData;
  }

  /**
   * Get active layers in render order (bottom to top)
   */
  private async getActiveLayersOrdered(): Promise<Layer[]> {
    let layers: Layer[];

    // Solo mode - only show solo layer
    if (this.stackState.solo_layer) {
      const soloLayer = layerRegistry.getLayer(this.stackState.solo_layer);
      return soloLayer ? [soloLayer] : [];
    }

    // Get visible layers
    layers = await layerRegistry.getVisibleLayers();

    // Filter by active layers if specified
    if (this.stackState.active_layers.length > 0) {
      layers = layers.filter(l => this.stackState.active_layers.includes(l.layer_id));
    }

    return layers;
  }

  /**
   * Composite all layer colors for a single tile
   */
  private async compositeTileLayers(
    tileId: number,
    layers: Layer[]
  ): Promise<[number, number, number, number]> {
    let composited: [number, number, number, number] = [0, 0, 0, 0]; // Transparent black

    for (const layer of layers) {
      // Get primary variable for this layer (first in variables array)
      const primaryVar = layer.variables[0];
      if (!primaryVar) continue;

      const variable = await layerDB.getVariable(tileId, layer.layer_id, primaryVar);
      if (!variable || typeof variable.value !== 'number') continue;

      // Convert variable value to color intensity
      const intensity = await this.normalizeValue(
        variable.value,
        layer.layer_id,
        primaryVar
      );

      // Get layer color
      const baseColor = ColorUtils.hexToRgb(layer.canonical_hue);

      // Apply intensity to color (darker = lower value, brighter = higher value)
      const layerColor: [number, number, number, number] = [
        baseColor[0] * intensity,
        baseColor[1] * intensity,
        baseColor[2] * intensity,
        this.stackState.opacity_overrides[layer.layer_id] ?? layer.opacity
      ];

      // Blend with composite
      composited = BlendModes.blend(layer.blend_mode, composited, layerColor);
    }

    return composited;
  }

  /**
   * Normalize a variable value to 0-1 range based on observed min/max
   */
  private async normalizeValue(
    value: number,
    layerId: string,
    varKey: string
  ): Promise<number> {
    // Get all values for this variable to find range
    const allVars = await layerDB.getLayerVariables(layerId, varKey);
    const values = allVars
      .map(v => v.value)
      .filter(v => typeof v === 'number') as number[];

    if (values.length === 0) return 0.5;

    const min = Math.min(...values);
    const max = Math.max(...values);

    return ColorUtils.normalize(value, min, max);
  }

  /**
   * Calculate tile height for 3D extrusion
   * Uses primary variable from top-priority layer
   */
  private async calculateTileHeight(
    tileId: number,
    layers: Layer[]
  ): Promise<number> {
    if (layers.length === 0) return 0;

    const topLayer = layers[layers.length - 1];
    const primaryVar = topLayer.variables[0];
    if (!primaryVar) return 0;

    const variable = await layerDB.getVariable(tileId, topLayer.layer_id, primaryVar);
    if (!variable || typeof variable.value !== 'number') return 0;

    // Normalize to reasonable height (0-10 units)
    const normalized = await this.normalizeValue(
      variable.value,
      topLayer.layer_id,
      primaryVar
    );

    return normalized * 10;
  }

  /**
   * Generate heat map data for a specific variable
   * Useful for visualization and debugging
   */
  async generateHeatMap(
    layerId: string,
    varKey: string
  ): Promise<Map<number, number>> {
    const variables = await layerDB.getLayerVariables(layerId, varKey);
    const heatMap = new Map<number, number>();

    for (const variable of variables) {
      if (typeof variable.value === 'number') {
        heatMap.set(variable.tile_id, variable.value);
      }
    }

    return heatMap;
  }

  /**
   * Highlight conflict tiles
   * Returns tile IDs where layers have significant disagreement
   */
  async getConflictTiles(varKey: string): Promise<number[]> {
    // This would use the EventBus conflict detection
    // For now, return empty array
    return [];
  }

  /**
   * Export current frame as static image data
   * Useful for timeline comparisons
   */
  async exportFrame(): Promise<{
    tiles: TileRenderData[];
    layers: Layer[];
    timestamp: number;
  }> {
    const tiles = await this.generateRenderData();
    const layers = await this.getActiveLayersOrdered();

    return {
      tiles,
      layers,
      timestamp: Date.now()
    };
  }
}

// Singleton instance
export const layerRenderer = new LayerRenderer();
