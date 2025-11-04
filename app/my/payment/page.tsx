'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, XCircle, Package, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import PaymentForm from '@/components/PaymentForm';

export default function PaymentPage() {
  const [paymentStatus, setPaymentStatus] = useState<'pending' | 'success' | 'failed' | null>(null);
  const [paymentData, setPaymentData] = useState<Record<string, unknown> | null>(null);
  const [error, setError] = useState<string>('');

  // Sample cart items
  const cartItems = [
    {
      id: 1,
      name: 'Ripe Mango Squash',
      quantity: 2,
      price: 150,
      image: '/images/products/mango-squash.jpg',
    },
    {
      id: 2,
      name: 'Mixed Pickles',
      quantity: 1,
      price: 200,
      image: '/images/products/pickles.jpg',
    },
    {
      id: 3,
      name: 'Farm Stay (1 Night)',
      quantity: 1,
      price: 2500,
      image: '/images/homestay-background.jpg',
    },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.18; // 18% GST
  const total = subtotal + tax;

  const handlePaymentSuccess = (paymentData: Record<string, unknown>) => {
    setPaymentStatus('success');
    setPaymentData(paymentData);
    setError('');
  };

  const handlePaymentFailure = (error: unknown) => {
    setPaymentStatus('failed');
    setError(error instanceof Error ? error.message : 'Payment failed');
  };

  const resetPayment = () => {
    setPaymentStatus(null);
    setPaymentData(null);
    setError('');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Package className="h-8 w-8 text-green-600" />
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
          <span className="text-gray-900">Payment</span>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
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
                {/* Cart Items */}
                <div className="space-y-3">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                        <Package className="h-6 w-6 text-gray-600" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">{item.name}</div>
                        <div className="text-sm text-gray-600">
                          Qty: {item.quantity} × ₹{item.price}
                        </div>
                      </div>
                      <div className="font-semibold">
                        ₹{item.price * item.quantity}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Price Breakdown */}
                <div className="border-t pt-4 space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span>₹{subtotal}</span>
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
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      ) : (
                        <XCircle className="h-5 w-5 text-red-600" />
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

                {/* Reset Button */}
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

          {/* Payment Form */}
          <div className="lg:col-span-2">
            {!paymentStatus ? (
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
            ) : (
              <Card>
                <CardContent className="p-8 text-center">
                  {paymentStatus === 'success' ? (
                    <div className="space-y-4">
                      <CheckCircle className="h-16 w-16 text-green-600 mx-auto" />
                      <h2 className="text-2xl font-bold text-green-800">Payment Successful!</h2>
                      <p className="text-gray-600">
                        Thank you for your purchase. You will receive a confirmation email shortly.
                      </p>
                      <div className="space-y-2">
                        <Button asChild className="bg-green-600 hover:bg-green-700">
                          <Link href="/">Continue Shopping</Link>
                        </Button>
                        <Button variant="outline" onClick={resetPayment}>
                          Make Another Payment
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <XCircle className="h-16 w-16 text-red-600 mx-auto" />
                      <h2 className="text-2xl font-bold text-red-800">Payment Failed</h2>
                      <p className="text-gray-600">
                        {error || 'Something went wrong with your payment. Please try again.'}
                      </p>
                      <Button onClick={resetPayment} className="bg-green-600 hover:bg-green-700">
                        Try Again
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Payment Methods Info */}
        <div className="mt-12">
          <Card>
            <CardHeader>
              <CardTitle>Supported Payment Methods</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-2xl mb-2">💳</div>
                  <div className="font-semibold">Credit/Debit Cards</div>
                  <div className="text-sm text-gray-600">Visa, MasterCard, RuPay</div>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-2xl mb-2">📱</div>
                  <div className="font-semibold">UPI</div>
                  <div className="text-sm text-gray-600">Google Pay, PhonePe, Paytm</div>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-2xl mb-2">🏦</div>
                  <div className="font-semibold">Net Banking</div>
                  <div className="text-sm text-gray-600">All major Indian banks</div>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-2xl mb-2">👛</div>
                  <div className="font-semibold">Digital Wallets</div>
                  <div className="text-sm text-gray-600">Paytm, PhonePe, Amazon Pay</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 