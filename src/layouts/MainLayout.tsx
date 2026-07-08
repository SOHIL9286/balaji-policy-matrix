import type { ReactNode } from 'react'
import React, { Suspense, lazy } from 'react'
import { Outlet } from 'react-router-dom'
import { Footer } from '@/components/layout/Footer'

const Header = lazy(() => import('@/components/layout/Header').then((m) => ({ default: m.Header })))
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
      <Suspense fallback={null}>
        <Header />
      </Suspense>
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
