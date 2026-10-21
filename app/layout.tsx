import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Providers from '@/components/ui/Providers'

// Self-hosted variable fonts (SIL Open Font License, see app/fonts/LICENSE-*.txt)
const inter = localFont({
  src: './fonts/inter-latin-variable.woff2',
  variable: '--font-inter',
  weight: '100 900',
  display: 'swap',
})

const sora = localFont({
  src: './fonts/sora-latin-variable.woff2',
  variable: '--font-sora',
  weight: '100 800',
  display: 'swap',
})

const mono = localFont({
  src: './fonts/jetbrains-mono-latin-variable.woff2',
  variable: '--font-mono',
  weight: '100 800',
  display: 'swap',
})

export const viewport: Viewport = {
  themeColor: '#0B1024',
}

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
    <html lang="en" className={`${inter.variable} ${sora.variable} ${mono.variable}`}>
      <body className="font-sans antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-ink-900 focus:shadow-lg"
        >
          Skip to content
        </a>
        <Providers>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main id="main-content" className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
} 