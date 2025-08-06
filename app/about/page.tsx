import type { Metadata } from 'next'
import AboutHero from '@/components/about/AboutHero'
import CompanyStory from '@/components/about/CompanyStory'
import Values from '@/components/about/Values'
import Team from '@/components/about/Team'
import CTA from '@/components/CTA'

export const metadata: Metadata = {
  title: 'About Codified Labs - Expert Software Development Team',
  description: 'Learn about our mission, values, and the expert team behind Codified Labs. We are passionate about delivering innovative software solutions that transform businesses.',
  keywords: [
    'about codified labs',
    'software development team',
    'company mission',
    'expert developers',
    'technology leadership',
    'software consulting expertise'
  ],
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <AboutHero />
      <CompanyStory />
      <Values />
      <Team />
      <CTA />
    </div>
  )
} 