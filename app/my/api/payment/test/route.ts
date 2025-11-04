import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    success: true,
    message: 'Payment API is working',
    timestamp: new Date().toISOString(),
    environment: {
      hasKeyId: !!process.env.RAZORPAY_KEY_ID,
      hasKeySecret: !!process.env.RAZORPAY_KEY_SECRET,
      hasPublicKey: !!process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
    },
  });
}
