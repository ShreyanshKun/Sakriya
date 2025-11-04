// src/components/checkout/WhatsappCheckoutModal.tsx

'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Loader2 } from 'lucide-react';

// Define the structure for cart items
interface CartItem {
  name: string;
  quantity: number;
  price: number;
}

interface WhatsappCheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  totalAmount: number;
}

export default function WhatsappCheckoutModal({
  isOpen,
  onClose,
  cartItems,
  totalAmount,
}: WhatsappCheckoutModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const formatAmount = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
    }).format(amount);
  };

  const handleSendOrder = () => {
    if (!name || !phone) {
      alert('Please enter your name and mobile number.');
      return;
    }

    setLoading(true);

    // Format the order details for the WhatsApp message
    const orderDetails = cartItems
      .map(
        (item) => `- ${item.name} (Qty: ${item.quantity}) - ${formatAmount(item.price * item.quantity)}`
      )
      .join('\n');

    let fullMessage = `🎉 *New Order from Sakria Farm Website!* 🎉\n\n`;
    fullMessage += `*Customer Name:* ${name}\n`;
    fullMessage += `*Mobile Number:* ${phone}\n\n`;
    fullMessage += `*Order Details:*\n${orderDetails}\n\n`;
    fullMessage += `*Total Amount:* *${formatAmount(totalAmount)}*\n\n`;
    if (message) {
      fullMessage += `*Message:* ${message}\n\n`;
    }
    fullMessage += `Please confirm this order. Thank you!`;

    // Get the business WhatsApp number from environment variables
    const businessWhatsappNumber = process.env.NEXT_PUBLIC_BUSINESS_WHATSAPP_NUMBER;

    // Create the WhatsApp URL
    const whatsappUrl = `https://wa.me/${businessWhatsappNumber}?text=${encodeURIComponent(
      fullMessage
    )}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
    
    setLoading(false);
    onClose(); // Close the modal after sending
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Complete Your Order</DialogTitle>
          <DialogDescription>
            Enter your details below. Your order will be placed via WhatsApp.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="col-span-3"
              placeholder="Your full name"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="phone" className="text-right">
              Mobile
            </Label>
            <Input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="col-span-3"
              placeholder="Your WhatsApp number"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="message" className="text-right">
              Message
            </Label>
            <Textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="col-span-3"
              placeholder="Any special instructions? (Optional)"
            />
          </div>
        </div>
        <DialogFooter>
          <Button 
            onClick={handleSendOrder} 
            disabled={loading || !name || !phone}
            className="w-full bg-green-600 hover:bg-green-700"
          >
            {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
            Send Order via WhatsApp
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
