import { Outlet, Link, useNavigate } from 'react-router-dom'
import { MainLayout } from '@/layouts'
import { useAuth } from '@/hooks/useAuth'

export function PortalLayout() {
  const { user } = useAuth()
  const nav = useNavigate()

  // redirect to login if not authenticated
  if (!user) {
    nav('/portal/login')
    return null
  }
  return (
    <MainLayout>
      <div className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-8">
          <aside className="space-y-4">
            <nav className="glass-panel p-4 rounded-2xl">
              <ul className="space-y-2">
                <li><Link to="/portal/dashboard" className="block py-2">Dashboard</Link></li>
                <li><Link to="/portal/policies" className="block py-2">My Policies</Link></li>
                <li><Link to="/portal/documents" className="block py-2">Documents</Link></li>
                <li><Link to="/portal/renewals" className="block py-2">Renewals</Link></li>
                <li><Link to="/portal/claims" className="block py-2">Claims</Link></li>
                <li><Link to="/portal/profile" className="block py-2">Profile</Link></li>
                <li><Link to="/portal/notifications" className="block py-2">Notifications</Link></li>
                <li><Link to="/portal/settings" className="block py-2">Settings</Link></li>
              </ul>
            </nav>
          </aside>

          <section>
            <Outlet />
          </section>
        </div>
      </div>
    </MainLayout>
  )
}

export default PortalLayout
