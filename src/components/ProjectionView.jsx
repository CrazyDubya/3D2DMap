import React, { useEffect, useRef } from 'react'
import * as d3 from 'd3'
import { createProjection } from '../utils/projections'

function ProjectionView({ 
  projection: projectionName, 
  params, 
  showGraticule, 
  showTissot,
  globeRotation,
  isUnfolding 
}) {
  const canvasRef = useRef(null)
  const worldDataRef = useRef(null)

  // Load world data
  useEffect(() => {
    const loadWorldData = async () => {
      try {
        // Try to load local fallback data first
        const response = await fetch('/data/world-simple.json')
        const worldData = await response.json()
        worldDataRef.current = {
          countries: worldData,
          land: worldData
        }
      } catch (error) {
        console.warn('Could not load world data:', error)
        // Create a very simple world outline as fallback
        worldDataRef.current = {
          countries: {
            type: 'FeatureCollection',
            features: [
              {
                type: 'Feature',
                properties: { name: 'World' },
                geometry: {
                  type: 'Polygon',
                  coordinates: [[
                    [-180, -60], [180, -60], [180, 60], [-180, 60], [-180, -60]
                  ]]
                }
              }
            ]
          },
          land: {
            type: 'FeatureCollection', 
            features: []
          }
        }
      }
    }
    loadWorldData()
  }, [])

  useEffect(() => {
    if (!worldDataRef.current) return

    const canvas = canvasRef.current
    if (!canvas) return

    const context = canvas.getContext('2d')
    const width = canvas.clientWidth
    const height = canvas.clientHeight
    
    // Set canvas resolution
    canvas.width = width * window.devicePixelRatio
    canvas.height = height * window.devicePixelRatio
    context.scale(window.devicePixelRatio, window.devicePixelRatio)

    // Clear canvas
    context.clearRect(0, 0, width, height)
    context.fillStyle = '#0a1a2a'
    context.fillRect(0, 0, width, height)

    try {
      // Create projection
      const projection = createProjection(projectionName, {
        ...params,
        scale: params.scale * Math.min(width, height) / 400
      }).translate([width / 2, height / 2])

      const path = d3.geoPath(projection, context)

      // Draw sphere background
      context.beginPath()
      path({ type: 'Sphere' })
      context.fillStyle = '#1e3a5f'
      context.fill()

      // Draw countries
      if (worldDataRef.current.countries.features.length > 0) {
        context.beginPath()
        path(worldDataRef.current.countries)
        context.fillStyle = '#4a7c59'
        context.fill()
        context.strokeStyle = '#2c5530'
        context.lineWidth = 0.5
        context.stroke()
      }

      // Draw graticule
      if (showGraticule) {
        const graticule = d3.geoGraticule()
        context.beginPath()
        path(graticule())
        context.strokeStyle = 'rgba(255, 255, 255, 0.3)'
        context.lineWidth = 0.5
        context.stroke()

        // Draw 10° graticule
        const graticule10 = d3.geoGraticule().step([10, 10])
        context.beginPath()
        path(graticule10())
        context.strokeStyle = 'rgba(255, 255, 255, 0.5)'
        context.lineWidth = 0.5
        context.stroke()
      }

      // Draw Tissot's indicatrices
      if (showTissot) {
        drawTissotIndicatrices(context, path, projection)
      }

      // Add unfold animation effect
      if (isUnfolding) {
        context.fillStyle = 'rgba(255, 255, 255, 0.1)'
        context.fillRect(0, 0, width, height)
        
        // Add pulsing effect
        const time = Date.now() * 0.01
        context.strokeStyle = `rgba(74, 144, 226, ${0.5 + 0.3 * Math.sin(time)})`
        context.lineWidth = 2
        context.beginPath()
        path({ type: 'Sphere' })
        context.stroke()
      }

    } catch (error) {
      console.error('Error rendering projection:', error)
      // Draw error message
      context.fillStyle = 'white'
      context.font = '16px sans-serif'
      context.textAlign = 'center'
      context.fillText('Error rendering projection', width / 2, height / 2)
    }
  }, [projectionName, params, showGraticule, showTissot, globeRotation, isUnfolding, worldDataRef.current])

  const drawTissotIndicatrices = (context, path, projection) => {
    const step = 30 // Draw every 30 degrees
    
    for (let lon = -180; lon <= 180; lon += step) {
      for (let lat = -90; lat <= 90; lat += step) {
        if (Math.abs(lat) > 85) continue // Skip near poles
        
        // Create a small circle at this point
        const circle = d3.geoCircle().center([lon, lat]).radius(5)
        
        try {
          const projected = projection([lon, lat])
          if (projected) {
            context.beginPath()
            path(circle())
            context.strokeStyle = 'rgba(255, 100, 100, 0.7)'
            context.lineWidth = 1
            context.stroke()
          }
        } catch (error) {
          // Skip invalid projections
          continue
        }
      }
    }
  }

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: '100%',
        height: '100%',
        display: 'block'
      }}
    />
  )
}

export default ProjectionView