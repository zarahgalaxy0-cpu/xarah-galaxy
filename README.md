# Xarah Galaxy Designs — Website

A premium, responsive website for Xarah Galaxy Designs (DTF printing, custom name designs, logo printing,
t-shirt printing, sticker printing, graphic design, and custom branding). Built with **React 18**, **React Router**,
**Tailwind CSS**, and **lucide-react** icons.

## ✨ Features

- 7 pages: Home, About, Services, Gallery, Pricing, Contact, FAQ
- Sticky, responsive navbar with mobile menu and live search
- Animated hero with strong call-to-action
- Floating WhatsApp "Order Now" button (and WhatsApp links throughout)
- Customer testimonials, accordion FAQ, filterable image gallery
- Contact form (ready to connect to any form backend)
- Social media links, full SEO meta tags, fast Vite build
- Dark navy + gold + white design system with subtle star-field animations

## 🗂 Project Structure

```
xarah-galaxy-designs/
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── vercel.json
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── data/
    │   └── content.js        # services, gallery, testimonials, pricing, FAQ data
    ├── components/
    │   ├── Navbar.jsx
    │   ├── Footer.jsx
    │   ├── WhatsAppButton.jsx
    │   ├── StarField.jsx
    │   ├── Testimonials.jsx
    │   └── ContactForm.jsx
    └── pages/
        ├── Home.jsx
        ├── About.jsx
        ├── Services.jsx
        ├── Gallery.jsx
        ├── Pricing.jsx
        ├── Contact.jsx
        └── FAQ.jsx
```

## 🛠 Run Locally

**Requirements:** Node.js 18+ and npm.

```bash
# 1. Unzip the project, then move into it
cd xarah-galaxy-designs

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Open the URL shown in your terminal (usually `http://localhost:5173`).

To build a production bundle and preview it locally:

```bash
npm run build
npm run preview
```

## 🔧 Before You Launch — customize these

1. **WhatsApp number** — open `src/data/content.js` and replace `WHATSAPP_NUMBER` with your real number
   (digits only, including country code, no `+` or spaces), e.g. `'15551234567'`.
2. **Contact details** — update phone, email, and address in `src/components/Footer.jsx` and `src/pages/Contact.jsx`.
3. **Social links** — update the URLs in the `socialLinks` array in `src/data/content.js`.
4. **Gallery images** — the gallery currently uses gradient placeholders so the site works instantly with
   zero assets. To use real photos: add images to `public/gallery/`, then in `src/data/content.js` add an
   `image: '/gallery/your-file.jpg'` field to each gallery item, and swap the gradient `<div>` in
   `src/pages/Gallery.jsx` / `src/pages/Home.jsx` for an `<img src={g.image} ... />`.
5. **Contact form** — `src/components/ContactForm.jsx` currently shows a success state without sending data
   anywhere. Connect it to a service like Formspree, Resend, EmailJS, or your own API endpoint inside
   `handleSubmit`.
6. **Pricing & copy** — adjust `pricingPlans`, `services`, `testimonials`, and `faqs` in `src/data/content.js`
   to match your real pricing and reviews.
7. **SEO meta** — update the title, description, and `og:image` tags in `index.html`.

## 🚀 Deploy to Vercel

**Option A — Vercel CLI**

```bash
npm install -g vercel
cd xarah-galaxy-designs
vercel
```

Follow the prompts (choose default settings — Vercel auto-detects Vite). Run `vercel --prod` to deploy to
production.

**Option B — Vercel Dashboard (recommended for non-technical use)**

1. Push this project to a GitHub (or GitLab/Bitbucket) repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel auto-detects the **Vite** framework preset:
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Click **Deploy**. Your site will be live at `your-project.vercel.app` within a minute.
5. (Optional) Add a custom domain under **Project Settings → Domains**.

The included `vercel.json` ensures all page routes (e.g. `/services`, `/gallery`) work correctly on refresh
and direct link visits.

## 🎨 Design System

| Token | Value |
|---|---|
| Navy (background) | `#050B1A` → `#1E3470` (navy-950 → navy-600) |
| Gold (accent) | `#C9A14A` (gold-500), `#D9B25C` (gold-400) |
| White / text | `#FFFFFF`, with translucent white for secondary text |
| Display font | Cormorant Garamond (headings) |
| Body font | Manrope (body copy, UI) |

All animations respect `prefers-reduced-motion` for accessibility.
"# xarah-galaxy" 
