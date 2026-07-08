import { siteConfig } from '@/config/site'

export default function CallButton() {
  const phone = siteConfig.contact.phone
  const tel = `tel:${phone}`

  return (
    <a href={tel} className="fixed right-6 bottom-20 z-50 inline-flex items-center gap-3 rounded-full bg-blue-600 px-4 py-3 text-white shadow-lg">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.08 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72c.12 1.06.37 2.09.73 3.06a2 2 0 0 1-.45 2.11L8.91 10.91a16 16 0 0 0 6 6l1-1a2 2 0 0 1 2.11-.45c.97.36 2 .61 3.06.73A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      <span className="text-sm font-medium">Call</span>
    </a>
  )
}
