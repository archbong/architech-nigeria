import { Zap, Shield, Users, Trophy } from 'lucide-react'

const reasons = [
  {
    icon: Zap,
    title: 'Speed Without Compromise',
    description: 'MVPs in 2-4 weeks. Production apps in 6-12. We move fast but never ship broken code.',
  },
  {
    icon: Shield,
    title: 'Engineering-Backed Decisions',
    description: 'Not just developers — engineers who understand architecture, scale, and maintainability.',
  },
  {
    icon: Users,
    title: 'Extension of Your Team',
    description: 'We embed in your workflow, use your tools, and communicate daily. No black boxes.',
  },
  {
    icon: Trophy,
    title: 'Proven Track Record',
    description: '50+ projects delivered across fintech, edtech, retail, and healthcare. 100% client satisfaction.',
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why work with us</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're not just another agency. We're your engineering partner.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {reasons.map((reason) => (
            <div key={reason.title} className="flex gap-4 p-6 rounded-xl border border-border/50 bg-background">
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <reason.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">{reason.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}