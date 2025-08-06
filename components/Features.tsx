'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiCode, HiCloud, HiDeviceMobile, HiGlobe, HiShieldCheck, HiLightningBolt } from 'react-icons/hi'

const features = [
  {
    icon: HiCode,
    title: 'Custom Software Development',
    description: 'Tailored solutions built from the ground up to meet your unique business requirements and scale with your growth.',
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
  },
  {
    icon: HiGlobe,
    title: 'Web Applications',
    description: 'Modern, responsive web applications using cutting-edge technologies like React, Next.js, and Node.js.',
    color: 'text-green-600',
    bgColor: 'bg-green-100',
  },
  {
    icon: HiDeviceMobile,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile apps that deliver exceptional user experiences on iOS and Android.',
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
  },
  {
    icon: HiCloud,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and deployment strategies using AWS, Azure, and Google Cloud Platform.',
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-100',
  },
  {
    icon: HiShieldCheck,
    title: 'Security & Compliance',
    description: 'Enterprise-grade security implementations and compliance with industry standards like GDPR, HIPAA, and SOC 2.',
    color: 'text-red-600',
    bgColor: 'bg-red-100',
  },
  {
    icon: HiLightningBolt,
    title: 'Performance Optimization',
    description: 'Lightning-fast applications optimized for performance, scalability, and exceptional user experience.',
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-100',
  },
]

export default function Features() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Codified Labs?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine technical expertise with business acumen to deliver solutions that not only work flawlessly 
            but also drive measurable results for your organization.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${feature.bgColor} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`h-6 w-6 ${feature.color}`} />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
              
              <div className="mt-6 flex items-center text-primary-600 font-medium group-hover:text-primary-700">
                Learn more →
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 