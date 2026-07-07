import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { gsap } from '@/lib/gsap'

const stats = [
  { value: 25, suffix: '+', label: 'Years Experience' },
  { value: 10000, suffix: '+', label: 'Happy Clients' },
  { value: 50000, suffix: '+', label: 'Policies' },
  { value: 98, suffix: '%', label: 'Claim Support' },
] as const

export function StatCounters() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-10%' })

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.from('.stat-item', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
        delay: 1.2,
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={sectionRef}
      className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6 lg:gap-8"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          className="stat-item glass-panel rounded-2xl px-4 py-5 text-center sm:px-6 sm:py-6"
          whileHover={{ y: -4, transition: { duration: 0.2 } }}
        >
          <AnimatedNumber value={isInView ? stat.value : 0} suffix={stat.suffix} delay={0.3 + index * 0.15} />
          <p className="mt-1 text-xs font-medium text-white/70 sm:text-sm">
            {stat.label}
          </p>
        </motion.div>
      ))}
    </div>
  )
}

function AnimatedNumber({ value, suffix, delay = 0 }: { value: number; suffix?: string; delay?: number }) {
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    let raf = 0
    let start: number | null = null
    const duration = 2000

    function step(ts: number) {
      if (!start) start = ts
      const elapsed = ts - start
      const progress = Math.min(elapsed / duration, 1)
      setDisplay(Math.floor(progress * value))
      if (progress < 1) raf = requestAnimationFrame(step)
    }

    const timer = setTimeout(() => {
      raf = requestAnimationFrame(step)
    }, delay * 1000)

    return () => {
      clearTimeout(timer)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [value, delay])

  return (
    <p className="text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-4xl">{display}{suffix}</p>
  )
}
