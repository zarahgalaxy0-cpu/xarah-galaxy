import React, { useState } from 'react'
import { Send, CheckCircle2 } from 'lucide-react'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    // NOTE: connect this to your backend, form service (e.g. Formspree, Resend), or email API.
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="card flex flex-col items-center gap-3 p-10 text-center">
        <CheckCircle2 className="h-10 w-10 text-gold-500" />
        <h3 className="text-xl font-semibold text-white">Message sent!</h3>
        <p className="text-sm text-white/60">
          Thank you for reaching out, {form.name.split(' ')[0] || 'friend'}. We'll get back to you within 24 hours.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="card space-y-5 p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-white/60">
            Full name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            className="w-full rounded-lg border border-white/10 bg-navy-950/60 px-4 py-2.5 text-sm text-white outline-none transition-colors focus:border-gold-500/60"
            placeholder="Name"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-white/60">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            className="w-full rounded-lg border border-white/10 bg-navy-950/60 px-4 py-2.5 text-sm text-white outline-none transition-colors focus:border-gold-500/60"
            placeholder="naam@example.com"
          />
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
          required
          value={form.message}
          onChange={handleChange}
          className="w-full resize-none rounded-lg border border-white/10 bg-navy-950/60 px-4 py-2.5 text-sm text-white outline-none transition-colors focus:border-gold-500/60"
          placeholder="Tell us about your design idea, quantities, and timeline..."
        />
      </div>

      <button type="submit" className="btn-primary w-full sm:w-auto">
        Send Message <Send className="h-4 w-4" />
      </button>
    </form>
  )
}
