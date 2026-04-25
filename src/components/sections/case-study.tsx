import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, TrendingDown, TrendingUp, Quote, AlertTriangle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const caseStudy = {
  client: 'Clairesdelight',
  industry: 'Retail Chain — 50+ Locations',
  problem: 'Each store tracked inventory in separate spreadsheets. Purchase orders were paper-based. Stockouts happened daily. The CEO couldn\'t answer: "How much inventory do we actually have?"',
  solution: 'We architected and built a centralized SaaS inventory platform with real-time tracking across all locations, automated reorder points, POS integration, and analytics dashboards.',
  techStack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'AWS'],
  timeline: '12 weeks from kickoff to production',
  metrics: [
    { label: 'Stockouts', before: 'Daily occurrences', after: '40% reduction', improvement: 'in 3 months' },
    { label: 'Inventory Counts', before: '2-3 days per location', after: '4 hours', improvement: 'with barcode scanning' },
    { label: 'Purchase Orders', before: '3-5 days to process', after: 'Same day', improvement: 'automated' },
    { label: 'Monthly Reports', before: '3+ days to compile', after: 'Real-time', improvement: 'dashboard' },
    { label: 'Sales Growth', before: 'Stagnant', after: '25% increase', improvement: 'better stock availability' },
  ],
  testimonial: {
    quote: 'Architech didn\'t just build software — they transformed how we operate. We now manage inventory across 50 locations from a single dashboard. That\'s the power of good engineering.',
    name: 'Adebayo Ogunlesi',
    role: 'CEO, Clairesdelight',
  },
}

export function CaseStudy() {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-medium text-primary mb-4">Case Study</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-4">
            Real results, not promises
          </h2>
          <p className="text-lg text-muted-foreground">
            Here's what happened when RetailTech Nigeria trusted us with their systems.
          </p>
        </div>

        <div
          ref={ref}
          className={cn(
            'relative rounded-2xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-purple-500/5 overflow-hidden transition-all duration-1000',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
          )}
        >
          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />

          <div className="relative p-8 lg:p-12">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Problem & Solution */}
              <div className="lg:col-span-2 space-y-8">
                {/* Client Info */}
                <div>
                  <p className="text-sm text-primary font-medium mb-1">{caseStudy.client}</p>
                  <p className="text-sm text-muted-foreground">{caseStudy.industry}</p>
                </div>

                {/* Problem */}
                <div className="p-6 rounded-xl bg-destructive/5 border border-destructive/20">
                  <div className="flex items-center gap-2 mb-3">
                    <TrendingDown className="h-5 w-5 text-destructive" />
                    <h3 className="font-bold">The Problem</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{caseStudy.problem}</p>
                  <p className="text-xs text-destructive font-medium mt-2">
                    Estimated impact: 15-20% revenue loss from stockouts
                  </p>
                </div>

                {/* Solution */}
                <div className="p-6 rounded-xl bg-green-500/5 border border-green-500/20">
                  <div className="flex items-center gap-2 mb-3">
                    <TrendingUp className="h-5 w-5 text-green-500" />
                    <h3 className="font-bold">Our Solution</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{caseStudy.solution}</p>
                  <div className="p-4 rounded-xl bg-yellow-500/5 border border-yellow-500/20 mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertTriangle className="h-4 w-4 text-yellow-500" />
                      <h4 className="text-sm font-semibold">A challenge we worked through</h4>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      The initial architecture assumed stable internet connectivity across all 50 locations. 
                      During rollout, we discovered 6 locations had unreliable connections that caused sync failures. 
                      We iterated to implement an offline-first sync queue that cached transactions locally and synced 
                      when connectivity returned. This added 10 days to the timeline but prevented data loss for 12% 
                      of daily transactions.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {caseStudy.techStack.map((tech) => (
                      <span key={tech} className="px-2 py-1 rounded-md bg-green-500/10 text-xs text-green-600 font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">{caseStudy.timeline}</p>
                </div>

                {/* Testimonial */}
                <div className="p-6 rounded-xl bg-background border border-border/50">
                  <Quote className="h-8 w-8 text-primary/30 mb-3" />
                  <p className="text-sm italic text-muted-foreground leading-relaxed mb-4">
                    "{caseStudy.testimonial.quote}"
                  </p>
                  <div>
                    <p className="text-sm font-semibold">{caseStudy.testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{caseStudy.testimonial.role}</p>
                  </div>
                </div>
              </div>

              {/* Metrics Table */}
              <div>
                <div className="sticky top-24 space-y-3">
                  <h3 className="font-bold text-sm mb-4">Before → After</h3>
                  {caseStudy.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className={cn(
                        'p-4 rounded-xl border bg-background/50 transition-all duration-700',
                        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                      )}
                    >
                      <p className="text-xs font-medium text-muted-foreground mb-2">{metric.label}</p>
                      <div className="flex items-center gap-2 text-xs">
                        <span className="px-2 py-1 rounded bg-destructive/10 text-destructive line-through">
                          {metric.before}
                        </span>
                        <span>→</span>
                        <span className="px-2 py-1 rounded bg-green-500/10 text-green-600 font-medium">
                          {metric.after}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">{metric.improvement}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="mt-8 pt-8 border-t border-border/50 text-center">
              <Link to="/portfolio">
                <Button variant="outline" size="lg" className="group">
                  View Full Portfolio
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}