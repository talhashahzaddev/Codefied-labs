import Link from 'next/link'
import type { ReactNode } from 'react'
import type { IconType } from 'react-icons'
import { HiCode, HiCloud, HiDeviceMobile, HiGlobe, HiShieldCheck, HiLightningBolt, HiArrowRight } from 'react-icons/hi'
import { SiAmazonaws, SiMicrosoftazure, SiGooglecloud } from 'react-icons/si'
import Reveal from '@/components/ui/Reveal'
import SectionHeader from '@/components/ui/SectionHeader'

type Feature = {
  icon: IconType
  title: string
  description: string
  href: string
  tint: string
  span: string
  visual?: ReactNode
}

const features: Feature[] = [
  {
    icon: HiCode,
    title: 'Custom Software Development',
    description: 'Tailored solutions built from the ground up to meet your unique business requirements and scale with your growth.',
    href: '/services#custom-software',
    tint: 'bg-primary-50 text-primary-600 ring-primary-100',
    span: 'lg:col-span-4',
    visual: <CodeVisual />,
  },
  {
    icon: HiGlobe,
    title: 'Web Applications',
    description: 'Modern, responsive web applications using cutting-edge technologies like React, Next.js, and Node.js.',
    href: '/services#web-apps',
    tint: 'bg-sky-50 text-sky-600 ring-sky-100',
    span: 'lg:col-span-2',
  },
  {
    icon: HiDeviceMobile,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile apps that deliver exceptional user experiences on iOS and Android.',
    href: '/services#mobile',
    tint: 'bg-iris-300/20 text-iris-600 ring-iris-300/40',
    span: 'lg:col-span-2',
  },
  {
    icon: HiCloud,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and deployment strategies using AWS, Azure, and Google Cloud Platform.',
    href: '/services#cloud',
    tint: 'bg-indigo-50 text-indigo-600 ring-indigo-100',
    span: 'lg:col-span-4',
    visual: <CloudVisual />,
  },
  {
    icon: HiShieldCheck,
    title: 'Security & Compliance',
    description: 'Enterprise-grade security implementations and compliance with industry standards like GDPR, HIPAA, and SOC 2.',
    href: '/services',
    tint: 'bg-emerald-50 text-emerald-600 ring-emerald-100',
    span: 'lg:col-span-3',
    visual: (
      <ul aria-label="Compliance standards" className="mt-6 flex flex-wrap gap-2">
        {['GDPR', 'HIPAA', 'SOC 2'].map((s) => (
          <li key={s} className="chip">
            <HiShieldCheck aria-hidden="true" className="h-3.5 w-3.5 text-emerald-500" />
            {s}
          </li>
        ))}
      </ul>
    ),
  },
  {
    icon: HiLightningBolt,
    title: 'Performance Optimization',
    description: 'Lightning-fast applications optimized for performance, scalability, and exceptional user experience.',
    href: '/services',
    tint: 'bg-amber-50 text-amber-600 ring-amber-100',
    span: 'lg:col-span-3',
    visual: <SpeedVisual />,
  },
]

export default function Features() {
  return (
    <section aria-labelledby="why-title" className="section bg-white">
      <div className="container-page">
        <SectionHeader
          id="why-title"
          title="Why Choose Codified Labs?"
          description="We combine technical expertise with business acumen to deliver solutions that not only work flawlessly but also drive measurable results for your organization."
        />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-6">
          {features.map((feature, index) => (
            <Reveal key={feature.title} delay={(index % 3) * 0.06} className={`${feature.span} ${feature.visual && feature.span === 'lg:col-span-4' ? 'md:col-span-2' : ''}`}>
              <article
                className={`group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-slate-200/80 bg-gradient-to-b from-white to-slate-50/80 p-7 shadow-soft transition duration-500 hover:-translate-y-1 hover:border-slate-300/80 hover:shadow-lift sm:p-8 ${
                  feature.span === 'lg:col-span-4' ? 'lg:flex-row lg:items-center lg:gap-10' : ''
                }`}
              >
                <div className="flex flex-1 flex-col">
                  <span className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ring-1 ring-inset ${feature.tint}`}>
                    <feature.icon aria-hidden="true" className="h-6 w-6" />
                  </span>
                  <h3 className="mt-6 text-xl font-semibold text-slate-950">{feature.title}</h3>
                  <p className="mt-3 text-[15px] leading-7 text-slate-600">{feature.description}</p>
                  {feature.span !== 'lg:col-span-4' && feature.visual}
                  <Link
                    href={feature.href}
                    className="group/link mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-primary-700 hover:text-primary-900"
                  >
                    Learn more<span className="sr-only"> about {feature.title}</span>
                    <HiArrowRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
                {feature.span === 'lg:col-span-4' && <div className="mt-8 lg:mt-0 lg:w-[46%]">{feature.visual}</div>}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* Small decorative visuals for the larger tiles */

function CodeVisual() {
  return (
    <div aria-hidden="true" className="relative">
      <div className="absolute -inset-3 rounded-[24px] bg-gradient-to-br from-primary-200/50 to-iris-300/30 blur-xl" />
      <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-ink-900 shadow-lift transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-[-1deg]">
        <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          <span className="ml-3 font-mono text-[11px] text-slate-500">workflow.ts</span>
        </div>
        <pre className="overflow-hidden px-4 py-4 font-mono text-[12px] leading-6 text-slate-400">
          <span className="text-iris-400">type</span> <span className="text-sky-300">Order</span> = {'{'} id: <span className="text-mint-300">string</span> {'}'}
          {'\n'}
          {'\n'}<span className="text-iris-400">export function</span> <span className="text-sky-300">approve</span>(order: Order) {'{'}
          {'\n'}  notify(order.id)
          {'\n'}  <span className="text-iris-400">return</span> sync(order)
          {'\n'}
          {'}'}
        </pre>
      </div>
    </div>
  )
}

function CloudVisual() {
  const providers = [
    { icon: SiAmazonaws, color: '#FF9900', name: 'AWS', pos: 'left-[6%] top-[58%]' },
    { icon: SiMicrosoftazure, color: '#0078D4', name: 'Azure', pos: 'left-1/2 top-[2%] -translate-x-1/2' },
    { icon: SiGooglecloud, color: '#4285F4', name: 'Google Cloud', pos: 'right-[6%] top-[58%]' },
  ]
  return (
    <div aria-hidden="true" className="relative mx-auto h-48 w-full max-w-sm">
      <svg viewBox="0 0 300 180" className="absolute inset-0 h-full w-full" fill="none">
        <path d="M150 96 L52 136 M150 96 L150 34 M150 96 L248 136" stroke="#C7D2FE" strokeWidth="2" strokeDasharray="4 6" />
        <ellipse cx="150" cy="150" rx="130" ry="22" fill="#EEF2FF" />
      </svg>
      <div className="absolute left-1/2 top-[44%] flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500 to-iris-500 text-white shadow-glow transition-transform duration-500 group-hover:-translate-y-1">
        <HiCloud className="h-8 w-8" />
      </div>
      {providers.map((p) => (
        <div
          key={p.name}
          className={`absolute ${p.pos} flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-soft`}
        >
          <p.icon className="h-6 w-6" style={{ color: p.color }} />
        </div>
      ))}
    </div>
  )
}

function SpeedVisual() {
  return (
    <div aria-hidden="true" className="mt-6 space-y-2.5">
      {[92, 78, 64].map((w, i) => (
        <div key={w} className="h-2 overflow-hidden rounded-full bg-slate-100">
          <div
            className={`h-full rounded-full transition-[width] duration-700 ease-out ${
              i === 0 ? 'bg-amber-400' : i === 1 ? 'bg-amber-300' : 'bg-amber-200'
            }`}
            style={{ width: `${w}%` }}
          />
        </div>
      ))}
    </div>
  )
}
