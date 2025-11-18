'use client'

import { useEffect, useRef } from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import { Stars, Environment } from '@react-three/drei'
import * as THREE from 'three'

function FogComponent() {
  const { scene } = useThree()

  useEffect(() => {
    scene.fog = new THREE.Fog('#0f1419', 30, 100)
    return () => {
      scene.fog = null
    }
  }, [scene])

  return null
}

function ParticleField() {
  const groupRef = useRef<THREE.Group>(null)
  const pointsRef = useRef<THREE.Points>(null)

  useEffect(() => {
    if (!pointsRef.current) return

    const geometry = pointsRef.current.geometry as THREE.BufferGeometry
    const positions = geometry.attributes.position.array as Float32Array

    let time = 0
    const animate = () => {
      time += 0.001
      
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] += Math.sin(time + positions[i]) * 0.0005
      }
      geometry.attributes.position.needsUpdate = true
      requestAnimationFrame(animate)
    }
    
    animate()
  }, [])

  const particleGeometry = new THREE.BufferGeometry()
  const particleCount = 500
  const positions = new Float32Array(particleCount * 3)

  for (let i = 0; i < particleCount * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * 100
    positions[i + 1] = Math.random() * 50
    positions[i + 2] = (Math.random() - 0.5) * 100
  }

  particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

  return (
    <group ref={groupRef}>
      <points ref={pointsRef} geometry={particleGeometry}>
        <pointsMaterial size={0.3} color="#10b981" sizeAttenuation transparent opacity={0.6} />
      </points>
      <Stars radius={100} depth={50} count={1000} factor={4} saturation={0.8} />
      <Environment preset="forest" />
    </group>
  )
}

export default function AnimatedBackground() {
  return (
    <Canvas camera={{ position: [0, 0, 50], fov: 75 }}>
      <color attach="background" args={['#0f1419']} />
      <FogComponent />
      <ParticleField />
    </Canvas>
  )
}
