'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import WoodenButton from '@/components/WoodenButton'

interface FloatingParticle {
  id: number
  x: number
  y: number
  duration: number
  delay: number
}

export default function Hero() {
  const [particles, setParticles] = useState<FloatingParticle[]>([])
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const width = typeof window !== 'undefined' ? window.innerWidth : 800
    const height = typeof window !== 'undefined' ? window.innerHeight : 600

    const particleArray: FloatingParticle[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * width,
      y: Math.random() * (height * 0.5) + height * 0.25,
      duration: Math.random() * 4 + 6,
      delay: Math.random() * 2,
    }))

    setParticles(particleArray)
  }, [])

  const titleVariants = {
    hidden: { opacity: 0, scale: 0.5, rotateX: 90 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: {
        delay: i * 0.1 + 0.5,
        duration: 0.8,
        type: 'spring',
        stiffness: 100,
      },
    }),
  }

  return (
    <div
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20"
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40 z-5 pointer-events-none" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 text-center px-3 sm:px-4 md:px-6 max-w-6xl w-full"
      >
        {/* Main Title with 3D effect */}
        <div className="mb-6 sm:mb-8 perspective">
          <motion.h1
            initial="hidden"
            animate="visible"
            className="font-bebas text-5xl sm:text-6xl md:text-8xl lg:text-9xl tracking-widest font-bold leading-tight mb-2 sm:mb-4"
            style={{
              background: 'linear-gradient(135deg, #84cc16 0%, #fbbf24 50%, #FFC107 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 0 40px rgba(132, 204, 22, 0.4)) drop-shadow(0 10px 40px rgba(255, 193, 7, 0.2))',
              textShadow: '0 0 60px rgba(132, 204, 22, 0.2)',
            }}
          >
            <motion.span custom={0} variants={titleVariants}>
              OUTDOOR
            </motion.span>
            <br />
            <motion.span custom={1} variants={titleVariants}>
              GREATNESS
            </motion.span>
          </motion.h1>
        </div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mb-8 sm:mb-10 md:mb-12"
        >
          <p
            className="text-base sm:text-lg md:text-2xl lg:text-3xl text-gray-200 font-light tracking-widest mb-1 sm:mb-2"
            style={{
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
            }}
          >
            Landscaping & Tree Service
          </p>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-yellow-300 tracking-widest">
            EXPERT CARE FOR YOUR OUTDOOR SPACE
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center mb-8 sm:mb-10 md:mb-12"
        >
          <WoodenButton href="#gallery" size="lg">
            VIEW OUR WORK
          </WoodenButton>

          <WoodenButton href="#contact" size="lg">
            GET FREE ESTIMATE
          </WoodenButton>
        </motion.div>

        {/* Floating Phone Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.5, type: 'spring' }}
          className="relative inline-block w-full sm:w-auto px-3 sm:px-0"
        >
          <motion.a
            href="tel:781-732-8301"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative flex items-center justify-center sm:justify-start gap-2 sm:gap-3 px-4 sm:px-8 py-3 sm:py-4 rounded-full font-bebas tracking-widest text-sm sm:text-base md:text-lg"
            style={{
              background: 'linear-gradient(135deg, #8B5A2B 0%, #A0714F 50%, #6B4423 100%)',
              color: '#FFD700',
              boxShadow: `
                0 0 40px rgba(255, 193, 7, 0.5),
                0 0 80px rgba(255, 193, 7, 0.2),
                inset 0 1px 0 rgba(255, 255, 255, 0.2)
              `,
              border: '2px solid rgba(255, 193, 7, 0.4)',
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.7)',
            }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              className="w-6 h-6 rounded-full"
              style={{
                background: 'radial-gradient(circle, #FFD700 0%, #FFC107 100%)',
                boxShadow: '0 0 15px rgba(255, 193, 7, 0.8)',
              }}
            />
            <span>CALL NOW</span>
            <span className="hidden sm:inline">781-732-8301</span>
          </motion.a>

          {/* Glowing ring effect */}
          <motion.div
            animate={{
              boxShadow: [
                '0 0 20px rgba(255, 193, 7, 0.5)',
                '0 0 40px rgba(255, 193, 7, 0.3)',
                '0 0 20px rgba(255, 193, 7, 0.5)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              top: '-4px',
              left: '-4px',
              right: '-4px',
              bottom: '-4px',
              border: '2px solid rgba(255, 193, 7, 0.2)',
            }}
          />
        </motion.div>
      </motion.div>

      {/* Floating leaf particles */}
      {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute pointer-events-none"
            initial={{
              x: particle.x,
              y: particle.y,
              opacity: 0,
              rotate: 0,
            }}
            animate={{
              y: window.innerHeight + 100,
              opacity: [0, 1, 1, 0],
              rotate: 360,
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            <div
              className="w-2 h-2 rounded-full"
              style={{
                background: 'radial-gradient(circle, #84cc16 0%, #65a30d 100%)',
                boxShadow: '0 0 8px rgba(132, 204, 22, 0.6)',
              }}
            />
          </motion.div>
        ))}

      {/* Forest atmosphere text hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 2, delay: 3 }}
        className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center pointer-events-none"
      >
        <motion.p
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="text-xs md:text-sm text-yellow-300/70 tracking-widest font-light"
        >
          ↓ SCROLL TO EXPLORE THE FOREST ↓
        </motion.p>
      </motion.div>
    </div>
  )
}
