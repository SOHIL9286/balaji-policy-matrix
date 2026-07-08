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
    email: 'info@balajipolicymatrix.com',
    phone: '+91 XXXXX XXXXX',
  },
} as const

export type SiteConfig = typeof siteConfig
