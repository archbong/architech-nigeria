import { Link } from 'react-router-dom'
import { ArrowLeft, Shield, Lock,Fingerprint, Cloud, FileCheck } from 'lucide-react'
import { SEO } from '@/components/shared/seo'

const practices = [
  {
    icon: Lock,
    title: 'Encryption',
    items: [
      'AES-256 encryption for all data at rest',
      'TLS 1.3 for all data in transit',
      'End-to-end encryption for sensitive communications',
      'Regular encryption key rotation',
    ],
  },
  {
    icon: Fingerprint,
    title: 'Access Control',
    items: [
      'Multi-factor authentication on all systems',
      'Role-based access with principle of least privilege',
      'SSH key authentication for server access',
      'Quarterly access reviews and audits',
    ],
  },
  {
    icon: Cloud,
    title: 'Infrastructure',
    items: [
      'Network firewalls and intrusion detection',
      'DDoS protection on all production endpoints',
      'Isolated development, staging, and production environments',
      'Automated security patch management',
    ],
  },
  {
    icon: FileCheck,
    title: 'Compliance & Testing',
    items: [
      'OWASP Top 10 vulnerability scanning',
      'Quarterly penetration testing',
      'Dependency vulnerability monitoring',
      'Static code analysis (SAST) on all codebases',
    ],
  },
]

export function SecurityPage() {
  return (
    <>
      <SEO title="Security Policy" description="Our security practices, encryption standards, and commitment to protecting your data and systems." />
      
      <section className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Link>
          <div className="flex items-center gap-3 mb-6">
            <Shield className="h-8 w-8 text-chrome" />
            <h1 className="font-heading text-3xl font-bold text-chrome">Security Policy</h1>
          </div>
          <p className="text-sm text-muted-foreground mb-8">Last updated: January 2026</p>

          <div className="prose prose-invert max-w-none space-y-6">
            <p>
              At Architech Nigeria, security is foundational — not an afterthought. We build systems 
              with security baked into every layer of the stack. This policy outlines our security 
              practices, standards, and commitments.
            </p>

            {/* Security Pillars */}
            <div className="not-prose grid sm:grid-cols-2 gap-6 my-8">
              {practices.map((practice) => (
                <div key={practice.title} className="p-5 rounded-2xl bg-surface border border-border/50">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-xl bg-chrome/10 flex items-center justify-center">
                      <practice.icon className="h-5 w-5 text-chrome" />
                    </div>
                    <h3 className="font-heading font-bold text-foreground">{practice.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {practice.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-chrome mt-1.5 shrink-0">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <h2>1. Development Security</h2>
            <ul>
              <li><strong>Code Reviews:</strong> Every pull request reviewed by at least one senior engineer before merge</li>
              <li><strong>Secrets Management:</strong> No secrets in source code. Environment variables managed via secure vaults</li>
              <li><strong>Dependencies:</strong> Automated scanning for vulnerable packages. Critical patches applied within 48 hours</li>
              <li><strong>CI/CD Security:</strong> Build pipelines run in isolated environments with signed artifacts</li>
            </ul>

            <h2>2. Data Protection</h2>
            <ul>
              <li><strong>Data Classification:</strong> All data classified by sensitivity. Handling procedures defined per classification level</li>
              <li><strong>Data Minimization:</strong> Only necessary data is collected and stored</li>
              <li><strong>Backup Security:</strong> Backups encrypted and stored in geographically separate locations</li>
              <li><strong>Secure Deletion:</strong> Data is securely wiped using industry-standard methods on disposal</li>
            </ul>

            <h2>3. Incident Response</h2>
            <p>In the event of a security incident, our response protocol includes:</p>
            <ol>
              <li><strong>Detection:</strong> 24/7 monitoring with automated alerting</li>
              <li><strong>Containment:</strong> Immediate isolation of affected systems</li>
              <li><strong>Investigation:</strong> Root cause analysis within 48 hours</li>
              <li><strong>Notification:</strong> Affected clients notified within 72 hours</li>
              <li><strong>Remediation:</strong> Permanent fix deployed and verified</li>
              <li><strong>Post-Mortem:</strong> Documented review to prevent recurrence</li>
            </ol>

            <h2>4. Team Security</h2>
            <ul>
              <li><strong>Background Checks:</strong> All team members undergo background verification</li>
              <li><strong>Security Training:</strong> Mandatory annual security awareness training</li>
              <li><strong>Device Security:</strong> Full-disk encryption required on all company devices</li>
              <li><strong>Offboarding:</strong> Immediate access revocation on departure</li>
            </ul>

            <h2>5. Physical Security</h2>
            <ul>
              <li>All servers hosted in SOC 2 compliant data centers (AWS)</li>
              <li>24/7 physical security, biometric access, and CCTV monitoring</li>
              <li>Redundant power, cooling, and network connectivity</li>
            </ul>

            <h2>6. Compliance</h2>
            <p>Our security practices align with:</p>
            <ul>
              <li>Nigeria Data Protection Regulation (NDPR)</li>
              <li>EU General Data Protection Regulation (GDPR)</li>
              <li>OWASP Top 10 Application Security Standards</li>
              <li>ISO 27001 control framework (alignment, not certification)</li>
            </ul>

            <h2>7. Vulnerability Disclosure</h2>
            <p>
              We encourage responsible disclosure of security vulnerabilities. If you discover a vulnerability, 
              please email <a href="mailto:security@architech.ng">security@architech.ng</a>. 
              We commit to:
            </p>
            <ul>
              <li>Acknowledging receipt within 24 hours</li>
              <li>Providing a status update within 7 days</li>
              <li>Not pursuing legal action for good-faith disclosures</li>
              <li>Publicly crediting researchers (with permission)</li>
            </ul>

            <h2>8. Contact</h2>
            <p>Questions about our security practices? Contact <a href="mailto:legal@architech-nigeria.ng">security@architech-nigeria.com</a>.</p>
          </div>
        </div>
      </section>
    </>
  )
}