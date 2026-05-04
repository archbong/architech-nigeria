import { Link } from 'react-router-dom'
import { ArrowRight, Target, Heart, Zap, Globe,  MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SEO } from '@/components/shared/seo'

const stats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '30+', label: 'Happy Clients' },
  { value: '4+', label: 'Years Experience' },
  { value: '12+', label: 'Countries Reached' },
]

const values = [
  {
    icon: Target,
    title: 'Engineering Excellence',
    description: 'We don\'t just write code. We engineer solutions that scale, perform, and stand the test of time.',
  },
  {
    icon: Heart,
    title: 'Client Partnership',
    description: 'Your success is our success. We embed ourselves in your vision and work as an extension of your team.',
  },
  {
    icon: Zap,
    title: 'Speed Without Compromise',
    description: 'We move fast but never cut corners. MVPs in weeks, not months. Quality baked into every sprint.',
  },
  {
    icon: Globe,
    title: 'Global Standards, Local Context',
    description: 'World-class engineering with deep understanding of the Nigerian and African market.',
  },
]

const milestones = [
  { year: '2020', event: 'Architech Nigeria founded in Lagos with a mission to build digital infrastructure for African businesses.' },
  { year: '2021', event: 'Delivered first 10 projects. Built MVP for a retail startups that went on to raise ₦2M.' },
  { year: '2022', event: 'Expanded services to include Product Design & Branding. Grew team to 5 engineers.' },
  { year: '2023', event: 'Launched Academy program. Trained 20+ developers. Built SaaS platform for retail giant.' },
  { year: '2024', event: 'Opened merch store. Reached 50+ projects. Clients across 12 countries.' },
]

export function AboutPage() {
  return (
    <>
      <SEO title="About Us" description="Learn about Architech Nigeria's mission, values, and story." />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              We build the<br />
              <span className="text-primary">infrastructure</span> behind<br />
              digital businesses
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              Architech Nigeria is a software engineering and design studio based in Portharcourt. 
              We partner with ambitious businesses to build SaaS platforms, brand identities, 
              and digital products that drive real growth.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-b border-border/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold text-primary">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our story</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                In 2020, while building software for various startups, we noticed a pattern: 
                African businesses were paying premium prices for subpar software from overseas agencies 
                that didn't understand their market.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We founded Architech Nigeria with a simple belief: world-class software engineering 
                should be accessible to African businesses, built by people who understand the local 
                context and global standards.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, we've delivered 10+ projects for clients across Saas, edtech, retail, 
                and religion — from Portharcourt to Paris.
              </p>
            </div>
            <div className="space-y-4">
              {milestones.map((m) => (
                <div key={m.year} className="flex gap-4">
                  <div className="text-right w-16 shrink-0">
                    <span className="text-sm font-bold text-primary">{m.year}</span>
                  </div>
                  <div className="flex-1 pb-4 border-l-2 border-border pl-4">
                    <p className="text-sm">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-secondary/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">What drives us</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((v) => (
              <div key={v.title} className="flex gap-4 p-6 rounded-xl bg-background border border-border/50">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <v.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Based in Portharcourt, Nigeria</h2>
          <p className="text-muted-foreground mb-8">Serving clients worldwide</p>
          <Link to="/contact">
            <Button size="lg" className="group">
              Work with us
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  )
}