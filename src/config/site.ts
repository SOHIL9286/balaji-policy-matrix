export const siteConfig = {
  name: 'BALAJI POLICY MATRIX',
  shortName: 'Balaji Policy Matrix',
  title: 'BALAJI POLICY MATRIX | Insurance & Financial Solutions',
  description:
    'Trusted insurance, finance, RTO services, and mutual fund solutions. Protect what matters most with 25+ years of expertise.',
  tagline: 'Insurance & Financial Solutions',
  url: 'https://balaji-website.web.app',
  locale: 'en_IN',
  author: 'Balaji Policy Matrix LLP',
  keywords: [
    'Balaji Policy Matrix',
    'insurance',
    'finance',
    'RTO services',
    'mutual funds',
    'policy',
    'claims support',
  ],
  social: {
    twitter: '@balajipolicymatrix',
  },
  contact: {
    email: 'info@balajiisnurance.co.in',
    phone: '+91 9638622456',
    address: `FF 36, 37, 38\nMohan Park Shopping Centre\nSinor Crossing\nDabhoi, Gujarat, India`,
    // lat/lng left as 0 so Map falls back to address search
    lat: 0,
    lng: 0,
  },
} as const

export type SiteConfig = typeof siteConfig
