import { Seo } from '@/components/seo'
import { siteConfig } from '@/config/site'
import { AboutSections } from '@/components/about'

export function AboutPage() {
  return (
    <>
      <Seo
        title={`About — ${siteConfig.title}`}
        description={`About ${siteConfig.name} — 25+ years of insurance and financial services expertise.`}
        keywords={[...siteConfig.keywords, 'about', 'company']}
      />
      <AboutSections />
    </>
  )
}

export default AboutPage
