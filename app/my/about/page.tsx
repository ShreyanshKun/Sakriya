import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Leaf, ArrowLeft, Award, Heart, Recycle, Users } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "Sustainability",
      description:
        "We practice regenerative agriculture that improves soil health and biodiversity while producing nutritious food.",
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Community",
      description: "We believe in building strong relationships with our guests, neighbors, and the broader community.",
    },
    {
      icon: <Recycle className="h-8 w-8" />,
      title: "Stewardship",
      description:
        "We are caretakers of the land, committed to leaving it better than we found it for future generations.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Education",
      description:
        "We share our knowledge and passion for sustainable living through hands-on experiences and learning opportunities.",
    },
  ]

  const timeline = [
    {
      year: "1952",
      title: "Farm Founded",
      description:
        "Great-grandfather Thomas established the farm with 20 acres and a vision for sustainable agriculture.",
    },
    {
      year: "1978",
      title: "Organic Certification",
      description: "Became one of the first certified organic farms in the region, pioneering sustainable practices.",
    },
    {
      year: "1995",
      title: "Farm Expansion",
      description: "Expanded to 50 acres and added livestock, creating a diverse agricultural ecosystem.",
    },
    {
      year: "2010",
      title: "Homestay Program",
      description: "Opened our doors to guests, sharing our farm lifestyle and sustainable practices.",
    },
    {
      year: "2020",
      title: "Renewable Energy",
      description: "Installed solar panels and wind turbines, achieving carbon-neutral operations.",
    },
  ]

  const certifications = [
    "USDA Organic Certified",
    "Certified Naturally Grown",
    "Animal Welfare Approved",
    "Rainforest Alliance Certified",
    "Fair Trade Certified",
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
              <Link href="/about" className="text-gray-900 hover:text-green-600 font-medium">
                About
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-green-600">
                Contact
              </Link>
            </div>
            <Button className="bg-green-600 hover:bg-green-700">Visit Us</Button>
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
          <span className="text-gray-900">About</span>
        </div>

        {/* Hero Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h1>
            <p className="text-lg text-gray-700 mb-6">
              We started farming by purchasing land in 1996. After using artificial chemicals for the first three years, 
              we stopped using artificial chemicals in farming from the year 2000. The total farming land area is four acres. 
              All the land is consolidated.
            </p>
            <p className="text-lg text-gray-700 mb-6">
                          It is particularly noteworthy that water from others&apos; land does not come into our land. All land is fenced. 
            The residential house is roughly in the middle of the land. The land use plan has been made keeping in mind 
            the sun&apos;s movement throughout the year and local weather conditions.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              For this reason, a garden is planted in the north, and seasonal crops are cultivated in the south and east. 
              Bamboo has been planted in the north-west corner of the garden to protect fruit trees from north-westerly storms. 
              Diversity has been prioritized in all crop areas. Conservation of different varieties of the same fruit or crop 
              has been emphasized, with special importance given to indigenous varieties.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              For example: 25 types of mangoes, 3 types of lychee, 5 types of guava, 6 types of lemon, 4 types of jujube. 
              Additionally, there are various types of local minor fruits. Rice: 11 types, all indigenous varieties. 
              In seasonal crops, various types of pulses, oilseeds, potatoes, onions, garlic, and vegetables are cultivated 
              following crop rotation. Turmeric and broom flowers are cultivated as cash crops.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              The main objective is to create a farming model where a family can live healthily and comfortably by farming 
              this amount of land without artificial chemicals. In this case, family members must be involved in this work. 
              Over time, we have built a processing center (with FSSAI license) to prevent wastage of produced crops and 
              generate more income by producing processed food products.
            </p>
            <Button className="bg-green-600 hover:bg-green-700">Schedule a Visit</Button>
          </div>
          <div className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">আমাদের গল্প</h2>
            ১৯৯৬ সালে জমি কিনে চাষ শুরু।
            প্রথম তিন বছর কৃত্রিম রাসায়নিক ব্যবহার করার পর ২০০০ সাল থেকে কৃত্রিম রাসায়নিক প্রয়োগ চাষে বন্ধ করা হয়। 
            চাষের জমির পরিমাণ চার একর। সমস্ত জমি একলপ্তে(consolidated)।
            বিশেষ উল্লেখযোগ্য যে অন্যের জমির জল আমাদের জমিতে আসে না। সমস্ত জমি বেড়া দেওয়া (fenced)।
            মোটামুটি জমির মাঝামাঝি বসত বাড়ি।
            সারা বছরের সূর্যের চলন ও স্থানীয় আবহাওয়া কথা মাথায় রেখে জমির ব্যবহারের পরিকল্পনা করা হয়েছে।
            যার জন্য উত্তরে বাগান, দক্ষিণ ও পূর্ব দিকে মরসুমী ফসলের চাষ করা হয়। বাগানেরও উত্তর - পশ্চিম কোণে বাঁশ লাগানো হয়েছে, উত্তর - পশ্চিমি ঝড়ের থেকে ফল গাছ রক্ষা করার জন্য।
            সমস্ত ফসলের ক্ষেত্রেই বৈচিত্রকে প্রাধান্য দেওয়া হয়েছে।
            একই ফল বা ফসলের বিভিন্ন জাতের সংরক্ষণ ও এক্ষেত্রে দেশীয় জাতকে গুরুত্ব দেওয়া হয়েছে।
            যেমন:
            আম পঁচিশ রকম
            লিচু তিন রকম 
            পেয়ারা পাঁচ রকম
            লেবু ছয় রকম
            কুল চার রকম 
            এছাড়াও স্থানীয় মাইনর ফ্রুটসও আছে বিভিন্ন প্রকার।
            ধান
            এগারো রকম, সমস্ত দেশীয় জাত।
            মরসুমী ফসলের ক্ষেত্রে ফসল চক্র মেনে বিভিন্ন রকমের ডাল,তৈলবীজ, আলু, পেঁয়াজ, রসুন ও শাকসবজির চাষ হয়।
            ক্যাশক্রপ হিসাবে হলুদ ও ফুল ঝাঁটার চাষ হয়।
            মূল উদ্দেশ্য হলো এমন একটি চাষের মডেল গড়ে তোলা যেখানে এই পরিমাণ জমি কৃত্রিম রাসায়নিক বাদ দিয়ে চাষ করে একটি পরিবার সুস্থ ভাবে ও সাচ্ছন্দে জীবন যাপন করতে পারে। এক্ষেত্রে পরিবারের সদস্যদের এই কাজে যুক্ত থাকতে হবে।
            সময়ের সাথে সাথে আমরা একটি প্রক্রিয়াকরণ কেন্দ্র (fssai লাইসেন্স সহ) গড়ে তুলেছি।
            উৎপন্ন ফসলের নষ্ট না হওয়া এবং ফসলজাত খাদ্য উৎপাদন করে অধিক আয়ের জন্য।
            এইরকম একটি খামারের ক্ষেত্রে আরও সম্ভাবনার দিক আছে যেমন নার্সারি, ডেয়রী ইত্যাদি। এবিষয়েও ভবিষ্যত পরিকল্পনা আছে।
            এই কাজের সুত্রে অনেক বহিরাগত লোকজনের সংস্পর্শে আমরা এসেছি। তাদের কাছ থেকে আমরা যেমন অনুপ্রেরণা পেয়েছি তেমনই আবেদনও পেয়েছি এই খামারের মধ্যে যদি একটি থাকার ব্যবস্থা করা হয় তাহলে তারা বা তাদের মতো মানুষরা যারা এমন কাজ পরিবেশ পছন্দ করে তারাও এসে থাকতে পারবেন ও কাজের অভিজ্ঞতা সঞ্চয় করতে পারবেন।
            এই উদ্দেশ্যে আমরা কাজ শুরু করেছি এবং তা এখন প্রায় শেষ।
            উদ্দেশ্য সফল হলে আমরা যেমন অর্থের দিক থেকে সুস্থায়ী হবো তেমনি এই বিশেষ অতিথিদের থেকে আমরা অনেক শিক্ষার সুযোগ পাবো। এই শেখার অভিজ্ঞতা আমাদের আগেই হয়েছে।
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These core principles guide everything we do, from how we treat our land and animals to how we welcome our
              guests.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent className="p-0">
                  <div className="text-green-600 mb-4 flex justify-center">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-lg text-gray-600">From humble beginnings to sustainable leadership</p>
          </div>
          <div className="space-y-8">
            {timeline.map((event, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{event.year.slice(-2)}</span>
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <div className="flex items-center mb-2">
                      <span className="text-green-600 font-semibold text-sm mr-3">{event.year}</span>
                      <h3 className="text-xl font-semibold">{event.title}</h3>
                    </div>
                    <p className="text-gray-600">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Farming Practices */}
        <div className="bg-green-50 rounded-lg p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Sustainable Practices</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              We employ a holistic approach to farming that considers the health of the soil, plants, animals, and
              people as interconnected parts of a living system.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-green-600 mb-2">Soil Health</h3>
              <p className="text-gray-600 text-sm">
                Cover cropping, composting, and minimal tillage to build rich, living soil
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-green-600 mb-2">Water Conservation</h3>
              <p className="text-gray-600 text-sm">
                Drip irrigation, rainwater harvesting, and drought-resistant varieties
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-green-600 mb-2">Biodiversity</h3>
              <p className="text-gray-600 text-sm">
                Polyculture plantings, native habitat preservation, and beneficial insect support
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-green-600 mb-2">Animal Welfare</h3>
              <p className="text-gray-600 text-sm">
                Pasture-raised livestock with rotational grazing and natural behaviors
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-green-600 mb-2">Renewable Energy</h3>
              <p className="text-gray-600 text-sm">Solar and wind power for carbon-neutral farm operations</p>
            </div>
            <div>
              <h3 className="font-semibold text-green-600 mb-2">Waste Reduction</h3>
              <p className="text-gray-600 text-sm">Composting, recycling, and circular economy principles</p>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Certifications & Recognition</h2>
            <p className="text-gray-600">
              Our commitment to excellence is recognized by leading agricultural organizations
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center bg-white border border-green-200 rounded-lg px-4 py-2">
                <Award className="h-5 w-5 text-green-600 mr-2" />
                <span className="text-gray-700">{cert}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Experience Our Farm</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            We invite you to visit Sakria Farm and HomeStay and experience sustainable agriculture firsthand. Whether you stay
            with us, take a tour, or shop our products, you become part of our mission to create a more sustainable
            future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              Plan Your Visit
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white bg-transparent"
            >
              Shop Our Products
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
