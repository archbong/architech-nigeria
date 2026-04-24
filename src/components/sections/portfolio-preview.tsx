import { Link } from 'react-router-dom'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const caseStudies = [
  {
    title: 'SaaS Inventory Platform',
    client: 'RetailTech Nigeria',
    description: 'Built a complete inventory management SaaS with POS, analytics, and multi-warehouse support.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    color: 'from-purple-500 to-purple-600',
  },
  {
    title: 'EdTech Learning Platform',
    client: 'SkillBridge Africa',
    description: 'Designed and developed an online learning platform with video courses, assessments, and certificates.',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'Vercel'],
    color: 'from-purple-500 to-purple-600',
  },
  {
    title: 'FinTech Dashboard',
    client: 'PayFlow Solutions',
    description: 'Created a real-time financial analytics dashboard with data visualization and reporting.',
    tags: ['React', 'D3.js', 'Python', 'GCP'],
    color: 'from-green-500 to-green-600',
  },
]

export function PortfolioPreview() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Selected work
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Projects we're proud of. Real problems, real solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {caseStudies.map((study) => (
            <Link
              key={study.title}
              to="/portfolio"
              className="group relative p-6 rounded-2xl border border-border/50 bg-background hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className={cn(
                'h-2 w-full rounded-full bg-gradient-to-r mb-6',
                study.color
              )} />
              
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-bold text-lg group-hover:text-primary transition-colors">{study.title}</h3>
                <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              
              <p className="text-sm text-primary font-medium mb-2">{study.client}</p>
              <p className="text-sm text-muted-foreground mb-4">{study.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {study.tags.map((tag) => (
                  <span key={tag} className="px-2 py-1 rounded-md bg-secondary text-xs text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/portfolio">
            <Button variant="outline" size="lg" className="group">
              View All Case Studies
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}