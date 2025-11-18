'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { useGLTF, Environment, Lightformer, Text, Stars } from '@react-three/drei'
import * as THREE from 'three'

function FloatingSign() {
  const groupRef = useRef<THREE.Group>(null)

  useEffect(() => {
    if (!groupRef.current) return

    let angle = 0
    const animate = () => {
      angle += 0.01
      if (groupRef.current) {
        groupRef.current.rotation.y = Math.sin(angle * 0.5) * 0.3
        groupRef.current.position.y = Math.sin(angle * 0.5) * 0.5
      }
      requestAnimationFrame(animate)
    }

    animate()
  }, [])

  return (
    <group ref={groupRef}>
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[3, 2, 0.3]} />
        <meshPhysicalMaterial
          color="#8B5A2B"
          roughness={0.8}
          metalness={0.2}
        />
      </mesh>
      
      <Text position={[0, 0, 0.2]} fontSize={0.4} color="#FFC107" font="/fonts/Geist_Bold.ttf">
        OUTDOOR GREATNESS
      </Text>
    </group>
  )
}

function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 5, 15], fov: 50 }}>
      <color attach="background" args={['#0f1419']} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 20, 10]} intensity={1.5} castShadow />
      <pointLight position={[-10, 10, -10]} intensity={0.8} color="#FFC107" />
      
      <Stars radius={100} depth={50} count={500} factor={3} />
      <Environment preset="sunset" />
      
      <FloatingSign />
    </Canvas>
  )
}

export default function Hero() {
  return (
    <div id="home" className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 z-0">
        <HeroScene />
      </div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-slate-950 z-5" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative z-10 text-center px-4 max-w-4xl"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-bebas text-6xl md:text-8xl tracking-wider mb-4"
          style={{
            backgroundImage: 'linear-gradient(to right, #FFC107, #FFD54F)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 0 60px rgba(255, 193, 7, 0.3)',
            filter: 'drop-shadow(0 0 30px rgba(255, 193, 7, 0.2))',
          }}
        >
          OUTDOOR GREATNESS
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-lg md:text-2xl text-gray-300 mb-8 font-light tracking-wider"
        >
          Landscaping & Tree Service Excellence
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            href="#gallery"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255, 193, 7, 0.6)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-yellow-500 text-black font-bebas tracking-wider text-lg rounded-lg shadow-lg hover:shadow-xl transition-all"
          >
            VIEW OUR WORK
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, borderColor: '#FFC107' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-yellow-500 text-yellow-400 font-bebas tracking-wider text-lg rounded-lg hover:bg-yellow-500/10 transition-all"
          >
            GET FREE ESTIMATE
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Floating particles */}
      <div className="absolute inset-0 z-5 pointer-events-none overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-green-400 rounded-full opacity-50"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: window.innerHeight + 100,
              opacity: 0,
            }}
            transition={{
              duration: Math.random() * 3 + 5,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </div>
    </div>
  )
}
