import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Search, FileText, ListChecks, Clock,
  CheckCircle, XCircle, Sparkles
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const deliverables = [
  {
    icon: Search,
    title: 'Architecture Review',
    description: 'Deep analysis of your current system — what\'s working, what\'s not, and where it will break under load.',
  },
  {
    icon: ListChecks,
    title: 'Prioritized Action Plan',
    description: 'A clear roadmap of what to fix first, what can wait, and what needs a complete rethink.',
  },
  {
    icon: Clock,
    title: 'Timeline & Budget Estimate',
    description: 'Realistic projections for fixes, improvements, or a full rebuild — no surprises.',
  },
  {
    icon: FileText,
    title: 'Written Assessment',
    description: 'A professional document you can share with your team, investors, or stakeholders.',
  },
]

const goodFit = [
  'You have a working product but it\'s showing cracks under load',
  'You\'re planning to scale and want to do it right the first time',
  'You\'ve raised funding and need to level up your engineering',
  'You want a second opinion from senior engineers who build at scale',
]

const notFit = [
  'You\'re looking for the cheapest quote available',
  'You need a simple landing page or WordPress site',
  'You\'re not ready to invest in proper engineering',
  'You want to micromanage every commit and decision',
]

function AuditCard({ children, index }: { children: React.ReactNode; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 150)
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
        'transition-all duration-700',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      )}
    >
      {children}
    </div>
  )
}

export function FreeAudit() {

  const handleDownloadChecklist = () => {
  const link = document.createElement('a')
  link.href = '/saas-architecture-checklist.pdf'
  link.download = 'saas-architecture-checklist.pdf'
  link.click()
}
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Free — No Commitment</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-4">
            Not sure if your system can scale?
          </h2>
          <p className="text-lg text-muted-foreground">
            Get a free, no-obligation engineering assessment of your current architecture.
          </p>
        </div>

        {/* Main Offer Card */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative rounded-2xl border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-purple-500/5 overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />

            <div className="relative p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* What You Get */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold mb-2">What you get</h3>
                    <p className="text-sm text-muted-foreground">
                      A 45-minute engineering session where we dive deep into your system.
                    </p>
                  </div>
                  <div className="space-y-4">
                    {deliverables.map((item, i) => (
                      <AuditCard key={item.title} index={i}>
                        <div className="flex gap-4 p-4 rounded-xl bg-background/50 border border-border/30">
                          <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                            <item.icon className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-sm">{item.title}</h4>
                            <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                          </div>
                        </div>
                      </AuditCard>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="space-y-6">
                  <div className="p-6 rounded-xl bg-background/50 border border-border/30">
                    <p className="text-3xl font-bold text-primary mb-2">₦0</p>
                    <p className="text-sm text-muted-foreground mb-4">
                      No cost. No commitment. Just honest engineering advice.
                    </p>
                    <Link to="/contact">
                      <Button size="lg" className="w-full group k">
                        Get Free System Audit
                        <span className="block text-xs font-normal opacity-70 mt-0.5">
                          Delivered in 48 Hours
                        </span>
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                    <p className="text-xs text-muted-foreground text-center mt-3">
                      Takes 45 minutes. You'll leave with an action plan.
                    </p>
                  </div>
                  <div className="mt-8 p-6 rounded-xl bg-background/50 border border-border/30 text-center">
                  <p className="text-sm font-medium mb-2">What projects typically cost</p>
                  <p className="text-muted-foreground text-sm mb-1">
                    Most projects we work on range from <span className="text-foreground font-semibold">₦1M to ₦10M+</span>, depending on scope and complexity.
                  </p>
                  <p className="text-xs text-muted-foreground">
                    This is the range where we deliver the most value. For smaller projects, we're happy to recommend trusted partners.
                  </p>
                </div>

                  <div className="p-6 rounded-xl bg-background/50 border border-border/30">
                    <p className="text-sm font-medium mb-3">What happens after you book:</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <span className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">1</span>
                        <span className="text-muted-foreground">We review your current system (if accessible)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">2</span>
                        <span className="text-muted-foreground">45-minute deep-dive call with a senior engineer</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">3</span>
                        <span className="text-muted-foreground">Written assessment delivered within 48 hours</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">4</span>
                        <span className="text-muted-foreground">Optional: proposal for implementation if needed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-md mx-auto mb-12 p-6 rounded-xl bg-background border border-border/50 text-center">
          <p className="text-sm font-medium mb-2">Not ready for a call?</p>
          <p className="text-xs text-muted-foreground mb-4">
            Download our SaaS Architecture Checklist — 12 questions to ask before you build anything new.
          </p>
          <button onClick={handleDownloadChecklist}
          className="text-sm font-medium text-primary hover:underline">
            Get the Checklist →
          </button>
        </div>


        {/* Fit / Not Fit */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Good Fit */}
          <div className="p-6 rounded-xl bg-green-500/5 border border-green-500/20">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <h3 className="font-bold">This is for you if</h3>
            </div>
            <ul className="space-y-3">
              {goodFit.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not Fit */}
          <div className="p-6 rounded-xl bg-destructive/5 border border-destructive/20">
            <div className="flex items-center gap-2 mb-4">
              <XCircle className="h-5 w-5 text-destructive" />
              <h3 className="font-bold">This is NOT for you if</h3>
            </div>
            <ul className="space-y-3">
              {notFit.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm">
                  <XCircle className="h-4 w-4 text-destructive shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}