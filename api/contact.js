import nodemailer from 'nodemailer'

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

    const host = process.env.SMTP_HOST
    const port = Number(process.env.SMTP_PORT || 587)
    const user = process.env.SMTP_USER
    const pass = process.env.SMTP_PASS
    const secure = String(process.env.SMTP_SECURE || 'false').toLowerCase() === 'true'
    const from = process.env.SMTP_FROM || user
    const to = process.env.CONTACT_EMAIL || 'zarahgalaxy0@gmail.com'

    if (!host || !user || !pass) {
      return new Response(JSON.stringify({ error: 'SMTP credentials are not configured.' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    const transport = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
    })

    await transport.sendMail({
      from,
      to,
      replyTo: email,
      subject: `New contact form submission from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Service: ${service || 'Not specified'}`,
        '',
        'Message:',
        message,
      ].join('\n'),
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service:</strong> ${service || 'Not specified'}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br />')}</p>
      `,
    })

    return new Response(JSON.stringify({ ok: true, message: 'Contact request sent to your inbox.' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message || 'Something went wrong while submitting the form.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
