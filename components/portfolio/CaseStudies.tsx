import Link from 'next/link'
import { HiTrendingUp, HiClock, HiUsers, HiCurrencyDollar, HiArrowRight } from 'react-icons/hi'
import Reveal from '@/components/ui/Reveal'
import SectionHeader from '@/components/ui/SectionHeader'

const industries = [
  {
    name: 'Financial Services',
    projects: 45,
    description: 'Secure, compliant solutions for banking, insurance, and fintech companies.',
    impact: '$2.5B+ transactions processed',
    icon: HiCurrencyDollar,
    tile: 'from-emerald-400 to-emerald-600',
  },
  {
    name: 'Healthcare',
    projects: 32,
    description: 'HIPAA-compliant systems improving patient care and operational efficiency.',
    impact: '500K+ patients served',
    icon: HiUsers,
    tile: 'from-primary-400 to-primary-600',
  },
  {
    name: 'E-Commerce',
    projects: 28,
    description: 'Scalable platforms driving online sales and customer engagement.',
    impact: '10M+ orders processed',
    icon: HiTrendingUp,
    tile: 'from-iris-400 to-iris-600',
  },
  {
    name: 'Manufacturing',
    projects: 25,
    description: 'IoT and automation solutions optimizing production and supply chain.',
    impact: '35% efficiency increase',
    icon: HiClock,
    tile: 'from-amber-400 to-orange-500',
  },
]

const metrics = [
  { label: 'Average Project ROI', value: '340%', description: 'Return on investment within 12 months' },
  { label: 'Time to Market', value: '45%', description: 'Faster delivery compared to traditional development' },
  { label: 'Client Retention', value: '94%', description: 'Long-term partnerships with satisfied clients' },
  { label: 'Performance Improvement', value: '60%', description: 'Average system performance enhancement' },
]

const maxProjects = Math.max(...industries.map((i) => i.projects))

export default function CaseStudies() {
  return (
    <section aria-labelledby="industries-title" className="section bg-paper">
      <div className="container-page">
        <SectionHeader
          id="industries-title"
          title="Industry Expertise"
          description="We've delivered exceptional results across diverse industries, understanding unique challenges and regulatory requirements."
        />

        {/* Industries */}
        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry, index) => (
            <Reveal as="li" key={industry.name} delay={index * 0.06} className="h-full">
              <article className="group flex h-full flex-col rounded-[28px] border border-slate-200/80 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lift">
                <span className="relative inline-flex h-12 w-12">
                  <span aria-hidden="true" className="absolute inset-0 translate-x-1.5 translate-y-1.5 rounded-2xl bg-slate-200" />
                  <span className={`relative inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${industry.tile} text-white`}>
                    <industry.icon aria-hidden="true" className="h-6 w-6" />
                  </span>
                </span>
                <h3 className="mt-6 text-lg font-semibold text-slate-950">{industry.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">{industry.description}</p>

                <div className="mt-6 border-t border-slate-100 pt-5">
                  <div className="flex items-baseline justify-between text-sm">
                    <span className="text-slate-500">Projects</span>
                    <span className="font-display text-lg font-semibold text-slate-950">{industry.projects}</span>
                  </div>
                  <div aria-hidden="true" className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-100">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${industry.tile}`}
                      style={{ width: `${(industry.projects / maxProjects) * 100}%` }}
                    />
                  </div>
                  <p className="mt-4 text-sm font-medium text-primary-700">{industry.impact}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>

        {/* Metrics */}
        <Reveal className="mt-16">
          <div className="relative isolate overflow-hidden rounded-[32px] bg-ink-900 px-6 py-10 text-white shadow-deep sm:px-10 sm:py-12">
            <div aria-hidden="true" className="absolute inset-0 -z-10 bg-grid-dark opacity-70" />
            <div aria-hidden="true" className="absolute -right-20 -top-20 -z-10 h-72 w-72 rounded-full bg-primary-600/30 blur-3xl" />
            <h3 className="text-2xl font-semibold">Measurable Impact</h3>
            <dl className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-white/10">
              {metrics.map((metric) => (
                <div key={metric.label} className="flex flex-col lg:px-8 lg:first:pl-0 lg:last:pr-0">
                  <dt className="order-2 mt-2 font-semibold">{metric.label}</dt>
                  <dd className="order-1 font-display text-4xl font-semibold text-transparent bg-gradient-to-r from-sky-300 to-iris-300 bg-clip-text">
                    {metric.value}
                  </dd>
                  <dd className="order-3 mt-1 text-sm leading-6 text-slate-400">{metric.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>

        {/* Call to action */}
        <Reveal className="mt-6">
          <div className="flex flex-col items-start justify-between gap-6 rounded-[32px] border border-primary-100 bg-gradient-to-r from-primary-50 via-white to-iris-300/20 p-8 sm:p-10 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <h3 className="text-2xl font-semibold text-slate-950">Ready to Join Our Success Stories?</h3>
              <p className="mt-2 leading-7 text-slate-600">
                Let&apos;s discuss how we can help transform your business with a custom software solution tailored to
                your unique needs and industry requirements.
              </p>
            </div>
            <Link href="/contact" className="btn-primary group shrink-0">
              Start Your Project
              <HiArrowRight aria-hidden="true" className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
