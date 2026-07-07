import { useState } from 'react'
import { Seo } from '@/components/seo'
import { siteConfig } from '@/config/site'

// simple premium calc: base * (1 + riskFactor) * (1 - discount)
export function PremiumCalculatorPage() {
  const [sumInsured, setSumInsured] = useState(500000)
  const [ratePercent, setRatePercent] = useState(2)
  const [discountPercent, setDiscountPercent] = useState(0)

  const rate = ratePercent / 100
  const discount = discountPercent / 100
  const premium = Math.max(0, sumInsured * rate * (1 - discount))

  return (
    <>
      <Seo title={`Premium Calculator — ${siteConfig.title}`} description={`Premium Calculator`} />
      <main className="py-16">
        <div className="container mx-auto px-6 max-w-2xl">
          <h1 className="text-2xl font-bold">Premium Calculator</h1>
          <div className="mt-6 glass-panel p-6 rounded-xl">
            <label className="block">Sum Insured
              <input type="number" min={0} value={sumInsured} onChange={(e) => setSumInsured(Number(e.target.value) || 0)} className="w-full mt-2 p-2 rounded-md bg-transparent border border-white/10" />
            </label>
            <label className="block mt-4">Rate (% of Sum Insured)
              <input type="number" min={0} step="0.01" value={ratePercent} onChange={(e) => setRatePercent(Number(e.target.value) || 0)} className="w-full mt-2 p-2 rounded-md bg-transparent border border-white/10" />
            </label>
            <label className="block mt-4">Discount (%)
              <input type="number" min={0} max={100} step="0.01" value={discountPercent} onChange={(e) => setDiscountPercent(Number(e.target.value) || 0)} className="w-full mt-2 p-2 rounded-md bg-transparent border border-white/10" />
            </label>
            <div className="mt-6 text-lg">
              <div>Estimated Premium: <strong>₹{premium ? premium.toFixed(2) : '0.00'}</strong></div>
              <div className="mt-2 text-sm text-muted">Breakdown: Premium = Sum Insured × Rate (%) × (1 - Discount)</div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default PremiumCalculatorPage
