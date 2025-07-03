import Link from "next/link"
import { Truck, Cpu, Shirt, Utensils, Construction, Leaf, Hammer, Wrench } from "lucide-react"

const categories = [
  {
    name: "Electronics",
    icon: <Cpu className="h-6 w-6" />,
    href: "/categories/electronics",
    color: "bg-blue-100 text-blue-700",
  },
  {
    name: "Apparel",
    icon: <Shirt className="h-6 w-6" />,
    href: "/categories/apparel",
    color: "bg-purple-100 text-purple-700",
  },
  {
    name: "Food & Beverage",
    icon: <Utensils className="h-6 w-6" />,
    href: "/categories/food-beverage",
    color: "bg-orange-100 text-orange-700",
  },
  {
    name: "Construction",
    icon: <Construction className="h-6 w-6" />,
    href: "/categories/construction",
    color: "bg-yellow-100 text-yellow-700",
  },
  {
    name: "Agriculture",
    icon: <Leaf className="h-6 w-6" />,
    href: "/categories/agriculture",
    color: "bg-green-100 text-green-700",
  },
  {
    name: "Logistics",
    icon: <Truck className="h-6 w-6" />,
    href: "/categories/logistics",
    color: "bg-red-100 text-red-700",
  },
  {
    name: "Tools",
    icon: <Hammer className="h-6 w-6" />,
    href: "/categories/tools",
    color: "bg-indigo-100 text-indigo-700",
  },
  {
    name: "Machinery",
    icon: <Wrench className="h-6 w-6" />,
    href: "/categories/machinery",
    color: "bg-pink-100 text-pink-700",
  },
]

export default function FeaturedCategories() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-8">Browse Categories</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {categories.map((category) => (
          <Link
            key={category.name}
            href={category.href}
            className="flex flex-col items-center p-6 rounded-lg border border-border hover:border-primary/50 hover:shadow-md transition-all"
          >
            <div className={`${category.color} p-3 rounded-full mb-4`}>{category.icon}</div>
            <span className="font-medium text-center">{category.name}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
