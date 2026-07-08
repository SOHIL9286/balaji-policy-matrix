import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

type RelatedService = {
  slug: string
  label: string
}

type RelatedServicesProps = {
  services: RelatedService[]
}

export function RelatedServices({ services }: RelatedServicesProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => (
        <motion.div key={service.slug} whileHover={{ y: -6, scale: 1.02 }} className="glass-panel rounded-3xl border border-white/10 p-5">
          <Link to={`/services/${service.slug}`} className="text-lg font-semibold hover:text-brand-primary">{service.label}</Link>
          <p className="mt-3 text-sm text-muted">Explore this premium service offering from Balaji Policy Matrix LLP.</p>
        </motion.div>
      ))}
    </div>
  )
}
