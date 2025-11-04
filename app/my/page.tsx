import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Leaf, Users, MapPin } from "lucide-react"

export default function HomePage() {
  const featuredProducts = [
    {
      id: 1,
      name: "Organic Honey",
      price: "₹2,074",
      image: "/placeholder.svg?height=200&width=200",
      description: "Pure wildflower honey from our beehives",
    },
    {
      id: 2,
      name: "Fresh Herbs Bundle",
      price: "₹1,078",
      image: "/placeholder.svg?height=200&width=200",
      description: "Basil, rosemary, thyme, and oregano",
    },
    {
      id: 3,
      name: "Seasonal Vegetables",
      price: "₹1,576",
      image: "/placeholder.svg?height=200&width=200",
      description: "Farm-fresh seasonal produce basket",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      comment: "An incredible experience! The farm tour was educational and the products are amazing quality.",
      location: "California, USA",
    },
    {
      name: "Marco Silva",
      rating: 5,
      comment: "Perfect blend of relaxation and learning. The homestay was comfortable and the food was exceptional.",
      location: "São Paulo, Brazil",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-green-600" />
              <span className="text-xl font-bold text-gray-900">Sakria</span>
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-900 hover:text-green-600 font-medium">
                Home
              </Link>
              <Link href="/products" className="text-gray-700 hover:text-green-600">
                Products
              </Link>
              <Link href="/accommodations" className="text-gray-700 hover:text-green-600">
                Stay
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-green-600">
                About
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-green-600">
                Contact
              </Link>
            </div>
            <Button className="bg-green-600 hover:bg-green-700">Book Now</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        <Image
          src="/images/garden.jpg"
          alt="Beautiful garden with flowers and watering can"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-opacity-50" />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">SAKRIA</h1>
          <p className="text-xl md:text-2xl mb-8 text-white opacity-90">
            Stay with us, taste our organic produce, and discover sustainable farming practices
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/accommodations">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8 py-3">
                Book Your Stay
              </Button>
            </Link>
            <Link href="/products">
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-gray-900 text-lg px-8 py-3 bg-transparent"
            >
              Shop Farm Products
            </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Welcome to Sakria Farm and HomeStay</h2>
            <p className="text-lg text-gray-700 mb-6">
              Nestled in the heart of the countryside, Sakria Farm and HomeStay has been practicing sustainable agriculture for
              over three generations. We offer authentic farm experiences where guests can participate in daily farm
              activities, learn about organic farming, and enjoy fresh, locally-grown produce.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center space-x-2">
                <Leaf className="h-5 w-5 text-green-600" />
                <span className="text-gray-700">100% Organic</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-green-600" />
                <span className="text-gray-700">Family Owned</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-green-600" />
                <span className="text-gray-700">50 Acres</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-green-600" />
                <span className="text-gray-700">5-Star Rated</span>
              </div>
            </div>
            <Button className="bg-green-600 hover:bg-green-700">Learn More About Us</Button>
          </div>
          <div className="relative h-96">
            <Image
              src="/placeholder.svg?height=400&width=500"
              alt="Farmers working in the garden"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Fresh From Our Farm</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our selection of organic, farm-fresh products grown with care and harvested at peak freshness
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
                  <Badge className="absolute top-2 left-2 bg-green-600">Fresh</Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-green-600">{product.price}</span>
                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/products">
              <Button
                size="lg"
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white bg-transparent"
              >
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Guests Say</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">&quot;{testimonial.comment}&quot;</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4">Ready for Your Farm Adventure?</h2>
          <p className="text-xl mb-8 opacity-90">Book your stay today and experience sustainable living firsthand</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
              Book Accommodation
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Leaf className="h-6 w-6 text-green-400" />
                <span className="text-lg font-bold">Sakria Farm and HomeStay</span>
              </div>
              <p className="text-gray-400">Sustainable farming and authentic rural experiences since 1952.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/products" className="hover:text-white">
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="/accommodations" className="hover:text-white">
                    Accommodations
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>123 Farm Road</li>
                <li>Green Valley, CA 95945</li>
                <li>Phone: (555) 123-4567</li>
                <li>Email: info@sakriafarm.com</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Follow Us</h3>
              <p className="text-gray-400 mb-4">Stay updated with our latest harvests and events</p>
              <div className="flex space-x-4">
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-600 text-gray-400 hover:text-white bg-transparent"
                >
                  Facebook
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-600 text-gray-400 hover:text-white bg-transparent"
                >
                  Instagram
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Sakria Farm and HomeStay. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
