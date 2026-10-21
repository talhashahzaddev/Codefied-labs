'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { HiArrowRight } from 'react-icons/hi'
import HeroVisual from '@/components/home/HeroVisual'
import { HeroBackdrop } from '@/components/ui/PageHero'

const ease = [0.22, 1, 0.36, 1] as const

const stats = [
  { value: '500+', label: 'Projects Delivered' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '24/7', label: 'Support Available' },
]

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-ink-950 pb-16 pt-28 text-white sm:pb-20 sm:pt-32 lg:min-h-[100svh] lg:pb-24 lg:pt-36">
      <HeroBackdrop />

      <div className="container-page relative grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-6">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="chip-dark mb-7"
          >
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-mint-400" />
            Transforming Ideas into Digital Reality
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08, ease }}
            className="text-[2.75rem] font-semibold leading-[1.02] tracking-[-0.035em] sm:text-6xl lg:text-[4.5rem]"
          >
            Custom Software
            <span className="block text-slate-400">That Scales</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.16, ease }}
            className="mt-7 max-w-xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8"
          >
            We craft exceptional digital experiences through cutting-edge custom software development, innovative web
            applications, and comprehensive digital transformation solutions that drive your business forward.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.24, ease }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <Link href="/contact" className="btn-primary group">
              Start Your Project
              <HiArrowRight aria-hidden="true" className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/portfolio" className="btn-on-dark">
              View Our Work
            </Link>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.32, ease }}
            className="mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-white/10 pt-8"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <dt className="order-2 mt-1 text-xs leading-5 text-slate-400 sm:text-sm">{stat.label}</dt>
                <dd className="order-1 font-display text-2xl font-semibold sm:text-3xl">{stat.value}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <div className="relative -mx-4 sm:mx-0">
          <HeroVisual />
        </div>
      </div>
    </section>
  )
}
