import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import balajiLogo from '@/assets/balaji-logo.svg'
import { siteConfig } from '@/config/site'
import { gsap } from '@/lib/gsap'

export function HeroContent() {
  const contentRef = useRef<HTMLDivElement>(null)

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
  }

  const item: Variants = {
    hidden: { y: 18, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  }

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
    <motion.div ref={contentRef} className="relative z-10 flex flex-col justify-center" variants={container} initial="hidden" animate="show">
      <motion.div variants={item} className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-md" whileHover={{ scale: 1.02 }}>
        <Sparkles className="h-4 w-4 text-brand-accent" aria-hidden />
        <span className="text-xs font-medium tracking-wide text-white/90 sm:text-sm">{siteConfig.tagline}</span>
      </motion.div>

      <motion.img
        variants={item}
        src={balajiLogo}
        alt={siteConfig.shortName}
        className="mb-8 h-14 w-auto sm:h-16 lg:hidden"
      />

      <motion.h1 variants={item} className="max-w-2xl text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
        Protect What{' '}
        <span className="bg-gradient-to-r from-brand-secondary via-white to-brand-accent bg-clip-text text-transparent">Matters Most</span>
      </motion.h1>

      <motion.p variants={item} className="mt-5 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg lg:text-xl">
        Insurance | Finance | RTO Services | Mutual Funds
      </motion.p>

      <motion.div variants={item} className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
        <motion.a
          href="#quote"
          id="quote"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-accent px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-brand-accent/35 transition-shadow hover:shadow-brand-accent/50 sm:text-base focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
          aria-label="Get a free quote"
          tabIndex={0}
        >
          Get Free Quote
          <ArrowRight className="h-4 w-4" />
        </motion.a>

        <motion.a
          href="#services"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/15 sm:text-base focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          aria-label="Explore services"
          tabIndex={0}
        >
          Explore Services
        </motion.a>
      </motion.div>
    </motion.div>
  )
}
