import type { Metadata } from 'next'
import PortfolioHero from '@/components/portfolio/PortfolioHero'
import ProjectShowcase from '@/components/portfolio/ProjectShowcase'
import CaseStudies from '@/components/portfolio/CaseStudies'
import CTA from '@/components/CTA'

export const metadata: Metadata = {
  title: 'Portfolio - Codified Labs Success Stories & Case Studies',
  description: 'Explore our portfolio of successful software development projects. See how we\'ve helped businesses transform with custom web applications, mobile apps, and enterprise solutions.',
  keywords: [
    'codified labs portfolio',
    'software development case studies',
    'web application examples',
    'mobile app portfolio',
    'custom software projects',
    'client success stories'
  ],
}

export default function PortfolioPage() {
  return (
    <div className="min-h-screen">
      <PortfolioHero />
      <ProjectShowcase />
      <CaseStudies />
      <CTA />
    </div>
  )
} 