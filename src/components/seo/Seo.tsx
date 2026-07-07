import { Helmet } from 'react-helmet-async'
import { siteConfig } from '@/config/site'
import type { SeoMeta } from '@/types/seo'

type SeoProps = Partial<SeoMeta>

export function Seo({
  title = siteConfig.title,
  description = siteConfig.description,
  canonical,
  keywords = [...siteConfig.keywords],
  noindex = false,
  openGraph,
  twitter,
  jsonLd,
}: SeoProps) {
  const resolvedCanonical = canonical ?? siteConfig.url
  const ogTitle = openGraph?.title ?? title
  const ogDescription = openGraph?.description ?? description
  const ogUrl = openGraph?.url ?? resolvedCanonical
  const twitterTitle = twitter?.title ?? title
  const twitterDescription = twitter?.description ?? description

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(', ')} />
      )}
      <link rel="canonical" href={resolvedCanonical} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      <meta property="og:type" content={openGraph?.type ?? 'website'} />
      <meta property="og:locale" content={openGraph?.locale ?? siteConfig.locale} />
      <meta property="og:site_name" content={openGraph?.siteName ?? siteConfig.name} />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:url" content={ogUrl} />
      {openGraph?.image && <meta property="og:image" content={openGraph.image} />}

      <meta name="twitter:card" content={twitter?.card ?? 'summary_large_image'} />
      {twitter?.site && <meta name="twitter:site" content={twitter.site} />}
      {twitter?.creator && <meta name="twitter:creator" content={twitter.creator} />}
      <meta name="twitter:title" content={twitterTitle} />
      <meta name="twitter:description" content={twitterDescription} />
      {twitter?.image && <meta name="twitter:image" content={twitter.image} />}

      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  )
}
