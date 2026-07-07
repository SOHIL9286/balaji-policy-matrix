import { Seo } from '@/components/seo'
import { siteConfig } from '@/config/site'

const DOCS = [
  { title: 'Terms & Conditions', href: '/docs/terms.pdf' },
  { title: 'Privacy Policy', href: '/docs/privacy.pdf' },
]

export function DownloadCenterPage() {
  return (
    <>
      <Seo title={`Downloads — ${siteConfig.title}`} description={`Download center`} />
      <main className="py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl font-bold">Download Centre</h1>
          <div className="mt-6 space-y-3">
            {DOCS.map((d) => (
              <a key={d.href} href={d.href} className="block glass-panel p-3 rounded-lg" download>
                {d.title}
              </a>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}

export default DownloadCenterPage
