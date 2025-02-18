import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';

export default function Planet({
    name,
    radius,
    distance,
    orbitalSpeed,
    rotationSpeed,
    textureUrl,
    description,
    facts,
    color
}) {
    const planetRef = useRef();
    const orbitRef = useRef();
    const [showInfo, setShowInfo] = useState(false);

    // Carregar textura
    const texture = new THREE.TextureLoader().load(textureUrl);

    // Criar órbita visível
    const orbitCurve = new THREE.EllipseCurve(
        0, 0,
        distance, distance,
        0, 2 * Math.PI,
        false,
        0
    );
    const orbitPoints = orbitCurve.getPoints(100);
    const orbitGeometry = new THREE.BufferGeometry().setFromPoints(orbitPoints);

    useFrame(({ clock }) => {
        const elapsedTime = clock.getElapsedTime();

        // Rotação do planeta em seu próprio eixo
        planetRef.current.rotation.y += rotationSpeed;

        // Movimento orbital
        const angle = elapsedTime * orbitalSpeed;
        const x = Math.cos(angle) * distance;
        const z = Math.sin(angle) * distance;
        planetRef.current.position.x = x;
        planetRef.current.position.z = z;
    });

    return (
        <group ref={orbitRef}>
            {/* Órbita visível */}
            <line>
                <bufferGeometry attach="geometry" {...orbitGeometry} />
                <lineBasicMaterial attach="material" color={color} opacity={0.3} transparent />
            </line>

            {/* Planeta */}
            <mesh
                ref={planetRef}
                onClick={() => setShowInfo(!showInfo)}
                onPointerOver={() => document.body.style.cursor = 'pointer'}
                onPointerOut={() => document.body.style.cursor = 'default'}
            >
                <sphereGeometry args={[radius, 32, 32]} />
                <meshStandardMaterial
                    map={texture}
                    metalness={0.4}
                    roughness={0.7}
                />

                {/* Informações do planeta */}
                {showInfo && (
                    <Html position={[radius * 2, radius * 2, 0]}>
                        <div style={{
                            background: 'rgba(0, 0, 0, 0.8)',
                            padding: '10px',
                            borderRadius: '5px',
                            color: 'white',
                            width: '200px'
                        }}>
                            <h3>{name}</h3>
                            <p>{description}</p>
                            <ul>
                                {facts.map((fact, index) => (
                                    <li key={index}>{fact}</li>
                                ))}
                            </ul>
                        </div>
                    </Html>
                )}
            </mesh>
        </group>
    );
}