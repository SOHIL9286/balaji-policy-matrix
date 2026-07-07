import { Outlet } from 'react-router-dom'
import { useLenisScroll } from '@/hooks/useLenisScroll'
import { MainLayout } from '@/layouts'

export function RootLayout() {
  useLenisScroll()

  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  )
}
