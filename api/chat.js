export const config = { runtime: 'edge' }

const SYSTEM_PROMPT = `You are a friendly and helpful assistant for Xarah Galaxy Designs, a premium print and branding studio. You help customers with questions about the business AND general questions too.

About Xarah Galaxy Designs:
- Services: DTF printing, custom name designs, logo printing, t-shirt printing, sticker printing, graphic design, and custom branding
- Ordering: Customers order via WhatsApp for the fastest response
- Turnaround: 3–5 days standard, 48 hours priority (Signature package), rush available for Studio clients
- Pricing: Starter ($15/design), Signature ($45/order), Studio (custom quote)
- DTF printing is durable, vibrant, soft, and works on cotton, polyester, and blends
- They accept PNG, JPEG, PDF, AI, and PSD files — or can design from scratch
- Local pickup and nationwide shipping available
- Contact: WhatsApp, email, or the contact form on the website

Guidelines:
- Be warm, friendly, and concise
- For business questions, always offer to connect them via WhatsApp for orders
- For general questions, answer helpfully like a knowledgeable assistant
- Keep responses short and to the point — this is a chat widget, not an essay
- If asked about pricing, give the ranges but suggest WhatsApp for an exact quote`

export default async function handler(req) {
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 })
  }

  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) {
    return new Response(JSON.stringify({ error: 'API key not configured' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  try {
    const { messages } = await req.json()

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 500,
        system: SYSTEM_PROMPT,
        messages,
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      return new Response(JSON.stringify({ error: data.error?.message || 'API error' }), {
        status: response.status,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    const reply = data.content?.[0]?.text || "I'm not sure about that — please reach out via WhatsApp for help!"

    return new Response(JSON.stringify({ reply }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Something went wrong. Please try again.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
