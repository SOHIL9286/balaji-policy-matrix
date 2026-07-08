import { motion } from 'framer-motion'

type FeatureCardProps = {
  title: string
  description: string
}

export function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <motion.article
      whileHover={{ y: -6, scale: 1.02 }}
      className="glass-panel rounded-3xl border border-white/10 p-6 shadow-sm"
    >
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-3 text-muted">{description}</p>
    </motion.article>
  )
}
