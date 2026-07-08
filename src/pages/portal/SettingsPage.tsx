import { Seo } from '@/components/seo'
import { siteConfig } from '@/config/site'

export function SettingsPage() {
  return (
    <>
      <Seo title={`Settings — ${siteConfig.title}`} />
      <div>
        <h2 className="text-2xl font-semibold mb-4">Settings</h2>
        <div className="glass-panel p-4 rounded-2xl">Change password and preferences (mock).</div>
      </div>
    </>
  )
}

export default SettingsPage
