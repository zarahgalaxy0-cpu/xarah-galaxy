import React from 'react'
import { Printer, Sparkles, Stamp, Shirt, Tags, PenTool, Gem, MessageCircle, Check } from 'lucide-react'
import { services, whatsappLink } from '../data/content'

const iconMap = { Printer, Sparkles, Stamp, Shirt, Tags, PenTool, Gem }

const details = {
  'dtf-printing': ['Vibrant full-color prints', 'Stretch & wash durable', 'Works on cotton, poly & blends'],
  'custom-name-designs': ['Any script or font style', 'Perfect for gifts & events', 'Single names to full bridal parties'],
  'logo-printing': ['Color-matched to your brand', 'Apparel, merch & packaging', 'High-resolution vector ready'],
  't-shirt-printing': ['Premium blank options', 'Single tees or bulk teams', 'DTF, screen & vinyl available'],
  'sticker-printing': ['Die-cut, kiss-cut & holographic', 'Indoor/outdoor durability', 'Custom shapes & sizes'],
  'graphic-design': ['Original concept artwork', 'Print & digital ready files', 'Posters, flyers & packaging'],
  'custom-branding': ['Full identity systems', 'Logo, palette & guidelines', 'Consistent across every surface'],
}

export default function Services() {
  return (
    <div>
      <section className="bg-star-field py-20 text-center lg:py-28">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <p className="section-eyebrow">Our Services</p>
          <h1 className="mt-3 text-4xl font-semibold text-white sm:text-5xl">Built for apparel, brands, and everything between</h1>
          <p className="mt-6 text-white/65">
            From a single custom name to a full brand identity, every service is delivered with the same
            studio-level attention to detail.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl space-y-6 px-5 lg:px-8">
          {services.map((s, i) => {
            const Icon = iconMap[s.icon]
            const reverse = i % 2 === 1
            return (
              <div
                key={s.slug}
                className={`card flex flex-col gap-8 p-8 lg:flex-row lg:items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-gold-500/10 text-gold-500">
                  <Icon className="h-10 w-10" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold text-white">{s.title}</h2>
                  <p className="mt-2 text-white/65">{s.summary}</p>
                  <ul className="mt-4 grid gap-2 sm:grid-cols-3">
                    {details[s.slug].map((d) => (
                      <li key={d} className="flex items-center gap-2 text-sm text-white/55">
                        <Check className="h-4 w-4 shrink-0 text-gold-500" /> {d}
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href={whatsappLink(`Hi! I'm interested in ${s.title}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline shrink-0"
                >
                  <MessageCircle className="h-4 w-4" /> Inquire
                </a>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
