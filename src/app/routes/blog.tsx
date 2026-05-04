import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Calendar, ArrowRight, Clock, CheckCircle, FileText } from 'lucide-react'
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

const categories = ['All', 'Architecture', 'TypeScript', 'Backend', 'Business', 'Case Studies']

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

      {/* ── HERO ── */}
      <section className="relative pt-36 pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?w=1600&h=600&fit=crop"
            alt=""
            className="w-full h-full object-cover"
            loading="eager"
          />
          {/* Stronger, more editorial overlay */}
          <div className="absolute inset-0 bg-background/80 backdrop-blur-[3px]" />
          {/* Subtle bottom fade into page */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-xs font-bold tracking-widest uppercase text-primary mb-5">
            Engineering Blog
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] mb-5">
            Architecture decisions,{' '}
            <span className="text-primary">explained</span>
          </h1>
          <p className="text-base text-muted-foreground max-w-xl mx-auto leading-relaxed mb-8">
            Practical deep-dives on TypeScript, backend architecture, and SaaS engineering — written for developers and technical founders.
          </p>

          {/* Social proof pills */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {[
              { label: 'New posts weekly' },
              { label: '500+ subscribers' },
              { label: '6 min avg. read' },
            ].map(({ label }, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground bg-secondary/60 border border-border/40 backdrop-blur-sm px-3 py-1.5 rounded-full"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                {label}
              </span>
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

      {/* ── POSTS ── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* Results count */}
          {activeCategory !== 'All' && (
            <div className="flex items-center justify-between mb-8">
              <p className="text-sm text-muted-foreground">
                <span className="font-bold text-foreground">{filtered.length}</span>{' '}
                {filtered.length === 1 ? 'post' : 'posts'} in{' '}
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

          {/* Featured posts — large cards */}
          {featuredPosts.length > 0 && (
            <div className="grid md:grid-cols-2 gap-5 mb-10">
              {featuredPosts.map((post) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="group relative rounded-2xl border border-border/50 bg-background overflow-hidden hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 flex flex-col"
                >
                  {/* Image */}
                  <div className="h-52 overflow-hidden relative flex-shrink-0">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                    {/* Category over image */}
                    <span className="absolute top-3 left-3 text-[10px] font-bold tracking-widest uppercase bg-primary/90 text-primary-foreground px-2.5 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    {/* Meta */}
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {post.date}
                      </span>
                      <span className="text-border">·</span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </span>
                    </div>

                    <h2 className="text-lg font-bold tracking-tight leading-snug mb-2.5 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-5 line-clamp-2 flex-1">
                      {post.excerpt}
                    </p>

                    <span className="text-xs font-bold text-primary inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read article <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* Divider between featured + regular */}
          {featuredPosts.length > 0 && regularPosts.length > 0 && (
            <div className="flex items-center gap-4 mb-10">
              <div className="flex-1 border-t border-border/40" />
              <span className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground/40">
                More articles
              </span>
              <div className="flex-1 border-t border-border/40" />
            </div>
          )}

          {/* Regular posts — compact cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {regularPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group rounded-2xl border border-border/50 bg-background overflow-hidden hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 flex flex-col"
              >
                {/* Image */}
                <div className="h-40 overflow-hidden relative flex-shrink-0">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
                </div>

                <div className="p-5 flex flex-col flex-1">
                  {/* Category + date row */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-primary bg-primary/10 border border-primary/15 px-2.5 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="font-bold text-sm tracking-tight leading-snug mb-2 group-hover:text-primary transition-colors line-clamp-2 flex-1">
                    {post.title}
                  </h3>

                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2 mb-4">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-3.5 border-t border-border/40">
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                    <span className="text-xs font-bold text-primary inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Empty state */}
          {filtered.length === 0 && (
            <div className="text-center py-28 flex flex-col items-center gap-4">
              <div className="text-5xl">📭</div>
              <p className="font-bold text-lg tracking-tight">No posts in this category yet</p>
              <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
                We're working on it. Check back soon or browse all posts.
              </p>
              <button
                onClick={() => setActiveCategory('All')}
                className="mt-2 px-5 py-2.5 rounded-full border border-border/60 text-sm font-semibold text-foreground hover:bg-secondary transition-all"
              >
                View all posts
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── NEWSLETTER / CHECKLIST CTA ── */}
      <section className="py-20 border-t border-border/40">
        <div className="max-w-xl mx-auto px-6 text-center">

          <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-5">
            <FileText className="h-5 w-5 text-primary" />
          </div>

          <p className="text-xs font-bold tracking-widest uppercase text-primary/70 mb-3">Free resource</p>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">
            Free SaaS Architecture Checklist
          </h2>
          <p className="text-sm text-muted-foreground mb-8 leading-relaxed max-w-sm mx-auto">
            12 questions to ask before you build anything new. Used by 500+ engineering leaders.
          </p>

          {subscribed ? (
            <div className="flex items-center justify-center gap-2.5 text-emerald-500 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
              <CheckCircle className="h-4 w-4 flex-shrink-0" />
              <span className="text-sm font-semibold">Checklist sent! Check your inbox.</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex gap-2.5 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                required
                className="flex-1 h-11 rounded-full border border-border bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
              />
              <Button
                type="submit"
                disabled={!email}
                className="h-11 px-5 rounded-full text-sm font-semibold flex-shrink-0"
              >
                Get it free
              </Button>
            </form>
          )}

          <p className="text-xs text-muted-foreground/50 mt-4">
            No spam. Unsubscribe anytime.{' '}
            <a href="/privacy" className="text-primary hover:text-primary/70 transition-colors underline underline-offset-2">
              Privacy Policy
            </a>
          </p>
        </div>
      </section>
    </>
  )
}