import { useEffect, useRef } from 'react'
import { gsap } from '@/lib/gsap'
import { useMouseParallax } from '@/hooks/useMouseParallax'

export function HeroBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const parallax = useMouseParallax(30)

  useEffect(() => {
    if (!containerRef.current) return

    const orbs = containerRef.current.querySelectorAll('.hero-orb')

    const ctx = gsap.context(() => {
      orbs.forEach((orb, index) => {
        gsap.to(orb, {
          x: 'random(-40, 40)',
          y: 'random(-30, 30)',
          duration: 'random(6, 10)',
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: index * 0.4,
        })
      })

      gsap.to('.hero-grid', {
        backgroundPosition: '200% 200%',
        duration: 20,
        repeat: -1,
        ease: 'none',
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      <div className="hero-gradient-bg absolute inset-0" />

      <div
        className="hero-grid absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div
        className="hero-orb absolute -left-20 top-1/4 h-72 w-72 rounded-full bg-brand-secondary/30 blur-3xl"
        style={{
          transform: `translate(${parallax.x * -0.5}px, ${parallax.y * -0.5}px)`,
        }}
      />
      <div
        className="hero-orb absolute right-0 top-10 h-96 w-96 rounded-full bg-brand-accent/25 blur-3xl"
        style={{
          transform: `translate(${parallax.x * 0.4}px, ${parallax.y * 0.3}px)`,
        }}
      />
      <div
        className="hero-orb absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-brand-primary/40 blur-3xl"
        style={{
          transform: `translate(${parallax.x * 0.2}px, ${parallax.y * 0.6}px)`,
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30" />
    </div>
  )
}
