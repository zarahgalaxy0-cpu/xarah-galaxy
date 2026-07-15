import React from 'react'
import { Quote, Star } from 'lucide-react'
import { testimonials } from '../data/content'

export default function Testimonials() {
  return (
    <section className="relative bg-navy-900/40 py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-14 text-center">
          <p className="section-eyebrow">Client Stories</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Trusted by brands &amp; individuals alike</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="card flex flex-col justify-between p-6 opacity-0 animate-fadeUp"
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <div>
                <Quote className="h-6 w-6 text-gold-500/70" />
                <p className="mt-4 text-sm leading-relaxed text-white/75">{t.quote}</p>
              </div>
              <div className="mt-6">
                <div className="mb-2 flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} className="h-3.5 w-3.5 fill-gold-500 text-gold-500" />
                  ))}
                </div>
                <p className="text-sm font-semibold text-white">{t.name}</p>
                <p className="text-xs text-white/50">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
