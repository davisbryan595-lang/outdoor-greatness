'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import WoodenButton from '@/components/WoodenButton'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    address: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    
    // Trigger leaf confetti
    const event = new CustomEvent('triggerConfetti')
    window.dispatchEvent(event)
    
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: '',
        address: '',
        message: '',
      })
    }, 3000)
  }

  return (
    <section id="contact" className="relative py-32 px-4 overflow-visible min-h-screen">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-transparent pointer-events-none z-0" />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl mx-auto"
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
            BOOK NOW
          </h2>
          <p className="text-gray-300 text-lg tracking-wide" style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)' }}>
            Leave a message in the forest mailbox
          </p>
        </motion.div>

        {/* Wooden Mailbox Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateX: 45 }}
          whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-2xl mx-auto"
          style={{ perspective: '1200px' }}
        >
          {/* Mailbox post */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-16 bg-gradient-to-b from-amber-700 to-amber-900 rounded-full shadow-lg -z-10" />

          {/* Main Form Container - Parchment style */}
          <div
            className="relative p-10 rounded-2xl overflow-hidden shadow-2xl"
            style={{
              background: 'linear-gradient(135deg, #8B5A2B 0%, #A0714F 50%, #6B4423 100%)',
              boxShadow: '0 0 60px rgba(139, 90, 43, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.15)',
              border: '3px solid rgba(255, 193, 7, 0.3)',
            }}
          >
            {/* Wood texture overlay */}
            <div
              className="absolute inset-0 opacity-40 pointer-events-none"
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

            {/* Inner parchment background */}
            <div
              className="absolute inset-6 rounded-lg pointer-events-none"
              style={{
                background: 'linear-gradient(135deg, #E8D4A0 0%, #F5E6D3 50%, #E8D4A0 100%)',
                opacity: 0.08,
              }}
            />

            {/* Content */}
            <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
              {/* Form Header */}
              <div className="text-center mb-8 pb-4 border-b border-yellow-600/40">
                <p
                  className="font-bebas text-2xl tracking-widest mb-2"
                  style={{
                    color: '#FFC107',
                    textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
                  }}
                >
                  YOUR INQUIRY
                </p>
                <p className="text-sm text-gray-200" style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)' }}>
                  Write to us, and we'll respond within 24 hours
                </p>
              </div>

              {/* Form Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                  <label className="block font-bebas tracking-widest mb-2" style={{ color: '#FFC107', textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)' }}>
                    NAME
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all font-light"
                    placeholder="Your name"
                    style={{
                      background: 'linear-gradient(135deg, #F5E6D3 0%, #E8D4A0 100%)',
                      boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.1)',
                    }}
                  />
                </motion.div>

                {/* Phone */}
                <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
                  <label className="block font-bebas tracking-widest mb-2" style={{ color: '#FFC107', textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)' }}>
                    PHONE
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all font-light"
                    placeholder="(781) 732-8301"
                    style={{
                      background: 'linear-gradient(135deg, #F5E6D3 0%, #E8D4A0 100%)',
                      boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.1)',
                    }}
                  />
                </motion.div>

                {/* Email */}
                <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                  <label className="block font-bebas tracking-widest mb-2" style={{ color: '#FFC107', textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)' }}>
                    EMAIL
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all font-light"
                    placeholder="you@example.com"
                    style={{
                      background: 'linear-gradient(135deg, #F5E6D3 0%, #E8D4A0 100%)',
                      boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.1)',
                    }}
                  />
                </motion.div>

                {/* Service */}
                <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}>
                  <label className="block font-bebas tracking-widest mb-2" style={{ color: '#FFC107', textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)' }}>
                    SERVICE
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all font-light"
                    style={{
                      background: 'linear-gradient(135deg, #F5E6D3 0%, #E8D4A0 100%)',
                      boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.1)',
                    }}
                  >
                    <option value="">Select a service</option>
                    <option value="tree-removal">Tree Removal & Pruning</option>
                    <option value="landscape">Landscaping Design</option>
                    <option value="lawn">Lawn Care</option>
                    <option value="stump">Stump Grinding</option>
                    <option value="emergency">Emergency Service</option>
                  </select>
                </motion.div>

                {/* Address */}
                <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="md:col-span-2">
                  <label className="block font-bebas tracking-widest mb-2" style={{ color: '#FFC107', textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)' }}>
                    ADDRESS
                  </label>
                  <input
                    type="text"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all font-light"
                    placeholder="Service location"
                    style={{
                      background: 'linear-gradient(135deg, #F5E6D3 0%, #E8D4A0 100%)',
                      boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.1)',
                    }}
                  />
                </motion.div>

                {/* Message */}
                <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="md:col-span-2">
                  <label className="block font-bebas tracking-widest mb-2" style={{ color: '#FFC107', textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)' }}>
                    MESSAGE
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all font-light resize-none"
                    placeholder="Tell us about your project..."
                    style={{
                      background: 'linear-gradient(135deg, #F5E6D3 0%, #E8D4A0 100%)',
                      boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.1)',
                    }}
                  />
                </motion.div>
              </div>

              {/* Submit Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-yellow-600/40"
              >
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 py-4 rounded-lg font-bebas tracking-widest text-lg transition-all"
                  style={{
                    background: submitted
                      ? 'linear-gradient(135deg, #84cc16 0%, #65a30d 100%)'
                      : 'linear-gradient(135deg, #FFC107 0%, #FFD700 100%)',
                    color: '#000',
                    textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)',
                    boxShadow: '0 0 20px rgba(255, 193, 7, 0.4)',
                  }}
                >
                  {submitted ? '✓ SENT! THANK YOU!' : '📧 SEND REQUEST'}
                </motion.button>

                <WoodenButton href="tel:781-732-8301" size="lg">
                  ☎️ CALL NOW
                </WoodenButton>
              </motion.div>

              {/* Decorative text */}
              <p className="text-center text-xs text-gray-200 mt-4" style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)' }}>
                Phone: 781-732-8301 • Available 24/7 for emergencies
              </p>
            </form>

            {/* Decorative mailbox flag */}
            <motion.div
              animate={{ rotateZ: [0, 15, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute right-0 top-1/2 transform translate-x-20 -translate-y-1/2 w-12 h-6 rounded-sm"
              style={{
                background: 'linear-gradient(135deg, #FFC107 0%, #FFD700 100%)',
                boxShadow: '0 4px 12px rgba(255, 193, 7, 0.5)',
                transformOrigin: 'right center',
              }}
            />
          </div>

          {/* Shadow under mailbox */}
          <motion.div
            className="mt-6 mx-auto w-40 h-6 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(0, 0, 0, 0.4) 0%, transparent 70%)',
              filter: 'blur(10px)',
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
