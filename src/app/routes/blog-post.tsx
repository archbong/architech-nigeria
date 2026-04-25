import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Calendar, User, Clock, Share2 } from 'lucide-react'
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

  if (!post) {
    return (
      <section className="pt-32 pb-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Post not found</h1>
        <Link to="/blog"><Button variant="outline">Back to Blog</Button></Link>
      </section>
    )
  }

  return (
    <>
      <SEO title={post.title} />
      <article className="pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
          </Link>

          <span className="bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full">{post.category}</span>
          <h1 className="text-3xl font-bold mt-4 mb-4">{post.title}</h1>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8 pb-8 border-b border-border/50">
            <span className="flex items-center gap-1"><User className="h-4 w-4" />{post.author}</span>
            <span className="flex items-center gap-1"><Calendar className="h-4 w-4" />{post.date}</span>
            <span className="flex items-center gap-1"><Clock className="h-4 w-4" />{post.readTime}</span>
            <button className="flex items-center gap-1 hover:text-foreground"><Share2 className="h-4 w-4" />Share</button>
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-muted-foreground">{post.content}</p>
          </div>
        </div>
      </article>
    </>
  )
}