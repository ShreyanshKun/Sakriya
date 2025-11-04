// src/app/gallery/page.tsx

'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

// Imports for the lightbox
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// Mock data for your gallery images. Replace with your actual images.
const galleryImages = [
  { id: 1, src: '/images/folder1/13.jpg', category: 'Farm Life', alt: 'A wide view of the farm fields' },
  { id: 2, src:  '/images/folder1/19.jpg', category: 'Homestay', alt: 'A cozy room in the homestay' },
  { id: 3, src:  '/images/folder1/19.jpg', category: 'Nature', alt: 'A walking path through the trees' },
  { id: 4, src:  '/images/folder1/11.jpg', category: 'Farm Life', alt: 'A basket of fresh vegetables' },
  { id: 5, src:  '/images/folder1/13.jpg', category: 'Nature', alt: 'A beautiful sunrise over the hills' },
  { id: 6, src:  '/images/folder1/18.jpg', category: 'Homestay', alt: 'The exterior of a rustic cottage' },
  { id: 7, src:  '/images/folder1/17.jpg', category: 'Farm Life', alt: 'A cow grazing in a green pasture' },
  { id: 8, src:  '/images/products/homestay1.jpg', category: 'Homestay', alt: 'The view from a homestay balcony' },
];

const categories = ['All', 'Farm Life', 'Homestay', 'Nature'];

export default function GalleryPage() {
  const [filter, setFilter] = useState('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  const filteredImages = filter === 'All' 
    ? galleryImages 
    : galleryImages.filter((image) => image.category === filter);

  const openLightbox = (index: number) => {
    setImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            A Glimpse of Sakria
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore the serene beauty of our farm, the comfort of our homestays, and the vibrant nature that surrounds us.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center flex-wrap gap-2 mb-10">
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? 'default' : 'outline'}
              onClick={() => setFilter(category)}
              className={`
                ${filter === category 
                  ? 'bg-green-600 text-white hover:bg-green-700' 
                  : 'border-gray-300 text-gray-700 hover:bg-gray-100'
                }
              `}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Masonry Image Grid */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {filteredImages.map((image, index) => (
            <div 
              key={image.id} 
              className="overflow-hidden rounded-lg break-inside-avoid cursor-pointer group"
              onClick={() => openLightbox(index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={500}
                height={500}
                className="w-full h-auto object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* Lightbox Component */}
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          slides={filteredImages.map(image => ({ src: image.src }))}
          index={imageIndex}
        />
      </div>
    </div>
  );
}
