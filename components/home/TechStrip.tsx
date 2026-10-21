import { techCategories } from '@/lib/content'
import Reveal from '@/components/ui/Reveal'

// A cross-section of the stack already listed on the Services page.
const featured = ['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'Flutter', 'Swift', 'AWS', 'Docker', 'Kubernetes', 'PostgreSQL', 'TensorFlow']
const all = techCategories.flatMap((c) => c.technologies)
const items = featured.map((name) => all.find((t) => t.name === name)!).filter(Boolean)

export default function TechStrip() {
  return (
    <section aria-labelledby="tech-strip-title" className="relative border-b border-slate-200/70 bg-white py-12 sm:py-14">
      <div className="container-page">
        <Reveal className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-12">
          <h2 id="tech-strip-title" className="shrink-0 text-sm font-medium text-slate-500 lg:w-48">
            Technologies we build with every day
          </h2>
          <ul className="grid flex-1 grid-cols-3 gap-x-4 gap-y-6 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-12">
            {items.map((tech) => (
              <li key={tech.name} className="group flex flex-col items-center gap-2 text-center">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200/80 bg-white shadow-soft transition duration-300 group-hover:-translate-y-0.5 group-hover:shadow-lift">
                  <tech.icon aria-hidden="true" className="h-5 w-5" style={{ color: tech.color }} />
                </span>
                <span className="text-xs font-medium text-slate-600">{tech.name}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
