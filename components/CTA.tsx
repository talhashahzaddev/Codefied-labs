import Link from 'next/link'
import { HiArrowRight, HiChat, HiSupport, HiLightningBolt, HiCode } from 'react-icons/hi'
import Reveal from '@/components/ui/Reveal'

const points = [
  {
    icon: HiChat,
    title: 'Free Consultation',
    description: 'Get expert advice on your project requirements and technical challenges.',
  },
  {
    icon: HiSupport,
    title: '24/7 Support',
    description: 'Ongoing support and maintenance to ensure your solution runs smoothly.',
  },
  {
    icon: HiLightningBolt,
    title: 'Fast Delivery',
    description: 'Agile development process with regular updates and quick iterations.',
  },
]

export default function CTA() {
  return (
    <section aria-labelledby="cta-title" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="container-page">
        <div className="relative isolate overflow-hidden rounded-[36px] bg-ink-900 px-6 py-14 text-white shadow-deep sm:px-12 sm:py-16 lg:px-16 lg:py-20">
          {/* background light + orbit visual */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-grid-dark opacity-60" />
            <div className="absolute -left-20 -top-32 h-96 w-96 rounded-full bg-primary-600/35 blur-[100px]" />
            <div className="absolute -bottom-40 right-0 h-[420px] w-[420px] rounded-full bg-iris-500/25 blur-[110px]" />
          </div>
          <OrbitVisual />

          <div className="relative max-w-2xl">
            <Reveal>
              <h2 id="cta-title" className="text-3xl font-semibold leading-[1.1] sm:text-4xl lg:text-5xl">
                Ready to Transform Your Business?
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                Let&apos;s discuss how our custom software solutions can drive your business forward. Get started with a
                free consultation and project estimate.
              </p>
            </Reveal>

            <Reveal delay={0.1} className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn-light group">
                Start Your Project Today
                <HiArrowRight aria-hidden="true" className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/portfolio" className="btn-on-dark">
                View Our Work
              </Link>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="relative mt-12 grid gap-6 border-t border-white/10 pt-10 sm:grid-cols-3 sm:gap-8">
            {points.map((point) => (
              <div key={point.title} className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-primary-300">
                  <point.icon aria-hidden="true" className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-semibold">{point.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-400">{point.description}</p>
                </div>
              </div>
            ))}
          </Reveal>

          <p className="relative mt-10 text-sm text-slate-400">
            Join 200+ satisfied clients who trust Codified Labs with their digital transformation
          </p>
        </div>
      </div>
    </section>
  )
}

/** Concentric orbit rings around the brand mark — decorative, large screens only. */
function OrbitVisual() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-12 hidden h-[440px] w-[440px] xl:block">
      <div className="absolute inset-0 rounded-full border border-white/[0.07]" />
      <div className="absolute inset-[16%] rounded-full border border-white/10" />
      <div className="absolute inset-[32%] rounded-full border border-dashed border-primary-400/30" />
      <div className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center">
        <span className="absolute inset-0 translate-x-2 translate-y-2 rounded-[28px] bg-iris-500/50" />
        <span className="relative flex h-24 w-24 items-center justify-center rounded-[28px] bg-gradient-to-br from-primary-500 to-primary-700 shadow-glow">
          <HiCode className="h-11 w-11" />
        </span>
      </div>
      {[
        { pos: 'left-[14%] top-[22%]', c: 'bg-mint-400' },
        { pos: 'right-[20%] top-[14%]', c: 'bg-primary-400' },
        { pos: 'left-[30%] bottom-[12%]', c: 'bg-iris-400' },
        { pos: 'right-[8%] bottom-[34%]', c: 'bg-white' },
      ].map((d) => (
        <span key={d.pos} className={`absolute ${d.pos} h-3 w-3 rounded-full ${d.c} shadow-[0_0_20px_currentColor]`} />
      ))}
    </div>
  )
}
