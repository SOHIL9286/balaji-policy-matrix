import type { CSSProperties } from 'react'
import { motion } from 'framer-motion'
import { Car, Landmark, PiggyBank, ShieldCheck } from 'lucide-react'
import balajiLogo from '@/assets/balaji-logo.svg'
import { useMouseParallax } from '@/hooks/useMouseParallax'
import { cn } from '@/lib/utils'

const cards = [
  {
    icon: ShieldCheck,
    title: 'Insurance',
    description: 'Comprehensive coverage tailored to your needs',
    position: 'top-6 left-0 lg:top-4 lg:left-[-2.5rem]',
    delay: 0.18,
    parallax: 14,
    connector: 'M50 50 C42 44, 34 34, 24 24',
  },
  {
    icon: Landmark,
    title: 'Finance',
    description: 'Smart financial planning for lasting security',
    position: 'top-5 right-0 lg:top-4 lg:right-[-2.5rem]',
    delay: 0.32,
    parallax: 18,
    connector: 'M50 50 C58 44, 66 34, 76 24',
  },
  {
    icon: Car,
    title: 'RTO Services',
    description: 'Hassle-free vehicle registration support',
    position: 'bottom-10 left-2 lg:bottom-4 lg:left-[-1.5rem]',
    delay: 0.49,
    parallax: 16,
    connector: 'M50 50 C42 56, 32 66, 22 76',
  },
  {
    icon: PiggyBank,
    title: 'Mutual Funds',
    description: 'Grow wealth with expert fund guidance',
    position: 'bottom-10 right-2 lg:bottom-4 lg:right-[-1.5rem]',
    delay: 0.64,
    parallax: 12,
    connector: 'M50 50 C58 56, 68 66, 78 76',
  },
] as const

const particles = [
  { left: '12%', top: '18%', size: '0.45rem', delay: 0.3 },
  { left: '80%', top: '18%', size: '0.35rem', delay: 0.7 },
  { left: '18%', top: '70%', size: '0.3rem', delay: 1.1 },
  { left: '84%', top: '72%', size: '0.4rem', delay: 1.4 },
  { left: '50%', top: '8%', size: '0.28rem', delay: 0.9 },
  { left: '50%', top: '90%', size: '0.24rem', delay: 1.5 },
] as const

function GlassCard({
  icon: Icon,
  title,
  description,
  className,
  delay = 0,
  style,
  offsetX = 0,
}: {
  icon: typeof ShieldCheck
  title: string
  description: string
  className?: string
  delay?: number
  style?: CSSProperties
  offsetX?: number
  offsetY?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.96 }}
      animate={{
        opacity: 1,
        y: [0, -8, 0],
        x: [0, offsetX / 12, 0],
        rotate: [0, 0.7, -0.6, 0],
        scale: [1, 1.01, 1],
      }}
      transition={{
        delay: 0.65 + delay,
        duration: 6 + delay,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: 'mirror',
        ease: 'easeInOut',
      }}
      whileHover={{
        scale: 1.05,
        y: -10,
        rotate: 1,
        boxShadow: '0 24px 60px rgba(2, 132, 199, 0.28)',
      }}
      className={cn(
        'group relative overflow-hidden rounded-[1.4rem] border border-white/20 bg-white/[0.08] p-4 shadow-[0_18px_60px_rgba(2,6,23,0.32)] backdrop-blur-2xl transition-all duration-300',
        className,
      )}
      style={style}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.22),transparent_60%)]" />
      <div className="absolute inset-px rounded-[1.3rem] border border-white/10" />
      <div className="relative z-10">
        <div className="mb-3 inline-flex rounded-2xl border border-white/15 bg-slate-950/30 p-2.5 shadow-[0_0_25px_rgba(22,169,246,0.16)]">
          <Icon className="h-5 w-5 text-cyan-100" />
        </div>
        <h3 className="text-sm font-semibold tracking-[0.02em] text-white">{title}</h3>
        <p className="mt-1 text-xs leading-relaxed text-white/70">{description}</p>
      </div>
    </motion.div>
  )
}

function BrandCore() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, y: 24 }}
      animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
      transition={{ delay: 0.4, duration: 5.6, repeat: Number.POSITIVE_INFINITY, repeatType: 'mirror', ease: 'easeInOut' }}
      className="relative flex h-44 w-44 items-center justify-center rounded-[2.15rem] border border-white/20 bg-white/[0.08] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_30px_90px_rgba(2,6,23,0.46)] sm:h-52 sm:w-52 lg:h-60 lg:w-60"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[2rem]">
        <div className="absolute left-6 top-6 h-24 w-24 rounded-full bg-cyan-400/30 blur-3xl" />
        <div className="absolute bottom-6 right-4 h-20 w-20 rounded-full bg-brand-accent/25 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2),transparent_62%)]" />
      </div>

      {particles.map((particle) => (
        <motion.span
          key={`${particle.left}-${particle.top}`}
          className="pointer-events-none absolute rounded-full bg-white/80"
          style={{ left: particle.left, top: particle.top, width: particle.size, height: particle.size }}
          animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 2.6 + particle.delay, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
        />
      ))}

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Number.POSITIVE_INFINITY, ease: 'linear' }}
        className="pointer-events-none absolute inset-4 rounded-full border border-cyan-300/25"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 34, repeat: Number.POSITIVE_INFINITY, ease: 'linear' }}
        className="pointer-events-none absolute inset-2 rounded-full border border-brand-accent/20"
      />

      <div className="relative z-10 flex items-center justify-center rounded-[1.6rem] border border-white/15 bg-white/95 p-4 shadow-[0_16px_45px_rgba(2,6,23,0.35)]">
        <img
          src={balajiLogo}
          alt="Balaji Policy Matrix LLP logo"
          className="w-[9rem] max-w-full object-contain drop-shadow-[0_6px_16px_rgba(0,0,0,0.18)] sm:w-[10.5rem] lg:w-[11.5rem]"
          style={{ imageRendering: 'auto' }}
        />
      </div>
    </motion.div>
  )
}

export function FloatingGlassCards() {
  const parallax = useMouseParallax(1)

  return (
    <>
      <div className="relative mx-auto flex max-w-[18rem] flex-col items-center gap-4 lg:hidden">
        <BrandCore />
        <div className="grid w-full grid-cols-2 gap-3">
          {cards.map((card) => (
            <GlassCard
              key={card.title}
              icon={card.icon}
              title={card.title}
              description={card.description}
              delay={card.delay}
            />
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 hidden lg:block">
        <svg viewBox="0 0 100 100" className="h-full w-full">
          <defs>
            <linearGradient id="connectorGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4fd1ff" />
              <stop offset="100%" stopColor="#f58220" />
            </linearGradient>
          </defs>
          {cards.map((card) => (
            <motion.path
              key={`${card.title}-line`}
              d={card.connector}
              fill="none"
              stroke="url(#connectorGradient)"
              strokeWidth="0.9"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0.2 }}
              animate={{ pathLength: 1, opacity: [0.2, 0.65, 0.2] }}
              transition={{ delay: 0.25 + card.delay, duration: 1.3, repeat: Number.POSITIVE_INFINITY, repeatType: 'mirror', ease: 'easeInOut' }}
            />
          ))}
        </svg>
      </div>

      <div className="pointer-events-none absolute inset-0 hidden lg:block">
        {cards.map((card) => {
          const offsetX = parallax.x * card.parallax

          return (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: [0, -8, 0], x: [0, offsetX / 8, 0], scale: [1, 1.01, 1] }}
              transition={{ delay: 0.7 + card.delay, duration: 6 + card.delay, repeat: Number.POSITIVE_INFINITY, repeatType: 'mirror', ease: 'easeInOut' }}
              className={cn('pointer-events-auto absolute w-56 max-w-[13.5rem] sm:w-60', card.position)}
            >
              <GlassCard
                icon={card.icon}
                title={card.title}
                description={card.description}
                delay={card.delay}
                offsetX={offsetX}
                className="h-full"
              />
            </motion.div>
          )
        })}
      </div>

      <div className="pointer-events-none absolute inset-0 hidden lg:flex lg:items-center lg:justify-center">
        <BrandCore />
      </div>
    </>
  )
}
