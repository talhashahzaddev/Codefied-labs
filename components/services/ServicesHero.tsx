import Link from 'next/link'
import { HiArrowRight } from 'react-icons/hi'
import PageHero from '@/components/ui/PageHero'

export default function ServicesHero() {
  return (
    <PageHero
      badge="Complete Software Solutions"
      title="Our Services"
      description="With Codified Labs, you can relax and enjoy your product development journey. We professionally handle every step from project discovery to development and further support. We always care for our clients' projects as if they were ours."
      stats={[
        { value: '500+', label: 'Projects Completed' },
        { value: '50+', label: 'Technologies Mastered' },
        { value: '98%', label: 'Client Satisfaction' },
      ]}
      visual={{
        src: '/images/illustrations/services-hero.svg',
        alt: 'Isometric illustration of modular software blocks for code, analytics and mobile assembled on a shared platform',
        width: 640,
        height: 540,
      }}
    >
      <div className="flex flex-col gap-3 sm:flex-row">
        <Link href="/contact" className="btn-primary group">
          Start Your Project
          <HiArrowRight aria-hidden="true" className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </Link>
        <a href="#primary-services" className="btn-on-dark">
          Browse services
        </a>
      </div>
    </PageHero>
  )
}
