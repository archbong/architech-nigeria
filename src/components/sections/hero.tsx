import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Shield, Zap, BarChart3 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

function AnimatedText({ text, delay = 0 }: { text: string; delay?: number }) {
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  return (
    <span className={cn(
      'inline-block transition-all duration-700',
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    )}>
      {text}
    </span>
  )
}

const trustMetrics = [
  { value: '30+', label: 'Businesses Served' },
  { value: '50+', label: 'Projects Shipped' },
  { value: '₦1M-₦10M+', label: 'Project Range' },
  { value: 'Since 2020', label: 'Trusted Partnership' },
]

export function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center pt-20 lg:pt-0 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-background to-background" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 -z-10 opacity-[0.02]">
        <div className="h-full w-full" style={{
          backgroundImage: 'linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div>
            {/* Trust Badge */}
            <div className={cn(
              'inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8 transition-all duration-700 delay-100',
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            )}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <span className="text-sm text-muted-foreground">
                Trusted by 30+ businesses across Nigeria & beyond
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight">
              <AnimatedText text="We engineer the" delay={300} />{' '}
              <br />
              <span className={cn(
                'text-primary inline-block transition-all duration-700 delay-500',
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              )}>
                systems
              </span>{' '}
              <AnimatedText text="behind" delay={700} />
              <br />
              <AnimatedText text="scalable businesses" delay={900} />
            </h1>

            {/* Subheadline */}
            <p className={cn(
              'mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed transition-all duration-700 delay-1200',
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            )}>
              From MVP to enterprise — we build TypeScript-powered infrastructure 
              that handles millions of transactions, not just pretty interfaces.
            </p>

            {/* CTA Buttons */}
            <div className={cn(
              'mt-8 flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-1400',
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            )}>
              <Link to="/contact">
                <Button size="xl" className="group">
                  Book a Free Strategy Call
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button variant="outline" size="xl" className="group">
                  See Our Work
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>

            {/* Trust Anchors */}
            <div className={cn(
              'mt-12 pt-8 border-t border-border/50 grid grid-cols-4 gap-4 transition-all duration-700 delay-1600',
              loaded ? 'opacity-100' : 'opacity-0'
            )}>
              {trustMetrics.map((metric) => (
                <div key={metric.label}>
                  <p className="text-lg font-bold text-primary">{metric.value}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className={cn(
            'space-y-6 transition-all duration-700 delay-1000',
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}>
            {/* System Architecture Visual */}
            <div className="relative p-8 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-purple-500/5">
              {/* Decorative Code Lines */}
              <div className="space-y-3">
                {[
                  { width: '90%', delay: 0 },
                  { width: '75%', delay: 200 },
                  { width: '85%', delay: 400 },
                  { width: '60%', delay: 600 },
                  { width: '80%', delay: 800 },
                  { width: '45%', delay: 1000 },
                ].map((line, i) => (
                  <div
                    key={i}
                    className={cn(
                      'h-2.5 rounded-full bg-gradient-to-r from-primary/30 to-purple-500/30',
                      loaded ? 'opacity-100' : 'opacity-0'
                    )}
                    style={{
                      width: line.width,
                      transitionDelay: `${line.delay}ms`,
                      transition: 'opacity 500ms ease',
                    }}
                  />
                ))}
              </div>

              {/* Floating Icons */}
              <div className="absolute -top-4 -right-4 h-12 w-12 rounded-xl bg-primary/20 flex items-center justify-center">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <div className="absolute -bottom-4 -left-4 h-12 w-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
                <Zap className="h-6 w-6 text-purple-400" />
              </div>
            </div>

            {/* Trust Signals */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-border/50 bg-background/50 backdrop-blur-sm">
                <BarChart3 className="h-5 w-5 text-primary mb-2" />
                <p className="text-lg font-bold">99.9%</p>
                <p className="text-xs text-muted-foreground">Uptime on deployed systems</p>
              </div>
              <div className="p-4 rounded-xl border border-border/50 bg-background/50 backdrop-blur-sm">
                <Shield className="h-5 w-5 text-green-500 mb-2" />
                <p className="text-lg font-bold">TypeScript</p>
                <p className="text-xs text-muted-foreground">End-to-end type safety</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}