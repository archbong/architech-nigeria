import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Shield, Zap, Users, Clock, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const trustAnchors = [
  { icon: Users, value: '30+', label: 'Businesses served across Nigeria and beyond' },
  { icon: Shield, value: '₦1M–₦10M+', label: 'Project range — startups to enterprise' },
  { icon: Zap, value: 'On Time', label: 'Projects delivered when promised' },
  { icon: Clock, value: '3–16', label: 'Weeks to delivery, depending on scope' },
]

const nextSteps = [
  {
    step: '01',
    title: 'Book a 30-minute call',
    description: 'No sales pitch, just a real conversation about your needs.',
  },
  {
    step: '02',
    title: 'We discuss your business',
    description: 'What you\'re building, what\'s working, and what\'s not.',
  },
  {
    step: '03',
    title: 'We provide honest feedback',
    description: 'Including whether we\'re the right fit for your project.',
  },
  {
    step: '04',
    title: 'If it makes sense, we propose a plan',
    description: 'Clear scope, timeline, and investment. No surprises.',
  },
]

export function CTA() {
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
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-500/20" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={cn(
            'max-w-4xl mx-auto transition-all duration-1000',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          )}
        >
          {/* Headline */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-4">
              Let's build something that scales
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Whether you're launching an MVP, scaling an existing platform, or need an architecture 
              overhaul — we engineer systems that grow with your business.
            </p>
          </div>

          {/* Primary CTA */}
          <div className="max-w-md mx-auto mb-16">
            <Link to="/contact">
              <Button size="xl" className="w-full group text-base h-16">
                Book Your Free Strategy Call
                <span className="block text-xs font-normal opacity-70 mt-0.5">
                  Get a Clear Plan in 30 Minutes
                </span>
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          {/* What Happens Next */}
          <div className="mb-16">
            <p className="text-sm font-medium text-primary text-center mb-6">WHAT HAPPENS NEXT</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {nextSteps.map((step, i) => (
                <div
                  key={step.step}
                  className={cn(
                    'p-5 rounded-xl bg-background/80 backdrop-blur-sm border border-border/50 text-center transition-all duration-700',
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  )}
                  style={{ transitionDelay: `${i * 100 + 300}ms` }}
                >
                  <span className="text-2xl font-bold text-primary/30 mb-2 block">{step.step}</span>
                  <h4 className="font-semibold text-sm mb-1">{step.title}</h4>
                  <p className="text-xs text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Trust Anchors */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {trustAnchors.map((anchor, i) => (
              <div
                key={anchor.label}
                className={cn(
                  'p-5 rounded-xl bg-background/80 backdrop-blur-sm border border-border/50 text-center transition-all duration-700',
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                )}
                style={{ transitionDelay: `${i * 100 + 600}ms` }}
              >
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <anchor.icon className="h-5 w-5 text-primary" />
                </div>
                <p className="text-xl font-bold text-primary">{anchor.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{anchor.label}</p>
              </div>
            ))}
          </div>

          {/* Closing Line */}
          <div className="mt-16 text-center">
            <p className="text-lg font-medium text-muted-foreground italic">
               "The systems you build today determine what your business can handle tomorrow."
            </p>
            <div className="flex items-center justify-center gap-2 mt-3">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span className="text-sm text-muted-foreground">No commitment. No pressure. Just honest engineering advice.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}