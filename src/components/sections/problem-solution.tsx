import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { AlertTriangle, TrendingDown, AlertCircle, ArrowRight, Shield, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const warningSigns = [
  {
    icon: AlertTriangle,
    text: 'Pages take 4+ seconds to load and customers are leaving',
  },
  {
    icon: TrendingDown,
    text: 'Your database can\'t handle concurrent users anymore',
  },
  {
    icon: AlertCircle,
    text: 'Every new feature breaks something else in your app',
  },
  {
    icon: AlertTriangle,
    text: 'Your developers spend more time fixing bugs than building',
  },
  {
    icon: TrendingDown,
    text: 'You\'re losing revenue because your system wasn\'t architected properly',
  },
]

const solutions = [
  {
    title: 'Systems that handle growth',
    description: 'Not apps that collapse at 1,000 users. We architect for scale from day one.',
    icon: Shield,
  },
  {
    title: 'Architecture that makes business sense',
    description: 'Built for your revenue model, not someone else\'s template. Every technical decision serves a business outcome.',
    icon: Zap,
  },
  {
    title: 'Speed without compromise',
    description: 'MVPs in 2-4 weeks. Production systems in 6-12. We move fast but never skip testing, documentation, or type safety.',
    icon: Shield,
  },
  {
    title: 'Code your team can maintain',
    description: 'No black boxes. Clean TypeScript, documented patterns, and knowledge transfer on every project.',
    icon: Zap,
  },
]

function AnimatedCard({ children, index }: { children: React.ReactNode; index: number }) {
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

export function ProblemSolution() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* PROBLEM SECTION */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <p className="text-sm font-medium text-primary mb-4">The Hidden Cost</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-6">
            Your software should scale with your business.<br />
            <span className="text-muted-foreground">Most doesn't.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            You launched your product. Users are signing up. Revenue is growing. 
            Then the cracks appear — and they appear fast.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-8">
          <p className="text-center text-lg font-medium text-foreground">
            "Most software fails due to poor system design, not lack of features."
          </p>
        </div>

        {/* Warning Signs */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {warningSigns.map((sign, i) => (
            <AnimatedCard key={i} index={i}>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-destructive/5 border border-destructive/20">
                <sign.icon className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                <p className="text-sm">{sign.text}</p>
              </div>
            </AnimatedCard>
          ))}
        </div>

        {/* Agitation */}
        <div className="max-w-3xl mx-auto mb-20 p-8 rounded-2xl bg-background border border-border/50">
          <div className="flex items-start gap-4">
            <div className="h-12 w-12 rounded-xl bg-destructive/10 flex items-center justify-center shrink-0">
              <AlertTriangle className="h-6 w-6 text-destructive" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Here's the uncomfortable truth</h3>
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Bad architecture compounds.</strong> Every week you 
                delay fixing your foundation, the rewrite gets more expensive. Every customer you lose 
                to slow performance is revenue you'll never recover. Every feature built on shaky ground 
                is technical debt that's quietly killing your business.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-3">
                The cost of inaction isn't just technical — it's financial. We've seen businesses lose 
                <span className="text-destructive font-semibold"> ₦2M+ monthly</span> to preventable 
                system failures.
              </p>
            </div>
          </div>
        </div>

        {/* SOLUTION SECTION */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-medium text-primary mb-4">The Solution</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            We don't just write code.<br />
            <span className="text-primary">We engineer systems.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            At Architech Nigeria, we approach every project with one question: <em>"Will this scale?"</em>
          </p>
        </div>

        {/* Solution Cards */}
        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {solutions.map((solution, i) => (
            <AnimatedCard key={solution.title} index={i}>
              <div className="flex gap-4 p-6 rounded-xl bg-background border border-border/50 hover:border-primary/30 transition-all">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <solution.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">{solution.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{solution.description}</p>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/contact">
            <Button size="xl" className="group">
              Stop Patching. Start Engineering.
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

      </div>
    </section>
  )
}