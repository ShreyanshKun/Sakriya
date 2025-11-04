'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Leaf, Users, Bed, Bath, Wind, Car, Ban, AlertTriangle } from "lucide-react";
import BookingModal from "@/components/checkout/BookingModal";

export default function AccommodationsPage() {
  const [selectedAccommodation, setSelectedAccommodation] = useState(null);

  const accommodations = [
    {
      id: 1,
      name: "The Farmhouse Suite",
      price: "₹2,500",
      thumbnail: "/images/products/house2.jpg",
      images: [
        "/images/folder1/im10.jpg",
        "/images/folder1/im10.jpg",
        "/images/folder1/im10.jpg",
      ],
      description: "Spacious suite in our historic farmhouse with panoramic valley views. Perfect for families looking for a blend of comfort and rustic charm.",
      capacity: "2-4 guests",
      bedrooms: 2,
      bathrooms: 1,
      amenities: ["Free WiFi", "AC", "Breakfast Included", "Farm Tour", "Kitchen Access"],
      features: ["Valley Views", "Historic Building", "Private Entrance"],
      rules: [
        { text: "No drinking.", icon: <Ban />, type: 'warning' },
        { text: "Smoking is allowed only in specified areas.", icon: <AlertTriangle />, type: 'warning' },
        { text: "No pets allowed.", icon: <Ban />, type: 'warning' },
        { text: "Parking is available.", icon: <Car />, type: 'info' },
        { text: "Accommodation for drivers is currently under construction and not available.", icon: <Users />, type: 'info' },
      ],
    },
    {
      id: 2,
      name: "Cozy Stay",
      price: "₹2,500",
      thumbnail: "/images/products/homestay1.jpg",
      images: [
        "/images/products/homestay1.jpg",
        "/images/folder1/im10.jpg",
        "/images/folder/im10.jpg",
      ],
      description: "Intimate and cozy stay perfect for couples. An extra bed can be arranged for ₹500.",
      capacity: "2 guests",
      bedrooms: 1,
      bathrooms: 1,
      amenities: ["Free WiFi", "Breakfast Included", "Garden Access", "Attached Washroom"],
      features: ["Garden Views", "Romantic Setting", "Private Patio"],
      rules: [
        { text: "No drinking.", icon: <Ban />, type: 'warning' },
        { text: "Smoking is allowed only in specified areas.", icon: <AlertTriangle />, type: 'warning' },
        { text: "No pets allowed.", icon: <Ban />, type: 'warning' },
        { text: "Parking is available.", icon: <Car />, type: 'info' },
        { text: "Accommodation for drivers is currently under construction and not available.", icon: <Users />, type: 'info' },
      ],
    },
    {
      id: 3,
      name: "The Garden Bungalow",
      price: "₹2,500",
      thumbnail: "/images/folder1/im1.jpeg",
      images: [
        "/images/folder1/im1.jpeg",
        "/images/folder1/im1.jpeg",
        "/images/folder1/im1.jpeg",
      ],
      description: "A private bungalow surrounded by lush greenery, offering a serene and tranquil experience.",
      capacity: "2-3 guests",
      bedrooms: 1,
      bathrooms: 1,
      amenities: ["Free WiFi", "AC", "Breakfast Included", "Private Garden"],
      features: ["Secluded", "Modern Amenities", "Nature Sounds"],
      rules: [
        { text: "No drinking.", icon: <Ban />, type: 'warning' },
        { text: "Smoking is allowed only in specified areas.", icon: <AlertTriangle />, type: 'warning' },
        { text: "No pets allowed.", icon: <Ban />, type: 'warning' },
        { text: "Parking is available.", icon: <Car />, type: 'info' },
        { text: "Accommodation for drivers is currently under construction and not available.", icon: <Users />, type: 'info' },
      ],
    },
  ];

  const handleExploreClick = (accommodation: any) => {
    setSelectedAccommodation(accommodation);
  };

  const handleCloseModal = () => {
    setSelectedAccommodation(null);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Farm Stay Accommodations</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience authentic farm life in our comfortable accommodations. Explore our unique stays below.
          </p>
        </div>

        <div className="space-y-8">
          {accommodations.map((accommodation) => (
            <Card key={accommodation.id} className="overflow-hidden shadow-lg border rounded-xl">
              <div className="grid md:grid-cols-5">

                {/* --- 1. THIS DIV IS FIXED --- */}
                {/* 'md:h-full' was removed to fix the 0-height error */}
                <div className="md:col-span-2 relative h-64 min-h-[250px]">

                  {/* --- 2. THIS IMAGE IS FIXED --- */}
                  {/* 'sizes' prop was added to fix the console warning */}
                  <Image
                    src={accommodation.thumbnail}
                    alt={accommodation.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 30vw"
                  />
                </div>

                <div className="md:col-span-3 p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{accommodation.name}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center"><Users className="h-4 w-4 mr-1" />{accommodation.capacity}</div>
                      <div className="flex items-center"><Bed className="h-4 w-4 mr-1" />{accommodation.bedrooms} beds</div>
                      <div className="flex items-center"><Bath className="h-4 w-4 mr-1" />{accommodation.bathrooms} bath</div>
                    </div>
                    <p className="text-gray-600 mb-4">{accommodation.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {accommodation.features.map((feature, index) => (
                        <Badge key={index} variant="outline" className="text-green-600 border-green-600">{feature}</Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <div><span className="text-3xl font-bold text-green-600">{accommodation.price}</span><span className="text-gray-500 ml-1">/ night</span></div>
                    <Button onClick={() => handleExploreClick(accommodation)} className="bg-green-600 hover:bg-green-700 px-6 py-3">Explore</Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <BookingModal
        isOpen={!!selectedAccommodation}
        onClose={handleCloseModal}
        accommodation={selectedAccommodation}
      />
    </div>
  );
}