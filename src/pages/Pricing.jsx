import React from 'react'
import { Check, MessageCircle } from 'lucide-react'
import { pricingPlans, whatsappLink } from '../data/content'

export default function Pricing() {
  return (
    <div>
      <section className="bg-star-field py-20 text-center lg:py-24">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <p className="section-eyebrow">Pricing</p>
          <h1 className="mt-3 text-4xl font-semibold text-white sm:text-5xl">Simple, transparent packages</h1>
          <p className="mt-6 text-white/65">
            Every project starts with a free consultation. Final pricing depends on quantity, materials,
            and design complexity — message us for an exact quote.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 lg:grid-cols-3 lg:px-8">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col rounded-2xl border p-8 transition-all duration-300 ${
                plan.highlighted
                  ? 'border-gold-500 bg-navy-900 shadow-2xl shadow-gold-500/10 lg:-translate-y-4'
                  : 'border-white/10 bg-navy-900/50 hover:border-gold-500/30'
              }`}
            >
              {plan.highlighted && (
                <span className="mb-4 inline-block w-fit rounded-full bg-gold-500 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-navy-950">
                  Most Popular
                </span>
              )}
              <h2 className="text-xl font-semibold text-white">{plan.name}</h2>
              <p className="mt-1 text-sm text-white/55">{plan.description}</p>
              <div className="mt-6 flex items-baseline gap-1.5">
                <span className="font-display text-4xl font-semibold text-gold-500">{plan.price}</span>
                <span className="text-sm text-white/50">{plan.unit}</span>
              </div>
              <ul className="mt-7 flex-1 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-white/70">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" /> {f}
                  </li>
                ))}
              </ul>
              <a
                href={whatsappLink(`Hi! I'd like to order the ${plan.name} package.`)}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 w-full ${plan.highlighted ? 'btn-primary' : 'btn-outline'}`}
              >
                <MessageCircle className="h-4 w-4" /> Order Now
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
