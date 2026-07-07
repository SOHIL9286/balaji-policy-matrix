import { createBrowserRouter } from 'react-router-dom'
import { ROUTES } from '@/config/routes'
import { RootLayout } from '@/layouts'
import { HomePage } from '@/pages/HomePage'
import { AboutPage } from '@/pages/AboutPage'

export const router = createBrowserRouter([
  {
    path: ROUTES.home,
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: ROUTES.about,
        element: <AboutPage />,
      },
    ],
  },
])
