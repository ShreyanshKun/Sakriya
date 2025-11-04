'use client';

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Leaf, Users, MapPin, ShoppingCart, Award } from "lucide-react";
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export default function HomePage() {
  const [text] = useTypewriter({
    // --- BENGALI SPELLING CORRECTED HERE ---
    words: ['SAKRIYA', 'সক্রিয়'],
    loop: 1,
    typeSpeed: 120,
    deleteSpeed: 80,
    delaySpeed: 1500,
  });

  const featuredProducts = [
    { id: 1, name: "Ripe Mango – 500 ml", price: "₹80", image: "/images/products/garlic-pickle.jpg", description: "Refreshing ripe mango squash" },
    { id: 2, name: "Raw Mango – 250 g", price: "₹60", image: "/images/products/raw-mango-squash.jpg", description: "Raw mango jam" },
    { id: 3, name: "Buckwheat", price: "₹80/kg", image: "/images/products/sauces.jpg", description: "Whole buckwheat" },
  ];

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
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        <Image
          src="/images/garden.jpg"
          alt="Beautiful garden with flowers and watering can"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white tracking-wider h-24 md:h-28">
            <span>{text}</span>
            <Cursor cursorStyle='_' />
          </h1>
          <p className="text-xl md:text-2xl mt-4 mb-8 text-white opacity-90">
            Stay with us, taste our organic produce, and discover sustainable farming practices
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8 py-3">
              <Link href="/accommodations">Book Your Stay</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-gray-900 text-lg px-8 py-3 bg-transparent">
              <Link href="/products">Shop Farm Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <AnimateOnScroll>
        <section className="py-16 px-4 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Welcome to Sakriya Farm and HomeStay</h2>
              <p className="text-lg text-gray-700 mb-6">
                Nestled in the heart of the countryside, Sakriya Farm and HomeStay has been practicing sustainable agriculture for over three generations. We offer authentic farm experiences where guests can participate in daily farm activities, learn about organic farming, and enjoy fresh, locally-grown produce.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center space-x-2"><Leaf className="h-5 w-5 text-green-600" /> <span className="text-gray-700">100% Organic</span></div>
                <div className="flex items-center space-x-2"><Users className="h-5 w-5 text-green-600" /> <span className="text-gray-700">Family Owned</span></div>
                <div className="flex items-center space-x-2"><MapPin className="h-5 w-5 text-green-600" /> <span className="text-gray-700">4 Acres</span></div>
                <div className="flex items-center space-x-2"><Star className="h-5 w-5 text-green-600" /> <span className="text-gray-700">5-Star Rated</span></div>
              </div>
              <Button asChild className="bg-green-600 hover:bg-green-700">
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="relative h-96">
              <video
                src="/images/products/video.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
              >
                Your browser does not support the video tag.
              </video>            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* --- NEW Our Experiences Section --- */}
      <AnimateOnScroll>
        <section className="py-16 px-4 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Live the Farm Life</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Immerse yourself in authentic experiences that connect you with nature and sustainable living.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 border rounded-lg hover:shadow-xl transition-shadow"><Leaf className="h-12 w-12 text-green-600 mx-auto mb-4" /><h3 className="text-xl font-semibold mb-2">Farm Tours</h3><p className="text-gray-600">Explore our 4 acres, meet the animals, and learn about our organic farming methods firsthand.</p></div>
            <div className="text-center p-6 border rounded-lg hover:shadow-xl transition-shadow"><Users className="h-12 w-12 text-green-600 mx-auto mb-4" /><h3 className="text-xl font-semibold mb-2">Homestay Living</h3><p className="text-gray-600">Stay in our comfortable accommodations and wake up to the serene sounds and sights of the farm.</p></div>
            <div className="text-center p-6 border rounded-lg hover:shadow-xl transition-shadow"><ShoppingCart className="h-12 w-12 text-green-600 mx-auto mb-4" /><h3 className="text-xl font-semibold mb-2">Fresh Produce</h3><p className="text-gray-600">Taste the difference with our seasonal, organic produce, from 25 types of mangoes to fresh vegetables.</p></div>
            <div className="text-center p-6 border rounded-lg hover:shadow-xl transition-shadow"><Award className="h-12 w-12 text-green-600 mx-auto mb-4" /><h3 className="text-xl font-semibold mb-2">Workshops</h3><p className="text-gray-600">Participate in seasonal workshops, from jam-making to learning about crop rotation and composting.</p></div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Featured Products */}
      <AnimateOnScroll>
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12"><h2 className="text-3xl font-bold text-gray-900 mb-4">Fresh From Our Farm</h2><p className="text-lg text-gray-600 max-w-2xl mx-auto">Discover our selection of organic, farm-fresh products grown with care and harvested at peak freshness</p></div>
            <div className="grid md:grid-cols-3 gap-8">
              {featuredProducts.map((product) => (
                <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48"><Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" /><Badge className="absolute top-2 left-2 bg-green-600">Fresh</Badge></div>
                  <CardContent className="p-6"><h3 className="text-xl font-semibold mb-2">{product.name}</h3><p className="text-gray-600 mb-4">{product.description}</p><div className="flex justify-between items-center"><span className="text-2xl font-bold text-green-600">{product.price}</span><Button size="sm" className="bg-green-600 hover:bg-green-700">Add to Cart</Button></div></CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12"><Link href="/products"><Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white bg-transparent">View All Products</Button></Link></div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Testimonials */}
      <AnimateOnScroll>
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12"><h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Guests Say</h2></div>
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="p-6"><CardContent className="p-0"><div className="flex items-center mb-4">{[...Array(testimonial.rating)].map((_, i) => (<Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />))}</div><p className="text-gray-700 mb-4 italic">&quot;{testimonial.comment}&quot;</p><div><p className="font-semibold">{testimonial.name}</p><p className="text-sm text-gray-500">{testimonial.location}</p></div></CardContent></Card>
              ))}
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* --- NEW Mini Gallery Section --- */}
      <AnimateOnScroll>
        <section className="py-16 px-4 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Moments from Sakriya</h2>
          </div>

          {/* --- MODIFIED GRID --- */}
          {/* This grid now shows 1, 2, or 4 columns and contains only 4 images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

            {/* Image 1 */}
            <div className="overflow-hidden rounded-lg aspect-[3/4] shadow-lg">
              <Image
                src="/images/products/house2.jpg"
                alt="Farm view"
                width={500}
                height={800}
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Image 2 */}
            <div className="overflow-hidden rounded-lg aspect-[3/4] shadow-lg">
              <Image
                src="/images/folder1/13.jpg"
                alt="Homestay room"
                width={500}
                height={800}
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Image 3 */}
            <div className="overflow-hidden rounded-lg aspect-[3/4] shadow-lg">
              <Image
                src="/images/products/homestay1.jpg"
                alt="Cottage exterior"
                width={500}
                height={800}
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Image 4 */}
            <div className="overflow-hidden rounded-lg aspect-[3/4] shadow-lg">
              <Image
                src="/images/folder1/15.jpg"
                alt="Nature path"
                width={500}
                height={800}
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>

          </div>
          {/* --- END OF MODIFIED GRID --- */}

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white bg-transparent">
              <Link href="/gallery">View Full Gallery</Link>
            </Button>
          </div>
        </section>
      </AnimateOnScroll>

      {/* CTA Section */}
      <AnimateOnScroll>
        <section className="py-16 bg-green-600 text-white">
          <div className="max-w-4xl mx-auto text-center px-4"><h2 className="text-3xl font-bold mb-4">Ready for Your Farm Adventure?</h2><p className="text-xl mb-8 opacity-90">Book your stay today and experience sustainable living firsthand</p><div className="flex flex-col sm:flex-row gap-4 justify-center"><Button asChild size="lg" className="bg-white text-green-600 hover:bg-gray-100"><Link href="/accommodations">Book Accommodation</Link></Button></div></div>
        </section>
      </AnimateOnScroll>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div><div className="flex items-center space-x-2 mb-4"><Leaf className="h-6 w-6 text-green-400" /><span className="text-lg font-bold">Sakriya Farm and HomeStay</span></div><p className="text-gray-400">Sustainable farming and authentic rural experiences since 1996.</p></div>
            <div><h3 className="font-semibold mb-4">Quick Links</h3><ul className="space-y-2 text-gray-400"><li><Link href="/products" className="hover:text-white">Products</Link></li><li><Link href="/accommodations" className="hover:text-white">Accommodations</Link></li><li><Link href="/about" className="hover:text-white">About Us</Link></li><li><Link href="/gallery" className="hover:text-white">Gallery</Link></li></ul></div>
            <div><h3 className="font-semibold mb-4">Contact</h3><ul className="space-y-2 text-gray-400"><li>Vengadamangalam</li><li>Tamil Nadu, India</li><li>Phone: (555) 123-4567</li><li>Email: info@sakriyafarm.com</li></ul></div>
            <div><h3 className="font-semibold mb-4">Follow Us</h3><p className="text-gray-400 mb-4">Stay updated with our latest harvests and events</p><div className="flex space-x-4"><Button size="sm" variant="outline" className="border-gray-600 text-gray-400 hover:text-white bg-transparent">Facebook</Button><Button size="sm" variant="outline" className="border-gray-600 text-gray-400 hover:text-white bg-transparent">Instagram</Button></div></div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400"><p>&copy; {new Date().getFullYear()} Sakriya Farm and HomeStay. All rights reserved.</p></div>
        </div>
      </footer>
    </div>
  );
}
