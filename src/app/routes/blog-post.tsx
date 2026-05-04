import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Calendar, User, Clock, Share2, BookOpen } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SEO } from '@/components/shared/seo'

const blogContent: Record<string, any> = {
  'mvp-rewrite-cost': {
    title: 'Why Your MVP Will Cost ₦5M to Rewrite Next Year (And How to Avoid It)',
    date: 'Apr 24, 2026',
    author: 'Architech Team',
    category: 'Engineering',
    readTime: '8 min',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop',
    content: 'Most startups build their MVP for speed, then spend millions rewriting it when they hit scale. This happens because the foundation was never designed to handle growth. Here\'s what to do instead...',
  },
  'typescript-saved-millions': {
    title: 'TypeScript Saved Our Client ₦15M in Bugs. Here\'s the Math.',
    date: 'Apr 22, 2026',
    author: 'Architech Team',
    category: 'Engineering',
    readTime: '6 min',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=600&fit=crop',
    content: 'A quantified case for type safety. How static typing prevented catastrophic production failures that would have cost millions...',
  },
  'saas-metrics-that-matter': {
    title: 'The SaaS Metrics That Actually Matter (And the Ones VCs Ignore)',
    date: 'Apr 20, 2026',
    author: 'Architech Team',
    category: 'Business',
    readTime: '10 min',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop',
    content: 'MRR, churn, LTV, CAC — which metrics drive decisions and which are vanity numbers...',
  },
  'multi-tenant-architecture-patterns': {
    title: 'Multi-Tenant Architecture: 3 Patterns and When to Use Each',
    date: 'Apr 18, 2026',
    author: 'Architech Team',
    category: 'Engineering',
    readTime: '12 min',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=600&fit=crop',
    content: 'Database-per-tenant, shared database, or hybrid — which architecture fits your SaaS? We break down the trade-offs...',
  },
  'cicd-pipeline-explained': {
    title: 'From Zero to Production: Our CI/CD Pipeline Explained',
    date: 'Apr 15, 2026',
    author: 'Architech Team',
    category: 'Engineering',
    readTime: '7 min',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&h=600&fit=crop',
    content: 'How we go from commit to deployment in under 10 minutes with automated testing and zero-downtime releases...',
  },
  'scalable-api-patterns': {
    title: 'Rate Limiting, Caching, and Queues — The Trifecta of Scalable APIs',
    date: 'Apr 12, 2026',
    author: 'Architech Team',
    category: 'Engineering',
    readTime: '9 min',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=600&fit=crop',
    content: 'Three patterns that separate APIs that scale from those that crash at 1,000 users...',
  },
}

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>()
  const post = slug ? blogContent[slug] : null

  // ── 404 ──
  if (!post) {
    return (
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 gap-5">
        <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mb-2">
          <BookOpen className="h-7 w-7 text-muted-foreground" />
        </div>
        <h1 className="text-2xl font-bold tracking-tight">Post not found</h1>
        <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
          This article may have been moved or doesn't exist. Head back to the blog.
        </p>
        <Link to="/blog">
          <Button variant="outline" className="rounded-full px-5 text-sm font-semibold">
            ← Back to Blog
          </Button>
        </Link>
      </section>
    )
  }

  return (
    <>
      <SEO title={post.title} />

      <article>

        {/* ── HERO IMAGE ── */}
        <div className="relative w-full h-72 sm:h-96 overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        </div>

        {/* ── ARTICLE BODY ── */}
        <div className="max-w-2xl mx-auto px-6 lg:px-8 -mt-16 relative pb-24">

          {/* Back link */}
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors mb-8 group"
          >
            <ArrowLeft className="h-3.5 w-3.5 group-hover:-translate-x-0.5 transition-transform" />
            Back to Blog
          </Link>

          {/* Category badge */}
          <div className="mb-4">
            <span className="text-[10px] font-bold tracking-widest uppercase bg-primary/10 text-primary border border-primary/20 px-3 py-1.5 rounded-full">
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight leading-[1.15] mb-6">
            {post.title}
          </h1>

          {/* Meta bar */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground mb-8 pb-8 border-b border-border/40">
            <span className="flex items-center gap-1.5 font-medium">
              <User className="h-3.5 w-3.5" />
              {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              {post.readTime} read
            </span>
            <button
              onClick={() => navigator.share?.({ title: post.title, url: window.location.href })}
              className="flex items-center gap-1.5 ml-auto hover:text-foreground transition-colors font-semibold"
            >
              <Share2 className="h-3.5 w-3.5" />
              Share
            </button>
          </div>

          {/* Content */}
          <div className="prose prose-invert max-w-none">
            <p className="text-base text-muted-foreground leading-8">
              {post.content}
            </p>
          </div>

          {/* ── POST FOOTER ── */}
          <div className="mt-16 pt-10 border-t border-border/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground/50 mb-1">
                Written by
              </p>
              <p className="text-sm font-bold">{post.author}</p>
              <p className="text-xs text-muted-foreground">Engineering & product at Architech Nigeria</p>
            </div>
            <Link to="/blog">
              <Button variant="outline" className="rounded-full text-xs font-semibold px-5 gap-2">
                <ArrowLeft className="h-3.5 w-3.5" />
                All articles
              </Button>
            </Link>
          </div>

          {/* ── CTA NUDGE ── */}
          <div className="mt-10 rounded-2xl border border-primary/20 bg-primary/5 px-7 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
            <div>
              <p className="text-sm font-bold tracking-tight mb-1">Want us to build this for you?</p>
              <p className="text-xs text-muted-foreground leading-relaxed max-w-xs">
                We turn architecture ideas into production-ready systems. Let's talk.
              </p>
            </div>
            <Link to="/contact" className="flex-shrink-0">
              <Button className="rounded-full text-xs font-semibold px-5 h-9 shadow-sm shadow-primary/20">
                Book a call →
              </Button>
            </Link>
          </div>

        </div>
      </article>
    </>
  )
}