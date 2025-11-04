// src/components/checkout/CartFlyout.tsx

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter } from '@/components/ui/sheet';
import { Trash2, Plus, Minus } from 'lucide-react';

export default function CartFlyout() {
  const { cart, isCartOpen, closeCart, removeItem, updateQuantity } = useCart();

  const handleQuantityChange = (id: number, currentQuantity: number, change: number) => {
    const newQuantity = currentQuantity + change;
    if (newQuantity > 0) {
      updateQuantity(id, newQuantity);
    } else {
      removeItem(id);
    }
  };

  return (
    <Sheet open={isCartOpen} onOpenChange={closeCart}>
      <SheetContent className="flex flex-col">
        <SheetHeader>
          <SheetTitle className="text-2xl font-bold">Your Cart ({cart.itemCount})</SheetTitle>
        </SheetHeader>
        {cart.items.length === 0 ? (
          <div className="flex-grow flex flex-col items-center justify-center text-center">
            <p className="text-lg text-gray-500">Your cart is empty.</p>
            <Button variant="outline" className="mt-4" onClick={closeCart}>
              Continue Shopping
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-grow overflow-y-auto -mx-6 px-6 divide-y">
              {cart.items.map((item) => (
                <div key={item.id} className="py-4 flex items-start space-x-4">
                  <Image src={item.image || ''} alt={item.name} width={64} height={64} className="rounded-md object-cover" />
                  <div className="flex-1">
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-gray-500">₹{item.price}</p>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center space-x-2">
                        <Button size="icon" variant="outline" className="h-6 w-6" onClick={() => handleQuantityChange(item.id, item.quantity, -1)}>
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span>{item.quantity}</span>
                        <Button size="icon" variant="outline" className="h-6 w-6" onClick={() => handleQuantityChange(item.id, item.quantity, 1)}>
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                      <Button size="icon" variant="ghost" className="text-red-500 hover:text-red-600" onClick={() => removeItem(item.id)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <SheetFooter className="mt-auto border-t pt-4">
              <div className="w-full space-y-4">
                <div className="flex justify-between font-bold text-lg">
                  <span>Subtotal</span>
                  <span>₹{cart.total.toFixed(2)}</span>
                </div>
                <Button asChild size="lg" className="w-full bg-green-600 hover:bg-green-700" onClick={closeCart}>
                  <Link href="/cart">Proceed to Checkout</Link>
                </Button>
              </div>
            </SheetFooter>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
