import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Facebook, Music2, Image as ImageIcon, MapPin, Mail, Phone, Sparkles } from 'lucide-react'
import { navLinks, socialLinks } from '../data/content'

const iconMap = { Instagram, Facebook, Music2, Image: ImageIcon }

export default function Footer() {
  return (
    <footer className="relative border-t border-gold-500/10 bg-navy-900/60">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <Link to="/" className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-gold-500" />
            <span className="font-display text-lg font-semibold text-white">Xarah Galaxy Designs</span>
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-white/60">
            Premium DTF printing, custom branding, and apparel design — crafted with precision, delivered with care.
          </p>
          <div className="mt-5 flex gap-3">
            {socialLinks.map((s) => {
              const Icon = iconMap[s.icon]
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/70 transition-all duration-300 hover:border-gold-500/50 hover:text-gold-400"
                >
                  <Icon className="h-4 w-4" />
                </a>
              )
            })}
          </div>
        </div>

        <div>
          <h3 className="section-eyebrow mb-4">Sitemap</h3>
          <ul className="space-y-2.5">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-sm text-white/60 transition-colors hover:text-gold-400">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="section-eyebrow mb-4">Services</h3>
          <ul className="space-y-2.5 text-sm text-white/60">
            <li>Logo & T-Shirt Printing</li>
            <li>Custom Name Designs</li>
            <li>DTF Printing</li>
            <li>Resin Art</li>
            <li>Mugs</li>
          </ul>
        </div>

        <div>
          <h3 className="section-eyebrow mb-4">Contact</h3>
          <ul className="space-y-3 text-sm text-white/60">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
              <span>Available locally &amp; nationwide shipping</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-gold-500" />
              <a href="tel:+2349161074080" className="hover:text-gold-400">+2349161074080</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-gold-500" />
              <a href="mailto:zarahgalaxy0.com" className="hover:text-gold-400">zarahgalaxy0.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="gold-divider opacity-30" />
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-6 text-xs text-white/40 sm:flex-row lg:px-8">
        <p>© {new Date().getFullYear()} Xarah Galaxy Designs. All rights reserved.</p>
        <p>Designed with precision, printed with passion.</p>
      </div>
    </footer>
  )
}
