'use client'

import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import Services from '@/components/services'
import Gallery from '@/components/gallery'
import Pricing from '@/components/pricing'
import Contact from '@/components/contact'
import Footer from '@/components/footer'
import Preloader from '@/components/preloader'
import ForestAmbience from '@/components/ForestAmbience'

const AnimatedBackground = dynamic(() => import('@/components/animated-background'), {
  ssr: false,
  loading: () => null
})

export default function Home() {
  return (
    <main className="relative min-h-screen bg-slate-950 overflow-hidden">
      <Preloader />
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Suspense fallback={null}>
          <AnimatedBackground />
        </Suspense>
      </div>

      <div className="relative z-10">
        <Navbar />
        <ForestAmbience />
        <Hero />
        <Services />
        <Gallery />
        <Pricing />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}
