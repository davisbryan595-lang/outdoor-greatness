'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const galleryItems = [
  {
    id: 1,
    category: 'Trees',
    title: 'Mature Oak Removal',
    description: 'Professional removal of 80-year-old oak tree',
  },
  {
    id: 2,
    category: 'Landscapes',
    title: 'Modern Garden Design',
    description: 'Contemporary landscape with hardscaping',
  },
  {
    id: 3,
    category: 'Before-After',
    title: 'Transformation',
    description: 'Complete yard renovation project',
  },
  {
    id: 4,
    category: 'Trees',
    title: 'Crown Pruning',
    description: 'Precision pruning for health and aesthetics',
  },
  {
    id: 5,
    category: 'Landscapes',
    title: 'Hardscape Installation',
    description: 'Paver patio with garden borders',
  },
  {
    id: 6,
    category: 'Before-After',
    title: 'Storm Recovery',
    description: 'Post-storm cleanup and restoration',
  },
]

const filters = ['All', 'Trees', 'Landscapes', 'Before-After']

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredItems = activeFilter === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter)

  return (
    <section id="gallery" className="relative py-24 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-emerald-950/20 to-slate-900/50 z-0" />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-7xl mx-auto"
      >
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-bebas text-5xl md:text-6xl tracking-wider mb-4">
            <span className="text-yellow-400">OUR</span> <span className="text-green-400">PORTFOLIO</span>
          </h2>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center gap-4 mb-12 flex-wrap"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 font-bebas tracking-wider rounded-lg transition-all ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-yellow-400 to-emerald-400 text-black shadow-lg shadow-yellow-400/50'
                  : 'border border-emerald-500/30 text-emerald-400 hover:border-emerald-500/60'
              }`}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-xl"
              >
                {/* Gallery Item */}
                <div className="relative h-64 bg-gradient-to-br from-slate-800 to-slate-900 border border-emerald-500/20 rounded-xl overflow-hidden shadow-3d group-hover:shadow-3d transition-all duration-500">
                  {/* Placeholder with gradient */}
                  <div className="w-full h-full bg-gradient-to-br from-emerald-900/40 via-slate-900 to-yellow-900/30 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-5xl mb-2">{['🌲', '🏞️', '🔄'][index % 3]}</div>
                      <p className="text-emerald-400/60 text-sm">{item.category}</p>
                    </div>
                  </div>

                  {/* Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex flex-col justify-end p-6"
                  >
                    <h3 className="font-bebas text-xl tracking-wider text-yellow-400 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-sm">{item.description}</p>
                  </motion.div>

                  {/* Pin shadow effect */}
                  <div className="absolute top-3 left-3 w-3 h-3 bg-gray-600 rounded-full shadow-lg" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </section>
  )
}
