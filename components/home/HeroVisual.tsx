'use client'

import { motion } from 'framer-motion'
import { HiCheck, HiCode } from 'react-icons/hi'
import { SiReact, SiNextdotjs, SiNodedotjs } from 'react-icons/si'

const ease = [0.22, 1, 0.36, 1] as const

/**
 * Hero composition: three product layers — infrastructure, code and
 * interface — stacked in CSS 3D. On load the layers lift apart once; after
 * that only the small status cards drift gently (disabled for reduced motion).
 * Purely decorative, so it is hidden from assistive technology.
 */
export default function HeroVisual() {
  return (
    <div aria-hidden="true" className="relative mx-auto aspect-[1/0.92] w-full max-w-[600px] select-none">
      {/* ambient light */}
      <div className="absolute inset-[8%] rounded-full bg-gradient-to-tr from-primary-600/45 via-iris-500/30 to-mint-400/10 blur-3xl" />

      <div className="absolute inset-0 flex items-center justify-center [perspective:1800px]">
        <div
          className="relative h-[54%] w-[54%] preserve-3d"
          style={{ transform: 'rotateX(57deg) rotateZ(-42deg) translateY(4%)' }}
        >
          {/* Layer 1 — infrastructure */}
          <Layer depth={0} delay={0.25} edge="bg-[#070B1A]">
            <div className="h-full w-full rounded-[22px] border border-white/10 bg-ink-800 p-[7%] bg-grid-dark">
              <div className="grid h-full grid-cols-3 grid-rows-3 gap-[9%]">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div
                    key={i}
                    className={`rounded-lg border ${
                      i === 4
                        ? 'border-primary-400/60 bg-primary-500/30 shadow-[0_0_24px_rgba(59,130,246,0.6)]'
                        : 'border-white/10 bg-white/[0.04]'
                    }`}
                  />
                ))}
              </div>
            </div>
          </Layer>

          {/* Layer 2 — code */}
          <Layer depth={1} delay={0.42} edge="bg-[#0A0F22]" inset="inset-[3%]">
            <div className="flex h-full w-full flex-col overflow-hidden rounded-[22px] border border-white/15 bg-[#0E1530]/95 shadow-deep">
              <div className="flex items-center gap-1.5 border-b border-white/10 px-[6%] py-[4%]">
                <span className="h-2 w-2 rounded-full bg-rose-400" />
                <span className="h-2 w-2 rounded-full bg-amber-400" />
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
              </div>
              <pre className="flex-1 px-[7%] py-[6%] font-mono text-[clamp(7px,1.25vw,11px)] leading-[1.9] text-slate-400">
                <span className="text-iris-400">export async function</span> <span className="text-sky-300">ship</span>() {'{'}
                {'\n'}  <span className="text-iris-400">const</span> app = <span className="text-iris-400">await</span> build()
                {'\n'}  <span className="text-iris-400">await</span> test(app)
                {'\n'}  <span className="text-iris-400">return</span> deploy(app)
                {'\n'}
                {'}'}
              </pre>
            </div>
          </Layer>

          {/* Layer 3 — interface */}
          <Layer depth={2} delay={0.6} edge="bg-slate-300" inset="inset-[9%]">
            <div className="flex h-full w-full flex-col gap-[5%] rounded-[22px] border border-white bg-white p-[7%] shadow-deep">
              <div className="flex items-center justify-between">
                <div className="h-[7%] min-h-[6px] w-[38%] rounded-full bg-slate-800" />
                <div className="h-4 w-4 rounded-full bg-gradient-to-br from-primary-500 to-iris-500" />
              </div>
              <div className="grid grid-cols-3 gap-[6%]">
                {['bg-primary-100', 'bg-iris-300/40', 'bg-mint-300/40'].map((c) => (
                  <div key={c} className={`aspect-[4/3] rounded-lg ${c}`} />
                ))}
              </div>
              <div className="relative flex-1 overflow-hidden rounded-xl bg-slate-50">
                <svg viewBox="0 0 120 60" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
                  <defs>
                    <linearGradient id="hv-area" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0" stopColor="#3B82F6" stopOpacity="0.35" />
                      <stop offset="1" stopColor="#3B82F6" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M0 50 L15 42 L30 46 L48 30 L64 34 L82 18 L100 22 L120 8 L120 60 L0 60Z" fill="url(#hv-area)" />
                  <path
                    d="M0 50 L15 42 L30 46 L48 30 L64 34 L82 18 L100 22 L120 8"
                    fill="none"
                    stroke="#2563EB"
                    strokeWidth="2.5"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>
              </div>
            </div>
          </Layer>
        </div>
      </div>

      {/* Floating status cards (front-facing) */}
      <FloatCard className="right-[2%] top-[10%]" float="animate-float" delay={1.05}>
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-mint-400/15 text-mint-300">
          <HiCheck className="h-4 w-4" />
        </span>
        <span>
          <span className="block text-[13px] font-semibold text-white">Tests passing</span>
          <span className="mt-1 block h-1.5 w-20 rounded-full bg-gradient-to-r from-mint-400 to-primary-400" />
        </span>
      </FloatCard>

      <FloatCard className="bottom-[14%] left-0 sm:left-[2%]" float="animate-float-delayed" delay={1.2}>
        <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary-500/20 text-primary-300">
          <HiCode className="h-4 w-4" />
        </span>
        <span className="flex items-center gap-2 text-slate-300">
          <SiReact className="h-4 w-4 text-[#61DAFB]" />
          <SiNextdotjs className="h-4 w-4 text-white" />
          <SiNodedotjs className="h-4 w-4 text-[#5FA04E]" />
        </span>
      </FloatCard>

      <FloatCard className="bottom-[4%] right-[8%] hidden sm:block" float="animate-float" delay={1.35}>
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint-400 opacity-60 motion-reduce:hidden" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-mint-400" />
        </span>
        <span className="text-[13px] font-semibold text-white">Live in production</span>
      </FloatCard>
    </div>
  )
}

function Layer({
  depth,
  delay,
  edge,
  inset = 'inset-0',
  children,
}: {
  depth: number
  delay: number
  edge: string
  inset?: string
  children: React.ReactNode
}) {
  return (
    <motion.div
      className={`absolute ${inset} preserve-3d`}
      initial={{ z: 0, opacity: 0 }}
      animate={{ z: depth * 96, opacity: 1 }}
      transition={{ duration: 1.1, delay, ease }}
    >
      {/* slab thickness */}
      <div className={`absolute inset-0 rounded-[22px] ${edge}`} style={{ transform: 'translateZ(-10px)' }} />
      <div className={`absolute inset-0 rounded-[22px] ${edge} opacity-70`} style={{ transform: 'translateZ(-5px)' }} />
      <div className="relative h-full w-full">{children}</div>
    </motion.div>
  )
}

function FloatCard({
  className,
  float,
  delay,
  children,
}: {
  className: string
  float: string
  delay: number
  children: React.ReactNode
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay, ease }}
      className={`absolute z-10 ${className}`}
    >
      <div
        className={`flex items-center gap-3 rounded-2xl border border-white/10 bg-ink-800/80 px-3.5 py-2.5 shadow-deep backdrop-blur-md ${float}`}
      >
        {children}
      </div>
    </motion.div>
  )
}
