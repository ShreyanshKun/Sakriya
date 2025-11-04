import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Leaf, ArrowLeft, MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {
  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Address",
      details: ["123 Farm Road", "Green Valley, CA 95945", "United States"],
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      details: ["Main: (555) 123-4567", "Tours: (555) 123-4568", "Emergency: (555) 123-4569"],
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
              details: ["info@sakriafarm.com", "bookings@sakriafarm.com", "tours@sakriafarm.com"],
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Hours",
      details: ["Mon-Fri: 8:00 AM - 6:00 PM", "Sat-Sun: 9:00 AM - 5:00 PM", "Tours by appointment"],
    },
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
              <Link href="/accommodations" className="text-gray-700 hover:text-green-600">
                Stay
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-green-600">
                About
              </Link>
              <Link href="/contact" className="text-gray-900 hover:text-green-600 font-medium">
                Contact
              </Link>
            </div>
            <Button className="bg-green-600 hover:bg-green-700">Get Directions</Button>
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
          <span className="text-gray-900">Contact</span>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We&apos;d love to hear from you! Whether you have questions about our products, want to book a stay, or schedule
            a farm tour, we&apos;re here to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card className="p-8">
              <CardContent className="p-0">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" className="mt-1" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone (Optional)</Label>
                    <Input id="phone" type="tel" placeholder="(555) 123-4567" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <select
                      id="subject"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                    >
                      <option>General Inquiry</option>
                      <option>Accommodation Booking</option>
                      <option>Farm Tour Booking</option>
                      <option>Product Order</option>
                      <option>Group Visit</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Tell us how we can help you..." className="mt-1 min-h-32" />
                  </div>
                  <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="p-6">
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-4">
                      <div className="text-green-600 mt-1">{info.icon}</div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">{info.title}</h3>
                        <div className="space-y-1">
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-gray-600">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Map Placeholder */}
            <Card className="overflow-hidden">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500">Interactive Map</p>
                  <p className="text-sm text-gray-400">123 Farm Road, Green Valley, CA</p>
                </div>
              </div>
            </Card>

            {/* Directions */}
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-semibold text-gray-900 mb-4">Getting Here</h3>
                <div className="space-y-3 text-sm text-gray-600">
                  <p>
                    <strong>From San Francisco:</strong> Take I-80 East for 45 miles, exit at Green Valley Road, turn
                    left and continue for 3 miles.
                  </p>
                  <p>
                    <strong>From Sacramento:</strong> Take Highway 50 West for 30 miles, exit at Farm Road, turn right
                    and continue for 1 mile.
                  </p>
                  <p>
                    <strong>Parking:</strong> Free parking available on-site for all visitors.
                  </p>
                </div>
                <Button
                  variant="outline"
                  className="mt-4 border-green-600 text-green-600 hover:bg-green-600 hover:text-white bg-transparent"
                >
                  Get Directions
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Do I need to make a reservation?</h3>
              <p className="text-gray-600 text-sm mb-4">
                Yes, we recommend booking accommodations and farm tours in advance, especially during peak season
                (spring and summer).
              </p>

              <h3 className="font-semibold text-gray-900 mb-2">What should I bring for a farm tour?</h3>
              <p className="text-gray-600 text-sm mb-4">
                Comfortable walking shoes, weather-appropriate clothing, and a hat. We provide all necessary equipment
                for hands-on activities.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Are children welcome?</h3>
              <p className="text-gray-600 text-sm mb-4">
                We love hosting families and have activities suitable for all ages. Children under 5 receive free farm
                tours.
              </p>

              <h3 className="font-semibold text-gray-900 mb-2">Can I purchase products online?</h3>
              <p className="text-gray-600 text-sm mb-4">
                Currently, we offer products for purchase during visits or by phone order. Online ordering is coming
                soon!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
