import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ServiceDetails } from './service-details'
import { cn } from '@/lib/utils'
import type { Service } from './types'

interface ServiceCardProps {
  service: Service
  index: number
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const isReversed = index % 2 === 1

  return (
    <section id={service.id} className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={cn(
          'grid lg:grid-cols-5 gap-8 items-start',
          isReversed && 'lg:grid-flow-dense'
        )}>
          {/* Content */}
          <div className={cn('lg:col-span-3 space-y-6', isReversed && 'lg:col-start-3')}>
            <div className={cn(
              'h-14 w-14 rounded-xl bg-gradient-to-br flex items-center justify-center',
              service.color
            )}>
              <service.icon className="h-7 w-7 text-white" />
            </div>
            <h2 className="text-2xl font-bold">{service.title}</h2>
            <p className="text-primary font-medium">{service.tagline}</p>
            <p className="text-muted-foreground leading-relaxed">{service.description}</p>

            <div className="grid sm:grid-cols-2 gap-2">
              {service.keyDeliverables.map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 shrink-0" />
                  {item}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link to={service.cta.href}>
                <Button size="lg" variant={index === 0 ? 'default' : 'outline'} className="group">
                  {service.cta.label}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
              >
                {isExpanded ? 'Show less' : 'Full details'}
                <ChevronDown className={cn('h-4 w-4 transition-transform', isExpanded && 'rotate-180')} />
              </button>
            </div>
          </div>

          {/* Metrics Sidebar */}
          <div className={cn(
            'lg:col-span-2 grid grid-cols-2 gap-4',
            isReversed && 'lg:col-start-1'
          )}>
            {service.metrics.map((metric) => (
              <div key={metric.label} className="p-4 rounded-xl bg-secondary/30 border border-border/50">
                <p className="text-2xl font-bold text-primary">{metric.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{metric.label}</p>
              </div>
            ))}
            <div className="col-span-2 p-4 rounded-xl bg-secondary/30 border border-border/50">
              <p className="text-xs text-muted-foreground mb-1">Recent Project</p>
              <p className="font-semibold text-sm">{service.caseStudy.title}</p>
              <p className="text-xs text-muted-foreground">{service.caseStudy.client}</p>
            </div>
          </div>
        </div>

        {isExpanded && (
          <div className="mt-8 pt-8 border-t border-border/50">
            <ServiceDetails service={service} />
          </div>
        )}
      </div>
    </section>
  )
}