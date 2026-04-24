import { Code2, Palette, Lightbulb } from 'lucide-react'
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
    title: 'Web Application Development',
    tagline: 'Custom SaaS, MVPs, and enterprise systems',
    description: 'We build scalable, maintainable web applications using modern technology stacks. From initial MVP to full-scale production systems, we engineer solutions that grow with your business.',
    shortDescription: 'Scalable SaaS, MVPs, and enterprise web apps.',
    keyDeliverables: ['Custom SaaS platforms', 'MVP development (2-4 weeks)', 'Cloud deployment'],
    fullDeliverables: [
      'Custom SaaS platforms', 'MVP development (2-4 weeks)', 'RESTful & GraphQL APIs',
      'Database design & optimization', 'Cloud deployment (AWS, Vercel)', 'Maintenance & scaling',
    ],
    process: [
      { step: 'Discovery', description: 'Understanding your business goals and technical requirements' },
      { step: 'Architecture', description: 'Designing scalable system architecture and data models' },
      { step: 'Development', description: 'Agile development with weekly demos and iterations' },
      { step: 'Launch', description: 'Deployment, testing, and production handover' },
    ],
    pricing: 'Starting from ₦500,000',
    color: 'from-purple-500 to-purple-600',
    cta: { label: 'Book a Discovery Call', href: '/contact' },
    metrics: [
      { value: '50+', label: 'Projects Shipped' },
      { value: '2-4', label: 'Weeks to MVP' },
      { value: '99.9%', label: 'Uptime' },
      { value: '12+', label: 'Countries' },
    ],
    caseStudy: {
      title: 'SaaS Inventory Platform',
      client: 'RetailTech Nigeria',
      result: '40% reduction in stockouts',
    },
    featured: true,
  },
  {
    id: 'product-design',
    icon: Palette,
    title: 'Product Design & Branding',
    tagline: 'Identity systems, UI/UX, and visual design',
    description: 'Great products deserve great design. We create brand identities and user experiences that communicate value and drive engagement.',
    shortDescription: 'Brand identity, UI/UX, and design systems.',
    keyDeliverables: ['Logo & brand identity', 'UI/UX design', 'Design systems'],
    fullDeliverables: [
      'Logo & brand identity design', 'UI/UX design (web & mobile)', 'Design systems & component libraries',
      'Brand guidelines documentation', 'Prototyping & user testing', 'Marketing collateral design',
    ],
    process: [
      { step: 'Research', description: 'Market analysis, competitor research, and user personas' },
      { step: 'Concept', description: 'Mood boards, sketches, and initial design directions' },
      { step: 'Design', description: 'High-fidelity designs with iterative feedback loops' },
      { step: 'Delivery', description: 'Final assets, guidelines, and developer handoff' },
    ],
    pricing: 'Starting from ₦200,000',
    color: 'from-purple-500 to-purple-600',
    cta: { label: 'Request a Quote', href: '/contact' },
    metrics: [
      { value: '30+', label: 'Brands Designed' },
      { value: '2-4', label: 'Weeks Delivery' },
      { value: 'Figma', label: 'Industry Standard' },
      { value: '100%', label: 'Client Satisfaction' },
    ],
    caseStudy: {
      title: 'E-commerce Rebrand',
      client: 'StyleHub Lagos',
      result: '300% increase in social engagement',
    },
  },
  {
    id: 'consulting',
    icon: Lightbulb,
    title: 'Consulting & Strategy',
    tagline: 'Technical advisory and architecture reviews',
    description: 'Get expert guidance on your technical decisions. We review your architecture, optimize your processes, and help you make informed technology choices.',
    shortDescription: 'Architecture reviews, strategy, and code audits.',
    keyDeliverables: ['Architecture review', 'SaaS strategy', 'Code audit'],
    fullDeliverables: [
      'Architecture review & recommendations', 'Codebase audit & quality assessment',
      'SaaS strategy & monetization advice', 'Team scaling & hiring guidance',
      'Technology stack evaluation', 'Performance optimization',
    ],
    process: [
      { step: 'Assessment', description: 'Deep dive into your current systems and challenges' },
      { step: 'Analysis', description: 'Identifying gaps, risks, and opportunities' },
      { step: 'Strategy', description: 'Actionable recommendations with prioritization' },
      { step: 'Implementation', description: 'Hands-on support during execution phase' },
    ],
    pricing: 'Starting from ₦150,000/session',
    color: 'from-green-500 to-green-600',
    cta: { label: 'Schedule a Session', href: '/contact' },
    metrics: [
      { value: '20+', label: 'Audits Done' },
      { value: '48h', label: 'Report Delivery' },
      { value: '15+', label: 'Technologies' },
      { value: '10+', label: 'Industries' },
    ],
    caseStudy: {
      title: 'Architecture Overhaul',
      client: 'FinTech Startup',
      result: '10x performance improvement',
    },
  },
]

export function ServicesPage() {
  const featured = services.find(s => s.featured)!
  const secondary = services.filter(s => !s.featured)

  return (
    <>
      <SEO title="Services" description="Web development, product design, and consulting services." />

      <ServicesHero />
      <ServiceNav services={services} />

      {/* Featured Service */}
      <FeaturedService service={featured} />

      {/* Quote Calculator - right after featured */}
      <QuoteSection />

      {/* Secondary Services */}
      {secondary.map((service, i) => (
        <ServiceCard key={service.id} service={service} index={i} />
      ))}

      <WhyChooseUs />
      <FAQSection />
      <FinalCTA />
    </>
  )
}