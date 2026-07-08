import { Seo } from '@/components/seo'
import { siteConfig } from '@/config/site'
import { policies, claims } from '@/data/portalMock'
import { Link } from 'react-router-dom'

export function DashboardPage() {
  return (
    <>
      <Seo title={`Dashboard — ${siteConfig.title}`} />
      <div className="space-y-6">
        <header className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Welcome to your portal</h2>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link to="/portal/policies" className="glass-panel p-4 rounded-2xl">My Policies<br /><span className="text-muted">{policies.length}</span></Link>
          <Link to="/portal/renewals" className="glass-panel p-4 rounded-2xl">Upcoming Renewals<br /><span className="text-muted">1</span></Link>
          <Link to="/portal/claims" className="glass-panel p-4 rounded-2xl">Claims<br /><span className="text-muted">{claims.length}</span></Link>
        </div>

      </div>
    </>
  )
}

export default DashboardPage
