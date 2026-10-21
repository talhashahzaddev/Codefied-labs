import Hero from '@/components/Hero'
import TechStrip from '@/components/home/TechStrip'
import Services from '@/components/Services'
import Features from '@/components/Features'
import ProcessPreview from '@/components/home/ProcessPreview'
import FeaturedWork from '@/components/home/FeaturedWork'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <TechStrip />
      <Services />
      <Features />
      <ProcessPreview />
      <FeaturedWork />
      <Testimonials />
      <CTA />
    </div>
  )
}
