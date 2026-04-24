import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Play, CheckCircle, Code2, Palette, GraduationCap, ShoppingBag } from 'lucide-react'
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

const trustIndicators = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '30+', label: 'Happy Clients' },
  { value: '4+', label: 'Years Experience' },
  { value: '100%', label: 'Client Satisfaction' },
]

const businessLines = [
  { icon: Code2, title: 'Web Development', description: 'SaaS, MVPs, APIs, and enterprise systems', link: '/services', color: 'from-purple-500 to-purple-600' },
  { icon: Palette, title: 'Brand & Design', description: 'Identity systems, UI/UX, and product design', link: '/services', color: 'from-purple-500 to-purple-600' },
  { icon: GraduationCap, title: 'Academy', description: 'Learn React, SaaS, and backend engineering', link: '/academy', color: 'from-green-500 to-green-600' },
  { icon: ShoppingBag, title: 'Merch Store', description: 'Premium tech apparel for builders', link: '/store', color: 'from-orange-500 to-orange-600' },
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
          {/* Left Column - Text */}
          <div>
            {/* Badge */}
            <div className={cn(
              'inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-secondary/50 mb-8 transition-all duration-700 delay-100',
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            )}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              <span className="text-sm text-muted-foreground">
                Available for new projects
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight">
              <AnimatedText text="We build" delay={300} />{' '}
              <span className={cn(
                'text-primary inline-block transition-all duration-700 delay-500',
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              )}>
                digital infrastructure
              </span>
              <br />
              <AnimatedText text="for ambitious businesses" delay={700} />
            </h1>

            {/* Description */}
            <p className={cn(
              'mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed transition-all duration-700 delay-1000',
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            )}>
              From SaaS platforms to brand identities, we engineer solutions that drive growth. 
              Development, design, education, and merch — all under one roof.
            </p>

            {/* CTA Buttons */}
            <div className={cn(
              'mt-8 flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-1200',
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            )}>
              <Link to="/contact">
                <Button size="xl" className="group">
                  Start a Project
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button variant="outline" size="xl" className="group">
                  <Play className="mr-2 h-5 w-5" />
                  View Our Work
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className={cn(
              'mt-8 flex items-center gap-2 text-sm text-muted-foreground transition-all duration-700 delay-1400',
              loaded ? 'opacity-100' : 'opacity-0'
            )}>
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>Trusted by 30+ businesses across Nigeria and beyond</span>
            </div>
          </div>

          {/* Right Column - Stats & Cards */}
          <div className={cn(
            'space-y-6 transition-all duration-700 delay-800',
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}>
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {trustIndicators.map((stat) => (
                <div key={stat.label} className="p-6 rounded-xl border border-border/50 bg-secondary/30 backdrop-blur-sm">
                  <p className="text-3xl font-bold text-primary">{stat.value}</p>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Business Lines */}
            <div className="grid grid-cols-2 gap-3">
              {businessLines.map((line) => (
                <Link
                  key={line.title}
                  to={line.link}
                  className="group p-4 rounded-xl border border-border/50 bg-secondary/30 backdrop-blur-sm hover:border-primary/50 hover:bg-secondary/50 transition-all duration-300"
                >
                  <div className={cn(
                    'h-8 w-8 rounded-lg bg-gradient-to-br flex items-center justify-center mb-3',
                    line.color
                  )}>
                    <line.icon className="h-4 w-4 text-white" />
                  </div>
                  <h3 className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors">
                    {line.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">{line.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}