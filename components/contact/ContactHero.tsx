'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function ContactHero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="relative pt-32 pb-16 bg-gradient-to-br from-primary-600 via-primary-700 to-blue-800 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center text-white"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-6"
          >
            💬 Let's Start the Conversation
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          >
            Get In <span className="text-blue-200">Touch</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Ready to transform your business with custom software solutions? 
            Let's discuss your project and explore how we can help you achieve your goals.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
          >
            <div className="text-center">
              <div className="text-2xl font-bold mb-1">Free</div>
              <div className="text-blue-200">Consultation</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-1">24h</div>
              <div className="text-blue-200">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-1">No</div>
              <div className="text-blue-200">Obligation Quote</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 