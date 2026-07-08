import { motion } from 'framer-motion'

type DocumentChecklistProps = {
  documents: string[]
}

export function DocumentChecklist({ documents }: DocumentChecklistProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {documents.map((doc, index) => (
        <motion.div
          key={doc}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.3, delay: index * 0.04 }}
          className="glass-panel rounded-3xl border border-white/10 p-5"
        >
          <p className="text-sm font-medium text-brand-primary">Document</p>
          <p className="mt-3 text-muted">{doc}</p>
        </motion.div>
      ))}
    </div>
  )
}
