import Link from 'next/link'
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi'
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'
import Logo from '@/components/ui/Logo'

const footerSections = [
  {
    title: 'Services',
    links: [
      { name: 'Custom Software Development', href: '/services#custom-software' },
      { name: 'Web Applications', href: '/services#web-apps' },
      { name: 'Mobile Development', href: '/services#mobile' },
      { name: 'Cloud Solutions', href: '/services#cloud' },
      { name: 'DevOps & Deployment', href: '/services#devops' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Team', href: '/about#team' },
      { name: 'Careers', href: '/careers' },
      { name: 'Blog', href: '/blog' },
      { name: 'Case Studies', href: '/portfolio' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Documentation', href: '/docs' },
      { name: 'API Reference', href: '/api-docs' },
      { name: 'Support Center', href: '/support' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
    ],
  },
]

const socials = [
  { name: 'Twitter', href: 'https://twitter.com/codifiedlabs', icon: FaTwitter },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/codifiedlabs', icon: FaLinkedin },
  { name: 'GitHub', href: 'https://github.com/codifiedlabs', icon: FaGithub },
  { name: 'Instagram', href: 'https://instagram.com/codifiedlabs', icon: FaInstagram },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink-950 text-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="absolute -bottom-40 left-1/2 h-80 w-[680px] -translate-x-1/2 rounded-full bg-primary-600/15 blur-[110px]" />
      </div>

      <div className="container-page relative py-16 sm:py-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Company info */}
          <div className="sm:col-span-2 lg:col-span-5">
            <Link href="/" aria-label="Codified Labs home" className="group inline-flex rounded-lg">
              <Logo />
            </Link>
            <p className="mt-5 max-w-md leading-7 text-slate-400">
              Transforming businesses through innovative custom software development, cutting-edge web applications, and
              comprehensive digital solutions.
            </p>

            <ul className="mt-8 space-y-3 text-sm">
              <li>
                <a
                  href="mailto:hello@codified-labs.com"
                  className="group inline-flex items-center gap-3 text-slate-300 transition-colors hover:text-white"
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-primary-300 transition group-hover:border-primary-400/40">
                    <HiMail aria-hidden="true" className="h-4 w-4" />
                  </span>
                  hello@codified-labs.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+1-555-123-4567"
                  className="group inline-flex items-center gap-3 text-slate-300 transition-colors hover:text-white"
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-primary-300 transition group-hover:border-primary-400/40">
                    <HiPhone aria-hidden="true" className="h-4 w-4" />
                  </span>
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="inline-flex items-center gap-3 text-slate-300">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-primary-300">
                  <HiLocationMarker aria-hidden="true" className="h-4 w-4" />
                </span>
                San Francisco, CA &amp; Remote
              </li>
            </ul>
          </div>

          {/* Footer links */}
          {footerSections.map((section) => (
            <nav key={section.title} aria-label={section.title} className="lg:col-span-2 lg:first-of-type:col-start-7">
              <h2 className="font-display text-sm font-semibold text-white">{section.title}</h2>
              <ul className="mt-5 space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-slate-400 transition-colors hover:text-white">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col-reverse items-start justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} Codified Labs. All rights reserved.</p>

          <ul className="flex gap-2">
            {socials.map((social) => (
              <li key={social.name}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 transition hover:-translate-y-0.5 hover:border-white/25 hover:text-white"
                >
                  <social.icon aria-hidden="true" className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
