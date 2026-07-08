import { useParams, Link } from 'react-router-dom'
import { Seo } from '@/components/seo'
import { siteConfig } from '@/config/site'
import { SERVICE_DETAILS } from '@/config/services'
import { SERVICE_CATEGORIES } from '@/config/services'

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
          <nav className="text-sm text-muted mb-4">
            <Link to="/">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/services">Services</Link>
            <span className="mx-2">/</span>
            <span className="text-white">{content.title}</span>
          </nav>
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
                  <div className="mt-6">
                    <Link to="/contact" className="inline-block w-full text-center rounded-full px-4 py-2 bg-gradient-to-r from-brand-primary to-brand-secondary text-white">Get Free Quote</Link>
                  </div>
                </aside>
              </div>
              {/* Related Services */}
              {content.related && content.related.length > 0 && (
                <div className="mt-10">
                  <h3 className="text-xl font-semibold">Related Services</h3>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {content.related.map((r) => (
                      <Link key={r.slug} to={`/services/${r.slug}`} className="glass-panel p-4 rounded-xl border border-white/10 hover:shadow-lg">
                        <div className="font-semibold">{r.label}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Prev / Next navigation */}
              <div className="mt-10 flex items-center justify-between">
                {(() => {
                  const flat = SERVICE_CATEGORIES.flatMap((c) => c.items.map((i) => i.slug))
                  const idx = flat.indexOf(key)
                  const prev = idx > 0 ? flat[idx - 1] : null
                  const next = idx >= 0 && idx < flat.length - 1 ? flat[idx + 1] : null
                  return (
                    <>
                      <div>
                        {prev ? (
                          <Link to={`/services/${prev}`} className="inline-flex items-center gap-2 text-sm text-muted hover:underline">← Previous</Link>
                        ) : <div />}
                      </div>
                      <div>
                        {next ? (
                          <Link to={`/services/${next}`} className="inline-flex items-center gap-2 text-sm text-muted hover:underline">Next →</Link>
                        ) : <div />}
                      </div>
                    </>
                  )
                })()}
              </div>
            </div>
          </article>
        </div>
      </main>
    </>
  )
}

export default ServiceDetailPage
