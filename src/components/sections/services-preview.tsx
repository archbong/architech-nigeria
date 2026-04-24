import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Code2, Palette, Lightbulb } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const services = [
  {
    icon: Code2,
    title: 'Web Application Development',
    description: 'Custom SaaS platforms, MVPs, API systems, and enterprise-grade web applications built with modern technology stacks.',
    features: ['React & Next.js', 'Node.js & Express', 'Database Architecture', 'Cloud Deployment'],
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: Palette,
    title: 'Product Design & Branding',
    description: 'Complete brand identity systems, UI/UX design, and product design that communicates your value proposition.',
    features: ['Logo Design', 'UI/UX Design', 'Brand Guidelines', 'Design Systems'],
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: Lightbulb,
    title: 'Consulting & Strategy',
    description: 'Technical advisory, SaaS strategy, architecture reviews, and codebase audits for growing businesses.',
    features: ['Architecture Review', 'SaaS Strategy', 'Code Audit', 'Team Scaling'],
    color: 'from-green-500 to-green-600',
  },
]

function ServiceCard({ service, index }: { service: any; index: number }) {
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
      className={cn(
        'group relative p-8 rounded-2xl border border-border/50 bg-secondary/20 backdrop-blur-sm transition-all duration-700',
        'hover:border-primary/50 hover:bg-secondary/40 hover:-translate-y-2 hover:shadow-xl',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      )}
    >
      <div className={cn(
        'h-14 w-14 rounded-xl bg-gradient-to-br flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3',
        service.color
      )}>
        <service.icon className="h-7 w-7 text-white" />
      </div>

      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed mb-6">{service.description}</p>

      <div className="space-y-2 mb-6">
        {service.features.map((feature: string) => (
          <div key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
            <div className="h-1.5 w-1.5 rounded-full bg-primary" />
            {feature}
          </div>
        ))}
      </div>

      <Link to="/services" className="inline-flex items-center text-sm font-medium text-primary hover:underline group/link">
        Learn more
        <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
      </Link>
    </div>
  )
}

export function ServicesPreview() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            What we do best
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            End-to-end digital services for businesses that demand excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/services">
            <Button variant="outline" size="lg" className="group">
              View All Services
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}