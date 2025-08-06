'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa'

const teamMembers = [
  {
    name: 'Alex Rodriguez',
    role: 'Co-Founder & CEO',
    bio: 'Former Principal Engineer at Google with 15+ years of experience in scalable system architecture.',
    image: '/api/placeholder/300/300',
    skills: ['System Architecture', 'Leadership', 'Strategy'],
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#',
    },
  },
  {
    name: 'Sarah Chen',
    role: 'Co-Founder & CTO',
    bio: 'Ex-Microsoft Engineering Manager specializing in cloud solutions and distributed systems.',
    image: '/api/placeholder/300/300',
    skills: ['Cloud Architecture', 'DevOps', 'Team Building'],
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#',
    },
  },
  {
    name: 'Michael Johnson',
    role: 'Lead Full-Stack Developer',
    bio: 'Full-stack expert with deep expertise in React, Node.js, and modern web technologies.',
    image: '/api/placeholder/300/300',
    skills: ['React', 'Node.js', 'TypeScript'],
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#',
    },
  },
  {
    name: 'Emily Davis',
    role: 'Senior Mobile Developer',
    bio: 'Mobile development specialist with expertise in React Native and native iOS/Android development.',
    image: '/api/placeholder/300/300',
    skills: ['React Native', 'iOS', 'Android'],
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#',
    },
  },
  {
    name: 'David Kim',
    role: 'DevOps Engineer',
    bio: 'Cloud infrastructure expert specializing in AWS, Kubernetes, and automated deployment pipelines.',
    image: '/api/placeholder/300/300',
    skills: ['AWS', 'Kubernetes', 'CI/CD'],
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#',
    },
  },
  {
    name: 'Lisa Wang',
    role: 'UI/UX Designer',
    bio: 'Design leader with a passion for creating intuitive and beautiful user experiences.',
    image: '/api/placeholder/300/300',
    skills: ['UI Design', 'UX Research', 'Prototyping'],
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#',
    },
  },
]

export default function Team() {
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
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our diverse team of experts brings together decades of experience in software development, 
            design, and business strategy to deliver exceptional results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-primary-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.bio}</p>
              </div>

              <div className="mb-6">
                <div className="flex flex-wrap gap-2 justify-center">
                  {member.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 text-xs font-medium bg-primary-50 text-primary-600 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex justify-center space-x-4">
                <a
                  href={member.social.linkedin}
                  className="text-gray-400 hover:text-blue-600 transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="h-5 w-5" />
                </a>
                <a
                  href={member.social.twitter}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  aria-label="Twitter"
                >
                  <FaTwitter className="h-5 w-5" />
                </a>
                <a
                  href={member.social.github}
                  className="text-gray-400 hover:text-gray-900 transition-colors"
                  aria-label="GitHub"
                >
                  <FaGithub className="h-5 w-5" />
                </a>
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
              We're growing! Join our team of innovators.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 