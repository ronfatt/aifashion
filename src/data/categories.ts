export interface Category {
  id: string;
  name: string;
  subName: string;
  image: string;
  count: number;
}

export const CATEGORIES: Category[] = [
  {
    id: "oversized-tee",
    name: "OVERSIZED TEE",
    subName: "Baju Sembang Loose",
    image: "/images/products/cat-oversized-tee.jpg",
    count: 14,
  },
  {
    id: "sleeveless",
    name: "SLEEVELESS",
    subName: "Baju Singlet Padu",
    image: "/images/products/cat-sleeveless.jpg",
    count: 8,
  },
  {
    id: "hoodie",
    name: "HOODIE",
    subName: "Hoodie Lepak KL",
    image: "/images/products/cat-hoodie.jpg",
    count: 6,
  },
  {
    id: "long-sleeve",
    name: "LONG SLEEVE",
    subName: "Baju Lengan Panjang",
    image: "/images/products/cat-longsleeve.jpg",
    count: 9,
  },
  {
    id: "shorts",
    name: "SHORTS",
    subName: "Seluar Pendek Relax",
    image: "/images/products/cat-shorts.jpg",
    count: 7,
  },
  {
    id: "accessories",
    name: "ACCESSORIES",
    subName: "Cap, Socks & Tote",
    image: "/images/products/cat-accessories.jpg",
    count: 12,
  },
];
