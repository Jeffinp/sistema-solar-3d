import React, { Suspense } from 'react';
import { OrbitControls, Stars, Sky } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import * as THREE from 'three';
import Sun from './Sun';
import Planet from './Planet';
import { PLANETS_DATA } from '../../constants/solarSystem';

function Controls() {
  const { camera } = useThree();

  return (
    <OrbitControls
      camera={camera}
      enableDamping={true}
      dampingFactor={0.05}
      minDistance={20}
      maxDistance={500}
      enablePan={true}
      enableZoom={true}
      rotateSpeed={0.5}
    />
  );
}

export default function SolarSystem() {
  return (
    <Suspense fallback={null}>
      {/* Ambiente */}
      <ambientLight intensity={0.1} />
      <Stars
        radius={300}
        depth={60}
        count={20000}
        factor={7}
        saturation={0}
        fade
        speed={1}
      />
      <Sky
        distance={450000}
        sunPosition={[0, 1, 0]}
        inclination={0}
        azimuth={0.25}
      />

      {/* Controles */}
      <Controls />

      {/* Sol */}
      <Sun />

      {/* Planetas */}
      {Object.entries(PLANETS_DATA).map(([key, planet]) => (
        <Planet
          key={key}
          {...planet}
        />
      ))}

      {/* Fog para dar profundidade */}
      <fog attach="fog" args={['#000000', 100, 1000]} />
    </Suspense>
  );
}