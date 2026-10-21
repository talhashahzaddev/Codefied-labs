import type { Metadata } from 'next'
import ContactHero from '@/components/contact/ContactHero'
import ContactForm from '@/components/contact/ContactForm'
import ContactInfo from '@/components/contact/ContactInfo'

export const metadata: Metadata = {
  title: 'Contact Codified Labs - Get Your Free Consultation',
  description: 'Ready to transform your business with custom software? Contact Codified Labs for a free consultation. Get in touch with our expert development team today.',
  keywords: [
    'contact codified labs',
    'free consultation',
    'software development quote',
    'get in touch',
    'project inquiry',
    'custom software contact'
  ],
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <ContactHero />
      <section aria-label="Contact form and details" className="relative bg-paper py-16 sm:py-20 lg:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-grid-light mask-radial opacity-60" />
        <div className="container-page relative grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1.45fr)_minmax(0,1fr)] lg:gap-12 xl:gap-16">
          <ContactForm />
          <ContactInfo />
        </div>
      </section>
    </div>
  )
} 