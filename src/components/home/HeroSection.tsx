import { HeroBackground } from '@/components/home/HeroBackground'
import { HeroContent } from '@/components/home/HeroContent'
import { HeroNavbar } from '@/components/home/HeroNavbar'
import { FloatingGlassCards } from '@/components/home/FloatingGlassCards'
import { Shield3D } from '@/components/home/Shield3D'
import { StatCounters } from '@/components/home/StatCounters'

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col overflow-hidden"
      aria-label="Hero"
    >
      <HeroBackground />
      <HeroNavbar />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 pb-10 pt-28 sm:px-6 lg:px-8 lg:pb-16 lg:pt-32">
        <div className="grid flex-1 items-center gap-10 lg:grid-cols-2 lg:gap-8">
          <HeroContent />

          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className="relative mx-auto h-[280px] w-full sm:h-[340px] lg:h-[480px]">
              <div className="hidden lg:block">
                <FloatingGlassCards />
              </div>
              <Shield3D className="h-full w-full" />
            </div>
            <div className="mt-6 lg:hidden">
              <FloatingGlassCards />
            </div>
          </div>
        </div>

        <div id="services" className="mt-10 lg:mt-14">
          <StatCounters />
        </div>
      </div>

      <div
        id="contact"
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/20 to-transparent"
      />
    </section>
  )
}
