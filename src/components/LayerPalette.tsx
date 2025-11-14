/**
 * Layer Palette UI Component
 *
 * Drag-reorder, solo, mute, and opacity controls for the layer stack.
 * Inspired by Photoshop/GIMP layer panels.
 */

import React, { useState, useEffect } from 'react';
import type { Layer } from '../types/dataModel';
import { layerRegistry } from '../layers/LayerRegistry';

interface LayerPaletteProps {
  onLayerChange?: () => void;
}

interface LayerItemProps {
  layer: Layer;
  onToggleVisibility: (layerId: string) => void;
  onOpacityChange: (layerId: string, opacity: number) => void;
  onSolo: (layerId: string) => void;
  onRemove: (layerId: string) => void;
}

/**
 * Individual layer item in the palette
 */
const LayerItem: React.FC<LayerItemProps> = ({
  layer,
  onToggleVisibility,
  onOpacityChange,
  onSolo,
  onRemove
}) => {
  const [showOpacitySlider, setShowOpacitySlider] = useState(false);

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.05 : 0.05;
    const newOpacity = Math.max(0, Math.min(1, layer.opacity + delta));
    onOpacityChange(layer.layer_id, newOpacity);
  };

  return (
    <div
      className="layer-item"
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: '8px',
        marginBottom: '4px',
        backgroundColor: layer.visible ? '#2a2a2a' : '#1a1a1a',
        borderRadius: '4px',
        borderLeft: `4px solid ${layer.canonical_hue}`,
        cursor: 'grab',
        transition: 'background-color 0.2s'
      }}
      onWheel={handleWheel}
    >
      {/* Visibility toggle */}
      <button
        onClick={() => onToggleVisibility(layer.layer_id)}
        style={{
          width: '24px',
          height: '24px',
          marginRight: '8px',
          background: 'none',
          border: '1px solid #666',
          borderRadius: '3px',
          color: layer.visible ? '#fff' : '#666',
          cursor: 'pointer',
          fontSize: '12px'
        }}
        title={layer.visible ? 'Hide layer' : 'Show layer'}
      >
        {layer.visible ? '👁' : ''}
      </button>

      {/* Layer name and info */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div
          style={{
            fontSize: '13px',
            fontWeight: 500,
            color: '#fff',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }}
        >
          {layer.display_name}
        </div>
        <div style={{ fontSize: '11px', color: '#888' }}>
          {layer.category} • {layer.blend_mode}
        </div>
      </div>

      {/* Opacity bar */}
      <div
        style={{
          width: '60px',
          height: '8px',
          background: '#1a1a1a',
          borderRadius: '4px',
          marginRight: '8px',
          overflow: 'hidden',
          cursor: 'pointer'
        }}
        onClick={() => setShowOpacitySlider(!showOpacitySlider)}
        title={`Opacity: ${Math.round(layer.opacity * 100)}%`}
      >
        <div
          style={{
            width: `${layer.opacity * 100}%`,
            height: '100%',
            background: `linear-gradient(to right, ${layer.canonical_hue}, ${layer.canonical_hue}dd)`,
            transition: 'width 0.2s'
          }}
        />
      </div>

      {/* Solo button (Shift+click equivalent) */}
      <button
        onClick={() => onSolo(layer.layer_id)}
        style={{
          width: '24px',
          height: '24px',
          marginRight: '4px',
          background: 'none',
          border: '1px solid #666',
          borderRadius: '3px',
          color: '#888',
          cursor: 'pointer',
          fontSize: '10px'
        }}
        title="Solo this layer (hide all others)"
      >
        S
      </button>

      {/* Remove button */}
      <button
        onClick={() => onRemove(layer.layer_id)}
        style={{
          width: '24px',
          height: '24px',
          background: 'none',
          border: '1px solid #666',
          borderRadius: '3px',
          color: '#666',
          cursor: 'pointer',
          fontSize: '12px'
        }}
        title="Remove layer"
      >
        ×
      </button>

      {/* Opacity slider overlay */}
      {showOpacitySlider && (
        <div
          style={{
            position: 'absolute',
            right: '100px',
            background: '#333',
            padding: '8px',
            borderRadius: '4px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
            zIndex: 1000
          }}
        >
          <input
            type="range"
            min="0"
            max="100"
            value={layer.opacity * 100}
            onChange={(e) => onOpacityChange(layer.layer_id, parseInt(e.target.value) / 100)}
            style={{ width: '120px' }}
          />
          <div style={{ textAlign: 'center', fontSize: '11px', color: '#aaa', marginTop: '4px' }}>
            {Math.round(layer.opacity * 100)}%
          </div>
        </div>
      )}
    </div>
  );
};

/**
 * Main Layer Palette component
 */
export const LayerPalette: React.FC<LayerPaletteProps> = ({ onLayerChange }) => {
  const [layers, setLayers] = useState<Layer[]>([]);
  const [filter, setFilter] = useState({
    showAsleep: true,
    conflictHighlight: false
  });

  // Load layers on mount
  useEffect(() => {
    loadLayers();
  }, []);

  const loadLayers = async () => {
    const allLayers = layerRegistry.getAllLayers();
    setLayers(allLayers);
  };

  const handleToggleVisibility = async (layerId: string) => {
    const layer = layers.find(l => l.layer_id === layerId);
    if (layer) {
      await layerRegistry.setLayerVisibility(layerId, !layer.visible);
      await loadLayers();
      onLayerChange?.();
    }
  };

  const handleOpacityChange = async (layerId: string, opacity: number) => {
    await layerRegistry.setLayerOpacity(layerId, opacity);
    await loadLayers();
    onLayerChange?.();
  };

  const handleSolo = async (layerId: string) => {
    await layerRegistry.soloLayer(layerId);
    await loadLayers();
    onLayerChange?.();
  };

  const handleRemove = async (layerId: string) => {
    if (confirm('Are you sure you want to remove this layer?')) {
      await layerRegistry.removeLayer(layerId);
      await loadLayers();
      onLayerChange?.();
    }
  };

  const handleUnsoloAll = async () => {
    await layerRegistry.unsoloAll();
    await loadLayers();
    onLayerChange?.();
  };

  // Filter layers
  const filteredLayers = layers.filter(layer => {
    if (!filter.showAsleep && !layer.visible) return false;
    return true;
  });

  // Sort by priority (higher = later in visual stack)
  const sortedLayers = [...filteredLayers].sort((a, b) => a.priority - b.priority);

  return (
    <div
      className="layer-palette"
      style={{
        width: '300px',
        height: '100%',
        backgroundColor: '#1e1e1e',
        padding: '12px',
        overflowY: 'auto',
        fontFamily: 'system-ui, -apple-system, sans-serif'
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: '16px' }}>
        <h3 style={{ color: '#fff', fontSize: '14px', fontWeight: 600, margin: '0 0 8px 0' }}>
          Layer Stack
        </h3>
        <div style={{ fontSize: '11px', color: '#888' }}>
          {sortedLayers.length} layers • {sortedLayers.filter(l => l.visible).length} visible
        </div>
      </div>

      {/* Filters */}
      <div style={{ marginBottom: '12px', paddingBottom: '12px', borderBottom: '1px solid #333' }}>
        <label style={{ display: 'flex', alignItems: 'center', fontSize: '12px', color: '#aaa', marginBottom: '6px' }}>
          <input
            type="checkbox"
            checked={filter.showAsleep}
            onChange={(e) => setFilter({ ...filter, showAsleep: e.target.checked })}
            style={{ marginRight: '6px' }}
          />
          Show hidden layers
        </label>
        <label style={{ display: 'flex', alignItems: 'center', fontSize: '12px', color: '#aaa' }}>
          <input
            type="checkbox"
            checked={filter.conflictHighlight}
            onChange={(e) => setFilter({ ...filter, conflictHighlight: e.target.checked })}
            style={{ marginRight: '6px' }}
          />
          Conflict highlight
        </label>
      </div>

      {/* Layer list */}
      <div style={{ marginBottom: '12px' }}>
        {sortedLayers.map(layer => (
          <LayerItem
            key={layer.layer_id}
            layer={layer}
            onToggleVisibility={handleToggleVisibility}
            onOpacityChange={handleOpacityChange}
            onSolo={handleSolo}
            onRemove={handleRemove}
          />
        ))}
      </div>

      {/* Actions */}
      <div style={{ display: 'flex', gap: '8px' }}>
        <button
          onClick={handleUnsoloAll}
          style={{
            flex: 1,
            padding: '8px',
            background: '#333',
            border: 'none',
            borderRadius: '4px',
            color: '#aaa',
            fontSize: '11px',
            cursor: 'pointer'
          }}
        >
          Unsolo All
        </button>
        <button
          onClick={() => {/* TODO: Add layer dialog */}}
          style={{
            flex: 1,
            padding: '8px',
            background: '#2a6a3a',
            border: 'none',
            borderRadius: '4px',
            color: '#fff',
            fontSize: '11px',
            cursor: 'pointer'
          }}
        >
          + Add Layer
        </button>
      </div>

      {/* Help text */}
      <div
        style={{
          marginTop: '16px',
          padding: '12px',
          background: '#252525',
          borderRadius: '4px',
          fontSize: '11px',
          color: '#888',
          lineHeight: '1.5'
        }}
      >
        <strong style={{ color: '#aaa' }}>Tips:</strong><br />
        • Scroll wheel over opacity bar to adjust quickly<br />
        • Drag to reorder (higher = draws on top)<br />
        • 'S' button = solo mode<br />
        • Alt+click = conflict highlight (soon)
      </div>
    </div>
  );
};
