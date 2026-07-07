import { Seo } from '@/components/seo'
import { siteConfig } from '@/config/site'
import { useState } from 'react'

export function CustomerPortalPage() {
  const [loggedIn, setLoggedIn] = useState(false)

  return (
    <>
      <Seo title={`Customer Portal — ${siteConfig.title}`} description={`Portal`} />
      <main className="py-16">
        <div className="container mx-auto px-6 max-w-md">
          <h1 className="text-2xl font-bold">Customer Portal</h1>
          <div className="mt-6 glass-panel p-6 rounded-xl">
            {!loggedIn ? (
              <>
                <p className="text-muted">Sign in to access your policies, renewals and claims.</p>
                <button onClick={() => setLoggedIn(true)} className="mt-4 px-4 py-2 bg-brand-primary text-white rounded-lg">Sign in (demo)</button>
              </>
            ) : (
              <>
                <p className="text-muted">Welcome back — this is a demo portal.</p>
              </>
            )}
          </div>
        </div>
      </main>
    </>
  )
}

export default CustomerPortalPage
