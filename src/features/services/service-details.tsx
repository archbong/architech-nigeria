import { CheckCircle } from 'lucide-react'
import type { Service } from './types'

interface ServiceDetailsProps {
  service: Service
}

export function ServiceDetails({ service }: ServiceDetailsProps) {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {/* Full Deliverables */}
      <div>
        <h4 className="font-semibold mb-4">What you get</h4>
        <ul className="space-y-2">
          {service.fullDeliverables.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm">
              <CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Process */}
      <div>
        <h4 className="font-semibold mb-4">Our process</h4>
        <div className="space-y-3">
          {service.process.map((step, i) => (
            <div key={step.step} className="flex gap-3">
              <div className="flex flex-col items-center">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">
                  {i + 1}
                </div>
                {i < service.process.length - 1 && <div className="w-px h-full bg-border my-1" />}
              </div>
              <div className="pb-2">
                <p className="font-medium text-sm">{step.step}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}