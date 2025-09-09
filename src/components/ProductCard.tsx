// src/components/ProductCard.tsx
'use client';

import React from 'react';
import { Product } from '../data/products';
import { useCartStore } from '@/store/cartStore';

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const addToCart = () => {
    useCartStore.getState().addItem({
      id: product.id,
      name: product.name,
      image: product.image,
      salePrice: product.salePrice,   // ✅ match type
      brand: product.brand,
      affiliateUrl: product.affiliateUrl,
      quantity: 1,
    });
  };

  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-md transition">
          
      {product.image && (
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover rounded mb-4 transition-transform duration-300 hover:scale-105"
        />
      )}  
    
      <h3 className="font-semibold mb-2">{product.name}</h3>

      <p className="text-sm text-gray-600 mb-2">
        {product.productDescription}
      </p>

      <p className="text-gray-800 font-bold">
        ${product.salePrice.toFixed(2)}
      </p>

      {product.originalPrice > product.salePrice && (
        <p className="text-sm line-through text-gray-500">
          ${product.originalPrice.toFixed(2)}
        </p>
      )}

      <div className="flex gap-2 mt-4">
        <a
          href={product.affiliateUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-white px-4 py-2 rounded"
        >
          See Price on {product.brand}
        </a>
        <button
          onClick={addToCart}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
