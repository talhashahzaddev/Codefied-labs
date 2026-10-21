import Link from 'next/link'
import { HiArrowRight } from 'react-icons/hi'
import PageHero from '@/components/ui/PageHero'

export default function AboutHero() {
  return (
    <PageHero
      badge="Meet the Team Behind Innovation"
      title="About Codified Labs"
      description="We are a passionate team of software engineers, designers, and innovators dedicated to transforming businesses through cutting-edge technology solutions. Our mission is to bridge the gap between complex technical challenges and business success."
      visual={{
        src: '/images/illustrations/about-hero.svg',
        alt: 'Illustration of three connected pillars representing engineering, design and strategy on a shared platform',
        width: 640,
        height: 540,
      }}
    >
      <div className="flex flex-col gap-3 sm:flex-row">
        <Link href="/contact" className="btn-primary group">
          Work with us
          <HiArrowRight aria-hidden="true" className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </Link>
        <a href="#team" className="btn-on-dark">
          Meet the team
        </a>
      </div>
    </PageHero>
  )
}
