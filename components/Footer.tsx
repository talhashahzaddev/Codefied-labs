import Link from 'next/link'
import { HiCode, HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi'
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'

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

export default function Footer() {
  return (
    <footer className="bg-dark-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <HiCode className="h-8 w-8 text-primary-400" />
              <span className="text-xl font-bold">Codified Labs</span>
            </Link>
            <p className="text-gray-300 mb-6 max-w-md">
              Transforming businesses through innovative custom software development, 
              cutting-edge web applications, and comprehensive digital solutions.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <HiMail className="h-5 w-5 text-primary-400" />
                <a href="mailto:hello@codified-labs.com" className="text-gray-300 hover:text-white transition-colors">
                  hello@codified-labs.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <HiPhone className="h-5 w-5 text-primary-400" />
                <a href="tel:+1-555-123-4567" className="text-gray-300 hover:text-white transition-colors">
                  +1 (555) 123-4567
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <HiLocationMarker className="h-5 w-5 text-primary-400" />
                <span className="text-gray-300">
                  San Francisco, CA & Remote
                </span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Codified Labs. All rights reserved.
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-6">
              <a
                href="https://twitter.com/codifiedlabs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/company/codifiedlabs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/codifiedlabs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/codifiedlabs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 