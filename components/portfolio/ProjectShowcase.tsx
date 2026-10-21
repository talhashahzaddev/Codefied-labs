import Image from 'next/image'
import { HiExternalLink, HiTrendingUp } from 'react-icons/hi'
import { projects } from '@/lib/content'
import Reveal from '@/components/ui/Reveal'
import SectionHeader from '@/components/ui/SectionHeader'
import TiltCard from '@/components/ui/TiltCard'

function ConceptBadge() {
  return (
    <span className="absolute right-4 top-4 z-10 rounded-full bg-ink-900/75 px-3 py-1 text-[11px] font-medium text-slate-200 backdrop-blur">
      Illustrative concept
    </span>
  )
}

export default function ProjectShowcase() {
  const featuredProjects = projects.filter((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  return (
    <section aria-labelledby="featured-projects-title" className="section overflow-hidden bg-white">
      <div className="container-page">
        <SectionHeader
          id="featured-projects-title"
          title="Featured Projects"
          description="Explore some of our most impactful projects that have transformed businesses and delivered exceptional results."
        >
          <p className="mt-4 text-sm text-slate-500">
            Project visuals are original illustrative concepts of each product type, not client screenshots.
          </p>
        </SectionHeader>

        {/* Featured projects */}
        <div className="space-y-16 sm:space-y-24">
          {featuredProjects.map((project, index) => {
            const flip = index % 2 === 1
            return (
              <article
                key={project.slug}
                id={project.slug}
                className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-16"
              >
                <Reveal className={flip ? 'lg:order-2' : ''}>
                  <div className="relative [perspective:1600px]">
                    <div
                      aria-hidden="true"
                      className="absolute -inset-6 -z-10 rounded-[40px] bg-gradient-to-tr from-primary-100 via-iris-300/30 to-mint-300/30 blur-2xl"
                    />
                    <div
                      className={`group relative overflow-hidden rounded-[28px] border border-slate-200/80 bg-slate-100 shadow-deep transition-transform duration-700 ease-out ${
                        flip
                          ? 'lg:[transform:rotateY(-7deg)_rotateX(3deg)] lg:hover:[transform:rotateY(0deg)_rotateX(0deg)]'
                          : 'lg:[transform:rotateY(7deg)_rotateX(3deg)] lg:hover:[transform:rotateY(0deg)_rotateX(0deg)]'
                      }`}
                    >
                      <div className="relative aspect-[16/10]">
                        <Image
                          src={project.image}
                          alt={project.imageAlt}
                          fill
                          sizes="(min-width: 1024px) 640px, 100vw"
                          className="object-cover"
                        />
                      </div>
                      <ConceptBadge />
                      <span className="absolute left-4 top-4 rounded-full bg-primary-600 px-3 py-1 text-xs font-semibold text-white shadow">
                        Featured
                      </span>
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={0.1} className={flip ? 'lg:order-1' : ''}>
                  <p className="text-sm font-medium text-primary-700">{project.category}</p>
                  <h3 className="mt-2 text-3xl font-semibold leading-tight text-slate-950 sm:text-4xl">{project.title}</h3>
                  <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">{project.description}</p>

                  <h4 className="mt-8 text-sm font-semibold text-slate-900">Technologies Used</h4>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <li key={tech} className="rounded-full bg-primary-50 px-3 py-1 text-sm font-medium text-primary-700">
                        {tech}
                      </li>
                    ))}
                  </ul>

                  <h4 className="mt-8 text-sm font-semibold text-slate-900">Key Results</h4>
                  <ul className="mt-3 grid gap-3 sm:grid-cols-3">
                    {project.results.map((result) => (
                      <li
                        key={result}
                        className="flex items-center gap-2 rounded-2xl border border-slate-200/80 bg-paper px-3 py-3 text-sm font-medium text-slate-800"
                      >
                        <HiTrendingUp aria-hidden="true" className="h-4 w-4 shrink-0 text-emerald-500" />
                        {result}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={project.link}
                    className="group mt-8 inline-flex items-center gap-2 font-semibold text-primary-700 hover:text-primary-900"
                  >
                    View Case Study<span className="sr-only">: {project.title}</span>
                    <HiExternalLink aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </Reveal>
              </article>
            )
          })}
        </div>

        {/* Other projects */}
        <Reveal className="mb-10 mt-24 sm:mt-28">
          <h3 className="text-2xl font-semibold text-slate-950 sm:text-3xl">More Success Stories</h3>
        </Reveal>

        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {otherProjects.map((project, index) => (
            <Reveal as="li" key={project.slug} delay={index * 0.08} className="h-full">
              <TiltCard max={4} className="h-full">
                <article
                  id={project.slug}
                  className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-slate-200/80 bg-white shadow-soft transition-shadow duration-500 hover:shadow-lift"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-medium text-slate-700 shadow-sm backdrop-blur">
                      {project.category}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h4 className="text-xl font-semibold text-slate-950">{project.title}</h4>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{project.description}</p>

                    <ul aria-label="Technologies used" className="mb-6 mt-5 flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <li key={tech} className="rounded-lg bg-slate-100 px-2 py-1 text-xs text-slate-600">
                          {tech}
                        </li>
                      ))}
                      {project.technologies.length > 3 && (
                        <li className="rounded-lg bg-slate-100 px-2 py-1 text-xs text-slate-600">
                          +{project.technologies.length - 3}
                        </li>
                      )}
                    </ul>

                    <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-5">
                      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-600">
                        <HiTrendingUp aria-hidden="true" className="h-4 w-4" />
                        {project.results[0]}
                      </span>
                      <a
                        href={project.link}
                        aria-label={`View ${project.title} case study`}
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-primary-700 transition hover:border-primary-300 hover:bg-primary-50"
                      >
                        <HiExternalLink aria-hidden="true" className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </article>
              </TiltCard>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
