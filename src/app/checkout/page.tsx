// src/app/checkout/page.tsx
'use client';
import React, { useState } from 'react';
import { useCartStore } from '@/store/cartStore';

const Checkout: React.FC = () => {
  const { items, clearCart } = useCartStore();
  const [checkedOut, setCheckedOut] = useState(false);

  const handleCheckout = () => {
    clearCart();
    setCheckedOut(true);
  };

  return (
    <main className="max-w-2xl mx-auto px-4 py-12 text-center">
      {!checkedOut ? (
        <>
          <h1 className="text-3xl font-bold mb-6">Checkout</h1>

          <section className="mb-8">
            <p className="text-lg">
              You’re almost there. Since this site uses affiliate links, your final purchase will happen on the retailer’s website.
              We’ve curated these products with care—review your cart below before completing your order.
            </p>
          </section>

          <section className="mb-8">
            {items.length === 0 ? (
              <p className="text-gray-600">Your cart is empty. Explore with intention.</p>
            ) : (
              <ul className="mb-6 space-y-2">
                {items.map((item) => (
                  <li key={item.id} className="border p-2 rounded">
                    {item.name} × {item.quantity}
                  </li>
                ))}
              </ul>
            )}
            <button
              onClick={handleCheckout}
              className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
            >
              Confirm Checkout
            </button>
          </section>
        </>
      ) : (
        <>
          <h2 className="text-2xl font-bold mb-4">Checkout Complete 🎉</h2>
          <p className="mb-6 text-lg">
            Thanks for shopping with emotional clarity and purpose.
          </p>
        </>
      )}

    </main>
  );
};

export default Checkout;
