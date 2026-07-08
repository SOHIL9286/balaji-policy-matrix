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
    <motion.div ref={contentRef} className="relative z-10 flex flex-col justify-center px-1 sm:px-0" variants={container} initial="hidden" animate="show">
      <motion.div variants={item} className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-400/12 px-4 py-2.5 shadow-[0_0_30px_rgba(22,169,246,0.12)] backdrop-blur-md" whileHover={{ scale: 1.02 }}>
        <Sparkles className="h-4 w-4 text-brand-accent" aria-hidden />
        <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/90 sm:text-xs">{siteConfig.tagline}</span>
      </motion.div>

      <motion.img
        variants={item}
        src={balajiLogo}
        alt={siteConfig.shortName}
        className="mb-8 h-14 w-auto object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.22)] sm:h-16 lg:hidden"
        style={{ imageRendering: 'auto' }}
      />

      <motion.h1 variants={item} className="max-w-2xl text-[2.65rem] font-semibold leading-[0.95] tracking-[-0.03em] text-white sm:text-[3.55rem] lg:text-[4.35rem] xl:text-[5.2rem]">
        Protect What{' '}
        <span className="bg-gradient-to-r from-brand-secondary via-white to-brand-accent bg-clip-text text-transparent">Matters Most</span>
      </motion.h1>

      <motion.p variants={item} className="mt-5 max-w-xl text-base leading-8 text-white/75 sm:text-lg lg:text-xl">
        Trusted guidance across insurance, finance, vehicle compliance, and wealth growth.
      </motion.p>

      <motion.div variants={item} className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
        <motion.a
          href="#quote"
          id="quote"
          whileHover={{ scale: 1.03, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-accent px-7 py-3.5 text-sm font-semibold text-white shadow-[0_18px_50px_rgba(245,130,32,0.28)] transition-all duration-300 hover:shadow-[0_22px_55px_rgba(245,130,32,0.35)] sm:text-base focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
          aria-label="Get a free quote"
          tabIndex={0}
        >
          Get Free Quote
          <ArrowRight className="h-4 w-4" />
        </motion.a>

        <motion.a
          href="#services"
          whileHover={{ scale: 1.03, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/15 hover:shadow-[0_16px_45px_rgba(2,6,23,0.2)] sm:text-base focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          aria-label="Explore services"
          tabIndex={0}
        >
          Explore Services
        </motion.a>
      </motion.div>
    </motion.div>
  )
}
