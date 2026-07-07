import { Seo } from '@/components/seo'
import { siteConfig } from '@/config/site'

const FAQ_ITEMS = [
  { q: 'How do I file a claim?', a: 'Contact our support or use the Claim Tracking tool with your policy number.' },
  { q: 'How to renew my policy?', a: 'Use the renewal option in your customer portal or contact our team.' },
]

export function FAQPage() {
  return (
    <>
      <Seo title={`FAQ — ${siteConfig.title}`} description={`Frequently asked questions for ${siteConfig.name}`} />
      <main className="py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl font-bold">Frequently Asked Questions</h1>
          <div className="mt-6 space-y-4">
            {FAQ_ITEMS.map((f) => (
              <details key={f.q} className="glass-panel p-4 rounded-lg">
                <summary className="font-semibold">{f.q}</summary>
                <p className="mt-2 text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}

export default FAQPage
