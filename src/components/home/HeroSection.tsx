import { HeroBackground } from '@/components/home/HeroBackground'
import { HeroContent } from '@/components/home/HeroContent'
import { HeroNavbar } from '@/components/home/HeroNavbar'
import { FloatingGlassCards } from '@/components/home/FloatingGlassCards'
import { StatCounters } from '@/components/home/StatCounters'
import ScrollIndicator from '@/components/ui/ScrollIndicator'

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col overflow-hidden"
      aria-label="Hero"
    >
      <HeroBackground />
      <HeroNavbar />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 pb-10 pt-24 sm:px-6 sm:pt-28 lg:px-8 lg:pb-16 lg:pt-32">
        <div className="grid flex-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 xl:gap-16">
          <HeroContent />

          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className="relative mx-auto flex min-h-[320px] w-full items-center justify-center sm:min-h-[380px] lg:min-h-[520px]">
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
      <div className="absolute bottom-6 left-0 right-0 z-20 pointer-events-auto">
        <ScrollIndicator />
      </div>
    </section>
  )
}
