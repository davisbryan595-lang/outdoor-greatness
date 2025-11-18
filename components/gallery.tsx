'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const galleryItems = [
  {
    id: 1,
    category: 'Trees',
    title: 'Beautiful Tree and Foliage Work',
    description: 'Professional tree care and landscaping services',
    image: 'https://images.pexels.com/photos/34777724/pexels-photo-34777724.jpeg',
  },
  {
    id: 2,
    category: 'Landscapes',
    title: 'Modern Garden Design',
    description: 'Vibrant outdoor garden transformation',
    image: 'https://images.pexels.com/photos/34753426/pexels-photo-34753426.jpeg',
  },
  {
    id: 3,
    category: 'Before-After',
    title: 'Hardscape Transformation',
    description: 'Professional hardscape installation project',
    image: 'https://images.pexels.com/photos/16690918/pexels-photo-16690918.jpeg',
  },
  {
    id: 4,
    category: 'Trees',
    title: 'Garden Landscaping',
    description: 'Expert flower and plant arrangement work',
    image: 'https://images.pexels.com/photos/34776639/pexels-photo-34776639.jpeg',
  },
  {
    id: 5,
    category: 'Landscapes',
    title: 'Patio Installation',
    description: 'Herringbone brick patterned patio',
    image: 'https://images.pexels.com/photos/17366766/pexels-photo-17366766.jpeg',
  },
  {
    id: 6,
    category: 'Before-After',
    title: 'Professional Landscaping Work',
    description: 'Complete yard and garden renovation',
    image: 'https://images.pexels.com/photos/5644613/pexels-photo-5644613.jpeg',
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
    <section id="gallery" className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-8 overflow-visible min-h-screen">
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
          className="text-center mb-12 sm:mb-14 md:mb-16"
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
            OUR PORTFOLIO
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 tracking-wide" style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)' }}>
            Pinned memories in the forest
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center gap-2 sm:gap-3 md:gap-4 mb-12 sm:mb-14 md:mb-16 flex-wrap px-2"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.92 }}
              className={`relative px-4 sm:px-6 md:px-7 py-2 sm:py-3 font-bebas tracking-widest text-xs sm:text-sm rounded-full transition-all duration-300 overflow-hidden group`}
              style={
                activeFilter === filter
                  ? {
                      background: 'linear-gradient(135deg, #FFC107 0%, #84cc16 100%)',
                      boxShadow: '0 8px 25px rgba(255, 193, 7, 0.6), 0 0 20px rgba(132, 204, 22, 0.3)',
                      color: '#1a1a1a',
                      textShadow: 'none',
                      border: '2px solid rgba(255, 255, 255, 0.3)',
                    }
                  : {
                      background: 'rgba(0, 0, 0, 0.3)',
                      border: '2px solid rgba(255, 193, 7, 0.5)',
                      color: '#FCD34D',
                      boxShadow: '0 0 15px rgba(255, 193, 7, 0.2)',
                    }
              }
            >
              {/* Hover glow effect */}
              <motion.div
                className="absolute -inset-1 rounded-full pointer-events-none"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                style={{
                  background: activeFilter === filter
                    ? 'none'
                    : 'linear-gradient(135deg, rgba(255, 193, 7, 0.2) 0%, rgba(132, 204, 22, 0.1) 100%)',
                  filter: 'blur(8px)',
                  zIndex: -1,
                }}
              />

              {/* Shine effect on active */}
              {activeFilter === filter && (
                <motion.div
                  className="absolute inset-0 rounded-full pointer-events-none"
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: [0, 0.5, 0], x: 100 }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
                  }}
                />
              )}

              <span className="relative z-10 block font-bold text-sm uppercase">{filter}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid - Polaroid Style */}
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 place-items-center">
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
                  whileHover={{ scale: 1.15, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedId(null)}
                  className="absolute -top-5 -right-5 w-12 h-12 rounded-full text-white font-bold flex items-center justify-center shadow-2xl overflow-hidden group relative"
                  style={{
                    background: 'linear-gradient(135deg, #FFC107 0%, #FFD700 100%)',
                    boxShadow: '0 8px 20px rgba(255, 193, 7, 0.6)',
                    border: '2px solid rgba(255, 255, 255, 0.3)',
                  }}
                >
                  {/* Glow effect */}
                  <motion.div
                    className="absolute inset-0 rounded-full pointer-events-none"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    style={{
                      boxShadow: 'inset 0 0 15px rgba(255, 255, 255, 0.3)',
                    }}
                  />
                  <span className="relative z-10 text-xl">✕</span>
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
