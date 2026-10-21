import { HiStar } from 'react-icons/hi'
import Reveal from '@/components/ui/Reveal'
import SectionHeader from '@/components/ui/SectionHeader'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CTO, TechCorp',
    company: 'TechCorp',
    content:
      'Codified Labs transformed our legacy system into a modern, scalable platform. Their expertise in cloud architecture and attention to detail exceeded our expectations.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Founder, StartupX',
    company: 'StartupX',
    content:
      'Working with Codified Labs was a game-changer for our startup. They delivered a robust mobile app that our users love, and their ongoing support is exceptional.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'VP of Engineering, Enterprise Solutions',
    company: 'Enterprise Solutions',
    content:
      'The custom software solution developed by Codified Labs increased our operational efficiency by 40%. Their team understands both technology and business needs.',
    rating: 5,
  },
]

const initials = (name: string) =>
  name
    .split(' ')
    .map((n) => n[0])
    .join('')

function Stars({ count, className = '' }: { count: number; className?: string }) {
  return (
    <div className={`flex items-center gap-0.5 ${className}`} role="img" aria-label={`Rated ${count} out of 5`}>
      {Array.from({ length: count }).map((_, i) => (
        <HiStar key={i} aria-hidden="true" className="h-4 w-4 text-amber-400" />
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [lead, ...rest] = testimonials

  return (
    <section aria-labelledby="testimonials-title" className="section bg-white">
      <div className="container-page">
        <SectionHeader
          id="testimonials-title"
          title="What Our Clients Say"
          description="Don't just take our word for it. Here's what leaders from top companies have to say about working with Codified Labs."
        />

        <div className="grid gap-5 lg:grid-cols-[1.2fr_1fr]">
          <Reveal className="h-full">
            <figure className="relative flex h-full flex-col justify-between overflow-hidden rounded-[28px] bg-ink-900 p-8 text-white shadow-deep sm:p-10">
              <div aria-hidden="true" className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary-600/30 blur-3xl" />
              <svg aria-hidden="true" viewBox="0 0 48 36" className="relative h-9 w-12 text-primary-400">
                <path
                  fill="currentColor"
                  d="M0 36V22.4C0 9.6 6.4 2.13 19.2 0l1.6 4.27C14.4 6.4 11.2 10.13 11.2 15.47h8V36H0Zm27.2 0V22.4C27.2 9.6 33.6 2.13 46.4 0L48 4.27c-6.4 2.13-9.6 5.86-9.6 11.2h8V36H27.2Z"
                />
              </svg>
              <blockquote className="relative mt-8 font-display text-xl font-medium leading-relaxed sm:text-2xl sm:leading-relaxed">
                “{lead.content}”
              </blockquote>
              <figcaption className="relative mt-10 flex items-center gap-4 border-t border-white/10 pt-6">
                <span
                  aria-hidden="true"
                  className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-400 to-iris-500 font-display text-sm font-semibold"
                >
                  {initials(lead.name)}
                </span>
                <span className="flex-1">
                  <span className="block font-semibold">{lead.name}</span>
                  <span className="block text-sm text-slate-400">{lead.role}</span>
                </span>
                <Stars count={lead.rating} />
              </figcaption>
            </figure>
          </Reveal>

          <div className="grid gap-5">
            {rest.map((t, index) => (
              <Reveal key={t.name} delay={0.08 * (index + 1)} className="h-full">
                <figure className="flex h-full flex-col rounded-[28px] border border-slate-200/80 bg-paper p-7 transition duration-500 hover:-translate-y-0.5 hover:shadow-soft sm:p-8">
                  <Stars count={t.rating} />
                  <blockquote className="mt-4 flex-1 text-[15px] leading-7 text-slate-700">“{t.content}”</blockquote>
                  <figcaption className="mt-6 flex items-center gap-3">
                    <span
                      aria-hidden="true"
                      className="flex h-10 w-10 items-center justify-center rounded-xl bg-white font-display text-xs font-semibold text-primary-700 ring-1 ring-slate-200"
                    >
                      {initials(t.name)}
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-slate-950">{t.name}</span>
                      <span className="block text-sm text-slate-500">{t.role}</span>
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="mt-10 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm text-slate-600">
          <span>Trusted by 200+ companies worldwide</span>
          <Stars count={5} />
          <span className="font-semibold text-slate-900">4.9/5 average rating</span>
        </Reveal>
      </div>
    </section>
  )
}
