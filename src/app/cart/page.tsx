// src/app/cart/page.tsx
'use client'
import React from 'react'
import { useCartStore } from '@/store/cartStore'
import Link from 'next/link'; // Make sure this is at the top if not already

const Cart: React.FC = () => {
  const { items, removeItem, clearCart } = useCartStore()

  return (
    <main className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Cart</h1>

      <section className="mb-8">
        <p className="text-lg">
          This site uses affiliate links, so your cart is a preview of the products you&apos;re interested in.
          When you&apos;re ready, head to checkout to complete your purchase on the retailer&apos;s site.
        </p>
      </section>

      <section className="mb-8">
        {items.length === 0 ? (
          <p className="text-gray-500">Your cart is currently empty.</p>
        ) : (
          <ul className="space-y-6">
            {items.map((item) => (
              <li key={item.id} className="border p-4 rounded-lg shadow-sm">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-gray-600">x{item.quantity}</p>
                    <p className="text-sm text-gray-800">${item.salePrice.toFixed(2)}</p>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={item.affiliateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      View on {item.brand}
                    </a>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>

      {items.length > 0 && (
        <section className="mb-8">
          <button
            onClick={clearCart}
            className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300"
          >
            Clear Cart
          </button>

          <Link
            href="/checkout"
            className="ml-4 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
          >
            Proceed to Checkout
          </Link>
        </section>
      )}
    </main>
  )
}

export default Cart
