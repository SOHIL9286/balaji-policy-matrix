import { useEffect, useState } from 'react'

type ParallaxOffset = {
  x: number
  y: number
}

export function useMouseParallax(strength = 1): ParallaxOffset {
  const [offset, setOffset] = useState<ParallaxOffset>({ x: 0, y: 0 })

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * strength
      const y = (event.clientY / window.innerHeight - 0.5) * strength
      setOffset({ x, y })
    }

    window.addEventListener('mousemove', handleMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMove)
  }, [strength])

  return offset
}
