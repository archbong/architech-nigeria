import { Link } from 'react-router-dom'
import { ArrowLeft, Shield } from 'lucide-react'
import { SEO } from '@/components/shared/seo'

export function PrivacyPage() {
  return (
    <>
      <SEO title="Privacy Policy" description="How we collect, use, and protect your data." />
      <section className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <Shield className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold">Privacy Policy</h1>
          </div>
          <p className="text-sm text-muted-foreground mb-8">Last updated: January 1, 2026</p>

          <div className="prose prose-invert max-w-none space-y-6">
            <p>At Architech Nigeria, we take your privacy seriously. This policy explains how we collect, use, and protect your information.</p>

            <h2>1. Information We Collect</h2>
            <p>We collect information you provide directly: name, email, phone number, company details, and project information when you contact us or enroll in our programs.</p>
            <p>We automatically collect: browser type, IP address, pages visited, and time spent on our site through analytics tools.</p>

            <h2>2. How We Use Your Information</h2>
            <ul>
              <li>To respond to your inquiries and provide our services</li>
              <li>To process enrollments and payments for our Academy</li>
              <li>To process orders from our Store</li>
              <li>To send updates about our services (with your consent)</li>
              <li>To improve our website and services</li>
            </ul>

            <h2>3. Information Sharing</h2>
            <p>We do not sell your personal information. We may share data with:</p>
            <ul>
              <li>Payment processors (Paystack, Stripe) for transactions</li>
              <li>Email service providers for communications</li>
              <li>Analytics providers to understand site usage</li>
            </ul>

            <h2>4. Data Security</h2>
            <p>We implement appropriate security measures to protect your data, including encryption and secure servers.</p>

            <h2>5. Your Rights</h2>
            <p>You can request access to, correction of, or deletion of your personal data by contacting us.</p>

            <h2>6. Cookies</h2>
            <p>We use essential cookies for site functionality and analytics cookies to understand usage. See our Cookie Policy for details.</p>

            <h2>7. Contact</h2>
            <p>Questions? Contact us at <a href="mailto:legal@architech-nigeria.com">legal@architech-nigeria.com</a>.</p>
          </div>
        </div>
      </section>
    </>
  )
}