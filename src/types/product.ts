// src/types/product.ts
export type CartItem = Product & { quantity: number }

export interface Product {
  id: string
  name: string
  productDescription: string
  longDescription: string
  originalPrice: number
  salePrice: number
  affiliateUrl: string
  brand: string
  category: string
  gender: string
  tags: string[]
  image: string
}
