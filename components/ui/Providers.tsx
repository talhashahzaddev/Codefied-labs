'use client'

import { MotionConfig } from 'framer-motion'

/**
 * Global motion settings. `reducedMotion="user"` makes every Framer Motion
 * transform/layout animation honour the visitor's prefers-reduced-motion
 * setting (opacity fades are kept so content still appears gracefully).
 */
export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user" transition={{ ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </MotionConfig>
  )
}
