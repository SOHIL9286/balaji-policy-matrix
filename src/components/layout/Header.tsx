import { Link } from 'react-router-dom'
import { siteConfig } from '@/config/site'
import { ROUTES } from '@/config/routes'
import { cn } from '@/lib/utils'

type HeaderProps = {
  className?: string
}

export function Header({ className }: HeaderProps) {
  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md',
        className,
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          to={ROUTES.home}
          className="text-lg font-semibold tracking-tight transition-opacity hover:opacity-80"
        >
          {siteConfig.name}
        </Link>

        <nav aria-label="Primary navigation">
          <ul className="flex items-center gap-6 text-sm text-muted">
            <li>
              <Link to={ROUTES.about} className="hover:opacity-90">About</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
