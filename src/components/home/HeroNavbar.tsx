import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import balajiLogo from '@/assets/balaji-logo.svg'
import { siteConfig } from '@/config/site'
import { ROUTES } from '@/config/routes'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Home', href: ROUTES.home },
  { label: 'Quote', href: '#quote' },
  { label: 'Contact', href: '#contact' },
] as const

export function HeroNavbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled ? 'py-2' : 'py-4',
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav
          className={cn(
            'glass-nav flex items-center justify-between rounded-[1.35rem] border border-white/15 px-4 py-3.5 sm:px-6',
            scrolled && 'border-cyan-300/20 bg-slate-950/40 shadow-[0_20px_70px_rgba(2,6,23,0.28)]',
          )}
          aria-label="Primary navigation"
        >
          <Link
            to={ROUTES.home}
            className="flex items-center gap-3 transition-opacity hover:opacity-90"
          >
            <img
              src={balajiLogo}
              alt={siteConfig.shortName}
              className="h-9 w-auto sm:h-10"
            />
            <div className="hidden min-w-0 sm:block">
              <p className="truncate text-sm font-semibold tracking-[0.2em] text-white sm:text-[0.95rem]">
                {siteConfig.name}
              </p>
              <p className="truncate text-[10px] font-medium uppercase tracking-[0.24em] text-brand-accent sm:text-xs">
                {siteConfig.tagline}
              </p>
            </div>
          </Link>

          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-white/75 transition-all duration-300 hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#quote"
            className="hidden rounded-full bg-brand-accent px-5 py-2.5 text-sm font-semibold text-white shadow-[0_16px_45px_rgba(245,130,32,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.03] md:inline-flex"
          >
            Get Free Quote
          </a>

          <button
            type="button"
            className="inline-flex rounded-xl border border-white/15 bg-white/10 p-2 text-white transition-colors hover:bg-white/15 md:hidden"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-nav mt-3 rounded-[1.25rem] border border-white/15 p-4 md:hidden"
          >
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="block py-2 text-sm font-medium text-white/90"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#quote"
              className="mt-4 flex w-full justify-center rounded-full bg-brand-accent px-5 py-2.5 text-sm font-semibold text-white shadow-[0_16px_45px_rgba(245,130,32,0.25)]"
              onClick={() => setMobileOpen(false)}
            >
              Get Free Quote
            </a>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}
