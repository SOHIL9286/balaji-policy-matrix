import { motion } from 'framer-motion'

type PageBannerProps = {
  title: string
  subtitle: string
  description: string
  icon: React.ReactNode
}

export function PageBanner({ title, subtitle, description, icon }: PageBannerProps) {
  return (
    <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="glass-panel rounded-[3rem] border border-white/10 bg-gradient-to-r from-brand-primary/10 via-white/5 to-brand-secondary/10 p-8 shadow-2xl">
      <div className="grid gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-brand-primary">{subtitle}</p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight">{title}</h1>
          <p className="mt-4 max-w-2xl text-muted">{description}</p>
        </div>
        <div className="flex h-48 items-center justify-center rounded-3xl bg-white/5 p-6 shadow-inner">
          {icon}
        </div>
      </div>
    </motion.section>
  )
}
