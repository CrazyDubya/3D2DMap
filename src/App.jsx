import React, { useState, useEffect } from 'react'
import ProjectionControls from './components/ProjectionControls'
import GlobeView from './components/GlobeView'
import ProjectionView from './components/ProjectionView'
import { projectionRegistry } from './utils/projections'

function App() {
  const [selectedProjection, setSelectedProjection] = useState('equalEarth')
  const [projectionParams, setProjectionParams] = useState({
    centerLon: 0,
    centerLat: 0,
    rotation: 0,
    scale: 150
  })
  const [showGraticule, setShowGraticule] = useState(true)
  const [showTissot, setShowTissot] = useState(false)
  const [isUnfolding, setIsUnfolding] = useState(false)
  const [globeRotation, setGlobeRotation] = useState({ x: 0, y: 0 })

  const handleProjectionChange = (projectionName) => {
    setSelectedProjection(projectionName)
    // Reset some parameters when changing projection
    const projection = projectionRegistry[projectionName]
    if (projection && projection.defaultParams) {
      setProjectionParams(prev => ({
        ...prev,
        ...projection.defaultParams
      }))
    }
  }

  const handleParamChange = (param, value) => {
    setProjectionParams(prev => ({
      ...prev,
      [param]: value
    }))
  }

  const handleUnfold = () => {
    setIsUnfolding(true)
    // Reset after animation (3 seconds)
    setTimeout(() => setIsUnfolding(false), 3000)
  }

  return (
    <div className="app">
      <header className="header">
        <h1>3D-to-2D Projection Lab</h1>
        <p>Interactive exploration of map projections and their distortions</p>
      </header>
      
      <div className="main-container">
        <div className="controls-panel">
          <ProjectionControls
            selectedProjection={selectedProjection}
            projectionParams={projectionParams}
            showGraticule={showGraticule}
            showTissot={showTissot}
            onProjectionChange={handleProjectionChange}
            onParamChange={handleParamChange}
            onGraticuleToggle={setShowGraticule}
            onTissotToggle={setShowTissot}
            onUnfold={handleUnfold}
            isUnfolding={isUnfolding}
          />
        </div>
        
        <div className="visualization-container">
          <div className="globe-container">
            <div className="view-title">3D Globe</div>
            <GlobeView
              rotation={globeRotation}
              onRotationChange={setGlobeRotation}
              showGraticule={showGraticule}
              projectionParams={projectionParams}
              isUnfolding={isUnfolding}
            />
          </div>
          
          <div className="projection-container">
            <div className="view-title">
              {projectionRegistry[selectedProjection]?.name || selectedProjection} Projection
            </div>
            <ProjectionView
              projection={selectedProjection}
              params={projectionParams}
              showGraticule={showGraticule}
              showTissot={showTissot}
              globeRotation={globeRotation}
              isUnfolding={isUnfolding}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App