'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiTrendingUp, HiClock, HiUsers, HiCurrencyDollar } from 'react-icons/hi'

const industries = [
  {
    name: 'Financial Services',
    projects: 45,
    description: 'Secure, compliant solutions for banking, insurance, and fintech companies.',
    impact: '$2.5B+ transactions processed',
    icon: HiCurrencyDollar,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
  },
  {
    name: 'Healthcare',
    projects: 32,
    description: 'HIPAA-compliant systems improving patient care and operational efficiency.',
    impact: '500K+ patients served',
    icon: HiUsers,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    name: 'E-Commerce',
    projects: 28,
    description: 'Scalable platforms driving online sales and customer engagement.',
    impact: '10M+ orders processed',
    icon: HiTrendingUp,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
  },
  {
    name: 'Manufacturing',
    projects: 25,
    description: 'IoT and automation solutions optimizing production and supply chain.',
    impact: '35% efficiency increase',
    icon: HiClock,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
  },
]

const metrics = [
  {
    label: 'Average Project ROI',
    value: '340%',
    description: 'Return on investment within 12 months',
  },
  {
    label: 'Time to Market',
    value: '45%',
    description: 'Faster delivery compared to traditional development',
  },
  {
    label: 'Client Retention',
    value: '94%',
    description: 'Long-term partnerships with satisfied clients',
  },
  {
    label: 'Performance Improvement',
    value: '60%',
    description: 'Average system performance enhancement',
  },
]

export default function CaseStudies() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Industry Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've delivered exceptional results across diverse industries, 
            understanding unique challenges and regulatory requirements.
          </p>
        </motion.div>

        {/* Industries */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${industry.bgColor} mb-4`}>
                <industry.icon className={`h-6 w-6 ${industry.color}`} />
              </div>
              
              <h3 className="text-lg font-bold text-gray-900 mb-2">{industry.name}</h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">{industry.description}</p>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Projects</span>
                  <span className="font-semibold text-gray-900">{industry.projects}</span>
                </div>
                <div className="text-sm font-medium text-primary-600">{industry.impact}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-white rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Measurable Impact
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-primary-600 mb-2">{metric.value}</div>
                <div className="font-semibold text-gray-900 mb-1">{metric.label}</div>
                <div className="text-sm text-gray-600">{metric.description}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-primary-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Join Our Success Stories?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Let's discuss how we can help transform your business with a custom software solution 
              tailored to your unique needs and industry requirements.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Start Your Project
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 