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

  if (!project) {
    return (
      <section className="pt-32 pb-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Project not found</h1>
        <Link to="/portfolio"><Button variant="outline">Back to Portfolio</Button></Link>
      </section>
    )
  }

  return (
    <>
      <SEO title={project.title} description={project.overview} />

      <section className="pt-32 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/portfolio" className="inline-flex text-sm text-muted-foreground hover:text-foreground mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio
          </Link>

          {/* Hero Image */}
          <div className="h-64 md:h-96 rounded-2xl overflow-hidden mb-8">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <span className="text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">{project.category}</span>
                <h1 className="text-3xl font-bold mt-4 mb-2">{project.title}</h1>
                <p className="text-muted-foreground">{project.client} • {project.date} • {project.duration}</p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-3">Overview</h2>
                <p className="text-muted-foreground leading-relaxed">{project.overview}</p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-3">The Challenge</h2>
                <p className="text-muted-foreground leading-relaxed">{project.challenge}</p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-3">Our Solution</h2>
                <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-3">Results</h2>
                <div className="space-y-3">
                  {project.results.map((r: string) => (
                    <div key={r} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>{r}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Gallery */}
              <div>
                <h2 className="text-xl font-bold mb-3">Gallery</h2>
                <div className="grid grid-cols-3 gap-3">
                  {project.gallery.map((img: string, i: number) => (
                    <div key={i} className="aspect-video rounded-lg overflow-hidden">
                      <img src={img} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              {project.testimonial && (
                <div className="p-6 rounded-xl bg-primary/5 border border-primary/20">
                  <p className="text-lg italic mb-4">"{project.testimonial.quote}"</p>
                  <p className="font-semibold">{project.testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{project.testimonial.role}</p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="p-6 rounded-xl border border-border/50 bg-background sticky top-24">
                <h3 className="font-semibold mb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech: string) => (
                    <span key={tech} className="px-3 py-1.5 rounded-lg bg-secondary text-sm">{tech}</span>
                  ))}
                </div>
              </div>
              <Link to="/contact">
                <Button className="w-full group">
                  Start a Similar Project
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}