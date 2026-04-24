import type { LucideIcon } from 'lucide-react'

export interface ServiceCTA {
  label: string
  href: string
}

export interface ServiceProcess {
  step: string
  description: string
}

export interface ServiceMetric {
  value: string
  label: string
}

export interface ServiceCaseStudy {
  title: string
  client: string
  result: string
}

export interface Service {
  id: string
  icon: LucideIcon
  title: string
  tagline: string
  description: string
  shortDescription: string
  keyDeliverables: string[]
  fullDeliverables: string[]
  process: ServiceProcess[]
  pricing: string
  color: string
  cta: ServiceCTA
  metrics: ServiceMetric[]
  caseStudy: ServiceCaseStudy
  featured?: boolean
}

export interface FAQ {
  question: string
  answer: string
  category: 'budget' | 'timeline' | 'trust' | 'collaboration'
}