/**
 * Layer System Demo
 *
 * Comprehensive example demonstrating the layer stack system,
 * including simulation, rendering, and UI interaction.
 */

import React, { useEffect, useState, useRef } from 'react';
import * as THREE from 'three';
import { LayerPalette } from '../components/LayerPalette';
import { simulationEngine } from '../simulation/SimulationEngine';
import { layerRenderer } from '../layers/LayerRenderer';
import type { SimulationState, TileRenderData } from '../types/dataModel';

/**
 * Main demo component
 */
export const LayerSystemDemo: React.FC = () => {
  const [simState, setSimState] = useState<SimulationState | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sceneRef = useRef<{
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    tiles: THREE.InstancedMesh | null;
  } | null>(null);

  // Initialize simulation on mount
  useEffect(() => {
    const init = async () => {
      try {
        await simulationEngine.initialize();
        setIsInitialized(true);

        // Subscribe to state changes
        const unsubscribe = simulationEngine.onStateChange((state) => {
          setSimState(state);
        });

        // Set initial state
        setSimState(simulationEngine.getState());

        return unsubscribe;
      } catch (error) {
        console.error('Failed to initialize simulation:', error);
      }
    };

    const cleanup = init();

    return () => {
      cleanup?.then(unsub => unsub?.());
    };
  }, []);

  // Initialize Three.js scene
  useEffect(() => {
    if (!canvasRef.current || !isInitialized) return;

    const canvas = canvasRef.current;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0a0a);

    // Camera
    const camera = new THREE.PerspectiveCamera(
      60,
      canvas.clientWidth / canvas.clientHeight,
      0.1,
      1000
    );
    camera.position.set(15, 15, 15);
    camera.lookAt(5, 0, 5);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(10, 20, 10);
    scene.add(directionalLight);

    // Grid helper
    const gridHelper = new THREE.GridHelper(10, 10, 0x444444, 0x222222);
    scene.add(gridHelper);

    sceneRef.current = {
      scene,
      camera,
      renderer,
      tiles: null
    };

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, [isInitialized]);

  // Subscribe to simulation ticks and update rendering
  useEffect(() => {
    if (!isInitialized) return;

    const unsubscribe = simulationEngine.onTick(async () => {
      await updateRendering();
    });

    // Initial render
    updateRendering();

    return () => {
      unsubscribe();
    };
  }, [isInitialized]);

  /**
   * Update 3D rendering with current layer data
   */
  const updateRendering = async () => {
    if (!sceneRef.current) return;

    const renderData = await layerRenderer.generateRenderData();
    if (renderData.length === 0) return;

    const { scene, tiles } = sceneRef.current;

    // Remove old tiles
    if (tiles) {
      scene.remove(tiles);
    }

    // Create instanced mesh for tiles
    const geometry = new THREE.BoxGeometry(0.9, 1, 0.9);
    const material = new THREE.MeshLambertMaterial({ vertexColors: true });

    const instancedMesh = new THREE.InstancedMesh(
      geometry,
      material,
      renderData.length
    );

    const matrix = new THREE.Matrix4();
    const color = new THREE.Color();

    renderData.forEach((tile, i) => {
      // Position
      matrix.setPosition(
        tile.position[0],
        tile.height / 2,
        tile.position[1]
      );

      // Scale based on height
      const scale = new THREE.Vector3(1, tile.height || 0.1, 1);
      matrix.scale(scale);

      instancedMesh.setMatrixAt(i, matrix);

      // Color
      color.setRGB(tile.color[0], tile.color[1], tile.color[2]);
      instancedMesh.setColorAt(i, color);
    });

    instancedMesh.instanceMatrix.needsUpdate = true;
    if (instancedMesh.instanceColor) {
      instancedMesh.instanceColor.needsUpdate = true;
    }

    scene.add(instancedMesh);
    sceneRef.current.tiles = instancedMesh;
  };

  /**
   * Handle layer changes from palette
   */
  const handleLayerChange = async () => {
    await updateRendering();
  };

  if (!isInitialized) {
    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        background: '#0a0a0a',
        color: '#fff',
        fontFamily: 'system-ui'
      }}>
        <div>
          <div style={{ fontSize: '24px', marginBottom: '16px' }}>Initializing Layer System...</div>
          <div style={{ fontSize: '14px', color: '#888' }}>
            Setting up database, registering layers, creating world...
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{
      display: 'flex',
      height: '100vh',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      background: '#0a0a0a'
    }}>
      {/* Layer Palette - Left Panel */}
      <div style={{ width: '320px', height: '100%', borderRight: '1px solid #333' }}>
        <LayerPalette onLayerChange={handleLayerChange} />
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Top Bar - Simulation Controls */}
        <div style={{
          height: '60px',
          background: '#1a1a1a',
          borderBottom: '1px solid #333',
          display: 'flex',
          alignItems: 'center',
          padding: '0 16px',
          gap: '16px'
        }}>
          {/* Play/Pause */}
          <button
            onClick={() => simulationEngine.toggle()}
            style={{
              padding: '8px 16px',
              background: simState?.paused ? '#2a6a3a' : '#6a2a2a',
              border: 'none',
              borderRadius: '4px',
              color: '#fff',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: 600
            }}
          >
            {simState?.paused ? '▶ Play' : '⏸ Pause'}
          </button>

          {/* Speed Control */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '12px', color: '#888' }}>Speed:</span>
            <button
              onClick={() => simulationEngine.setSpeed(0.5)}
              style={{
                padding: '4px 8px',
                background: simState?.speed === 0.5 ? '#444' : '#222',
                border: '1px solid #444',
                borderRadius: '3px',
                color: '#aaa',
                fontSize: '11px',
                cursor: 'pointer'
              }}
            >
              0.5x
            </button>
            <button
              onClick={() => simulationEngine.setSpeed(1)}
              style={{
                padding: '4px 8px',
                background: simState?.speed === 1 ? '#444' : '#222',
                border: '1px solid #444',
                borderRadius: '3px',
                color: '#aaa',
                fontSize: '11px',
                cursor: 'pointer'
              }}
            >
              1x
            </button>
            <button
              onClick={() => simulationEngine.setSpeed(2)}
              style={{
                padding: '4px 8px',
                background: simState?.speed === 2 ? '#444' : '#222',
                border: '1px solid #444',
                borderRadius: '3px',
                color: '#aaa',
                fontSize: '11px',
                cursor: 'pointer'
              }}
            >
              2x
            </button>
            <button
              onClick={() => simulationEngine.setSpeed(5)}
              style={{
                padding: '4px 8px',
                background: simState?.speed === 5 ? '#444' : '#222',
                border: '1px solid #444',
                borderRadius: '3px',
                color: '#aaa',
                fontSize: '11px',
                cursor: 'pointer'
              }}
            >
              5x
            </button>
          </div>

          {/* Sim Time */}
          <div style={{ marginLeft: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
            <div style={{ fontSize: '14px', color: '#fff', fontWeight: 600 }}>
              {simulationEngine.getFormattedTime()}
            </div>
            <div style={{ fontSize: '11px', color: '#666' }}>
              Tick {simState?.tick_count || 0}
            </div>
          </div>

          {/* Actions */}
          <button
            onClick={() => simulationEngine.createSnapshot(
              `Snapshot ${Date.now()}`,
              'User-created snapshot'
            )}
            style={{
              padding: '8px 12px',
              background: '#333',
              border: 'none',
              borderRadius: '4px',
              color: '#aaa',
              fontSize: '12px',
              cursor: 'pointer'
            }}
          >
            📸 Snapshot
          </button>

          <button
            onClick={async () => {
              if (confirm('Reset simulation?')) {
                await simulationEngine.reset();
                await updateRendering();
              }
            }}
            style={{
              padding: '8px 12px',
              background: '#333',
              border: 'none',
              borderRadius: '4px',
              color: '#aaa',
              fontSize: '12px',
              cursor: 'pointer'
            }}
          >
            🔄 Reset
          </button>
        </div>

        {/* 3D Viewport */}
        <canvas
          ref={canvasRef}
          style={{
            flex: 1,
            width: '100%',
            height: '100%',
            display: 'block'
          }}
        />

        {/* Info Overlay */}
        <div style={{
          position: 'absolute',
          bottom: '16px',
          right: '16px',
          background: 'rgba(0, 0, 0, 0.8)',
          padding: '12px',
          borderRadius: '6px',
          fontSize: '11px',
          color: '#aaa',
          maxWidth: '300px'
        }}>
          <div style={{ fontWeight: 600, marginBottom: '8px', color: '#fff' }}>
            Layer Stack Demo
          </div>
          <div style={{ lineHeight: '1.6' }}>
            • Left panel: Manage layers (visibility, opacity, reorder)<br />
            • Top bar: Control simulation speed and time<br />
            • 3D View: Live visualization of layer data<br />
            • Colors blend based on layer mode and priority<br />
            • Height represents variable intensity
          </div>
        </div>
      </div>
    </div>
  );
};
