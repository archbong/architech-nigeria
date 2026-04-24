import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, CheckCircle, CreditCard, Banknote, Building2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SEO } from '@/components/shared/seo'
import { cn } from '@/lib/utils'

const paymentMethods = [
  { id: 'card', name: 'Credit/Debit Card', icon: CreditCard },
  { id: 'transfer', name: 'Bank Transfer', icon: Building2 },
  { id: 'paystack', name: 'Paystack', icon: Banknote },
]

export function CheckoutPage() {
  const navigate = useNavigate()
  const [step, setStep] = useState<'details' | 'payment' | 'confirmed'>('details')
  const [paymentMethod, setPaymentMethod] = useState('card')

  const handlePlaceOrder = () => {
    setStep('confirmed')
    setTimeout(() => navigate('/store/cart'), 5000)
  }

  if (step === 'confirmed') {
    return (
      <section className="pt-32 pb-16">
        <div className="max-w-lg mx-auto px-4 text-center">
          <div className="mx-auto w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mb-6">
            <CheckCircle className="h-10 w-10 text-green-500" />
          </div>
          <h1 className="text-2xl font-bold mb-2">Order Confirmed!</h1>
          <p className="text-muted-foreground mb-4">Thank you for your purchase. You'll receive a confirmation email shortly.</p>
          <p className="text-sm text-muted-foreground mb-8">Order #ARCH-{Math.random().toString(36).substr(2, 8).toUpperCase()}</p>
          <Link to="/store">
            <Button variant="outline">Continue Shopping</Button>
          </Link>
        </div>
      </section>
    )
  }

  return (
    <>
      <SEO title="Checkout" />
      <section className="pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/store/cart" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Cart
          </Link>

          <h1 className="text-3xl font-bold mb-8">Checkout</h1>

          <div className="grid lg:grid-cols-5 gap-8">
            {/* Form */}
            <div className="lg:col-span-3 space-y-6">
              <div className="p-6 rounded-xl border border-border/50 bg-background">
                <h2 className="font-semibold mb-4">Shipping Information</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <input placeholder="First Name" className="h-12 rounded-lg border border-border bg-transparent px-4 text-sm" />
                  <input placeholder="Last Name" className="h-12 rounded-lg border border-border bg-transparent px-4 text-sm" />
                </div>
                <input placeholder="Email" type="email" className="w-full h-12 rounded-lg border border-border bg-transparent px-4 text-sm mt-4" />
                <input placeholder="Phone" className="w-full h-12 rounded-lg border border-border bg-transparent px-4 text-sm mt-4" />
                <input placeholder="Address" className="w-full h-12 rounded-lg border border-border bg-transparent px-4 text-sm mt-4" />
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <input placeholder="City" className="h-12 rounded-lg border border-border bg-transparent px-4 text-sm" />
                  <input placeholder="State" className="h-12 rounded-lg border border-border bg-transparent px-4 text-sm" />
                </div>
              </div>

              <div className="p-6 rounded-xl border border-border/50 bg-background">
                <h2 className="font-semibold mb-4">Payment Method</h2>
                <div className="space-y-3">
                  {paymentMethods.map((method) => (
                    <button
                      key={method.id}
                      onClick={() => setPaymentMethod(method.id)}
                      className={cn(
                        'w-full flex items-center gap-3 p-4 rounded-lg border transition-all',
                        paymentMethod === method.id
                          ? 'border-primary bg-primary/5'
                          : 'border-border hover:border-primary/50'
                      )}
                    >
                      <method.icon className="h-5 w-5 text-primary" />
                      <span className="font-medium text-sm">{method.name}</span>
                      {paymentMethod === method.id && (
                        <CheckCircle className="h-4 w-4 text-primary ml-auto" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-2">
              <div className="p-6 rounded-xl border border-border/50 bg-background sticky top-24">
                <h3 className="font-semibold mb-4">Order Summary</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Build Stuff Tee (x2)</span>
                    <span>₦30,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Hoodie (x1)</span>
                    <span>₦25,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="text-green-500">Free</span>
                  </div>
                  <div className="border-t border-border/50 pt-3 flex justify-between font-semibold text-base">
                    <span>Total</span>
                    <span className="text-primary">₦55,000</span>
                  </div>
                </div>
                <Button className="w-full mt-6" size="lg" onClick={handlePlaceOrder}>
                  Place Order — ₦55,000
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}