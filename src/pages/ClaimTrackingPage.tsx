import { useState } from 'react'
import { Seo } from '@/components/seo'
import { siteConfig } from '@/config/site'

export function ClaimTrackingPage() {
  const [policy, setPolicy] = useState('')
  const [status, setStatus] = useState<string | null>(null)

  function checkStatus() {
    // stub: in real app we'd call backend
    if (!policy) return setStatus('Please enter a policy number')
    setStatus('Claim status: Under Review (demo)')
  }

  return (
    <>
      <Seo title={`Claim Tracking — ${siteConfig.title}`} description={`Track your claim`} />
      <main className="py-16">
        <div className="container mx-auto px-6 max-w-2xl">
          <h1 className="text-2xl font-bold">Claim Tracking</h1>
          <div className="mt-6 glass-panel p-6 rounded-xl">
            <label className="block">Policy / Claim Number
              <input value={policy} onChange={(e) => setPolicy(e.target.value)} className="w-full mt-2 p-2 rounded-md bg-transparent border border-white/10" />
            </label>
            <div className="mt-4">
              <button onClick={checkStatus} className="px-4 py-2 bg-brand-primary text-white rounded-lg">Check Status</button>
            </div>
            {status && <p className="mt-4 text-muted">{status}</p>}
          </div>
        </div>
      </main>
    </>
  )
}

export default ClaimTrackingPage
