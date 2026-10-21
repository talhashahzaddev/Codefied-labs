import Image from 'next/image'
import Link from 'next/link'
import { HiArrowRight } from 'react-icons/hi'
import { projects } from '@/lib/content'
import Reveal from '@/components/ui/Reveal'
import SectionHeader from '@/components/ui/SectionHeader'
import TiltCard from '@/components/ui/TiltCard'

export default function FeaturedWork() {
  const featured = projects.filter((p) => p.featured)

  return (
    <section aria-labelledby="featured-work-title" className="section bg-paper">
      <div className="container-page">
        <SectionHeader
          id="featured-work-title"
          title="Featured Projects"
          description="Explore some of our most impactful projects that have transformed businesses and delivered exceptional results."
        >
          <Link
            href="/portfolio"
            className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary-700 hover:text-primary-900"
          >
            View the full portfolio
            <HiArrowRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </SectionHeader>

        <div className="grid gap-6 lg:grid-cols-2">
          {featured.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.1}>
              <TiltCard max={3} className="group h-full">
                <Link
                  href="/portfolio"
                  className="flex h-full flex-col overflow-hidden rounded-[28px] border border-slate-200/80 bg-white shadow-soft transition-shadow duration-500 hover:shadow-lift"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 600px, 100vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                    <span className="absolute right-4 top-4 rounded-full bg-ink-900/75 px-3 py-1 text-[11px] font-medium text-slate-200 backdrop-blur">
                      Illustrative concept
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6 sm:p-8">
                    <p className="text-sm font-medium text-primary-700">{project.category}</p>
                    <h3 className="mt-2 text-2xl font-semibold text-slate-950">{project.title}</h3>
                    <p className="mt-3 text-[15px] leading-7 text-slate-600">{project.description}</p>
                    <ul aria-label="Technologies used" className="mt-6 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <li key={tech} className="chip">
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Link>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
