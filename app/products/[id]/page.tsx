"use client"

import { Suspense } from "react"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Star, Truck, Shield, Clock, ChevronRight, MessageSquare } from "lucide-react"
import { fetchProductById } from "@/lib/api"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface ProductPageProps {
  params: {
    id: string
  }
}

async function ProductDetails({ id }: { id: string }) {
  try {
    const product = await fetchProductById(id)

    if (!product) {
      notFound()
    }

    return (
      <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
        <div className="bg-white rounded-lg p-6 flex items-center justify-center h-[400px]">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.title}
            width={300}
            height={300}
            className="object-contain max-h-[300px]"
          />
        </div>

        <div>
          <div className="flex items-center gap-2 mb-2">
            <Link href={`/categories/${product.category}`} className="text-sm text-muted-foreground hover:text-primary">
              {product.category}
            </Link>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Products</span>
          </div>

          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>

          <div className="flex items-center gap-2 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.round(product.rating.rate) ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              {product.rating.rate} ({product.rating.count} reviews)
            </span>
          </div>

          <div className="mb-6">
            <span className="text-3xl font-bold">${product.price.toFixed(2)}</span>
            <span className="text-sm text-muted-foreground ml-2">per unit</span>
          </div>

          <p className="text-muted-foreground mb-6">{product.description}</p>

          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="border rounded-lg p-3 text-center">
              <p className="text-sm font-medium">Min. Order</p>
              <p className="text-lg">10 units</p>
            </div>
            <div className="border rounded-lg p-3 text-center">
              <p className="text-sm font-medium">Delivery</p>
              <p className="text-lg">3-5 days</p>
            </div>
            <div className="border rounded-lg p-3 text-center">
              <p className="text-sm font-medium">In Stock</p>
              <p className="text-lg">Yes</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button size="lg" className="flex-1">
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>
            <Button size="lg" variant="outline" className="flex-1">
              <MessageSquare className="mr-2 h-5 w-5" />
              Contact Supplier
            </Button>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 text-sm">
              <Truck className="h-4 w-4 text-muted-foreground" />
              <span>Free shipping on orders over $1000</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Shield className="h-4 w-4 text-muted-foreground" />
              <span>Verified supplier with 5+ years on platform</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span>24/7 customer support</span>
            </div>
          </div>
        </div>
      </div>
    )
  } catch (error) {
    console.error("Error loading product:", error)
    return (
      <div className="text-center py-12">
        <p className="text-red-500">Failed to load product details. Please try again later.</p>
        <Button onClick={() => window.location.reload()} className="mt-4">
          Try Again
        </Button>
      </div>
    )
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <Suspense fallback={<div>Loading product details...</div>}>
        <ProductDetails id={params.id} />
      </Suspense>

      <div className="mt-12">
        <Tabs defaultValue="details">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="details">Product Details</TabsTrigger>
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
            <TabsTrigger value="shipping">Shipping & Returns</TabsTrigger>
          </TabsList>
          <TabsContent value="details" className="p-6 border rounded-lg mt-4">
            <h3 className="text-lg font-medium mb-4">Product Details</h3>
            <p className="text-muted-foreground">
              Detailed information about the product would be displayed here, including features, benefits, and use
              cases. This section typically contains comprehensive information about the product that helps buyers make
              informed decisions.
            </p>
          </TabsContent>
          <TabsContent value="specifications" className="p-6 border rounded-lg mt-4">
            <h3 className="text-lg font-medium mb-4">Technical Specifications</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="border-b pb-2">
                <p className="text-sm font-medium">Material</p>
                <p className="text-muted-foreground">Premium quality</p>
              </div>
              <div className="border-b pb-2">
                <p className="text-sm font-medium">Dimensions</p>
                <p className="text-muted-foreground">10 x 20 x 5 cm</p>
              </div>
              <div className="border-b pb-2">
                <p className="text-sm font-medium">Weight</p>
                <p className="text-muted-foreground">0.5 kg</p>
              </div>
              <div className="border-b pb-2">
                <p className="text-sm font-medium">Warranty</p>
                <p className="text-muted-foreground">1 year</p>
              </div>
              <div className="border-b pb-2">
                <p className="text-sm font-medium">Country of Origin</p>
                <p className="text-muted-foreground">United States</p>
              </div>
              <div className="border-b pb-2">
                <p className="text-sm font-medium">Certification</p>
                <p className="text-muted-foreground">ISO 9001</p>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="reviews" className="p-6 border rounded-lg mt-4">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-medium">Customer Reviews</h3>
              <Button>Write a Review</Button>
            </div>
            <div className="space-y-6">
              {[1, 2, 3].map((i) => (
                <Card key={i}>
                  <CardContent className="p-4">
                    <div className="flex justify-between mb-2">
                      <div className="flex">
                        {[...Array(5)].map((_, j) => (
                          <Star
                            key={j}
                            className={`h-4 w-4 ${j < 4 ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"}`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">2 months ago</span>
                    </div>
                    <h4 className="font-medium mb-1">Company Name {i}</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Great product, exactly as described. Fast shipping and excellent packaging. Would definitely order
                      again from this supplier.
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="shipping" className="p-6 border rounded-lg mt-4">
            <h3 className="text-lg font-medium mb-4">Shipping Information</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-1">Delivery Options</h4>
                <p className="text-sm text-muted-foreground">
                  Standard shipping (3-5 business days)
                  <br />
                  Express shipping (1-2 business days)
                  <br />
                  International shipping available (7-14 business days)
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-1">Return Policy</h4>
                <p className="text-sm text-muted-foreground">
                  Returns accepted within 30 days of delivery for defective items only.
                  <br />
                  Buyer is responsible for return shipping costs unless the item is defective.
                  <br />
                  Contact supplier before initiating a return.
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-8">Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <Card key={i} className="overflow-hidden">
              <div className="h-48 bg-muted flex items-center justify-center">
                <Image
                  src={`/placeholder.svg?height=150&width=150&text=Product+${i}`}
                  alt={`Related Product ${i}`}
                  width={150}
                  height={150}
                  className="object-contain"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-medium mb-2">Related Product {i}</h3>
                <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
                  Brief description of the related product that might interest the buyer.
                </p>
                <p className="font-bold">${(Math.random() * 100).toFixed(2)}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
