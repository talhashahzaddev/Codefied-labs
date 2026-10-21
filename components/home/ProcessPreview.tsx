import Link from 'next/link'
import { HiArrowRight } from 'react-icons/hi'
import { processSteps } from '@/lib/content'
import Reveal from '@/components/ui/Reveal'
import SectionHeader from '@/components/ui/SectionHeader'

export default function ProcessPreview() {
  return (
    <section aria-labelledby="process-preview-title" className="section isolate overflow-hidden bg-ink-950 text-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-dark mask-radial" />
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-700/20 blur-[120px]" />
      </div>

      <div className="container-page">
        <SectionHeader
          id="process-preview-title"
          tone="dark"
          title="Our Development Process"
          description="We follow a proven methodology that ensures successful project delivery, from initial concept to ongoing support."
        >
          <Link
            href="/services#process"
            className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary-300 hover:text-white"
          >
            See every step in detail
            <HiArrowRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </SectionHeader>

        <ol className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-0">
          {/* connector line (desktop) */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-[10%] right-[10%] top-[42px] hidden h-px bg-gradient-to-r from-primary-400/0 via-primary-400/60 to-iris-400/0 lg:block"
          />
          {processSteps.map((step, index) => (
            <Reveal as="li" key={step.title} delay={index * 0.1} className="relative lg:px-3">
              <div className="flex h-full gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-5 lg:flex-col lg:items-center lg:border-0 lg:bg-transparent lg:p-0 lg:text-center">
                <div className="relative shrink-0">
                  <span className="relative z-10 flex h-[84px] w-[84px] items-center justify-center rounded-[26px] border border-white/10 bg-gradient-to-b from-ink-700 to-ink-800 shadow-deep">
                    <span className="absolute inset-2 rounded-[20px] border border-white/5 bg-ink-900" />
                    <step.icon aria-hidden="true" className="relative h-8 w-8 text-primary-300" />
                  </span>
                  <span className="absolute -right-2 -top-2 z-20 flex h-7 w-7 items-center justify-center rounded-full bg-primary-500 font-display text-xs font-semibold text-white ring-4 ring-ink-950">
                    {index + 1}
                  </span>
                </div>
                <div className="lg:mt-6">
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{step.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
