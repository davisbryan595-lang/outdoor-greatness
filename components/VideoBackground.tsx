'use client'

import { useEffect, useRef, useState } from 'react'

export default function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        const x = (e.clientX - rect.left) / rect.width
        const y = (e.clientY - rect.top) / rect.height

        // Subtle parallax effect
        const offsetX = (x - 0.5) * 20
        const offsetY = (y - 0.5) * 20

        if (videoRef.current) {
          videoRef.current.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(1.05)`
        }
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 w-full h-full overflow-hidden"
      style={{
        zIndex: 0,
        perspective: '1000px',
      }}
    >
      {/* Video Background - Golden Hour Forest (4K Quality) */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          transition: 'transform 0.1s ease-out',
        }}
      >
        {/* Primary: Ultra-HD 4K golden hour forest with god rays and gentle breeze */}
        <source
          src="https://videos.pexels.com/video-files/6056826/6056826-uhd_2560_1440_24fps.mp4"
          type="video/mp4"
        />
        {/* Fallback: Alternative 4K golden hour forest */}
        <source
          src="https://videos.pexels.com/video-files/31049844/31049844-uhd_2560_1440_24fps.mp4"
          type="video/mp4"
        />
        {/* Secondary fallback: Original HD */}
        <source
          src="https://videos.pexels.com/video-files/2022278/2022278-hd_1280_720_24fps.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay for Text Readability (55% opacity) */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          background: 'linear-gradient(135deg, rgba(15, 25, 18, 0.55) 0%, rgba(10, 20, 15, 0.6) 100%)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* Additional subtle radial gradient for depth */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(255, 193, 7, 0.05) 0%, rgba(0, 0, 0, 0.2) 100%)',
          pointerEvents: 'none',
          zIndex: 2,
        }}
      />

      {/* Optional: Vignette effect around edges for cinematic feel */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          background: `
            radial-gradient(
              ellipse at center,
              transparent 0%,
              rgba(0, 0, 0, 0.3) 100%
            )
          `,
          pointerEvents: 'none',
          zIndex: 3,
        }}
      />
    </div>
  )
}
