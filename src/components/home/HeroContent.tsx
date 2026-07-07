import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import balajiLogo from '@/assets/balaji-logo.svg'
import { siteConfig } from '@/config/site'
import { gsap } from '@/lib/gsap'

export function HeroContent() {
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!contentRef.current) return

    const ctx = gsap.context(() => {
      gsap.from('.hero-animate', {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: 'power3.out',
        delay: 0.3,
      })
    }, contentRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={contentRef} className="relative z-10 flex flex-col justify-center">
      <motion.div
        className="hero-animate mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-md"
        whileHover={{ scale: 1.02 }}
      >
        <Sparkles className="h-4 w-4 text-brand-accent" />
        <span className="text-xs font-medium tracking-wide text-white/90 sm:text-sm">
          {siteConfig.tagline}
        </span>
      </motion.div>

      <img
        src={balajiLogo}
        alt={siteConfig.shortName}
        className="hero-animate mb-8 h-14 w-auto sm:h-16 lg:hidden"
      />

      <h1 className="hero-animate max-w-2xl text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
        Protect What{' '}
        <span className="bg-gradient-to-r from-brand-secondary via-white to-brand-accent bg-clip-text text-transparent">
          Matters Most
        </span>
      </h1>

      <p className="hero-animate mt-5 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg lg:text-xl">
        Insurance | Finance | RTO Services | Mutual Funds
      </p>

      <div className="hero-animate mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
        <motion.a
          href="#quote"
          id="quote"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-accent px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-brand-accent/35 transition-shadow hover:shadow-brand-accent/50 sm:text-base"
        >
          Get Free Quote
          <ArrowRight className="h-4 w-4" />
        </motion.a>

        <motion.a
          href="#services"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/15 sm:text-base"
        >
          Explore Services
        </motion.a>
      </div>
    </div>
  )
}
