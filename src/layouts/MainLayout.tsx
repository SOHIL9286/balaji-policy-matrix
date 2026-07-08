import type { ReactNode } from 'react'
import { Outlet } from 'react-router-dom'
import { Footer, Header } from '@/components/layout'
import WhatsAppButton from '@/components/ui/WhatsAppButton'
import CallButton from '@/components/ui/CallButton'
import QuoteButton from '@/components/ui/QuoteButton'
import { cn } from '@/lib/utils'

type MainLayoutProps = {
  children?: ReactNode
  className?: string
}

export function MainLayout({ className }: MainLayoutProps) {
  return (
    <div className={cn('flex min-h-screen flex-col', className)}>
      <Header />
      <main id="main-content" className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
      <CallButton />
      <QuoteButton />
    </div>
  )
}
