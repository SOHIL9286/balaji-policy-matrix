import { motion } from 'framer-motion'
import { Car, Landmark, PiggyBank, ShieldCheck } from 'lucide-react'
import { useMouseParallax } from '@/hooks/useMouseParallax'
import { cn } from '@/lib/utils'

const cards = [
  {
    icon: ShieldCheck,
    title: 'Insurance',
    description: 'Comprehensive coverage tailored to your needs',
    position: 'top-8 -left-4 lg:-left-12',
    delay: 0.2,
    parallax: 18,
  },
  {
    icon: Landmark,
    title: 'Finance',
    description: 'Smart financial planning for lasting security',
    position: 'top-1/4 -right-2 lg:-right-8',
    delay: 0.35,
    parallax: 24,
  },
  {
    icon: Car,
    title: 'RTO Services',
    description: 'Hassle-free vehicle registration support',
    position: 'bottom-1/3 -left-2 lg:-left-6',
    delay: 0.5,
    parallax: 20,
  },
  {
    icon: PiggyBank,
    title: 'Mutual Funds',
    description: 'Grow wealth with expert fund guidance',
    position: 'bottom-8 -right-4 lg:-right-10',
    delay: 0.65,
    parallax: 16,
  },
] as const

function GlassCard({
  icon: Icon,
  title,
  description,
  className,
  delay = 0,
  style,
}: {
  icon: typeof ShieldCheck
  title: string
  description: string
  className?: string
  delay?: number
  style?: React.CSSProperties
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        delay: 0.8 + delay,
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ scale: 1.04, y: -6 }}
      className={cn('glass-panel rounded-2xl p-4', className)}
      style={style}
    >
      <div className="mb-3 inline-flex rounded-xl bg-white/10 p-2.5">
        <Icon className="h-5 w-5 text-brand-secondary" />
      </div>
      <h3 className="text-sm font-semibold text-white">{title}</h3>
      <p className="mt-1 text-xs leading-relaxed text-white/65">{description}</p>
    </motion.div>
  )
}

export function FloatingGlassCards() {
  const parallax = useMouseParallax(1)

  return (
    <>
      <div className="grid grid-cols-2 gap-3 lg:hidden">
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

      <div className="pointer-events-none absolute inset-0 hidden lg:block">
        {cards.map((card) => {
          const offsetX = parallax.x * card.parallax
          const offsetY = parallax.y * card.parallax

          return (
            <GlassCard
              key={card.title}
              icon={card.icon}
              title={card.title}
              description={card.description}
              delay={card.delay}
              className={cn(
                'pointer-events-auto absolute w-52',
                card.position,
              )}
              style={{
                transform: `translate(${offsetX}px, ${offsetY}px)`,
              }}
            />
          )
        })}
      </div>
    </>
  )
}
