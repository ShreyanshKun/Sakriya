import { NextRequest, NextResponse } from 'next/server';
import { createOrder } from '@/lib/razorpay';

export async function POST(request: NextRequest) {
  try {
    // Check if environment variables are set
    if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
      return NextResponse.json(
        { 
          error: 'Razorpay credentials not configured. Please set RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET in your .env.local file.',
          setupRequired: true,
          instructions: '1. Copy env.example to .env.local\n2. Get credentials from https://dashboard.razorpay.com/\n3. Replace placeholder values'
        },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { amount, currency, receipt, notes, partial_payment, prefill } = body;

    if (!amount) {
      return NextResponse.json(
        { error: 'Amount is required' },
        { status: 400 }
      );
    }

    const order = await createOrder({
      amount,
      currency,
      receipt,
      notes,
      partial_payment,
      prefill,
    });

    return NextResponse.json({
      success: true,
      order,
    });
  } catch (error: unknown) {
    console.error('Error creating order:', error);
    return NextResponse.json(
      { 
        error: error instanceof Error ? error.message : 'Failed to create order',
        details: error instanceof Error ? error.toString() : String(error)
      },
      { status: 500 }
    );
  }
} 