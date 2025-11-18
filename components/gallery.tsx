'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const galleryItems = [
  {
    id: 1,
    category: 'Trees',
    title: 'Mature Oak Removal',
    description: 'Professional removal of 80-year-old oak tree',
    image: 'https://images.unsplash.com/photo-1505820692951-75cc615ce59f?w=800&h=600&fit=crop',
  },
  {
    id: 2,
    category: 'Landscapes',
    title: 'Modern Garden Design',
    description: 'Contemporary landscape with hardscaping',
    image: 'https://images.unsplash.com/photo-1629496095057-8c82eb62a80a?w=800&h=600&fit=crop',
  },
  {
    id: 3,
    category: 'Before-After',
    title: 'Transformation',
    description: 'Complete yard renovation project',
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&h=600&fit=crop',
  },
  {
    id: 4,
    category: 'Trees',
    title: 'Crown Pruning',
    description: 'Precision pruning for health and aesthetics',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop',
  },
  {
    id: 5,
    category: 'Landscapes',
    title: 'Hardscape Installation',
    description: 'Paver patio with garden borders',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
  },
  {
    id: 6,
    category: 'Before-After',
    title: 'Storm Recovery',
    description: 'Post-storm cleanup and restoration',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=600&fit=crop',
  },
]

const filters = ['All', 'Trees', 'Landscapes', 'Before-After']

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedId, setSelectedId] = useState<number | null>(null)

  const filteredItems = activeFilter === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeFilter)

  const selectedItem = galleryItems.find((item) => item.id === selectedId)

  return (
    <section id="gallery" className="relative py-32 px-4 overflow-visible min-h-screen">
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
          className="text-center mb-16"
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
            OUR PORTFOLIO
          </h2>
          <p className="text-gray-300 text-lg tracking-wide" style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)' }}>
            Pinned memories in the forest
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center gap-4 mb-16 flex-wrap"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 font-bebas tracking-widest rounded-lg transition-all ${
                activeFilter === filter
                  ? 'text-black shadow-lg'
                  : 'text-yellow-400 border border-yellow-500/40'
              }`}
              style={
                activeFilter === filter
                  ? {
                      background: 'linear-gradient(135deg, #FFC107 0%, #84cc16 100%)',
                      boxShadow: '0 0 30px rgba(255, 193, 7, 0.5)',
                    }
                  : {}
              }
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid - Polaroid Style */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
          <AnimatePresence mode="wait">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.5, rotateY: 90 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedId(item.id)}
                className="cursor-pointer w-full max-w-xs"
              >
                {/* Polaroid Card */}
                <motion.div
                  whileHover={{
                    rotateZ: item.id % 2 === 0 ? 2 : -2,
                    y: -10,
                  }}
                  className="relative"
                  style={{ perspective: '1200px' }}
                >
                  {/* Polaroid frame */}
                  <motion.div
                    className="bg-white rounded-lg overflow-hidden shadow-2xl"
                    style={{
                      boxShadow: '0 10px 40px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
                    }}
                  >
                    {/* Image container */}
                    <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Polaroid white space with text */}
                    <div className="p-4 bg-white">
                      <h3 className="font-bebas text-lg text-gray-800 tracking-widest mb-1">
                        {item.title}
                      </h3>
                      <p className="text-xs text-gray-600 mb-2">{item.description}</p>
                      <p className="text-xs text-yellow-600 font-semibold">{item.category}</p>
                    </div>
                  </motion.div>

                  {/* Push pins - top left and top right */}
                  <motion.div
                    className="absolute -top-3 left-6 w-4 h-4 bg-red-500 rounded-full shadow-lg"
                    style={{
                      boxShadow: '0 2px 8px rgba(220, 38, 38, 0.6), inset -1px -1px 2px rgba(0, 0, 0, 0.2)',
                    }}
                    whileHover={{ scale: 1.2 }}
                  />
                  <motion.div
                    className="absolute -top-3 right-6 w-4 h-4 bg-yellow-500 rounded-full shadow-lg"
                    style={{
                      boxShadow: '0 2px 8px rgba(234, 179, 8, 0.6), inset -1px -1px 2px rgba(0, 0, 0, 0.2)',
                    }}
                    whileHover={{ scale: 1.2 }}
                  />

                  {/* Shadow under card */}
                  <motion.div
                    className="absolute top-full left-1/2 transform -translate-x-1/2 w-32 h-6 pointer-events-none"
                    style={{
                      background: 'radial-gradient(ellipse at center, rgba(0, 0, 0, 0.4) 0%, transparent 70%)',
                      filter: 'blur(8px)',
                    }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>

      {/* Lightbox - Enlarged Photo */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedId(null)}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.5, z: -100 }}
              animate={{ scale: 1, z: 100 }}
              exit={{ scale: 0.5, z: -100 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full"
            >
              <div
                className="bg-white rounded-lg overflow-hidden shadow-2xl"
                style={{
                  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.9)',
                }}
              >
                <div className="relative h-96 overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300">
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6 bg-white">
                  <h2 className="font-bebas text-2xl text-gray-800 tracking-widest mb-2">
                    {selectedItem.title}
                  </h2>
                  <p className="text-gray-700 mb-3">{selectedItem.description}</p>
                  <p className="text-sm text-yellow-600 font-semibold">{selectedItem.category}</p>
                </div>

                {/* Close button */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedId(null)}
                  className="absolute -top-4 -right-4 w-10 h-10 bg-yellow-500 rounded-full text-black font-bold flex items-center justify-center shadow-lg"
                >
                  ✕
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
