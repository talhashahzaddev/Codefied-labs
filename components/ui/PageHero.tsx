'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type Stat = { value: string; label: string }

type PageHeroProps = {
  badge: string
  title: ReactNode
  description: ReactNode
  stats?: Stat[]
  visual: { src: string; alt: string; width: number; height: number }
  children?: ReactNode
}

const ease = [0.22, 1, 0.36, 1] as const

/**
 * Shared dark hero used by the inner pages. Copy on the left, a page-specific
 * original illustration on the right, and an optional row of the page's
 * existing figures underneath.
 */
export default function PageHero({ badge, title, description, stats, visual, children }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-ink-950 pb-16 pt-32 text-white sm:pb-20 sm:pt-36 lg:pb-24">
      <HeroBackdrop />

      <div className="container-page relative grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-10">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="chip-dark mb-6"
          >
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-mint-400" />
            {badge}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease }}
            className="text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16, ease }}
            className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8"
          >
            {description}
          </motion.p>

          {children && (
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.24, ease }}
              className="mt-8"
            >
              {children}
            </motion.div>
          )}

          {stats && stats.length > 0 && (
            <motion.dl
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease }}
              className="mt-10 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-white/10 pt-8 sm:flex sm:flex-wrap sm:gap-x-10"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="flex min-w-0 flex-col">
                  <dt className="order-2 mt-1 text-sm text-slate-400">{stat.label}</dt>
                  <dd className="order-1 font-display text-2xl font-semibold text-white sm:text-3xl">{stat.value}</dd>
                </div>
              ))}
            </motion.dl>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.15, ease }}
          className="relative mx-auto w-full max-w-xl lg:max-w-none"
        >
          <div
            aria-hidden="true"
            className="absolute inset-[12%] -z-10 rounded-full bg-gradient-to-tr from-primary-600/40 via-iris-500/30 to-mint-400/10 blur-3xl"
          />
          <Image
            src={visual.src}
            alt={visual.alt}
            width={visual.width}
            height={visual.height}
            priority
            className="h-auto w-full animate-float drop-shadow-[0_40px_60px_rgba(7,11,26,0.6)]"
          />
        </motion.div>
      </div>
    </section>
  )
}

export function HeroBackdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-grid-dark mask-fade-b" />
      <div className="absolute -left-40 top-0 h-[520px] w-[520px] rounded-full bg-primary-600/25 blur-[120px]" />
      <div className="absolute -right-32 top-24 h-[460px] w-[460px] rounded-full bg-iris-500/20 blur-[120px]" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
    </div>
  )
}
