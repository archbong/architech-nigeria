import { Link } from 'react-router-dom'
import { ArrowRight, MessageSquare } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function FinalCTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/10 to-purple-500/10">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <MessageSquare className="h-12 w-12 text-primary mx-auto mb-4" />
        <h2 className="text-3xl font-bold mb-4">Ready to build something great?</h2>
        <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
          Let's discuss your project. No commitment, just honest advice from engineers who build for a living.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact">
            <Button size="lg" className="group">
              Start a Conversation
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
          <Link to="/portfolio">
            <Button variant="outline" size="lg">
              View Our Work
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}