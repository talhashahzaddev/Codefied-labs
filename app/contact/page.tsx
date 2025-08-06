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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        <ContactForm />
        <ContactInfo />
      </div>
    </div>
  )
} 