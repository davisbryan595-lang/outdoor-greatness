'use client'

import { motion } from 'framer-motion'
import React from 'react'

interface WoodenPanelProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  hoverable?: boolean
}

export default function WoodenPanel({
  children,
  className = '',
  onClick,
  hoverable = true,
}: WoodenPanelProps) {
  return (
    <motion.div
      whileHover={hoverable ? { scale: 1.02, rotationY: 5 } : {}}
      onClick={onClick}
      className={`
        relative rounded-lg shadow-2xl overflow-hidden cursor-pointer
        backdrop-blur-sm bg-opacity-90
        border border-yellow-700/30
        ${className}
      `}
      style={{
        background: 'linear-gradient(135deg, #8B5A2B 0%, #A0714F 50%, #6B4423 100%)',
        boxShadow: '0 0 40px rgba(139, 90, 43, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
      }}
    >
      {/* Wood texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              90deg,
              rgba(0, 0, 0, 0.1) 0px,
              rgba(0, 0, 0, 0.1) 2px,
              transparent 2px,
              transparent 4px
            ),
            repeating-linear-gradient(
              0deg,
              rgba(0, 0, 0, 0.05) 0px,
              rgba(0, 0, 0, 0.05) 1px,
              transparent 1px,
              transparent 2px
            )
          `,
        }}
      />

      {/* Glossy shine */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, transparent 50%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  )
}
