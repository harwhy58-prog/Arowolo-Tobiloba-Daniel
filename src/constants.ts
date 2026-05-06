
export const THEME = {
  primary: '#0A1128', // Deep Midnight
  secondary: '#D4AF37', // Gold
  accent: '#E1E5EE', // Light Blue/Gray (Header/Footer)
  text: '#FFFFFF',
  textMuted: 'rgba(255, 255, 255, 0.7)',
  white: '#FFFFFF',
};

export const SERVICES = [
  {
    id: 'store-design',
    title: 'Store Design',
    description: 'Bespoke e-commerce experiences designed for high retention and conversion.',
    icon: 'Store',
  },
  {
    id: 'seo',
    title: 'SEO Optimization',
    description: 'Dominating search results to bring organic traffic that actually buys.',
    icon: 'Search',
  },
  {
    id: 'landing-pages',
    title: 'Landing Page Design',
    description: 'High-impact landing pages built with one goal: Conversion.',
    icon: 'Layout',
  },
  {
    id: 'funnel-design',
    title: 'Funnel Design',
    description: 'End-to-end sales funnels that guide users from curiosity to checkout.',
    icon: 'Filter',
  },
  {
    id: 'email-marketing',
    title: 'Email Marketing Setup',
    description: 'Automated flows that nurture leads and maximize customer lifetime value.',
    icon: 'Mail',
  },
  {
    id: 'google-ads',
    title: 'Google Ads Management',
    description: 'ROI-focused campaigns targeting the right audience at the right time.',
    icon: 'TrendingUp',
  },
  {
    id: 'search-console',
    title: 'Google Search Console Setup',
    description: 'Technical foundation and monitoring for long-term search health.',
    icon: 'BarChart',
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "James Wilson",
    role: "CEO, TechFlow",
    content: "AROWOLO TOBILOBA DANIEL completely transformed our funnel. Our conversion rate jumped by 150% in just a month. Absolute professional.",
    avatar: "https://i.pravatar.cc/150?u=1"
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Marketing Director, LuxeWare",
    content: "Working with AROWOLO TOBILOBA DANIEL was the best decision for our brand. The website feel is premium and the results speak for themselves.",
    avatar: "https://i.pravatar.cc/150?u=2"
  },
  {
    id: 3,
    name: "Marcus Thorne",
    role: "Founder, Zenith Agencies",
    content: "I've worked with many designers, but AROWOLO TOBILOBA DANIEL brings a strategic sales mind to the design table. Highly recommended.",
    avatar: "https://i.pravatar.cc/150?u=3"
  },
  {
    id: 4,
    name: "Elena Rodriguez",
    role: "E-commerce Manager, Bloom",
    content: "The store design AROWOLO TOBILOBA DANIEL delivered is world-class. It's not just beautiful; it's a selling machine.",
    avatar: "https://i.pravatar.cc/150?u=4"
  },
  {
    id: 5,
    name: "David K.",
    role: "Proprietor, Artisan Goods",
    content: "SEO results were visible within weeks. AROWOLO TOBILOBA DANIEL knows exactly how to rank for high-intent keywords.",
    avatar: "https://i.pravatar.cc/150?u=5"
  },
  {
    id: 6,
    name: "Sophie Laurent",
    role: "Fashion Consultant",
    content: "AROWOLO TOBILOBA DANIEL understood my luxury vision perfectly. The new site is elegant and converts visitors seamlessly.",
    avatar: "https://i.pravatar.cc/150?u=6"
  },
  {
    id: 7,
    name: "Robert P.",
    role: "SaaS Founder",
    content: "Landing pages usually take time to optimize, but the version AROWOLO TOBILOBA DANIEL built hit our targets from day one.",
    avatar: "https://i.pravatar.cc/150?u=7"
  },
  // Add more to reach 20+...
];

export const FAQS = [
  {
    question: "How long does a typical project take?",
    answer: "Most high-conversion overhauls take between 2-4 weeks. This includes the strategy phase, design, optimization, and final deployment."
  },
  {
    question: "What platforms do you work with?",
    answer: "I specialize in Shopify, WooCommerce, and custom web architectures. My goal is to build where your customers are most likely to convert."
  },
  {
    question: "Do you offer post-launch support?",
    answer: "Absolutely. I provide ongoing optimization and monitoring to ensure your funnel stays healthy and continues to generate revenue as your business scales."
  },
  {
    question: "How do you guarantee an increase in conversions?",
    answer: "I use data-driven design patterns and psychological triggers (UX/UI logic) that are proven to work in your specific industry. We test, refine, and launch."
  },
  {
    question: "Can you help with my existing website or do I need a new one?",
    answer: "I can audit and optimize your current site or build a fresh revenue-focused ecosystem from scratch. It depends on your current technical foundation."
  }
];

// Placeholder for 20+ projects
export const PROJECTS = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  title: `Transformation ${i + 1}`,
  category: ['Store Design', 'SEO', 'Funnel', 'Landing Page'][i % 4],
  before: `https://picsum.photos/seed/before${i}/800/600`,
  after: `https://picsum.photos/seed/after${i}/800/600`,
  description: "A complete overhaul of the digital presence, focusing on conversion architecture and brand authority.",
  results: ["140% Conversion Lift", "2x Revenue in 90 Days", "Improved Trust Signals"][i % 3]
}));
