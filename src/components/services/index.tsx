import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Shield, CreditCard, Truck } from 'lucide-react'
import { useMemo, useState } from 'react'

export const SERVICE_CATEGORIES = [
  {
    key: 'insurance',
    title: 'Insurance',
    items: [
      { slug: 'car-insurance', label: 'Car Insurance' },
      { slug: 'bike-insurance', label: 'Bike Insurance' },
      { slug: 'health-insurance', label: 'Health Insurance' },
      { slug: 'life-insurance', label: 'Life Insurance' },
      { slug: 'commercial-vehicle-insurance', label: 'Commercial Vehicle Insurance' },
      { slug: 'personal-accident-insurance', label: 'Personal Accident Insurance' },
      { slug: 'travel-insurance', label: 'Travel Insurance' },
    ],
  },
  {
    key: 'finance',
    title: 'Finance',
    items: [
      { slug: 'vehicle-finance', label: 'Vehicle Finance' },
      { slug: 'home-loan', label: 'Home Loan' },
      { slug: 'business-loan', label: 'Business Loan' },
    ],
  },
  {
    key: 'rto',
    title: 'RTO Services',
    items: [
      { slug: 'driving-licence', label: 'Driving Licence' },
      { slug: 'learning-licence', label: 'Learning Licence' },
      { slug: 'rc-transfer', label: 'RC Transfer' },
      { slug: 'hypothecation', label: 'Hypothecation' },
      { slug: 'noc', label: 'NOC' },
      { slug: 'fitness', label: 'Fitness' },
      { slug: 'permit', label: 'Permit' },
      { slug: 'tax', label: 'Tax' },
    ],
  },
]

export default function ServicesList() {
  const [filter, setFilter] = useState<'all' | string>('all')

  const icons: Record<string, any> = {
    insurance: Shield,
    finance: CreditCard,
    rto: Truck,
  }

  const services = useMemo(() => {
    if (filter === 'all') return SERVICE_CATEGORIES.flatMap((c) => c.items.map((it) => ({ ...it, category: c.key })))
    const cat = SERVICE_CATEGORIES.find((c) => c.key === filter)
    return cat ? cat.items.map((it) => ({ ...it, category: cat.key })) : []
  }, [filter])

  return (
    <section>
      <div className="flex flex-col items-start gap-4">
        <div className="flex gap-3">
          <button onClick={() => setFilter('all')} className={filter === 'all' ? 'px-3 py-1 rounded-full bg-brand-primary text-white' : 'px-3 py-1 rounded-full bg-white/5'}>All</button>
          {SERVICE_CATEGORIES.map((c) => (
            <button key={c.key} onClick={() => setFilter(c.key)} className={filter === c.key ? 'px-3 py-1 rounded-full bg-brand-primary text-white' : 'px-3 py-1 rounded-full bg-white/5'}>
              {c.title}
            </button>
          ))}
        </div>

        <div className="mt-4 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {services.map((s) => {
            const Icon = icons[s.category] ?? Shield
            return (
              <motion.article key={s.slug} whileHover={{ y: -6, scale: 1.02 }} className="glass-panel p-5 rounded-2xl">
                <div className="flex items-start gap-3">
                  <div className="rounded-lg bg-white/5 p-3"><Icon className="h-6 w-6" /></div>
                  <div>
                    <Link to={`/services/${s.slug}`} className="font-semibold hover:underline">{s.label}</Link>
                    <p className="mt-1 text-sm text-muted">Learn more about our {s.label.toLowerCase()} offering.</p>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
