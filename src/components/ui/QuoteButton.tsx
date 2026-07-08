import { Link } from 'react-router-dom'
import { ROUTES } from '@/config/routes'

export default function QuoteButton() {
  return (
    <Link to={ROUTES.contact} className="fixed right-6 bottom-6 z-50 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary px-4 py-3 text-white shadow-2xl">
      <span className="text-sm font-semibold">Get Free Quote</span>
    </Link>
  )
}
