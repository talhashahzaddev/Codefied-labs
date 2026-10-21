'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  HiMail,
  HiUser,
  HiOfficeBuilding,
  HiPhone,
  HiChat,
  HiCheck,
  HiExclamationCircle,
  HiChevronDown,
} from 'react-icons/hi'
import emailjs from '@emailjs/browser'

type FieldName = 'name' | 'email' | 'projectType' | 'message'

// Friendly inline messages for the form's existing native rules (required / email format)
const fieldMessages: Record<FieldName, { missing: string; invalid?: string }> = {
  name: { missing: 'Enter your full name.' },
  email: { missing: 'Enter your email address.', invalid: 'Enter a valid email address, like name@company.com.' },
  projectType: { missing: 'Choose the type of project.' },
  message: { missing: 'Describe your project so we can prepare for the call.' },
}

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<FieldName, string>>>({})

  // EmailJS configuration - Replace these with your actual EmailJS credentials
  const emailConfig = {
    serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_xxxxxxx',
    templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_xxxxxxx', 
    publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'your_public_key',
    recipientEmail: 'iamabdalhannan@gmail.com' // Your email where you want to receive messages
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      // Initialize EmailJS
      emailjs.init(emailConfig.publicKey!)

      // Prepare template parameters - these match the template variables
      const templateParams = {
        to_email: 'iamabdalhannan@gmail.com',
        from_name: formData.name,
        from_email: formData.email,
        reply_to: formData.email,
        company: formData.company || 'Not specified',
        phone: formData.phone || 'Not provided',
        project_type: formData.projectType,
        budget: formData.budget || 'Not specified',
        timeline: formData.timeline || 'Not specified',
        message: formData.message,
      }

      // Validate EmailJS configuration
      if (!emailConfig.serviceId || emailConfig.serviceId === 'service_xxxxxxx') {
        throw new Error('EmailJS Service ID not configured')
      }
      if (!emailConfig.templateId || emailConfig.templateId === 'template_xxxxxxx') {
        throw new Error('EmailJS Template ID not configured')
      }
      if (!emailConfig.publicKey || emailConfig.publicKey === 'your_public_key') {
        throw new Error('EmailJS Public Key not configured')
      }

      // Send email using EmailJS
      const response = await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        templateParams,
        emailConfig.publicKey
      )

      if (response.status === 200) {
        setSubmitted(true)
        
        // Optional: Send auto-reply to the user
        const autoReplyParams = {
          to_name: formData.name,
          to_email: formData.email,
          company_name: 'Codified Labs',
          message: 'Thank you for contacting us! We have received your inquiry and will get back to you within 24 hours.',
        }

        // You can create a separate template for auto-reply
        // await emailjs.send('service_id', 'auto_reply_template_id', autoReplyParams, publicKey)
        
      } else {
        throw new Error('Failed to send email')
      }
    } catch (error) {
      console.error('Email sending failed:', error)
      setError('Failed to send message. Please try again or contact us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }


  /* ---------- Inline validation (same rules as the native required / email checks) ---------- */
  type Control = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement

  const validateField = (el: Control) => {
    const name = el.name as FieldName
    if (!(name in fieldMessages)) return
    const { validity } = el
    const message = validity.valid
      ? ''
      : validity.valueMissing
        ? fieldMessages[name].missing
        : fieldMessages[name].invalid ?? fieldMessages[name].missing
    setFieldErrors((prev) => ({ ...prev, [name]: message }))
  }

  const handleBlur = (e: React.FocusEvent<Control>) => validateField(e.target)

  // Show inline messages instead of the browser bubble, and focus the first problem field
  const handleInvalid = (e: React.FormEvent<Control>) => {
    e.preventDefault()
    const el = e.currentTarget
    validateField(el)
    if (el.form?.querySelector(':invalid') === el) el.focus()
  }

  const handleFieldChange = (e: React.ChangeEvent<Control>) => {
    handleChange(e)
    if (fieldErrors[e.target.name as FieldName]) validateField(e.target)
  }

  const describe = (name: FieldName) => (fieldErrors[name] ? `${name}-error` : undefined)

  if (submitted) {
    return (
      <div className="flex min-h-[560px] items-center justify-center self-start rounded-[32px] border border-slate-200/80 bg-white p-8 shadow-lift sm:p-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-md text-center"
          role="status"
          aria-live="polite"
        >
          <div className="relative mx-auto mb-8 h-20 w-20">
            <span aria-hidden="true" className="absolute inset-0 translate-x-2 translate-y-2 rounded-[24px] bg-emerald-200/70" />
            <span className="relative flex h-20 w-20 items-center justify-center rounded-[24px] bg-gradient-to-br from-emerald-400 to-emerald-600 text-white">
              <HiCheck aria-hidden="true" className="h-10 w-10" />
            </span>
          </div>
          <h3 className="text-2xl font-semibold text-slate-950">Message Sent Successfully!</h3>
          <p className="mt-4 leading-7 text-slate-600">
            Thank you for contacting us! We&apos;ve received your message and will get back to you within 24 hours.
          </p>
          <p className="mt-4 text-sm text-slate-500">Email sent to: hello@codified-labs.com</p>
          <button
            type="button"
            onClick={() => {
              setSubmitted(false)
              setError('')
              setFieldErrors({})
              setFormData({
                name: '',
                email: '',
                company: '',
                phone: '',
                projectType: '',
                budget: '',
                timeline: '',
                message: '',
              })
            }}
            className="btn-secondary mt-8"
          >
            Send Another Message
          </button>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="self-start rounded-[32px] border border-slate-200/80 bg-white p-6 shadow-lift sm:p-10 lg:sticky lg:top-28">
      <h2 className="text-2xl font-semibold text-slate-950 sm:text-3xl">Tell Us About Your Project</h2>
      <p className="mt-2 text-[15px] leading-7 text-slate-600">
        Fields marked <span aria-hidden="true" className="font-semibold text-rose-500">*</span>
        <span className="sr-only">with an asterisk</span> are required.
      </p>

      <AnimatePresence>
        {error && (
          <motion.div
            role="alert"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-6 flex gap-3 rounded-2xl border border-rose-200 bg-rose-50 p-4 text-rose-700"
          >
            <HiExclamationCircle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0" />
            <div>
              <p className="text-sm font-semibold">Error: {error}</p>
              <p className="mt-1 text-xs">
                You can also email us directly at:
                <a href="mailto:hello@codified-labs.com" className="ml-1 font-medium underline">
                  hello@codified-labs.com
                </a>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Field label="Full Name" htmlFor="name" required error={fieldErrors.name}>
            <IconSlot icon={HiUser} />
            <input
              type="text"
              id="name"
              name="name"
              required
              autoComplete="name"
              value={formData.name}
              onChange={handleFieldChange}
              onBlur={handleBlur}
              onInvalid={handleInvalid}
              aria-invalid={!!fieldErrors.name}
              aria-describedby={describe('name')}
              className={`field pl-11 ${fieldErrors.name ? 'field-invalid' : ''}`}
              placeholder="Your full name"
            />
          </Field>

          <Field label="Email Address" htmlFor="email" required error={fieldErrors.email}>
            <IconSlot icon={HiMail} />
            <input
              type="email"
              id="email"
              name="email"
              required
              autoComplete="email"
              value={formData.email}
              onChange={handleFieldChange}
              onBlur={handleBlur}
              onInvalid={handleInvalid}
              aria-invalid={!!fieldErrors.email}
              aria-describedby={describe('email')}
              className={`field pl-11 ${fieldErrors.email ? 'field-invalid' : ''}`}
              placeholder="your@email.com"
            />
          </Field>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Field label="Company Name" htmlFor="company">
            <IconSlot icon={HiOfficeBuilding} />
            <input
              type="text"
              id="company"
              name="company"
              autoComplete="organization"
              value={formData.company}
              onChange={handleChange}
              className="field pl-11"
              placeholder="Your company"
            />
          </Field>

          <Field label="Phone Number" htmlFor="phone">
            <IconSlot icon={HiPhone} />
            <input
              type="tel"
              id="phone"
              name="phone"
              autoComplete="tel"
              value={formData.phone}
              onChange={handleChange}
              className="field pl-11"
              placeholder="+1 (555) 123-4567"
            />
          </Field>
        </div>

        <Field label="Project Type" htmlFor="projectType" required error={fieldErrors.projectType}>
          <select
            id="projectType"
            name="projectType"
            required
            value={formData.projectType}
            onChange={handleFieldChange}
            onBlur={handleBlur}
            onInvalid={handleInvalid}
            aria-invalid={!!fieldErrors.projectType}
            aria-describedby={describe('projectType')}
            className={`field appearance-none pr-11 [&>option]:text-slate-900 ${fieldErrors.projectType ? 'field-invalid' : ''} ${formData.projectType ? '' : 'text-slate-400'}`}
          >
            <option value="">Select a project type</option>
            <option value="web-application">Web Application</option>
            <option value="mobile-app">Mobile App</option>
            <option value="custom-software">Custom Software</option>
            <option value="cloud-solutions">Cloud Solutions</option>
            <option value="api-development">API Development</option>
            <option value="consulting">Consulting</option>
            <option value="other">Other</option>
          </select>
          <SelectChevron />
        </Field>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Field label="Budget Range" htmlFor="budget">
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className={`field appearance-none pr-11 [&>option]:text-slate-900 ${formData.budget ? '' : 'text-slate-400'}`}
            >
              <option value="">Select budget range</option>
              <option value="under-25k">Under $25,000</option>
              <option value="25k-50k">$25,000 - $50,000</option>
              <option value="50k-100k">$50,000 - $100,000</option>
              <option value="100k-250k">$100,000 - $250,000</option>
              <option value="over-250k">Over $250,000</option>
            </select>
            <SelectChevron />
          </Field>

          <Field label="Timeline" htmlFor="timeline">
            <select
              id="timeline"
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
              className={`field appearance-none pr-11 [&>option]:text-slate-900 ${formData.timeline ? '' : 'text-slate-400'}`}
            >
              <option value="">Select timeline</option>
              <option value="asap">ASAP</option>
              <option value="1-3-months">1-3 months</option>
              <option value="3-6-months">3-6 months</option>
              <option value="6-12-months">6-12 months</option>
              <option value="flexible">Flexible</option>
            </select>
            <SelectChevron />
          </Field>
        </div>

        <Field label="Project Description" htmlFor="message" required error={fieldErrors.message}>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            value={formData.message}
            onChange={handleFieldChange}
            onBlur={handleBlur}
            onInvalid={handleInvalid}
            aria-invalid={!!fieldErrors.message}
            aria-describedby={describe('message')}
            className={`field resize-none ${fieldErrors.message ? 'field-invalid' : ''}`}
            placeholder="Tell us about your project, requirements, goals, and any specific challenges you're facing..."
          />
        </Field>

        <button type="submit" disabled={isSubmitting} aria-busy={isSubmitting} className="btn-primary w-full py-4 text-base">
          {isSubmitting ? (
            <>
              <span aria-hidden="true" className="h-5 w-5 animate-spin rounded-full border-2 border-white/40 border-t-white" />
              Sending Message...
            </>
          ) : (
            <>
              <HiChat aria-hidden="true" className="h-5 w-5" />
              Send Message
            </>
          )}
        </button>

        <p className="text-center text-xs text-slate-500">Your message will be sent directly to hello@codified-labs.com</p>
      </form>
    </div>
  )
}

/* ---------- small presentational helpers ---------- */

function Field({
  label,
  htmlFor,
  required,
  error,
  children,
}: {
  label: string
  htmlFor: string
  required?: boolean
  error?: string
  children: React.ReactNode
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-2 block text-sm font-medium text-slate-800">
        {label}
        {required && (
          <span aria-hidden="true" className="ml-0.5 text-rose-500">
            *
          </span>
        )}
      </label>
      <div className="relative">{children}</div>
      <AnimatePresence initial={false}>
        {error && (
          <motion.p
            id={`${htmlFor}-error`}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="flex items-center gap-1.5 overflow-hidden pt-2 text-sm text-rose-600"
          >
            <HiExclamationCircle aria-hidden="true" className="h-4 w-4 shrink-0" />
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  )
}

function IconSlot({ icon: Icon }: { icon: React.ComponentType<{ className?: string; 'aria-hidden'?: boolean }> }) {
  return (
    <Icon
      aria-hidden
      className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
    />
  )
}

function SelectChevron() {
  return (
    <HiChevronDown
      aria-hidden="true"
      className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
    />
  )
}
