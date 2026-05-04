import { useEffect, useRef, useState } from 'react'
import { Star, Quote, Building2 } from 'lucide-react'
import { cn } from '@/lib/utils'

const clientLogos = [
  'Clairesdelight', 'EucalypsInsight', 'ArchitechStore', 'ArchitechAcademy', 'Archiluxe', 'J.R.I.S', 
  'St Paul\s Anglican Church', 'EduBridge'
]

const testimonials = [
  {
    quote: 'Architech didn\'t just build software — they transformed how we operate. We now manage inventory across 50 locations from a single dashboard. That\'s the power of good engineering.',
    name: 'Adebayo Ogunlesi',
    role: 'CEO, Archiluxe',
    rating: 5,
  },
  {
    quote: 'The team understood our business before writing a single line of code. They delivered a platform that processes 10,000+ payments daily without breaking a sweat.',
    name: 'Chinelo Okonkwo',
    role: 'CTO, EucalypsInsight',
    rating: 5,
  },
  {
    quote: 'We needed an MVP in 3 weeks. Architech delivered in 2. The architecture was so clean that our investors\' technical due diligence passed without a single issue.',
    name: 'Tunde Bakare',
    role: 'Founder, ArchitechStore',
    rating: 5,
  },
  {
    quote: 'Their system audit saved us from a costly rewrite. They identified bottlenecks we didn\'t know existed and provided a clear roadmap to fix them.',
    name: 'Amara Eze',
    role: 'VP Engineering, Architech Academy',
    rating: 5,
  },
]

const metrics = [
  { value: '30+', label: 'Businesses Served' },
  { value: '50+', label: 'Projects Shipped' },
  { value: '100%', label: 'Client Satisfaction' },
  { value: '12+', label: 'Industries Across Africa' },
]

function TestimonialCard({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 150)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [index])

  return (
    <div
      ref={ref}
      className={cn(
        'p-6 rounded-xl bg-background border border-border/50 transition-all duration-700 hover:border-primary/30 hover:shadow-lg',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      )}
    >
      <Quote className="h-8 w-8 text-primary/20 mb-3" />
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        "{testimonial.quote}"
      </p>
      <div className="flex gap-1 mb-3">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="h-4 w-4 text-yellow-500 fill-yellow-500" />
        ))}
      </div>
      <div>
        <p className="text-sm font-semibold">{testimonial.name}</p>
        <p className="text-xs text-muted-foreground">{testimonial.role}</p>
      </div>
    </div>
  )
}

export function SocialProof() {
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
    <section className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Client Logos */}
        <div className="mb-16">
          <p className="text-sm font-medium text-muted-foreground text-center mb-8">
            TRUSTED BY BUSINESSES ACROSS NIGERIA & BEYOND
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {clientLogos.map((logo) => (
              <div
                key={logo}
                className="flex items-center gap-2 opacity-50 hover:opacity-80 transition-opacity"
              >
                <Building2 className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm font-semibold text-muted-foreground">{logo}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Metrics Bar */}
        <div
          ref={ref}
          className={cn(
            'grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          {metrics.map((metric) => (
            <div key={metric.label} className="p-4 rounded-xl bg-background border border-border/50 text-center">
              <p className="text-2xl font-bold text-primary">{metric.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{metric.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">What our clients say</h2>
            <p className="text-muted-foreground">
              Don't take our word for it. Here's what the people we've worked with have to say.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, i) => (
              <TestimonialCard key={testimonial.name} testimonial={testimonial} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}