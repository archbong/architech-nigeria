import { Link } from 'react-router-dom'
import { ArrowLeft, RotateCcw } from 'lucide-react'
import { SEO } from '@/components/shared/seo'

export function RefundsPage() {
  return (
    <>
      <SEO title="Refund Policy" description="Our refund and returns policy." />
      <section className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <RotateCcw className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold">Refund & Returns Policy</h1>
          </div>
          <p className="text-sm text-muted-foreground mb-8">Last updated: January 1, 2026</p>

          <div className="prose prose-invert max-w-none space-y-6">
            <h2>Services (Development, Design, Consulting)</h2>
            <p>Refund terms are specified in individual project agreements. Generally:</p>
            <ul>
              <li>Deposits are non-refundable once work has commenced</li>
              <li>If we fail to deliver as agreed, a partial or full refund may apply</li>
              <li>Milestone-based refunds are evaluated case by case</li>
            </ul>

            <h2>Academy Courses</h2>
            <ul>
              <li>Full refund within 7 days of course start date</li>
              <li>No refunds after 7 days or if significant course content has been accessed</li>
              <li>Contact us to request a refund</li>
            </ul>

            <h2>Store Products</h2>
            <ul>
              <li>7-day return window from delivery date</li>
              <li>Items must be unused and in original packaging</li>
              <li>Return shipping costs are the buyer's responsibility</li>
              <li>Refunds processed within 5-7 business days after we receive the return</li>
              <li>Sale items are final sale (no returns)</li>
            </ul>

            <h2>How to Request a Refund</h2>
            <p>Email <a href="mailto:support@architech-nigeria.com">support@architech-nigeria.com</a> with your order/project details and reason for refund.</p>
          </div>
        </div>
      </section>
    </>
  )
}