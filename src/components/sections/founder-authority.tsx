import { useEffect, useRef, useState } from 'react'
import { Quote, Briefcase } from 'lucide-react'
import { cn } from '@/lib/utils'

export function FounderAuthority() {
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
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-24 bg-secondary/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={cn(
            'text-center transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          )}
        >
          <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <Quote className="h-8 w-8 text-primary" />
          </div>
          
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
            Built by engineers who've been on your side of the table
          </h2>
          
          <div className="max-w-2xl mx-auto text-muted-foreground leading-relaxed space-y-4 mb-8">
            <p>
              Architech Nigeria was founded by a senior engineer who had experience with building a full network infrastructure and led development 
              at multi-national companies processing ₦100M+ monthly. We've experienced firsthand what 
              happens when systems aren't built for scale — and what's possible when they are.
            </p>
            <p>
              This isn't theory. Every recommendation we make comes from real experience building, 
              breaking, and rebuilding production systems.
            </p>
          </div>

          <div className="max-w-md mx-auto p-6 rounded-xl bg-background border border-border/50">
            <Briefcase className="h-5 w-5 text-primary mx-auto mb-3" />
            <p className="text-sm font-medium">
              When you work with us, you're not getting junior developers learning on your project. 
              You're getting senior-level and recommended industrial engineering judgment applied to your business.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}