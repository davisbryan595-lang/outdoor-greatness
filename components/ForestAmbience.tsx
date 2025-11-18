'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ForestAmbience() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [showToggle, setShowToggle] = useState(true)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const hidingTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    // Create audio element for forest ambience
    const audioElement = new Audio()
    audioElement.src = 'https://assets.mixkit.co/active_storage/sfx/2704/2704-preview.mp3'
    audioElement.loop = true
    audioElement.volume = 0.3
    audioRef.current = audioElement

    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
      }
    }
  }, [])

  const handleToggle = () => {
    if (isPlaying) {
      audioRef.current?.pause()
      setIsPlaying(false)
    } else {
      audioRef.current?.play()
      setIsPlaying(true)
    }

    // Auto-hide toggle after 3 seconds if not playing
    if (!isPlaying) {
      if (hidingTimeoutRef.current) {
        clearTimeout(hidingTimeoutRef.current)
      }
      hidingTimeoutRef.current = setTimeout(() => {
        setShowToggle(false)
      }, 3000)
    }
  }

  const handleMouseEnter = () => {
    setShowToggle(true)
    if (hidingTimeoutRef.current) {
      clearTimeout(hidingTimeoutRef.current)
    }
  }

  const handleMouseLeave = () => {
    if (!isPlaying) {
      hidingTimeoutRef.current = setTimeout(() => {
        setShowToggle(false)
      }, 2000)
    }
  }

  return (
    <AnimatePresence>
      {showToggle && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="fixed top-20 right-6 z-40 pointer-events-auto"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <motion.button
            onClick={handleToggle}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="relative flex items-center justify-center w-14 h-14 rounded-full transition-all"
            style={{
              background: isPlaying
                ? 'linear-gradient(135deg, #84cc16 0%, #65a30d 100%)'
                : 'linear-gradient(135deg, #8B5A2B 0%, #A0714F 50%, #6B4423 100%)',
              boxShadow: isPlaying
                ? '0 0 40px rgba(132, 204, 22, 0.6)'
                : '0 0 30px rgba(139, 90, 43, 0.5)',
              border: '2px solid rgba(255, 193, 7, 0.3)',
            }}
          >
            {/* Icon */}
            <span className="text-xl">{isPlaying ? '🔊' : '🔇'}</span>

            {/* Pulsing ring when playing */}
            {isPlaying && (
              <>
                <motion.div
                  animate={{ scale: [1, 1.3], opacity: [1, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="absolute inset-0 rounded-full"
                  style={{
                    border: '2px solid rgba(132, 204, 22, 0.5)',
                  }}
                />
                <motion.div
                  animate={{ scale: [1, 1.6], opacity: [1, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
                  className="absolute inset-0 rounded-full"
                  style={{
                    border: '2px solid rgba(132, 204, 22, 0.3)',
                  }}
                />
              </>
            )}
          </motion.button>

          {/* Tooltip */}
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ delay: 0.1 }}
            className="absolute top-full mt-3 right-0 bg-black/80 backdrop-blur-sm px-4 py-2 rounded-lg whitespace-nowrap text-xs text-yellow-300 pointer-events-none"
            style={{
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)',
              border: '1px solid rgba(255, 193, 7, 0.2)',
            }}
          >
            {isPlaying ? 'Forest Ambience ON' : 'Forest Ambience OFF'}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
