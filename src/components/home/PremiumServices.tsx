import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Truck,
  Car,
  Heart,
  Users,
  Activity,
  DollarSign,
  Shield,
  FilePlus,
  Settings,
} from 'lucide-react'

const services = [
  { slug: 'car-insurance', title: 'Car Insurance', desc: 'Comprehensive cover for cars and personal mobility.', icon: Car, gradient: 'from-rose-500 to-pink-500' },
  { slug: 'bike-insurance', title: 'Bike Insurance', desc: 'Two-wheeler protection with fast claims support.', icon: Truck, gradient: 'from-orange-400 to-amber-400' },
  { slug: 'health-insurance', title: 'Health Insurance', desc: 'Cashless hospitalisation and wellness benefits.', icon: Heart, gradient: 'from-emerald-400 to-teal-400' },
  { slug: 'term-life-insurance', title: 'Life Insurance', desc: 'Protect loved ones with tailored life cover.', icon: Users, gradient: 'from-indigo-500 to-violet-500' },
  { slug: 'personal-accident-insurance', title: 'Personal Accident', desc: 'Accidental cover for unexpected events.', icon: Activity, gradient: 'from-yellow-400 to-orange-500' },
  { slug: 'commercial-vehicle-insurance', title: 'Commercial Vehicle', desc: 'Fleet and commercial vehicle insurance.', icon: Shield, gradient: 'from-sky-500 to-cyan-400' },
  { slug: 'vehicle-finance', title: 'Vehicle Finance', desc: 'Flexible loans and EMI solutions for vehicles.', icon: DollarSign, gradient: 'from-fuchsia-500 to-pink-500' },
  { slug: 'mutual-funds', title: 'Mutual Funds', desc: 'Professional investment options for long-term goals.', icon: Settings, gradient: 'from-emerald-500 to-lime-400' },
  { slug: 'rto-services', title: 'RTO Services', desc: 'Registration, permits and documentation support.', icon: FilePlus, gradient: 'from-violet-500 to-indigo-500' },
]

export function PremiumServices() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="mb-8 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-brand-secondary/80">Premium Services</p>
          <h2 className="text-3xl md:text-4xl font-semibold">Explore Premium Motor, Health & Finance Services</h2>
          <p className="max-w-2xl mx-auto text-muted mt-2">Handpicked services with premium support, fast claims and expert advice.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                whileHover={{ y: -12, rotateX: 4, scale: 1.02 }}
                className="glass-panel p-6 rounded-3xl border border-white/10 bg-white/5 shadow-[0_30px_80px_rgba(2,6,23,0.32)] hover:shadow-[0_40px_120px_rgba(2,6,23,0.42)] transform-gpu transition-transform"
              >
                <div className="flex items-start gap-4">
                  <div className={`h-14 w-14 flex items-center justify-center rounded-xl bg-gradient-to-br ${s.gradient} text-white shadow-md`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">{s.title}</h3>
                    <p className="text-sm text-muted mt-2">{s.desc}</p>
                    <div className="mt-4">
                      <Link to={`/services/${s.slug}`} className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-white/10 hover:bg-white/20 text-sm font-medium">
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default PremiumServices
