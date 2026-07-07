import { useState } from 'react'
import { Seo } from '@/components/seo'
import { siteConfig } from '@/config/site'

export function PolicyCalculatorPage() {
  const [age, setAge] = useState(30)
  const [term, setTerm] = useState(10)

  // naive policy amount suggestion
  const base = age < 40 ? 1000000 : 500000
  const suggested = Math.round(base * (term / 10))

  return (
    <>
      <Seo title={`Policy Calculator — ${siteConfig.title}`} description={`Policy Calculator`} />
      <main className="py-16">
        <div className="container mx-auto px-6 max-w-2xl">
          <h1 className="text-2xl font-bold">Policy Calculator</h1>
          <div className="mt-6 glass-panel p-6 rounded-xl">
            <label className="block">Age
              <input type="number" value={age} onChange={(e) => setAge(Number(e.target.value))} className="w-full mt-2 p-2 rounded-md bg-transparent border border-white/10" />
            </label>
            <label className="block mt-4">Term (years)
              <input type="number" value={term} onChange={(e) => setTerm(Number(e.target.value))} className="w-full mt-2 p-2 rounded-md bg-transparent border border-white/10" />
            </label>
            <div className="mt-6 text-lg">
              <div>Suggested Cover: <strong>₹{suggested.toLocaleString()}</strong></div>
              <div className="mt-2 text-sm text-muted">Note: This is a guidance amount. Speak to our advisors for a tailored recommendation.</div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default PolicyCalculatorPage
