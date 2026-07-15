import React, { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Menu, X, Search, Sparkles } from 'lucide-react'
import { navLinks } from '../data/content'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleSearch = (e) => {
    e.preventDefault()
    if (!query.trim()) return
    navigate(`/gallery?q=${encodeURIComponent(query.trim())}`)
    setOpen(false)
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-navy-950/90 backdrop-blur-md shadow-lg shadow-black/30 border-b border-gold-500/10' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 lg:px-8">
        <Link to="/" className="flex items-center gap-2 group">
          <Sparkles className="h-6 w-6 text-gold-500 transition-transform duration-500 group-hover:rotate-180" />
          <span className="font-display text-xl font-semibold tracking-wide text-white">
            Xarah <span className="text-gold-500">Galaxy</span> Designs
          </span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-sm font-medium tracking-wide transition-colors duration-200 hover:text-gold-400 ${
                  isActive ? 'text-gold-500' : 'text-white/80'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <form onSubmit={handleSearch} className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="text"
              placeholder="Search designs..."
              className="w-44 rounded-full border border-white/10 bg-navy-900/70 py-2 pl-9 pr-3 text-sm text-white placeholder-white/40 outline-none transition-all duration-300 focus:w-56 focus:border-gold-500/50"
              aria-label="Search the gallery"
            />
          </form>
          <a href="https://wa.me/15551234567" target="_blank" rel="noopener noreferrer" className="btn-primary !py-2.5 !px-5 text-sm">
            Order on WhatsApp
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="text-white lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-white/5 bg-navy-950/98 backdrop-blur-md transition-all duration-300 lg:hidden ${
          open ? 'max-h-[32rem] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col gap-1 px-5 py-5">
          <form onSubmit={handleSearch} className="relative mb-3">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="text"
              placeholder="Search designs..."
              className="w-full rounded-full border border-white/10 bg-navy-900/70 py-2.5 pl-9 pr-3 text-sm text-white placeholder-white/40 outline-none focus:border-gold-500/50"
              aria-label="Search the gallery"
            />
          </form>
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `rounded-lg px-3 py-3 text-sm font-medium transition-colors ${
                  isActive ? 'bg-gold-500/10 text-gold-500' : 'text-white/80 hover:bg-white/5'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <a
            href="https://wa.me/15551234567"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-2 w-full text-sm"
          >
            Order on WhatsApp
          </a>
        </div>
      </div>
    </header>
  )
}
