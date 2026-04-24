import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Calendar, ArrowRight, Clock  } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SEO } from '@/components/shared/seo'
import { cn } from '@/lib/utils'

const posts = [
  {
    title: 'How We Built a SaaS Platform That Processes 50K Daily Transactions',
    excerpt: 'A deep dive into the architecture decisions, trade-offs, and lessons learned from building a high-scale inventory management platform.',
    date: 'Apr 10, 2026',
    author: 'Architech Team',
    category: 'Engineering',
    readTime: '12 min',
    slug: 'building-high-scale-saas-platform',
    featured: true,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
  },
  {
    title: 'The Complete Guide to Building an MVP in Nigeria',
    excerpt: 'Everything you need to know about building and launching your first product in the Nigerian market.',
    date: 'Apr 5, 2026',
    author: 'Architech Team',
    category: 'Startups',
    readTime: '8 min',
    slug: 'mvp-guide-nigeria',
    featured: true,
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=400&fit=crop',
  },
  {
    title: 'Why We Chose TypeScript for All Our Projects',
    excerpt: 'The reasoning behind our TypeScript-first approach and how it improves code quality and developer experience.',
    date: 'Mar 28, 2026',
    author: 'Architech Team',
    category: 'Engineering',
    readTime: '6 min',
    slug: 'why-typescript',
    featured: false,
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop',
  },
  {
    title: 'Designing Brand Identities That Convert',
    excerpt: 'How strategic brand design can increase conversion rates and build customer trust.',
    date: 'Mar 20, 2026',
    author: 'Architech Team',
    category: 'Design',
    readTime: '5 min',
    slug: 'brand-identities-that-convert',
    featured: false,
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
  },
  {
    title: 'From Junior to Senior: A Developer\'s Growth Path',
    excerpt: 'Practical advice for Nigerian developers looking to level up their careers.',
    date: 'Mar 15, 2026',
    author: 'Architech Team',
    category: 'Career',
    readTime: '10 min',
    slug: 'developer-growth-path',
    featured: false,
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop',
  },
  {
    title: 'Scaling APIs for African Internet Conditions',
    excerpt: 'Optimization strategies for building APIs that perform well across varying internet conditions.',
    date: 'Mar 8, 2026',
    author: 'Architech Team',
    category: 'Engineering',
    readTime: '7 min',
    slug: 'scaling-apis-africa',
    featured: false,
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop',
  },
]

const categories = ['All', 'Engineering', 'Design', 'Startups', 'Career']

export function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All' 
    ? posts 
    : posts.filter(p => p.category === activeCategory)

  const featuredPosts = filtered.filter(p => p.featured)
  const regularPosts = filtered.filter(p => !p.featured)

  return (
    <>
      <SEO title="Blog" description="Engineering insights, tutorials, and business stories." />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Insights & stories
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Engineering deep-dives, startup advice, and behind-the-scenes of our projects.
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
                  {/* Featured Image */}
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
                {/* Post Thumbnail */}
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

          {/* Empty State */}
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

      {/* Newsletter CTA */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Get engineering insights in your inbox</h2>
          <p className="text-muted-foreground mb-6">Weekly deep-dives on building and scaling software.</p>
          <div className="flex gap-2 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="you@email.com" 
              className="flex-1 h-12 rounded-lg border border-border bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button>Subscribe</Button>
          </div>
        </div>
      </section>
    </>
  )
}