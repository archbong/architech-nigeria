import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, RotateCcw, Truck } from 'lucide-react'
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

export function StorePage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? products
    : products.filter(p => p.category === activeCategory)

  return (
    <>
      <SEO title="Store" description="Premium tech apparel and accessories for builders." />

      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1600&h=600&fit=crop"
            alt=""
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-background/70 backdrop-blur-[2px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-medium text-primary mb-4">Architech Store</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Built for builders
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Premium tech apparel designed for people who ship code. Comfortable enough for all-night deploys,
            sharp enough for client meetings.
          </p>
          <div className="mt-6 flex items-center justify-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">🚚 Free shipping over ₦50K</span>
            <span>•</span>
            <span className="flex items-center gap-1">🔄 7-day returns</span>
            <span>•</span>
            <span className="flex items-center gap-1">✅ Quality guaranteed</span>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  'px-4 py-2 rounded-lg text-sm font-medium transition-all',
                  activeCategory === cat
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((product) => (
              <Link
                key={product.id}
                to={`/store/${product.id}`}
                className="group relative bg-background rounded-2xl border border-border/50 overflow-hidden hover:border-primary/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={cn('h-2 w-full bg-gradient-to-r', product.color)} />
                <div className="p-6">
                  {/* Product Image */}
                  <div className="aspect-square rounded-xl mb-4 relative overflow-hidden bg-secondary/30">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    {product.badge && (
                      <span className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs font-bold px-3 py-1.5 rounded-full">
                        {product.badge}
                      </span>
                    )}
                  </div>

                  {/* Stock Status */}
                  <div className="mb-2">
                    {product.inStock ? (
                      <span className="text-xs text-green-500 font-medium">In Stock</span>
                    ) : (
                      <span className="text-xs text-yellow-500 font-medium">Limited Stock</span>
                    )}
                  </div>

                  <p className="text-xs text-muted-foreground mb-1">{product.category}</p>
                  <h3 className="font-bold mb-1 group-hover:text-primary transition-colors">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{product.description}</p>
                  <p className="text-lg font-bold text-primary mb-3">₦{product.price.toLocaleString()}</p>

                  {/* Trust Badges */}
                  <div className="flex items-center gap-2 text-xs text-muted-foreground pt-3 border-t border-border/50">
                    <span className="flex items-center gap-1"><Truck className="h-3 w-3" /> Free shipping over ₦50K</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><RotateCcw className="h-3 w-3" /> 7-day returns</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>


          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="group">
              View All Products
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}