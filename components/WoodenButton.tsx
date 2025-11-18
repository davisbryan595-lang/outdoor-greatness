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
    sm: 'px-6 py-2.5 text-sm',
    md: 'px-10 py-4 text-base',
    lg: 'px-12 py-5 text-lg',
  }

  const Component = href ? 'a' : 'button'
  const props = href ? { href } : { onClick }

  return (
    <motion.div
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.93 }}
      className="relative group"
    >
      <Component
        {...props}
        className={`
          relative rounded-xl font-bebas tracking-widest
          overflow-hidden group
          transition-all duration-300 ease-out
          ${sizeClasses[size]}
          ${className}
        `}
        style={{
          background: 'linear-gradient(135deg, #8B5A2B 0%, #A0714F 50%, #8B7355 100%)',
          color: '#FFC107',
          textShadow: '2px 2px 6px rgba(0, 0, 0, 0.8)',
          boxShadow: `
            0 10px 30px rgba(139, 90, 43, 0.5),
            0 0 30px rgba(255, 193, 7, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.3),
            inset 0 -2px 4px rgba(0, 0, 0, 0.4)
          `,
          border: '2px solid rgba(255, 193, 7, 0.4)',
        } as React.CSSProperties}
      >
        {/* Wood texture overlay */}
        <div
          className="absolute inset-0 opacity-25 pointer-events-none"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                90deg,
                rgba(0, 0, 0, 0.15) 0px,
                rgba(0, 0, 0, 0.15) 2px,
                transparent 2px,
                transparent 5px
              ),
              repeating-linear-gradient(
                0deg,
                rgba(255, 255, 255, 0.05) 0px,
                rgba(255, 255, 255, 0.05) 1px,
                transparent 1px,
                transparent 3px
              )
            `,
          }}
        />

        {/* Glow effect on hover */}
        <motion.div
          className="absolute inset-0 rounded-xl pointer-events-none"
          initial={{ opacity: 0, scale: 1 }}
          whileHover={{
            opacity: 1,
          }}
          transition={{ duration: 0.3 }}
          style={{
            boxShadow: 'inset 0 0 20px rgba(255, 255, 255, 0.2)',
          }}
        />

        {/* Animated background glow on hover */}
        <motion.div
          className="absolute -inset-2 rounded-xl pointer-events-none"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 0.5 }}
          transition={{ duration: 0.3 }}
          style={{
            background: 'linear-gradient(135deg, rgba(255, 193, 7, 0.3) 0%, rgba(132, 204, 22, 0.1) 100%)',
            filter: 'blur(12px)',
            zIndex: -1,
          }}
        />

        {/* Particle effects on hover */}
        <motion.div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 rounded-full"
              initial={{
                x: '50%',
                y: '50%',
                opacity: 0,
              }}
              whileHover={{
                x: Math.cos((i / 8) * Math.PI * 2) * 40,
                y: Math.sin((i / 8) * Math.PI * 2) * 40 - 25,
                opacity: [0, 1, 0],
              }}
              transition={{ duration: 0.7 }}
              style={{
                background:
                  i % 2 === 0
                    ? 'radial-gradient(circle, #84cc16 0%, transparent 70%)'
                    : 'radial-gradient(circle, #FFC107 0%, transparent 70%)',
              }}
            />
          ))}
        </motion.div>

        {/* Content */}
        <span className="relative z-10 block font-bold uppercase letter-spacing">{children}</span>
      </Component>

      {/* Enhanced shine effect */}
      <motion.div
        className="absolute inset-0 rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, transparent 50%)',
        }}
      />

      {/* Glow ring effect */}
      <motion.div
        className="absolute -inset-1 rounded-xl pointer-events-none"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        style={{
          border: '1px solid rgba(255, 193, 7, 0.3)',
          background: 'none',
        }}
      />
    </motion.div>
  )
}
