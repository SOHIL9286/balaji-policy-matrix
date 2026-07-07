import { siteConfig } from '@/config/site'

export default function WhatsAppButton() {
  const phone = siteConfig.contact.phone.replace(/\D/g, '')
  const href = `https://wa.me/${phone}`

  return (
    <a target="_blank" rel="noreferrer" href={href} className="fixed right-6 bottom-6 z-50 inline-flex items-center gap-2 rounded-full bg-green-600 px-4 py-3 text-white shadow-lg">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 11.5C21 6.8 16.97 3 12 3S3 6.8 3 11.5c0 2 .8 3.8 2.1 5.1L5 21l4.6-1.2C11.3 20 11.7 20 12 20c4.97 0 9-3.8 9-8.5z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      <span className="text-sm font-medium">WhatsApp</span>
    </a>
  )
}
