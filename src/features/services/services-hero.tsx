import { cn } from '@/lib/utils'

interface ServicesHeroProps {
  className?: string
}

export function ServicesHero({ className }: ServicesHeroProps) {
  return (
    <section className={cn('pt-32 pb-16 bg-secondary/30', className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm font-medium text-primary mb-4">What we do</p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          Engineering services for<br />
          <span className="text-primary">ambitious businesses</span>
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          From MVPs to enterprise platforms, we build software that drives growth.
        </p>
      </div>
    </section>
  )
}