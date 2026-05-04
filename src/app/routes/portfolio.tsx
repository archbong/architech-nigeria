import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SEO } from '@/components/shared/seo'
import { cn } from '@/lib/utils'

const categories = ['All', 'SaaS', 'FinTech', 'EdTech', 'E-commerce', 'Enterprise', 'Religion']

const projects = [
  {
    title: 'SaaS Platform',
    client: 'EucalyspInsight',
    category: 'SaaS',
    industry: 'Retail',
    description: 'Complete inventory management SaaS with POS, analytics, multi-warehouse support, and distribution system.',
    ourRole: 'Full Architecture & Development',
    challenge: 'Managing inventory across 50+ retail locations with spreadsheets was causing stockouts and overstocking.',
    solution: 'Built a centralized SaaS platform with real-time tracking, automated reorder points, and multi-location support.',
    results: [
      'Stockouts reduced significantly within 3 months',
      'Inventory counting went from days to hours',
      'Sales improved due to better stock availability',
    ],
    tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'AWS'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
    featured: true,
  },
  {
    title: 'EdTech Learning Platform',
    client: 'Architech Africa',
    category: 'EdTech',
    industry: 'Education',
    description: 'Online self-pace learning platform with courses, interactive assessments, progress tracking, and certificates.',
    ourRole: 'Full Architecture & Development',
    challenge: 'Traditional classroom training couldn\'t scale across multiple African countries with varying internet quality.',
    solution: 'Scalable e-learning platform with offline support, mobile-first design, and progressive web app capabilities.',
    results: [
      '10,000+ students enrolled across 12 countries',
      'High course completion rate due to offline access',
      'Platform handles peak loads during enrollment periods',
    ],
    tags: ['React.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Vercel'],
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=500&fit=crop',
    featured: true,
  },
  {
    title: 'FinTech Analytics Dashboard',
    client: 'PayFlow Solutions',
    category: 'FinTech',
    industry: 'Financial Services',
    description: 'Real-time financial analytics dashboard with data visualization, reporting, and predictive insights.',
    ourRole: 'Full Architecture & Development',
    challenge: 'Manual reporting was taking 3+ days to generate monthly financial summaries for stakeholders.',
    solution: 'Automated data pipeline with real-time dashboards, reducing reporting time to seconds.',
    results: ['99% reduction in reporting time', 'Real-time transaction monitoring', '50+ KPIs tracked'],
    tags: ['React', 'D3.js', 'Typescript', 'Nodejs', 'GCP'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
    featured: true,
  },
  {
    title: 'E-commerce Retail Store',
    client: 'Archilux',
    category: 'E-commerce',
    industry: 'Retail',
    description: 'Complete brand redesign including logo, packaging, website, and social media presence.',
    challenge: 'Outdated brand identity was losing market share to newer, more modern competitors.',
    solution: 'Created a fresh, modern brand identity that resonates with Gen Z and millennial audiences.',
    results: ['300% increase in social engagement', '45% boost in online sales', 'Featured in 5 design blogs'],
    tags: ['Figma', 'Illustrator', 'Webflow', 'Brand Strategy'],
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop',
    featured: false,
  },
  {
    title: 'Enterprise API Gateway',
    client: 'DataCore Systems',
    category: 'Enterprise',
    industry: 'Technology',
    description: 'High-performance API gateway handling 10M+ requests daily with rate limiting and monitoring.',
    challenge: 'Legacy monolithic architecture couldn\'t handle growing API traffic from mobile apps.',
    solution: 'Migrated to microservices with a centralized API gateway, load balancing, and caching.',
    results: ['10x improvement in response time', '99.99% uptime achieved', '40% reduction in server costs'],
    tags: ['Go', 'Redis', 'Kubernetes', 'Terraform', 'AWS'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop',
    featured: false,
  },
  {
    title: 'St Paul\'s Anglican',
    client: 'Anglican Church k-dere, Gokana',
    category: 'Religion',
    industry: 'Religion',
    description: 'St Paul\'s Anglican church connecting people with the teaching of the scriptures, drawing them closer to God.',
    challenge: 'Limited healthcare access in rural areas with no nearby hospitals or specialists.',
    solution: 'Built a HIPAA-compliant telemedicine app with video calls, e-prescriptions, and appointment scheduling.',
    results: ['50,000+ consultations', 'Available in 200+ rural communities', '95% patient satisfaction'],
    tags: ['React', 'Node.js', 'Firebase', 'Prisma', 'AWS'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop',
    featured: false,
  },
]

export function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory)

  const featuredProjects = filtered.filter(p => p.featured)
  const regularProjects = filtered.filter(p => !p.featured)

  return (
    <>
      <SEO title="Portfolio" description="Selected projects and case studies from our work." />

      {/* ── HERO ── */}
      <section className="relative pt-36 pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&h=600&fit=crop"
            alt=""
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-background/80 backdrop-blur-[3px]" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-xs font-bold tracking-widest uppercase text-primary mb-5">
            Case Studies
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] mb-5">
            Systems we've{' '}
            <span className="text-primary">shipped</span>
          </h1>
          <p className="text-base text-muted-foreground max-w-xl mx-auto leading-relaxed mb-8">
            From network infrastructure to software platforms — here's what happens when engineering meets business problems.
          </p>

          {/* Stats pills */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {[
              { value: '3+', label: 'Clients' },
              { value: '8+', label: 'Projects' },
              { value: '6+', label: 'Industries' },
            ].map(({ value, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground bg-secondary/60 border border-border/40 backdrop-blur-sm px-4 py-2 rounded-full"
              >
                <span className="text-foreground font-bold">{value}</span>
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

      {/* ── PROJECTS ── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* Results count when filtered */}
          {activeCategory !== 'All' && (
            <div className="flex items-center justify-between mb-8">
              <p className="text-sm text-muted-foreground">
                <span className="font-bold text-foreground">{filtered.length}</span>{' '}
                {filtered.length === 1 ? 'project' : 'projects'} in{' '}
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

          {/* Featured — large 2-col cards */}
          {featuredProjects.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
              {featuredProjects.map((project) => {
                const slug = project.title.toLowerCase().replace(/\s+/g, '-')
                return (
                  <Link
                    key={project.title}
                    to={`/portfolio/${slug}`}
                    className="group relative bg-background rounded-2xl border border-border/50 overflow-hidden hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1 flex flex-col"
                  >
                    {/* Image */}
                    <div className="h-48 overflow-hidden relative flex-shrink-0">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                      {/* Badges over image */}
                      <div className="absolute top-3 left-3 flex items-center gap-2">
                        <span className="text-[10px] font-bold tracking-widest uppercase bg-primary/90 text-primary-foreground px-2.5 py-1 rounded-full">
                          {project.category}
                        </span>
                        {project.featured && (
                          <span className="text-[10px] font-bold tracking-widest uppercase bg-background/80 backdrop-blur-sm text-foreground border border-border/50 px-2.5 py-1 rounded-full">
                            Featured
                          </span>
                        )}
                      </div>
                      {/* Arrow icon */}
                      <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-background/80 backdrop-blur-sm border border-border/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowUpRight className="h-3.5 w-3.5 text-foreground" />
                      </div>
                    </div>

                    <div className="p-5 flex flex-col flex-1">
                      <p className="text-xs font-semibold text-primary mb-1">{project.client}</p>
                      <h3 className="font-bold text-base tracking-tight leading-snug mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed mb-4 line-clamp-2 flex-1">
                        {project.description}
                      </p>

                      {/* Results */}
                      <div className="space-y-1.5 mb-4">
                        {project.results.slice(0, 2).map((result) => (
                          <div key={result} className="flex items-start gap-1.5 text-xs text-emerald-500 font-medium">
                            <span className="flex-shrink-0 mt-px">↗</span>
                            <span>{result}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border/40">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded-full bg-secondary border border-border/40 text-[10px] font-semibold text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 3 && (
                          <span className="px-2 py-0.5 rounded-full bg-secondary border border-border/40 text-[10px] font-semibold text-muted-foreground">
                            +{project.tags.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          )}

          {/* Divider */}
          {featuredProjects.length > 0 && regularProjects.length > 0 && (
            <div className="flex items-center gap-4 mb-8 mt-4">
              <div className="flex-1 border-t border-border/40" />
              <span className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground/40">
                More work
              </span>
              <div className="flex-1 border-t border-border/40" />
            </div>
          )}

          {/* Regular projects */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {regularProjects.map((project) => {
              const slug = project.title.toLowerCase().replace(/\s+/g, '-')
              return (
                <Link
                  key={project.title}
                  to={`/portfolio/${slug}`}
                  className="group relative bg-background rounded-2xl border border-border/50 overflow-hidden hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1 flex flex-col"
                >
                  {/* Image */}
                  <div className="h-40 overflow-hidden relative flex-shrink-0">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] font-bold tracking-widest uppercase bg-primary/90 text-primary-foreground px-2.5 py-1 rounded-full">
                        {project.category}
                      </span>
                    </div>
                    <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-background/80 backdrop-blur-sm border border-border/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowUpRight className="h-3.5 w-3.5 text-foreground" />
                    </div>
                  </div>

                  <div className="p-5 flex flex-col flex-1">
                    <p className="text-xs font-semibold text-primary mb-1">{project.client}</p>
                    <h3 className="font-bold text-sm tracking-tight leading-snug mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2 mb-4 flex-1">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border/40">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-full bg-secondary border border-border/40 text-[10px] font-semibold text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="px-2 py-0.5 rounded-full bg-secondary border border-border/40 text-[10px] font-semibold text-muted-foreground">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>

          {/* Empty state */}
          {filtered.length === 0 && (
            <div className="text-center py-28 flex flex-col items-center gap-4">
              <div className="text-5xl">🗂️</div>
              <p className="font-bold text-lg tracking-tight">No projects in this category</p>
              <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
                We may be working on one. In the meantime, browse all our work.
              </p>
              <button
                onClick={() => setActiveCategory('All')}
                className="mt-2 px-5 py-2.5 rounded-full border border-border/60 text-sm font-semibold text-foreground hover:bg-secondary transition-all"
              >
                View all projects
              </button>
            </div>
          )}

        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 border-t border-border/40">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="text-xs font-bold tracking-widest uppercase text-primary/70 mb-4">
            Start a project
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 leading-tight">
            Want to be our next case study?
          </h2>
          <p className="text-muted-foreground text-sm mb-10 leading-relaxed max-w-sm mx-auto">
            Let's build something remarkable together. We take on a small number of projects at a time to ensure quality.
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              className="group rounded-full px-8 text-sm font-semibold h-12 shadow-lg shadow-primary/20 gap-2"
            >
              Start Your Project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  )
}