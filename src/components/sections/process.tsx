import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  ArrowRight, Search, PenTool, Code2, Rocket,
  FileText, GitBranch, Shield, Cloud
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Discovery',
    duration: 'Week 1',
    description: 'We dig into your business — not just your requirements. We need to understand your revenue model, your growth plans, and what happens when things go wrong.',
    deliverables: [
      'Business & technical requirements document',
      'Risk assessment and mitigation plan',
      'Prioritized feature roadmap',
      'Ballpark timeline and investment estimate',
    ],
    color: 'from-blue-500 to-blue-600',
  },
  {
    number: '02',
    icon: PenTool,
    title: 'Architecture & Planning',
    duration: 'Week 1-2',
    description: 'We design the system before writing a single line of code. Database schemas, API contracts, component architecture — all planned, documented, and reviewed.',
    deliverables: [
      'System architecture diagrams',
      'Database schema design',
      'API contract documentation',
      'Sprint plan with milestones',
    ],
    color: 'from-purple-500 to-purple-600',
  },
  {
    number: '03',
    icon: Code2,
    title: 'Development',
    duration: 'Weeks 2-10',
    description: 'We build in 2-week sprints. You see progress every Friday. TypeScript across the stack, automated tests from day one, and CI/CD configured before launch.',
    deliverables: [
      'Working software updated weekly',
      'Automated test suite',
      'CI/CD pipeline',
      'Progress reports every sprint',
    ],
    color: 'from-purple-500 to-purple-600',
  },
  {
    number: '04',
    icon: Shield,
    title: 'Testing & Hardening',
    duration: 'Week 10-11',
    description: 'We try to break what we built — so your users don\'t. Load testing, security audits, performance optimization, and edge case hunting.',
    deliverables: [
      'Load test results (10K+ concurrent users)',
      'Security audit report (OWASP Top 10)',
      'Performance optimization report',
      'Bug fixes and hardening',
    ],
    color: 'from-green-500 to-green-600',
  },
  {
    number: '05',
    icon: Rocket,
    title: 'Launch & Handover',
    duration: 'Week 12',
    description: 'We don\'t just deploy and disappear. Production launch with monitoring, documentation for your team, and 30 days of post-launch support included.',
    deliverables: [
      'Production deployment',
      'Monitoring and alerting setup',
      'Technical documentation',
      '30 days post-launch support',
    ],
    color: 'from-purple-500 to-purple-600',
  },
]

const guarantees = [
  { icon: FileText, text: 'Clear documentation — your team can maintain this without us' },
  { icon: GitBranch, text: 'Weekly progress demos — you see the work, not just hear about it' },
  { icon: Shield, text: 'TypeScript across the stack — type safety prevents production bugs' },
  { icon: Cloud, text: 'CI/CD from day one — deploy with confidence, not anxiety' },
]

function ProcessStep({ step, index, isLast }: { step: typeof steps[0]; index: number; isLast: boolean }) {
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
        'flex gap-6 transition-all duration-700',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      )}
    >
      {/* Timeline Line */}
      <div className="flex flex-col items-center">
        <div className={cn(
          'h-14 w-14 rounded-xl bg-gradient-to-br flex items-center justify-center shrink-0',
          step.color
        )}>
          <step.icon className="h-6 w-6 text-white" />
        </div>
        {!isLast && <div className="w-px flex-1 bg-border my-2" />}
      </div>

      {/* Content */}
      <div className="pb-12 flex-1">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-full">
            {step.number}
          </span>
          <h3 className="text-xl font-bold">{step.title}</h3>
          <span className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded-full">
            {step.duration}
          </span>
        </div>

        <p className="text-muted-foreground leading-relaxed mb-4">{step.description}</p>

        <div className="grid sm:grid-cols-2 gap-2">
          {step.deliverables.map((item) => (
            <div key={item} className="flex items-start gap-2 text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function Process() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary mb-4">How We Work</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-4">
            Engineering without ego.<br />
            Process without bureaucracy.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We follow a structured, transparent process that keeps you informed at every step.
            No black boxes, no surprises.
          </p>
        </div>
        <div className="text-center mb-12 p-6 rounded-xl bg-primary/5 border border-primary/20">
          <p className="text-lg font-semibold mb-2">How fast we move</p>
          <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
            Most MVPs are delivered within <span className="text-foreground font-semibold">3–6 weeks</span>. 
            Larger production systems take <span className="text-foreground font-semibold">8–16 weeks</span>. 
            We move fast, but we never skip architecture, testing, or documentation.
          </p>
          <p className="text-xs text-muted-foreground italic mt-2">
            "If we can't explain our architecture decision in plain English, we haven't thought it through enough."
          </p>
        </div>

        {/* Steps Timeline */}
        <div className="mb-16">
          {steps.map((step, i) => (
            <ProcessStep
              key={step.number}
              step={step}
              index={i}
              isLast={i === steps.length - 1}
            />
          ))}
        </div>

        {/* Guarantees */}
        <div className="p-8 rounded-2xl bg-background border border-border/50">
          <h3 className="text-lg font-bold mb-4 text-center">What you can expect from every engagement</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {guarantees.map((item) => (
              <div key={item.text} className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <span className="text-sm">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Ready to start your project with a structured, professional process?
          </p>
          <Link to="/contact">
            <Button size="lg" className="group">
              Start Your Project
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}