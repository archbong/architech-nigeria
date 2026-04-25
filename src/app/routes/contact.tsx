import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { toast } from 'sonner'
import { Send, CheckCircle, ArrowRight, Clock, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SEO } from '@/components/shared/seo'
import { cn } from '@/lib/utils'

const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.email('Valid email required'),
  projectType: z.enum(['mvp', 'scaling', 'audit', 'other'], {
    message: 'Please select a project type',
  }),
  description: z.string().min(10, 'Tell us a bit more (at least 10 characters)'),
})

type ContactFormValues = z.infer<typeof contactSchema>

const projectTypes = [
  { value: 'mvp', label: 'New MVP / Product', icon: '🚀' },
  { value: 'scaling', label: 'Scaling Existing System', icon: '📈' },
  { value: 'audit', label: 'System Audit', icon: '🔍' },
  { value: 'other', label: 'Something Else', icon: '💡' },
]

export function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: '', email: '', projectType: undefined, description: '' },
  })

  async function onSubmit(data: ContactFormValues) {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      setIsSubmitted(true)
      toast.success(`Thanks ${data.name}! We'll get back to you within 4 business hours.`)
      form.reset()
    } catch {
      toast.error('Failed to send. Please try again or WhatsApp us.')
    }
  }

  return (
    <>
      <SEO title="Contact Us" description="Start a conversation with our engineering team." />

      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Let's talk</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Tell us about your project and we'll respond within 4 business hours.
            </p>
            <div className="flex items-center justify-center gap-2 mt-3 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>We respond within 4 business hours</span>
              <span className="mx-2">•</span>
              <MessageCircle className="h-4 w-4" />
              <span>Also available on WhatsApp</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
            {/* Left - Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MessageCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">WhatsApp</p>
                    <a href="https://wa.me/2348103155891" className="text-sm text-primary hover:underline">
                      +234 810 315 5891
                    </a>
                    <p className="text-xs text-muted-foreground mt-0.5">Fastest response</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Send className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Email</p>
                    <a href="mailto:archibong.samuel.chinonso@gmail.com" className="text-sm text-primary hover:underline">
                      archibong.chinonso.samuel@gmail.com
                    </a>
                    <p className="text-xs text-muted-foreground mt-0.5">Response within 4 hours</p>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-secondary/30 border border-border/50">
                <p className="text-sm font-medium mb-2">What to expect</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">1.</span>
                    <span>Tell us about your project (form on the right)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">2.</span>
                    <span>We'll respond within 4 business hours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">3.</span>
                    <span>If it's a fit, we'll schedule a 30-minute deep-dive call</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">4.</span>
                    <span>You'll leave with a clear plan — whether we work together or not</span>
                  </li>
                </ul>
              </div>

              <p className="text-xs text-muted-foreground">
                Projects typically start at <span className="font-semibold text-foreground">₦1M+</span>. 
                For smaller projects, we're happy to recommend trusted partners.
              </p>
            </div>

            {/* Right - Form */}
            <div className="lg:col-span-3">
              {isSubmitted ? (
                <div className="bg-background rounded-2xl border border-border/50 p-12 text-center">
                  <div className="mx-auto w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-6">
                    <CheckCircle className="h-8 w-8 text-green-500" />
                  </div>
                  <h2 className="text-2xl font-bold mb-2">Message received!</h2>
                  <p className="text-muted-foreground mb-6">We'll get back to you within 4 business hours.</p>
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
                      <label className="block text-sm font-medium mb-2">Project Type *</label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {projectTypes.map((type) => (
                          <button
                            key={type.value}
                            type="button"
                            onClick={() => form.setValue('projectType', type.value as any)}
                            className={cn(
                              'p-3 rounded-xl border-2 text-center transition-all',
                              form.watch('projectType') === type.value
                                ? 'border-primary bg-primary/5'
                                : 'border-border hover:border-primary/50'
                            )}
                          >
                            <span className="text-lg block mb-1">{type.icon}</span>
                            <span className="text-xs font-medium">{type.label}</span>
                          </button>
                        ))}
                      </div>
                      {form.formState.errors.projectType && (
                        <p className="text-sm text-destructive mt-1">{form.formState.errors.projectType.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Tell us about your project *</label>
                      <textarea
                        {...form.register('description')}
                        rows={5}
                        placeholder="What are you building? What stage are you at? What's the biggest challenge right now?"
                        className="w-full rounded-lg border border-border bg-transparent px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary resize-none"
                      />
                      {form.formState.errors.description && (
                        <p className="text-sm text-destructive mt-1">{form.formState.errors.description.message}</p>
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