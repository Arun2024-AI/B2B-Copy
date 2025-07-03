"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Star } from "lucide-react"
import { fetchProducts } from "@/lib/api"

interface Product {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
}

export default function ProductGrid() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true)
        const data = await fetchProducts()
        setProducts(data.slice(0, 8)) // Only show first 8 products
      } catch (err) {
        setError("Failed to load products. Please try again later.")
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    getProducts()
  }, [])

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[...Array(8)].map((_, i) => (
          <Card key={i} className="overflow-hidden">
            <div className="h-48 bg-muted animate-pulse"></div>
            <CardContent className="p-4">
              <div className="h-4 bg-muted animate-pulse rounded mb-2"></div>
              <div className="h-4 bg-muted animate-pulse rounded w-2/3"></div>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <div className="h-10 bg-muted animate-pulse rounded w-full"></div>
            </CardFooter>
          </Card>
        ))}
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-500">{error}</p>
        <Button onClick={() => window.location.reload()} className="mt-4">
          Try Again
        </Button>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <Card key={product.id} className="overflow-hidden flex flex-col h-full">
          <div className="relative h-48 bg-muted">
            <Image src={product.image || "/placeholder.svg"} alt={product.title} fill className="object-contain p-4" />
          </div>
          <CardContent className="p-4 flex-grow">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-medium px-2 py-1 bg-muted rounded-full">{product.category}</span>
              <div className="flex items-center">
                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                <span className="text-xs ml-1">{product.rating.rate}</span>
              </div>
            </div>
            <Link href={`/products/${product.id}`} className="hover:underline">
              <h3 className="font-medium line-clamp-2 mb-2">{product.title}</h3>
            </Link>
            <p className="text-sm text-muted-foreground line-clamp-2 mb-2">{product.description}</p>
            <p className="font-bold">${product.price.toFixed(2)}</p>
          </CardContent>
          <CardFooter className="p-4 pt-0">
            <Button className="w-full" size="sm">
              <ShoppingCart className="h-4 w-4 mr-2" />
              Add to Cart
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
