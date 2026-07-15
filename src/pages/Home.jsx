import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Printer, Sparkles, Stamp, Shirt, Tags, PenTool, Gem, MessageCircle } from 'lucide-react'
import StarField from '../components/StarField'
import Testimonials from '../components/Testimonials'
import { services, galleryItems, whatsappLink } from '../data/content'

const iconMap = { Printer, Sparkles, Stamp, Shirt, Tags, PenTool, Gem }

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden bg-star-field">
        <StarField count={60} />
        <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-gold-500/10 blur-3xl" />
        <div className="relative mx-auto flex max-w-7xl flex-col items-center px-5 py-28 text-center lg:px-8 lg:py-36">
          <p className="section-eyebrow opacity-0 animate-fadeUp">Premium Print &amp; Brand Studio</p>
          <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight text-white opacity-0 animate-fadeUp sm:text-5xl lg:text-6xl" style={{ animationDelay: '120ms' }}>
            Designs that travel from <span className="text-gold-500">screen</span> to <span className="text-gold-500">skin</span>, stitched in gold.
          </h1>
          <p className="mt-6 max-w-xl text-base text-white/65 opacity-0 animate-fadeUp sm:text-lg" style={{ animationDelay: '240ms' }}>
            Xarah Galaxy Designs brings DTF printing, custom branding, and apparel design together —
            crafted with studio precision and delivered with care.
          </p>
          <div className="mt-9 flex flex-col gap-4 opacity-0 animate-fadeUp sm:flex-row" style={{ animationDelay: '360ms' }}>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <MessageCircle className="h-4 w-4" /> Order Now on WhatsApp
            </a>
            <Link to="/gallery" className="btn-outline">
              View Our Gallery <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-16 grid w-full max-w-2xl grid-cols-3 gap-6 border-t border-white/10 pt-8 opacity-0 animate-fadeUp" style={{ animationDelay: '480ms' }}>
            {[
              ['500+', 'Designs Delivered'],
              ['98%', 'Client Satisfaction'],
              ['48hr', 'Priority Turnaround'],
            ].map(([num, label]) => (
              <div key={label}>
                <p className="font-display text-2xl font-semibold text-gold-500 sm:text-3xl">{num}</p>
                <p className="mt-1 text-xs text-white/50 sm:text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-14 flex flex-col items-center text-center">
            <p className="section-eyebrow">What We Offer</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Every detail, printed to perfection</h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => {
              const Icon = iconMap[s.icon]
              return (
                <div
                  key={s.slug}
                  className="card group p-6 opacity-0 animate-fadeUp"
                  style={{ animationDelay: `${i * 90}ms` }}
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500/10 text-gold-500 transition-colors duration-300 group-hover:bg-gold-500 group-hover:text-navy-950">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{s.summary}</p>
                </div>
              )
            })}
          </div>

          <div className="mt-12 text-center">
            <Link to="/services" className="btn-outline">
              Explore All Services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="bg-navy-900/40 py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-14 flex flex-col items-center text-center">
            <p className="section-eyebrow">Recent Work</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">A glimpse into the studio</h2>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {galleryItems.slice(0, 8).map((g, i) => (
              <div
                  key={g.id}
                  className={"group relative aspect-square overflow-hidden rounded-xl opacity-0 animate-fadeUp transition-transform duration-300 hover:-translate-y-1"}
                  style={{ animationDelay: `${i * 60}ms` }}
                  
                >
                  <img src = {g.image} alt = {g.title} className="h-full w-full object-cover" loading= "lazy"/>
                <div className="absolute inset-0 flex flex-col justify-end bg-navy-950/0 p-3 transition-all duration-300 group-hover:bg-navy-950/60">
                  <p className="translate-y-2 text-xs font-semibold text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    {g.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/gallery" className="btn-outline">
              View Full Gallery <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <Testimonials />

      {/* FINAL CTA */}
      <section className="relative overflow-hidden py-24">
        <StarField count={30} />
        <div className="relative mx-auto max-w-3xl px-5 text-center lg:px-8">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Ready to bring your design to life?</h2>
          <p className="mt-4 text-white/65">
            Send us your idea on WhatsApp and get a same-day quote — no studio visit required.
          </p>
          <div className="mt-8">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <MessageCircle className="h-4 w-4" /> Order Now on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
