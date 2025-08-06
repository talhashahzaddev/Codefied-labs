'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiHeart, HiLightBulb, HiShieldCheck, HiUsers, HiTrendingUp, HiGlobe } from 'react-icons/hi'

const values = [
  {
    icon: HiHeart,
    title: 'Client-Centric Approach',
    description: 'Every decision we make starts with understanding our clients\' unique needs and challenges.',
    color: 'text-red-600',
    bgColor: 'bg-red-50',
  },
  {
    icon: HiLightBulb,
    title: 'Innovation First',
    description: 'We constantly explore cutting-edge technologies to deliver solutions that give our clients a competitive edge.',
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-50',
  },
  {
    icon: HiShieldCheck,
    title: 'Quality & Reliability',
    description: 'We maintain the highest standards of code quality, security, and reliability in every project we deliver.',
    color: 'text-green-600',
    bgColor: 'bg-green-50',
  },
  {
    icon: HiUsers,
    title: 'Collaborative Partnership',
    description: 'We work as an extension of your team, fostering open communication and shared success.',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    icon: HiTrendingUp,
    title: 'Continuous Growth',
    description: 'We embrace learning and adaptation, constantly evolving our skills and methodologies.',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
  },
  {
    icon: HiGlobe,
    title: 'Global Impact',
    description: 'We believe technology should make the world better, one solution at a time.',
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50',
  },
]

export default function Values() {
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
            Our Core Values
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These principles guide everything we do and shape the way we work with our clients and each other.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl ${value.bgColor} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <value.icon className={`h-8 w-8 ${value.color}`} />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                {value.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 