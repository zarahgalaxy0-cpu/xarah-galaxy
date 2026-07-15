import React, { useState } from 'react'
import { Send, CheckCircle2, AlertCircle, LoaderCircle } from 'lucide-react'

const INITIAL_FORM = { name: '', email: '', service: '', message: '' }
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function ContactForm() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [submittedName, setSubmittedName] = useState('friend')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const validate = () => {
    const nextErrors = {}

    if (!form.name.trim()) nextErrors.name = 'Please enter your name.'
    if (!form.email.trim()) nextErrors.email = 'Please enter your email address.'
    else if (!EMAIL_PATTERN.test(form.email.trim())) nextErrors.email = 'Please use a valid email address.'
    if (!form.message.trim()) nextErrors.message = 'Please share your project details.'

    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitError('')

    if (!validate()) return

    setIsSubmitting(true)

    try {
      const payload = {
        ...form,
        name: form.name.trim(),
        email: form.email.trim(),
        service: form.service.trim(),
        message: form.message.trim(),
      }

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const data = await response.json().catch(() => ({}))

      if (!response.ok) {
        throw new Error(data.error || 'We could not send your message right now.')
      }

      setSubmittedName(payload.name.split(' ')[0] || 'friend')
      setSubmitted(true)
      setForm(INITIAL_FORM)
      setErrors({})
    } catch (error) {
      setSubmitError(error.message || 'Unable to send your message right now. Please contact us via WhatsApp instead.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="card flex flex-col items-center gap-3 p-10 text-center">
        <CheckCircle2 className="h-10 w-10 text-gold-500" />
        <h3 className="text-xl font-semibold text-white">Message sent!</h3>
        <p className="text-sm text-white/60">
          Thank you for reaching out, {submittedName}. We&apos;ll get back to you within 24 hours.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="card space-y-5 p-6 sm:p-8" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-white/60">
            Full name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            className={`w-full rounded-lg border px-4 py-2.5 text-sm text-white outline-none transition-colors focus:border-gold-500/60 ${errors.name ? 'border-red-400/70 bg-red-500/10' : 'border-white/10 bg-navy-950/60'}`}
            placeholder="Name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name && (
            <p id="name-error" className="mt-2 text-sm text-red-300">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-white/60">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className={`w-full rounded-lg border px-4 py-2.5 text-sm text-white outline-none transition-colors focus:border-gold-500/60 ${errors.email ? 'border-red-400/70 bg-red-500/10' : 'border-white/10 bg-navy-950/60'}`}
            placeholder="name@example.com"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && (
            <p id="email-error" className="mt-2 text-sm text-red-300">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="service" className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-white/60">
          Service of interest
        </label>
        <select
          id="service"
          name="service"
          value={form.service}
          onChange={handleChange}
          className="w-full rounded-lg border border-white/10 bg-navy-950/60 px-4 py-2.5 text-sm text-white outline-none transition-colors focus:border-gold-500/60"
        >
          <option value="">Select a service</option>
          <option>T-Shirt Printing</option>
          <option>Custom Name Designs</option>
          <option>Logo Printing</option>
          <option>DTF Printing</option>
          <option>Resin Art</option>
          <option>Mugs</option>
          <option>Custom Branding</option>
          <option>Henna kit</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-white/60">
          Project details
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          className={`w-full resize-none rounded-lg border px-4 py-2.5 text-sm text-white outline-none transition-colors focus:border-gold-500/60 ${errors.message ? 'border-red-400/70 bg-red-500/10' : 'border-white/10 bg-navy-950/60'}`}
          placeholder="Tell us about your design idea, quantities, and timeline..."
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {errors.message && (
          <p id="message-error" className="mt-2 text-sm text-red-300">
            {errors.message}
          </p>
        )}
      </div>

      {submitError && (
        <div className="flex items-start gap-2 rounded-lg border border-red-400/30 bg-red-500/10 p-3 text-sm text-red-200">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          <span>{submitError}</span>
        </div>
      )}

      <button type="submit" className="btn-primary flex w-full items-center justify-center gap-2 sm:w-auto" disabled={isSubmitting}>
        {isSubmitting ? <LoaderCircle className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}
