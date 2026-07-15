export const WHATSAPP_NUMBER = '09161074080' // TODO: replace with real business number, digits only
export const whatsappLink = (msg = "Hi Xarah Galaxy Designs! I'd like to place an order.") =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`

export const services = [
  {
    slug: 'dtf-printing',
    title: 'DTF Printing',
    summary: 'Vivid, durable direct-to-film transfers that stretch, stay soft, and survive the wash.',
    icon: 'Printer',
  },
  {
    slug: 'custom-name-designs',
    title: 'Custom Name Designs',
    summary: 'Personalized name art in any script or style — for apparel, gifts, and keepsakes.',
    icon: 'Sparkles',
  },
  {
    slug: 'logo-printing',
    title: 'Logo Printing',
    summary: 'Sharp, true-to-brand logo prints on apparel, merchandise, and packaging.',
    icon: 'Stamp',
  },
  {
    slug: 't-shirt-printing',
    title: 'T-Shirt Printing',
    summary: 'Premium tees printed with studio-grade color accuracy for individuals and teams.',
    icon: 'Shirt',
  },
  {
    slug: 'sticker-printing',
    title: 'Sticker Printing',
    summary: 'Die-cut, holographic, and matte stickers built to last indoors or out.',
    icon: 'Tags',
  },
  {
    slug: 'graphic-design',
    title: 'Graphic Design',
    summary: 'Original artwork and layouts crafted to your vision, ready for print or digital.',
    icon: 'PenTool',
  },
  {
    slug: 'custom-branding',
    title: 'Custom Branding',
    summary: 'Full brand identity — palettes, marks, and guidelines that make you memorable.',
    icon: 'Gem',
  },
]

export const galleryItems = [
  { id: 1, title: 'Constellation Name Tee', category: 'T-Shirt Printing', image: '/gallery/Sewed-jersey1.jpg' },
  { id: 2, title: 'Studio Logo DTF Transfer', category: 'DTF Printing', gradient: 'from-gold-600 via-navy-900 to-navy-950', image: '/gallery/jacket1.jpg' },
  { id: 3, title: 'Holographic Brand Stickers', category: 'Sticker Printing', gradient: 'from-navy-600 via-navy-800 to-navy-950', image: '/gallery/medals-1.jpg' },
  { id: 4, title: 'Resin Art-clock', category: 'Custom Resin', image: '/gallery/resint-art-clock-1.png' },
  { id: 5, title: 'Café Brand Identity', category: 'Custom Branding', image: '/gallery/polo-tshirt-print-1.webp' },
  { id: 6, title: 'Streetwear Logo Tee', category: 'Logo Printing', image: '/gallery/medals-2.jpg' },
  { id: 7, title: 'Event Poster Artwork', category: 'Graphic Design', image: '/gallery/Sewed-jersey1.jpg' },
  { id: 8, title: 'Team Jersey DTF Set', category: 'DTF Printing', image: '/gallery/Sewed-jersey1.jpg' },
  { id: 9, title: 'Die-Cut Logo Stickers', category: 'Sticker Printing', gradient: 'from-navy-700 via-navy-900 to-navy-950' },
]

export const testimonials = [
  {
    name: 'Amara O.',
    role: 'Boutique Owner',
    quote: 'The DTF transfers held up after a dozen washes and the colors still look brand new. My customers ask where I get my merch done.',
  },
  {
    name: 'Devon R.',
    role: 'Team Coach',
    quote: 'Ordered 30 jerseys with player names and our logo. Every piece was identical, sharp, and delivered ahead of schedule.',
  },
  {
    name: 'Priya K.',
    role: 'Small Business Founder',
    quote: 'Xarah Galaxy Designs built our whole brand identity from scratch — logo, stickers, and packaging. It finally feels like us.',
  },
  {
    name: 'Malik T.',
    role: 'Event Planner',
    quote: 'The custom name designs for our wedding favors were stunning. Easy WhatsApp ordering made the whole process effortless.',
  },
]

export const pricingPlans = [
  {
    name: 'Starter',
    price: 'N1,500',
    unit: 'per design',
    description: 'Perfect for a single custom piece or one-off gift.',
    features: ['1 custom design', '1 revision round', 'DTF or sticker print', 'Digital proof before printing', '3–5 day turnaround'],
    highlighted: false,
  },
  {
    name: 'Signature',
    price: 'N10,000',
    unit: 'per order',
    description: 'Our most popular package for small batches and personal brands.',
    features: ['Up to 5 designs', '3 revision rounds', 'Any print type', 'Logo or name design included', 'Priority 48-hour turnaround', 'Free digital brand mockup'],
    highlighted: true,
  },
  {
    name: 'Studio',
    price: 'Custom',
    unit: 'quote',
    description: 'For teams, businesses, and bulk apparel or branding projects.',
    features: ['Unlimited revisions', 'Full brand identity package', 'Bulk t-shirt & sticker printing', 'Dedicated design consultation', 'Rush delivery available'],
    highlighted: false,
  },
]

export const faqs = [
  {
    q: 'What is DTF printing and why is it better than vinyl?',
    a: 'DTF (Direct-to-Film) printing transfers vibrant, full-color designs onto fabric using a special film and adhesive powder. Unlike vinyl, it stays soft, stretches with the fabric, and holds rich detail and color gradients without cracking or peeling.',
  },
  {
    q: 'How do I place an order?',
    a: 'The fastest way is to tap the WhatsApp Order Now button anywhere on the site. Send us your design idea, reference images, or logo, and we will reply with pricing and a timeline.',
  },
  {
    q: 'Can you design a logo from scratch?',
    a: 'Yes — our graphic design and custom branding services include creating original logos, name art, and full brand identities tailored to your style and industry.',
  },
  {
    q: 'What file formats do you accept?',
    a: 'We accept PNG, JPEG, PDF, AI, and PSD files. If you do not have artwork yet, our design team can create it for you from scratch.',
  },
  {
    q: 'What is the typical turnaround time?',
    a: 'Most single-design orders are completed within 3–5 business days. Signature package orders are prioritized with a 48-hour turnaround, and rush options are available for Studio clients.',
  },
  {
    q: 'Do you offer bulk pricing for t-shirts and stickers?',
    a: 'Yes, bulk orders for teams, events, and businesses qualify for discounted Studio pricing. Reach out with your quantity and design needs for a custom quote.',
  },
  {
    q: 'Do you ship internationally?',
    a: 'We currently ship locally and nationally, with international shipping available on request. Message us on WhatsApp with your location to confirm options and rates.',
  },
]

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Contact', to: '/contact' },
]

export const socialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com/galaxyy_graphics?igsh=dDAxcHkxbGlrY29h', icon: 'Instagram' },
  { label: 'Facebook', href: 'https://www.facebook.com/share/1bWXadgtUp/', icon: 'Facebook' },
  { label: 'TikTok', href: 'https://www.tiktok.com/@ahmad_xrgalaxy09?_r=1&_t=ZS-97dgKBW72F3', icon: 'Music2' },
  { label: 'Pinterest', href: 'https://pinterest.com', icon: 'Image' },
]
