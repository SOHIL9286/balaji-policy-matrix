import { Seo } from '@/components/seo'
import { siteConfig } from '@/config/site'
import { claims } from '@/data/portalMock'

export function ClaimsPage() {
  return (
    <>
      <Seo title={`Claims — ${siteConfig.title}`} />
      <div>
        <h2 className="text-2xl font-semibold mb-4">Claims</h2>
        <div className="grid gap-3">
          {claims.map((c) => (
            <div key={c.id} className="glass-panel p-4 rounded-2xl">
              <div className="font-semibold">{c.id} — {c.company}</div>
              <div className="text-sm text-muted">Status: {c.status}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default ClaimsPage
