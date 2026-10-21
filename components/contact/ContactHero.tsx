import PageHero from '@/components/ui/PageHero'

export default function ContactHero() {
  return (
    <PageHero
      badge="Let's Start the Conversation"
      title="Get In Touch"
      description="Ready to transform your business with custom software solutions? Let's discuss your project and explore how we can help you achieve your goals."
      stats={[
        { value: 'Free', label: 'Consultation' },
        { value: '24h', label: 'Response Time' },
        { value: 'No', label: 'Obligation Quote' },
      ]}
      visual={{
        src: '/images/illustrations/contact-hero.svg',
        alt: 'Illustration of an envelope with a letter rising out of it, surrounded by chat bubbles and connected contact points',
        width: 640,
        height: 540,
      }}
    />
  )
}
