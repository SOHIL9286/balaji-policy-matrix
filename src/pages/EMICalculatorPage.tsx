import { useState } from 'react'
import { Seo } from '@/components/seo'
import { siteConfig } from '@/config/site'

function calculateEMI(principal: number, rate: number, months: number) {
  if (rate === 0) return principal / months
  const monthlyRate = rate / 12 / 100
  const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1)
  return emi
}

export function EMICalculatorPage() {
  const [principal, setPrincipal] = useState(500000)
  const [rate, setRate] = useState(10)
  const [tenure, setTenure] = useState(60)

  const emi = calculateEMI(Number(principal), Number(rate), Number(tenure))

  return (
    <>
      <Seo title={`EMI Calculator — ${siteConfig.title}`} description={`EMI Calculator`} />
      <main className="py-16">
        <div className="container mx-auto px-6 max-w-2xl">
          <h1 className="text-2xl font-bold">EMI Calculator</h1>
          <div className="mt-6 glass-panel p-6 rounded-xl">
            <label className="block">Principal
              <input type="number" value={principal} onChange={(e) => setPrincipal(Number(e.target.value))} className="w-full mt-2 p-2 rounded-md bg-transparent border border-white/10" />
            </label>
            <label className="block mt-4">Interest Rate (annual %)
              <input type="number" value={rate} onChange={(e) => setRate(Number(e.target.value))} className="w-full mt-2 p-2 rounded-md bg-transparent border border-white/10" />
            </label>
            <label className="block mt-4">Tenure (months)
              <input type="number" value={tenure} onChange={(e) => setTenure(Number(e.target.value))} className="w-full mt-2 p-2 rounded-md bg-transparent border border-white/10" />
            </label>
            <div className="mt-6 text-lg">
              <div>Estimated EMI: <strong>₹{emi ? emi.toFixed(2) : '0.00'}</strong></div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default EMICalculatorPage
