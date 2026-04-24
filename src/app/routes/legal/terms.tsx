import { Link } from 'react-router-dom'
import { ArrowLeft, FileText } from 'lucide-react'
import { SEO } from '@/components/shared/seo'

export function TermsPage() {
  return (
    <>
      <SEO title="Terms of Service" description="Terms and conditions for using our services." />
      <section className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <FileText className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold">Terms of Service</h1>
          </div>
          <p className="text-sm text-muted-foreground mb-8">Last updated: January 1, 2026</p>

          <div className="prose prose-invert max-w-none space-y-6">
            <p>By using Architech Nigeria's services, you agree to these terms. Please read them carefully.</p>

            <h2>1. Services</h2>
            <p>We provide web development, product design, consulting, educational courses (Academy), and merchandise (Store). Each service may have additional terms.</p>

            <h2>2. Payments</h2>
            <ul>
              <li>Service projects: 50% upfront, 50% on completion unless otherwise agreed</li>
              <li>Academy courses: Full payment required before access</li>
              <li>Store products: Payment at checkout</li>
              <li>All prices are in Nigerian Naira (₦) unless stated otherwise</li>
            </ul>

            <h2>3. Intellectual Property</h2>
            <p>Upon full payment, clients own the deliverables created for their project. We retain the right to display work in our portfolio unless otherwise agreed.</p>

            <h2>4. Confidentiality</h2>
            <p>We treat all client information as confidential and do not share project details without permission.</p>

            <h2>5. Limitation of Liability</h2>
            <p>Our liability is limited to the amount paid for the specific service. We are not liable for indirect or consequential damages.</p>

            <h2>6. Refunds</h2>
            <ul>
              <li>Services: Refund policies are defined in individual project agreements</li>
              <li>Academy: 7-day refund policy from course start date</li>
              <li>Store: 7-day return policy for physical products in original condition</li>
            </ul>

            <h2>7. Contact</h2>
            <p>Questions? Contact us at <a href="mailto:legal@architech.ng">legal@architech.ng</a>.</p>
          </div>
        </div>
      </section>
    </>
  )
}