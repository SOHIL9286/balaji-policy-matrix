import { siteConfig } from '@/config/site'
import { motion } from 'framer-motion'

export default function CallButton() {
  const phone = siteConfig.contact.phone
  const tel = `tel:${phone.replace(/\D/g, '')}`

  return (
    <motion.a href={tel} whileHover={{ y: -6, boxShadow: '0 30px 60px rgba(13,71,161,0.14)' }} whileTap={{ scale: 0.98 }} className="fixed right-6 bottom-20 z-50 inline-flex items-center gap-3 rounded-full px-4 py-3 text-white shadow-2xl btn-3d">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.08 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72c.12 1.06.37 2.09.73 3.06a2 2 0 0 1-.45 2.11L8.91 10.91a16 16 0 0 0 6 6l1-1a2 2 0 0 1 2.11-.45c.97.36 2 .61 3.06.73A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      <span className="text-sm font-medium">Call</span>
    </motion.a>
  )
}
