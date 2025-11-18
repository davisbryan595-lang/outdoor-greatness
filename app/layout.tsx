import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Outdoor Greatness | Premium Landscaping & Tree Service',
  description: 'Ultra-realistic 3D landscaping and tree service in Massachusetts. Expert tree removal, design, and maintenance.',
  generator: 'v0.app',
  icons: {
    icon: '/icon.svg',
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Outdoor Greatness | Landscaping & Tree Service',
    description: 'Premium outdoor services with 3D visualization',
    images: [{ url: '/og-image.png' }],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className={`font-sans antialiased bg-slate-950 text-white`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
