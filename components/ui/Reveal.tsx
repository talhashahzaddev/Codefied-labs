'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  /** Vertical offset in px the content rises from. */
  y?: number
  as?: 'div' | 'li' | 'article' | 'section'
}

/**
 * Scroll-triggered entrance used across the site. Runs once, uses only
 * transform + opacity (no layout shift) and respects reduced motion via
 * the global MotionConfig.
 */
export default function Reveal({ children, className, delay = 0, y = 18, as = 'div' }: RevealProps) {
  const Component = motion[as]
  return (
    <Component
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -12% 0px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Component>
  )
}
