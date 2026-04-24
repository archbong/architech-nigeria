import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Calendar, User, Clock, Share2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SEO } from '@/components/shared/seo'

const blogContent: Record<string, { title: string; content: string; date: string; author: string; category: string; readTime: string }> = {
  'building-high-scale-saas-platform': {
    title: 'How We Built a SaaS Platform That Processes 50K Daily Transactions',
    content: 'This is a detailed case study of the architecture decisions we made...',
    date: 'Apr 10, 2026',
    author: 'Architech Team',
    category: 'Engineering',
    readTime: '12 min',
  },
  'mvp-guide-nigeria': {
    title: 'The Complete Guide to Building an MVP in Nigeria',
    content: 'Building an MVP in Nigeria comes with unique challenges...',
    date: 'Apr 5, 2026',
    author: 'Architech Team',
    category: 'Startups',
    readTime: '8 min',
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