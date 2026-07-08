import { Seo } from '@/components/seo'
import { siteConfig } from '@/config/site'

export function ProfilePage() {
  return (
    <>
      <Seo title={`Profile — ${siteConfig.title}`} />
      <div>
        <h2 className="text-2xl font-semibold mb-4">Profile</h2>
        <div className="glass-panel p-4 rounded-2xl">Profile editing UI (mock).</div>
      </div>
    </>
  )
}

export default ProfilePage
