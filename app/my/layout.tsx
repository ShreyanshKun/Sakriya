import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/contexts/CartContext";
import { Navbar } from "@/components/Navbar";
import CartFlyout from "@/components/checkout/CartFlyout";

// FIXED THE FONT DEFINITIONS
const geistSans = Geist({
  variable: '--font-geist',
  subsets: ['latin'], // <-- ADDED THIS
});
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'], // <-- ADDED THIS
});

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
    // Added font variables to <html> tag
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        {/* REMOVED THE SmoothScrollProvider WRAPPER */}
        <CartProvider>
          <Navbar />
          <main>{children}</main>
          <CartFlyout />
        </CartProvider>
      </body>
    </html>
  );
}