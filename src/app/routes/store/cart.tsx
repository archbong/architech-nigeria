import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag, Trash2, Plus, Minus, ArrowRight  } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SEO } from '@/components/shared/seo'

const cartItems = [
  { id: '1', name: 'Build Stuff Tee', size: 'M', color: 'Black', price: 15000, quantity: 2, image: null },
  { id: '2', name: 'Code. Sleep. Repeat. Hoodie', size: 'L', color: 'Gray', price: 25000, quantity: 1, image: null },
]

export function CartPage() {
  const [items, setItems] = useState(cartItems)

  const updateQuantity = (id: string, qty: number) => {
    setItems(items.map(i => i.id === id ? { ...i, quantity: Math.max(1, qty) } : i))
  }

  const removeItem = (id: string) => {
    setItems(items.filter(i => i.id !== id))
  }

  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0)
  const shipping = subtotal > 50000 ? 0 : 5000
  const total = subtotal + shipping

  return (
    <>
      <SEO title="Cart" description="Review your cart and checkout." />

      <section className="pt-32 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

          {items.length === 0 ? (
            <div className="text-center py-16">
              <ShoppingBag className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h2 className="text-xl font-semibold mb-2">Your cart is empty</h2>
              <p className="text-muted-foreground mb-8">Add some products to get started.</p>
              <Link to="/store">
                <Button>Continue Shopping</Button>
              </Link>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4 p-4 rounded-xl border border-border/50 bg-background">
                    <div className="h-24 w-24 rounded-lg bg-secondary/50 flex items-center justify-center shrink-0">
                      <ShoppingBag className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-sm text-muted-foreground">{item.size} / {item.color}</p>
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center gap-2">
                          <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="h-8 w-8 rounded border border-border flex items-center justify-center"><Minus className="h-3 w-3" /></button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="h-8 w-8 rounded border border-border flex items-center justify-center"><Plus className="h-3 w-3" /></button>
                        </div>
                        <div className="flex items-center gap-4">
                          <p className="font-semibold">₦{(item.price * item.quantity).toLocaleString()}</p>
                          <button onClick={() => removeItem(item.id)} className="text-muted-foreground hover:text-destructive"><Trash2 className="h-4 w-4" /></button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="p-6 rounded-xl border border-border/50 bg-background h-fit sticky top-24">
                <h3 className="font-semibold mb-4">Order Summary</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>₦{subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span>{shipping === 0 ? <span className="text-green-500">Free</span> : `₦${shipping.toLocaleString()}`}</span>
                  </div>
                  <div className="border-t border-border/50 pt-3 flex justify-between font-semibold text-base">
                    <span>Total</span>
                    <span className="text-primary">₦{total.toLocaleString()}</span>
                  </div>
                </div>
                {shipping > 0 && (
                  <p className="text-xs text-muted-foreground mt-2">
                    Add ₦{(50000 - subtotal).toLocaleString()} more for free shipping
                  </p>
                )}
                <Link to="/store/checkout">
                  <Button className="w-full mt-6 group">
                    Proceed to Checkout
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link to="/store" className="block text-center text-sm text-muted-foreground hover:text-foreground mt-4">
                  Continue Shopping
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}