import PageHero from '@/components/ui/PageHero'

export default function PortfolioHero() {
  return (
    <PageHero
      badge="Proven Track Record of Success"
      title="Our Portfolio"
      description="Discover how we've helped businesses across industries transform their operations with cutting-edge software solutions. From startups to Fortune 500 companies, see the impact of our work."
      stats={[
        { value: '500+', label: 'Projects Completed' },
        { value: '200+', label: 'Happy Clients' },
        { value: '50+', label: 'Industries Served' },
        { value: '98%', label: 'Success Rate' },
      ]}
      visual={{
        src: '/images/illustrations/portfolio-hero.svg',
        alt: 'Illustration of a layered set of product screens: an analytics dashboard, a tablet card and a mobile app',
        width: 640,
        height: 540,
      }}
    />
  )
}
