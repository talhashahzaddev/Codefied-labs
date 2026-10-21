import { HiHeart, HiLightBulb, HiShieldCheck, HiUsers, HiTrendingUp, HiGlobe } from 'react-icons/hi'
import Reveal from '@/components/ui/Reveal'
import SectionHeader from '@/components/ui/SectionHeader'

const values = [
  {
    icon: HiHeart,
    title: 'Client-Centric Approach',
    description: "Every decision we make starts with understanding our clients' unique needs and challenges.",
    tile: 'from-rose-400 to-rose-600',
    back: 'bg-rose-200/70',
  },
  {
    icon: HiLightBulb,
    title: 'Innovation First',
    description: 'We constantly explore cutting-edge technologies to deliver solutions that give our clients a competitive edge.',
    tile: 'from-amber-300 to-amber-500',
    back: 'bg-amber-200/70',
  },
  {
    icon: HiShieldCheck,
    title: 'Quality & Reliability',
    description: 'We maintain the highest standards of code quality, security, and reliability in every project we deliver.',
    tile: 'from-emerald-400 to-emerald-600',
    back: 'bg-emerald-200/70',
  },
  {
    icon: HiUsers,
    title: 'Collaborative Partnership',
    description: 'We work as an extension of your team, fostering open communication and shared success.',
    tile: 'from-primary-400 to-primary-600',
    back: 'bg-primary-200/70',
  },
  {
    icon: HiTrendingUp,
    title: 'Continuous Growth',
    description: 'We embrace learning and adaptation, constantly evolving our skills and methodologies.',
    tile: 'from-iris-400 to-iris-600',
    back: 'bg-iris-300/60',
  },
  {
    icon: HiGlobe,
    title: 'Global Impact',
    description: 'We believe technology should make the world better, one solution at a time.',
    tile: 'from-indigo-400 to-indigo-600',
    back: 'bg-indigo-200/70',
  },
]

export default function Values() {
  return (
    <section aria-labelledby="values-title" className="section bg-paper">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-grid-light mask-radial opacity-60" />
      <div className="container-page relative">
        <SectionHeader
          id="values-title"
          title="Our Core Values"
          description="These principles guide everything we do and shape the way we work with our clients and each other."
        />

        <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {values.map((value, index) => (
            <Reveal as="li" key={value.title} delay={(index % 3) * 0.06} className="h-full">
              <article className="group h-full rounded-[28px] border border-slate-200/80 bg-white p-7 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lift sm:p-8">
                <span className="relative inline-flex h-14 w-14">
                  <span
                    aria-hidden="true"
                    className={`absolute inset-0 translate-x-2 translate-y-2 rounded-2xl ${value.back} transition-transform duration-300 group-hover:translate-x-2.5 group-hover:translate-y-2.5`}
                  />
                  <span className={`relative inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${value.tile} text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.35)]`}>
                    <value.icon aria-hidden="true" className="h-7 w-7" />
                  </span>
                </span>
                <h3 className="mt-7 text-xl font-semibold text-slate-950">{value.title}</h3>
                <p className="mt-3 text-[15px] leading-7 text-slate-600">{value.description}</p>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
