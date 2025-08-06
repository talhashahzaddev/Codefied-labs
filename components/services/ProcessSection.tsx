'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiLightBulb, HiDesktopComputer, HiCode, HiPlay, HiShieldCheck, HiSupport } from 'react-icons/hi'

const processSteps = [
  {
    icon: HiLightBulb,
    title: 'Discovery & Planning',
    description: 'We start by understanding your business needs, goals, and challenges to create a comprehensive project roadmap.',
    details: [
      'Requirement Analysis',
      'Technical Feasibility Study',
      'Project Timeline & Milestones',
      'Technology Stack Selection'
    ],
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-50',
    borderColor: 'border-yellow-200',
  },
  {
    icon: HiDesktopComputer,
    title: 'Design & Architecture',
    description: 'Our team creates intuitive designs and scalable architecture that forms the foundation of your solution.',
    details: [
      'UI/UX Design',
      'System Architecture',
      'Database Design',
      'API Specification'
    ],
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
  },
  {
    icon: HiCode,
    title: 'Development & Testing',
    description: 'Using agile methodologies, we build your solution with continuous testing and quality assurance.',
    details: [
      'Agile Development',
      'Code Reviews',
      'Automated Testing',
      'Performance Optimization'
    ],
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
  },
  {
    icon: HiPlay,
    title: 'Deployment & Launch',
    description: 'We handle the complete deployment process ensuring your solution goes live smoothly and securely.',
    details: [
      'Production Deployment',
      'Performance Monitoring',
      'Security Implementation',
      'User Training'
    ],
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
  },
  {
    icon: HiSupport,
    title: 'Support & Maintenance',
    description: 'Post-launch, we provide ongoing support, updates, and enhancements to keep your solution running optimally.',
    details: [
      '24/7 Technical Support',
      'Regular Updates',
      'Performance Monitoring',
      'Feature Enhancements'
    ],
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50',
    borderColor: 'border-indigo-200',
  },
]

export default function ProcessSection() {
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
            Our Development Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We follow a proven methodology that ensures successful project delivery, 
            from initial concept to ongoing support.
          </p>
        </motion.div>

        <div className="space-y-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="flex items-center mb-6">
                  <div className={`flex items-center justify-center w-12 h-12 rounded-lg ${step.bgColor} mr-4`}>
                    <step.icon className={`h-6 w-6 ${step.color}`} />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-500">Step {index + 1}</div>
                    <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                  </div>
                </div>
                
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {step.description}
                </p>

                <div className="grid grid-cols-2 gap-3">
                  {step.details.map((detail, detailIndex) => (
                    <div
                      key={detailIndex}
                      className="flex items-center space-x-2 text-sm text-gray-700"
                    >
                      <div className={`w-2 h-2 rounded-full ${step.color.replace('text-', 'bg-')}`}></div>
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual Element */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className={`relative p-8 rounded-2xl ${step.bgColor} border-2 ${step.borderColor}`}>
                  <div className="text-center">
                    <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full ${step.color.replace('text-', 'bg-')} text-white mb-4`}>
                      <step.icon className="h-12 w-12" />
                    </div>
                    <div className="text-6xl font-bold text-gray-200">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>
                  
                  {/* Connection Line */}
                 
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 