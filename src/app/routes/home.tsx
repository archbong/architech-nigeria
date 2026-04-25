import { Hero } from '@/components/sections/hero'
// import { ServicesPreview } from '@/components/sections/services-preview'
// import { PortfolioPreview } from '@/components/sections/portfolio-preview'
import { CTA } from '@/components/sections/cta'
import { ProblemSolution } from '@/components/sections/problem-solution'
import { SolutionsSegments } from '@/components/sections/solutions-segments'
import { WhyUs } from '@/components/sections/why-us'
import { CaseStudy } from '@/components/sections/case-study'
import { Process } from '@/components/sections/process'
import { FreeAudit } from '@/components/sections/free-audit'
import { PreQualification } from '@/components/sections/pre-qualification'
import { SocialProof } from '@/components/sections/social-proof'
import { FounderAuthority } from '@/components/sections/founder-authority'

export function HomePage() {
  return (
    <>
      <Hero />
      <ProblemSolution />
      <SolutionsSegments />
      <WhyUs />
      <CaseStudy />
      <Process />
      <FounderAuthority />
      <FreeAudit />
      <PreQualification />
      <SocialProof />
      <CTA />
    </>
  )
}