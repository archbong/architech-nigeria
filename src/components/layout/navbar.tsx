import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useScroll } from '@/hooks/use-scroll'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Academy', href: '/academy' },
  { name: 'Store', href: '/store' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
]

export function Navbar() {
  const { isScrolled } = useScroll(20)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled || !isHome
          ? 'bg-background/95 backdrop-blur-md border-b border-border/50 shadow-sm shadow-black/5'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">

          {/* ── LOGO ── */}
          {/* <Link to="/" className="flex items-center gap-2.5 flex-shrink-0 group">
            <img
              src="/archi-logo.png"
              alt="Architech Nigeria"
              className="h-8 w-auto object-contain"
            />
          </Link> */}
          <Link to="/" className="flex items-center gap-2">
              <img 
                src="/archi-logo.png" 
                alt="Architech Nigeria Logo" className="h-60 w-60 object-contain" />
          </Link>

          {/* ── DESKTOP NAV ── */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    'relative px-3.5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-150',
                    isActive
                      ? 'text-primary bg-primary/10'
                      : 'text-muted-foreground hover:text-foreground hover:bg-secondary/70'
                  )}
                >
                  {item.name}
                  {/* Active dot indicator */}
                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary" />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* ── DESKTOP CTA ── */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <Link to="/contact">
              <Button
                size="sm"
                className="group rounded-full px-5 h-9 text-xs font-semibold gap-2 shadow-sm shadow-primary/20"
              >
                Start a Project
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </Link>
          </div>

          {/* ── MOBILE TOGGLE ── */}
          <button
            className="lg:hidden w-9 h-9 rounded-full border border-border/60 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileOpen
              ? <X className="h-4 w-4" />
              : <Menu className="h-4 w-4" />
            }
          </button>
        </div>
      </div>

      {/* ── MOBILE MENU ── */}
      <div
        className={cn(
          'lg:hidden overflow-hidden transition-all duration-300 ease-in-out',
          isMobileOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="border-t border-border/50 bg-background/98 backdrop-blur-md px-6 py-5 space-y-1">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href
            return (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsMobileOpen(false)}
                className={cn(
                  'flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all duration-150',
                  isActive
                    ? 'bg-primary/10 text-primary'
                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary/70'
                )}
              >
                {item.name}
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                )}
              </Link>
            )
          })}

          <div className="pt-3 pb-1">
            <Link to="/contact" onClick={() => setIsMobileOpen(false)}>
              <Button className="w-full group rounded-xl h-11 text-sm font-semibold gap-2">
                Start a Project
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

    </header>
  )
}