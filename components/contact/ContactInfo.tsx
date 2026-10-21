import { HiMail, HiPhone, HiLocationMarker, HiClock, HiChevronDown } from 'react-icons/hi'
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa'
import Reveal from '@/components/ui/Reveal'

const contactMethods = [
  {
    icon: HiMail,
    title: 'Email Us',
    description: "Send us an email and we'll respond within 24 hours",
    value: 'hello@codified-labs.com',
    link: 'mailto:hello@codified-labs.com',
    tile: 'from-primary-400 to-primary-600',
  },
  {
    icon: HiPhone,
    title: 'Call Us',
    description: 'Speak directly with our team during business hours',
    value: '+1 (555) 123-4567',
    link: 'tel:+1-555-123-4567',
    tile: 'from-emerald-400 to-emerald-600',
  },
  {
    icon: HiLocationMarker,
    title: 'Visit Us',
    description: 'Our headquarters in the heart of San Francisco',
    value: '123 Tech Street, San Francisco, CA 94105',
    link: '#',
    tile: 'from-iris-400 to-iris-600',
  },
  {
    icon: HiClock,
    title: 'Business Hours',
    description: "We're available Monday through Friday",
    value: 'Mon - Fri: 9:00 AM - 6:00 PM PST',
    link: '#',
    tile: 'from-amber-400 to-orange-500',
  },
]

const faqs = [
  {
    question: 'How long does a typical project take?',
    answer:
      'Project timelines vary based on complexity, but most projects range from 3-6 months. We provide detailed timelines during our initial consultation.',
  },
  {
    question: 'Do you offer ongoing support?',
    answer:
      'Yes! We provide comprehensive post-launch support, maintenance, and feature updates to ensure your solution continues to perform optimally.',
  },
  {
    question: 'What technologies do you work with?',
    answer:
      'We work with a wide range of modern technologies including React, Node.js, Python, cloud platforms (AWS, Azure, GCP), and many others based on project needs.',
  },
  {
    question: 'Can you work with our existing team?',
    answer:
      'Absolutely! We often collaborate with in-house teams, providing expertise where needed and integrating seamlessly with your existing workflows.',
  },
]

const socials = [
  { href: 'https://linkedin.com/company/codifiedlabs', label: 'LinkedIn', icon: FaLinkedin },
  { href: 'https://twitter.com/codifiedlabs', label: 'Twitter', icon: FaTwitter },
  { href: 'https://github.com/codifiedlabs', label: 'GitHub', icon: FaGithub },
]

export default function ContactInfo() {
  return (
    <div className="space-y-10">
      <Reveal>
        <h2 className="text-2xl font-semibold text-slate-950 sm:text-3xl">Get In Touch</h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
          {contactMethods.map((method) => {
            const content = (
              <>
                <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${method.tile} text-white`}>
                  <method.icon aria-hidden="true" className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block font-semibold text-slate-950">{method.title}</span>
                  <span className="mt-0.5 block text-sm text-slate-500">{method.description}</span>
                  <span
                    className={`mt-2 block break-words text-sm font-medium ${
                      method.link !== '#' ? 'text-primary-700 group-hover:underline' : 'text-slate-700'
                    }`}
                  >
                    {method.value}
                  </span>
                </span>
              </>
            )
            return (
              <li key={method.title}>
                {method.link !== '#' ? (
                  <a
                    href={method.link}
                    className="group flex gap-4 rounded-3xl border border-slate-200/80 bg-white p-5 shadow-soft transition duration-300 hover:-translate-y-0.5 hover:border-primary-200 hover:shadow-lift"
                  >
                    {content}
                  </a>
                ) : (
                  <div className="flex gap-4 rounded-3xl border border-slate-200/80 bg-white p-5 shadow-soft">{content}</div>
                )}
              </li>
            )
          })}
        </ul>
      </Reveal>

      <Reveal delay={0.05}>
        <h3 className="text-xl font-semibold text-slate-950">Frequently Asked Questions</h3>
        <div className="mt-5 divide-y divide-slate-200 overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-soft">
          {faqs.map((faq, index) => (
            <details key={faq.question} className="group" open={index === 0}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-medium text-slate-900 transition-colors hover:bg-slate-50 sm:px-6 [&::-webkit-details-marker]:hidden">
                {faq.question}
                <HiChevronDown
                  aria-hidden="true"
                  className="h-5 w-5 shrink-0 text-slate-400 transition-transform duration-300 group-open:rotate-180"
                />
              </summary>
              <p className="px-5 pb-5 text-sm leading-6 text-slate-600 sm:px-6">{faq.answer}</p>
            </details>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <h3 className="text-xl font-semibold text-slate-950">Follow Us</h3>
        <ul className="mt-4 flex gap-2">
          {socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-soft transition hover:-translate-y-0.5 hover:border-primary-200 hover:text-primary-700"
              >
                <s.icon aria-hidden="true" className="h-5 w-5" />
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  )
}
