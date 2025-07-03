import { Suspense } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, Filter, SlidersHorizontal } from "lucide-react"
import ProductGrid from "@/components/product-grid"

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">All Products</h1>
          <p className="text-muted-foreground">Browse our extensive catalog of B2B products</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
          <Button variant="outline" size="sm">
            Sort by
            <ChevronDown className="h-4 w-4 ml-2" />
          </Button>
          <Button variant="outline" size="sm">
            <SlidersHorizontal className="h-4 w-4 mr-2" />
            View
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="hidden lg:block space-y-6">
          <div>
            <h3 className="font-medium mb-4">Categories</h3>
            <div className="space-y-2">
              {["Electronics", "Apparel", "Food & Beverage", "Construction", "Agriculture"].map((category) => (
                <div key={category} className="flex items-center">
                  <input
                    type="checkbox"
                    id={category}
                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <label htmlFor={category} className="ml-2 text-sm">
                    {category}
                  </label>
                </div>
              ))}
              <Button variant="link" size="sm" className="p-0">
                Show more
              </Button>
            </div>
          </div>

          <div className="border-t pt-6">
            <h3 className="font-medium mb-4">Price Range</h3>
            <div className="flex items-center gap-2">
              <input type="text" placeholder="Min" className="w-full p-2 text-sm border rounded" />
              <span>-</span>
              <input type="text" placeholder="Max" className="w-full p-2 text-sm border rounded" />
            </div>
            <Button className="w-full mt-2" size="sm">
              Apply
            </Button>
          </div>

          <div className="border-t pt-6">
            <h3 className="font-medium mb-4">Supplier Location</h3>
            <div className="space-y-2">
              {["North America", "Europe", "Asia", "South America", "Africa"].map((location) => (
                <div key={location} className="flex items-center">
                  <input
                    type="checkbox"
                    id={location}
                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <label htmlFor={location} className="ml-2 text-sm">
                    {location}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t pt-6">
            <h3 className="font-medium mb-4">Minimum Order</h3>
            <div className="space-y-2">
              {["No minimum", "1-99 units", "100-499 units", "500+ units"].map((order) => (
                <div key={order} className="flex items-center">
                  <input
                    type="radio"
                    name="minimum-order"
                    id={order}
                    className="h-4 w-4 border-gray-300 text-primary focus:ring-primary"
                  />
                  <label htmlFor={order} className="ml-2 text-sm">
                    {order}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t pt-6">
            <Button variant="outline" className="w-full">
              Clear All Filters
            </Button>
          </div>
        </div>

        <div className="lg:col-span-3">
          <Suspense fallback={<div>Loading products...</div>}>
            <ProductGrid />
          </Suspense>

          <div className="mt-8 flex justify-center">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" disabled>
                &lt;
              </Button>
              <Button variant="outline" size="sm" className="bg-primary text-primary-foreground">
                1
              </Button>
              <Button variant="outline" size="sm">
                2
              </Button>
              <Button variant="outline" size="sm">
                3
              </Button>
              <Button variant="outline" size="sm">
                4
              </Button>
              <Button variant="outline" size="sm">
                5
              </Button>
              <Button variant="outline" size="icon">
                &gt;
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
