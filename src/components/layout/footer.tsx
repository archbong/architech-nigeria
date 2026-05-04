import { Link } from 'react-router-dom'

const footerLinks = {
  services: {
    title: 'Services',
    links: [
      { name: 'Web Development', href: '/services' },
      { name: 'Product Design', href: '/services' },
      { name: 'Consulting', href: '/services' },
    ],
  },
  company: {
    title: 'Company',
    links: [
      { name: 'About', href: '/about' },
      { name: 'Portfolio', href: '/portfolio' },
      { name: 'Blog', href: '/blog' },
      { name: 'Contact', href: '/contact' },
    ],
  },
  learn: {
    title: 'Learn',
    links: [
      { name: 'Academy', href: '/academy' },
      { name: 'Resources', href: '/blog' },
      { name: 'Case Studies', href: '/portfolio' },
    ],
  },
  shop: {
    title: 'Shop',
    links: [
      { name: 'Store', href: '/store' },
      { name: 'Merch', href: '/store' },
      { name: 'Cart', href: '/store/cart' },
    ],
  },
  legal: {
    title: 'Legal',
    links: [
      { name: 'Privacy', href: '/privacy' },
      { name: 'Terms', href: '/terms' },
      { name: 'Cookies', href: '/cookies' },
    ],
  },
}

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* ── TOP STRIP ── */}
        <div className="py-12 border-b border-border/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          {/* Brand */}
          <Link to="/" className="flex items-center gap-2.5 group flex-shrink-0">
            <img
              src="/transparent-logo.png"
              alt="Architech Nigeria"
              className="h-7 w-auto object-contain"
            />
            <span className="text-base font-bold tracking-tight text-chrome">
              Architech<span className="text-foreground">Nigeria</span>
            </span>
          </Link>

          {/* Tagline */}
          <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
            Building digital infrastructure for ambitious businesses across Africa and beyond.
          </p>

          {/* CTA */}
          <Link
            to="/contact"
            className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border/60 text-sm font-semibold text-foreground hover:bg-foreground/5 hover:border-foreground/30 transition-all duration-200"
          >
            Work with us →
          </Link>
        </div>

        {/* ── LINK COLUMNS ── */}
        <div className="py-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-8 gap-y-10">
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <p className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground/50 mb-4">
                {section.title}
              </p>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-150 font-medium"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── BOTTOM BAR ── */}
        <div className="py-6 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground/60">
            © {new Date().getFullYear()} Architech Nigeria. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/60 flex items-center gap-1">
            Built with <span className="text-rose-400">♥</span> in Nigeria
          </p>
        </div>
      </div>
    </footer>
  )
}