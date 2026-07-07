import { motion } from 'framer-motion'

const partners = ['Partner A', 'Partner B', 'Partner C', 'Partner D']

function Testimonials() {
  const items = [
    { name: 'Ravi K.', text: 'Excellent service and quick claim support.' },
    { name: 'Sita P.', text: 'Professional team — helped with my car insurance renewal.' },
  ]

  return (
    <div className="mt-8">
      <h4 className="text-xl font-semibold">Testimonials</h4>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {items.map((it) => (
          <motion.blockquote key={it.name} className="glass-panel p-4 rounded-lg" whileHover={{ scale: 1.01 }}>
            <p className="text-muted">“{it.text}”</p>
            <footer className="mt-3 text-sm font-medium">— {it.name}</footer>
          </motion.blockquote>
        ))}
      </div>
    </div>
  )
}

export default function CompanyTrust() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-6">
        <h3 className="text-2xl font-semibold">Trusted By</h3>
        <div className="mt-6 flex flex-wrap gap-4 items-center">
          {partners.map((p) => (
            <motion.div key={p} className="glass-panel px-4 py-3 rounded-lg text-sm" whileHover={{ scale: 1.03 }}>
              {p}
            </motion.div>
          ))}
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="glass-panel p-6 rounded-xl">
            <div className="text-3xl font-bold">100k+</div>
            <div className="text-muted">Customers</div>
          </div>
          <div className="glass-panel p-6 rounded-xl">
            <div className="text-3xl font-bold">95%</div>
            <div className="text-muted">Claim Success Rate</div>
          </div>
          <div className="glass-panel p-6 rounded-xl">
            <div className="text-3xl font-bold">4.7</div>
            <div className="text-muted">Google Reviews</div>
          </div>
        </div>

        <Testimonials />
      </div>
    </section>
  )
}

