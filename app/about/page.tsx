'use client';

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Leaf, ArrowLeft, Award, Heart, Recycle, Users } from "lucide-react"
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { useState } from "react"; // --- ADDED ---

export default function AboutPage() {
  // --- ADDED: State to manage language ---
  const [isBengali, setIsBengali] = useState(false);

  // --- ADDED: Content object for easy switching ---
  const storyContent = {
    en: {
      p1: "Our journey began in 1996. After three years, we made a pivotal decision: in 2000, we completely stopped using artificial chemicals, dedicating our four-acre farm to organic practices. Our land is self-contained and fenced, with a layout designed in harmony with the sun and local weather.",
      p2: "Diversity is our strength. We cultivate 25 types of mangoes, 11 indigenous varieties of rice, and a wide array of fruits, pulses, and vegetables, all grown with a deep respect for nature and tradition."
    },
    bn: {
      p1: "আমাদের যাত্রা শুরু হয়েছিল ১৯৯৬ সালে। তিন বছর পর, আমরা একটি গুরুত্বপূর্ণ সিদ্ধান্ত নিয়েছিলাম: ২০০০ সালে, আমরা সম্পূর্ণরূপে কৃত্রিম রাসায়নিক ব্যবহার বন্ধ করে দিই, আমাদের চার একরের খামারটি জৈব অনুশীলনের জন্য উৎসর্গ করি। আমাদের জমি স্বয়ংসম্পূর্ণ এবং বেড়াযুক্ত, যা সূর্য এবং স্থানীয় আবহাওয়ার সাথে সামঞ্জস্য রেখে ডিজাইন করা হয়েছে।",
      p2: "বৈচিত্র্যই আমাদের শক্তি। আমরা ২৫টি জাতের আম, ১১টি দেশীয় জাতের ধান এবং বিভিন্ন ধরণের ফল, ডাল এবং শাকসবজি চাষ করি, যা সবই প্রকৃতি ও ঐতিহ্যের প্রতি গভীর শ্রদ্ধার সাথে জন্মায়।"
    }
  };

  const values = [
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "Sustainability",
      description: "We practice regenerative agriculture that improves soil health and biodiversity.",
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Community",
      description: "We believe in building strong relationships with our guests, neighbors, and community.",
    },
    {
      icon: <Recycle className="h-8 w-8" />,
      title: "Stewardship",
      description: "We are caretakers of the land, committed to leaving it better for future generations.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Education",
      description: "We share our passion for sustainable living through hands-on experiences.",
    },
  ];

  const practices = [
      { icon: <Leaf className="w-8 h-8 text-white"/>, title: "Soil Health", description: "Cover cropping, composting, and minimal tillage to build rich, living soil." },
      { icon: <Leaf className="w-8 h-8 text-white"/>, title: "Water Conservation", description: "Drip irrigation, rainwater harvesting, and drought-resistant varieties." },
      { icon: <Leaf className="w-8 h-8 text-white"/>, title: "Biodiversity", description: "Polyculture plantings, native habitat preservation, and beneficial insect support." },
      { icon: <Leaf className="w-8 h-8 text-white"/>, title: "Animal Welfare", description: "Pasture-raised livestock with rotational grazing and natural behaviors." },
      { icon: <Leaf className="w-8 h-8 text-white"/>, title: "Renewable Energy", description: "Solar and wind power for carbon-neutral farm operations." },
      { icon: <Leaf className="w-8 h-8 text-white"/>, title: "Waste Reduction", description: "Composting, recycling, and circular economy principles." },
  ];

  const certifications = [
    "FSSAI Licensed",
    "Local & Indigenous Varieties",
    "Chemical-Free Farming",
    "Sustainable Land Management",
    "Community Focused", // --- FIXED syntax error here ---
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 mb-8">
          <Link href="/" className="text-green-600 hover:text-green-700 flex items-center">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Home
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-900">About</span>
        </div>

        {/* --- REDESIGNED HERO SECTION --- */}
        <AnimateOnScroll>
          <section className="text-center mb-20">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Rooted in Tradition, Growing for the Future</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Sakriya Farm is more than just a place to stay or shop—it's a living example of our commitment to sustainable agriculture and a deep connection to the land we've nurtured since 1996.
            </p>
          </section>
        </AnimateOnScroll>
        
        {/* --- "OUR STORY" SECTION (MODIFIED) --- */}
        <AnimateOnScroll>
          <section className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden">
                <Image src="/images/gallery/farm-view.jpg" alt="Sakriya Farm Landscape" fill className="object-cover" />
            </div>
            <div className="text-lg text-gray-700 leading-relaxed">
              
              {/* --- ADDED: Header with Toggle Button --- */}
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold text-gray-900">Our Story (আমাদের গল্প)</h2>
                <button
                  onClick={() => setIsBengali(!isBengali)}
                  className="text-sm font-medium text-green-600 hover:text-green-700 whitespace-nowrap"
                >
                  {isBengali ? 'Read in English' : 'বাংলায় পড়ুন'}
                </button>
              </div>

              {/* --- ADDED: Conditional Text Rendering --- */}
              {isBengali ? (
                <>
                  <p className="mb-6">{storyContent.bn.p1}</p>
                  <p>{storyContent.bn.p2}</p>
                </>
              ) : (
                <>
                  <p className="mb-6">{storyContent.en.p1}</p>
                  <p>{storyContent.en.p2}</p>
                </>
              )}
            </div>
          </section>
        </AnimateOnScroll>

        {/* --- "MEET THE FOUNDER" SECTION --- */}
        <AnimateOnScroll>
          <section className="mb-20 bg-green-50 rounded-lg p-12">
             <div className="grid md:grid-cols-3 gap-8 items-center text-center md:text-left">
                <div className="mx-auto">
                   <Image src="/images/birendra-roy.jpg" alt="Birendra Kumar Roy" width={200} height={200} className="rounded-full object-cover aspect-square" />
                </div>
                <div className="md:col-span-2">
                   <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet the Founder</h2>
                   <p className="text-lg text-gray-700 mb-4">
                     "Our main goal is to create a farming model where a family can live healthily and comfortably without artificial chemicals. Over time, we've built a processing center to prevent waste and generate more income, and now, a homestay to share our way of life with you."
                   </p>
                   <p className="font-semibold text-gray-800">— Birendra Kumar Roy</p>
                </div>
             </div>
          </section>
        </AnimateOnScroll>
        
        {/* Values Section */}
        <AnimateOnScroll>
          <section className="mb-20">
            <div className="text-center mb-12"><h2 className="text-3xl font-bold text-gray-900">Our Core Values</h2></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => (
                <Card key={value.title} className="text-center p-6 border-0 shadow-lg hover:-translate-y-2 transition-transform"><CardContent className="p-0"><div className="text-green-600 mb-4 flex justify-center">{value.icon}</div><h3 className="text-xl font-semibold mb-3">{value.title}</h3><p className="text-gray-600 text-sm">{value.description}</p></CardContent></Card>
              ))}
            </div>
          </section>
        </AnimateOnScroll>

        {/* --- REDESIGNED FARMING PRACTICES SECTION --- */}
        <AnimateOnScroll>
          <section className="bg-green-50 rounded-lg p-12 mb-20">
            <div className="text-center mb-12"><h2 className="text-3xl font-bold text-gray-900">Our Sustainable Practices</h2></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {practices.map((practice) => (
                  <div key={practice.title} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 bg-green-600 rounded-full w-16 h-16 flex items-center justify-center">{practice.icon}</div>
                      <div>
                          <h3 className="text-xl font-semibold mb-2">{practice.title}</h3>
                          <p className="text-gray-600">{practice.description}</p>
                      </div>
                  </div>
              ))}
            </div>
          </section>
        </AnimateOnScroll>

        {/* Certifications */}
        <AnimateOnScroll>
          <section className="mb-20">
            <div className="text-center mb-12"><h2 className="text-3xl font-bold text-gray-900">Recognition & Principles</h2></div>
            <div className="flex flex-wrap justify-center gap-4">
              {certifications.map((cert) => (
                <div key={cert} className="flex items-center bg-white border border-green-200 rounded-full px-4 py-2 text-sm"><Award className="h-5 w-5 text-green-600 mr-2" /><span className="text-gray-700">{cert}</span></div>
              ))}
            </div>
          </section>
        </AnimateOnScroll>

        {/* CTA Section */}
        <AnimateOnScroll>
          <section className="text-center bg-gray-100 rounded-lg p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Experience Our Farm</h2>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">We invite you to visit Sakriya Farm and experience sustainable agriculture firsthand. Become part of our mission to create a more sustainable future.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-green-600 hover:bg-green-700"><Link href="/contact">Plan Your Visit</Link></Button>
              <Button asChild size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white bg-transparent"><Link href="/products">Shop Our Products</Link></Button>
            </div>
          </section>
        </AnimateOnScroll>

      </div>
    </div>
  )
}