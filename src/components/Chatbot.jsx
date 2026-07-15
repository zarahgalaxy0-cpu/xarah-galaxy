import React, { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send, Sparkles, Loader2 } from 'lucide-react'

const SUGGESTIONS = [
  'What services do you offer?',
  'How do I place an order?',
  'What are your prices?',
  'How long does printing take?',
]

export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Hi! 👋 I'm the Xarah Galaxy Designs assistant. I can help with questions about our services, pricing, ordering — or anything else on your mind!",
    },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef(null)

  useEffect(() => {
    if (open) bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, open])

  const send = async (text) => {
    const userText = text || input.trim()
    if (!userText || loading) return
    setInput('')

    const updatedMessages = [...messages, { role: 'user', content: userText }]
    setMessages(updatedMessages)
    setLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: updatedMessages.map((m) => ({ role: m.role, content: m.content })),
        }),
      })
      const data = await res.json()
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: data.reply || data.error || 'Something went wrong.' },
      ])
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: 'Connection error — please try again or message us on WhatsApp.' },
      ])
    } finally {
      setLoading(false)
    }
  }

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      send()
    }
  }

  return (
    <>
      {/* Chat window */}
      <div
        className={`fixed bottom-24 right-6 z-50 flex w-[22rem] flex-col overflow-hidden rounded-2xl border border-gold-500/20 bg-navy-900 shadow-2xl shadow-black/50 transition-all duration-300 sm:w-96 ${
          open ? 'max-h-[32rem] opacity-100 translate-y-0' : 'max-h-0 opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-live="polite"
      >
        {/* Header */}
        <div className="flex items-center justify-between gap-3 border-b border-white/10 bg-navy-950 px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gold-500/20">
              <Sparkles className="h-4 w-4 text-gold-500" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Xarah Assistant</p>
              <p className="text-[10px] text-green-400">● Online</p>
            </div>
          </div>
          <button onClick={() => setOpen(false)} className="text-white/50 hover:text-white transition-colors">
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex flex-1 flex-col gap-3 overflow-y-auto p-4" style={{ maxHeight: '280px' }}>
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div
                className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                  m.role === 'user'
                    ? 'rounded-br-sm bg-gold-500 text-navy-950 font-medium'
                    : 'rounded-bl-sm bg-navy-800 text-white/90 border border-white/5'
                }`}
              >
                {m.content}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="rounded-2xl rounded-bl-sm bg-navy-800 border border-white/5 px-4 py-3">
                <Loader2 className="h-4 w-4 animate-spin text-gold-500" />
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Suggestions (only show before first user message) */}
        {messages.length === 1 && (
          <div className="flex flex-wrap gap-2 px-4 pb-3">
            {SUGGESTIONS.map((s) => (
              <button
                key={s}
                onClick={() => send(s)}
                className="rounded-full border border-gold-500/30 px-3 py-1 text-xs text-gold-300 transition-colors hover:bg-gold-500/10"
              >
                {s}
              </button>
            ))}
          </div>
        )}

        {/* Input */}
        <div className="border-t border-white/10 px-3 py-3 flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKey}
            placeholder="Ask me anything..."
            className="flex-1 rounded-full border border-white/10 bg-navy-950/80 px-4 py-2 text-sm text-white placeholder-white/30 outline-none focus:border-gold-500/50"
            disabled={loading}
          />
          <button
            onClick={() => send()}
            disabled={!input.trim() || loading}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold-500 text-navy-950 transition-all hover:bg-gold-400 disabled:opacity-40"
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Toggle button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Open chat assistant"
        className="fixed bottom-6 left-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-navy-800 border border-gold-500/30 text-gold-500 shadow-xl shadow-black/30 transition-all duration-300 hover:bg-navy-700 hover:scale-105"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>
    </>
  )
}
