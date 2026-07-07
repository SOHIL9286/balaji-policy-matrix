import { Outlet } from 'react-router-dom'
import { Footer, Header } from '@/components/layout'
import { cn } from '@/lib/utils'

type MainLayoutProps = {
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
    </div>
  )
}
