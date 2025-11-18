'use client'

import { motion } from 'framer-motion'
import React from 'react'

interface WoodenButtonProps {
  children: React.ReactNode
  onClick?: () => void
  href?: string
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export default function WoodenButton({
  children,
  onClick,
  href,
  className = '',
  size = 'md',
}: WoodenButtonProps) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-8 py-4 text-base',
    lg: 'px-10 py-5 text-lg',
  }

  const Component = href ? 'a' : 'button'
  const props = href ? { href } : { onClick }

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative"
    >
      <Component
        {...props}
        className={`
          relative rounded-lg font-bebas tracking-widest
          overflow-hidden group
          transition-all duration-300
          ${sizeClasses[size]}
          ${className}
        `}
        style={{
          background: 'linear-gradient(135deg, #8B5A2B 0%, #A0714F 50%, #6B4423 100%)',
          color: '#FFC107',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
          boxShadow: `
            0 0 20px rgba(255, 193, 7, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.2),
            inset 0 -2px 0 rgba(0, 0, 0, 0.3)
          `,
          border: '2px solid rgba(255, 193, 7, 0.3)',
        } as React.CSSProperties}
      >
        {/* Wood texture */}
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                90deg,
                rgba(0, 0, 0, 0.2) 0px,
                rgba(0, 0, 0, 0.2) 2px,
                transparent 2px,
                transparent 4px
              )
            `,
          }}
        />

        {/* Glow on hover */}
        <motion.div
          className="absolute inset-0 rounded-lg pointer-events-none"
          initial={{ opacity: 0 }}
          whileHover={{
            opacity: 1,
            boxShadow: '0 0 30px rgba(255, 193, 7, 0.8)',
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Leaf particles on hover */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-yellow-400 rounded-full"
              initial={{
                x: '50%',
                y: '50%',
                opacity: 1,
              }}
              whileHover={{
                x: Math.cos((i / 6) * Math.PI * 2) * 30,
                y: Math.sin((i / 6) * Math.PI * 2) * 30 - 20,
                opacity: 0,
              }}
              transition={{ duration: 0.6 }}
            />
          ))}
        </motion.div>

        {/* Content */}
        <span className="relative z-10 block">{children}</span>
      </Component>

      {/* Shine effect */}
      <div
        className="absolute inset-0 rounded-lg pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, transparent 60%)',
        }}
      />
    </motion.div>
  )
}
