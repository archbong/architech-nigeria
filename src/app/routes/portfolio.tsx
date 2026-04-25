import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SEO } from '@/components/shared/seo'
import { cn } from '@/lib/utils'

const categories = ['All', 'SaaS', 'FinTech', 'EdTech', 'E-commerce', 'Enterprise']

const projects = [
  {
    title: 'SaaS Inventory Platform',
    client: 'RetailTech Nigeria',
    category: 'SaaS',
    industry: 'Retail',
    description: 'Complete inventory management SaaS with POS, analytics, multi-warehouse support, and team collaboration.',
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
    client: 'SkillBridge Africa',
    category: 'EdTech',
    industry: 'Education',
    description: 'Online learning platform with video courses, interactive assessments, progress tracking, and certificates.',
    ourRole: 'Architecture & Backend Lead',
    challenge: 'Traditional classroom training couldn\'t scale across multiple African countries with varying internet quality.',
    solution: 'Scalable e-learning platform with offline support, mobile-first design, and progressive web app capabilities.',
    results: [
      '10,000+ students enrolled across 12 countries',
      'High course completion rate due to offline access',
      'Platform handles peak loads during enrollment periods',
    ],
    tags: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Vercel'],
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
    tags: ['React', 'D3.js', 'Python', 'FastAPI', 'GCP'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
    featured: true,
  },
  {
    title: 'E-commerce Rebrand',
    client: 'StyleHub Lagos',
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
    title: 'Healthcare Mobile App',
    client: 'MediConnect',
    category: 'SaaS',
    industry: 'Healthcare',
    description: 'Telemedicine platform connecting patients with doctors via video consultations and prescriptions.',
    challenge: 'Limited healthcare access in rural areas with no nearby hospitals or specialists.',
    solution: 'Built a HIPAA-compliant telemedicine app with video calls, e-prescriptions, and appointment scheduling.',
    results: ['50,000+ consultations', 'Available in 200+ rural communities', '95% patient satisfaction'],
    tags: ['React Native', 'Node.js', 'WebRTC', 'MongoDB', 'AWS'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop',
    featured: false,
  },
]


export function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory)

  return (
    <>
      <SEO title="Portfolio" description="Selected projects and case studies from our work." />

      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&h=600&fit=crop"
            alt=""
            className="w-full h-full object-cover"
            loading="eager"
          />
         <div className="absolute inset-0 bg-background/70 backdrop-blur-[2px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-medium text-primary mb-4">Case Studies</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Systems we've shipped
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            From fintech infrastructure to edtech platforms — here's what happens when engineering meets business problems.
          </p>
          <div className="mt-6 flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <span>30+ clients</span>
            <span>•</span>
            <span>50+ projects</span>
            <span>•</span>
            <span>12+ industries</span>
          </div>
        </div>
      </section>

      {/* Filters */}
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

      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project) => (
              <div className="group relative bg-background rounded-2xl border border-border/50 overflow-hidden hover:border-primary/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                {/* Project Image */}
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="text-xs text-muted-foreground">Featured</span>
                    )}
                  </div>

                  <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">
                    <Link to={`/portfolio/${project.title.toLowerCase().replace(/\s+/g, '-')}`}>
                      {project.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-primary font-medium mb-2">{project.client}</p>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{project.description}</p>

                  <div className="space-y-2 mb-4">
                    {project.results.slice(0, 2).map((result) => (
                      <div key={result} className="text-xs text-green-500 flex items-center gap-1">
                        <span>↗</span> {result}
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="px-2 py-0.5 rounded-md bg-secondary text-xs text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-0.5 rounded-md bg-secondary text-xs text-muted-foreground">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Want to be our next case study?</h2>
          <p className="text-muted-foreground mb-8">Let's build something remarkable together.</p>
          <Link to="/contact">
            <Button size="lg" className="group">
              Start Your Project
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  )
}