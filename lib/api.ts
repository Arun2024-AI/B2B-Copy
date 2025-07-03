// This is a mock API service that simulates fetching data from an external API

// Fetch all products
export async function fetchProducts() {
  try {
    // Using a public API for demonstration purposes
    const response = await fetch("https://fakestoreapi.com/products")

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error("Error fetching products:", error)
    throw error
  }
}

// Fetch a single product by ID
export async function fetchProductById(id: string | number) {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`)

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error(`Error fetching product ${id}:`, error)
    throw error
  }
}

// Fetch all categories
export async function fetchCategories() {
  try {
    const response = await fetch("https://fakestoreapi.com/products/categories")

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error("Error fetching categories:", error)
    throw error
  }
}

// Search products by term
export async function searchProducts(term: string) {
  try {
    // In a real API, you would have a search endpoint
    // Here we're fetching all products and filtering client-side
    const allProducts = await fetchProducts()

    if (!term) return allProducts

    const searchTerm = term.toLowerCase()
    return allProducts.filter(
      (product: any) =>
        product.title.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm),
    )
  } catch (error) {
    console.error("Error searching products:", error)
    throw error
  }
}

// Mock function to create a new product
export async function createProduct(productData: any) {
  try {
    // In a real app, this would send data to your API
    console.log("Creating product with data:", productData)

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Return mock response
    return {
      id: Math.floor(Math.random() * 1000) + 100,
      ...productData,
      createdAt: new Date().toISOString(),
    }
  } catch (error) {
    console.error("Error creating product:", error)
    throw error
  }
}

// Mock function for user authentication
export async function loginUser(credentials: { email: string; password: string }) {
  try {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // This is just a mock - in a real app, you would validate against your backend
    if (credentials.email && credentials.password) {
      return {
        user: {
          id: "user-123",
          name: "Demo User",
          email: credentials.email,
          role: "buyer",
        },
        token: "mock-jwt-token",
      }
    } else {
      throw new Error("Invalid credentials")
    }
  } catch (error) {
    console.error("Login error:", error)
    throw error
  }
}

// Mock function for user registration
export async function registerUser(userData: any) {
  try {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // This is just a mock - in a real app, you would send this to your backend
    console.log("Registering user with data:", userData)

    return {
      user: {
        id: "user-" + Math.floor(Math.random() * 1000),
        name: `${userData.firstName} ${userData.lastName}`,
        email: userData.email,
        company: userData.companyName,
        role: userData.accountType,
      },
      token: "mock-jwt-token",
    }
  } catch (error) {
    console.error("Registration error:", error)
    throw error
  }
}
