import { siteConfig } from '@/config/site'
import type { SeoMeta } from '@/types/seo'

export const defaultSeo: SeoMeta = {
  title: siteConfig.title,
  description: siteConfig.description,
  canonical: siteConfig.url,
  keywords: [...siteConfig.keywords],
  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
  },
  twitter: {
    card: 'summary_large_image',
    site: siteConfig.social.twitter,
    title: siteConfig.title,
    description: siteConfig.description,
  },
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    slogan: siteConfig.tagline,
  },
}
