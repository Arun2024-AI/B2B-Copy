import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  return (
    <div className="relative bg-muted overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-background/0 z-10"></div>
      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32 relative z-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            The B2B Marketplace for Modern Businesses
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl">
            Connect with verified suppliers, discover quality products, and grow your business with our trusted B2B
            platform.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" asChild>
              <Link href="/products">
                Explore Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/suppliers">Find Suppliers</Link>
            </Button>
          </div>
          <div className="mt-12 flex items-center gap-2">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-primary/10 border-2 border-background flex items-center justify-center text-xs font-medium"
                >
                  {i}
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              <span className="font-medium">10,000+</span> businesses trust our marketplace
            </p>
          </div>
        </div>
      </div>
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1/2 h-full hidden lg:block">
        <div className="w-full h-full bg-gradient-to-l from-background to-transparent"></div>
      </div>
    </div>
  )
}
