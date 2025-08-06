'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiStar } from 'react-icons/hi'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CTO, TechCorp',
    company: 'TechCorp',
    image: '/api/placeholder/80/80',
    content: 'Codified Labs transformed our legacy system into a modern, scalable platform. Their expertise in cloud architecture and attention to detail exceeded our expectations.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Founder, StartupX',
    company: 'StartupX',
    image: '/api/placeholder/80/80',
    content: 'Working with Codified Labs was a game-changer for our startup. They delivered a robust mobile app that our users love, and their ongoing support is exceptional.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'VP of Engineering, Enterprise Solutions',
    company: 'Enterprise Solutions',
    image: '/api/placeholder/80/80',
    content: 'The custom software solution developed by Codified Labs increased our operational efficiency by 40%. Their team understands both technology and business needs.',
    rating: 5,
  },
]

export default function Testimonials() {
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
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what leaders from top companies 
            have to say about working with Codified Labs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <HiStar key={i} className="h-5 w-5 text-yellow-400" />
                ))}
              </div>
              
              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </blockquote>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-sm text-primary-600">{testimonial.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center space-x-2 text-gray-600">
            <span>Trusted by 200+ companies worldwide</span>
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <HiStar key={i} className="h-4 w-4 text-yellow-400" />
              ))}
            </div>
            <span className="font-semibold">4.9/5 average rating</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 