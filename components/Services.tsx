'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import { HiArrowRight } from 'react-icons/hi'

const services = [
  {
    title: 'Mobile Apps',
    description: 'We create high-quality mobile apps that bring profit. From idea validation to successful launch.',
    features: ['iOS app development', 'Android app development', 'Cross-platform app development', 'Flutter development'],
    image: '/api/placeholder/600/400',
    href: '/services#mobile-apps',
  },
  {
    title: 'Web Solutions',
    description: 'We deliver web solutions from simple websites to engaging applications. We build regular web apps, as well as SPA and PWA.',
    features: ['Front-end development', 'Progressive Web Apps', 'Single Page Applications', 'Responsive websites'],
    image: '/api/placeholder/600/400',
    href: '/services#web-solutions',
  },
  {
    title: 'Custom Software',
    description: 'Custom software gives you full control over your business processes and cuts burdening costs.',
    features: ['Enterprise Applications', 'Business Automation', 'System Integration', 'Legacy Modernization'],
    image: '/api/placeholder/600/400',
    href: '/services#custom-software',
  },
]

export default function Services() {
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
            Our Core Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to deployment, we provide comprehensive software development services 
            that transform your vision into powerful digital solutions.
          </p>
        </motion.div>

        <div className="space-y-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                  <div className="aspect-w-3 aspect-h-2 bg-gradient-to-br from-primary-500 to-blue-600">
                    <div className="flex items-center justify-center">
                      <div className="text-white text-6xl font-bold opacity-20">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
              </div>

              <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {service.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center space-x-2 text-sm text-gray-700"
                      >
                        <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={service.href}
                    className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-semibold group"
                  >
                    <span>Learn More</span>
                    <HiArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <Link
            href="/services"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Explore All Services
            <HiArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
} 