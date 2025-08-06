'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiExternalLink, HiCode, HiTrendingUp } from 'react-icons/hi'

const projects = [
  {
    title: 'FinTech Trading Platform',
    category: 'Financial Technology',
    description: 'Real-time trading platform processing $2B+ in daily transactions with microsecond latency.',
    image: '/api/placeholder/600/400',
    technologies: ['React', 'Node.js', 'WebSocket', 'Redis', 'AWS'],
    results: ['99.9% Uptime', '2x Faster Trading', '50% Cost Reduction'],
    link: '#',
    featured: true,
  },
  {
    title: 'Healthcare Management System',
    category: 'Healthcare',
    description: 'Comprehensive patient management system serving 10,000+ patients across 50 clinics.',
    image: '/api/placeholder/600/400',
    technologies: ['Angular', 'Python', 'PostgreSQL', 'Docker'],
    results: ['40% Efficiency Gain', 'HIPAA Compliant', '24/7 Availability'],
    link: '#',
    featured: true,
  },
  {
    title: 'E-Commerce Mobile App',
    category: 'Retail',
    description: 'Cross-platform mobile app with 1M+ downloads and seamless shopping experience.',
    image: '/api/placeholder/600/400',
    technologies: ['React Native', 'GraphQL', 'MongoDB', 'Stripe'],
    results: ['1M+ Downloads', '4.8★ Rating', '300% Sales Increase'],
    link: '#',
    featured: false,
  },
  {
    title: 'Smart Manufacturing IoT',
    category: 'Manufacturing',
    description: 'IoT-enabled manufacturing system optimizing production efficiency by 35%.',
    image: '/api/placeholder/600/400',
    technologies: ['Vue.js', 'Python', 'InfluxDB', 'Azure IoT'],
    results: ['35% Efficiency Up', 'Predictive Maintenance', 'Zero Downtime'],
    link: '#',
    featured: false,
  },
  {
    title: 'EdTech Learning Platform',
    category: 'Education',
    description: 'Interactive learning platform used by 100K+ students with AI-powered personalization.',
    image: '/api/placeholder/600/400',
    technologies: ['Next.js', 'TensorFlow', 'MySQL', 'AWS Lambda'],
    results: ['100K+ Students', '85% Completion Rate', 'AI Personalization'],
    link: '#',
    featured: false,
  },
  {
    title: 'Supply Chain Dashboard',
    category: 'Logistics',
    description: 'Real-time supply chain visibility platform tracking $500M+ in inventory.',
    image: '/api/placeholder/600/400',
    technologies: ['React', 'Elasticsearch', 'Kafka', 'Kubernetes'],
    results: ['Real-time Tracking', '25% Cost Savings', 'Global Scale'],
    link: '#',
    featured: false,
  },
]

export default function ProjectShowcase() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const featuredProjects = projects.filter(p => p.featured)
  const otherProjects = projects.filter(p => !p.featured)

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
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore some of our most impactful projects that have transformed 
            businesses and delivered exceptional results.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="space-y-20 mb-20">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
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
                      <div className="text-white text-4xl font-bold opacity-20">
                        {project.category}
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                </div>
              </div>

              <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className="space-y-6">
                  <div>
                    <div className="text-primary-600 font-medium mb-2">{project.category}</div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                      {project.title}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary-50 text-primary-600 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Results:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {project.results.map((result) => (
                        <div
                          key={result}
                          className="flex items-center space-x-2 text-sm text-gray-700"
                        >
                          <HiTrendingUp className="h-4 w-4 text-green-500" />
                          <span>{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <a
                    href={project.link}
                    className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-semibold group"
                  >
                    <span>View Case Study</span>
                    <HiExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            More Success Stories
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="relative rounded-lg overflow-hidden mb-6">
                <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-primary-400 to-blue-500">
                  <div className="flex items-center justify-center">
                    <HiCode className="h-12 w-12 text-white opacity-50" />
                  </div>
                </div>
                <div className="absolute top-2 right-2">
                  <span className="text-xs bg-black/50 text-white px-2 py-1 rounded">
                    {project.category}
                  </span>
                </div>
              </div>

              <h4 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h4>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>

              <div className="space-y-4">
                <div>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div className="text-sm text-green-600 font-medium">
                    {project.results[0]}
                  </div>
                  <a
                    href={project.link}
                    className="text-primary-600 hover:text-primary-700 transition-colors"
                  >
                    <HiExternalLink className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 