import { Link, NavLink } from 'react-router-dom'
import { siteConfig } from '@/config/site'
import { ROUTES } from '@/config/routes'
import { cn } from '@/lib/utils'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Bell, Menu, X } from 'lucide-react'
import { useEffect, useState, useRef } from 'react'
import { SERVICE_CATEGORIES } from '@/config/services'

type HeaderProps = {
  className?: string
}

export function Header({ className }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false)
  const [openServices, setOpenServices] = useState(false)
  const [openSearch, setOpenSearch] = useState(false)
  const [openProfile, setOpenProfile] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [notifications] = useState(3)
  const searchRef = useRef<HTMLInputElement | null>(null)
  const servicesButtonRef = useRef<HTMLButtonElement | null>(null)
  const firstMenuItemRef = useRef<HTMLAnchorElement | null>(null)
  const menuRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 16)
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (openSearch) searchRef.current?.focus()
  }, [openSearch])

  useEffect(() => {
    if (openServices) {
      // focus first menu item for keyboard users
      setTimeout(() => firstMenuItemRef.current?.focus(), 50)
      const onKey = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setOpenServices(false)
      }
      document.addEventListener('keydown', onKey)
      return () => document.removeEventListener('keydown', onKey)
    }
  }, [openServices])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-shadow backdrop-blur-md',
        scrolled ? 'shadow-lg bg-background/80 border-b border-border' : 'bg-transparent',
        className,
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <button className="md:hidden p-2 rounded-md" aria-label="Open menu" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>

          <Link to={ROUTES.home} className="text-lg font-semibold tracking-tight transition-opacity hover:opacity-80">
            {siteConfig.shortName}
          </Link>
        </div>

        <nav aria-label="Primary navigation" className="hidden md:flex md:items-center md:gap-6">
          <button
            id="header-services-btn"
            ref={servicesButtonRef}
            onMouseEnter={() => setOpenServices(true)}
            onFocus={() => setOpenServices(true)}
            onClick={() => setOpenServices((open) => !open)}
            onKeyDown={(e) => {
              if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                setOpenServices(true)
              }
              if (e.key === 'Escape') setOpenServices(false)
            }}
            aria-haspopup="true"
            aria-expanded={openServices}
            className={cn('px-2 py-1 rounded-md text-sm font-medium', openServices ? 'text-brand-primary' : 'text-muted')}
          >
            Services
          </button>

          <NavLink to={ROUTES.calculators} className={({ isActive }) => cn('px-2 py-1 rounded-md', isActive ? 'text-brand-primary font-medium' : 'text-muted')}>
            Calculators
          </NavLink>

          <NavLink to={ROUTES.blog} className={({ isActive }) => cn('px-2 py-1 rounded-md', isActive ? 'text-brand-primary font-medium' : 'text-muted')}>
            Blog
          </NavLink>

          <NavLink to={ROUTES.about} className={({ isActive }) => cn('px-2 py-1 rounded-md', isActive ? 'text-brand-primary font-medium' : 'text-muted')}>
            About
          </NavLink>

          <NavLink to={ROUTES.contact} className={({ isActive }) => cn('px-2 py-1 rounded-md', isActive ? 'text-brand-primary font-medium' : 'text-muted')}>
            Contact
          </NavLink>
        </nav>

        <div className="flex items-center gap-3">
          <div className="relative">
            <button aria-label="Search" onClick={() => setOpenSearch((s) => !s)} className="p-2 rounded-md hover:bg-white/5">
              <Search size={16} />
            </button>
            <AnimatePresence>
              {openSearch && (
                <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="absolute right-0 mt-2 w-72 glass-panel p-2 rounded-md">
                  <input ref={searchRef} aria-label="Search site" placeholder="Search services, articles..." className="w-full bg-transparent border-0 outline-none px-2 py-2" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button aria-label="Notifications" className="relative p-2 rounded-md hover:bg-white/5">
            <Bell size={16} />
            {notifications > 0 && <span className="absolute -top-1 -right-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white">{notifications}</span>}
          </button>

          <div className="relative">
            <button aria-haspopup="true" onClick={() => setOpenProfile((s) => !s)} className="flex items-center gap-2 rounded-full p-1 hover:bg-white/5">
              <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center text-sm">B</div>
            </button>
            <AnimatePresence>
              {openProfile && (
                <motion.div initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} className="absolute right-0 mt-2 w-48 glass-panel p-2 rounded-md">
                  <Link to="#" className="block px-3 py-2 hover:bg-white/5 rounded">Profile</Link>
                  <Link to="#" className="block px-3 py-2 hover:bg-white/5 rounded">Settings</Link>
                  <Link to={ROUTES.contact} className="block px-3 py-2 hover:bg-white/5 rounded">Help</Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Mega menu */}
      <AnimatePresence>
        {openServices && (
          <motion.div
            onMouseLeave={() => setOpenServices(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="hidden md:block border-t border-border bg-background/90 backdrop-blur-md"
          >
            <div className="mx-auto max-w-7xl px-4 py-8">
              <div id="header-services-menu" className="grid grid-cols-3 gap-6" role="region" aria-label="Services menu" ref={menuRef} aria-labelledby="header-services-btn">
                {SERVICE_CATEGORIES.map((cat, catIndex) => (
                  <div key={cat.key}>
                    <h4 className="font-semibold mb-3">{cat.title}</h4>
                    <ul className="space-y-2 text-sm text-muted">
                      {cat.items.map((it, idx) => (
                        <li key={it.slug}>
                          <Link
                            to={`/services/${it.slug}`}
                            className="hover:underline"
                            tabIndex={catIndex === 0 && idx === 0 ? 0 : -1}
                            ref={catIndex === 0 && idx === 0 ? firstMenuItemRef : undefined}
                            onKeyDown={(e) => {
                              if (e.key === 'Escape') setOpenServices(false)
                            }}
                          >
                            {it.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ x: -300 }} animate={{ x: 0 }} exit={{ x: -300 }} className="md:hidden fixed inset-y-0 left-0 z-50 w-72 bg-background/90 glass-panel p-4">
            <nav className="space-y-3">
              <Link to={ROUTES.services} onClick={() => setMobileOpen(false)} className="block">Services</Link>
              <Link to={ROUTES.calculators} onClick={() => setMobileOpen(false)} className="block">Calculators</Link>
              <Link to={ROUTES.blog} onClick={() => setMobileOpen(false)} className="block">Blog</Link>
              <Link to={ROUTES.about} onClick={() => setMobileOpen(false)} className="block">About</Link>
              <Link to={ROUTES.contact} onClick={() => setMobileOpen(false)} className="block">Contact</Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
