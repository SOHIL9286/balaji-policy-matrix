import { useState } from 'react'
import { Seo } from '@/components/seo'
import { siteConfig } from '@/config/site'

export function RemindersPage() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  function subscribe() {
    // demo: real app should persist and send emails
    setSubscribed(true)
  }

  return (
    <>
      <Seo title={`Reminders — ${siteConfig.title}`} description={`Policy renewal reminders`} />
      <main className="py-16">
        <div className="container mx-auto px-6 max-w-2xl">
          <h1 className="text-2xl font-bold">Policy Renewal Reminder</h1>
          <div className="mt-6 glass-panel p-6 rounded-xl">
            {!subscribed ? (
              <>
                <label className="block">Email
                  <input value={email} onChange={(e) => setEmail(e.target.value)} className="w-full mt-2 p-2 rounded-md bg-transparent border border-white/10" />
                </label>
                <div className="mt-4">
                  <button onClick={subscribe} className="px-4 py-2 bg-brand-primary text-white rounded-lg">Subscribe</button>
                </div>
              </>
            ) : (
              <p className="text-muted">You're subscribed for renewal reminders.</p>
            )}
          </div>
        </div>
      </main>
    </>
  )
}

export default RemindersPage
