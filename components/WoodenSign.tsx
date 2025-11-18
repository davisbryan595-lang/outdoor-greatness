'use client'

import { motion } from 'framer-motion'
import React from 'react'

interface WoodenSignProps {
  title: string
  subtitle?: string
  children?: React.ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary'
}

export default function WoodenSign({
  title,
  subtitle,
  children,
  onClick,
  variant = 'primary',
}: WoodenSignProps) {
  const isPrimary = variant === 'primary'

  return (
    <motion.div
      whileHover={{ scale: 1.08, rotationY: 15, rotationX: -5 }}
      transition={{ type: 'spring', stiffness: 300, damping: 10 }}
      onClick={onClick}
      className="cursor-pointer relative"
      style={{ perspective: '1000px' }}
    >
      {/* Rope hanging */}
      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-1 h-6 bg-yellow-800 opacity-60" />
      <div className="absolute -top-6 left-1/2 transform -translate-x-4 w-1 h-6 bg-yellow-800 opacity-60" />

      {/* Sign */}
      <div
        className={`
          relative rounded-lg p-6 shadow-2xl overflow-hidden
          ${isPrimary ? 'min-w-[280px]' : 'min-w-[240px]'}
        `}
        style={{
          background: isPrimary
            ? 'linear-gradient(135deg, #8B5A2B 0%, #A0714F 50%, #6B4423 100%)'
            : 'linear-gradient(135deg, #A0714F 0%, #8B5A2B 50%, #5D4E37 100%)',
          boxShadow: '0 0 50px rgba(139, 90, 43, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.15)',
          transform: 'perspective(1000px) rotateY(-5deg)',
        }}
      >
        {/* Wood texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                90deg,
                rgba(0, 0, 0, 0.15) 0px,
                rgba(0, 0, 0, 0.15) 3px,
                transparent 3px,
                transparent 6px
              )
            `,
          }}
        />

        {/* Shine effect */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, transparent 60%)',
          }}
        />

        {/* Content */}
        <div className="relative z-10 text-center">
          <h3
            className="font-bebas text-2xl tracking-widest mb-2"
            style={{
              color: '#FFC107',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
              letterSpacing: '2px',
            }}
          >
            {title}
          </h3>

          {subtitle && (
            <p
              className="text-sm text-gray-200 mb-4 font-light"
              style={{
                textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
              }}
            >
              {subtitle}
            </p>
          )}

          {children}
        </div>

        {/* Decorative corners */}
        <div className="absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 border-yellow-600/40" />
        <div className="absolute top-2 right-2 w-3 h-3 border-r-2 border-t-2 border-yellow-600/40" />
        <div className="absolute bottom-2 left-2 w-3 h-3 border-l-2 border-b-2 border-yellow-600/40" />
        <div className="absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 border-yellow-600/40" />
      </div>

      {/* Shadow under sign */}
      <div
        className="absolute top-full left-1/2 transform -translate-x-1/2 w-48 h-8 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(0, 0, 0, 0.4) 0%, transparent 70%)',
          filter: 'blur(8px)',
        }}
      />
    </motion.div>
  )
}
