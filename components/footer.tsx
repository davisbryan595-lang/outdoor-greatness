'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-emerald-500/20 py-12 overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent pointer-events-none" />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-7xl mx-auto px-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-bebas text-2xl tracking-wider text-yellow-400 mb-4">
              OUTDOOR GREATNESS
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Professional landscaping and tree service excellence since day one.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-bebas text-lg tracking-wider text-green-400 mb-4">SERVICES</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              {['Tree Removal', 'Landscaping', 'Lawn Care', 'Storm Cleanup'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-yellow-400 transition-colors">
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
            <h4 className="font-bebas text-lg tracking-wider text-green-400 mb-4">CONTACT</h4>
            <div className="space-y-2 text-gray-400 text-sm">
              <p>
                <a href="tel:781-732-8301" className="hover:text-yellow-400 transition-colors">
                  📞 781-732-8301
                </a>
              </p>
              <p>Serving Massachusetts & Beyond</p>
              <p className="text-xs text-gray-500 mt-4">24/7 Emergency Service Available</p>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-emerald-500/10 pt-8" />

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm"
        >
          <p>&copy; 2025 Outdoor Greatness. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-yellow-400 transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-yellow-400 transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-yellow-400 transition-colors">
              Contact
            </a>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  )
}
