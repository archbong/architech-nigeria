import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, TrendingUp, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ServiceDetails } from './service-details'
import { cn } from '@/lib/utils'
import type { Service } from './types'

interface FeaturedServiceProps {
  service: Service
}

export function FeaturedService({ service }: FeaturedServiceProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <section id={service.id} className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-purple-500/5 overflow-hidden">
          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />

          <div className="relative p-8 lg:p-12">
            <div className="grid lg:grid-cols-5 gap-8 items-start">
              {/* Left - Main Info */}
              <div className="lg:col-span-3 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                    Featured Service
                  </span>
                  <span className="text-sm text-muted-foreground">{service.pricing}</span>
                </div>

                <div>
                  <div className={cn(
                    'h-14 w-14 rounded-xl bg-gradient-to-br flex items-center justify-center mb-4',
                    service.color
                  )}>
                    <service.icon className="h-7 w-7 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold mb-2">{service.title}</h2>
                  <p className="text-lg text-muted-foreground">{service.tagline}</p>
                </div>

                <p className="text-muted-foreground leading-relaxed">{service.description}</p>

                {/* Key Deliverables */}
                <div className="grid sm:grid-cols-2 gap-2">
                  {service.keyDeliverables.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>

                {/* CTA + Expand */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Link to={service.cta.href}>
                    <Button size="lg" className="group">
                      {service.cta.label}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {isExpanded ? 'Show less' : 'See full details'}
                    <ChevronDown className={cn('h-4 w-4 transition-transform', isExpanded && 'rotate-180')} />
                  </button>
                </div>
              </div>

              {/* Right - Metrics & Case Study */}
              <div className="lg:col-span-2 space-y-6">
                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  {service.metrics.map((metric) => (
                    <div key={metric.label} className="p-4 rounded-xl bg-background/50 border border-border/50">
                      <p className="text-2xl font-bold text-primary">{metric.value}</p>
                      <p className="text-xs text-muted-foreground mt-1">{metric.label}</p>
                    </div>
                  ))}
                </div>

                {/* Mini Case Study */}
                <div className="p-4 rounded-xl bg-background/50 border border-border/50">
                  <p className="text-xs text-muted-foreground mb-1">Recent Project</p>
                  <p className="font-semibold text-sm">{service.caseStudy.title}</p>
                  <p className="text-xs text-muted-foreground">{service.caseStudy.client}</p>
                  <p className="text-sm text-green-500 mt-2 flex items-center gap-1">
                    <TrendingUp className="h-3 w-3" /> {service.caseStudy.result}
                  </p>
                </div>
              </div>
            </div>

            {/* Expandable Details */}
            {isExpanded && (
              <div className="mt-8 pt-8 border-t border-border/50">
                <ServiceDetails service={service} />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}