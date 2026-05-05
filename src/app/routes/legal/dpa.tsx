import { Link } from 'react-router-dom'
import { ArrowLeft, Shield, Database, Lock, Server, Eye, Trash2 } from 'lucide-react'
import { SEO } from '@/components/shared/seo'

const commitments = [
  { icon: Lock, title: 'Encryption', description: 'All data encrypted in transit (TLS 1.3) and at rest (AES-256). Encryption keys are rotated regularly.' },
  { icon: Eye, title: 'Access Control', description: 'Strict role-based access with principle of least privilege. Multi-factor authentication on all systems.' },
  { icon: Server, title: 'Data Residency', description: 'Client data stored in EU or US regions based on compliance requirements. No unauthorized cross-border transfers.' },
  { icon: Trash2, title: 'Data Deletion', description: 'On termination, all client data is securely deleted within 30 days. Certification of deletion provided on request.' },
  { icon: Database, title: 'Backup & Recovery', description: 'Automated daily backups with 30-day retention. Disaster recovery tested quarterly.' },
  { icon: Shield, title: 'Breach Notification', description: 'Any data breach affecting client data is reported within 72 hours of discovery with full incident details.' },
]

export function DPAPage() {
  return (
    <>
      <SEO title="Data Processing Agreement" description="How we handle, protect, and process client data in compliance with NDPR and GDPR." />
      
      <section className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Link>
          <div className="flex items-center gap-3 mb-6">
            <Database className="h-8 w-8 text-chrome" />
            <h1 className="font-heading text-3xl font-bold text-chrome">Data Processing Agreement (DPA)</h1>
          </div>
          <p className="text-sm text-muted-foreground mb-8">Last updated: January 2026</p>

          <div className="prose prose-invert max-w-none space-y-6">
            
            <h2>Overview</h2>
            <p>
              This Data Processing Agreement (DPA) governs how Architech Nigeria processes personal data 
              on behalf of our clients. It forms part of our service agreements and complies with the 
              Nigeria Data Protection Regulation (NDPR) and the EU General Data Protection Regulation (GDPR).
            </p>

            <div className="not-prose grid sm:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
              {commitments.map((item) => (
                <div key={item.title} className="p-4 rounded-xl bg-surface border border-border/50">
                  <div className="h-8 w-8 rounded-lg bg-chrome/10 flex items-center justify-center mb-2">
                    <item.icon className="h-4 w-4 text-chrome" />
                  </div>
                  <p className="text-sm font-semibold text-foreground">{item.title}</p>
                  <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                </div>
              ))}
            </div>

            <h2>1. Definitions</h2>
            <p><strong>Data Controller:</strong> The client who determines the purposes and means of processing personal data.</p>
            <p><strong>Data Processor:</strong> Architech Nigeria, who processes personal data on behalf of the controller.</p>
            <p><strong>Personal Data:</strong> Any information relating to an identified or identifiable natural person.</p>
            <p><strong>Processing:</strong> Any operation performed on personal data, including collection, storage, modification, retrieval, and deletion.</p>

            <h2>2. Scope of Processing</h2>
            <p>
              We process personal data only on documented instructions from the client (Data Controller). 
              Processing is limited to what is necessary to provide our engineering services, including:
            </p>
            <ul>
              <li>Development and testing environments</li>
              <li>Database administration and optimization</li>
              <li>Bug fixing and troubleshooting</li>
              <li>Performance monitoring and analytics</li>
              <li>Backup and disaster recovery</li>
            </ul>

            <h2>3. Sub-Processors</h2>
            <p>
              We engage the following sub-processors to deliver our services. All sub-processors are 
              bound by data processing agreements with equivalent protections:
            </p>
            <ul>
              <li><strong>Amazon Web Services (AWS):</strong> Cloud infrastructure hosting</li>
              <li><strong>Vercel:</strong> Frontend deployment and serverless functions</li>
              <li><strong>GitHub/GitLab:</strong> Source code management</li>
              <li><strong>Linear/Jira:</strong> Project management</li>
              <li><strong>Slack/Discord:</strong> Team communication</li>
            </ul>
            <p>We notify clients before engaging any new sub-processor. Clients may object within 14 days.</p>

            <h2>4. Technical & Organizational Measures</h2>
            <p>We implement appropriate technical and organizational measures to ensure data security:</p>
            <ul>
              <li>Encryption at rest (AES-256) and in transit (TLS 1.3)</li>
              <li>Network firewalls and intrusion detection systems</li>
              <li>Regular vulnerability scanning and penetration testing</li>
              <li>Access logging and audit trails</li>
              <li>Security awareness training for all personnel</li>
              <li>Background checks on employees with data access</li>
            </ul>

            <h2>5. Data Subject Rights</h2>
            <p>
              We assist clients in fulfilling data subject requests (access, rectification, erasure, 
              portability) within 30 days. Requests should be directed to the client (Data Controller), 
              who will coordinate with us.
            </p>

            <h2>6. Breach Notification</h2>
            <p>
              In the event of a personal data breach, we will:
            </p>
            <ol>
              <li>Notify the client within 72 hours of discovery</li>
              <li>Provide details of the nature, scope, and affected data</li>
              <li>Outline remedial actions taken and planned</li>
              <li>Cooperate fully with any investigation or regulatory reporting</li>
            </ol>

            <h2>7. Data Retention & Deletion</h2>
            <p>
              Data is retained only as long as necessary to fulfill the purposes outlined in the service agreement. 
              On termination:
            </p>
            <ul>
              <li>Active data is deleted within 30 days</li>
              <li>Backup data is purged within 90 days</li>
              <li>Written certification of deletion is provided on request</li>
            </ul>

            <h2>8. Audits & Compliance</h2>
            <p>
              Clients may request evidence of compliance through:
            </p>
            <ul>
              <li>Security questionnaires (responded to within 14 days)</li>
              <li>Third-party audit reports (where available)</li>
              <li>Remote compliance assessments (with 30 days' notice)</li>
            </ul>

            <h2>9. International Data Transfers</h2>
            <p>
              Where data is transferred outside Nigeria or the EEA, we ensure appropriate safeguards 
              including Standard Contractual Clauses (SCCs) and adequacy decisions where applicable.
            </p>

            <h2>10. Contact</h2>
            <p>
              For DPA-related inquiries or to request a signed DPA, contact our Data Protection Officer at{' '}
              <a href="mailto:dpo@architech.ng">dpo@architech.ng</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}