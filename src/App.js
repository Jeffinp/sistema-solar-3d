import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import SolarSystem from './components/SolarSystem';
import * as THREE from 'three';

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh', background: '#000' }}>
      <Suspense fallback={
        <div style={{
          color: 'white',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: '24px'
        }}>
          Carregando Sistema Solar...
        </div>
      }>
        <Canvas
          camera={{
            position: [0, 50, 150],
            fov: 45,
            near: 0.1,
            far: 1000
          }}
          gl={{
            antialias: true,
            toneMapping: THREE.ACESFilmicToneMapping,
            toneMappingExposure: 0.5
          }}
          style={{ background: '#000' }}
        >
          <SolarSystem />
        </Canvas>
      </Suspense>
    </div>
  );
}

export default App;
