import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import { registerGsapPlugins, ScrollTrigger } from '@/lib/gsap'

type UseLenisScrollOptions = {
  enabled?: boolean
}

export function useLenisScroll({ enabled = true }: UseLenisScrollOptions = {}) {
  const frameRef = useRef<number>(0)

  useEffect(() => {
    if (!enabled) return

    registerGsapPlugins()

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)),
      smoothWheel: true,
    })

    lenis.on('scroll', ScrollTrigger.update)

    const raf = (time: number) => {
      lenis.raf(time)
      frameRef.current = requestAnimationFrame(raf)
    }

    frameRef.current = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(frameRef.current)
      lenis.destroy()
    }
  }, [enabled])
}
