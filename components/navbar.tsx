'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import WoodenButton from '@/components/WoodenButton'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = () => {
    setIsMobileMenuOpen(false)
  }

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 sm:py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.08 }}
          className="flex items-center gap-2 cursor-pointer flex-shrink-0"
        >
          <div className="w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 relative">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F37fe508629794307b44d873859aad7cf%2Fef689bf59abe4107b56960b1072dd988?format=webp&width=800"
              alt="Outdoor Greatness Logo"
              className="w-full h-full object-contain drop-shadow-xl"
              style={{ filter: 'drop-shadow(0 0 20px rgba(255, 193, 7, 0.3))' }}
            />
          </div>
        </motion.div>

        {/* Desktop Links - Wooden Signs style */}
        <div className="hidden lg:flex gap-4 xl:gap-6 items-center">
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
              className="relative font-bebas tracking-widest text-xs xl:text-sm text-yellow-400"
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

        {/* Desktop CTA Button */}
        <div className="hidden sm:block flex-shrink-0">
          <WoodenButton href="tel:781-732-8301" size="sm">
            CALL
          </WoodenButton>
        </div>

        {/* Mobile Hamburger Menu Button */}
        <motion.button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-2 rounded-lg relative"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            className="w-6 h-0.5 bg-yellow-400 rounded"
            animate={isMobileMenuOpen ? { rotate: 45, y: 12 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="w-6 h-0.5 bg-yellow-400 rounded"
            animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="w-6 h-0.5 bg-yellow-400 rounded"
            animate={isMobileMenuOpen ? { rotate: -45, y: -12 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden"
            style={{
              background: isScrolled ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.6)',
              backdropFilter: 'blur(8px)',
            }}
          >
            <div className="px-4 py-6 space-y-3 border-t border-yellow-700/20">
              {['Home', 'Services', 'Gallery', 'Pricing', 'Contact'].map((link) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={handleNavClick}
                  whileHover={{ x: 4 }}
                  className="block font-bebas tracking-widest text-sm text-yellow-400 py-2 pl-2"
                  style={{
                    textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
                  }}
                >
                  {link}
                </motion.a>
              ))}
              <motion.div className="pt-3 border-t border-yellow-700/20">
                <WoodenButton href="tel:781-732-8301" size="sm">
                  CALL NOW
                </WoodenButton>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
