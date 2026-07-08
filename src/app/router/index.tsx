import React, { Suspense, lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { ROUTES } from '@/config/routes'
import { RootLayout } from '@/layouts'
import { HomePage } from '@/pages/HomePage'
const AboutPage = lazy(() => import('@/pages/AboutPage').then((m) => ({ default: m.AboutPage })))
const ServicesPage = lazy(() => import('@/pages/ServicesPage').then((m) => ({ default: m.ServicesPage })))
const ServiceDetailPage = lazy(() => import('@/pages/ServiceDetailPage').then((m) => ({ default: m.ServiceDetailPage })))
const ContactPage = lazy(() => import('@/pages/ContactPage').then((m) => ({ default: m.ContactPage })))
const BlogPage = lazy(() => import('@/pages/BlogPage').then((m) => ({ default: m.BlogPage })))
const FAQPage = lazy(() => import('@/pages/FAQPage').then((m) => ({ default: m.FAQPage })))
const CalculatorsPage = lazy(() => import('@/pages/CalculatorsPage').then((m) => ({ default: m.CalculatorsPage })))
const EMICalculatorPage = lazy(() => import('@/pages/EMICalculatorPage').then((m) => ({ default: m.EMICalculatorPage })))
const PremiumCalculatorPage = lazy(() => import('@/pages/PremiumCalculatorPage').then((m) => ({ default: m.PremiumCalculatorPage })))
const PolicyCalculatorPage = lazy(() => import('@/pages/PolicyCalculatorPage').then((m) => ({ default: m.PolicyCalculatorPage })))
const ClaimTrackingPage = lazy(() => import('@/pages/ClaimTrackingPage').then((m) => ({ default: m.ClaimTrackingPage })))
const DownloadCenterPage = lazy(() => import('@/pages/DownloadCenterPage').then((m) => ({ default: m.DownloadCenterPage })))
const RemindersPage = lazy(() => import('@/pages/RemindersPage').then((m) => ({ default: m.RemindersPage })))
import { PortalLayout } from '@/layouts/PortalLayout'

const LoginPage = lazy(() => import('@/pages/portal/LoginPage').then((m) => ({ default: m.LoginPage })))
const DashboardPage = lazy(() => import('@/pages/portal/DashboardPage').then((m) => ({ default: m.DashboardPage })))
const PoliciesPage = lazy(() => import('@/pages/portal/PoliciesPage').then((m) => ({ default: m.PoliciesPage })))
const PolicyDetailPage = lazy(() => import('@/pages/portal/PolicyDetailPage').then((m) => ({ default: m.PolicyDetailPage })))
const DocumentsPage = lazy(() => import('@/pages/portal/DocumentsPage').then((m) => ({ default: m.DocumentsPage })))
const RenewalsPage = lazy(() => import('@/pages/portal/RenewalsPage').then((m) => ({ default: m.RenewalsPage })))
const ClaimsPage = lazy(() => import('@/pages/portal/ClaimsPage').then((m) => ({ default: m.ClaimsPage })))
const ProfilePage = lazy(() => import('@/pages/portal/ProfilePage').then((m) => ({ default: m.ProfilePage })))
const NotificationsPage = lazy(() => import('@/pages/portal/NotificationsPage').then((m) => ({ default: m.NotificationsPage })))
const SettingsPage = lazy(() => import('@/pages/portal/SettingsPage').then((m) => ({ default: m.SettingsPage })))

export const router = createBrowserRouter([
  {
    path: ROUTES.home,
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: ROUTES.about, element: <AboutPage /> },
      { path: ROUTES.services, element: <ServicesPage /> },
      { path: ROUTES.serviceDetail, element: <ServiceDetailPage /> },
      { path: ROUTES.contact, element: <ContactPage /> },
      { path: ROUTES.blog, element: <BlogPage /> },
      { path: ROUTES.faq, element: <FAQPage /> },
      { path: ROUTES.calculators, element: <CalculatorsPage /> },
      { path: ROUTES.emiCalculator, element: <EMICalculatorPage /> },
      { path: ROUTES.premiumCalculator, element: <PremiumCalculatorPage /> },
      { path: ROUTES.policyCalculator, element: <PolicyCalculatorPage /> },
      { path: ROUTES.claimTracking, element: <ClaimTrackingPage /> },
      { path: ROUTES.downloads, element: <DownloadCenterPage /> },
      { path: ROUTES.reminders, element: <RemindersPage /> },
    ],
  },

  // Portal routes (lazy loaded)
  {
    path: ROUTES.portalLogin,
    element: (
      <Suspense fallback={null}>
        <LoginPage />
      </Suspense>
    ),
  },
  {
    path: ROUTES.portal,
    element: (
      <Suspense fallback={null}>
        <PortalLayout />
      </Suspense>
    ),
  },
  {
    path: ROUTES.portalDashboard,
    element: (
      <Suspense fallback={null}>
        <DashboardPage />
      </Suspense>
    ),
  },
  { path: ROUTES.portalPolicies, element: (
      <Suspense fallback={null}><PoliciesPage /></Suspense>
    ) },
  { path: ROUTES.portalPolicyDetail, element: (
      <Suspense fallback={null}><PolicyDetailPage /></Suspense>
    ) },
  { path: ROUTES.portalDocuments, element: (
      <Suspense fallback={null}><DocumentsPage /></Suspense>
    ) },
  { path: ROUTES.portalRenewals, element: (
      <Suspense fallback={null}><RenewalsPage /></Suspense>
    ) },
  { path: ROUTES.portalClaims, element: (
      <Suspense fallback={null}><ClaimsPage /></Suspense>
    ) },
  { path: ROUTES.portalProfile, element: (
      <Suspense fallback={null}><ProfilePage /></Suspense>
    ) },
  { path: ROUTES.portalNotifications, element: (
      <Suspense fallback={null}><NotificationsPage /></Suspense>
    ) },
  { path: ROUTES.portalSettings, element: (
      <Suspense fallback={null}><SettingsPage /></Suspense>
    ) },
])
