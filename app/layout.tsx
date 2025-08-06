import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Codified Labs - Custom Software Development & Digital Solutions',
    template: '%s | Codified Labs'
  },
  description: 'Transform your business with cutting-edge custom software development, web applications, mobile apps, and digital transformation services. Expert team delivering scalable solutions.',
  keywords: [
    'custom software development',
    'web development',
    'mobile app development',
    'digital transformation',
    'software consulting',
    'enterprise solutions',
    'full-stack development',
    'cloud solutions',
    'API development',
    'software augmentation'
  ],
  authors: [{ name: 'Codified Labs Team' }],
  creator: 'Codified Labs',
  publisher: 'Codified Labs',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://codified-labs.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Codified Labs - Custom Software Development & Digital Solutions',
    description: 'Transform your business with cutting-edge custom software development, web applications, mobile apps, and digital transformation services.',
    url: 'https://codified-labs.com',
    siteName: 'Codified Labs',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Codified Labs - Custom Software Development',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Codified Labs - Custom Software Development & Digital Solutions',
    description: 'Transform your business with cutting-edge custom software development, web applications, mobile apps, and digital transformation services.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
} 