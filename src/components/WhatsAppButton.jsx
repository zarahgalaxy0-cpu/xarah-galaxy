import React from 'react'
import { MessageCircle } from 'lucide-react'
import { whatsappLink } from '../data/content'

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Order now on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3.5 font-semibold text-navy-950 shadow-xl shadow-black/30 transition-all duration-300 hover:scale-105 hover:shadow-[#25D366]/40 animate-floatY"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline">Order Now</span>
    </a>
  )
}
