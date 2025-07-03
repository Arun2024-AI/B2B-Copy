import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import ProductGrid from "@/components/product-grid"
import FeaturedCategories from "@/components/featured-categories"
import HeroSection from "@/components/hero-section"
import TrustedBy from "@/components/trusted-by"

export default async function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Discover Products for Your Business</h2>
          <p className="text-muted-foreground max-w-2xl">
            Connect with thousands of verified suppliers and find the right products for your business needs.
          </p>
        </div>

        <div className="relative w-full max-w-2xl mx-auto mb-16">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
          <input
            type="text"
            placeholder="Search for products, suppliers, or categories..."
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-input bg-background"
          />
          <Button className="absolute right-1 top-1/2 transform -translate-y-1/2">Search</Button>
        </div>

        <FeaturedCategories />

        <div className="mt-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Featured Products</h2>
            <Link href="/products" className="text-primary hover:underline">
              View all products
            </Link>
          </div>
          <ProductGrid />
        </div>

        <TrustedBy />

        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to grow your business?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Join thousands of businesses that use our marketplace to find reliable suppliers and quality products.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/register">Join as Buyer</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/register?type=seller">Become a Supplier</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
