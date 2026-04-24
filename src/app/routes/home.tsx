import { Hero } from '@/components/sections/hero'
import { ServicesPreview } from '@/components/sections/services-preview'
import { PortfolioPreview } from '@/components/sections/portfolio-preview'
import { CTA } from '@/components/sections/cta'

export function HomePage() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <PortfolioPreview />
      <CTA />
    </>
  )
}