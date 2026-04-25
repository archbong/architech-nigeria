import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, XCircle, Users, Target } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const rightFit = [
  {
    title: 'You\'re building a product that needs to scale',
    description: 'Not a simple website. You need architecture that handles growth.',
    icon: Target,
  },
  {
    title: 'You value quality over speed',
    description: 'You understand that good architecture pays for itself many times over.',
    icon: CheckCircle,
  },
  {
    title: 'You\'re looking for a long-term partner',
    description: 'Not a one-off vendor. Someone who understands your business deeply.',
    icon: Users,
  },
  {
    title: 'You have budget for professional engineering',
    description: 'Projects typically start at ₦1M+. Quality engineering is an investment.',
    icon: CheckCircle,
  },
]

const wrongFit = [
  {
    title: 'You need a simple brochure website',
    description: 'WordPress or Wix might be a better fit for landing pages.',
  },
  {
    title: 'You\'re looking for the cheapest bid',
    description: 'We compete on quality and outcomes, not on being the lowest price.',
  },
  {
    title: 'You want to skip testing and documentation',
    description: 'We don\'t cut corners. These aren\'t optional — they\'re essential.',
  },
  {
    title: 'Your timeline is "I need it tomorrow"',
    description: 'Quality engineering takes time. Rush jobs produce technical debt.',
  },
]

const clientProfiles = [
  { type: 'Startups', stage: 'Pre-seed to Series A', budget: '₦1M - ₦5M', timeline: '2-12 weeks' },
  { type: 'Growing Businesses', stage: '$100K - $5M ARR', budget: '₦5M - ₦15M', timeline: '8-24 weeks' },
  { type: 'Scaling Companies', stage: '$5M+ ARR', budget: '₦15M+', timeline: '12-36 weeks' },
]

export function PreQualification() {
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
    <section className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-medium text-primary mb-4">Transparency</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-4">
            We're not for everyone
          </h2>
          <p className="text-lg text-muted-foreground">
            And that's okay. The best partnerships start with clarity about fit.
            Here's who we work with — and who we don't.
          </p>
        </div>

        <div
          ref={ref}
          className={cn(
            'grid md:grid-cols-2 gap-8 mb-16 transition-all duration-1000',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
          )}
        >
          {/* Right Fit */}
          <div className="relative p-8 rounded-2xl bg-background border border-green-500/20 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/4" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-xl bg-green-500/10 flex items-center justify-center">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                </div>
                <h3 className="text-xl font-bold">We're the right partner if</h3>
              </div>
              <div className="space-y-5">
                {rightFit.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="h-10 w-10 rounded-lg bg-green-500/10 flex items-center justify-center shrink-0">
                      <item.icon className="h-5 w-5 text-green-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">{item.title}</h4>
                      <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Wrong Fit */}
          <div className="relative p-8 rounded-2xl bg-background border border-destructive/20 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-destructive/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/4" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-xl bg-destructive/10 flex items-center justify-center">
                  <XCircle className="h-5 w-5 text-destructive" />
                </div>
                <h3 className="text-xl font-bold">We're NOT the right fit if</h3>
              </div>
              <div className="space-y-5">
                {wrongFit.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <XCircle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-sm">{item.title}</h4>
                      <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Client Profiles Table */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-lg font-bold text-center mb-6">Who we typically work with</h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {clientProfiles.map((profile) => (
              <div key={profile.type} className="p-5 rounded-xl bg-background border border-border/50 text-center">
                <p className="text-sm font-bold text-primary mb-3">{profile.type}</p>
                <div className="space-y-2 text-sm">
                  <div>
                    <p className="text-xs text-muted-foreground">Stage</p>
                    <p className="font-medium">{profile.stage}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Budget</p>
                    <p className="font-medium">{profile.budget}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Timeline</p>
                    <p className="font-medium">{profile.timeline}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-10">
            <p className="text-muted-foreground mb-4">
              Think we might be a good fit? Let's find out.
            </p>
            <Link to="/contact">
              <Button size="lg" className="group">
                Start the Conversation
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}