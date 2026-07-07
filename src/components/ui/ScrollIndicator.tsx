import { motion } from 'framer-motion'

export default function ScrollIndicator({ href = '#services' }: { href?: string }) {
  return (
    <a href={href} aria-label="Scroll to content" className="pointer-events-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0.6, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="mx-auto flex w-fit items-center justify-center"
      >
        <div className="flex h-12 w-8 items-center justify-center rounded-full border border-white/15 glass-panel">
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.2, repeat: Infinity }}
            className="block h-2 w-2 rounded-full bg-white"
          />
        </div>
      </motion.div>
    </a>
  )
}
