// src/components/CartIndicator.tsx
'use client';

import { useCartStore } from '@/store/cartStore';
import Link from 'next/link';

const CartIndicator = () => {
  const items = useCartStore((state) => state.items);
  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);

  if (totalQuantity === 0) return null;

  return (
    <Link href="/cart">
      <div className="fixed top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full shadow-lg cursor-pointer hover:bg-blue-700 transition">
        🛒 {totalQuantity} item{totalQuantity !== 1 && 's'}
      </div>
    </Link>
  );
};

export default CartIndicator;
