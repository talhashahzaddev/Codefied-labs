import Image from 'next/image'
import type { IconType } from 'react-icons'
import {
  HiOutlineDevicePhoneMobile,
  HiOutlineCodeBracketSquare,
  HiOutlineRocketLaunch,
  HiOutlineSquare3Stack3D,
  HiOutlineGlobeAlt,
  HiOutlinePuzzlePiece,
  HiOutlineLifebuoy,
  HiOutlineClock,
  HiOutlineCloud,
  HiOutlineCpuChip,
  HiOutlineArrowsRightLeft,
  HiOutlineShoppingCart,
  HiOutlineChatBubbleLeftRight,
  HiOutlineServerStack,
  HiOutlineUserGroup,
  HiOutlineLightBulb,
  HiOutlineArrowTrendingUp,
  HiOutlineBuildingStorefront,
  HiOutlineChartBar,
  HiOutlineMap,
  HiOutlineShieldCheck,
  HiOutlineWrenchScrewdriver,
  HiOutlineBeaker,
  HiOutlineSignal,
  HiOutlinePresentationChartLine,
  HiOutlineSparkles,
  HiOutlineCubeTransparent,
  HiOutlineCog6Tooth,
  HiOutlineWifi,
  HiOutlineCube,
  HiOutlineCircleStack,
  HiOutlineLink,
  HiOutlineGlobeEuropeAfrica,
  HiOutlineArrowPath,
  HiOutlineDeviceTablet,
  HiOutlineVariable,
} from 'react-icons/hi2'
import { SiAndroid, SiApple, SiFlutter, SiReact } from 'react-icons/si'
import Reveal from '@/components/ui/Reveal'

type Service = {
  icon: IconType
  title: string
  description: string
  /** In-page anchors that other pages link to (e.g. the footer). */
  anchors?: string[]
}

// Primary Services - Core offerings
const primaryServices: Service[] = [
  {
    icon: SiAndroid,
    title: 'Android App Development',
    description: 'Codified Labs has a team of experienced Android App Developers that are ready to help you with your app idea.',
  },
  {
    icon: SiApple,
    title: 'iOS App Development',
    description: 'Codified Labs develops next-gen iOS apps for businesses that ensure market disruption, growth, and scalability.',
  },
  {
    icon: HiOutlineDeviceTablet,
    title: 'Cross Platform App Development',
    description: 'Partner with Codified Labs to get the most out of your next app project with cross-platform solutions.',
  },
  {
    icon: HiOutlineCodeBracketSquare,
    title: 'Custom Software Development',
    description: 'Our custom software development services provide our clients with the freedom to grow and scale.',
    anchors: ['custom-software'],
  },
  {
    icon: HiOutlineRocketLaunch,
    title: 'Startup App Development',
    description: 'We rely on our modernized core to help startups to bring their app ideas to life.',
  },
  {
    icon: SiFlutter,
    title: 'Flutter App Development',
    description: 'Codified Labs is a full-scale flutter app development company that build scalable mobile apps.',
  },
  {
    icon: HiOutlineGlobeAlt,
    title: 'Web Development',
    description: 'Establish a strong digital presence with custom website design and development services.',
    anchors: ['web-apps', 'web-solutions'],
  },
  {
    icon: HiOutlinePuzzlePiece,
    title: 'Game Development',
    description: 'Codified Labs is a leading mobile game development company that develop high-quality mobile games.',
  },
  {
    icon: HiOutlineLifebuoy,
    title: 'Mobile App Support',
    description:
      'Codified Labs provides result-orientated and efficient application support and maintenance solution for after deployment.',
  },
  {
    icon: HiOutlineClock,
    title: 'Wearable App Development',
    description:
      'Explore the limitless possibilities with wearable technology and expand your business through smarter, more efficient solutions.',
  },
  {
    icon: HiOutlineCloud,
    title: 'Cloud Native Development',
    description: 'Creating and delivering an innovative business experience to your stakeholder.',
    anchors: ['cloud'],
  },
  {
    icon: HiOutlineWifi,
    title: 'IoT Development',
    description: 'As a forward-thinking startup or enterprise, working on IoT technology is a wise move.',
  },
  {
    icon: HiOutlineArrowsRightLeft,
    title: 'API Integration',
    description: 'Scale the capabilities of your business solutions through custom API development and integration services.',
  },
  {
    icon: HiOutlineShoppingCart,
    title: 'E-Commerce Software Development',
    description: 'Scale the capabilities of your business solutions through custom API development and integration services.',
  },
  {
    icon: HiOutlineChatBubbleLeftRight,
    title: 'Chatbot Development',
    description: 'Boost customer engagement and communication efforts 10x with intelligent chatbot solutions.',
  },
  {
    icon: HiOutlineDevicePhoneMobile,
    title: 'Mobile App Development',
    description:
      'Codified Labs is a mobile app development company that implements a data-driven and disruptive approach to leverage technologies.',
    anchors: ['mobile', 'mobile-apps'],
  },
]

// Consulting Services
const consultingServices: Service[] = [
  {
    icon: HiOutlineServerStack,
    title: 'Cloud Computing',
    description: 'Cloud technology makes it possible to build excellent IT infrastructure.',
  },
  {
    icon: HiOutlineUserGroup,
    title: 'CTO Consultant',
    description: 'Work with C-level tech executives to experience fundamental digital transformation.',
  },
  {
    icon: HiOutlineLightBulb,
    title: 'Emerging Technology',
    description: 'Codified Labs delivers world-class enterprise emerging technology solutions.',
  },
  {
    icon: HiOutlineArrowTrendingUp,
    title: 'Digital Transformation',
    description:
      'As premier digital transformation consultants, our digital transformation services provide our clients with competitive advantages.',
  },
  {
    icon: HiOutlineBuildingStorefront,
    title: 'Digital Marketplace',
    description: 'Create fully-featured online niche marketplaces, attract relevant global traffic.',
  },
  {
    icon: HiOutlineChartBar,
    title: 'Data Analytics',
    description: 'Codified Labs big data analytics services are designed for enterprise organizations.',
  },
  {
    icon: HiOutlineMap,
    title: 'Digital Strategy',
    description: 'Our digital strategy consulting services are user-centric digitalized concepts.',
  },
  {
    icon: HiOutlineShieldCheck,
    title: 'IP Protection',
    description: 'Protecting Intellectual Property can be an incredibly expensive, time consuming and complex task.',
  },
  {
    icon: HiOutlineWrenchScrewdriver,
    title: 'Technology Consulting',
    description: 'Our tech consulting services encompass all the modern aspects of technology implementation.',
  },
  {
    icon: HiOutlineBeaker,
    title: 'MVP Software Development',
    description: 'Codified Labs is experienced in designing, developing, and launching minimum viable products.',
  },
  {
    icon: HiOutlineDevicePhoneMobile,
    title: 'Managing Mobility',
    description: 'Codified Labs helps you set up the architecture, build mobility systems.',
  },
  {
    icon: HiOutlinePresentationChartLine,
    title: 'Lean Startup Plan',
    description: 'Our lean startup services enable startups to find the right areas that impact consumers.',
  },
]

// Trending Services
const trendingServices: Service[] = [
  {
    icon: HiOutlineCpuChip,
    title: 'AI Development',
    description:
      'Codified Labs is a leading AI software development company laser-focused on building, training and deploying AI-based algorithms.',
  },
  {
    icon: HiOutlineCubeTransparent,
    title: 'AR/VR Development',
    description: 'An AR/VR app development company to cater to next-gen digital media enthusiasts.',
  },
  {
    icon: HiOutlineMap,
    title: 'Digital Strategy',
    description: 'Our digital strategy consulting services are user-centric digitalized concepts.',
  },
  {
    icon: HiOutlineCog6Tooth,
    title: 'Automation Consultancy',
    description: 'Put the right talent, data, and intelligence into action for business transformation.',
  },
  {
    icon: HiOutlineSignal,
    title: 'Bluetooth App Development',
    description: 'Deliver low-consumption interactive experiences to your end users through beacon-based digital products.',
  },
  {
    icon: HiOutlineCube,
    title: 'NFT Development',
    description: 'Codified Labs specializes in building blockchain ecosystems for creating and managing NFTs.',
  },
  {
    icon: HiOutlineVariable,
    title: 'Machine Learning',
    description: 'Use ML solutions and establish stronger foundations for effective business processes.',
  },
  {
    icon: HiOutlineLink,
    title: 'Blockchain Development',
    description: 'We are a Blockchain development services provider to help enterprises to acquire transparency and automation.',
  },
  {
    icon: HiOutlineGlobeEuropeAfrica,
    title: 'Metaverse Development',
    description: 'Build your own shared and immersive experiences where players and avatars can engage with each other.',
  },
  {
    icon: HiOutlineArrowPath,
    title: 'DevOps Consultancy',
    description: 'Accomplish your technical delivery objectives and create, deploy and test your products and solutions faster.',
    anchors: ['devops'],
  },
  {
    icon: SiReact,
    title: 'React Native App Development',
    description: 'Partner with Codified Labs as your react native app development company.',
  },
  {
    icon: HiOutlineSparkles,
    title: 'Generative AI',
    description:
      'Gen AI – a new accelerator in the transformative digital landscape enables process automation and optimization.',
  },
]

type Theme = { tile: string; back: string; ring: string; glow: string; section: string }

const themes: Record<string, Theme> = {
  primary: {
    tile: 'bg-gradient-to-br from-primary-500 to-primary-700 text-white',
    back: 'bg-primary-200',
    ring: 'hover:border-primary-200',
    glow: 'from-primary-100/70',
    section: 'bg-white',
  },
  consulting: {
    tile: 'bg-gradient-to-br from-mint-400 to-teal-600 text-white',
    back: 'bg-mint-300/50',
    ring: 'hover:border-mint-300/70',
    glow: 'from-mint-300/30',
    section: 'bg-paper',
  },
  trending: {
    tile: 'bg-gradient-to-br from-iris-400 to-iris-600 text-white',
    back: 'bg-iris-300/60',
    ring: 'hover:border-iris-300',
    glow: 'from-iris-300/30',
    section: 'bg-white',
  },
}

interface ServiceSectionProps {
  title: string
  description: string
  services: Service[]
  sectionId: string
  theme: Theme
  image: { src: string; alt: string }
}

function ServiceSection({ title, description, services, sectionId, theme, image }: ServiceSectionProps) {
  return (
    <section id={sectionId} aria-labelledby={`${sectionId}-title`} className={`section ${theme.section}`}>
      <div className="container-page">
        <Reveal className="mb-12 grid items-center gap-8 sm:mb-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:gap-16">
          <div>
            <p className="text-sm font-medium text-slate-500">
              {services.length} services
            </p>
            <h2 id={`${sectionId}-title`} className="mt-3 text-3xl font-semibold leading-[1.1] text-slate-950 sm:text-4xl lg:text-[2.75rem]">
              {title}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">{description}</p>
          </div>
          <div className="relative overflow-hidden rounded-[28px] border border-slate-200/80 shadow-soft">
            <Image
              src={image.src}
              alt={image.alt}
              width={640}
              height={400}
              sizes="(min-width: 1024px) 560px, 100vw"
              className="h-auto w-full"
            />
          </div>
        </Reveal>

        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service, index) => {
            const [primaryAnchor, ...extraAnchors] = service.anchors ?? []
            return (
              <Reveal as="li" key={service.title} delay={(index % 4) * 0.05} className="relative">
                {extraAnchors.map((a) => (
                  <span key={a} id={a} aria-hidden="true" className="absolute -top-2" />
                ))}
                <article
                  id={primaryAnchor}
                  className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lift target:ring-2 target:ring-primary-400 ${theme.ring}`}
                >
                  <div
                    aria-hidden="true"
                    className={`pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b ${theme.glow} to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                  />
                  <span className="relative mb-5 inline-flex h-12 w-12">
                    <span
                      aria-hidden="true"
                      className={`absolute inset-0 translate-x-1.5 translate-y-1.5 rounded-2xl ${theme.back} transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2`}
                    />
                    <span
                      className={`relative inline-flex h-12 w-12 items-center justify-center rounded-2xl shadow-[inset_0_1px_0_rgba(255,255,255,0.3)] ${theme.tile}`}
                    >
                      <service.icon aria-hidden="true" className="h-6 w-6" />
                    </span>
                  </span>
                  <h3 className="relative text-lg font-semibold leading-snug text-slate-950">{service.title}</h3>
                  <p className="relative mt-2 text-sm leading-6 text-slate-600">{service.description}</p>
                </article>
              </Reveal>
            )
          })}
        </ul>
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
        theme={themes.primary}
        image={{
          src: '/images/services/category-primary.svg',
          alt: 'Isometric illustration of a web interface, a mobile app and stacked software components on a platform',
        }}
      />

      <ServiceSection
        title="Consulting Services"
        description="Strategic consulting services designed to guide your digital transformation journey and optimize your technology investments for maximum business impact."
        services={consultingServices}
        sectionId="consulting-services"
        theme={themes.consulting}
        image={{
          src: '/images/services/category-consulting.svg',
          alt: 'Isometric illustration of a roadmap with milestones, a growth chart and a target',
        }}
      />

      <ServiceSection
        title="Trending Services"
        description="Cutting-edge technology services that leverage the latest innovations in AI, blockchain, AR/VR, and emerging technologies to future-proof your business."
        services={trendingServices}
        sectionId="trending-services"
        theme={themes.trending}
        image={{
          src: '/images/services/category-trending.svg',
          alt: 'Illustration of an AI processor chip beneath a neural network, with a wireframe cube and blockchain hexagons',
        }}
      />
    </div>
  )
}
