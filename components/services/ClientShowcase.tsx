'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const featuredIn = [
  { name: 'TechCrunch', logo: 'TC' },
  { name: 'Forbes', logo: 'FB' },
  { name: 'Wired', logo: 'WD' },
  { name: 'VentureBeat', logo: 'VB' },
  { name: 'Fast Company', logo: 'FC' },
  { name: 'Business Insider', logo: 'BI' },
]

const clients = [
  { name: 'Microsoft', logo: 'MS' },
  { name: 'Google', logo: 'GO' },
  { name: 'Amazon', logo: 'AM' },
  { name: 'IBM', logo: 'IBM' },
  { name: 'Oracle', logo: 'OR' },
  { name: 'Salesforce', logo: 'SF' },
  { name: 'Adobe', logo: 'AD' },
  { name: 'Netflix', logo: 'NF' },
]

export default function ClientShowcase() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Featured In Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-8">We're Featured In</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {featuredIn.map((publication, index) => (
              <motion.div
                key={publication.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                  <span className="font-bold text-gray-600 text-sm">{publication.logo}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      
      </div>
    </section>
  )
} 