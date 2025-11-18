'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-50 bg-slate-950 flex items-center justify-center"
    >
      <div className="relative w-40 h-40">
        {/* Rotating sun */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 rounded-full bg-gradient-to-b from-yellow-400 to-yellow-600 shadow-2xl"
          style={{
            boxShadow: '0 0 60px rgba(255, 193, 7, 0.8)',
          }}
        />

        {/* Pulsing rays */}
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 rounded-full border-4 border-yellow-500 opacity-30"
        />

        {/* Tree silhouette */}
        <div className="absolute inset-0 flex items-center justify-center">
          <svg viewBox="0 0 100 100" className="w-24 h-24 drop-shadow-xl">
            <path
              d="M50 80 L50 60 M50 60 Q30 50 20 35 M50 60 Q70 50 80 35 M50 60 Q35 45 25 25"
              stroke="#1A4D2E"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Text animation */}
        <motion.div
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap text-gold-yellow text-sm font-bebas tracking-wider"
        >
          GROWING YOUR OUTDOOR GREATNESS
        </motion.div>
      </div>
    </motion.div>
  )
}
