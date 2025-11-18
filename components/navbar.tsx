'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

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
      className={`fixed w-full top-0 z-40 transition-all duration-500 ${
        isScrolled
          ? 'bg-black/60 backdrop-blur-lg border-b border-yellow-500/20 shadow-3d'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 cursor-pointer"
        >
          <div className="w-12 h-12 relative">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/outdoor-kYkvPB54FjLEdfoY6CMtc9P4jieOaW.jpg"
              alt="Outdoor Greatness Logo"
              className="w-full h-full object-contain drop-shadow-lg"
            />
          </div>
          <span className="hidden md:block font-bebas text-lg tracking-widest text-white">OUTDOOR</span>
        </motion.div>

        {/* Links */}
        <div className="hidden md:flex gap-8">
          {['Home', 'Services', 'Gallery', 'Pricing', 'Contact'].map((link) => (
            <motion.a
              key={link}
              href={`#${link.toLowerCase()}`}
              whileHover={{ color: '#FFC107' }}
              transition={{ duration: 0.2 }}
              className="text-white hover:text-yellow-400 transition-colors text-sm font-medium tracking-wide"
            >
              {link}
            </motion.a>
          ))}
        </div>

        {/* CTA Button */}
        <motion.a
          href="tel:781-732-8301"
          whileHover={{
            scale: 1.05,
            boxShadow: '0 0 30px rgba(255, 193, 7, 0.6)',
          }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-2 bg-yellow-500 text-black font-bold text-sm rounded-full shadow-lg hover:shadow-xl transition-all tracking-wide"
        >
          CALL 781-732-8301
        </motion.a>
      </div>
    </motion.nav>
  )
}
