'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Trash2, ShoppingCart, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/contexts/CartContext';
// import PaymentForm from '@/components/PaymentForm'; // <-- THIS IMPORT IS NOW REMOVED

export default function CartPage() {
  const { cart, removeItem, updateQuantity, clearCartItems } = useCart();
  
  // const [showPayment, setShowPayment] = useState(false); // <-- REMOVED
  // const [paymentStatus, setPaymentStatus] = useState<'pending' | 'success' | 'failed' | null>(null); // <-- REMOVED
  // const [paymentData, setPaymentData] = useState<Record<string, unknown> | null>(null); // <-- REMOVED
  // const [error, setError] = useState<string>(''); // <-- REMOVED

  const tax = cart.total * 0.18; // 18% GST
  const total = cart.total + tax;

  // --- ALL PAYMENT HANDLER FUNCTIONS (handlePaymentSuccess, etc.) ARE REMOVED ---
  // --- A NEW WHATSAPP CHECKOUT HANDLER IS ADDED ---

  const handleWhatsAppCheckout = () => {
    // 1. SET YOUR WHATSAPP PHONE NUMBER
    const YOUR_PHONE_NUMBER = "918144218850"; // <-- Change this if needed

    // 2. Create the pre-filled message
    let message = "Hello, I'd like to place an order for the following items:\n\n";
    
    cart.items.forEach(item => {
      message += `- ${item.name} (x${item.quantity}) - ₹${item.price * item.quantity}\n`;
    });

    message += `\nSubtotal: ₹${cart.total.toFixed(2)}`;
    message += `\nTax (18%): ₹${tax.toFixed(2)}`;
    message += `\n*Total: ₹${total.toFixed(2)}*`;
    message += `\n\nPlease confirm my order.`;

    // 3. Encode the message for a URL
    const encodedMessage = encodeURIComponent(message);

    // 4. Create the final WhatsApp URL
    const whatsappUrl = `https://wa.me/${YOUR_PHONE_NUMBER}?text=${encodedMessage}`;

    // 5. Open the link in a new tab
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    // 6. Clear cart after sending to WhatsApp
    clearCartItems();
  };


  if (cart.items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Navigation */}
        <nav className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-2">
                <ShoppingCart className="h-8 w-8 text-green-600" />
                <span className="text-xl font-bold text-gray-900">Sakria Farm and HomeStay</span>
              </div>
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
                <Link href="/about" className="text-gray-700 hover:text-green-600">
                  About
                </Link>
                <Link href="/contact" className="text-gray-700 hover:text-green-600">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 mb-8">
            <Link href="/" className="text-green-600 hover:text-green-700 flex items-center">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Home
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">Cart</span>
          </div>

          {/* Empty Cart */}
          <div className="text-center py-16">
            <ShoppingCart className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">Add some products to your cart to get started.</p>
            <Button asChild className="bg-green-600 hover:bg-green-700">
              <Link href="/products">Browse Products</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <ShoppingCart className="h-8 w-8 text-green-600" />
              <span className="text-xl font-bold text-gray-900">Sakria Farm and HomeStay</span>
            </div>
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
              <Link href="/about" className="text-gray-700 hover:text-green-600">
                About
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-green-600">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 mb-8">
          <Link href="/" className="text-green-600 hover:text-green-700 flex items-center">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Home
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-900">Cart</span>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <ShoppingCart className="h-5 w-5" />
                  <span>Shopping Cart ({cart.itemCount} items)</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {cart.items.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4 p-4 border rounded-lg">
                    <div className="w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center">
                      <Image src={item.image || "/placeholder.svg"} alt={item.name} width={80} height={80} className="object-cover rounded-lg" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold">{item.name}</h3>
                          <p className="text-sm text-gray-600">{item.description}</p>
                          <div className="flex items-center space-x-2 mt-1">
                            <Badge variant="outline" className="text-xs">
                              {item.category}
                            </Badge>
                            {item.organic && <Badge className="bg-green-600 text-xs">Organic</Badge>}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold">₹{item.price}</div>
                          <div className="text-sm text-gray-600">₹{item.price} each</div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center space-x-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="h-8 w-8 p-0"
                          >
                            -
                          </Button>
                          <span className="text-sm font-medium w-8 text-center">
                            {item.quantity}
                          </span>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="h-8 w-8 p-0"
                          >
                            +
                          </Button>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="font-semibold">₹{item.price * item.quantity}</span>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => removeItem(item.id)}
                            className="text-red-600 hover:text-red-700"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CreditCard className="h-5 w-5" />
                  <span>Order Summary</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Price Breakdown */}
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span>₹{cart.total}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax (18% GST):</span>
                    <span>₹{tax.toFixed(2)}</span>
                  </div>
                  <div className="border-t pt-2">
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total:</span>
                      <span className="text-green-600">₹{total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                {/* --- PAYMENT STATUS BLOCKS ARE REMOVED --- */}

                {/* --- ACTION BUTTONS ARE UPDATED --- */}
                <div className="space-y-2">
                  <Button
                    onClick={handleWhatsAppCheckout} // <-- CHANGED
                    className="w-full bg-green-600 hover:bg-green-700"
                  >
                    Checkout via WhatsApp
                  </Button>
                  <Button
                    onClick={clearCartItems}
                    variant="outline"
                    className="w-full"
                  >
                    Clear Cart
                  </Button>
                </div>

                {/* --- PAYMENT STATUS/RESET BUTTONS ARE REMOVED --- */}

              </CardContent>
            </Card>
          </div>
        </div>

        {/* --- PAYMENT FORM BLOCK IS REMOVED --- */}

      </div>
    </div>
  );
}