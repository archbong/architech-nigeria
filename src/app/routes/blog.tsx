import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Calendar, ArrowRight, Clock, Mail, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SEO } from '@/components/shared/seo'
import { cn } from '@/lib/utils'

const posts = [
  {
    title: 'Why Your MVP Will Cost ₦5M to Rewrite Next Year (And How to Avoid It)',
    excerpt: 'Most startups build their MVP for speed, then spend millions rewriting it. Here\'s how to build it right the first time.',
    date: 'Apr 24, 2026',
    author: 'Architech Team',
    category: 'Engineering',
    readTime: '8 min',
    slug: 'mvp-rewrite-cost',
    featured: true,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
  },
  {
    title: 'TypeScript Saved Our Client ₦15M in Bugs. Here\'s the Math.',
    excerpt: 'A quantified case for type safety. How static typing prevented catastrophic production failures.',
    date: 'Apr 22, 2026',
    author: 'Architech Team',
    category: 'Engineering',
    readTime: '6 min',
    slug: 'typescript-saved-millions',
    featured: true,
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop',
  },
  {
    title: 'The SaaS Metrics That Actually Matter (And the Ones VCs Ignore)',
    excerpt: 'MRR, churn, LTV, CAC — which metrics drive decisions and which are vanity numbers.',
    date: 'Apr 20, 2026',
    author: 'Architech Team',
    category: 'Business',
    readTime: '10 min',
    slug: 'saas-metrics-that-matter',
    featured: false,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
  },
  {
    title: 'Multi-Tenant Architecture: 3 Patterns and When to Use Each',
    excerpt: 'Database-per-tenant, shared database, or hybrid — which architecture fits your SaaS?',
    date: 'Apr 18, 2026',
    author: 'Architech Team',
    category: 'Engineering',
    readTime: '12 min',
    slug: 'multi-tenant-architecture-patterns',
    featured: false,
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop',
  },
  {
    title: 'From Zero to Production: Our CI/CD Pipeline Explained',
    excerpt: 'How we go from commit to deployment in under 10 minutes with automated testing and zero-downtime releases.',
    date: 'Apr 15, 2026',
    author: 'Architech Team',
    category: 'Engineering',
    readTime: '7 min',
    slug: 'cicd-pipeline-explained',
    featured: false,
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop',
  },
  {
    title: 'Rate Limiting, Caching, and Queues — The Trifecta of Scalable APIs',
    excerpt: 'Three patterns that separate APIs that scale from those that crash at 1,000 users.',
    date: 'Apr 12, 2026',
    author: 'Architech Team',
    category: 'Engineering',
    readTime: '9 min',
    slug: 'scalable-api-patterns',
    featured: false,
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop',
  },
]

const categories = ['All', 'Engineering', 'Business', 'Startups']

export function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const filtered = activeCategory === 'All' 
    ? posts 
    : posts.filter(p => p.category === activeCategory)

  const featuredPosts = filtered.filter(p => p.featured)
  const regularPosts = filtered.filter(p => !p.featured)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 3000)
    }
  }

  return (
    <>
      <SEO title="Blog" description="Engineering insights, architecture deep-dives, and SaaS business advice." />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-medium text-primary mb-4">Engineering Insights</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Systems thinking,<br />
            <span className="text-primary">written down</span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Deep dives into architecture, TypeScript, SaaS metrics, and lessons from building production systems.
          </p>
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

      {/* Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Featured Posts */}
          {featuredPosts.length > 0 && (
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {featuredPosts.map((post) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="group relative rounded-2xl border border-border/50 bg-background overflow-hidden hover:border-primary/50 hover:shadow-xl transition-all duration-300"
                >
                  <div className="h-52 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                      <span className="bg-primary/10 text-primary px-2 py-1 rounded-full font-medium">{post.category}</span>
                      <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{post.date}</span>
                      <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{post.readTime}</span>
                    </div>
                    <h2 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">{post.title}</h2>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                    <span className="text-sm font-medium text-primary group-hover:underline inline-flex items-center">
                      Read more <ArrowRight className="ml-1 h-3 w-3" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* Regular Posts */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group rounded-xl border border-border/50 bg-background overflow-hidden hover:border-primary/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="h-44 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                    <span className="bg-primary/10 text-primary px-2 py-0.5 rounded-full">{post.category}</span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">{post.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No posts found in this category.</p>
              <button onClick={() => setActiveCategory('All')} className="text-primary hover:underline mt-2">
                View all posts
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <Mail className="h-6 w-6 text-primary" />
          </div>
          <h2 className="text-2xl font-bold mb-4">Get engineering insights in your inbox</h2>
          <p className="text-muted-foreground mb-6">
            Weekly deep-dives on architecture, TypeScript, and building scalable systems. No spam.
          </p>
          
          {subscribed ? (
            <div className="flex items-center justify-center gap-2 text-green-500 p-4 rounded-xl bg-green-500/10 border border-green-500/20">
              <CheckCircle className="h-5 w-5" />
              <span className="font-medium">You're subscribed! Check your inbox.</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex gap-2 max-w-md mx-auto">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com" 
                required
                className="flex-1 h-12 rounded-lg border border-border bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button type="submit" disabled={!email}>Subscribe</Button>
            </form>
          )}
          
          <p className="text-xs text-muted-foreground mt-4">
            Join 500+ engineering leaders. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </>
  )
}