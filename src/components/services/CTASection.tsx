import { motion } from 'framer-motion'

export function CTASection() {
  return (
    <section className="glass-panel rounded-[2.5rem] border border-white/10 bg-gradient-to-r from-brand-secondary/10 via-white/5 to-brand-primary/10 p-8 shadow-2xl">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-brand-primary">Get your free quote</p>
          <h2 className="mt-3 text-3xl font-semibold">Premium support for every policy and financing need.</h2>
          <p className="mt-3 text-muted">Work with Balaji Policy Matrix LLP for dedicated advice, claims support, and fast policy delivery.</p>
        </div>
        <motion.div whileHover={{ scale: 1.02 }} className="flex flex-col gap-3 sm:flex-row">
          <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_50px_rgba(34,197,94,0.18)]">Get Free Quote</a>
          <a href={`https://wa.me/919638622456`} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white">WhatsApp Us</a>
        </motion.div>
      </div>
    </section>
  )
}
