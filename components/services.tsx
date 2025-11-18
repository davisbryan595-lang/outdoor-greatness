'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import WoodenSign from '@/components/WoodenSign'

const serviceData = [
  {
    title: 'Tree Removal',
    subtitle: 'Expert & Safe',
    description: 'Professional removal with precision',
    icon: '🌲',
  },
  {
    title: 'Pruning',
    subtitle: 'Tree Health',
    description: 'Precision pruning for healthier growth',
    icon: '✂️',
  },
  {
    title: 'Landscaping',
    subtitle: 'Full Design',
    description: '3D landscape design & implementation',
    icon: '🏞️',
  },
  {
    title: 'Stump Grinding',
    subtitle: 'Complete Removal',
    description: 'Complete removal with restoration',
    icon: '⚙️',
  },
  {
    title: 'Storm Cleanup',
    subtitle: '24/7 Response',
    description: 'Emergency damage response anytime',
    icon: '⚡',
  },
  {
    title: 'Lawn Care',
    subtitle: 'Year-Round',
    description: 'Premium maintenance & installation',
    icon: '🌱',
  },
]

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <section id="services" className="relative py-32 px-4 overflow-visible">
      {/* Background gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-transparent pointer-events-none z-0" />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-7xl mx-auto"
      >
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2
            className="font-bebas text-6xl md:text-7xl tracking-widest mb-4"
            style={{
              background: 'linear-gradient(135deg, #FFC107 0%, #84cc16 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 0 20px rgba(255, 193, 7, 0.3))',
            }}
          >
            OUR SERVICES
          </h2>
          <p
            className="text-gray-300 text-lg max-w-2xl mx-auto tracking-wide"
            style={{
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
            }}
          >
            Six essential services hanging in the forest
          </p>
        </motion.div>

        {/* Services Grid - Wooden Signs */}
        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center relative"
        >
          {serviceData.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: 90 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                type: 'spring',
                stiffness: 100,
              }}
              className="w-full max-w-sm"
            >
              <WoodenSign
                title={service.title}
                subtitle={service.subtitle}
                onClick={() => {
                  const element = document.getElementById('contact')
                  element?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                <div className="text-center">
                  <div className="text-4xl mb-3">{service.icon}</div>
                  <p
                    className="text-sm text-gray-200 mb-4"
                    style={{
                      textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
                    }}
                  >
                    {service.description}
                  </p>
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      boxShadow: '0 0 15px rgba(255, 193, 7, 0.6)',
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 text-xs font-bebas tracking-widest rounded"
                    style={{
                      background: 'rgba(255, 193, 7, 0.2)',
                      border: '1px solid rgba(255, 193, 7, 0.5)',
                      color: '#FFD700',
                      textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)',
                    }}
                  >
                    LEARN MORE
                  </motion.button>
                </div>
              </WoodenSign>
            </motion.div>
          ))}
        </div>

        {/* Decorative text below */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.6 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-center mt-16 pointer-events-none"
        >
          <p className="text-sm text-yellow-400/50 tracking-widest font-light">
            EACH SIGN REPRESENTS A COMMITMENT TO EXCELLENCE IN YOUR OUTDOOR SPACE
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
