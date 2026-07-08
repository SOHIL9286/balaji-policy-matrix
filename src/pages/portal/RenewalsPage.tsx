import { Seo } from '@/components/seo'
import { siteConfig } from '@/config/site'

export function RenewalsPage() {
  return (
    <>
      <Seo title={`Renewals — ${siteConfig.title}`} />
      <div>
        <h2 className="text-2xl font-semibold mb-4">Renewal Center</h2>
        <div className="glass-panel p-4 rounded-2xl">Renewal lists will appear here (mock data).</div>
      </div>
    </>
  )
}

export default RenewalsPage
