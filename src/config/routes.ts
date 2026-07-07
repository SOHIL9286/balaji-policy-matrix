export const ROUTES = {
  home: '/',
  about: '/about',
  services: '/services',
  serviceDetail: '/services/:slug',
  contact: '/contact',
  blog: '/blog',
  faq: '/faq',
  calculators: '/calculators',
  emiCalculator: '/calculators/emi',
  premiumCalculator: '/calculators/premium',
  policyCalculator: '/calculators/policy',
  claimTracking: '/claim-tracking',
  downloads: '/downloads',
  portal: '/portal',
  reminders: '/reminders',
} as const

export type AppRoute = (typeof ROUTES)[keyof typeof ROUTES]
