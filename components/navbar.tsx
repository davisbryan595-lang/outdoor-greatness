'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import WoodenButton from '@/components/WoodenButton'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`fixed w-full top-0 z-40 transition-all duration-500 pointer-events-auto ${
        isScrolled
          ? 'bg-black/40 backdrop-blur-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.08 }}
          className="flex items-center gap-3 cursor-pointer"
        >
          <div className="w-14 h-14 relative">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F37fe508629794307b44d873859aad7cf%2Fef689bf59abe4107b56960b1072dd988?format=webp&width=800"
              alt="Outdoor Greatness Logo"
              className="w-full h-full object-contain drop-shadow-xl"
              style={{ filter: 'drop-shadow(0 0 20px rgba(255, 193, 7, 0.3))' }}
            />
          </div>
          <div className="hidden md:block">
            <h1 className="font-bebas text-xl tracking-widest text-white" style={{ textShadow: '0 0 20px rgba(255, 193, 7, 0.3)' }}>
              OUTDOOR
            </h1>
            <p className="text-xs text-yellow-400 tracking-widest">GREATNESS</p>
          </div>
        </motion.div>

        {/* Links - Wooden Signs style */}
        <div className="hidden md:flex gap-6 items-center">
          {['Home', 'Services', 'Gallery', 'Pricing', 'Contact'].map((link) => (
            <motion.a
              key={link}
              href={`#${link.toLowerCase()}`}
              whileHover={{
                scale: 1.1,
                color: '#FFD700',
                textShadow: '0 0 20px rgba(255, 193, 7, 0.8)',
              }}
              transition={{ duration: 0.2 }}
              className="relative font-bebas tracking-widest text-sm text-yellow-400"
              style={{
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
              }}
            >
              {link}
              <motion.div
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-yellow-500"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </div>

        {/* CTA Button - Wooden Style */}
        <WoodenButton href="tel:781-732-8301" size="sm">
          CALL 781-732-8301
        </WoodenButton>
      </div>
    </motion.nav>
  )
}
