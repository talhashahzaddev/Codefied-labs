'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiCode, HiGlobe, HiDeviceMobile, HiCloud, HiCog, HiShieldCheck, HiDatabase, HiChartBar, HiLightningBolt, HiLightBulb, HiUsers, HiDesktopComputer, HiSupport, HiShoppingCart, HiChat, HiUserGroup, HiTrendingUp, HiChip, HiEye } from 'react-icons/hi'

// Primary Services - Core offerings
const primaryServices = [
  {
    icon: HiDeviceMobile,
    title: 'Android App Development',
    description: 'Codified Labs has a team of experienced Android App Developers that are ready to help you with your app idea.',
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
  },
  {
    icon: HiDeviceMobile,
    title: 'iOS App Development',
    description: 'Codified Labs develops next-gen iOS apps for businesses that ensure market disruption, growth, and scalability.',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
  },
  {
    icon: HiDeviceMobile,
    title: 'Cross Platform App Development',
    description: 'Partner with Codified Labs to get the most out of your next app project with cross-platform solutions.',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
  },
  {
    icon: HiCode,
    title: 'Custom Software Development',
    description: 'Our custom software development services provide our clients with the freedom to grow and scale.',
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50',
    borderColor: 'border-indigo-200',
  },
  {
    icon: HiLightningBolt,
    title: 'Startup App Development',
    description: 'We rely on our modernized core to help startups to bring their app ideas to life.',
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-50',
    borderColor: 'border-yellow-200',
  },
  {
    icon: HiDeviceMobile,
    title: 'Flutter App Development',
    description: 'Codified Labs is a full-scale flutter app development company that build scalable mobile apps.',
    color: 'text-cyan-600',
    bgColor: 'bg-cyan-50',
    borderColor: 'border-cyan-200',
  },
  {
    icon: HiGlobe,
    title: 'Web Development',
    description: 'Establish a strong digital presence with custom website design and development services.',
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-200',
  },
  {
    icon: HiDesktopComputer,
    title: 'Game Development',
    description: 'Codified Labs is a leading mobile game development company that develop high-quality mobile games.',
    color: 'text-pink-600',
    bgColor: 'bg-pink-50',
    borderColor: 'border-pink-200',
  },
  {
    icon: HiSupport,
    title: 'Mobile App Support',
    description: 'Codified Labs provides result-orientated and efficient application support and maintenance solution for after deployment.',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200',
  },
  {
    icon: HiDeviceMobile,
    title: 'Wearable App Development',
    description: 'Explore the limitless possibilities with wearable technology and expand your business through smarter, more efficient solutions.',
    color: 'text-violet-600',
    bgColor: 'bg-violet-50',
    borderColor: 'border-violet-200',
  },
  {
    icon: HiCloud,
    title: 'Cloud Native Development',
    description: 'Creating and delivering an innovative business experience to your stakeholder.',
    color: 'text-sky-600',
    bgColor: 'bg-sky-50',
    borderColor: 'border-sky-200',
  },
  {
    icon: HiCog,
    title: 'IoT Development',
    description: 'As a forward-thinking startup or enterprise, working on IoT technology is a wise move.',
    color: 'text-teal-600',
    bgColor: 'bg-teal-50',
    borderColor: 'border-teal-200',
  },
  {
    icon: HiCode,
    title: 'API Integration',
    description: 'Scale the capabilities of your business solutions through custom API development and integration services.',
    color: 'text-red-600',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200',
  },
  {
    icon: HiShoppingCart,
    title: 'E-Commerce Software Development',
    description: 'Scale the capabilities of your business solutions through custom API development and integration services.',
    color: 'text-amber-600',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-200',
  },
  {
    icon: HiChat,
    title: 'Chatbot Development',
    description: 'Boost customer engagement and communication efforts 10x with intelligent chatbot solutions.',
    color: 'text-lime-600',
    bgColor: 'bg-lime-50',
    borderColor: 'border-lime-200',
  },
  {
    icon: HiDeviceMobile,
    title: 'Mobile App Development',
    description: 'Codified Labs is a mobile app development company that implements a data-driven and disruptive approach to leverage technologies.',
    color: 'text-slate-600',
    bgColor: 'bg-slate-50',
    borderColor: 'border-slate-200',
  }
]

// Consulting Services
const consultingServices = [
  {
    icon: HiCloud,
    title: 'Cloud Computing',
    description: 'Cloud technology makes it possible to build excellent IT infrastructure.',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
  },
  {
    icon: HiUserGroup,
    title: 'CTO Consultant',
    description: 'Work with C-level tech executives to experience fundamental digital transformation.',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
  },
  {
    icon: HiLightBulb,
    title: 'Emerging Technology',
    description: 'Codified Labs delivers world-class enterprise emerging technology solutions.',
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-50',
    borderColor: 'border-yellow-200',
  },
  {
    icon: HiTrendingUp,
    title: 'Digital Transformation',
    description: 'As premier digital transformation consultants, our digital transformation services provide our clients with competitive advantages.',
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
  },
  {
    icon: HiGlobe,
    title: 'Digital Marketplace',
    description: 'Create fully-featured online niche marketplaces, attract relevant global traffic.',
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50',
    borderColor: 'border-indigo-200',
  },
  {
    icon: HiChartBar,
    title: 'Data Analytics',
    description: 'Codified Labs big data analytics services are designed for enterprise organizations.',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200',
  },
  {
    icon: HiDesktopComputer,
    title: 'Digital Strategy',
    description: 'Our digital strategy consulting services are user-centric digitalized concepts.',
    color: 'text-pink-600',
    bgColor: 'bg-pink-50',
    borderColor: 'border-pink-200',
  },
  {
    icon: HiShieldCheck,
    title: 'IP Protection',
    description: 'Protecting Intellectual Property can be an incredibly expensive, time consuming and complex task.',
    color: 'text-red-600',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200',
  },
  {
    icon: HiCog,
    title: 'Technology Consulting',
    description: 'Our tech consulting services encompass all the modern aspects of technology implementation.',
    color: 'text-teal-600',
    bgColor: 'bg-teal-50',
    borderColor: 'border-teal-200',
  },
  {
    icon: HiLightningBolt,
    title: 'MVP Software Development',
    description: 'Codified Labs is experienced in designing, developing, and launching minimum viable products.',
    color: 'text-cyan-600',
    bgColor: 'bg-cyan-50',
    borderColor: 'border-cyan-200',
  },
  {
    icon: HiDeviceMobile,
    title: 'Managing Mobility',
    description: 'Codified Labs helps you set up the architecture, build mobility systems.',
    color: 'text-violet-600',
    bgColor: 'bg-violet-50',
    borderColor: 'border-violet-200',
  },
  {
    icon: HiTrendingUp,
    title: 'Lean Startup Plan',
    description: 'Our lean startup services enable startups to find the right areas that impact consumers.',
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-200',
  }
]

// Trending Services
const trendingServices = [
  {
    icon: HiChip,
    title: 'AI Development',
    description: 'Codified Labs is a leading AI software development company laser-focused on building, training and deploying AI-based algorithms.',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
  },
  {
    icon: HiEye,
    title: 'AR/VR Development',
    description: 'An AR/VR app development company to cater to next-gen digital media enthusiasts.',
    color: 'text-pink-600',
    bgColor: 'bg-pink-50',
    borderColor: 'border-pink-200',
  },
  {
    icon: HiDesktopComputer,
    title: 'Digital Strategy',
    description: 'Our digital strategy consulting services are user-centric digitalized concepts.',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
  },
  {
    icon: HiCog,
    title: 'Automation Consultancy',
    description: 'Put the right talent, data, and intelligence into action for business transformation.',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200',
  },
  {
    icon: HiDeviceMobile,
    title: 'Bluetooth App Development',
    description: 'Deliver low-consumption interactive experiences to your end users through beacon-based digital products.',
    color: 'text-cyan-600',
    bgColor: 'bg-cyan-50',
    borderColor: 'border-cyan-200',
  },
  {
    icon: HiDatabase,
    title: 'NFT Development',
    description: 'Codified Labs specializes in building blockchain ecosystems for creating and managing NFTs.',
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-50',
    borderColor: 'border-yellow-200',
  },
  {
    icon: HiChartBar,
    title: 'Machine Learning',
    description: 'Use ML solutions and establish stronger foundations for effective business processes.',
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
  },
  {
    icon: HiDatabase,
    title: 'Blockchain Development',
    description: 'We are a Blockchain development services provider to help enterprises to acquire transparency and automation.',
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50',
    borderColor: 'border-indigo-200',
  },
  {
    icon: HiGlobe,
    title: 'Metaverse Development',
    description: 'Build your own shared and immersive experiences where players and avatars can engage with each other.',
    color: 'text-violet-600',
    bgColor: 'bg-violet-50',
    borderColor: 'border-violet-200',
  },
  {
    icon: HiCloud,
    title: 'DevOps Consultancy',
    description: 'Accomplish your technical delivery objectives and create, deploy and test your products and solutions faster.',
    color: 'text-teal-600',
    bgColor: 'bg-teal-50',
    borderColor: 'border-teal-200',
  },
  {
    icon: HiDeviceMobile,
    title: 'React Native App Development',
    description: 'Partner with Codified Labs as your react native app development company.',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
  },
  {
    icon: HiChip,
    title: 'Generative AI',
    description: 'Gen AI – a new accelerator in the transformative digital landscape enables process automation and optimization.',
    color: 'text-red-600',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200',
  }
]

// Service Section Component
interface ServiceSectionProps {
  title: string
  description: string
  services: typeof primaryServices
  sectionId: string
}

function ServiceSection({ title, description, services, sectionId }: ServiceSectionProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id={sectionId} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border ${service.borderColor} group cursor-pointer`}
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${service.bgColor} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className={`h-6 w-6 ${service.color}`} />
              </div>
              
              <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function ServicesList() {
  return (
    <div>
      <ServiceSection 
        title="Primary Services"
        description="Our unwavering commitment to innovation and customer satisfaction drives us to deliver transformative services that effectively address the ever-evolving demands of businesses in the digital world."
        services={primaryServices}
        sectionId="primary-services"
      />
      
      <div className="bg-gray-50">
        <ServiceSection 
          title="Consulting Services"
          description="Strategic consulting services designed to guide your digital transformation journey and optimize your technology investments for maximum business impact."
          services={consultingServices}
          sectionId="consulting-services"
        />
      </div>
      
      <ServiceSection 
        title="Trending Services"
        description="Cutting-edge technology services that leverage the latest innovations in AI, blockchain, AR/VR, and emerging technologies to future-proof your business."
        services={trendingServices}
        sectionId="trending-services"
      />
    </div>
  )
} 