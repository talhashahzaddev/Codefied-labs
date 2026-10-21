'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX, HiArrowRight } from 'react-icons/hi'
import Logo from '@/components/ui/Logo'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close the mobile menu on navigation and with the Escape key
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setIsOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen])

  const solid = scrolled || isOpen

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow] duration-300 ${
        solid
          ? 'border-b border-white/10 bg-ink-950/90 shadow-[0_10px_30px_-20px_rgba(0,0,0,0.6)] backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav aria-label="Main" className="container-page">
        <div className="flex h-16 items-center justify-between sm:h-[72px]">
          <Link href="/" aria-label="Codified Labs home" className="group rounded-lg">
            <Logo />
          </Link>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-1 md:flex">
            <ul className="flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1 backdrop-blur">
              {navItems.map((item) => {
                const active = pathname === item.href
                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      aria-current={active ? 'page' : undefined}
                      className={`relative block rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                        active ? 'text-white' : 'text-slate-300 hover:text-white'
                      }`}
                    >
                      {active && (
                        <motion.span
                          layoutId="navbar-indicator"
                          className="absolute inset-0 -z-10 rounded-full bg-white/10 ring-1 ring-inset ring-white/15"
                          transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                        />
                      )}
                      {item.name}
                    </Link>
                  </li>
                )
              })}
            </ul>
            <Link
              href="/contact"
              className="ml-3 inline-flex items-center gap-1.5 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-ink-900 shadow-lg transition hover:-translate-y-0.5 hover:bg-primary-50"
            >
              Get Started
              <HiArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setIsOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10 md:hidden"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <HiX className="h-5 w-5" /> : <HiMenu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-white/10 md:hidden"
          >
            <ul className="container-page space-y-1 py-4">
              {navItems.map((item) => {
                const active = pathname === item.href
                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      aria-current={active ? 'page' : undefined}
                      className={`flex items-center justify-between rounded-2xl px-4 py-3 text-base font-medium transition-colors ${
                        active ? 'bg-white/10 text-white' : 'text-slate-300 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      {item.name}
                      {active && <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-mint-400" />}
                    </Link>
                  </li>
                )
              })}
              <li className="pt-3">
                <Link href="/contact" onClick={() => setIsOpen(false)} className="btn-light w-full">
                  Get Started
                  <HiArrowRight aria-hidden="true" className="h-4 w-4" />
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
