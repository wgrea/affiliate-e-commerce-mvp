// src/data/products.ts
// add/edit products
export interface Product {
  id: string;
  name: string;
  productDescription: string;
  longDescription: string;
  originalPrice: number;
  salePrice: number;
  affiliateUrl: string;
  brand: string;
  category: string;
  gender: string;
  tags: string[];
  image: string;
}

export type CartItem = Product & {
  quantity: number
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Cargo Jumpsuit',
    productDescription: 'Relaxed fit with utility details—made for movement and edge.',
    longDescription: 'Designed in a loose fit with adjustable waist tabs, this jumpsuit features woven tapes, pull straps, and a tool loop. Includes flap pockets at chest and waist, 3D leg pockets, and snap button closures. Made from rigid ripstop with a grid texture in ensis green. Sustainably crafted with 35% recycled polyester.',
    originalPrice: 129,
    salePrice: 109,
    affiliateUrl: 'https://www.g-star.com/en_us/shop/women/jumpsuits-overalls/d26463-d308-6057',
    brand: 'G-Star',
    category: 'Utilitywear',
    gender: 'women',
    tags: ['relaxed', 'structured', 'sustainable', 'green', 'ripstop'],
    image: '/g-star-cargo-jumpsuit-green.jpeg',
  },
  {
    id: '2',
    name: 'Flight Jumpsuit',
    productDescription: 'Streamlined and functional—built for movement and clarity.',
    longDescription: 'Regular fit jumpsuit with deep zip pockets and adjustable waist tape. Features shirt collar, zip closure, buttoned cuffs, and compact woven cotton in salute blue. Designed for durability and circularity.',
    originalPrice: 260.00,
    salePrice: 130.00,
    affiliateUrl: 'https://www.g-star.com/en_us/shop/men/jumpsuits/d26418-c973-c742',
    brand: 'G-Star',
    category: 'Utilitywear',
    gender: 'men',
    tags: ['functional', 'streamlined', 'blue', 'cotton', 'durable'],
    image: '/Flight-jumpsuit_1080x.jpeg',
  },
  {
    id: '3',
    name: 'Sleeveless Cotton Gauze Jumpsuit',
    productDescription: 'Light, breathable, and dreamy—your summer go-to.',
    longDescription: 'Made from 100% cotton double gauze, this relaxed-fit jumpsuit features a V-neck, full-length silhouette, and two hand pockets. Designed for casual wear with a soft, airy feel. Inseam: 28in. Includes limited lifetime warranty.',
    originalPrice: 99.00,
    salePrice: 29.70,
    affiliateUrl: 'https://www.backcountry.com/backcountry-sleeveless-cotton-gauze-jumpsuit-womens',
    brand: 'Backcountry',
    category: 'Casualwear',
    gender: 'women',
    tags: ['light', 'breathable', 'summer', 'cotton', 'relaxed'],
    image: '/FOS.jpeg',
  },
  {
    id: '4',
    name: "Men's WWII-Inspired Flight Jumpsuit",
    productDescription: 'Relaxed fit with vintage pilot vibes—classic and bold.',
    longDescription: 'Inspired by WWII pilot uniforms, this jumpsuit features zip and patch pockets, adjustable waist tabs, and a relaxed straight-leg fit. Made from 100% cotton with a 29" inseam. Finished with asymmetrical pockets and front zip closure. Model is 6\'1" wearing size M.',
    originalPrice: 61.99,
    salePrice: 54.99,
    affiliateUrl: 'https://www.madepants.com/collections/mens-jumpsuits-coveralls/products/mens-heritage-flight-jumpsuit?variant=45391350169832',
    brand: 'Madepants',
    category: 'Jumpsuit',
    gender: 'men',
    tags: ['vintage', 'relaxed', 'pilot', 'cotton', 'military'],
    image: '/g-star-flight-jumpsuit-dark-blue.jpeg',
  }
];