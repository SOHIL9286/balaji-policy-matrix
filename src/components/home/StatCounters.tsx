import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { gsap } from '@/lib/gsap'
import CountUp from 'react-countup/build/index.js'

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
          <p className="text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-4xl">
            {isInView ? (
              <CountUp
                end={stat.value}
                duration={2.5}
                delay={0.3 + index * 0.15}
                separator=","
                suffix={stat.suffix}
              />
            ) : (
              `0${stat.suffix}`
            )}
          </p>
          <p className="mt-1 text-xs font-medium text-white/70 sm:text-sm">
            {stat.label}
          </p>
        </motion.div>
      ))}
    </div>
  )
}
