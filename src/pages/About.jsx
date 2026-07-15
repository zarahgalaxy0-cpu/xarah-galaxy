import React from 'react'
import { Sparkles, Target, Heart, Award } from 'lucide-react'
import StarField from '../components/StarField'
import { whatsappLink } from '../data/content'

export default function About() {
  return (
    <div>
      <section className="relative overflow-hidden bg-star-field py-20 lg:py-28">
        <StarField count={30} />
        <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
          <p className="section-eyebrow">Our Story</p>
          <h1 className="mt-3 text-4xl font-semibold text-white sm:text-5xl">The studio behind the stitch</h1>
          <p className="mt-6 text-white/65">
            Xarah Galaxy Designs began with a simple belief: every name, logo, and brand deserves to be
            printed like it matters. What started as a passion for custom apparel has grown into a full
            creative studio for DTF printing, branding, and graphic design.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:px-8 lg:gap-16">
          <div>
            <p className="section-eyebrow">Who We Are</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Crafted by hand, finished with precision</h2>
            <p className="mt-5 text-white/65 leading-relaxed">
              We're a small, dedicated team of designers and print specialists who treat every order —
              whether it's a single custom name or a full brand identity — as a piece of art. From the
              first sketch to the final transfer, we obsess over color accuracy, durability, and detail.
            </p>
            <p className="mt-4 text-white/65 leading-relaxed">
              Our DTF printing process produces vibrant, long-lasting designs on virtually any fabric,
              while our in-house graphic design team builds logos and brand systems that hold up across
              every surface — from a t-shirt to a storefront.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              ['250+', 'Brands Served'],
              ['1,200+', 'Pieces Printed'],
              ['4.9★', 'Average Rating'],
              ['7', 'Core Services'],
            ].map(([num, label]) => (
              <div key={label} className="card flex flex-col items-center justify-center p-8 text-center">
                <p className="font-display text-3xl font-semibold text-gold-500">{num}</p>
                <p className="mt-2 text-xs text-white/55">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-900/40 py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-14 text-center">
            <p className="section-eyebrow">Our Values</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">What guides every order</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Sparkles, title: 'Craftsmanship', desc: 'Every design is reviewed and refined before it ever touches film or fabric.' },
              { icon: Target, title: 'Precision', desc: 'Color-true prints and exact placement, order after order.' },
              { icon: Heart, title: 'Personal Care', desc: 'We treat your idea like our own — with patience and honest feedback.' },
              { icon: Award, title: 'Quality Materials', desc: 'Premium film, inks, and blanks chosen for longevity, not shortcuts.' },
            ].map((v) => (
              <div key={v.title} className="card p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500/10 text-gold-500">
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-white">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Let's create something memorable</h2>
          <p className="mt-4 text-white/65">Tell us about your project and we'll guide you from concept to print.</p>
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-primary mt-8 inline-flex">
            Start a Conversation
          </a>
        </div>
      </section>
    </div>
  )
}
