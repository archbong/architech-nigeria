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
}

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
            <img src="/transparent-logo.png" alt="Architech Nigeria" className="h-8 w-auto object-contain" />
            <span className="text-lg font-bold text-chrome">Architech<span className="text-foreground">Nigeria</span></span>
          </Link>
                      <p className="text-sm text-muted-foreground mb-4">
              Building digital infrastructure for ambitious businesses.
            </p>
          </div>

          {/* Links */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Architech Nigeria. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with ❤️ in Nigeria
          </p>
        </div>
      </div>
    </footer>
  )
}