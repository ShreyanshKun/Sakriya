import { NextRequest, NextResponse } from 'next/server';
// import { verifyPaymentSignature } from '@/lib/razorpay';

export async function POST(request: NextRequest) {
  try {
    const body = await request.text();
    const signature = request.headers.get('x-razorpay-signature');

    if (!signature) {
      return NextResponse.json(
        { error: 'Missing signature' },
        { status: 400 }
      );
    }

    // Verify webhook signature
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const crypto = require('crypto');
    const expectedSignature = crypto
      .createHmac('sha256', process.env.RAZORPAY_WEBHOOK_SECRET!)
      .update(body)
      .digest('hex');

    if (signature !== expectedSignature) {
      return NextResponse.json(
        { error: 'Invalid webhook signature' },
        { status: 400 }
      );
    }

    const event = JSON.parse(body);

    // Handle different webhook events
    switch (event.event) {
      case 'payment.captured':
        console.log('Payment captured:', event.payload.payment.entity);
        // Handle successful payment
        // You can update your database, send confirmation emails, etc.
        break;

      case 'payment.failed':
        console.log('Payment failed:', event.payload.payment.entity);
        // Handle failed payment
        break;

      case 'refund.processed':
        console.log('Refund processed:', event.payload.refund.entity);
        // Handle refund
        break;

      case 'order.paid':
        console.log('Order paid:', event.payload.order.entity);
        // Handle order completion
        break;

      default:
        console.log('Unhandled webhook event:', event.event);
    }

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    console.error('Webhook error:', error);
    return NextResponse.json(
      { error: 'Webhook processing failed' },
      { status: 500 }
    );
  }
} 