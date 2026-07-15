import React from 'react'
import { MapPin, Mail, Phone, MessageCircle, Instagram, Facebook, Music2, Image as ImageIcon } from 'lucide-react'
import ContactForm from '../components/ContactForm'
import { whatsappLink, socialLinks } from '../data/content'

const iconMap = { Instagram, Facebook, Music2, Image: ImageIcon }

export default function Contact() {
  return (
    <div>
      <section className="bg-star-field py-20 text-center lg:py-24">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <p className="section-eyebrow">Get In Touch</p>
          <h1 className="mt-3 text-4xl font-semibold text-white sm:text-5xl">Let's design your next piece</h1>
          <p className="mt-6 text-white/65">
            Fill out the form below or message us directly on WhatsApp for the fastest response.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-5 lg:px-8">
          <div className="lg:col-span-3">
            <ContactForm />
          </div>

          <div className="space-y-6 lg:col-span-2">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="card flex items-center gap-4 p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#25D366]/15 text-[#25D366]">
                <MessageCircle className="h-6 w-6" />
              </div>
              <div>
                <p className="font-semibold text-white">WhatsApp</p>
                <p className="text-sm text-white/55">Fastest way to order — tap to chat</p>
              </div>
            </a>

            <div className="card flex items-center gap-4 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500/10 text-gold-500">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <p className="font-semibold text-white">Email</p>
                <a href="mailto:zarahgalaxy0@gmail.com" className="text-sm text-white/55 hover:text-gold-400">
                  zarahgalaxy0@gmail.com
                </a>
              </div>
            </div>

            <div className="card flex items-center gap-4 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500/10 text-gold-500">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <p className="font-semibold text-white">Phone</p>
                <a href="tel:+2349161074080" className="text-sm text-white/55 hover:text-gold-400">+2349161074080</a>
              </div>
            </div>

            <div className="card flex items-center gap-4 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500/10 text-gold-500">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <p className="font-semibold text-white">Location</p>
                <p className="text-sm text-white/55">Local pickup &amp; nationwide shipping</p>
              </div>
            </div>

            <div className="card p-6">
              <p className="mb-4 font-semibold text-white">Follow the studio</p>
              <div className="flex gap-3">
                {socialLinks.map((s) => {
                  const Icon = iconMap[s.icon]
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/70 transition-all duration-300 hover:border-gold-500/50 hover:text-gold-400"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
