import { createBrowserRouter } from 'react-router-dom'
import { ROUTES } from '@/config/routes'
import { RootLayout } from '@/layouts'
import { HomePage } from '@/pages/HomePage'
import { AboutPage } from '@/pages/AboutPage'
import { ServicesPage } from '@/pages/ServicesPage'
import { ServiceDetailPage } from '@/pages/ServiceDetailPage'
import { ContactPage } from '@/pages/ContactPage'
import { BlogPage } from '@/pages/BlogPage'
import { FAQPage } from '@/pages/FAQPage'
import { CalculatorsPage } from '@/pages/CalculatorsPage'
import { EMICalculatorPage } from '@/pages/EMICalculatorPage'
import { PremiumCalculatorPage } from '@/pages/PremiumCalculatorPage'
import { PolicyCalculatorPage } from '@/pages/PolicyCalculatorPage'
import { ClaimTrackingPage } from '@/pages/ClaimTrackingPage'
import { DownloadCenterPage } from '@/pages/DownloadCenterPage'
import { CustomerPortalPage } from '@/pages/CustomerPortalPage'
import { RemindersPage } from '@/pages/RemindersPage'

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
      {
        path: ROUTES.services,
        element: <ServicesPage />,
      },
      {
        path: ROUTES.serviceDetail,
        element: <ServiceDetailPage />,
      },
      {
        path: ROUTES.contact,
        element: <ContactPage />,
      },
      { path: ROUTES.blog, element: <BlogPage /> },
      { path: ROUTES.faq, element: <FAQPage /> },
      { path: ROUTES.calculators, element: <CalculatorsPage /> },
      { path: ROUTES.emiCalculator, element: <EMICalculatorPage /> },
      { path: ROUTES.premiumCalculator, element: <PremiumCalculatorPage /> },
      { path: ROUTES.policyCalculator, element: <PolicyCalculatorPage /> },
      { path: ROUTES.claimTracking, element: <ClaimTrackingPage /> },
      { path: ROUTES.downloads, element: <DownloadCenterPage /> },
      { path: ROUTES.portal, element: <CustomerPortalPage /> },
      { path: ROUTES.reminders, element: <RemindersPage /> },
    ],
  },
])
