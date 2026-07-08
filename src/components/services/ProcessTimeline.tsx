import { motion } from 'framer-motion'

type Step = {
  title: string
  description: string
}

type ProcessTimelineProps = {
  steps: Step[]
}

export function ProcessTimeline({ steps }: ProcessTimelineProps) {
  return (
    <div className="space-y-6">
      {steps.map((step, index) => (
        <motion.div
          key={step.title}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.35, delay: index * 0.05 }}
          className="flex gap-4"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-primary text-white">{index + 1}</div>
          <div>
            <h4 className="text-lg font-semibold">{step.title}</h4>
            <p className="mt-2 text-muted">{step.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
