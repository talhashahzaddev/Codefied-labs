import Image from 'next/image'
import Link from 'next/link'
import { HiArrowRight, HiCheck } from 'react-icons/hi'
import Reveal from '@/components/ui/Reveal'
import SectionHeader from '@/components/ui/SectionHeader'
import TiltCard from '@/components/ui/TiltCard'

const services = [
  {
    title: 'Mobile Apps',
    description: 'We create high-quality mobile apps that bring profit. From idea validation to a successful launch.',
    features: ['iOS app development', 'Android app development', 'Cross-platform apps', 'Flutter development'],
    image: '/images/services/mobile-apps.svg',
    imageAlt: 'Isometric illustration of two smartphone app screens standing on a platform',
    label: 'iOS, Android and Flutter',
    href: '/services#mobile-apps',
  },
  {
    title: 'Web Solutions',
    description: 'From polished websites to engaging applications, we build responsive web experiences for every screen.',
    features: ['Front-end development', 'Progressive Web Apps', 'Single Page Applications', 'Responsive websites'],
    image: '/images/services/web-solutions.svg',
    imageAlt: 'Isometric illustration of a responsive website shown on a browser window and a phone',
    label: 'Websites, apps and PWAs',
    href: '/services#web-solutions',
  },
  {
    title: 'Custom Software',
    description: 'Take control of your business processes with software designed around the way your team works.',
    features: ['Enterprise applications', 'Business automation', 'System integration', 'Legacy modernization'],
    image: '/images/services/custom-software.svg',
    imageAlt: 'Isometric illustration of an analytics dashboard connected to automated workflow steps',
    label: 'Built around your business',
    href: '/services#custom-software',
  },
]

export default function Services() {
  return (
    <section aria-labelledby="core-services-title" className="section overflow-hidden bg-paper">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-grid-light mask-radial opacity-70" />

      <div className="container-page relative">
        <SectionHeader
          id="core-services-title"
          title="Our Core Services"
          description="From concept to deployment, we provide comprehensive software development services that transform your vision into powerful digital solutions."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            // The last card spans both columns on tablets, so it switches to a side-by-side layout there.
            const wide = index === services.length - 1
            return (
            <Reveal key={service.title} delay={index * 0.08} className={wide ? 'md:col-span-2 xl:col-span-1' : ''}>
              <TiltCard className={`group flex h-full flex-col overflow-hidden ${wide ? 'md:flex-row xl:flex-col' : ''} rounded-[28px] border border-slate-200/80 bg-white shadow-soft transition-shadow duration-500 hover:shadow-lift`}>
                <div
                  className={`relative aspect-[16/10] overflow-hidden border-b border-slate-100 ${
                    wide ? 'md:aspect-auto md:min-h-[320px] md:w-1/2 md:border-b-0 md:border-r xl:aspect-[16/10] xl:min-h-0 xl:w-full xl:border-b xl:border-r-0' : ''
                  }`}
                >
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    sizes="(min-width: 1280px) 400px, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <span className="absolute left-4 top-4 rounded-full border border-white/70 bg-white/85 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm backdrop-blur">
                    {service.label}
                  </span>
                </div>

                <div className={`flex flex-1 flex-col p-6 sm:p-7 ${wide ? 'md:justify-center xl:justify-start' : ''}`}>
                  <h3 className="text-2xl font-semibold text-slate-950">{service.title}</h3>
                  <p className="mt-3 text-[15px] leading-7 text-slate-600">{service.description}</p>

                  <ul className="mt-6 flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 py-1 pl-1.5 pr-3 text-[13px] text-slate-700">
                        <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-700">
                          <HiCheck aria-hidden="true" className="h-3 w-3" />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={service.href}
                    className="group/link mt-auto inline-flex items-center gap-2 pt-7 text-sm font-semibold text-primary-700 transition-colors hover:text-primary-900"
                  >
                    Learn more<span className="sr-only"> about {service.title}</span>
                    <HiArrowRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </TiltCard>
            </Reveal>
            )
          })}
        </div>

        <Reveal className="mt-12 flex justify-center sm:mt-14">
          <Link href="/services" className="btn-primary group">
            Explore all services
            <HiArrowRight aria-hidden="true" className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
