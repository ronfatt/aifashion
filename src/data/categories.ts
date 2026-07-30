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
    subName: "Baju Sembang Loose (260 GSM)",
    image: "/images/products/sembang-kencang-tee/front.png",
    count: 9,
  },
  {
    id: "sleeveless",
    name: "SLEEVELESS",
    subName: "Baju Singlet Padu (240 GSM)",
    image: "/images/products/acah-padu-sleeveless/front.png",
    count: 3,
  },
];
