import type { Metadata } from 'next'
import ServicesHero from '@/components/services/ServicesHero'
import ServicesList from '@/components/services/ServicesList'
import ClientShowcase from '@/components/services/ClientShowcase'
import ProcessSection from '@/components/services/ProcessSection'
import TechStack from '@/components/services/TechStack'

export const metadata: Metadata = {
  title: 'Custom Software Development Services',
  description: 'Comprehensive software development services including web applications, mobile apps, cloud solutions, and enterprise software. Expert team delivering scalable solutions.',
  keywords: [
    'custom software development',
    'web development services',
    'mobile app development',
    'cloud solutions',
    'enterprise software',
    'API development',
    'DevOps services',
    'software consulting'
  ],
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <ServicesHero />
      <ServicesList />
     
      <ProcessSection />
      <TechStack />
    </div>
  )
} 