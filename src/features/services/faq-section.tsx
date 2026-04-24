import { useState } from 'react'
import { cn } from '@/lib/utils'
import type { FAQ } from './types'

const faqs: FAQ[] = [
  {
    question: 'What if my budget is limited?',
    answer: 'We offer flexible engagement models including MVP-only builds starting from ₦500,000. We can also phase larger projects into milestones to spread costs.',
    category: 'budget',
  },
  {
    question: 'How do I know the timeline won\'t slip?',
    answer: 'We work in weekly sprints with demos every Friday. You see progress in real-time. 90% of our projects deliver on or ahead of schedule.',
    category: 'timeline',
  },
  {
    question: 'What if I\'m not technical? How do we communicate?',
    answer: 'We translate technical decisions into business outcomes. No jargon, no confusion. You get clear weekly updates and a dedicated project lead.',
    category: 'collaboration',
  },
  {
    question: 'Can you work with my existing development team?',
    answer: 'Yes. We can augment your team for specific features, review code, or provide architectural guidance while your team handles execution.',
    category: 'collaboration',
  },
  {
    question: 'What happens after the project is delivered?',
    answer: 'We offer 30 days of post-launch support included. Extended maintenance packages are available for ongoing updates, monitoring, and scaling.',
    category: 'trust',
  },
  {
    question: 'How do I know you can deliver quality work?',
    answer: 'Check our portfolio for 50+ shipped projects. We also offer a code review call where we analyze your existing codebase for free to demonstrate our expertise.',
    category: 'trust',
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Honest answers to real questions</h2>
          <p className="text-muted-foreground">No sales pitch. Just transparency.</p>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-border/50 rounded-xl bg-background">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-secondary/50 transition-colors rounded-xl"
              >
                <span className="font-medium pr-8">{faq.question}</span>
                <span className={cn('text-xl transition-transform duration-300', openIndex === i && 'rotate-45')}>
                  +
                </span>
              </button>
              <div
                className={cn(
                  'grid transition-all duration-300',
                  openIndex === i ? 'grid-rows-[1fr] pb-4' : 'grid-rows-[0fr]'
                )}
              >
                <div className="overflow-hidden">
                  <p className="px-6 text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}