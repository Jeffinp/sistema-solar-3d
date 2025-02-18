import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { SUN_DATA } from '../../constants/solarSystem';

export default function Sun() {
    const sunRef = useRef();

    // Usar textura diretamente do SUN_DATA
    const sunTexture = new THREE.TextureLoader().load(SUN_DATA.textureUrl);

    useFrame(({ clock }) => {
        sunRef.current.rotation.y += 0.001;
    });

    return (
        <group>
            {/* Sol principal */}
            <mesh ref={sunRef}>
                <sphereGeometry args={[SUN_DATA.radius, 64, 64]} />
                <meshBasicMaterial
                    map={sunTexture}
                    emissive={SUN_DATA.emissiveColor}
                    emissiveIntensity={1}
                />
            </mesh>

            {/* Luz do sol */}
            <pointLight
                color={SUN_DATA.color}
                intensity={SUN_DATA.intensity}
                distance={1000}
                decay={2}
            />
        </group>
    );
}