import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, ShoppingBag, Plus, Minus, Check, Truck, Shield, RotateCcw } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SEO } from '@/components/shared/seo'
import { cn } from '@/lib/utils'


const products: Record<string, any> = {
  '1': {
    id: '1',
    name: 'Build Stuff Tee',
    price: 15000,
    description: 'Premium cotton t-shirt designed for builders...',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=200&h=200&fit=crop',
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=200&h=200&fit=crop',
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=200&h=200&fit=crop',
    ],
    features: ['100% premium cotton', 'Double-stitched seams', 'Pre-shrunk fabric', 'Unisex fit'],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    colors: ['Black', 'White', 'Navy'],
    category: 'T-Shirts',
    badge: 'Best Seller',
    color: 'from-purple-500 to-purple-600',
  },
  '2': {
    id: '2',
    name: 'Code. Sleep. Repeat. Hoodie',
    price: 25000,
    description: 'The ultimate coding hoodie...',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=200&h=200&fit=crop',
      'https://images.unsplash.com/photo-1578681994506-b8f463371f68?w=200&h=200&fit=crop',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=200&h=200&fit=crop',
    ],
    features: ['Fleece-lined', 'Adjustable hood', 'Kangaroo pocket', 'Ribbed cuffs'],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Gray', 'Navy'],
    category: 'Hoodies',
    color: 'from-purple-500 to-purple-600',
  },
}

export function ProductPage() {
  const { id } = useParams<{ id: string }>()
  const product = id ? products[id] : null

   if (!product) {
    return (
      <section className="pt-32 pb-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Product not found</h1>
        <Link to="/store"><Button variant="outline">Back to Store</Button></Link>
      </section>
    )
  }
  const [selectedImage, setSelectedImage] = useState(product.image || '')
  const [selectedSize, setSelectedSize] = useState('M')
  const [selectedColor, setSelectedColor] = useState('Black')
  const [quantity, setQuantity] = useState(1)
  const [addedToCart, setAddedToCart] = useState(false)

 

  const handleAddToCart = () => {
    setAddedToCart(true)
    setTimeout(() => setAddedToCart(false), 2000)
  }

  return (
    <>
      <SEO title={product.name} description={product.description} />

      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/store" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Store
          </Link>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="aspect-square rounded-2xl overflow-hidden bg-secondary/30">
                <img
                  src={selectedImage || product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Thumbnail Row */}
              <div className="grid grid-cols-4 gap-3">
                {(product.images || []).map((img: string, i: number) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(img)}
                    className="aspect-square rounded-lg overflow-hidden bg-secondary/30 border-2 border-transparent hover:border-primary transition-colors"
                  >
                    <img src={img} alt={`${product.name} ${i + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div>
              {product.badge && (
                <span className="bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded-full">
                  {product.badge}
                </span>
              )}
              <p className="text-sm text-muted-foreground mt-3 mb-1">{product.category}</p>
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              <p className="text-3xl font-bold text-primary mb-6">₦{product.price.toLocaleString()}</p>
              <p className="text-muted-foreground leading-relaxed mb-8">{product.description}</p>

              {/* Features */}
              <div className="space-y-2 mb-8">
                {(product.features || []).map((f: string) => (
                  <div key={f} className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-green-500" /> {f}
                  </div>
                ))}
              </div>

              {/* Color */}
              <div className="mb-6">
                <label className="text-sm font-medium mb-3 block">Color: <span className="text-muted-foreground">{selectedColor}</span></label>
                <div className="flex gap-2">
                  {product.colors?.map((color: string) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={cn(
                        'px-4 py-2 rounded-lg text-sm border transition-all',
                        selectedColor === color
                          ? 'border-primary bg-primary/10 text-primary'
                          : 'border-border hover:border-primary/50'
                      )}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size */}
              <div className="mb-6">
                <label className="text-sm font-medium mb-3 block">Size: <span className="text-muted-foreground">{selectedSize}</span></label>
                <div className="flex gap-2">
                  {product.sizes?.map((size: string) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={cn(
                        'w-12 h-12 rounded-lg text-sm font-medium border transition-all',
                        selectedSize === size
                          ? 'border-primary bg-primary/10 text-primary'
                          : 'border-border hover:border-primary/50'
                      )}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-8">
                <label className="text-sm font-medium mb-3 block">Quantity</label>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="h-10 w-10 rounded-lg border border-border flex items-center justify-center hover:bg-secondary"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-12 text-center font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="h-10 w-10 rounded-lg border border-border flex items-center justify-center hover:bg-secondary"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Add to Cart */}
              <Button
                size="xl"
                className="w-full group mb-4"
                onClick={handleAddToCart}
              >
                {addedToCart ? (
                  <><Check className="mr-2 h-5 w-5" /> Added to Cart</>
                ) : (
                  <><ShoppingBag className="mr-2 h-5 w-5" /> Add to Cart — ₦{(product.price * quantity).toLocaleString()}</>
                )}
              </Button>

              {/* Shipping Info */}
              <div className="grid grid-cols-3 gap-4 text-center text-xs text-muted-foreground">
                <div>
                  <Truck className="h-4 w-4 mx-auto mb-1" />
                  Free shipping over ₦50,000
                </div>
                <div>
                  <Shield className="h-4 w-4 mx-auto mb-1" />
                  Quality guarantee
                </div>
                <div>
                  <RotateCcw className="h-4 w-4 mx-auto mb-1" />
                  7-day returns
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}