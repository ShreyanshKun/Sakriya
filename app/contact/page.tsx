'use client';

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Leaf, ArrowLeft, MapPin, Phone, Mail, Clock, Car } from "lucide-react";

export default function ContactPage() {
  const [showDirections, setShowDirections] = useState(false);

  // --- States for the form ---
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); 
    const YOUR_PHONE_NUMBER = "918144218850"; // <-- Change this!

    const fullMessage = `Hello, I'm contacting you from the website.
    
Name: ${firstName} ${lastName}
Phone: ${phone}
Message: ${message}`;

    const encodedMessage = encodeURIComponent(fullMessage);
    const whatsappUrl = `https://wa.me/${YOUR_PHONE_NUMBER}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    // Reset form
    setFirstName("");
    setLastName("");
    setPhone("");
    setMessage("");
  };

  const directionsInfo = {
    from: "Rampurhat Junction railway station",
    distance: "68.7 km",
    duration: "2 hrs, 7 mins",
    summary: "via NH114",
    url: "https://www.google.com/maps/dir/Rampurhat+Junction,+Rampurhat,+West+Bengal,+India/Kamalakantapur,+West+Bengal,+India/data=!4m14!4m13!1m5!1m1!19sChIJHzBRk4Ye-jkRnmwJLHHtnis!2m2!1d87.781937!2d24.1796547!1m5!1m1!19sChIJ-8uoHwHd-TkR-g9_fsHAJZ4!2m2!1d87.6593461!2d23.702535899999997!3e0"
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Address",
      details: [
        "Vill: Kamalakantapur, PO: Khanjanpur",
        "Dist: Birbhum, West Bengal",
        "Pin: 731236"
      ],
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone (Birendra Kumar Roy)",
      details: ["+91 78108 64852"],
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      details: ["info@sakriyafarm.com", "bookings@sakriyafarm.com"],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb and Header */}
        <div className="flex items-center space-x-2 mb-8">
          <Link href="/" className="text-green-600 hover:text-green-700 flex items-center">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Home
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-900">Contact</span>
        </div>
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We'd love to hear from you! Whether you have questions, want to book a stay, or schedule a farm tour, we're here to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card className="p-8">
              <CardContent className="p-0">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        placeholder="Your first name"
                        className="mt-1"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        placeholder="Your last name"
                        className="mt-1"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="phone">Mobile Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter your WhatsApp number"
                      className="mt-1"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us how we can help..."
                      className="mt-1 min-h-32"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information & Directions */}
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
                            <p key={idx} className="text-gray-600">{detail}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* --- GET DIRECTIONS CARD --- */}
            <Card className="p-8 bg-gray-50">
              <CardContent className="p-0">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Get Here</h2>
                <p className="text-gray-600 mb-6">
                  The nearest major railway station is Rampurhat Junction. From there, it's about a 2-hour drive to our farm.
                </p>
                <Button
                  variant="outline"
                  className="w-full mb-4"
                  onClick={() => setShowDirections(!showDirections)}
                >
                  {showDirections ? "Hide Route Details" : "Show Route Details from Station"}
                </Button>

                {showDirections && (
                  <div className="mt-4 p-4 bg-white border rounded-lg">
                    <h3 className="font-bold text-md text-gray-800 mb-4">Route from Rampurhat Junction</h3>
                    <div className="space-y-3 text-gray-700">
                      <div className="flex items-center">
                        <Car className="h-5 w-5 mr-3 text-green-600" />
                        <div><strong>Distance:</strong> {directionsInfo.distance}</div>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-5 w-5 mr-3 text-green-600" />
                        <div><strong>Duration:</strong> {directionsInfo.duration}</div>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-5 w-5 mr-3 text-green-600" />
                        <div><strong>Route:</strong> {directionsInfo.summary}</div>
                      </div>
                    </div>
                    
                    {/* --- THIS IS THE FIXED BUTTON --- */}
                    <Button asChild className="w-full mt-4 bg-green-600 hover:bg-green-700">
                      <Link href={directionsInfo.url} target="_blank">
                        Open in Google Maps
                      </Link>
                      {/* The stray "Row" text was removed from here */}
                    </Button>

                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}