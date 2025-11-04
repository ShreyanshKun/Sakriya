import { NextRequest, NextResponse } from 'next/server';
import { verifyPaymentSignature, getPaymentDetails } from '@/lib/razorpay';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = body;

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return NextResponse.json(
        { error: 'Missing required payment parameters' },
        { status: 400 }
      );
    }

    // Verify the payment signature
    const isValid = verifyPaymentSignature({
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    });

    if (!isValid) {
      return NextResponse.json(
        { error: 'Invalid payment signature' },
        { status: 400 }
      );
    }

    // Get payment details
    const paymentDetails = await getPaymentDetails(razorpay_payment_id);

    return NextResponse.json({
      success: true,
      payment: paymentDetails,
      message: 'Payment verified successfully',
    });
  } catch (error: unknown) {
    console.error('Error verifying payment:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to verify payment' },
      { status: 500 }
    );
  }
} 