import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

function GlobeView({ 
  rotation, 
  onRotationChange, 
  showGraticule, 
  projectionParams,
  isUnfolding 
}) {
  const mountRef = useRef(null)
  const sceneRef = useRef(null)
  const rendererRef = useRef(null)
  const globeRef = useRef(null)
  const graticuleRef = useRef(null)
  const animationRef = useRef(null)
  const [isInteracting, setIsInteracting] = useState(false)

  useEffect(() => {
    if (!mountRef.current) return

    const width = mountRef.current.clientWidth
    const height = mountRef.current.clientHeight

    // Scene setup
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x0a1a2a)
    sceneRef.current = scene

    // Camera setup
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000)
    camera.position.z = 3

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(window.devicePixelRatio)
    rendererRef.current = renderer
    mountRef.current.appendChild(renderer.domElement)

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6)
    scene.add(ambientLight)
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
    directionalLight.position.set(1, 1, 1)
    scene.add(directionalLight)

    // Create Earth sphere
    const geometry = new THREE.SphereGeometry(1, 64, 32)
    
    // Create a simple Earth-like material instead of loading external texture
    const material = new THREE.MeshLambertMaterial({ 
      color: 0x4a7c59, // Earth green color
      transparent: true
    })
    
    const globe = new THREE.Mesh(geometry, material)
    globeRef.current = globe
    scene.add(globe)

    // Create graticule
    createGraticule(scene)

    // Mouse interaction
    let isDragging = false
    let previousMousePosition = { x: 0, y: 0 }

    const onMouseDown = (event) => {
      isDragging = true
      setIsInteracting(true)
      previousMousePosition = { x: event.clientX, y: event.clientY }
    }

    const onMouseMove = (event) => {
      if (!isDragging) return

      const deltaX = event.clientX - previousMousePosition.x
      const deltaY = event.clientY - previousMousePosition.y

      const newRotation = {
        x: rotation.x - deltaY * 0.01,
        y: rotation.y + deltaX * 0.01
      }

      // Clamp x rotation to prevent flipping
      newRotation.x = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, newRotation.x))

      onRotationChange(newRotation)
      previousMousePosition = { x: event.clientX, y: event.clientY }
    }

    const onMouseUp = () => {
      isDragging = false
      setIsInteracting(false)
    }

    renderer.domElement.addEventListener('mousedown', onMouseDown)
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', onMouseUp)

    // Animation loop
    const animate = () => {
      animationRef.current = requestAnimationFrame(animate)
      
      if (globeRef.current) {
        globeRef.current.rotation.x = rotation.x
        globeRef.current.rotation.y = rotation.y
        
        // Add unfold animation effect
        if (isUnfolding) {
          const time = Date.now() * 0.005
          globeRef.current.material.opacity = 0.8 + 0.2 * Math.sin(time)
          
          // Add a subtle pulsing scale
          const scale = 1 + 0.05 * Math.sin(time * 2)
          globeRef.current.scale.setScalar(scale)
        } else {
          globeRef.current.material.opacity = 1
          globeRef.current.scale.setScalar(1)
        }
        
        // Sync graticule rotation
        if (graticuleRef.current) {
          graticuleRef.current.rotation.x = rotation.x
          graticuleRef.current.rotation.y = rotation.y
          graticuleRef.current.visible = showGraticule
        }
      }
      
      renderer.render(scene, camera)
    }
    animate()

    // Handle resize
    const handleResize = () => {
      const newWidth = mountRef.current?.clientWidth || width
      const newHeight = mountRef.current?.clientHeight || height
      
      camera.aspect = newWidth / newHeight
      camera.updateProjectionMatrix()
      renderer.setSize(newWidth, newHeight)
    }
    
    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      renderer.domElement.removeEventListener('mousedown', onMouseDown)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)
      window.removeEventListener('resize', handleResize)
      
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement)
      }
      renderer.dispose()
    }
  }, [])

  // Update rotation when props change
  useEffect(() => {
    if (globeRef.current) {
      globeRef.current.rotation.x = rotation.x
      globeRef.current.rotation.y = rotation.y
    }
    if (graticuleRef.current) {
      graticuleRef.current.rotation.x = rotation.x
      graticuleRef.current.rotation.y = rotation.y
    }
  }, [rotation])

  const createGraticule = (scene) => {
    const graticuleGroup = new THREE.Group()
    graticuleRef.current = graticuleGroup
    
    const material = new THREE.LineBasicMaterial({ 
      color: 0x888888, 
      transparent: true, 
      opacity: 0.5 
    })
    
    // Create meridians (longitude lines)
    for (let lon = -180; lon <= 180; lon += 15) {
      const points = []
      for (let lat = -90; lat <= 90; lat += 2) {
        const phi = lat * Math.PI / 180
        const theta = lon * Math.PI / 180
        
        const x = Math.cos(phi) * Math.cos(theta)
        const y = Math.sin(phi)
        const z = Math.cos(phi) * Math.sin(theta)
        
        points.push(new THREE.Vector3(x, y, z).multiplyScalar(1.01))
      }
      
      const geometry = new THREE.BufferGeometry().setFromPoints(points)
      const line = new THREE.Line(geometry, material)
      graticuleGroup.add(line)
    }
    
    // Create parallels (latitude lines)
    for (let lat = -75; lat <= 75; lat += 15) {
      const points = []
      const phi = lat * Math.PI / 180
      
      for (let lon = -180; lon <= 180; lon += 2) {
        const theta = lon * Math.PI / 180
        
        const x = Math.cos(phi) * Math.cos(theta)
        const y = Math.sin(phi)
        const z = Math.cos(phi) * Math.sin(theta)
        
        points.push(new THREE.Vector3(x, y, z).multiplyScalar(1.01))
      }
      
      const geometry = new THREE.BufferGeometry().setFromPoints(points)
      const line = new THREE.Line(geometry, material)
      graticuleGroup.add(line)
    }
    
    scene.add(graticuleGroup)
  }

  return (
    <div 
      ref={mountRef} 
      style={{ 
        width: '100%', 
        height: '100%', 
        cursor: isInteracting ? 'grabbing' : 'grab' 
      }} 
    />
  )
}

export default GlobeView