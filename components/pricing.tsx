'use client'

import { motion } from 'framer-motion'
import WoodenButton from '@/components/WoodenButton'

const pricingData = [
  {
    title: 'Tree Removal',
    price: '$350',
    subtitle: 'Starting at',
    features: [
      'Professional assessment',
      'Safe removal & cleanup',
      'Site restoration',
      'Up to 40ft trees',
    ],
  },
  {
    title: 'Landscape Design',
    price: '$3,500',
    subtitle: 'Starting at',
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
    price: '$55',
    subtitle: 'Per Visit',
    features: [
      'Weekly maintenance',
      'Grass cutting & edging',
      'Seasonal cleanup',
      'Flexible scheduling',
    ],
  },
  {
    title: '24/7 Emergency',
    price: 'CALL',
    subtitle: 'For Quote',
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
    <section id="pricing" className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-8 overflow-visible">
      {/* Background gradient for forest depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-transparent pointer-events-none z-0" />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-7xl mx-auto"
      >
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 sm:mb-16 md:mb-20"
        >
          <h2
            className="font-bebas text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-widest mb-3 sm:mb-4"
            style={{
              background: 'linear-gradient(135deg, #FFC107 0%, #84cc16 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 0 20px rgba(255, 193, 7, 0.3))',
            }}
          >
            PRICING TAGS
          </h2>
          <p className="text-gray-300 text-lg tracking-wide" style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)' }}>
            Hanging from the branches - transparent pricing
          </p>
        </motion.div>

        {/* Pricing Cards - Wooden Tags */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 place-items-center">
          {pricingData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateZ: index % 2 === 0 ? -5 : 5 }}
              whileInView={{ opacity: 1, y: 0, rotateZ: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                type: 'spring',
                stiffness: 100,
              }}
              className={`w-full max-w-xs h-full relative ${item.highlight ? 'lg:scale-105 xl:scale-110' : ''}`}
            >
              {/* Rope hanging from top */}
              <div className="absolute -top-4 sm:-top-6 left-1/2 transform -translate-x-1/2 w-1 h-4 sm:h-6 bg-yellow-800 opacity-60" />
              <div className="absolute -top-4 sm:-top-6 left-1/2 transform -translate-x-3 w-0.5 h-4 sm:h-6 bg-yellow-700 opacity-50" />

              {/* Wooden Price Tag */}
              <motion.div
                whileHover={{
                  rotateZ: 5,
                  y: -10,
                  boxShadow: '0 0 40px rgba(255, 193, 7, 0.6)',
                }}
                className="relative p-6 sm:p-8 rounded-lg text-center"
                style={{
                  background: item.highlight
                    ? 'linear-gradient(135deg, #FFC107 0%, #FFD700 50%, #FFA500 100%)'
                    : 'linear-gradient(135deg, #8B5A2B 0%, #A0714F 50%, #6B4423 100%)',
                  boxShadow: item.highlight
                    ? '0 0 60px rgba(255, 193, 7, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                    : '0 0 50px rgba(139, 90, 43, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.15)',
                  border: item.highlight ? '2px solid rgba(255, 193, 7, 0.5)' : '2px solid rgba(255, 193, 7, 0.3)',
                }}
              >
                {/* Wood texture */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-30 rounded-lg"
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
                  className="absolute inset-0 rounded-lg pointer-events-none"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, transparent 60%)',
                  }}
                />

                {/* Content */}
                <div className="relative z-10">
                  <h3
                    className="font-bebas text-base sm:text-lg tracking-widest mb-2"
                    style={{
                      color: item.highlight ? '#000' : '#FFC107',
                      textShadow: item.highlight ? '0 1px 2px rgba(0, 0, 0, 0.3)' : '0 2px 4px rgba(0, 0, 0, 0.5)',
                    }}
                  >
                    {item.title}
                  </h3>

                  {/* Price - Big and Bold */}
                  <motion.div
                    className="font-bebas text-2xl sm:text-3xl md:text-4xl tracking-widest mb-1"
                    style={{
                      color: item.highlight ? '#000' : '#FFD700',
                      textShadow: item.highlight ? '0 2px 4px rgba(0, 0, 0, 0.3)' : '0 2px 4px rgba(0, 0, 0, 0.7)',
                    }}
                  >
                    {item.price}
                  </motion.div>

                  <p
                    className="text-xs tracking-widest mb-4"
                    style={{
                      color: item.highlight ? '#1a1a1a' : '#E8D4A0',
                      textShadow: item.highlight ? 'none' : '0 1px 2px rgba(0, 0, 0, 0.5)',
                    }}
                  >
                    {item.subtitle}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-4 sm:mb-6 text-xs sm:text-sm">
                    {item.features.map((feature, fIndex) => (
                      <li
                        key={fIndex}
                        className="flex items-center gap-2 text-left"
                        style={{
                          color: item.highlight ? '#000' : '#E8D4A0',
                          textShadow: item.highlight ? 'none' : '0 1px 2px rgba(0, 0, 0, 0.3)',
                        }}
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{
                            backgroundColor: item.highlight ? '#000' : '#FFD700',
                          }}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  {item.price !== 'CALL' ? (
                    <WoodenButton href="#contact" size="sm">
                      GET QUOTE
                    </WoodenButton>
                  ) : (
                    <WoodenButton href="tel:781-732-8301" size="sm">
                      CALL NOW
                    </WoodenButton>
                  )}
                </div>

                {/* Decorative corners */}
                <div className="absolute top-2 left-2 w-2 h-2 border-l-2 border-t-2 border-yellow-600/40" />
                <div className="absolute top-2 right-2 w-2 h-2 border-r-2 border-t-2 border-yellow-600/40" />
                <div className="absolute bottom-2 left-2 w-2 h-2 border-l-2 border-b-2 border-yellow-600/40" />
                <div className="absolute bottom-2 right-2 w-2 h-2 border-r-2 border-b-2 border-yellow-600/40" />
              </motion.div>

              {/* Shadow under tag */}
              <motion.div
                className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-4 pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse at center, rgba(0, 0, 0, 0.3) 0%, transparent 70%)',
                  filter: 'blur(6px)',
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Special offer banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <p className="text-lg text-yellow-300 font-bebas tracking-widest" style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)' }}>
            🌲 FREE ESTIMATES FOR ALL PROJECTS 🌲
          </p>
          <p className="text-sm text-gray-300 mt-2">Contact us today for a professional assessment</p>
        </motion.div>
      </motion.div>
    </section>
  )
}
