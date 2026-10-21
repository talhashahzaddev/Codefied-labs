import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa'
import Reveal from '@/components/ui/Reveal'
import SectionHeader from '@/components/ui/SectionHeader'

const teamMembers = [
  {
    name: 'Alex Rodriguez',
    role: 'Co-Founder & CEO',
    bio: 'Former Principal Engineer at Google with 15+ years of experience in scalable system architecture.',
    skills: ['System Architecture', 'Leadership', 'Strategy'],
    social: { linkedin: '#', twitter: '#', github: '#' },
  },
  {
    name: 'Sarah Chen',
    role: 'Co-Founder & CTO',
    bio: 'Ex-Microsoft Engineering Manager specializing in cloud solutions and distributed systems.',
    skills: ['Cloud Architecture', 'DevOps', 'Team Building'],
    social: { linkedin: '#', twitter: '#', github: '#' },
  },
  {
    name: 'Michael Johnson',
    role: 'Lead Full-Stack Developer',
    bio: 'Full-stack expert with deep expertise in React, Node.js, and modern web technologies.',
    skills: ['React', 'Node.js', 'TypeScript'],
    social: { linkedin: '#', twitter: '#', github: '#' },
  },
  {
    name: 'Emily Davis',
    role: 'Senior Mobile Developer',
    bio: 'Mobile development specialist with expertise in React Native and native iOS/Android development.',
    skills: ['React Native', 'iOS', 'Android'],
    social: { linkedin: '#', twitter: '#', github: '#' },
  },
  {
    name: 'David Kim',
    role: 'DevOps Engineer',
    bio: 'Cloud infrastructure expert specializing in AWS, Kubernetes, and automated deployment pipelines.',
    skills: ['AWS', 'Kubernetes', 'CI/CD'],
    social: { linkedin: '#', twitter: '#', github: '#' },
  },
  {
    name: 'Lisa Wang',
    role: 'UI/UX Designer',
    bio: 'Design leader with a passion for creating intuitive and beautiful user experiences.',
    skills: ['UI Design', 'UX Research', 'Prototyping'],
    social: { linkedin: '#', twitter: '#', github: '#' },
  },
]

const palettes = [
  ['#3B82F6', '#7C5CFF'],
  ['#14B8A6', '#3B82F6'],
  ['#7C5CFF', '#EC4899'],
  ['#F59E0B', '#F43F5E'],
  ['#2563EB', '#2DD4BF'],
  ['#A78BFA', '#60A5FA'],
]

/**
 * Abstract, non-photographic avatar: a deterministic geometric pattern with
 * the member's initials. No portraits are shown because no real team photos
 * were provided.
 */
function AbstractAvatar({ name, index }: { name: string; index: number }) {
  const [a, b] = palettes[index % palettes.length]
  const seed = name.split('').reduce((sum, ch) => sum + ch.charCodeAt(0), 0)
  const rot = (seed % 4) * 90
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
  const id = `av-${index}`
  return (
    <div className="relative h-20 w-20 shrink-0">
      <span aria-hidden="true" className="absolute inset-0 translate-x-1.5 translate-y-1.5 rounded-[22px]" style={{ background: b, opacity: 0.35 }} />
      <svg viewBox="0 0 80 80" aria-hidden="true" className="relative h-20 w-20 overflow-hidden rounded-[22px]">
        <defs>
          <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor={a} />
            <stop offset="1" stopColor={b} />
          </linearGradient>
        </defs>
        <rect width="80" height="80" fill={`url(#${id})`} />
        <g transform={`rotate(${rot} 40 40)`} opacity="0.35" fill="#fff">
          <circle cx="66" cy="14" r={10 + (seed % 7)} />
          <rect x="-8" y="52" width="44" height="44" rx="10" transform="rotate(20 14 74)" />
        </g>
        <text
          x="40"
          y="47"
          textAnchor="middle"
          fontSize="22"
          fontWeight="600"
          fill="#fff"
          style={{ fontFamily: 'var(--font-sora), system-ui, sans-serif' }}
        >
          {initials}
        </text>
      </svg>
    </div>
  )
}

export default function Team() {
  return (
    <section id="team" aria-labelledby="team-title" className="section bg-white">
      <div className="container-page">
        <SectionHeader
          id="team-title"
          title="Meet Our Team"
          description="Our diverse team of experts brings together decades of experience in software development, design, and business strategy to deliver exceptional results."
        />

        <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <Reveal as="li" key={member.name} delay={(index % 3) * 0.06} className="h-full">
              <article className="group flex h-full flex-col rounded-[28px] border border-slate-200/80 bg-white p-7 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lift">
                <div className="flex items-center gap-5">
                  <AbstractAvatar name={member.name} index={index} />
                  <div>
                    <h3 className="text-lg font-semibold text-slate-950">{member.name}</h3>
                    <p className="mt-0.5 text-sm font-medium text-primary-700">{member.role}</p>
                  </div>
                </div>
                <p className="mt-6 flex-1 text-[15px] leading-7 text-slate-600">{member.bio}</p>

                <ul aria-label="Skills" className="mt-6 flex flex-wrap gap-2">
                  {member.skills.map((skill) => (
                    <li key={skill} className="rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-700">
                      {skill}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex gap-2 border-t border-slate-100 pt-5">
                  {[
                    { href: member.social.linkedin, label: 'LinkedIn', icon: FaLinkedin },
                    { href: member.social.twitter, label: 'Twitter', icon: FaTwitter },
                    { href: member.social.github, label: 'GitHub', icon: FaGithub },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      aria-label={`${member.name} on ${s.label}`}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:border-primary-200 hover:bg-primary-50 hover:text-primary-700"
                    >
                      <s.icon aria-hidden="true" className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-12 flex justify-center">
          <p className="inline-flex items-center gap-2 rounded-full bg-primary-50 px-5 py-2.5 text-sm font-medium text-primary-700">
            <span aria-hidden="true" className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-primary-500" />
            We&apos;re growing! Join our team of innovators.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
