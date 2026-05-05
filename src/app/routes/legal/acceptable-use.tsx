import { Link } from 'react-router-dom'
import { ArrowLeft, ShieldAlert } from 'lucide-react'
import { SEO } from '@/components/shared/seo'

export function AcceptableUsePage() {
  return (
    <>
      <SEO title="Acceptable Use Policy" description="Guidelines for acceptable use of systems and services provided by Architech Nigeria." />
      
      <section className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Link>
          <div className="flex items-center gap-3 mb-6">
            <ShieldAlert className="h-8 w-8 text-chrome" />
            <h1 className="font-heading text-3xl font-bold text-chrome">Acceptable Use Policy</h1>
          </div>
          <p className="text-sm text-muted-foreground mb-8">Last updated: January 2026</p>

          <div className="prose prose-invert max-w-none space-y-6">
            <p>This Acceptable Use Policy outlines the rules and guidelines for using systems, applications, and services developed or maintained by Architech Nigeria.</p>

            <h2>1. Prohibited Activities</h2>
            <p>Users of systems we build must not:</p>
            <ul>
              <li>Violate any applicable local, national, or international laws</li>
              <li>Upload, transmit, or distribute malware, viruses, or harmful code</li>
              <li>Attempt to gain unauthorized access to systems, data, or networks</li>
              <li>Interfere with or disrupt the integrity or performance of services</li>
              <li>Use the system for spamming, phishing, or distributing unsolicited communications</li>
              <li>Harass, abuse, or harm others through the platform</li>
              <li>Infringe on intellectual property rights of any party</li>
              <li>Scrape, mine, or extract data without explicit authorization</li>
              <li>Bypass security measures, authentication systems, or rate limits</li>
            </ul>

            <h2>2. Client Responsibilities</h2>
            <p>Clients who own or operate systems built by Architech Nigeria are responsible for:</p>
            <ul>
              <li>Ensuring end users comply with this Acceptable Use Policy</li>
              <li>Promptly reporting security vulnerabilities or abuse to our team</li>
              <li>Not modifying system security configurations without consultation</li>
              <li>Maintaining the confidentiality of administrative credentials</li>
              <li>Complying with applicable data protection and privacy regulations</li>
            </ul>

            <h2>3. Content Guidelines</h2>
            <p>Content hosted on or distributed through systems we build must not:</p>
            <ul>
              <li>Promote violence, hate speech, or discrimination</li>
              <li>Contain illegal or regulated material</li>
              <li>Violate third-party copyrights or trademarks</li>
              <li>Include deceptive or fraudulent information</li>
            </ul>

            <h2>4. Enforcement</h2>
            <p>Violation of this policy may result in:</p>
            <ul>
              <li>Immediate suspension of service access</li>
              <li>Termination of service agreements</li>
              <li>Legal action where applicable</li>
              <li>Reporting to relevant authorities</li>
            </ul>

            <h2>5. Reporting Violations</h2>
            <p>To report a violation of this policy, contact <a href="mailto:legal@architech-nigeria.com">abuse@architech-nigeria.com</a>. Reports are reviewed within 24 hours.</p>

            <h2>6. Contact</h2>
            <p>Questions? Contact <a href="mailto:legal@architech-nigeria.com">legal@architech-nigeria.com</a>.</p>
          </div>
        </div>
      </section>
    </>
  )
}