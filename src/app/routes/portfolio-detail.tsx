import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, ExternalLink, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SEO } from '@/components/shared/seo'

const projects: Record<string, any> = {
  'saas-inventory-platform': {
    title: 'SaaS Inventory Platform',
    client: 'RetailTech Nigeria',
    category: 'SaaS',
    date: '2025',
    duration: '12 weeks',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop',
    overview: 'RetailTech Nigeria, a rapidly growing retail chain with 50+ locations, was struggling with fragmented inventory management. They needed a centralized platform to manage stock, sales, and procurement in real-time.',
    challenge: 'Manual inventory tracking across 50+ locations was causing frequent stockouts and overstocking. Each store maintained separate spreadsheets, making it impossible to get a unified view of inventory. Purchase orders were paper-based and took days to process.',
    solution: 'We designed and built a complete SaaS platform with real-time inventory tracking, multi-warehouse support, automated reorder points, POS integration, and advanced analytics. The platform processes 50,000+ daily transactions with 99.9% uptime.',
    techStack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'Docker', 'AWS ECS', 'Terraform'],
    results: [
      '40% reduction in stockouts within 3 months',
      '60% faster inventory counting with barcode scanning',
      '25% increase in overall sales due to better stock availability',
      '90% reduction in purchase order processing time',
    ],
    testimonial: {
      quote: 'Architech Nigeria delivered beyond our expectations. The platform has completely transformed how we manage our business.',
      name: 'Adebayo Ogunlesi',
      role: 'CEO, RetailTech Nigeria',
    },
    gallery: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=500&fit=crop',
    ],
  },
}

export function PortfolioDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? projects[slug] : null

  // ── 404 ──
  if (!project) {
    return (
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 gap-5">
        <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mb-2">
          <ArrowLeft className="h-7 w-7 text-muted-foreground" />
        </div>
        <h1 className="text-2xl font-bold tracking-tight">Project not found</h1>
        <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
          This project may have been moved or doesn't exist. Head back to the portfolio.
        </p>
        <Link to="/portfolio">
          <Button variant="outline" className="rounded-full px-5 text-sm font-semibold">
            ← Back to Portfolio
          </Button>
        </Link>
      </section>
    )
  }

  return (
    <>
      <SEO title={project.title} description={project.overview} />

      <article>

        {/* ── HERO IMAGE ── */}
        <div className="relative w-full h-72 sm:h-[28rem] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        </div>

        {/* ── BODY ── */}
        <div className="max-w-5xl mx-auto px-6 lg:px-8 -mt-20 relative pb-28">

          {/* Back link */}
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors mb-8 group"
          >
            <ArrowLeft className="h-3.5 w-3.5 group-hover:-translate-x-0.5 transition-transform" />
            Back to Portfolio
          </Link>

          <div className="grid lg:grid-cols-3 gap-12 items-start">

            {/* ── MAIN CONTENT ── */}
            <div className="lg:col-span-2 space-y-10">

              {/* Title block */}
              <div>
                <span className="text-[10px] font-bold tracking-widest uppercase bg-primary/10 text-primary border border-primary/20 px-3 py-1.5 rounded-full">
                  {project.category}
                </span>
                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight leading-[1.15] mt-5 mb-3">
                  {project.title}
                </h1>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground font-medium">
                  <span>{project.client}</span>
                  <span className="text-border">·</span>
                  <span>{project.date}</span>
                  <span className="text-border">·</span>
                  <span>{project.duration}</span>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-border/40" />

              {/* Overview */}
              <div>
                <p className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground/50 mb-3">
                  Overview
                </p>
                <p className="text-muted-foreground leading-8 text-base">{project.overview}</p>
              </div>

              {/* Challenge */}
              <div>
                <p className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground/50 mb-3">
                  The Challenge
                </p>
                <p className="text-muted-foreground leading-8 text-base">{project.challenge}</p>
              </div>

              {/* Solution */}
              <div>
                <p className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground/50 mb-3">
                  Our Solution
                </p>
                <p className="text-muted-foreground leading-8 text-base">{project.solution}</p>
              </div>

              {/* Results */}
              <div>
                <p className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground/50 mb-4">
                  Results
                </p>
                <div className="space-y-3">
                  {project.results.map((r: string) => (
                    <div key={r} className="flex items-start gap-3 p-3.5 rounded-xl bg-emerald-500/5 border border-emerald-500/15">
                      <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm font-medium leading-relaxed">{r}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Gallery */}
              {project.gallery?.length > 0 && (
                <div>
                  <p className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground/50 mb-4">
                    Gallery
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {project.gallery.map((img: string, i: number) => (
                      <div key={i} className="aspect-video rounded-xl overflow-hidden border border-border/40 group">
                        <img
                          src={img}
                          alt={`${project.title} screenshot ${i + 1}`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Testimonial */}
              {project.testimonial && (
                <div className="relative rounded-2xl border border-primary/20 bg-primary/5 p-7 overflow-hidden">
                  <div className="absolute top-4 left-5 text-6xl text-primary/10 font-serif leading-none select-none">
                    "
                  </div>
                  <p className="text-base italic text-foreground leading-8 mb-5 relative">
                    "{project.testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/20 flex items-center justify-center text-sm flex-shrink-0">
                      {project.testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-bold leading-none mb-0.5">{project.testimonial.name}</p>
                      <p className="text-xs text-muted-foreground">{project.testimonial.role}</p>
                    </div>
                  </div>
                </div>
              )}

            </div>

            {/* ── SIDEBAR ── */}
            <div className="space-y-4 lg:sticky lg:top-24">

              {/* Tech stack card */}
              <div className="rounded-2xl border border-border/50 bg-background p-6">
                <p className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground/50 mb-4">
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech: string) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-full bg-secondary border border-border/40 text-xs font-semibold text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project meta card */}
              <div className="rounded-2xl border border-border/50 bg-background p-6 space-y-4">
                <p className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground/50">
                  Project Details
                </p>
                {[
                  { label: 'Client', value: project.client },
                  { label: 'Category', value: project.category },
                  { label: 'Duration', value: project.duration },
                  { label: 'Date', value: project.date },
                ].map(({ label, value }) => (
                  <div key={label} className="flex justify-between items-start gap-4">
                    <span className="text-xs text-muted-foreground flex-shrink-0">{label}</span>
                    <span className="text-xs font-semibold text-right">{value}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Link to="/contact">
                <Button className="w-full group rounded-xl h-11 text-sm font-semibold gap-2 shadow-sm shadow-primary/20">
                  Start a Similar Project
                  <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </Button>
              </Link>

              {/* Back link */}
              <Link
                to="/portfolio"
                className="flex items-center justify-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                All projects
              </Link>

            </div>
          </div>
        </div>
      </article>
    </>
  )
}