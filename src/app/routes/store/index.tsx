import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, RotateCcw, Truck, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SEO } from '@/components/shared/seo'
import { cn } from '@/lib/utils'

const products = [
  {
    id: '1',
    name: 'Build Stuff Tee',
    price: 15000,
    description: 'Premium cotton t-shirt for builders. Comfortable, durable, and makes a statement.',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
    category: 'T-Shirts',
    badge: 'Best Seller',
    inStock: true,
    color: 'from-purple-500 to-purple-600',
  },
  {
    id: '2',
    name: 'Code. Sleep. Repeat. Hoodie',
    price: 25000,
    description: 'Warm, comfortable hoodie for late-night coding sessions.',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop',
    category: 'Hoodies',
    inStock: true,
    color: 'from-purple-500 to-purple-600',
  },
  {
    id: '3',
    name: 'Architech Sticker Pack',
    price: 3000,
    description: 'Set of 5 premium vinyl stickers. For your laptop, water bottle, or anywhere.',
    image: 'https://images.unsplash.com/photo-1572375992501-4b0892d50c0?w=400&h=400&fit=crop',
    category: 'Accessories',
    badge: 'New',
    inStock: true,
    color: 'from-purple-500 to-purple-600',
  },
  {
    id: '4',
    name: 'Developer Cap',
    price: 8000,
    description: 'Classic snapback cap with embroidered Architech logo.',
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e36b?w=400&h=400&fit=crop',
    category: 'Accessories',
    inStock: false,
    color: 'from-purple-500 to-purple-600',
  },
  {
    id: '5',
    name: 'SaaS Builder Mug',
    price: 7000,
    description: 'Ceramic mug for your coffee while you build the next unicorn.',
    image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&h=400&fit=crop',
    category: 'Accessories',
    inStock: true,
    color: 'from-purple-500 to-purple-600',
  },
  {
    id: '6',
    name: 'Tech Crewneck',
    price: 20000,
    description: 'Minimalist crewneck sweater for the modern developer.',
    image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&h=400&fit=crop',
    category: 'Sweaters',
    badge: 'Limited',
    inStock: false,
    color: 'from-purple-500 to-purple-600',
  },
]

const categories = ['All', 'T-Shirts', 'Hoodies', 'Accessories', 'Sweaters']

const badgeStyles: Record<string, string> = {
  'Best Seller': 'bg-amber-500 text-white',
  'New':         'bg-emerald-500 text-white',
  'Limited':     'bg-rose-500 text-white',
}

const perks = [
  { icon: Truck,       label: 'Free shipping', sub: 'On orders over ₦50,000' },
  { icon: RotateCcw,   label: '7-day returns', sub: 'No questions asked' },
  { icon: ShieldCheck, label: 'Quality guaranteed', sub: 'Built to last' },
]

export function StorePage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? products
    : products.filter(p => p.category === activeCategory)

  return (
    <>
      <SEO title="Store" description="Premium tech apparel and accessories for builders." />

      {/* ── HERO ── */}
      <section className="relative pt-36 pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1600&h=600&fit=crop"
            alt=""
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-background/82 backdrop-blur-[3px]" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-xs font-bold tracking-widest uppercase text-primary mb-5">
            Architech Store
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] mb-5">
            Built for{' '}
            <span className="text-primary">builders</span>
          </h1>
          <p className="text-base text-muted-foreground max-w-lg mx-auto leading-relaxed mb-10">
            Premium tech apparel designed for people who ship code. Comfortable enough for all-night deploys,
            sharp enough for client meetings.
          </p>

          {/* Perk pills */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {perks.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground bg-secondary/60 border border-border/40 backdrop-blur-sm px-4 py-2 rounded-full"
              >
                <Icon className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── PERKS BAR ── */}
      <section className="border-b border-border/50 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border/40">
            {perks.map(({ icon: Icon, label, sub }) => (
              <div key={label} className="flex items-center gap-3 px-6 py-4">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-bold">{label}</p>
                  <p className="text-[10px] text-muted-foreground">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CATEGORY FILTER ── */}
      <section className="sticky top-0 z-30 py-4 border-b border-border/50 bg-background/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  'px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all duration-150',
                  activeCategory === cat
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary border border-transparent hover:border-border/50'
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCT GRID ── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* Results count */}
          {activeCategory !== 'All' && (
            <div className="flex items-center justify-between mb-8">
              <p className="text-sm text-muted-foreground">
                <span className="font-bold text-foreground">{filtered.length}</span>{' '}
                {filtered.length === 1 ? 'item' : 'items'} in{' '}
                <span className="text-primary font-semibold">{activeCategory}</span>
              </p>
              <button
                onClick={() => setActiveCategory('All')}
                className="text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors"
              >
                Clear ×
              </button>
            </div>
          )}

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((product) => (
              <Link
                key={product.id}
                to={`/store/${product.id}`}
                className="group relative bg-background rounded-2xl border border-border/50 overflow-hidden hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                {/* Image */}
                <div className="relative aspect-square overflow-hidden bg-secondary/30 flex-shrink-0">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />

                  {/* Badge */}
                  {product.badge && (
                    <span className={cn(
                      'absolute top-3 left-3 text-[10px] font-bold tracking-wide uppercase px-2.5 py-1 rounded-full',
                      badgeStyles[product.badge] ?? 'bg-primary text-primary-foreground'
                    )}>
                      {product.badge}
                    </span>
                  )}

                  {/* Out of stock overlay */}
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-background/60 backdrop-blur-[1px] flex items-center justify-center">
                      <span className="text-xs font-bold tracking-widest uppercase bg-background border border-border/60 text-muted-foreground px-3 py-1.5 rounded-full">
                        Out of stock
                      </span>
                    </div>
                  )}
                </div>

                {/* Body */}
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <p className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground/50 mb-1">
                        {product.category}
                      </p>
                      <h3 className="font-bold text-sm tracking-tight leading-snug group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                    </div>
                    {product.inStock ? (
                      <span className="flex-shrink-0 text-[10px] font-bold text-emerald-500 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full mt-1">
                        In stock
                      </span>
                    ) : null}
                  </div>

                  <p className="text-xs text-muted-foreground leading-relaxed mb-4 line-clamp-2 flex-1">
                    {product.description}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-border/40 mt-auto">
                    <p className="text-lg font-bold text-primary">
                      ₦{product.price.toLocaleString()}
                    </p>
                    <span className="text-xs font-bold text-primary inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                      View <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Empty state */}
          {filtered.length === 0 && (
            <div className="text-center py-28 flex flex-col items-center gap-4">
              <div className="text-5xl">🛍️</div>
              <p className="font-bold text-lg tracking-tight">Nothing here yet</p>
              <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
                We don't have anything in this category right now. Browse all products instead.
              </p>
              <button
                onClick={() => setActiveCategory('All')}
                className="mt-2 px-5 py-2.5 rounded-full border border-border/60 text-sm font-semibold text-foreground hover:bg-secondary transition-all"
              >
                View all products
              </button>
            </div>
          )}

          {/* View all CTA */}
          {filtered.length > 0 && (
            <div className="text-center mt-14">
              <Link to={`${import.meta.env.VITE_STORE_URL}`}>
                <Button
                  size="lg"
                  variant="outline"
                  className="group rounded-full px-8 h-12 text-sm font-semibold gap-2 border-border/60 hover:border-primary/40"
                >
                  View All Products
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          )}

        </div>
      </section>
    </>
  )
}