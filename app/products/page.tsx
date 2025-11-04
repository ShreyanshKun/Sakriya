'use client';

import Image from "next/image"
import { useState, useMemo } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Leaf, ArrowLeft, Plus, Minus } from "lucide-react"
import { useCart } from "@/contexts/CartContext"

export default function ProductsPage() {
  const { cart, addItem, updateQuantity, isInCart, getItemQuantity } = useCart();
  
  const products = useMemo(() => [
    // Squash
    { id: 1, name: "Ripe Mango – 500 ml", price: "₹80", image: "/images/products/garlic-pickle.jpg", description: "Refreshing ripe mango squash", category: "Squash", inStock: true, organic: true },
    { id: 2, name: "Raw Mango – 500 ml", price: "₹80", image: "/images/products/lemon-squash.jpg", description: "Tangy raw mango squash", category: "Squash", inStock: true, organic: true },
    { id: 3, name: "Raw Mango (Cumin) – 500 ml", price: "₹80", image: "/images/products/lemon-squash.jpg", description: "Raw mango squash with cumin", category: "Squash", inStock: true, organic: true },
    { id: 4, name: "Roasted Mango – 500 ml", price: "₹85", image: "/images/products/garlic-pickle.jpg", description: "Smoky roasted mango squash", category: "Squash", inStock: true, organic: true },
    { id: 5, name: "Lemon – 500 ml", price: "₹90", image: "/images/products/mango-oil-pickle.jpg", description: "Classic lemon squash", category: "Squash", inStock: true, organic: true },
    { id: 6, name: "Lime Cordial – 500 ml", price: "₹150", image: "/images/products/lime-cordial.jpg", description: "Sweet and tangy lime cordial", category: "Squash", inStock: true, organic: true },

    // Pickles
    { id: 7, name: "Garlic – 250 g", price: "₹70", image: "/images/products/garlic-pickle.jpg", description: "Garlic pickle", category: "Pickles", inStock: true, organic: true },
    { id: 8, name: "Mango Oil (Aam Tel) – 250 g", price: "₹60", image: "/images/products/mango-oil-pickle.jpg", description: "Traditional aam tel pickle", category: "Pickles", inStock: true, organic: true },
    { id: 9, name: "Jaggery Mango – 250 g", price: "₹60", image: "/images/products/jaggery-mango-pickle.jpg", description: "Sweet jaggery mango pickle", category: "Pickles", inStock: true, organic: true },
    { id: 10, name: "Olive – 250 g", price: "₹60", image: "/images/products/mixed-pickle.jpg", description: "Olive pickle", category: "Pickles", inStock: true, organic: true },
    { id: 11, name: "Elephant Apple (Chalta) – 250 g", price: "₹60", image: "/images/products/chalta-pickle.jpg", description: "Chalta pickle", category: "Pickles", inStock: true, organic: true },
    { id: 12, name: "Mixed – 250 g", price: "₹60", image: "/images/products/mixed-pickle.jpg", description: "Mixed pickle", category: "Pickles", inStock: true, organic: true },

    // Jam
    { id: 13, name: "Raw Mango – 250 g", price: "₹60", image: "/images/products/raw-mango-squash.jpg", description: "Raw mango jam", category: "Jam", inStock: true, organic: true },
    { id: 14, name: "Mixed – 250 g", price: "₹60", image: "/images/products/raw-mango-squash.jpg", description: "Mixed fruit jam", category: "Jam", inStock: true, organic: true },

    // Sauces
    { id: 15, name: "Chili Sauce – 500 ml", price: "₹80", image: "/images/products/lime-cordial.jpg", description: "Spicy chili sauce", category: "Sauces", inStock: true, organic: true },
    { id: 16, name: "Mango Kasundi – 500 ml", price: "₹80", image: "/images/products/chalta-pickle.jpg", description: "Mango mustard sauce", category: "Sauces", inStock: true, organic: true },

    // Others
    { id: 17, name: "Aam Sattva (Mango Bar) – 1 kg", price: "₹1000", image: "/images/products/mango-oil-pickle.jpg", description: "Traditional mango bars", category: "Others", inStock: true, organic: true },
    { id: 18, name: "Turmeric Powder – 100 g", price: "₹40", image: "/images/products/jam-new.jpg", description: "Ground turmeric powder", category: "Others", inStock: true, organic: true },
    { id: 19, name: "Buckwheat", price: "₹80/kg", image: "/images/products/sauces.jpg", description: "Whole buckwheat", category: "Others", inStock: true, organic: true },
  ], []);

  const categories = ["All", "Squash", "Pickles", "Jam", "Sauces", "Others"]

  const [selectedCategory, setSelectedCategory] = useState<string>("All")
  const filteredProducts = useMemo(() => (
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory)
  ), [selectedCategory, products])

  return (
    <div className="min-h-screen bg-white">
      {/* The <nav> section has been removed from here. */}

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 mb-8">
          <Link href="/" className="text-green-600 hover:text-green-700 flex items-center">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Home
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-900">Products</span>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Farm Fresh Products</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            All our products are grown and produced on our farm using sustainable, organic practices. From field to
            table, we ensure the highest quality and freshness.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === selectedCategory ? "default" : "outline"}
              className={category === selectedCategory
                ? "bg-green-600 hover:bg-green-700"
                : "border-green-600 text-green-600 hover:bg-green-600 hover:text-white"}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Products Grid (filtered) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-64">
                <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
                <div className="absolute top-2 left-2 flex gap-2">
                  {product.organic && <Badge className="bg-green-600">Organic</Badge>}
                  {!product.inStock && <Badge variant="secondary">Out of Stock</Badge>}
                </div>
              </div>
              <CardContent className="p-6">
                <div className="mb-2">
                  <Badge variant="outline" className="text-xs">{product.category}</Badge>
                </div>
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-green-600">{product.price}</span>
                  {product.inStock ? (
                    <div className="flex items-center space-x-2">
                      {isInCart(product.id) ? (
                        <div className="flex items-center space-x-1">
                          <Button size="sm" variant="outline" onClick={() => updateQuantity(product.id, getItemQuantity(product.id) - 1)} className="h-8 w-8 p-0">
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="text-sm font-medium w-8 text-center">{getItemQuantity(product.id)}</span>
                          <Button size="sm" variant="outline" onClick={() => updateQuantity(product.id, getItemQuantity(product.id) + 1)} className="h-8 w-8 p-0">
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                      ) : (
                        <Button
                          size="sm"
                          className="bg-green-600 hover:bg-green-700"
                          onClick={() => addItem({
                            id: product.id,
                            name: product.name,
                            price: parseInt(product.price.replace(/[^\d]/g, '')),
                            image: product.image,
                            description: product.description,
                            category: product.category,
                            organic: product.organic,
                            inStock: product.inStock,
                          })}
                        >
                          Add to Cart
                        </Button>
                      )}
                    </div>
                  ) : (
                    <Button size="sm" className="bg-gray-400" disabled>Out of Stock</Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Farm Practices Info */}
        <div className="mt-16 bg-green-50 rounded-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Farming Practices</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              We believe in sustainable agriculture that respects the land and produces the healthiest food possible.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">100% Organic</h3>
              <p className="text-gray-600 text-sm">No synthetic pesticides, herbicides, or fertilizers used</p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Sustainable Methods</h3>
              <p className="text-gray-600 text-sm">Crop rotation, composting, and natural pest management</p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Local & Fresh</h3>
              <p className="text-gray-600 text-sm">Harvested daily and delivered within 24 hours</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
