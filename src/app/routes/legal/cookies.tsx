import { Link } from 'react-router-dom'
import { ArrowLeft, Cookie } from 'lucide-react'
import { SEO } from '@/components/shared/seo'

export function CookiesPage() {
  return (
    <>
      <SEO title="Cookie Policy" description="How we use cookies on our website." />
      <section className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <Cookie className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold">Cookie Policy</h1>
          </div>
          <p className="text-sm text-muted-foreground mb-8">Last updated: January 1, 2026</p>

          <div className="prose prose-invert max-w-none space-y-6">
            <h2>What Are Cookies?</h2>
            <p>Cookies are small text files stored on your device when you visit websites. They help sites remember your preferences and improve your experience.</p>

            <h2>Cookies We Use</h2>
            <ul>
              <li><strong>Essential:</strong> Required for site functionality (session management, security)</li>
              <li><strong>Analytics:</strong> Understand how visitors use our site (page views, time on site)</li>
              <li><strong>Preferences:</strong> Remember your settings (theme, language)</li>
            </ul>

            <h2>Third-Party Cookies</h2>
            <p>We may use cookies from Google Analytics and other service providers for analytics purposes.</p>

            <h2>Managing Cookies</h2>
            <p>You can disable cookies in your browser settings. Note that some features may not work properly without cookies.</p>

            <h2>Contact</h2>
            <p>Questions? Contact us at <a href="mailto:privacy@architech.ng">privacy@architech.ng</a>.</p>
          </div>
        </div>
      </section>
    </>
  )
}