// src/app/shop/page.tsx
"use client";

import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 py-16">
      <section className="max-w-6xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6 text-slate-800 dark:text-white">Shop Curated Selection</h1>
          <div className="w-24 h-2 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Discover thoughtfully selected products that blend functionality with emotional resonance.
          </p>
        </div>

        {/* Category Filters - Not Inportant yet
        <div className="mb-12 flex flex-wrap justify-center gap-4">
          <button className="px-6 py-2 bg-white dark:bg-slate-800 text-slate-800 dark:text-white rounded-full border border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-sm">
            All Products
          </button>
          <button className="px-6 py-2 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors">
            Tech Essentials
          </button>
          <button className="px-6 py-2 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors">
            Home & Living
          </button>
          <button className="px-6 py-2 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors">
            Outdoor Gear
          </button>
        </div> */}

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </section>
    </div>
  );
}