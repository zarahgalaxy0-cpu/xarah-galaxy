import React, { useMemo } from 'react'

export default function StarField({ count = 50, className = '' }) {
  const stars = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 2 + 1,
        delay: Math.random() * 4,
      })),
    [count]
  )

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {stars.map((s) => (
        <span
          key={s.id}
          className="absolute rounded-full bg-gold-200 animate-twinkle"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            animationDelay: `${s.delay}s`,
          }}
        />
      ))}
    </div>
  )
}
