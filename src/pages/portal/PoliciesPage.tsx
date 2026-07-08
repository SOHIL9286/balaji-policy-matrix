import { Seo } from '@/components/seo'
import { siteConfig } from '@/config/site'
import { policies } from '@/data/portalMock'

export function PoliciesPage() {
  return (
    <>
      <Seo title={`My Policies — ${siteConfig.title}`} />
      <div>
        <h2 className="text-2xl font-semibold mb-4">My Policies</h2>
        <div className="overflow-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-sm text-muted">
                <th>Policy #</th>
                <th>Type</th>
                <th>Company</th>
                <th>Vehicle</th>
                <th>Customer</th>
                <th>Issue</th>
                <th>Expiry</th>
                <th>Premium</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {policies.map((p) => (
                <tr key={p.id} className="border-t border-white/10">
                  <td className="py-3">{p.id}</td>
                  <td>{p.type}</td>
                  <td>{p.company}</td>
                  <td>{p.vehicle}</td>
                  <td>{p.customer}</td>
                  <td>{p.issueDate}</td>
                  <td>{p.expiryDate}</td>
                  <td>₹{p.premium}</td>
                  <td>{p.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default PoliciesPage
