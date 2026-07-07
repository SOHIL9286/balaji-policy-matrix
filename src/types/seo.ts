export type OpenGraphMeta = {
  type?: string
  locale?: string
  siteName?: string
  title?: string
  description?: string
  url?: string
  image?: string
}

export type TwitterMeta = {
  card?: 'summary' | 'summary_large_image' | 'app' | 'player'
  site?: string
  creator?: string
  title?: string
  description?: string
  image?: string
}

export type SeoMeta = {
  title: string
  description: string
  canonical?: string
  keywords?: string[]
  noindex?: boolean
  openGraph?: OpenGraphMeta
  twitter?: TwitterMeta
  jsonLd?: Record<string, unknown>
}
