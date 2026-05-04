import { useState } from 'react'
import { Check, Calculator, ArrowRight, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

type ServiceType = 'development' | 'design' | 'consulting'

// interface QuoteState {
//   serviceType: ServiceType
//   projectSize: string
//   complexity: string
//   timeline: string
//   features: string[]
//   price: number | null
// }

const serviceOptions = {
  development: {
    title: 'Web Application Development',
    sizes: [
      { value: 'mvp', label: 'MVP / Prototype', multiplier: 0.5 },
      { value: 'standard', label: 'Standard Application', multiplier: 1.8 },
      { value: 'enterprise', label: 'Enterprise Platform', multiplier: 3 },
    ],
    complexities: [
      { value: 'simple', label: 'Simple (CRUD, basic auth)', multiplier: 1.2 },
      { value: 'moderate', label: 'Moderate (APIs, integrations)', multiplier: 2.1 },
      { value: 'complex', label: 'Complex (Real-time, AI, multi-tenant)', multiplier: 3.1 },
    ],
    timelines: [
      { value: '1-month', label: '1 Month (Rush)', multiplier: 1.5 },
      { value: '3-months', label: '3 Months (Standard)', multiplier: 1 },
      { value: '6-months', label: '6+ Months (Relaxed)', multiplier: 1.1 },
    ],
    features: [
      { id: 'auth', label: 'User Authentication', price: 200000 },
      { id: 'dashboard', label: 'Admin Dashboard', price: 300000 },
      { id: 'api', label: 'REST API', price: 250000 },
      { id: 'payment', label: 'Payment Integration', price: 200000 },
      { id: 'notifications', label: 'Email/SMS Notifications', price: 150000 },
      { id: 'reports', label: 'Analytics & Reports', price: 300000 },
      { id: 'roles', label: 'Role-Based Access', price: 200000 },
      { id: 'upload', label: 'File Upload System', price: 150000 },
      { id: 'realtime', label: 'Real-Time Features', price: 350000 },
      { id: 'multi-tenant', label: 'Multi-Tenant Architecture', price: 500000 },
    ],
    basePrice: 500000,
  },
  design: {
    title: 'Product Design & Branding',
    sizes: [
      { value: 'single', label: 'Single Page / Landing Page', multiplier: 0.3 },
      { value: 'brand', label: 'Complete Brand Identity', multiplier: 1 },
      { value: 'full', label: 'Full Product Design', multiplier: 2 },
    ],
    complexities: [
      { value: 'simple', label: 'Basic (Logo + Colors)', multiplier: 0.5 },
      { value: 'moderate', label: 'Standard (Full Brand + UI)', multiplier: 1 },
      { value: 'complex', label: 'Complex (Design System)', multiplier: 1.5 },
    ],
    timelines: [
      { value: '1-week', label: '1 Week (Rush)', multiplier: 1.3 },
      { value: '2-weeks', label: '2 Weeks (Standard)', multiplier: 1 },
      { value: '4-weeks', label: '4+ Weeks (Relaxed)', multiplier: 0.9 },
    ],
    features: [
      { id: 'logo', label: 'Logo Design', price: 80000 },
      { id: 'brand-guide', label: 'Brand Guidelines', price: 100000 },
      { id: 'ui-kit', label: 'UI Component Kit', price: 150000 },
      { id: 'wireframes', label: 'Wireframes & Prototypes', price: 120000 },
      { id: 'illustrations', label: 'Custom Illustrations', price: 100000 },
      { id: 'social', label: 'Social Media Templates', price: 50000 },
      { id: 'packaging', label: 'Packaging Design', price: 80000 },
    ],
    basePrice: 200000,
  },
  consulting: {
    title: 'Consulting & Strategy',
    sizes: [
      { value: 'session', label: 'Single Session', multiplier: 0.25 },
      { value: 'package', label: 'Consulting Package (5 sessions)', multiplier: 1 },
      { value: 'retainer', label: 'Monthly Retainer', multiplier: 3 },
    ],
    complexities: [
      { value: 'review', label: 'Code/Architecture Review', multiplier: 0.7 },
      { value: 'strategy', label: 'Strategy & Planning', multiplier: 1 },
      { value: 'implementation', label: 'Hands-On Implementation', multiplier: 1.5 },
    ],
    timelines: [
      { value: '1-day', label: '1 Day (Intensive)', multiplier: 1 },
      { value: '1-week', label: '1 Week', multiplier: 0.9 },
      { value: 'ongoing', label: 'Ongoing Support', multiplier: 1.2 },
    ],
    features: [
      { id: 'audit', label: 'Codebase Audit Report', price: 100000 },
      { id: 'roadmap', label: 'Technical Roadmap', price: 150000 },
      { id: 'architecture', label: 'Architecture Document', price: 200000 },
      { id: 'hiring', label: 'Hiring Strategy', price: 80000 },
      { id: 'training', label: 'Team Training Session', price: 120000 },
    ],
    basePrice: 150000,
  },
}

const formatNaira = (amount: number) => {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

export function QuoteCalculator() {
  const [serviceType, setServiceType] = useState<ServiceType>('development')
  const [projectSize, setProjectSize] = useState('')
  const [complexity, setComplexity] = useState('')
  const [timeline, setTimeline] = useState('')
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([])
  const [showPrice, setShowPrice] = useState(false)

  const config = serviceOptions[serviceType]

  const calculatePrice = () => {
    const sizeMultiplier = config.sizes.find(s => s.value === projectSize)?.multiplier || 1
    const complexityMultiplier = config.complexities.find(c => c.value === complexity)?.multiplier || 1
    const timelineMultiplier = config.timelines.find(t => t.value === timeline)?.multiplier || 1
    
    const featuresTotal = selectedFeatures.reduce((sum, fid) => {
      const feature = config.features.find(f => f.id === fid)
      return sum + (feature?.price || 0)
    }, 0)

    return Math.round(
      (config.basePrice * sizeMultiplier * complexityMultiplier * timelineMultiplier) + featuresTotal
    )
  }

  const toggleFeature = (featureId: string) => {
    setSelectedFeatures(prev =>
      prev.includes(featureId)
        ? prev.filter(id => id !== featureId)
        : [...prev, featureId]
    )
  }

  const canCalculate = projectSize && complexity && timeline
  const price = canCalculate ? calculatePrice() : null

  return (
    <div className="space-y-6">
      {/* Service Type Selector */}
      <div>
        <label className="block text-sm font-medium mb-3">What service do you need?</label>
        <div className="grid grid-cols-3 gap-2">
          {(['development', 'design', 'consulting'] as ServiceType[]).map((type) => (
            <button
              key={type}
              onClick={() => {
                setServiceType(type)
                setProjectSize('')
                setComplexity('')
                setTimeline('')
                setSelectedFeatures([])
                setShowPrice(false)
              }}
              className={cn(
                'p-3 rounded-xl border-2 text-center transition-all',
                serviceType === type
                  ? 'border-primary bg-primary/10 text-primary'
                  : 'border-border hover:border-primary/50'
              )}
            >
              <span className="text-sm font-medium capitalize">{type}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Project Size */}
      <div>
        <label className="block text-sm font-medium mb-3">Project scope?</label>
        <div className="space-y-2">
          {config.sizes.map((size) => (
            <button
              key={size.value}
              onClick={() => { setProjectSize(size.value); setShowPrice(false) }}
              className={cn(
                'w-full p-3 rounded-lg border text-left transition-all',
                projectSize === size.value
                  ? 'border-primary bg-primary/5'
                  : 'border-border hover:border-primary/50'
              )}
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">{size.label}</span>
                {projectSize === size.value && <Check className="h-4 w-4 text-primary" />}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Complexity */}
      <div>
        <label className="block text-sm font-medium mb-3">How complex is the project?</label>
        <div className="space-y-2">
          {config.complexities.map((c) => (
            <button
              key={c.value}
              onClick={() => { setComplexity(c.value); setShowPrice(false) }}
              className={cn(
                'w-full p-3 rounded-lg border text-left transition-all',
                complexity === c.value
                  ? 'border-primary bg-primary/5'
                  : 'border-border hover:border-primary/50'
              )}
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">{c.label}</span>
                {complexity === c.value && <Check className="h-4 w-4 text-primary" />}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div>
        <label className="block text-sm font-medium mb-3">When do you need this?</label>
        <div className="space-y-2">
          {config.timelines.map((t) => (
            <button
              key={t.value}
              onClick={() => { setTimeline(t.value); setShowPrice(false) }}
              className={cn(
                'w-full p-3 rounded-lg border text-left transition-all',
                timeline === t.value
                  ? 'border-primary bg-primary/5'
                  : 'border-border hover:border-primary/50'
              )}
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">{t.label}</span>
                {timeline === t.value && <Check className="h-4 w-4 text-primary" />}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Additional Features */}
      <div>
        <label className="block text-sm font-medium mb-3">Additional features?</label>
        <div className="grid grid-cols-2 gap-2">
          {config.features.map((feature) => (
            <button
              key={feature.id}
              onClick={() => toggleFeature(feature.id)}
              className={cn(
                'p-3 rounded-lg border-2 text-left transition-all',
                selectedFeatures.includes(feature.id)
                  ? 'border-primary bg-primary/5'
                  : 'border-border hover:border-primary/50'
              )}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium">{feature.label}</span>
                <span className="text-xs text-muted-foreground">{formatNaira(feature.price)}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Calculate Button */}
      <Button
        onClick={() => setShowPrice(true)}
        disabled={!canCalculate}
        className="w-full group"
        size="lg"
      >
        <Calculator className="mr-2 h-4 w-4" />
        Calculate Estimate
      </Button>

      {/* Price Display */}
      {showPrice && price && (
        <div className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-purple-500/10 border border-primary/30 text-center animate-in fade-in slide-in-from-bottom-4">
          <Sparkles className="h-8 w-8 text-primary mx-auto mb-3" />
          <p className="text-sm text-muted-foreground mb-1">Estimated Price Range</p>
          <p className="text-4xl font-bold text-primary mb-2">
            {formatNaira(price)}
          </p>
          <p className="text-xs text-muted-foreground mb-6">
            This is an automated estimate. Final pricing may vary based on specific requirements.
          </p>
          <Link to="/contact">
            <Button className="w-full group">
              Discuss Your Project
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      )}
    </div>
  )
}