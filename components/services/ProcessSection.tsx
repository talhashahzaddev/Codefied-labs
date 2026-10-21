'use client'

import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { HiCheck } from 'react-icons/hi'
import { processSteps } from '@/lib/content'
import Reveal from '@/components/ui/Reveal'
import SectionHeader from '@/components/ui/SectionHeader'

const accents = [
  { tile: 'from-amber-300 to-amber-500', soft: 'bg-amber-50 text-amber-700', dot: 'bg-amber-400' },
  { tile: 'from-iris-400 to-iris-600', soft: 'bg-iris-300/20 text-iris-600', dot: 'bg-iris-500' },
  { tile: 'from-primary-400 to-primary-600', soft: 'bg-primary-50 text-primary-700', dot: 'bg-primary-500' },
  { tile: 'from-mint-300 to-mint-500', soft: 'bg-mint-300/20 text-teal-700', dot: 'bg-mint-400' },
  { tile: 'from-indigo-400 to-indigo-600', soft: 'bg-indigo-50 text-indigo-700', dot: 'bg-indigo-500' },
]

export default function ProcessSection() {
  const trackRef = useRef<HTMLOListElement>(null)
  const { scrollYProgress } = useScroll({ target: trackRef, offset: ['start 70%', 'end 60%'] })
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 })

  return (
    <section id="process" aria-labelledby="process-title" className="section overflow-hidden bg-paper">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-grid-light mask-radial opacity-60" />
      <div className="container-page relative">
        <SectionHeader
          id="process-title"
          title="Our Development Process"
          description="We follow a proven methodology that ensures successful project delivery, from initial concept to ongoing support."
        />

        <ol ref={trackRef} className="relative">
          {/* Track + scroll-linked progress */}
          <span
            aria-hidden="true"
            className="absolute bottom-6 left-[27px] top-6 w-px bg-slate-200 md:left-1/2 md:-translate-x-1/2"
          />
          <motion.span
            aria-hidden="true"
            style={{ scaleY: progress }}
            className="absolute bottom-6 left-[27px] top-6 w-px origin-top bg-gradient-to-b from-primary-500 via-iris-500 to-mint-400 md:left-1/2 md:-translate-x-1/2"
          />

          {processSteps.map((step, index) => {
            const a = accents[index]
            const right = index % 2 === 1
            return (
              <li key={step.title} className="relative pb-10 pl-20 last:pb-0 md:grid md:grid-cols-2 md:gap-20 md:pb-0 md:pl-0 md:[&:not(:first-child)]:-mt-24">
                {/* Node */}
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-0 z-10 flex h-14 w-14 items-center justify-center md:left-1/2 md:-translate-x-1/2"
                >
                  <span className="absolute inset-0 rounded-2xl bg-white shadow-lift ring-1 ring-slate-200" />
                  <span className={`relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${a.tile} text-white`}>
                    <step.icon className="h-5 w-5" />
                  </span>
                </span>

                <Reveal
                  delay={0.05}
                  className={`${right ? 'md:col-start-2' : 'md:col-start-1 md:text-right'} md:pt-1`}
                >
                  <article
                    className={`rounded-[28px] border border-slate-200/80 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-0.5 hover:shadow-lift sm:p-8 ${
                      right ? '' : 'md:ml-auto'
                    } md:max-w-lg`}
                  >
                    <p className="text-sm font-medium text-slate-500">Step {index + 1}</p>
                    <h3 className="mt-1 text-2xl font-semibold text-slate-950">{step.title}</h3>
                    <p className="mt-3 text-[15px] leading-7 text-slate-600">{step.description}</p>
                    <ul className={`mt-5 flex flex-wrap gap-2 ${right ? '' : 'md:justify-end'}`}>
                      {step.details.map((detail) => (
                        <li key={detail} className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${a.soft}`}>
                          <HiCheck aria-hidden="true" className="h-3.5 w-3.5" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
