import { Link } from 'react-router-dom'
import { ArrowLeft, Building2 } from 'lucide-react'
import { SEO } from '@/components/shared/seo'

export function CompanyPolicyPage() {
  return (
    <>
      <SEO title="Company Policy" description="Our operational policies, code of conduct, and professional standards." />
      <section className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Link>
          <div className="flex items-center gap-3 mb-6">
            <Building2 className="h-8 w-8 text-chrome" />
            <h1 className="font-heading text-3xl font-bold text-chrome">Company Policy</h1>
          </div>
          <p className="text-sm text-muted-foreground mb-8">Last updated: January 2026</p>

          <div className="prose prose-invert max-w-none space-y-6">
            
            <h2>1. Professional Standards</h2>
            <p>Architech Nigeria is committed to the highest standards of engineering excellence, professional conduct, and ethical business practices. Every engagement is governed by our core principles of transparency, integrity, and technical rigor.</p>

            <h2>2. Client Engagement Policy</h2>
            <h3>2.1 Discovery & Scoping</h3>
            <p>All projects begin with a structured discovery phase to align expectations, define scope, and establish clear deliverables. No work commences without a signed agreement.</p>
            <h3>2.2 Communication</h3>
            <p>Clients receive weekly progress updates, access to project boards, and direct communication with their engineering lead. We believe in radical transparency — you see every commit, every deploy, every decision.</p>
            <h3>2.3 Intellectual Property</h3>
            <p>Upon full payment, all deliverables, source code, and documentation become the exclusive property of the client. We retain the right to display non-confidential work in our portfolio unless otherwise agreed.</p>

            <h2>3. Code of Conduct</h2>
            <p>All team members, contractors, and partners of Architech Nigeria are expected to:</p>
            <ul>
              <li>Treat clients, colleagues, and users with respect and professionalism</li>
              <li>Maintain confidentiality of client data and proprietary information</li>
              <li>Deliver work that meets or exceeds agreed-upon quality standards</li>
              <li>Communicate honestly about timelines, challenges, and limitations</li>
              <li>Never compromise on security, testing, or documentation for speed</li>
              <li>Decline projects that fall outside our area of expertise</li>
            </ul>

            <h2>4. Quality Assurance Policy</h2>
            <p>Every project delivered by Architech Nigeria undergoes:</p>
            <ul>
              <li>Automated testing (unit, integration, end-to-end)</li>
              <li>Peer code review by at least one senior engineer</li>
              <li>Security audit against OWASP Top 10 vulnerabilities</li>
              <li>Performance testing for expected load capacity</li>
              <li>Documentation review for completeness and accuracy</li>
            </ul>

            <h2>5. Data Protection & Security</h2>
            <p>We handle all client data with the strictest confidentiality. Our security practices include:</p>
            <ul>
              <li>End-to-end encryption for all communications</li>
              <li>Secure access controls with principle of least privilege</li>
              <li>Regular security training for all engineering staff</li>
              <li>Incident response protocol with 24-hour notification window</li>
              <li>Compliance with Nigeria Data Protection Regulation (NDPR)</li>
            </ul>

            <h2>6. Payment & Invoicing</h2>
            <p>Standard payment terms are outlined in individual project agreements. Generally:</p>
            <ul>
              <li>75% deposit to commence work</li>
              <li>Milestone-based payments for projects exceeding 4 weeks</li>
              <li>Final payment on delivery and client acceptance</li>
              <li>Invoices are payable within 14 days</li>
              <li>Late payments may incur a 5% monthly charge</li>
            </ul>

            <h2>7. Project Timeline & Delivery</h2>
            <p>We commit to timelines established during the planning phase. Delays caused by scope changes, client feedback cycles, or third-party dependencies are communicated immediately. We do not sacrifice quality for speed — extensions are requested when necessary to maintain engineering standards.</p>

            <h2>8. Cancellation & Termination</h2>
            <p>Either party may terminate a project with written notice:</p>
            <ul>
              <li>Client cancellation: Work completed to date is invoiced; deposit may be partially refundable based on work performed</li>
              <li>Architech cancellation: Full refund of unearned fees; completed work and assets delivered to client</li>
              <li>Mutual termination: Terms negotiated in good faith</li>
            </ul>

            <h2>9. Warranty & Post-Launch Support</h2>
            <p>All projects include:</p>
            <ul>
              <li>30 days of post-launch bug fixes at no additional cost</li>
              <li>Documentation handover for client team</li>
              <li>Optional maintenance retainers for ongoing support, updates, and monitoring</li>
            </ul>

            <h2>10. Non-Solicitation</h2>
            <p>During an active engagement and for 12 months following, clients agree not to directly solicit or hire Architech team members without prior written agreement. We invest heavily in our people and ask that this investment be respected.</p>

            <h2>11. Dispute Resolution</h2>
            <p>Any disputes arising from our engagement will first be addressed through direct negotiation in good faith. If unresolved, disputes will be referred to mediation before any legal action. Governing law is the Federal Republic of Nigeria.</p>

            <h2>12. Contact</h2>
            <p>Questions about our policies? Contact us at <a href="mailto:legal@architech-nigeria.com">legal@architech-nigeria.com</a>.</p>
          </div>
        </div>
      </section>
    </>
  )
}