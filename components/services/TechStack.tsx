import { HiOutlineCodeBracket, HiOutlineServer, HiOutlineDevicePhoneMobile, HiOutlineCloud, HiOutlineCircleStack, HiOutlineCpuChip } from 'react-icons/hi2'
import { techCategories } from '@/lib/content'
import Reveal from '@/components/ui/Reveal'
import SectionHeader from '@/components/ui/SectionHeader'

const categoryIcons = [
  HiOutlineCodeBracket,
  HiOutlineServer,
  HiOutlineDevicePhoneMobile,
  HiOutlineCloud,
  HiOutlineCircleStack,
  HiOutlineCpuChip,
]

export default function TechStack() {
  return (
    <section id="tech-stack" aria-labelledby="tech-stack-title" className="section isolate overflow-hidden bg-ink-950 text-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-dark mask-radial" />
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary-600/25 blur-[120px]" />
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-iris-500/20 blur-[120px]" />
      </div>

      <div className="container-page">
        <SectionHeader
          id="tech-stack-title"
          tone="dark"
          title="Our Technology Stack"
          description="We leverage the latest and most reliable technologies to build robust, scalable, and future-proof solutions for our clients."
        />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {techCategories.map((category, index) => {
            const CategoryIcon = categoryIcons[index]
            return (
              <Reveal key={category.title} delay={(index % 3) * 0.06} className="h-full">
                <article className="group flex h-full flex-col rounded-[28px] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-sm transition duration-300 hover:border-white/20 hover:bg-white/[0.06] sm:p-7">
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-b from-ink-700 to-ink-800 text-primary-300">
                      <CategoryIcon aria-hidden="true" className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold">{category.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-slate-400">{category.description}</p>
                    </div>
                  </div>

                  <ul className="mt-6 grid grid-cols-3 gap-2.5">
                    {category.technologies.map((tech) => (
                      <li
                        key={tech.name}
                        className="flex flex-col items-center gap-2 rounded-2xl border border-white/[0.06] bg-white/[0.03] px-2 py-3.5 text-center transition duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.07]"
                      >
                        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-[0_8px_20px_-10px_rgba(0,0,0,0.8)]">
                          <tech.icon aria-hidden="true" className="h-5 w-5" style={{ color: tech.color }} />
                        </span>
                        <span className="text-xs font-medium leading-tight text-slate-300">{tech.name}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            )
          })}
        </div>

        <Reveal className="mt-12 text-center">
          <p className="chip-dark px-5 py-2 text-sm">And many more technologies based on your project needs</p>
        </Reveal>
      </div>
    </section>
  )
}
