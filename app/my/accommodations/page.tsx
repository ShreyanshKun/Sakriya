import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Leaf, ArrowLeft, Users, Bed, Bath } from "lucide-react"

export default function AccommodationsPage() {
  const accommodations = [
    {
      id: 1,
      name: "The Farmhouse Suite",
      price: "₹12,450/night",
      image: "/placeholder.svg?height=300&width=400",
      description: "Spacious suite in our historic farmhouse with panoramic valley views",
      capacity: "2-4 guests",
      bedrooms: 2,
      bathrooms: 1,
      amenities: ["Free WiFi", "Breakfast Included", "Farm Tour", "Kitchen Access"],
      features: ["Valley Views", "Historic Building", "Private Entrance"],
    },
    {
      id: 2,
      name: "Cozy Cottage",
      price: "₹9,960/night",
      image: "/placeholder.svg?height=300&width=400",
      description: "Intimate cottage perfect for couples, surrounded by herb gardens",
      capacity: "2 guests",
      bedrooms: 1,
      bathrooms: 1,
      amenities: ["Free WiFi", "Breakfast Included", "Garden Access", "Fireplace"],
      features: ["Garden Views", "Romantic Setting", "Private Patio"],
    },
    {
      id: 3,
      name: "Barn Loft",
      price: "₹14,940/night",
      image: "/placeholder.svg?height=300&width=400",
      description: "Converted barn loft with rustic charm and modern amenities",
      capacity: "4-6 guests",
      bedrooms: 2,
      bathrooms: 2,
      amenities: ["Free WiFi", "Full Kitchen", "Farm Tour", "Parking"],
      features: ["Rustic Design", "High Ceilings", "Mountain Views"],
    },
  ]

  const experiences = [
    "Daily farm tours and animal feeding",
    "Hands-on farming activities",
    "Farm-to-table breakfast with fresh ingredients",
    "Seasonal harvest participation",
    "Cooking classes with farm produce",
    "Nature walks and hiking trails",
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-green-600" />
              <span className="text-xl font-bold text-gray-900">Sakria</span>
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-green-600">
                Home
              </Link>
              <Link href="/products" className="text-gray-700 hover:text-green-600">
                Products
              </Link>
              <Link href="/accommodations" className="text-gray-900 hover:text-green-600 font-medium">
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

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 mb-8">
          <Link href="/" className="text-green-600 hover:text-green-700 flex items-center">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Home
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-900">Accommodations</span>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Farm Stay Accommodations</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience authentic farm life in our comfortable accommodations. Wake up to fresh air, farm sounds, and the
                          most beautiful sunrises you&apos;ve ever seen.
          </p>
        </div>

        {/* Accommodations Grid */}
        <div className="grid lg:grid-cols-1 gap-12 mb-16">
          {accommodations.map((accommodation) => (
            <Card key={accommodation.id} className="overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-80 md:h-auto">
                  <Image
                    src={accommodation.image || "/placeholder.svg"}
                    alt={accommodation.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-8">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold mb-2">{accommodation.name}</h3>
                    <p className="text-gray-600 mb-4">{accommodation.description}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        {accommodation.capacity}
                      </div>
                      <div className="flex items-center">
                        <Bed className="h-4 w-4 mr-1" />
                        {accommodation.bedrooms} bed{accommodation.bedrooms > 1 ? "s" : ""}
                      </div>
                      <div className="flex items-center">
                        <Bath className="h-4 w-4 mr-1" />
                        {accommodation.bathrooms} bath{accommodation.bathrooms > 1 ? "s" : ""}
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Features</h4>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {accommodation.features.map((feature, index) => (
                        <Badge key={index} variant="outline" className="text-green-600 border-green-600">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Amenities</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {accommodation.amenities.map((amenity, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
                          {amenity}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-3xl font-bold text-green-600">{accommodation.price}</span>
                      <span className="text-gray-500 ml-1">per night</span>
                    </div>
                    <Button className="bg-green-600 hover:bg-green-700">Book Now</Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* Farm Experience Section */}
        <div className="bg-green-50 rounded-lg p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Farm Experience Includes</h2>
            <p className="text-gray-700">
              Every stay comes with authentic farm experiences that connect you with sustainable agriculture
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {experiences.map((experience, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-gray-700">{experience}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Booking Info */}
        <div className="bg-gray-50 rounded-lg p-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Book Your Stay?</h2>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Contact us directly to check availability and make your reservation. We&apos;re happy to help you plan the
              perfect farm getaway.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                Check Availability
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white bg-transparent"
              >
                Call Us: (555) 123-4567
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
