'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Trash2, ShoppingCart, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/contexts/CartContext';
import PaymentForm from '@/components/PaymentForm';

export default function CartPage() {
  const { cart, removeItem, updateQuantity, clearCartItems } = useCart();
  const [showPayment, setShowPayment] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState<'pending' | 'success' | 'failed' | null>(null);
  const [paymentData, setPaymentData] = useState<Record<string, unknown> | null>(null);
  const [error, setError] = useState<string>('');

  const tax = cart.total * 0.18; // 18% GST
  const total = cart.total + tax;

  const handlePaymentSuccess = (paymentData: Record<string, unknown>) => {
    setPaymentStatus('success');
    setPaymentData(paymentData);
    setError('');
    // Clear cart after successful payment
    clearCartItems();
  };

  const handlePaymentFailure = (error: unknown) => {
    setPaymentStatus('failed');
    setError(error instanceof Error ? error.message : 'Payment failed');
  };

  const resetPayment = () => {
    setPaymentStatus(null);
    setPaymentData(null);
    setError('');
    setShowPayment(false);
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

                {/* Payment Status */}
                {paymentStatus && (
                  <div className={`p-4 rounded-lg ${
                    paymentStatus === 'success' 
                      ? 'bg-green-50 border border-green-200' 
                      : 'bg-red-50 border border-red-200'
                  }`}>
                    <div className="flex items-center space-x-2">
                      {paymentStatus === 'success' ? (
                        <span className="text-green-600">✓</span>
                      ) : (
                        <span className="text-red-600">✗</span>
                      )}
                      <span className={`font-semibold ${
                        paymentStatus === 'success' ? 'text-green-800' : 'text-red-800'
                      }`}>
                        {paymentStatus === 'success' ? 'Payment Successful!' : 'Payment Failed'}
                      </span>
                    </div>
                    {paymentStatus === 'success' && paymentData && (
                      <div className="mt-2 text-sm text-green-700">
                        <div>Payment ID: {String(paymentData.id || 'N/A')}</div>
                        <div>Amount: ₹{((Number(paymentData.amount) || 0) / 100).toFixed(2)}</div>
                        <div>Method: {String(paymentData.method || 'N/A')}</div>
                      </div>
                    )}
                    {paymentStatus === 'failed' && error && (
                      <div className="mt-2 text-sm text-red-700">
                        {error}
                      </div>
                    )}
                  </div>
                )}

                {/* Action Buttons */}
                {!showPayment && !paymentStatus && (
                  <div className="space-y-2">
                    <Button
                      onClick={() => setShowPayment(true)}
                      className="w-full bg-green-600 hover:bg-green-700"
                    >
                      Proceed to Checkout
                    </Button>
                    <Button
                      onClick={clearCartItems}
                      variant="outline"
                      className="w-full"
                    >
                      Clear Cart
                    </Button>
                  </div>
                )}

                {paymentStatus && (
                  <Button 
                    onClick={resetPayment}
                    variant="outline"
                    className="w-full"
                  >
                    Make Another Payment
                  </Button>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Payment Form */}
        {showPayment && !paymentStatus && (
          <div className="mt-8">
            <PaymentForm
              amount={total}
              currency="INR"
              onSuccess={handlePaymentSuccess}
              onFailure={handlePaymentFailure}
              userDetails={{
                name: 'John Doe',
                email: 'john@example.com',
                phone: '+91 9876543210',
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
