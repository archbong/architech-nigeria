import { Link } from 'react-router-dom'
import { ArrowLeft, Clock, Shield, Zap, Activity } from 'lucide-react'
import { SEO } from '@/components/shared/seo'

const metrics = [
  { icon: Activity, label: 'System Uptime', value: '99.9%', description: 'Guaranteed availability for production systems under active maintenance' },
  { icon: Clock, label: 'Response Time', value: '< 4 hours', description: 'Critical issues acknowledged within 4 business hours' },
  { icon: Zap, label: 'Resolution Time', value: '24-72 hours', description: 'Depending on severity — critical bugs prioritized within 24 hours' },
  { icon: Shield, label: 'Support Coverage', value: 'Mon-Fri 9AM-6PM WAT', description: 'Enterprise clients eligible for extended support windows' },
]

const severityLevels = [
  { level: 'Critical', description: 'System down, data loss, security breach', response: '< 2 hours', resolution: '< 24 hours' },
  { level: 'High', description: 'Major feature broken, significant user impact', response: '< 4 hours', resolution: '< 48 hours' },
  { level: 'Medium', description: 'Feature partially impaired, workaround available', response: '< 8 hours', resolution: '< 72 hours' },
  { level: 'Low', description: 'Minor bug, cosmetic issue, feature request', response: '< 24 hours', resolution: 'Next sprint' },
]

export function SLAPage() {
  return (
    <>
      <SEO title="Service Level Agreement" description="Our commitment to system reliability, support response times, and service quality." />
      
      <section className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Link>
          <div className="flex items-center gap-3 mb-6">
            <Activity className="h-8 w-8 text-chrome" />
            <h1 className="font-heading text-3xl font-bold text-chrome">Service Level Agreement (SLA)</h1>
          </div>
          <p className="text-sm text-muted-foreground mb-8">Last updated: January 2026</p>

          <div className="prose prose-invert max-w-none space-y-6">
            
            <h2>Our Commitment</h2>
            <p>
              Architech Nigeria is committed to delivering reliable, high-performance systems. 
              This SLA defines our service commitments for production systems under active maintenance 
              or support contracts. Standard project delivery timelines are covered in individual 
              project agreements.
            </p>

            {/* Metrics Grid */}
            <div className="not-prose grid sm:grid-cols-2 gap-4 my-8">
              {metrics.map((metric) => (
                <div key={metric.label} className="p-5 rounded-2xl bg-surface border border-border/50">
                  <div className="h-10 w-10 rounded-xl bg-chrome/10 flex items-center justify-center mb-3">
                    <metric.icon className="h-5 w-5 text-chrome" />
                  </div>
                  <p className="text-2xl font-heading font-bold text-chrome">{metric.value}</p>
                  <p className="text-sm font-semibold text-foreground mt-1">{metric.label}</p>
                  <p className="text-xs text-muted-foreground mt-1">{metric.description}</p>
                </div>
              ))}
            </div>

            <h2>Severity Levels & Response Times</h2>
            <p>
              Issues are classified by severity to ensure appropriate prioritization. 
              Response times are measured during business hours (Mon-Fri, 9AM-6PM WAT) 
              unless an extended support agreement is in place.
            </p>

            <div className="not-prose overflow-x-auto my-6">
              <table className="w-full text-sm border border-border/50 rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-surface">
                    <th className="px-4 py-3 text-left font-semibold">Severity</th>
                    <th className="px-4 py-3 text-left font-semibold">Description</th>
                    <th className="px-4 py-3 text-left font-semibold">Response</th>
                    <th className="px-4 py-3 text-left font-semibold">Resolution</th>
                  </tr>
                </thead>
                <tbody>
                  {severityLevels.map((s) => (
                    <tr key={s.level} className="border-t border-border/50">
                      <td className="px-4 py-3 font-semibold text-chrome">{s.level}</td>
                      <td className="px-4 py-3 text-muted-foreground">{s.description}</td>
                      <td className="px-4 py-3">{s.response}</td>
                      <td className="px-4 py-3">{s.resolution}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2>Service Credits</h2>
            <p>
              If we fail to meet the uptime guarantee (99.9%) in any calendar month for systems 
              under active maintenance, clients are eligible for service credits:
            </p>
            <ul>
              <li>99.0% – 99.89% uptime: 10% credit on monthly maintenance fee</li>
              <li>95.0% – 98.9% uptime: 25% credit on monthly maintenance fee</li>
              <li>Below 95.0% uptime: 50% credit on monthly maintenance fee</li>
            </ul>
            <p>Credits are applied to the following month's invoice. Clients must request credits within 14 days of the incident.</p>

            <h2>Exclusions</h2>
            <p>This SLA does not cover downtime caused by:</p>
            <ul>
              <li>Third-party service outages (AWS, Vercel, etc.)</li>
              <li>Client-side infrastructure or network issues</li>
              <li>Force majeure events (natural disasters, civil unrest, etc.)</li>
              <li>Scheduled maintenance with 48-hour advance notice</li>
              <li>Systems not under active maintenance contract</li>
              <li>Client-requested changes that introduce instability</li>
            </ul>

            <h2>Contact</h2>
            <p>Questions about our SLA? Contact <a href="mailto:support@architech.ng">support@architech.ng</a>.</p>
          </div>
        </div>
      </section>
    </>
  )
}