/**
 * Shared site content. These lists were previously defined inside individual
 * components; they live here so the homepage previews and the full pages show
 * exactly the same, single-sourced information.
 */
import type { IconType } from 'react-icons'
import { HiLightBulb, HiDesktopComputer, HiCode, HiPlay, HiSupport } from 'react-icons/hi'
import {
  SiReact,
  SiNextdotjs,
  SiAngular,
  SiVuedotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiDotnet,
  SiPhp,
  SiGo,
  SiFlutter,
  SiSwift,
  SiKotlin,
  SiXamarin,
  SiIonic,
  SiAmazonaws,
  SiMicrosoftazure,
  SiGooglecloud,
  SiDocker,
  SiKubernetes,
  SiJenkins,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiRedis,
  SiElasticsearch,
  SiAmazondynamodb,
  SiTensorflow,
  SiPytorch,
  SiOpenai,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'

/* ------------------------------------------------------------------ */
/* Development process                                                  */
/* ------------------------------------------------------------------ */

export type ProcessStep = {
  icon: IconType
  title: string
  short: string
  description: string
  details: string[]
}

export const processSteps: ProcessStep[] = [
  {
    icon: HiLightBulb,
    title: 'Discovery & Planning',
    short: 'Discovery',
    description:
      'We start by understanding your business needs, goals, and challenges to create a comprehensive project roadmap.',
    details: ['Requirement Analysis', 'Technical Feasibility Study', 'Project Timeline & Milestones', 'Technology Stack Selection'],
  },
  {
    icon: HiDesktopComputer,
    title: 'Design & Architecture',
    short: 'Design',
    description: 'Our team creates intuitive designs and scalable architecture that forms the foundation of your solution.',
    details: ['UI/UX Design', 'System Architecture', 'Database Design', 'API Specification'],
  },
  {
    icon: HiCode,
    title: 'Development & Testing',
    short: 'Build',
    description: 'Using agile methodologies, we build your solution with continuous testing and quality assurance.',
    details: ['Agile Development', 'Code Reviews', 'Automated Testing', 'Performance Optimization'],
  },
  {
    icon: HiPlay,
    title: 'Deployment & Launch',
    short: 'Launch',
    description: 'We handle the complete deployment process ensuring your solution goes live smoothly and securely.',
    details: ['Production Deployment', 'Performance Monitoring', 'Security Implementation', 'User Training'],
  },
  {
    icon: HiSupport,
    title: 'Support & Maintenance',
    short: 'Support',
    description:
      'Post-launch, we provide ongoing support, updates, and enhancements to keep your solution running optimally.',
    details: ['24/7 Technical Support', 'Regular Updates', 'Performance Monitoring', 'Feature Enhancements'],
  },
]

/* ------------------------------------------------------------------ */
/* Technology stack                                                     */
/* ------------------------------------------------------------------ */

export type Tech = { name: string; icon: IconType; color: string }
export type TechCategory = { title: string; description: string; technologies: Tech[] }

export const techCategories: TechCategory[] = [
  {
    title: 'Frontend Technologies',
    description: 'Modern frameworks and libraries for creating exceptional user interfaces',
    technologies: [
      { name: 'React', icon: SiReact, color: '#149ECA' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#0F172A' },
      { name: 'Angular', icon: SiAngular, color: '#DD0031' },
      { name: 'Vue.js', icon: SiVuedotjs, color: '#3FB27F' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#0EA5E9' },
    ],
  },
  {
    title: 'Backend Technologies',
    description: 'Robust server-side technologies for scalable applications',
    technologies: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#3C873A' },
      { name: 'Python', icon: SiPython, color: '#3776AB' },
      { name: 'Java', icon: FaJava, color: '#E76F00' },
      { name: '.NET', icon: SiDotnet, color: '#512BD4' },
      { name: 'PHP', icon: SiPhp, color: '#777BB4' },
      { name: 'Go', icon: SiGo, color: '#00ADD8' },
    ],
  },
  {
    title: 'Mobile Development',
    description: 'Cross-platform and native mobile app development frameworks',
    technologies: [
      { name: 'React Native', icon: SiReact, color: '#149ECA' },
      { name: 'Flutter', icon: SiFlutter, color: '#02569B' },
      { name: 'Swift', icon: SiSwift, color: '#F05138' },
      { name: 'Kotlin', icon: SiKotlin, color: '#7F52FF' },
      { name: 'Xamarin', icon: SiXamarin, color: '#3498DB' },
      { name: 'Ionic', icon: SiIonic, color: '#3880FF' },
    ],
  },
  {
    title: 'Cloud & DevOps',
    description: 'Cloud platforms and DevOps tools for deployment and scaling',
    technologies: [
      { name: 'AWS', icon: SiAmazonaws, color: '#FF9900' },
      { name: 'Azure', icon: SiMicrosoftazure, color: '#0078D4' },
      { name: 'Google Cloud', icon: SiGooglecloud, color: '#4285F4' },
      { name: 'Docker', icon: SiDocker, color: '#2496ED' },
      { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5' },
      { name: 'Jenkins', icon: SiJenkins, color: '#D24939' },
    ],
  },
  {
    title: 'Databases',
    description: 'Reliable database solutions for data storage and management',
    technologies: [
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'MySQL', icon: SiMysql, color: '#00758F' },
      { name: 'Redis', icon: SiRedis, color: '#DC382D' },
      { name: 'Elasticsearch', icon: SiElasticsearch, color: '#00A9A5' },
      { name: 'DynamoDB', icon: SiAmazondynamodb, color: '#4053D6' },
    ],
  },
  {
    title: 'AI & Machine Learning',
    description: 'Cutting-edge AI and ML technologies for intelligent solutions',
    technologies: [
      { name: 'TensorFlow', icon: SiTensorflow, color: '#FF6F00' },
      { name: 'PyTorch', icon: SiPytorch, color: '#EE4C2C' },
      { name: 'OpenAI', icon: SiOpenai, color: '#10A37F' },
      { name: 'Scikit-learn', icon: SiScikitlearn, color: '#F7931E' },
      { name: 'Pandas', icon: SiPandas, color: '#150458' },
      { name: 'NumPy', icon: SiNumpy, color: '#4D77CF' },
    ],
  },
]

/* ------------------------------------------------------------------ */
/* Portfolio projects                                                   */
/* ------------------------------------------------------------------ */

export type Project = {
  slug: string
  title: string
  category: string
  description: string
  technologies: string[]
  results: string[]
  link: string
  featured: boolean
  /** Original illustrative mockup (not a client screenshot). */
  image: string
  imageAlt: string
}

export const projects: Project[] = [
  {
    slug: 'fintech-trading-platform',
    title: 'FinTech Trading Platform',
    category: 'Financial Technology',
    description: 'Real-time trading platform processing $2B+ in daily transactions with microsecond latency.',
    technologies: ['React', 'Node.js', 'WebSocket', 'Redis', 'AWS'],
    results: ['99.9% Uptime', '2x Faster Trading', '50% Cost Reduction'],
    link: '#',
    featured: true,
    image: '/images/portfolio/fintech-trading-platform.svg',
    imageAlt: 'Illustrative mockup of a dark trading dashboard with a candlestick chart, order book and watchlist',
  },
  {
    slug: 'healthcare-management-system',
    title: 'Healthcare Management System',
    category: 'Healthcare',
    description: 'Comprehensive patient management system serving 10,000+ patients across 50 clinics.',
    technologies: ['Angular', 'Python', 'PostgreSQL', 'Docker'],
    results: ['40% Efficiency Gain', 'HIPAA Compliant', '24/7 Availability'],
    link: '#',
    featured: true,
    image: '/images/portfolio/healthcare-management-system.svg',
    imageAlt: 'Illustrative mockup of a clinic management interface with a patient list, appointment schedule and vitals chart',
  },
  {
    slug: 'ecommerce-mobile-app',
    title: 'E-Commerce Mobile App',
    category: 'Retail',
    description: 'Cross-platform mobile app with 1M+ downloads and seamless shopping experience.',
    technologies: ['React Native', 'GraphQL', 'MongoDB', 'Stripe'],
    results: ['1M+ Downloads', '4.8★ Rating', '300% Sales Increase'],
    link: '#',
    featured: false,
    image: '/images/portfolio/ecommerce-mobile-app.svg',
    imageAlt: 'Illustrative mockup of two phone screens showing a product catalogue and a shopping cart',
  },
  {
    slug: 'smart-manufacturing-iot',
    title: 'Smart Manufacturing IoT',
    category: 'Manufacturing',
    description: 'IoT-enabled manufacturing system optimizing production efficiency by 35%.',
    technologies: ['Vue.js', 'Python', 'InfluxDB', 'Azure IoT'],
    results: ['35% Efficiency Up', 'Predictive Maintenance', 'Zero Downtime'],
    link: '#',
    featured: false,
    image: '/images/portfolio/smart-manufacturing-iot.svg',
    imageAlt: 'Illustrative mockup of a production-line monitor with connected machine sensors and status gauges',
  },
  {
    slug: 'edtech-learning-platform',
    title: 'EdTech Learning Platform',
    category: 'Education',
    description: 'Interactive learning platform used by 100K+ students with AI-powered personalization.',
    technologies: ['Next.js', 'TensorFlow', 'MySQL', 'AWS Lambda'],
    results: ['100K+ Students', '85% Completion Rate', 'AI Personalization'],
    link: '#',
    featured: false,
    image: '/images/portfolio/edtech-learning-platform.svg',
    imageAlt: 'Illustrative mockup of an online course player with a lesson list and progress rings',
  },
  {
    slug: 'supply-chain-dashboard',
    title: 'Supply Chain Dashboard',
    category: 'Logistics',
    description: 'Real-time supply chain visibility platform tracking $500M+ in inventory.',
    technologies: ['React', 'Elasticsearch', 'Kafka', 'Kubernetes'],
    results: ['Real-time Tracking', '25% Cost Savings', 'Global Scale'],
    link: '#',
    featured: false,
    image: '/images/portfolio/supply-chain-dashboard.svg',
    imageAlt: 'Illustrative mockup of a logistics dashboard with a shipment route map, inventory bars and a shipments table',
  },
]
