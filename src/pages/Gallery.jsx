import React, { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Search } from 'lucide-react'
import { galleryItems } from '../data/content'

const categories = ['All', ...Array.from(new Set(galleryItems.map((g) => g.category)))]

export default function Gallery() {
  const [searchParams] = useSearchParams()
  const [active, setActive] = useState('All')
  const [query, setQuery] = useState(searchParams.get('q') || '')

  const filtered = useMemo(() => {
    return galleryItems.filter((g) => {
      const matchesCategory = active === 'All' || g.category === active
      const matchesQuery =
        !query.trim() ||
        g.title.toLowerCase().includes(query.toLowerCase()) ||
        g.category.toLowerCase().includes(query.toLowerCase())
      return matchesCategory && matchesQuery
    })
  }, [active, query])

  return (
    <div>
      <section className="bg-star-field py-20 text-center lg:py-24">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <p className="section-eyebrow">Portfolio</p>
          <h1 className="mt-3 text-4xl font-semibold text-white sm:text-5xl">A galaxy of finished work</h1>
          <p className="mt-6 text-white/65">Browse recent DTF prints, name designs, logos, and brand projects.</p>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setActive(c)}
                  className={`rounded-full border px-4 py-1.5 text-xs font-medium tracking-wide transition-colors duration-200 ${
                    active === c
                      ? 'border-gold-500 bg-gold-500 text-navy-950'
                      : 'border-white/15 text-white/65 hover:border-gold-500/50 hover:text-gold-300'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
            <div className="relative w-full sm:w-64">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                type="text"
                placeholder="Search gallery..."
                className="w-full rounded-full border border-white/10 bg-navy-900/70 py-2 pl-9 pr-3 text-sm text-white placeholder-white/40 outline-none focus:border-gold-500/50"
              />
            </div>
          </div>

          {filtered.length === 0 ? (
            <p className="py-20 text-center text-white/50">No designs match your search yet — try another keyword.</p>
          ) : (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {filtered.map((g, i) => (
                <div
                  key={g.id}
                  className={`group relative aspect-square overflow-hidden rounded-xl opacity-0 animate-fadeUp transition-transform duration-300 hover:-translate-y-1`}
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  <img src = {g.image} alt = {g.title} className="h-full w-full object-cover" loading= "lazy"/>
                  <div className="absolute inset-0 flex flex-col justify-end bg-navy-950/0 p-3 transition-all duration-300 group-hover:bg-navy-950/65">
                    <p className="translate-y-2 text-xs font-semibold text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      {g.title}
                    </p>
                    <p className="translate-y-2 text-[10px] text-gold-300 opacity-0 transition-all duration-300 delay-75 group-hover:translate-y-0 group-hover:opacity-100">
                      {g.category}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
