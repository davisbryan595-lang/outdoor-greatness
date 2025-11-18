'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const VideoBackground = dynamic(() => import('@/components/VideoBackground'), {
  ssr: false,
  loading: () => <div className="fixed inset-0 w-full h-full bg-gradient-to-b from-slate-900 to-slate-950" />
})

export default function AnimatedBackground() {
  return (
    <Suspense fallback={<div className="fixed inset-0 w-full h-full bg-gradient-to-b from-slate-900 to-slate-950" />}>
      <VideoBackground />
    </Suspense>
  )
}
