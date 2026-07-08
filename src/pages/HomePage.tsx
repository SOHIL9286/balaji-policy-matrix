import { Seo } from '@/components/seo'
import { HeroSection } from '@/components/home'
import { PremiumServices } from '@/components/home/PremiumServices'
import { siteConfig } from '@/config/site'

export function HomePage() {
  return (
    <>
      <Seo
        title={siteConfig.title}
        description={siteConfig.description}
        keywords={[...siteConfig.keywords]}
        openGraph={{
          title: siteConfig.title,
          description: siteConfig.description,
          siteName: siteConfig.name,
        }}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'FinancialService',
          name: siteConfig.name,
          description: siteConfig.description,
          url: siteConfig.url,
          slogan: siteConfig.tagline,
        }}
      />
      <HeroSection />
      <PremiumServices />
    </>
  )
}
