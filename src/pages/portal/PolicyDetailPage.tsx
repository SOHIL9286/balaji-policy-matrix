import { Seo } from '@/components/seo'
import { siteConfig } from '@/config/site'
import { useParams } from 'react-router-dom'
import { policies } from '@/data/portalMock'

export function PolicyDetailPage() {
  const { id } = useParams()
  const policy = policies.find((p) => p.id === id) || policies[0]

  return (
    <>
      <Seo title={`${policy.id} — ${siteConfig.title}`} />
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Policy {policy.id}</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="glass-panel p-6 rounded-2xl">
            <h3 className="font-semibold">Policy Information</h3>
            <p className="mt-2 text-muted">Type: {policy.type}</p>
            <p className="mt-1 text-muted">Company: {policy.company}</p>
            <p className="mt-1 text-muted">Premium: ₹{policy.premium}</p>
          </div>

          <div className="glass-panel p-6 rounded-2xl">
            <h3 className="font-semibold">Vehicle Details</h3>
            <p className="mt-2 text-muted">Number: {policy.vehicle}</p>
            <p className="mt-1 text-muted">Owner: {policy.customer}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default PolicyDetailPage
