export const config = { runtime: 'edge' }

export default async function handler(req) {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  try {
    const payload = await req.json()
    const { name, email, service, message } = payload || {}

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'Please complete the required fields.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    const emailTo = process.env.CONTACT_EMAIL || 'zarahgalaxy0@gmail.com'
    const subject = `New contact form submission from ${name}`
    const text = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Service: ${service || 'Not specified'}`,
      '',
      'Message:',
      message,
    ].join('\n')

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY || ''}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: process.env.EMAIL_FROM || 'onboarding@resend.dev',
        to: [emailTo],
        subject,
        text,
      }),
    })

    const data = await response.json().catch(() => ({}))

    if (!response.ok) {
      return new Response(JSON.stringify({ error: data.error?.message || 'Unable to send email.' }), {
        status: 502,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    return new Response(JSON.stringify({ ok: true, message: 'Contact request received.' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Something went wrong while submitting the form.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
