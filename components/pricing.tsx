'use client'

import { motion } from 'framer-motion'

const pricingData = [
  {
    title: 'Tree Removal',
    price: 'from $350',
    features: [
      'Professional assessment',
      'Safe removal & cleanup',
      'Site restoration',
      'Up to 40ft trees',
    ],
  },
  {
    title: 'Landscape Design',
    price: '$3,500+',
    features: [
      '3D design consultation',
      'Material specifications',
      'Installation planning',
      'Custom hardscaping',
    ],
    highlight: true,
  },
  {
    title: 'Lawn Care',
    price: '$55/visit',
    features: [
      'Weekly maintenance',
      'Grass cutting & edging',
      'Seasonal cleanup',
      'Flexible scheduling',
    ],
  },
  {
    title: '24/7 Emergency',
    price: 'Call for Quote',
    features: [
      'Same-day response',
      'Storm damage cleanup',
      'Emergency pruning',
      'Free assessment',
    ],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-emerald-950/20 to-slate-950 z-0" />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-6xl mx-auto"
      >
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-bebas text-5xl md:text-6xl tracking-wider mb-4">
            <span className="text-yellow-500">TRANSPARENT</span> PRICING
          </h2>
          <p className="text-gray-400 text-lg">Quality service at competitive rates</p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -15 }}
              className={`relative group ${item.highlight ? 'lg:scale-105' : ''}`}
            >
              {/* Wooden board effect */}
              <div className={`relative p-8 rounded-xl backdrop-blur-md border transition-all duration-500 shadow-3d
                ${item.highlight
                  ? 'bg-gradient-to-br from-yellow-500/20 to-yellow-600/10 border-yellow-500/50'
                  : 'bg-gradient-to-br from-slate-800/40 to-slate-900/40 border-yellow-500/20 group-hover:border-yellow-500/50'
                }`}
              >
                {/* Rope effect */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-1 h-1 bg-gray-600 rounded-full shadow-lg" />

                {/* Title */}
                <h3 className="font-bebas text-2xl tracking-wider text-yellow-400 mb-2">
                  {item.title}
                </h3>

                {/* Price */}
                <motion.div
                  className="text-4xl font-bebas tracking-wider text-yellow-500 mb-6"
                >
                  {item.price}
                </motion.div>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {item.features.map((feature, fIndex) => (
                    <motion.li
                      key={fIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: fIndex * 0.05 }}
                      className="text-gray-300 text-sm flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                {/* CTA */}
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(255, 193, 7, 0.5)' }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 rounded-lg font-bebas tracking-wider transition-all ${
                    item.highlight
                      ? 'bg-yellow-500 text-black hover:bg-yellow-400'
                      : 'border border-yellow-500 text-yellow-400 hover:bg-yellow-500/10'
                  }`}
                >
                  GET QUOTE
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
