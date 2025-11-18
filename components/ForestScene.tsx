'use client'

import { useEffect, useRef } from 'react'
import { Canvas, useThree, useFrame } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import * as THREE from 'three'

// Tree geometry component - creates procedural trees with instancing for performance
function TreeGeometry() {
  const trunkGeometry = new THREE.CylinderGeometry(0.4, 0.6, 8, 8)
  const foliageGeometry = new THREE.SphereGeometry(3, 8, 8)
  
  return {
    trunk: trunkGeometry,
    foliage: foliageGeometry,
  }
}

// Instanced trees component for performance
function ForestTrees() {
  const trunkInstanceRef = useRef<THREE.InstancedMesh>(null)
  const foliageInstanceRef = useRef<THREE.InstancedMesh>(null)

  useEffect(() => {
    const treeCount = 150
    const treePositions: [number, number, number][] = []

    // Generate tree positions in a grid with randomization
    for (let x = -60; x < 60; x += 8) {
      for (let z = -100; z < 100; z += 8) {
        const offsetX = x + (Math.random() - 0.5) * 4
        const offsetZ = z + (Math.random() - 0.5) * 4
        const height = Math.random() * 2 + 6
        treePositions.push([offsetX, height / 2, offsetZ])
      }
    }

    // Place trunks
    if (trunkInstanceRef.current) {
      treePositions.forEach((pos, i) => {
        if (i < trunkInstanceRef.current!.count) {
          const matrix = new THREE.Matrix4()
          const scale = Math.random() * 0.6 + 0.8
          matrix.compose(
            new THREE.Vector3(pos[0], pos[1], pos[2]),
            new THREE.Quaternion(),
            new THREE.Vector3(scale, pos[1] / 2.5, scale)
          )
          trunkInstanceRef.current!.setMatrixAt(i, matrix)
        }
      })
      trunkInstanceRef.current.instanceMatrix.needsUpdate = true
    }

    // Place foliage
    if (foliageInstanceRef.current) {
      treePositions.forEach((pos, i) => {
        if (i < foliageInstanceRef.current!.count) {
          const matrix = new THREE.Matrix4()
          const scale = Math.random() * 0.8 + 1.2
          matrix.compose(
            new THREE.Vector3(pos[0], pos[1] + 4, pos[2]),
            new THREE.Quaternion(),
            new THREE.Vector3(scale, scale, scale)
          )
          foliageInstanceRef.current!.setMatrixAt(i, matrix)
        }
      })
      foliageInstanceRef.current.instanceMatrix.needsUpdate = true
    }
  }, [])

  const trunkGeometry = new THREE.CylinderGeometry(0.4, 0.6, 8, 8)
  const foliageGeometry = new THREE.SphereGeometry(3, 8, 8)

  return (
    <>
      {/* Tree trunks */}
      <instancedMesh
        ref={trunkInstanceRef}
        args={[trunkGeometry, undefined, 200]}
        castShadow
        receiveShadow
      >
        <meshPhysicalMaterial
          color="#5D4E37"
          roughness={0.9}
          metalness={0}
        />
      </instancedMesh>

      {/* Tree foliage */}
      <instancedMesh
        ref={foliageInstanceRef}
        args={[foliageGeometry, undefined, 200]}
        castShadow
        receiveShadow
      >
        <meshPhysicalMaterial
          color="#0F2412"
          roughness={0.8}
          metalness={0}
          flatShading={false}
          emissive="#1A4D2E"
          emissiveIntensity={0.3}
        />
      </instancedMesh>
    </>
  )
}

// Ground with grass and moss
function Ground() {
  return (
    <mesh
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, -2, 0]}
      receiveShadow
    >
      <planeGeometry args={[200, 200]} />
      <meshPhysicalMaterial
        color="#1A4D2E"
        roughness={0.95}
        metalness={0}
      />
    </mesh>
  )
}

// Volumetric light (god rays)
function VolumetricLight() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.0002
    }
  })

  return (
    <group ref={groupRef}>
      <mesh position={[20, 40, -40]} rotation={[0, 0, 0]}>
        <coneGeometry args={[15, 60, 32]} />
        <meshPhysicalMaterial
          color="#FFC107"
          emissive="#FFC107"
          emissiveIntensity={0.2}
          transparent
          opacity={0.15}
          depthWrite={false}
          side={THREE.BackSide}
        />
      </mesh>

      <mesh position={[-30, 35, 30]} rotation={[0, 0.5, 0]}>
        <coneGeometry args={[12, 50, 32]} />
        <meshPhysicalMaterial
          color="#FFC107"
          emissive="#FFC107"
          emissiveIntensity={0.15}
          transparent
          opacity={0.1}
          depthWrite={false}
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  )
}

// Particles - dust, pollen, fireflies
function Particles() {
  const dustRef = useRef<THREE.Points>(null)
  const firefliesRef = useRef<THREE.Points>(null)

  useEffect(() => {
    // Dust particles
    if (dustRef.current) {
      const dustGeometry = dustRef.current.geometry as THREE.BufferGeometry
      const positions = dustGeometry.attributes.position.array as Float32Array

      let dustTime = 0
      const animateDust = () => {
        dustTime += 0.001
        
        for (let i = 0; i < positions.length; i += 3) {
          const originalY = (dustGeometry.attributes.position.array as Float32Array)[i + 1]
          positions[i + 1] = originalY + Math.sin(dustTime + positions[i]) * 0.01
        }
        dustGeometry.attributes.position.needsUpdate = true
        requestAnimationFrame(animateDust)
      }
      animateDust()
    }

    // Fireflies
    if (firefliesRef.current) {
      const firefliesGeometry = firefliesRef.current.geometry as THREE.BufferGeometry
      const positions = firefliesGeometry.attributes.position.array as Float32Array

      let fireflyTime = 0
      const animateFireflies = () => {
        fireflyTime += 0.005
        
        for (let i = 0; i < positions.length; i += 3) {
          positions[i] += Math.sin(fireflyTime + i) * 0.03
          positions[i + 1] += Math.cos(fireflyTime + i * 0.5) * 0.02
          positions[i + 2] += Math.sin(fireflyTime + i * 0.3) * 0.03
        }
        firefliesGeometry.attributes.position.needsUpdate = true
        requestAnimationFrame(animateFireflies)
      }
      animateFireflies()
    }
  }, [])

  // Dust geometry
  const dustGeometry = new THREE.BufferGeometry()
  const dustCount = 1000
  const dustPositions = new Float32Array(dustCount * 3)

  for (let i = 0; i < dustCount * 3; i += 3) {
    dustPositions[i] = (Math.random() - 0.5) * 150
    dustPositions[i + 1] = Math.random() * 60
    dustPositions[i + 2] = (Math.random() - 0.5) * 150
  }

  dustGeometry.setAttribute('position', new THREE.BufferAttribute(dustPositions, 3))

  // Fireflies geometry
  const firefliesGeometry = new THREE.BufferGeometry()
  const firefliesCount = 40
  const firefliesPositions = new Float32Array(firefliesCount * 3)

  for (let i = 0; i < firefliesCount * 3; i += 3) {
    firefliesPositions[i] = (Math.random() - 0.5) * 100
    firefliesPositions[i + 1] = Math.random() * 50 + 5
    firefliesPositions[i + 2] = (Math.random() - 0.5) * 100
  }

  firefliesGeometry.setAttribute('position', new THREE.BufferAttribute(firefliesPositions, 3))

  return (
    <>
      {/* Dust particles */}
      <points ref={dustRef} geometry={dustGeometry}>
        <pointsMaterial
          size={0.15}
          color="#E8D4A0"
          sizeAttenuation
          transparent
          opacity={0.3}
        />
      </points>

      {/* Fireflies */}
      <points ref={firefliesRef} geometry={firefliesGeometry}>
        <pointsMaterial
          size={0.4}
          color="#FFD700"
          sizeAttenuation
          transparent
          opacity={0.8}
        />
      </points>
    </>
  )
}

// Camera controller with gentle drift
function CameraController() {
  useFrame(({ camera }) => {
    camera.position.z += 0.01
    camera.position.y = Math.sin(Date.now() * 0.0001) * 2 + 15
  })

  return null
}

// Lighting
function Lighting() {
  return (
    <>
      {/* Ambient light - forest sunlight */}
      <ambientLight intensity={0.7} color="#E8D4A0" />

      {/* Directional light - sun rays */}
      <directionalLight
        position={[30, 50, -20]}
        intensity={1.3}
        color="#FFC107"
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-left={-100}
        shadow-camera-right={100}
        shadow-camera-top={100}
        shadow-camera-bottom={-100}
      />

      {/* Fill light from other direction */}
      <directionalLight
        position={[-20, 30, 30]}
        intensity={0.8}
        color="#87CEEB"
      />

      {/* Point lights for atmosphere */}
      <pointLight position={[-40, 20, 0]} intensity={0.5} color="#1A4D2E" />
      <pointLight position={[40, 15, -30]} intensity={0.4} color="#0F2412" />
      <pointLight position={[0, 50, 0]} intensity={0.3} color="#FFD700" />
    </>
  )
}

// Fog for atmosphere
function FogComponent() {
  const { scene } = useThree()

  useEffect(() => {
    scene.fog = new THREE.Fog('#1a3a2e', 50, 180)
    return () => {
      scene.fog = null
    }
  }, [scene])

  return null
}

// Main scene wrapper
export default function ForestScene() {
  return (
    <Canvas
      camera={{ position: [0, 15, -50], fov: 60, near: 0.1, far: 500 }}
      shadows="soft"
      gl={{ antialias: true, preserveDrawingBuffer: true }}
    >
      <color attach="background" args={['#0a1f1a']} />
      
      <FogComponent />
      <Lighting />
      <CameraController />

      {/* Scene elements */}
      <Ground />
      <ForestTrees />
      <Particles />
      <VolumetricLight />
    </Canvas>
  )
}
