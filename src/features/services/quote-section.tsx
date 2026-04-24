import { QuoteCalculator } from './quote-calculator'

export function QuoteSection() {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2">Not sure what your project will cost?</h2>
          <p className="text-muted-foreground">
            Answer a few questions and get an instant estimate. No sales calls required.
          </p>
        </div>
        <QuoteCalculator />
      </div>
    </section>
  )
}