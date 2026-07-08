import { useParams } from 'react-router-dom'
import { Seo } from '@/components/seo'
import { siteConfig } from '@/config/site'
import { SERVICE_DETAILS } from '@/config/services'

export function ServiceDetailPage() {
  const { slug } = useParams()
  const key = slug ?? ''
  const content = SERVICE_DETAILS[key] ?? {
    title: 'Service',
    desc: 'Details coming soon.',
    hero: 'Premium service details are being prepared for this offering.',
    features: ['Tailored coverage recommendations', 'Dedicated support', 'Transparent policy guidance'],
    details: ['Reach out to our team to get custom service recommendations and premium support.'],
  }

  return (
    <>
      <Seo title={`${content.title} — ${siteConfig.title}`} description={content.desc} />
      <main className="py-16">
        <div className="container mx-auto px-6">
          <article className="glass-panel p-8 rounded-2xl">
            <div className="space-y-6">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-brand-primary">Service</p>
                <h1 className="mt-3 text-4xl font-bold">{content.title}</h1>
                <p className="mt-4 text-muted max-w-3xl">{content.desc}</p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="text-lg font-semibold">{content.hero}</p>
              </div>

              <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
                <section className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-semibold">What we cover</h2>
                    <ul className="mt-4 list-disc pl-5 text-muted space-y-3">
                      {content.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold">How it works</h2>
                    <div className="mt-4 space-y-3 text-muted">
                      {content.details.map((detail) => (
                        <p key={detail}>{detail}</p>
                      ))}
                    </div>
                  </div>
                </section>

                <aside className="rounded-3xl border border-white/10 bg-background/80 p-6">
                  <h3 className="text-xl font-semibold">Premium support</h3>
                  <p className="mt-3 text-muted">{content.note ?? 'Receive expert guidance, fast claims support, and tailored policy recommendations.'}</p>
                  <div className="mt-6 space-y-3 text-sm text-muted">
                    <div className="rounded-2xl bg-white/5 p-4">Trusted insurers and transparent premiums.</div>
                    <div className="rounded-2xl bg-white/5 p-4">Digital policy documents and renewal reminders.</div>
                    <div className="rounded-2xl bg-white/5 p-4">Dedicated relationship manager for your service.</div>
                  </div>
                </aside>
              </div>
            </div>
          </article>
        </div>
      </main>
    </>
  )
}

export default ServiceDetailPage
