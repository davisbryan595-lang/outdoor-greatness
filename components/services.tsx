'use client'

import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { useRef, useEffect } from 'react'
import * as THREE from 'three'

const serviceData = [
  {
    title: 'Tree Removal & Pruning',
    description: 'Professional removal and precision pruning for healthier trees',
    icon: '🌲',
  },
  {
    title: 'Full Landscaping Design',
    description: '3D landscape design consultation and implementation',
    icon: '🏞️',
  },
  {
    title: 'Lawn Installation & Maintenance',
    description: 'Premium grass installation and year-round maintenance',
    icon: '🌱',
  },
  {
    title: 'Stump Grinding',
    description: 'Complete stump removal with land restoration',
    icon: '✂️',
  },
  {
    title: 'Emergency Storm Cleanup',
    description: '24/7 rapid response to storm damage',
    icon: '⚡',
  },
  {
    title: 'Seasonal Cleanups',
    description: 'Spring and fall maintenance for pristine outdoor spaces',
    icon: '🍂',
  },
]

function FloatingCard() {
  const meshRef = useRef<THREE.Mesh>(null)

  useEffect(() => {
    if (!meshRef.current) return

    let time = 0
    const animate = () => {
      time += 0.01
      if (meshRef.current) {
        meshRef.current.rotation.x = Math.sin(time) * 0.2
        meshRef.current.rotation.y = Math.cos(time * 0.7) * 0.2
        meshRef.current.position.y = Math.sin(time) * 0.5
      }
      requestAnimationFrame(animate)
    }

    animate()
  }, [])

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2.5, 3, 0.2]} />
      <meshPhysicalMaterial
        color="#6b5b4e"
        roughness={0.5}
        metalness={0.1}
      />
    </mesh>
  )
}

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <section id="services" className="relative py-24 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-emerald-950/30 to-slate-950 z-0" />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-7xl mx-auto"
      >
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-bebas text-5xl md:text-6xl tracking-wider mb-4">
            <span className="text-yellow-400">OUR</span> <span className="text-green-400">SERVICES</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive outdoor excellence from design to maintenance
          </p>
        </motion.div>

        {/* Services Grid */}
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {serviceData.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -20, scale: 1.02 }}
              className="relative group"
            >
              {/* Card Background with 3D depth */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-emerald-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="wooden-3d relative p-8 wooden-card rounded-2xl transition-all duration-500">
                {/* Icon */}
                <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-500">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="font-bebas text-xl tracking-wide mb-3 text-yellow-400 group-hover:text-yellow-300 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors">
                  {service.description}
                </p>

                {/* Hover accent line */}
                <motion.div
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.4 }}
                  className="mt-4 h-1 bg-gradient-to-r from-yellow-500 to-green-500 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
