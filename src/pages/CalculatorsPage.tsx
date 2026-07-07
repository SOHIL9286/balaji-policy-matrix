import { Seo } from '@/components/seo'
import { siteConfig } from '@/config/site'
import { Link } from 'react-router-dom'

export function CalculatorsPage() {
  return (
    <>
      <Seo title={`Calculators — ${siteConfig.title}`} description={`Helpful calculators from ${siteConfig.name}`} />
      <main className="py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl font-bold">Calculators</h1>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            <Link to="/calculators/emi" className="glass-panel p-4 rounded-lg">EMI Calculator</Link>
            <Link to="/calculators/premium" className="glass-panel p-4 rounded-lg">Premium Calculator</Link>
            <Link to="/calculators/policy" className="glass-panel p-4 rounded-lg">Policy Calculator</Link>
          </div>
        </div>
      </main>
    </>
  )
}

export default CalculatorsPage
