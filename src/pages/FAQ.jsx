import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { faqs, whatsappLink } from '../data/content'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div>
      <section className="bg-star-field py-20 text-center lg:py-24">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <p className="section-eyebrow">FAQ</p>
          <h1 className="mt-3 text-4xl font-semibold text-white sm:text-5xl">Questions, answered</h1>
          <p className="mt-6 text-white/65">Can't find what you're looking for? Message us directly on WhatsApp.</p>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-3xl space-y-3 px-5 lg:px-8">
          {faqs.map((item, i) => {
            const open = openIndex === i
            return (
              <div key={item.q} className="overflow-hidden rounded-xl border border-white/10 bg-navy-900/50">
                <button
                  onClick={() => setOpenIndex(open ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={open}
                >
                  <span className="font-medium text-white">{item.q}</span>
                  <ChevronDown className={`h-5 w-5 shrink-0 text-gold-500 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
                </button>
                <div className={`grid transition-all duration-300 ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm leading-relaxed text-white/60">{item.a}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mx-auto mt-14 max-w-3xl px-5 text-center lg:px-8">
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Ask Us on WhatsApp
          </a>
        </div>
      </section>
    </div>
  )
}
