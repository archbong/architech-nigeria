import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { toast } from 'sonner'
import { Mail, MapPin, Phone, Send, CheckCircle, ArrowRight, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SEO } from '@/components/shared/seo'

const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.email('Valid email required'),
  company: z.string().optional(),
  service: z.enum(['development', 'design', 'consulting', 'academy', 'other'], {
    message: 'Please select a service',
  }),
  budget: z.enum(['under-500k', '500k-2m', '2m-5m', '5m-plus', 'not-sure'], {
    message: 'Please select a budget',
  }),
  message: z.string().min(10, 'Tell us more about your project'),
})

type ContactFormValues = z.infer<typeof contactSchema>

export function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: '', email: '', company: '', service: undefined, budget: undefined, message: '' },
  })

  async function onSubmit(data: ContactFormValues) {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      setIsSubmitted(true)
     toast.success(`Thanks ${data.name}! We'll get back to you at ${data.email} within 24 hours.`)
      form.reset()
    } catch {
      toast.error('Failed to send message. Please try again.')
    }
  }

  return (
    <>
      <SEO title="Contact" description="Get in touch to start your project." />

      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Let's talk</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Tell us about your project and we'll get back to you within 24 hours.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
            {/* Left - Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div className="space-y-6">
                {[
                  { icon: Mail, title: 'Email', detail: 'hello@architech.ng' },
                  { icon: Phone, title: 'Phone', detail: '+234 800 000 0000' },
                  { icon: MapPin, title: 'Location', detail: 'Lagos, Nigeria' },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{item.title}</p>
                      <p className="text-sm text-muted-foreground">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-6 rounded-xl bg-secondary/30 border border-border/50">
                <Calendar className="h-5 w-5 text-primary mb-3" />
                <h3 className="font-semibold mb-2">Book a call</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Prefer to talk? Schedule a 30-minute consultation.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Schedule Call
                </Button>
              </div>
            </div>

            {/* Right - Form */}
            <div className="lg:col-span-3">
              {isSubmitted ? (
                <div className="bg-background rounded-2xl border border-border/50 p-12 text-center">
                  <div className="mx-auto w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-6">
                    <CheckCircle className="h-8 w-8 text-green-500" />
                  </div>
                  <h2 className="text-2xl font-bold mb-2">Message sent!</h2>
                  <p className="text-muted-foreground mb-6">We'll review your project and get back within 24 hours.</p>
                  <Button variant="outline" onClick={() => setIsSubmitted(false)}>
                    Send another message
                  </Button>
                </div>
              ) : (
                <div className="bg-background rounded-2xl border border-border/50 p-8">
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Name *</label>
                        <input
                          {...form.register('name')}
                          placeholder="Your name"
                          className="w-full h-12 rounded-lg border border-border bg-transparent px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                        />
                        {form.formState.errors.name && (
                          <p className="text-sm text-destructive mt-1">{form.formState.errors.name.message}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Email *</label>
                        <input
                          {...form.register('email')}
                          type="email"
                          placeholder="you@company.com"
                          className="w-full h-12 rounded-lg border border-border bg-transparent px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                        />
                        {form.formState.errors.email && (
                          <p className="text-sm text-destructive mt-1">{form.formState.errors.email.message}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Company (Optional)</label>
                      <input
                        {...form.register('company')}
                        placeholder="Your company"
                        className="w-full h-12 rounded-lg border border-border bg-transparent px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Service *</label>
                        <select
                          {...form.register('service')}
                          className="w-full h-12 rounded-lg border border-border bg-transparent px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                        >
                          <option value="">Select service</option>
                          <option value="development">Web Development</option>
                          <option value="design">Product Design</option>
                          <option value="consulting">Consulting</option>
                          <option value="academy">Academy</option>
                          <option value="other">Other</option>
                        </select>
                        {form.formState.errors.service && (
                          <p className="text-sm text-destructive mt-1">{form.formState.errors.service.message}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Budget Range *</label>
                        <select
                          {...form.register('budget')}
                          className="w-full h-12 rounded-lg border border-border bg-transparent px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                        >
                          <option value="">Select budget</option>
                          <option value="under-500k">Under ₦500,000</option>
                          <option value="500k-2m">₦500,000 - ₦2,000,000</option>
                          <option value="2m-5m">₦2,000,000 - ₦5,000,000</option>
                          <option value="5m-plus">₦5,000,000+</option>
                          <option value="not-sure">Not sure yet</option>
                        </select>
                        {form.formState.errors.budget && (
                          <p className="text-sm text-destructive mt-1">{form.formState.errors.budget.message}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Project Details *</label>
                      <textarea
                        {...form.register('message')}
                        rows={5}
                        placeholder="Tell us about your project, goals, timeline..."
                        className="w-full rounded-lg border border-border bg-transparent px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary resize-none"
                      />
                      {form.formState.errors.message && (
                        <p className="text-sm text-destructive mt-1">{form.formState.errors.message.message}</p>
                      )}
                    </div>

                    <Button type="submit" size="lg" className="w-full group" disabled={form.formState.isSubmitting}>
                      {form.formState.isSubmitting ? 'Sending...' : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}