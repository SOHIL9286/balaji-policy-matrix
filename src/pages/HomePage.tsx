import React, { Suspense, lazy } from 'react'
import { Seo } from '@/components/seo'
import { siteConfig } from '@/config/site'

const HeroSection = lazy(() => import('@/components/home/HeroSection').then((m) => ({ default: m.HeroSection })))
const PremiumServices = lazy(() => import('@/components/home/PremiumServices').then((m) => ({ default: m.PremiumServices })))

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
      <Suspense fallback={null}>
        <HeroSection />
      </Suspense>

      <Suspense fallback={null}>
        <PremiumServices />
      </Suspense>
    </>
  )
}
