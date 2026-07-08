import { motion } from 'framer-motion'

type BenefitCardProps = {
  title: string
  description: string
}

export function BenefitCard({ title, description }: BenefitCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="glass-panel rounded-3xl border border-white/10 p-6 shadow-lg"
    >
      <p className="text-sm uppercase tracking-[0.35em] text-brand-primary">Benefit</p>
      <h3 className="mt-3 text-xl font-semibold">{title}</h3>
      <p className="mt-3 text-muted">{description}</p>
    </motion.div>
  )
}
