import { Code2, Palette, Lightbulb, Server } from 'lucide-react'
import { Link } from 'react-router-dom'
import { SEO } from '@/components/shared/seo'
import { ServicesHero } from '@/features/services/services-hero'
import { ServiceNav } from '@/features/services/service-nav'
import { FeaturedService } from '@/features/services/featured-service'
import { ServiceCard } from '@/features/services/service-card'
import { QuoteSection } from '@/features/services/quote-section'
import { WhyChooseUs } from '@/features/services/why-choose-us'
import { FAQSection } from '@/features/services/faq-section'
import { FinalCTA } from '@/features/services/final-cta'
import type { Service } from '@/features/services/types'

const services: Service[] = [
  {
    id: 'web-development',
    icon: Code2,
    title: 'Web Application Engineering',
    tagline: 'Scalable SaaS platforms, MVPs, and enterprise-grade systems',
    description:
      'We engineer high-performance web applications built for scalability, reliability, and long-term maintainability. From fast-moving MVPs to enterprise platforms, our solutions are designed to support real business growth without compromising architecture quality.',
    shortDescription:
      'Custom SaaS platforms and scalable enterprise web applications.',
    keyDeliverables: [
      'Custom SaaS platforms',
      'Rapid MVP development',
      'Cloud-native deployment',
    ],
    fullDeliverables: [
      'Custom SaaS platform development',
      'Rapid MVP delivery (2–4 weeks)',
      'RESTful & real-time API integration',
      'Database architecture & optimization',
      'Cloud infrastructure deployment (AWS, Vercel)',
      'Performance optimization & scaling',
    ],
    process: [
      {
        step: 'Discovery',
        description:
          'Understanding business objectives, user requirements, and technical constraints.',
      },
      {
        step: 'Architecture',
        description:
          'Designing scalable application architecture, infrastructure, and data systems.',
      },
      {
        step: 'Engineering',
        description:
          'Agile product development with iterative releases and transparent communication.',
      },
      {
        step: 'Deployment',
        description:
          'Production deployment, testing, monitoring, and long-term support readiness.',
      },
    ],
    pricing: 'Starting from ₦500,000',
    color: 'from-purple-500 to-purple-600',
    cta: {
      label: 'Book a Discovery Call',
      href: '/contact',
    },
    metrics: [
      { value: '6+', label: 'Projects Delivered' },
      { value: '2–4', label: 'Weeks to MVP' },
      { value: '99.9%', label: 'Infrastructure Uptime' },
      { value: '2+', label: 'Countries Served' },
    ],
    caseStudy: {
      title: 'SaaS Inventory Platform',
      client: 'EucalypsInsight',
      result: '40% improvement in operational tracking efficiency',
    },
    featured: true,
  },
  {
    id: 'api-design-and-development',
    icon: Server,
    title: 'API Engineering & Integrations',
    tagline: 'Reliable APIs and backend infrastructure for modern applications',
    description:
      'We design and develop secure, scalable APIs that power modern digital products and distributed systems. From third-party integrations to enterprise backend services, we build infrastructure engineered for performance and interoperability.',
    shortDescription:
      'Scalable APIs, integrations, and backend service infrastructure.',
    keyDeliverables: [
      'RESTful & GraphQL APIs',
      'Third-party integrations',
      'Backend service architecture',
    ],
    fullDeliverables: [
      'Custom API development',
      'RESTful & GraphQL architecture',
      'Third-party service integrations',
      'Authentication & authorization systems',
      'Database design & optimization',
      'Cloud deployment & monitoring',
    ],
    process: [
      {
        step: 'Discovery',
        description:
          'Understanding business workflows, integration requirements, and scalability goals.',
      },
      {
        step: 'Architecture',
        description:
          'Designing secure, maintainable API structures and backend infrastructure.',
      },
      {
        step: 'Engineering',
        description:
          'Building reliable services with testing, documentation, and version control.',
      },
      {
        step: 'Deployment',
        description:
          'Deploying production-ready APIs with monitoring, security, and scaling support.',
      },
    ],
    pricing: 'Starting from ₦800,000',
    color: 'from-indigo-500 to-indigo-600',
    cta: {
      label: 'Book a Discovery Call',
      href: '/contact',
    },
    metrics: [
      { value: '10+', label: 'APIs Engineered' },
      { value: '99.9%', label: 'Service Reliability' },
      { value: 'Secure', label: 'Authentication Systems' },
      { value: 'Scalable', label: 'Cloud Infrastructure' },
    ],
    caseStudy: {
      title: 'Enterprise API Infrastructure',
      client: 'EucalypsInsight',
      result: 'Centralized services with improved system interoperability',
    },
    featured: true,
  },
  {
    id: 'product-design',
    icon: Palette,
    title: 'Product Design & Brand Systems',
    tagline: 'Strategic branding, UI/UX design, and digital experiences',
    description:
      'We design modern digital experiences and visual identities that communicate credibility, improve usability, and strengthen product adoption. Our process combines strategy, aesthetics, and usability to create products users trust.',
    shortDescription:
      'UI/UX design, brand systems, and modern digital experiences.',
    keyDeliverables: [
      'Brand identity systems',
      'UI/UX design',
      'Design systems & prototypes',
    ],
    fullDeliverables: [
      'Logo & visual identity design',
      'UI/UX design for web & mobile',
      'Design systems & component libraries',
      'Brand guidelines documentation',
      'Interactive prototyping & user flows',
      'Marketing & digital collateral design',
    ],
    process: [
      {
        step: 'Research',
        description:
          'Analyzing users, competitors, market positioning, and product goals.',
      },
      {
        step: 'Strategy',
        description:
          'Defining brand direction, user experience flows, and interface structure.',
      },
      {
        step: 'Design',
        description:
          'Creating polished high-fidelity visuals with iterative refinement.',
      },
      {
        step: 'Delivery',
        description:
          'Providing production-ready assets, systems, and developer handoff.',
      },
    ],
    pricing: 'Starting from ₦200,000',
    color: 'from-pink-500 to-rose-600',
    cta: {
      label: 'Request a Quote',
      href: '/contact',
    },
    metrics: [
      { value: '30+', label: 'Brands Designed' },
      { value: '2–4', label: 'Weeks Delivery' },
      { value: 'Figma', label: 'Industry Standard Workflow' },
      { value: '100%', label: 'Client Satisfaction Focus' },
    ],
    caseStudy: {
      title: 'E-commerce Brand Transformation',
      client: 'StyleHub Lagos',
      result: '300% increase in digital engagement',
    },
  },
  {
    id: 'consulting',
    icon: Lightbulb,
    title: 'Technical Consulting & Strategy',
    tagline: 'Architecture reviews, technical leadership, and growth strategy',
    description:
      'We help businesses make informed technical decisions through architecture reviews, engineering strategy, and product advisory. Our consulting services are designed to reduce technical debt, improve scalability, and align technology with business growth.',
    shortDescription:
      'Technical advisory, architecture reviews, and engineering strategy.',
    keyDeliverables: [
      'Architecture assessments',
      'Codebase audits',
      'Technical growth strategy',
    ],
    fullDeliverables: [
      'System architecture reviews',
      'Codebase quality audits',
      'Scalability & infrastructure assessments',
      'Technical product strategy',
      'Engineering team advisory & scaling',
      'Performance optimization recommendations',
    ],
    process: [
      {
        step: 'Assessment',
        description:
          'Evaluating your current systems, workflows, and technical challenges.',
      },
      {
        step: 'Analysis',
        description:
          'Identifying risks, inefficiencies, bottlenecks, and scaling limitations.',
      },
      {
        step: 'Strategy',
        description:
          'Delivering actionable technical recommendations and implementation priorities.',
      },
      {
        step: 'Execution Support',
        description:
          'Providing ongoing guidance during implementation and optimization.',
      },
    ],
    pricing: 'Starting from ₦150,000/session',
    color: 'from-emerald-500 to-green-600',
    cta: {
      label: 'Schedule a Consultation',
      href: '/contact',
    },
    metrics: [
      { value: '20+', label: 'Technical Audits Completed' },
      { value: '48h', label: 'Average Report Delivery' },
      { value: '15+', label: 'Technologies Evaluated' },
      { value: '10+', label: 'Industries Supported' },
    ],
    caseStudy: {
      title: 'FinTech Infrastructure Optimization',
      client: 'FinTech Startup',
      result: '10x improvement in platform performance',
    },
  },
]

// Which stage → service fit matrix
const stageRows = [
  {
    stage: 'Idea · Pre-seed',
    emoji: '🌱',
    development: true,
    consulting: false,
    design: true,
  },
  {
    stage: 'Growing · Seed',
    emoji: '🚀',
    development: true,
    consulting: true,
    design: true,
  },
  {
    stage: 'Scaling · Series A+',
    emoji: '📈',
    development: false,
    consulting: true,
    design: false,
  },
]

const FitCell = ({ fit }: { fit: boolean }) =>
  fit ? (
    <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-400">
      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
      Best fit
    </span>
  ) : (
    <span className="text-xs text-muted-foreground/30 font-medium">—</span>
  )

export function ServicesPage() {
  const featuredServices = services.filter(s => s.featured)
  const secondary = services.filter(s => !s.featured)

  return (
    <>
      <SEO title="Services" description="Web development, product design, and consulting services." />

      <ServicesHero />

      {/* ── STAGE FIT SECTION ── */}
      <section className="py-16 bg-secondary/30 border-y border-border/40">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">

          {/* Heading */}
          <div className="text-center mb-10">
            <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground/50 mb-3">
              Find your fit
            </p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">
              Which service fits your stage?
            </h2>
            <p className="text-sm text-muted-foreground max-w-sm mx-auto leading-relaxed">
              Different stages call for different expertise. Here's where we add the most value.
            </p>
          </div>

          {/* Fit table — desktop */}
          <div className="hidden md:block rounded-2xl border border-border/50 overflow-hidden bg-background">
            {/* Table header */}
            <div className="grid grid-cols-4 border-b border-border/50 bg-secondary/40">
              <div className="px-5 py-3.5">
                <span className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground/50">
                  Stage
                </span>
              </div>
              {['Development', 'Consulting', 'Design'].map(col => (
                <div key={col} className="px-5 py-3.5 border-l border-border/40">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground/50">
                    {col}
                  </span>
                </div>
              ))}
            </div>

            {/* Rows */}
            {stageRows.map((row, i) => (
              <div
                key={row.stage}
                className={`grid grid-cols-4 ${i < stageRows.length - 1 ? 'border-b border-border/40' : ''}`}
              >
                <div className="px-5 py-4 flex items-center gap-2.5">
                  <span className="text-base">{row.emoji}</span>
                  <span className="text-sm font-semibold text-foreground">{row.stage}</span>
                </div>
                <div className="px-5 py-4 border-l border-border/40 flex items-center">
                  <FitCell fit={row.development} />
                </div>
                <div className="px-5 py-4 border-l border-border/40 flex items-center">
                  <FitCell fit={row.consulting} />
                </div>
                <div className="px-5 py-4 border-l border-border/40 flex items-center">
                  <FitCell fit={row.design} />
                </div>
              </div>
            ))}
          </div>

          {/* Mobile cards */}
          <div className="md:hidden space-y-3">
            {stageRows.map(row => (
              <div
                key={row.stage}
                className="rounded-xl border border-border/50 bg-background p-4"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-lg">{row.emoji}</span>
                  <span className="text-sm font-bold">{row.stage}</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { label: 'Development', fit: row.development },
                    { label: 'Consulting', fit: row.consulting },
                    { label: 'Design', fit: row.design },
                  ].map(({ label, fit }) => (
                    <div key={label} className="text-center">
                      <p className="text-[10px] font-bold uppercase tracking-wide text-muted-foreground/40 mb-1">{label}</p>
                      <FitCell fit={fit} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom nudge */}
          <p className="text-center text-sm text-muted-foreground mt-8">
            Not sure which fits?{' '}
            <Link
              to="/contact"
              className="text-primary font-semibold hover:text-primary/70 transition-colors underline underline-offset-2"
            >
              Book a free strategy call
            </Link>{' '}
            and we'll help you decide.
          </p>
        </div>
      </section>

      <ServiceNav services={services} />

      {featuredServices.map((service) => (
        <FeaturedService key={service.id} service={service} />
      ))}

      <QuoteSection />

      {secondary.map((service, i) => (
        <ServiceCard key={service.id} service={service} index={i} />
      ))}

      <WhyChooseUs />
      <FAQSection />
      <FinalCTA />
    </>
  )
}