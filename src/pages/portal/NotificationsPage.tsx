import { Seo } from '@/components/seo'
import { siteConfig } from '@/config/site'

export function NotificationsPage() {
  return (
    <>
      <Seo title={`Notifications — ${siteConfig.title}`} />
      <div>
        <h2 className="text-2xl font-semibold mb-4">Notifications</h2>
        <div className="glass-panel p-4 rounded-2xl">No new notifications.</div>
      </div>
    </>
  )
}

export default NotificationsPage
