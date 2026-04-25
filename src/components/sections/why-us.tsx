import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Cpu, Briefcase, Gauge, Lightbulb } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const differentiators = [
  {
    icon: Cpu,
    title: 'Systems-First Thinking',
    headline: 'We don\'t just build features. We build systems.',
    description: 'Most developers ask "what should we build?" We ask "how will this handle 100,000 users?", "how will your team maintain this in 2 years?", and "what happens when this fails?"',
    points: [
      'Architecture designed for scale from day one',
      'Database schemas that handle millions of records',
      'Error handling and monitoring built in, not bolted on',
      'We build systems your team can maintain — no proprietary black boxes, no vendor lock-in',
    ],
  },
  {
    icon: Briefcase,
    title: 'Business-Focused Engineering',
    headline: 'Every line of code serves a business outcome.',
    description: 'We don\'t just take requirements and build. We understand your revenue model, your customer acquisition strategy, and your growth goals — then engineer systems that support those outcomes.',
    points: [
      'Technical decisions aligned with business goals',
      'Monetization systems engineered for your pricing model',
      'Features prioritized by business impact, not technical novelty',
      'You get a partner who speaks both engineering and business',
    ],
  },
  {
    icon: Gauge,
    title: 'Speed + Structure',
    headline: 'We move fast. But we never skip the essentials.',
    description: 'MVPs in 2-4 weeks. Production systems in 6-12. Unlike agencies that rush and leave technical debt, or enterprises that take forever — we deliver quickly with quality baked in.',
    points: [
      'TypeScript across the entire stack (no "any" types)',
      'Automated testing from the first commit',
      'CI/CD pipelines configured before launch',
      'Documentation your team can actually use',
    ],
  },
  {
    icon: Lightbulb,
    title: 'CTO-Level Thinking',
    headline: 'You\'re not just hiring developers. You\'re gaining a technical partner.',
    description: 'Our founder operates at the intersection of engineering and business strategy. You get guidance on architecture, team scaling, technology ROI, and SaaS metrics — not just code.',
    points: [
      'Strategic guidance on technical decisions',
      'Understanding of SaaS metrics (MRR, churn, LTV)',
      'Team scaling and hiring recommendations',
      'Technology stack evaluation for your specific needs',
    ],
  },
]

function DifferentiatorCard({ item, index }: { item: typeof differentiators[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 200)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [index])

  return (
    <div
      ref={ref}
      className={cn(
        'p-8 rounded-2xl border border-border/50 bg-background transition-all duration-700',
        'hover:border-primary/30 hover:shadow-lg',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      )}
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center">
          <item.icon className="h-7 w-7 text-primary" />
        </div>
        <div>
          <p className="text-sm font-medium text-primary mb-1">{item.title}</p>
          <h3 className="text-xl font-bold">{item.headline}</h3>
        </div>
      </div>

      <p className="text-muted-foreground leading-relaxed mb-6">{item.description}</p>

      <div className="space-y-3">
        {item.points.map((point) => (
          <div key={point} className="flex items-start gap-3">
            <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
            <span className="text-sm">{point}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export function WhyUs() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-medium text-primary mb-4">Why Architech Nigeria</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-4">
            We're not another dev shop
          </h2>
          <p className="text-lg text-muted-foreground">
            We're your engineering partner. Here's what makes us different.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {differentiators.map((item, i) => (
            <DifferentiatorCard key={item.title} item={item} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-purple-500/5 border border-primary/20">
          <h3 className="text-xl font-bold mb-2">Ready to work with engineers who think like business owners?</h3>
          <p className="text-muted-foreground mb-6">
            Let's discuss your project and see if we're the right fit.
          </p>
          <Link to="/contact">
            <Button size="lg" className="group">
              Book a Strategy Call
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}