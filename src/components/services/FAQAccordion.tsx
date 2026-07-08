import { useState } from 'react'
import { motion } from 'framer-motion'

type FAQItem = {
  question: string
  answer: string
}

type FAQAccordionProps = {
  items: FAQItem[]
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(0)

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = activeIndex === index
        return (
          <motion.div
            key={item.question}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: index * 0.05 }}
            className="glass-panel rounded-3xl border border-white/10 p-5"
          >
            <button
              type="button"
              className="flex w-full items-center justify-between text-left"
              onClick={() => setActiveIndex(isOpen ? null : index)}
            >
              <span className="text-base font-semibold">{item.question}</span>
              <span className="text-brand-primary">{isOpen ? '−' : '+'}</span>
            </button>
            {isOpen && (
              <p className="mt-4 text-muted">{item.answer}</p>
            )}
          </motion.div>
        )
      })}
    </div>
  )
}
