import React from 'react'
import { projectionRegistry } from '../utils/projections'

function ProjectionControls({
  selectedProjection,
  projectionParams,
  showGraticule,
  showTissot,
  onProjectionChange,
  onParamChange,
  onGraticuleToggle,
  onTissotToggle,
  onUnfold,
  isUnfolding
}) {
  const currentProjection = projectionRegistry[selectedProjection]

  return (
    <div className="controls">
      <div className="control-group">
        <label htmlFor="projection-select">Map Projection</label>
        <select
          id="projection-select"
          value={selectedProjection}
          onChange={(e) => onProjectionChange(e.target.value)}
        >
          {Object.entries(projectionRegistry).map(([key, proj]) => (
            <option key={key} value={key}>
              {proj.name}
            </option>
          ))}
        </select>
        {currentProjection && (
          <div style={{ fontSize: '0.8rem', marginTop: '0.5rem', opacity: 0.8 }}>
            {currentProjection.description}
          </div>
        )}
      </div>

      <div className="control-group">
        <label htmlFor="center-lon">Central Longitude: {projectionParams.centerLon}°</label>
        <input
          type="range"
          id="center-lon"
          min="-180"
          max="180"
          step="5"
          value={projectionParams.centerLon}
          onChange={(e) => onParamChange('centerLon', parseFloat(e.target.value))}
        />
      </div>

      <div className="control-group">
        <label htmlFor="center-lat">Central Latitude: {projectionParams.centerLat}°</label>
        <input
          type="range"
          id="center-lat"
          min="-90"
          max="90"
          step="5"
          value={projectionParams.centerLat}
          onChange={(e) => onParamChange('centerLat', parseFloat(e.target.value))}
        />
      </div>

      <div className="control-group">
        <label htmlFor="rotation">Rotation: {projectionParams.rotation}°</label>
        <input
          type="range"
          id="rotation"
          min="-180"
          max="180"
          step="5"
          value={projectionParams.rotation}
          onChange={(e) => onParamChange('rotation', parseFloat(e.target.value))}
        />
      </div>

      <div className="control-group">
        <label htmlFor="scale">Scale: {projectionParams.scale}</label>
        <input
          type="range"
          id="scale"
          min="50"
          max="500"
          step="10"
          value={projectionParams.scale}
          onChange={(e) => onParamChange('scale', parseFloat(e.target.value))}
        />
      </div>

      <div className="checkbox-control">
        <input
          type="checkbox"
          id="show-graticule"
          checked={showGraticule}
          onChange={(e) => onGraticuleToggle(e.target.checked)}
        />
        <label htmlFor="show-graticule">Show Graticule</label>
      </div>

      <div className="checkbox-control">
        <input
          type="checkbox"
          id="show-tissot"
          checked={showTissot}
          onChange={(e) => onTissotToggle(e.target.checked)}
        />
        <label htmlFor="show-tissot">Show Tissot's Indicatrices</label>
      </div>

      <button
        className="unfold-button"
        onClick={onUnfold}
        disabled={isUnfolding}
      >
        {isUnfolding ? 'Unfolding...' : 'Unfold Globe → Projection'}
      </button>

      {currentProjection && (
        <div className="control-group" style={{ marginTop: '2rem', fontSize: '0.85rem' }}>
          <strong>Projection Properties:</strong>
          <div style={{ marginTop: '0.5rem' }}>
            <div>• Conformal: {currentProjection.properties.conformal ? 'Yes' : 'No'}</div>
            <div>• Equal Area: {currentProjection.properties.equalArea ? 'Yes' : 'No'}</div>
            <div>• Compromise: {currentProjection.properties.compromise ? 'Yes' : 'No'}</div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProjectionControls