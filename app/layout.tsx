// src/app/layout.tsx

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/contexts/CartContext";
import { Navbar } from "@/components/Navbar";
import CartFlyout from "@/components/checkout/CartFlyout";
import SmoothScrollProvider from "@/components/ui/SmoothScrollProvider"; // 1. Import the provider

const geistSans = Geist({ /* ... */ });
const geistMono = Geist_Mono({ /* ... */ });

export const metadata: Metadata = {
  title: "Sakriya Farm and Homestay",
  description: "Experience authentic farm life at Sakriya Farm and Homestay.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* 2. Wrap everything in the SmoothScrollProvider */}
        <SmoothScrollProvider>
          <CartProvider>
            <Navbar /> 
            <main>{children}</main>
            <CartFlyout />
          </CartProvider>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
