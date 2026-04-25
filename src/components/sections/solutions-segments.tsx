import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Rocket, TrendingUp, Building2, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const segments = [
  {
    id: 'startups',
    icon: Rocket,
    title: 'For Startups',
    tagline: 'From idea to first 1,000 users — without the spaghetti code.',
    description: 'You need to move fast, but you also need a foundation that won\'t collapse when you hit growth. We build MVPs that are production-ready, not prototypes you\'ll have to rewrite.',
    offerings: [
      { title: 'MVP Development (2-4 weeks)', description: 'A working product with auth, payments, and core features — built on scalable architecture from day one.' },
      { title: 'Scalable Foundation', description: 'TypeScript, proper database design, and CI/CD — so your first 100 users have the same experience as your first 10,000.' },
      { title: 'Go-to-Market Systems', description: 'Payment integration, user authentication, email notifications — the infrastructure your product needs to operate.' },
      { title: 'Investor-Ready Codebase', description: 'Clean, documented, auditable code that technical due diligence will validate, not reject.' },
    ],
    outcomes: [
      'Launch faster with production-ready code',
      'Scale confidently when users arrive',
      'Impress investors with professional engineering',
    ],
    cta: { label: 'Get Your MVP to Market in 3–6 Weeks', href: '/contact' },
    color: 'from-purple-500 to-purple-600',
    bgGradient: 'from-purple-500/5 to-purple-600/5',
  },
  {
    id: 'growing',
    icon: TrendingUp,
    title: 'For Growing Businesses',
    tagline: 'Your product is working. Now let\'s make it scale.',
    description: 'Growth exposes every shortcut. Slow page loads, database bottlenecks, and fragile features start costing you customers and revenue. We fix the foundation so you can keep growing.',
    offerings: [
      { title: 'System Audits', description: 'Deep analysis of your current architecture — find the bottlenecks and security risks before they find you.' },
      { title: 'Performance Optimization', description: 'From 4-second page loads to sub-200ms. Database indexing, caching strategies, and code optimization.' },
      { title: 'Architecture Overhaul', description: 'Modular, testable, maintainable architecture that your team can work with — not against.' },
      { title: 'Team Augmentation', description: 'We work alongside your engineers or lead the rebuild. Knowledge transfer included.' },
    ],
    outcomes: [
      'Handle 10x users without 10x costs',
      'Ship features faster with stable architecture',
      'Stop fighting your own codebase',
    ],
    cta: { label: 'Find What\'s Slowing Your System Down', href: '/contact' },
    color: 'from-purple-500 to-purple-600',
    bgGradient: 'from-purple-500/5 to-purple-600/5',
  },
  {
    id: 'scaling',
    icon: Building2,
    title: 'For Scaling Companies',
    tagline: 'Enterprise-grade systems without enterprise bureaucracy.',
    description: 'You\'re entering new markets, serving enterprise clients, and need infrastructure that matches your ambition. We build the systems that make scaling possible.',
    offerings: [
      { title: 'Multi-Tenant Architecture', description: 'One codebase, many clients. Isolated data, shared infrastructure, maximum efficiency.' },
      { title: 'Advanced API Systems', description: 'Rate limiting, caching layers, versioning, and comprehensive documentation for external developers.' },
      { title: 'Monetization Engineering', description: 'Subscription management, usage-based billing, payment orchestration, and revenue analytics.' },
      { title: 'Compliance-Ready Infrastructure', description: 'Architecture designed for SOC 2, GDPR, and PCI-DSS compliance from the ground up.' },
      { title: 'Full Visibility', description: 'Access to our project board — see every task, every commit, every deploy. No black boxes.' },
    ],
    outcomes: [
      'Enter new markets with confidence',
      'Serve enterprise clients without rewrites',
      'Build once, sell to many',
    ],
    cta: { label: 'See How We\'d Architect Your Growth', href: '/contact' },
    color: 'from-purple-500 to-purple-600',
    bgGradient: 'from-purple-500/5 to-purple-600/5',
  },
]

function SegmentCard({ segment, index }: { segment: typeof segments[0]; index: number }) {
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
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [index])

  return (
    <div
      ref={ref}
      id={segment.id}
      className={cn(
        'rounded-2xl border border-border/50 bg-background overflow-hidden transition-all duration-700',
        'hover:border-primary/30 hover:shadow-xl',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      )}
    >
      <div className="p-8 lg:p-10">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className={cn(
            'h-14 w-14 rounded-xl bg-gradient-to-br flex items-center justify-center',
            segment.color
          )}>
            <segment.icon className="h-7 w-7 text-white" />
          </div>
          <div>
            <h3 className="text-2xl font-bold">{segment.title}</h3>
            <p className="text-primary font-medium">{segment.tagline}</p>
          </div>
        </div>

        <p className="text-muted-foreground leading-relaxed mb-8">{segment.description}</p>

        {/* Offerings Grid */}
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {segment.offerings.map((offering) => (
            <div key={offering.title} className="p-4 rounded-xl bg-secondary/30 border border-border/30">
              <h4 className="font-semibold text-sm mb-1">{offering.title}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{offering.description}</p>
            </div>
          ))}
        </div>

        {/* Outcomes */}
        <div className="p-4 rounded-xl bg-green-500/5 border border-green-500/20 mb-8">
          <p className="text-xs font-medium text-green-500 mb-2">OUTCOMES</p>
          <div className="space-y-2">
            {segment.outcomes.map((outcome) => (
              <div key={outcome} className="flex items-center gap-2 text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 shrink-0" />
                {outcome}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <Link to={segment.cta.href}>
          <Button size="lg" className="w-full group">
            {segment.cta.label}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </div>
    </div>
  )
}

export function SolutionsSegments() {
  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary mb-4">What We Do</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-4">
            Solutions built for where you are
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you're launching, growing, or scaling — we meet you at your stage 
            with the engineering expertise you need.
          </p>
          <p className="text-muted-foreground text-sm italic max-w-2xl mx-auto mb-12">
            We don't build what you ask for. We build what your business needs to scale.
          </p>
        </div>

        <div className="space-y-12">
          {segments.map((segment, i) => (
            <SegmentCard key={segment.id} segment={segment} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}