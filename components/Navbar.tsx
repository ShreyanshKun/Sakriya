// src/components/Navbar.tsx

'use client';

import { useState } from 'react';
import Link from "next/link";
import { Leaf, ShoppingCart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";

export function Navbar() {
  const { cart, openCart } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/accommodations", label: "Stay" },
    { href: "/gallery", label: "Gallery" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2" onClick={() => setIsMenuOpen(false)}>
            <Leaf className="h-8 w-8 text-green-600" />
            <span className="text-xl font-bold text-gray-900">Sakriya</span>
          </Link>

          {/* Desktop Menu Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-gray-700 hover:text-green-600">
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side icons (Cart and Hamburger) */}
          <div className="flex items-center space-x-4">
            <Button onClick={openCart} variant="outline" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {cart.itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cart.itemCount}
                </span>
              )}
              <span className="sr-only">Open Cart</span>
            </Button>
            
            {/* Hamburger Menu Button (Mobile) */}
            <div className="md:hidden">
              <Button onClick={() => setIsMenuOpen(!isMenuOpen)} variant="ghost" size="icon">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                <span className="sr-only">Open Menu</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="flex flex-col space-y-1 px-2 pt-2 pb-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:bg-green-50 hover:text-green-600 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
