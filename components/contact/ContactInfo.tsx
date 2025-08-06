'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiMail, HiPhone, HiLocationMarker, HiClock, HiChat, HiSupport } from 'react-icons/hi'
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa'

const contactMethods = [
  {
    icon: HiMail,
    title: 'Email Us',
    description: 'Send us an email and we\'ll respond within 24 hours',
    value: 'hello@codified-labs.com',
    link: 'mailto:hello@codified-labs.com',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    icon: HiPhone,
    title: 'Call Us',
    description: 'Speak directly with our team during business hours',
    value: '+1 (555) 123-4567',
    link: 'tel:+1-555-123-4567',
    color: 'text-green-600',
    bgColor: 'bg-green-50',
  },
  {
    icon: HiLocationMarker,
    title: 'Visit Us',
    description: 'Our headquarters in the heart of San Francisco',
    value: '123 Tech Street, San Francisco, CA 94105',
    link: '#',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
  },
  {
    icon: HiClock,
    title: 'Business Hours',
    description: 'We\'re available Monday through Friday',
    value: 'Mon - Fri: 9:00 AM - 6:00 PM PST',
    link: '#',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
  },
]

const faqs = [
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary based on complexity, but most projects range from 3-6 months. We provide detailed timelines during our initial consultation.',
  },
  {
    question: 'Do you offer ongoing support?',
    answer: 'Yes! We provide comprehensive post-launch support, maintenance, and feature updates to ensure your solution continues to perform optimally.',
  },
  {
    question: 'What technologies do you work with?',
    answer: 'We work with a wide range of modern technologies including React, Node.js, Python, cloud platforms (AWS, Azure, GCP), and many others based on project needs.',
  },
  {
    question: 'Can you work with our existing team?',
    answer: 'Absolutely! We often collaborate with in-house teams, providing expertise where needed and integrating seamlessly with your existing workflows.',
  },
]

export default function ContactInfo() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h2>
          
          <div className="space-y-6 mb-12">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className={`flex-shrink-0 w-12 h-12 ${method.bgColor} rounded-lg flex items-center justify-center`}>
                  <method.icon className={`h-6 w-6 ${method.color}`} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">{method.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{method.description}</p>
                  {method.link !== '#' ? (
                    <a
                      href={method.link}
                      className={`text-sm font-medium ${method.color} hover:underline`}
                    >
                      {method.value}
                    </a>
                  ) : (
                    <span className="text-sm font-medium text-gray-700">{method.value}</span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h3>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="bg-white rounded-lg p-6 shadow-sm"
                >
                  <h4 className="font-semibold text-gray-900 mb-2">{faq.question}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-4">Follow Us</h3>
            <div className="flex justify-center space-x-6">
              <a
                href="https://linkedin.com/company/codifiedlabs"
                className="text-gray-400 hover:text-blue-600 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com/codifiedlabs"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter className="h-6 w-6" />
              </a>
              <a
                href="https://github.com/codifiedlabs"
                className="text-gray-400 hover:text-gray-900 transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="h-6 w-6" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 