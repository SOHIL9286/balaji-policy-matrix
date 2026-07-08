import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

type ServiceCardProps = {
  slug: string
  label: string
  category: string
}

export function ServiceCard({ slug, label, category }: ServiceCardProps) {
  return (
    <motion.article whileHover={{ y: -8, scale: 1.02 }} className="glass-panel rounded-3xl border border-white/10 p-6 transition-shadow shadow-sm hover:shadow-lg">
      <div className="flex items-center justify-between">
        <span className="text-sm uppercase tracking-[0.35em] text-brand-primary">{category}</span>
        <div className="h-10 w-10 rounded-2xl bg-white/10" />
      </div>
      <h3 className="mt-5 text-xl font-semibold">{label}</h3>
      <p className="mt-4 text-muted">Learn more about our premium {label.toLowerCase()} services.</p>
      <Link to={`/services/${slug}`} className="mt-5 inline-flex text-sm font-semibold text-brand-primary hover:underline">View Details</Link>
    </motion.article>
  )
}
