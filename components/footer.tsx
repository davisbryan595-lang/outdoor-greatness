'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="relative py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-8 overflow-hidden border-t border-yellow-700/20">
      {/* Background effect - part of forest */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40 pointer-events-none z-0" />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-10 md:mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-bebas text-lg sm:text-xl md:text-2xl tracking-wider text-yellow-400 mb-2" style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)' }}>
              OUTDOOR GREATNESS
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              Professional landscaping and tree service excellence since day one.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-bebas text-base sm:text-lg tracking-wider text-yellow-400 mb-3 sm:mb-4" style={{ textShadow: '0 1px 4px rgba(0, 0, 0, 0.5)' }}>
              SERVICES
            </h4>
            <ul className="space-y-1.5 sm:space-y-2 text-gray-300 text-xs sm:text-sm">
              {['Tree Removal', 'Landscaping', 'Lawn Care', 'Storm Cleanup'].map((item) => (
                <li key={item}>
                  <a href="#services" className="hover:text-yellow-300 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-bebas text-lg tracking-wider text-yellow-400 mb-4" style={{ textShadow: '0 1px 4px rgba(0, 0, 0, 0.5)' }}>
              CONTACT
            </h4>
            <div className="space-y-2 text-gray-300 text-sm">
              <p>
                <a href="tel:781-732-8301" className="hover:text-yellow-300 transition-colors font-semibold">
                  📞 781-732-8301
                </a>
              </p>
              <p>Serving Massachusetts</p>
              <p className="text-xs text-yellow-300/60 mt-2">24/7 Emergency Available</p>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-yellow-700/20 pt-8 mb-6" />

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm"
        >
          <p>&copy; 2025 Outdoor Greatness. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-yellow-300 transition-colors">
              Privacy
            </a>
            <a href="#contact" className="hover:text-yellow-300 transition-colors">
              Contact
            </a>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  )
}
