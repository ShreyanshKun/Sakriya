'use client';

import React from 'react'; // Make sure React is imported
import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Users, Bed, Bath, Loader2, Leaf } from 'lucide-react';

// Interfaces for Accommodation and Rule
interface Rule {
  text: string;
  icon: React.ReactNode;
  type: 'info' | 'warning';
}
interface Accommodation {
  id: number;
  name: string;
  price: string;
  images: string[];
  description: string;
  capacity: string;
  bedrooms: number;
  bathrooms: number;
  amenities: string[];
  features: string[];
  rules?: Rule[];
}

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  accommodation: Accommodation | null;
}

export default function BookingModal({ isOpen, onClose, accommodation }: BookingModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);

  if (!accommodation) return null;

  const handleSendBooking = () => {
    if (!accommodation || !name || !phone) return;

    setLoading(true);

    const YOUR_PHONE_NUMBER = "918144218850";

    const message = `Hello, I'm interested in booking the "${accommodation.name}".
    
My Details:
Name: ${name}
Phone: ${phone}

Can you please confirm availability?`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${YOUR_PHONE_NUMBER}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    setLoading(false);
    setName('');
    setPhone('');
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-7xl max-h-[90vh] p-0 bg-stone-50 overflow-hidden flex flex-col">
        <div className="grid md:grid-cols-2 flex-grow min-h-0">

          {/* --- IMAGE CAROUSEL --- */}
          <div className="relative h-64">
            <Carousel className="h-full">
              <CarouselContent className="h-full">
                {accommodation.images.map((img, index) => (
                  <CarouselItem key={index} className="h-full">
                    <div className="relative h-full w-full">
                      <Image
                        src={img}
                        alt={`${accommodation.name} image ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
            <div className="absolute bottom-4 left-4 bg-black/50 text-white p-3 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-bold">{accommodation.name}</h3>
              <p className="text-stone-200 text-sm">{accommodation.price} / night</p>
            </div>
          </div>

          {/* --- DETAILS & BOOKING FORM --- */}
          <div className="flex flex-col p-6 md:p-12 overflow-y-auto">
            <DialogHeader className="text-left mb-6">
              <DialogTitle className="text-3xl md:text-4xl font-bold text-gray-800">{accommodation.name}</DialogTitle>
              <DialogDescription className="pt-2 text-gray-600 text-base">{accommodation.description}</DialogDescription>
            </DialogHeader>

            <div className="flex-grow space-y-6">
              <div className="flex items-center space-x-6 text-gray-700">
                <div className="flex items-center text-sm"><Users className="h-5 w-5 mr-2 text-green-600" /> {accommodation.capacity}</div>
                <div className="flex items-center text-sm"><Bed className="h-5 w-5 mr-2 text-green-600" /> {accommodation.bedrooms} beds</div>
                <div className="flex items-center text-sm"><Bath className="h-5 w-5 mr-2 text-green-600" /> {accommodation.bathrooms} bath</div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Key Features</h4>
                <div className="flex flex-wrap gap-2">
                  {accommodation.features.map((feature, i) => <Badge key={i} className="bg-green-100 text-green-800 border-green-200 hover:bg-green-200">{feature}</Badge>)}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Amenities</h4>
                <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-gray-600">
                  {accommodation.amenities.map((amenity, i) => (<li key={i} className="flex items-center text-sm"><Leaf className="h-3 w-3 mr-2 text-green-500" />{amenity}</li>))}
                </ul>
              </div>

              {accommodation.rules && accommodation.rules.length > 0 && (
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Important Information</h4>
                  <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg space-y-3">
                    {accommodation.rules.map((rule, index) => (
                      <div key={index} className={`flex items-start space-x-3 ${rule.type === 'warning' ? 'text-red-700' : 'text-gray-700'}`}>
                        
                        {/* --- THIS IS THE FIXED LINE --- */}
                        <div className="flex-shrink-0 mt-0.5">
                          {React.isValidElement(rule.icon) ? React.cloneElement(rule.icon as React.ReactElement<any>, { className: "h-5 w-5" }) : null}
                        </div>

                        <p className="text-sm">{rule.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="space-y-4 pt-6 border-t">
                <h4 className="font-semibold text-lg text-gray-800">Request to Book</h4>
                <div><Label htmlFor="name-modal">Full Name</Label><Input id="name-modal" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" className="mt-1" /></div>
                <div><Label htmlFor="phone-modal">Mobile Number</Label><Input id="phone-modal" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Enter your WhatsApp number" className="mt-1" /></div>
              </div>
            </div>

            <DialogFooter className="mt-8">
              <Button onClick={handleSendBooking} disabled={loading || !name || !phone} className="w-full bg-green-600 hover:bg-green-700 text-lg py-6" size="lg">
                {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Send Booking Inquiry
              </Button>
            </DialogFooter>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}