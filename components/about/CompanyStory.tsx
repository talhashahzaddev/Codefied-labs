'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function CompanyStory() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

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

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <div className="prose prose-lg text-gray-600">
              <p className="mb-6">
                Codified Labs was born from a simple belief: every business deserves access to world-class 
                software solutions, regardless of size or industry. Our founders, seasoned software architects 
                with decades of combined experience, recognized the gap between complex technical requirements 
                and practical business needs.
              </p>
              <p className="mb-6">
                What started as a small consultancy has grown into a comprehensive software development 
                powerhouse, but we've never lost sight of our core mission - to deliver exceptional 
                software that drives real business value.
              </p>
              <p>
                Today, we're proud to work with everyone from innovative startups to Fortune 500 companies, 
                helping them navigate digital transformation and achieve their technology goals.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start space-x-4"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                  <span className="text-primary-600 font-bold text-sm">{milestone.year}</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
} 