'use client'

import { useEffect, useState } from 'react'

export default function Preloader() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + Math.random() * 30
      })
    }, 200)

    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className="fixed inset-0 z-50 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 flex items-center justify-center"
      style={{
        animation: 'fadeOut 0.6s ease-out 2.5s forwards',
      }}
    >
      <style>{`
        @keyframes fadeOut {
          from {
            opacity: 1;
            pointer-events: auto;
          }
          to {
            opacity: 0;
            pointer-events: none;
          }
        }

        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 40px rgba(132, 204, 22, 0.6), 0 0 80px rgba(255, 193, 7, 0.2);
          }
          50% {
            box-shadow: 0 0 60px rgba(132, 204, 22, 0.8), 0 0 100px rgba(255, 193, 7, 0.4);
          }
        }

        @keyframes progressFill {
          0% {
            width: 0%;
          }
          100% {
            width: var(--progress, 0%);
          }
        }
      `}</style>

      <div className="flex flex-col items-center gap-12">
        {/* Glowing Logo Container */}
        <div className="relative w-48 h-48 flex items-center justify-center">
          {/* Outer glow rings */}
          <div
            className="absolute inset-0 rounded-full border-2 border-yellow-400/20 opacity-50"
            style={{
              animation: 'glow 3s ease-in-out infinite',
            }}
          />
          <div
            className="absolute inset-0 rounded-full"
            style={{
              border: '1px solid rgba(255, 193, 7, 0.1)',
              animation: 'glow 3s ease-in-out 0.5s infinite',
              inset: '8px',
            }}
          />

          {/* Logo Image with intense glow */}
          <div
            className="relative w-40 h-40 flex items-center justify-center drop-shadow-2xl"
            style={{
              animation: 'glow 2.5s ease-in-out infinite',
            }}
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F37fe508629794307b44d873859aad7cf%2Fef689bf59abe4107b56960b1072dd988?format=webp&width=800"
              alt="Outdoor Greatness Logo"
              className="w-full h-full object-contain"
              style={{
                filter: 'drop-shadow(0 0 30px rgba(132, 204, 22, 0.8)) drop-shadow(0 0 60px rgba(255, 193, 7, 0.4))',
              }}
            />
          </div>

          {/* Rotating accent ring */}
          <div
            className="absolute inset-0 rounded-full border-2 border-transparent"
            style={{
              borderTopColor: 'rgba(132, 204, 22, 0.6)',
              borderRightColor: 'rgba(255, 193, 7, 0.4)',
              animation: 'spin 3s linear infinite',
            }}
          />
        </div>

        {/* Progress Bar Section */}
        <div className="w-80 flex flex-col items-center gap-4">
          {/* Progress Bar Container */}
          <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden border border-yellow-400/30 shadow-lg">
            <div
              className="h-full rounded-full transition-all duration-500 ease-out"
              style={{
                width: `${progress}%`,
                background: 'linear-gradient(90deg, #84cc16 0%, #FFC107 50%, #FFC107 100%)',
                boxShadow: '0 0 20px rgba(132, 204, 22, 0.8), 0 0 10px rgba(255, 193, 7, 0.6)',
              }}
            />
          </div>

          {/* Loading Text */}
          <div className="text-center">
            <p className="text-yellow-400 text-sm font-bebas tracking-widest">
              {Math.round(progress)}%
            </p>
            <p className="text-yellow-300/70 text-xs font-bebas tracking-wider mt-1">
              PREPARING YOUR OUTDOOR GREATNESS
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
