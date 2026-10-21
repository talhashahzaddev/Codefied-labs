import Reveal from '@/components/ui/Reveal'

const milestones = [
  {
    year: '2020',
    title: 'Foundation',
    description: 'Founded with a vision to democratize cutting-edge software development for businesses of all sizes.',
  },
  {
    year: '2021',
    title: 'First 100 Projects',
    description: 'Successfully delivered our first 100 projects, establishing our reputation for quality and reliability.',
  },
  {
    year: '2022',
    title: 'Global Expansion',
    description: 'Expanded our services globally, serving clients across North America, Europe, and Asia.',
  },
  {
    year: '2023',
    title: 'AI Integration',
    description: 'Pioneered AI-powered development tools and integrated machine learning into our service offerings.',
  },
  {
    year: '2024',
    title: '500+ Projects',
    description: 'Reached the milestone of 500+ successful projects with 98% client satisfaction rate.',
  },
]

export default function CompanyStory() {
  return (
    <section aria-labelledby="story-title" className="section bg-white">
      <div className="container-page grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-20">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <h2 id="story-title" className="text-3xl font-semibold leading-[1.1] text-slate-950 sm:text-4xl lg:text-[2.75rem]">
            Our Story
          </h2>
          <div className="mt-6 space-y-5 text-base leading-8 text-slate-600 sm:text-lg">
            <p>
              Codified Labs was born from a simple belief: every business deserves access to world-class software
              solutions, regardless of size or industry. Our founders, seasoned software architects with decades of
              combined experience, recognized the gap between complex technical requirements and practical business
              needs.
            </p>
            <p>
              What started as a small consultancy has grown into a comprehensive software development powerhouse, but
              we&apos;ve never lost sight of our core mission - to deliver exceptional software that drives real business
              value.
            </p>
            <p>
              Today, we&apos;re proud to work with everyone from innovative startups to Fortune 500 companies, helping
              them navigate digital transformation and achieve their technology goals.
            </p>
          </div>
        </Reveal>

        <ol className="relative">
          <span aria-hidden="true" className="absolute bottom-8 left-[31px] top-8 w-px bg-gradient-to-b from-primary-300 via-iris-300 to-mint-300" />
          {milestones.map((milestone, index) => (
            <Reveal as="li" key={milestone.year} delay={index * 0.06} className="relative flex gap-6 pb-6 last:pb-0">
              <span className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center">
                <span aria-hidden="true" className="absolute inset-0 translate-x-1 translate-y-1 rounded-2xl bg-iris-300/40" />
                <span className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-200 bg-white font-display text-sm font-semibold text-primary-700 shadow-soft">
                  {milestone.year}
                </span>
              </span>
              <div className="flex-1 rounded-3xl border border-slate-200/80 bg-paper p-5 transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-soft sm:p-6">
                <h3 className="text-lg font-semibold text-slate-950">{milestone.title}</h3>
                <p className="mt-1.5 text-[15px] leading-7 text-slate-600">{milestone.description}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
