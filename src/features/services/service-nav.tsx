import { cn } from '@/lib/utils'
import type { Service } from './types'

interface ServiceNavProps {
  services: Service[]
}

export function ServiceNav({ services }: ServiceNavProps) {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="sticky top-16 z-40 bg-background/95 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-1 overflow-x-auto py-3 scrollbar-hide">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => scrollTo(service.id)}
              className={cn(
                'px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all',
                'text-muted-foreground hover:text-foreground hover:bg-secondary',
                service.featured && 'text-primary'
              )}
            >
              {service.title.split(' ').slice(0, 2).join(' ')}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}