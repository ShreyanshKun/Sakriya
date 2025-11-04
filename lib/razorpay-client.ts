// Client-safe Razorpay constants and utilities
// This file can be safely imported by client components

// Payment methods available in Razorpay
export const PAYMENT_METHODS = {
  // Cards
  card: {
    name: 'Credit/Debit Cards',
    description: 'Visa, MasterCard, RuPay, American Express',
    icon: '💳',
  },
  // UPI
  upi: {
    name: 'UPI',
    description: 'Google Pay, PhonePe, Paytm, BHIM',
    icon: '📱',
  },
  // Net Banking
  netbanking: {
    name: 'Net Banking',
    description: 'All major Indian banks',
    icon: '🏦',
  },
  // Wallets
  wallet: {
    name: 'Digital Wallets',
    description: 'Paytm, PhonePe, Amazon Pay, Freecharge',
    icon: '👛',
  },
  // EMI
  emi: {
    name: 'EMI',
    description: 'Credit Card EMI, Debit Card EMI',
    icon: '📅',
  },
  // Pay Later
  paylater: {
    name: 'Pay Later',
    description: 'LazyPay, Simpl, ZestMoney',
    icon: '⏰',
  },
  // Bank Transfer
  banktransfer: {
    name: 'Bank Transfer',
    description: 'NEFT, RTGS, IMPS',
    icon: '🏛️',
  },
  // Cash on Delivery
  cod: {
    name: 'Cash on Delivery',
    description: 'Pay when you receive',
    icon: '💵',
  },
};

export interface CreateOrderParams {
  amount: number;
  currency?: string;
  receipt?: string;
  notes?: Record<string, string>;
  partial_payment?: boolean;
  prefill?: {
    name?: string;
    email?: string;
    contact?: string;
  };
  theme?: {
    color?: string;
  };
}

export interface PaymentVerificationParams {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
}

// Generate client-side options for Razorpay
export function getRazorpayOptions(order: Record<string, unknown>, userDetails?: Record<string, unknown>) {
  return {
    key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
    amount: order.amount as number,
    currency: order.currency as string,
    name: 'Sakria Farm and HomeStay',
    description: 'Farm Products & Accommodation',
    image: '/images/garden.jpg',
    order_id: order.id as string,
    prefill: {
      name: userDetails?.name || '',
      email: userDetails?.email || '',
      contact: userDetails?.phone || '',
    },
    notes: {
      address: 'Sakria Farm and HomeStay, Sustainable Agriculture',
    },
    theme: {
      color: '#16a34a', // Green color matching your theme
    },
    modal: {
      ondismiss: function() {
        console.log('Payment modal closed');
      },
    },
    handler: function(response: unknown) {
      console.log('Payment successful:', response);
      // Handle successful payment
    },
  };
}
