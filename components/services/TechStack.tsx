'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const techCategories = [
  {
    title: 'Frontend Technologies',
    description: 'Modern frameworks and libraries for creating exceptional user interfaces',
    technologies: [
      { name: 'React', color: 'bg-blue-500' },
      { name: 'Next.js', color: 'bg-black' },
      { name: 'Angular', color: 'bg-red-500' },
      { name: 'Vue.js', color: 'bg-green-500' },
      { name: 'TypeScript', color: 'bg-blue-600' },
      { name: 'Tailwind CSS', color: 'bg-teal-500' },
    ],
  },
  {
    title: 'Backend Technologies',
    description: 'Robust server-side technologies for scalable applications',
    technologies: [
      { name: 'Node.js', color: 'bg-green-600' },
      { name: 'Python', color: 'bg-yellow-500' },
      { name: 'Java', color: 'bg-orange-600' },
      { name: '.NET', color: 'bg-purple-600' },
      { name: 'PHP', color: 'bg-indigo-600' },
      { name: 'Go', color: 'bg-blue-500' },
    ],
  },
  {
    title: 'Mobile Development',
    description: 'Cross-platform and native mobile app development frameworks',
    technologies: [
      { name: 'React Native', color: 'bg-blue-500' },
      { name: 'Flutter', color: 'bg-blue-400' },
      { name: 'Swift', color: 'bg-orange-500' },
      { name: 'Kotlin', color: 'bg-purple-500' },
      { name: 'Xamarin', color: 'bg-purple-600' },
      { name: 'Ionic', color: 'bg-blue-600' },
    ],
  },
  {
    title: 'Cloud & DevOps',
    description: 'Cloud platforms and DevOps tools for deployment and scaling',
    technologies: [
      { name: 'AWS', color: 'bg-orange-400' },
      { name: 'Azure', color: 'bg-blue-600' },
      { name: 'Google Cloud', color: 'bg-blue-500' },
      { name: 'Docker', color: 'bg-blue-500' },
      { name: 'Kubernetes', color: 'bg-blue-600' },
      { name: 'Jenkins', color: 'bg-blue-800' },
    ],
  },
  {
    title: 'Databases',
    description: 'Reliable database solutions for data storage and management',
    technologies: [
      { name: 'PostgreSQL', color: 'bg-blue-700' },
      { name: 'MongoDB', color: 'bg-green-600' },
      { name: 'MySQL', color: 'bg-blue-600' },
      { name: 'Redis', color: 'bg-red-600' },
      { name: 'Elasticsearch', color: 'bg-yellow-500' },
      { name: 'DynamoDB', color: 'bg-orange-600' },
    ],
  },
  {
    title: 'AI & Machine Learning',
    description: 'Cutting-edge AI and ML technologies for intelligent solutions',
    technologies: [
      { name: 'TensorFlow', color: 'bg-orange-500' },
      { name: 'PyTorch', color: 'bg-orange-600' },
      { name: 'OpenAI', color: 'bg-green-600' },
      { name: 'Scikit-learn', color: 'bg-blue-500' },
      { name: 'Pandas', color: 'bg-purple-600' },
      { name: 'NumPy', color: 'bg-blue-600' },
    ],
  },
]

export default function TechStack() {
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
            Our Technology Stack
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We leverage the latest and most reliable technologies to build robust, 
            scalable, and future-proof solutions for our clients.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {category.title}
              </h3>
              
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                {category.description}
              </p>

              <div className="grid grid-cols-2 gap-3">
                {category.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ 
                      duration: 0.4, 
                      delay: categoryIndex * 0.1 + techIndex * 0.05 
                    }}
                    className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-50 transition-colors group"
                  >
                    <div className={`w-3 h-3 rounded-full ${tech.color} group-hover:scale-110 transition-transform`}></div>
                    <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
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
          <div className="inline-flex items-center space-x-4 px-6 py-3 bg-primary-50 rounded-full">
            <span className="text-primary-600 font-medium">
              And many more technologies based on your project needs
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 