import type { ReactNode } from 'react'
import Reveal from './Reveal'

type SectionHeaderProps = {
  title: ReactNode
  description?: ReactNode
  /** `split` puts the description beside the title on large screens. */
  layout?: 'split' | 'center' | 'left'
  tone?: 'light' | 'dark'
  id?: string
  className?: string
  children?: ReactNode
}

export default function SectionHeader({
  title,
  description,
  layout = 'split',
  tone = 'light',
  id,
  className = '',
  children,
}: SectionHeaderProps) {
  const titleColor = tone === 'dark' ? 'text-white' : 'text-slate-950'
  const bodyColor = tone === 'dark' ? 'text-slate-300' : 'text-slate-600'

  if (layout === 'center') {
    return (
      <Reveal className={`mx-auto mb-12 max-w-3xl text-center sm:mb-16 ${className}`}>
        <h2 id={id} className={`text-3xl font-semibold leading-[1.1] sm:text-4xl lg:text-[2.75rem] ${titleColor}`}>
          {title}
        </h2>
        {description && (
          <p className={`mx-auto mt-5 max-w-2xl text-base leading-7 sm:text-lg sm:leading-8 ${bodyColor}`}>{description}</p>
        )}
        {children}
      </Reveal>
    )
  }

  if (layout === 'left') {
    return (
      <Reveal className={`mb-12 max-w-3xl sm:mb-14 ${className}`}>
        <h2 id={id} className={`text-3xl font-semibold leading-[1.1] sm:text-4xl lg:text-[2.75rem] ${titleColor}`}>
          {title}
        </h2>
        {description && <p className={`mt-5 max-w-2xl text-base leading-7 sm:text-lg sm:leading-8 ${bodyColor}`}>{description}</p>}
        {children}
      </Reveal>
    )
  }

  return (
    <Reveal
      className={`mb-12 grid gap-5 sm:mb-16 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-end lg:gap-16 ${className}`}
    >
      <h2 id={id} className={`text-3xl font-semibold leading-[1.1] sm:text-4xl lg:text-[2.75rem] ${titleColor}`}>
        {title}
      </h2>
      <div>
        {description && <p className={`max-w-xl text-base leading-7 sm:text-lg sm:leading-8 ${bodyColor}`}>{description}</p>}
        {children}
      </div>
    </Reveal>
  )
}
