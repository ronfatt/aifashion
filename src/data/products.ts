export interface ColorOption {
  name: string;
  hex: string;
  value: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  series: string; // SEMBANG KENCANG, ACAH PADU, TERPALING ON, BOLEH LAH, PADU GILA, JOM LEPAK, NGAM LAH, SYOK LAH
  category: string; // oversized-tee, sleeveless, hoodie, long-sleeve, shorts, accessories
  collectionId: string;
  price: number;
  compareAtPrice?: number;
  images: {
    front: string;
    back: string;
    detail: string;
    model: string;
  };
  colors: ColorOption[];
  sizes: string[];
  badge?: "NEW DROP" | "BEST SELLER" | "LIMITED RUN" | "HOT";
  description: string;
  material: string;
  fit: string;
  print: string;
  origin: string;
  stockStatus: "IN STOCK" | "LOW STOCK" | "PRE-ORDER";
  stockCount: number;
  featured: boolean;
  isBestSeller: boolean;
  bestSellerRank?: number;
}

export const PRODUCTS: Product[] = [
  {
    id: "prod-01",
    slug: "sembang-kencang-oversized-tee",
    name: "SEMBANG KENCANG Oversized Tee",
    subtitle: "Cakap Banyak, Action Tak Ada.",
    series: "SEMBANG KENCANG",
    category: "oversized-tee",
    collectionId: "local-irony",
    price: 129,
    compareAtPrice: 149,
    images: {
      front: "/images/products/sembang-kencang-front.jpg",
      back: "/images/products/sembang-kencang-back.jpg",
      detail: "/images/products/sembang-kencang-detail.jpg",
      model: "/images/products/sembang-kencang-model.jpg",
    },
    colors: [
      { name: "Obsidian Black", hex: "#080808", value: "black" },
      { name: "Acid Lime Accent", hex: "#C8FF00", value: "lime" },
      { name: "Off White", hex: "#F2EFE8", value: "white" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    badge: "BEST SELLER",
    description:
      "Engineered for loud talkers and street statement makers. Features our signature SEMBANG KENCANG high-density screenprint combined with dark Malay batik motif collar accents.",
    material: "Premium heavyweight cotton, 260 GSM.",
    fit: "Oversized drop-shoulder silhouette with wide neck ribbing.",
    print: "High-density puff screen print with batik detail overlay.",
    origin: "Designed & Handcrafted in Malaysia.",
    stockStatus: "IN STOCK",
    stockCount: 18,
    featured: true,
    isBestSeller: true,
    bestSellerRank: 1,
  },
  {
    id: "prod-02",
    slug: "acah-padu-sleeveless-tee",
    name: "ACAH PADU Sleeveless Tee",
    subtitle: "Acah Je More Than Padu.",
    series: "ACAH PADU",
    category: "sleeveless",
    collectionId: "local-irony",
    price: 109,
    compareAtPrice: 129,
    images: {
      front: "/images/products/acah-padu-front.jpg",
      back: "/images/products/acah-padu-back.jpg",
      detail: "/images/products/acah-padu-detail.jpg",
      model: "/images/products/acah-padu-model.jpg",
    },
    colors: [
      { name: "Surface Black", hex: "#111111", value: "black" },
      { name: "Burnt Orange", hex: "#D65A20", value: "orange" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    badge: "HOT",
    description:
      "Raw armhole cut sleeveless tee designed for tropical heat and maximum urban posture. Features satirical ACAH PADU typography on chest and high-contrast back graphic.",
    material: "100% Combed Heavy Cotton, 240 GSM.",
    fit: "Boxy fit with raw edge dropped armholes.",
    print: "Silkscreen crackle print with acid lime accent embroidery.",
    origin: "Designed in Malaysia.",
    stockStatus: "IN STOCK",
    stockCount: 24,
    featured: true,
    isBestSeller: true,
    bestSellerRank: 2,
  },
  {
    id: "prod-03",
    slug: "terpaling-on-oversized-tee",
    name: "TERPALING ON Oversized Tee",
    subtitle: "Terpaling Hype. Terpaling Vibe.",
    series: "TERPALING ON",
    category: "oversized-tee",
    collectionId: "lepak-club",
    price: 129,
    images: {
      front: "/images/products/terpaling-on-front.jpg",
      back: "/images/products/terpaling-on-back.jpg",
      detail: "/images/products/terpaling-on-detail.jpg",
      model: "/images/products/terpaling-on-model.jpg",
    },
    colors: [
      { name: "Background Black", hex: "#080808", value: "black" },
      { name: "Batik Gold", hex: "#B7945A", value: "gold" },
      { name: "Off White", hex: "#F2EFE8", value: "white" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    badge: "NEW DROP",
    description:
      "Dedicated to everyone who is 'terpaling' at everything. Clean minimalistic front print with full-back editorial magazine typesetting and traditional batik border trims.",
    material: "Ultra-heavy cotton, 260 GSM.",
    fit: "Signature oversized drop-shoulder cut.",
    print: "Soft-touch discharge print with metallic batik thread accents.",
    origin: "Designed in Malaysia.",
    stockStatus: "IN STOCK",
    stockCount: 12,
    featured: true,
    isBestSeller: true,
    bestSellerRank: 3,
  },
  {
    id: "prod-04",
    slug: "boleh-lah-sleeveless-tee",
    name: "BOLEH LAH Sleeveless Tee",
    subtitle: "Not Great, Not Bad. Boleh Lah.",
    series: "BOLEH LAH",
    category: "sleeveless",
    collectionId: "local-irony",
    price: 109,
    images: {
      front: "/images/products/boleh-lah-front.jpg",
      back: "/images/products/boleh-lah-back.jpg",
      detail: "/images/products/boleh-lah-detail.jpg",
      model: "/images/products/boleh-lah-model.jpg",
    },
    colors: [
      { name: "Washed Charcoal", hex: "#171717", value: "charcoal" },
      { name: "Dark Teal", hex: "#0E5B5F", value: "teal" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    badge: "LIMITED RUN",
    description:
      "The ultimate national response to everything. BOLEH LAH relaxed tank with distressed hem and reflective back patch.",
    material: "Pre-shrunk Heavy Cotton, 240 GSM.",
    fit: "Loose boxy drop-shoulder sleeveless cut.",
    print: "Distressed rubber print with reflective heat-transfer print.",
    origin: "Designed in Malaysia.",
    stockStatus: "LOW STOCK",
    stockCount: 5,
    featured: true,
    isBestSeller: true,
    bestSellerRank: 4,
  },
  {
    id: "prod-05",
    slug: "padu-gila-oversized-tee",
    name: "PADU GILA Oversized Tee",
    subtitle: "Standard Level Max Padu.",
    series: "PADU GILA",
    category: "oversized-tee",
    collectionId: "batik-after-dark",
    price: 129,
    compareAtPrice: 159,
    images: {
      front: "/images/products/padu-gila-front.jpg",
      back: "/images/products/padu-gila-back.jpg",
      detail: "/images/products/padu-gila-detail.jpg",
      model: "/images/products/padu-gila-model.jpg",
    },
    colors: [
      { name: "Acid Lime Accent", hex: "#C8FF00", value: "lime" },
      { name: "Deep Black", hex: "#080808", value: "black" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    badge: "HOT",
    description:
      "When something is beyond solid, it's PADU GILA. Heavyweight streetwear tee with Acid Lime typography and dark batik shadow watermark print.",
    material: "Heavyweight 100% Cotton, 260 GSM.",
    fit: "Oversized street fit.",
    print: "High-density screen print with acid lime highlight.",
    origin: "Designed & Crafted in Malaysia.",
    stockStatus: "IN STOCK",
    stockCount: 30,
    featured: true,
    isBestSeller: true,
    bestSellerRank: 5,
  },
  {
    id: "prod-06",
    slug: "jom-lepak-heavyweight-hoodie",
    name: "JOM LEPAK Heavyweight Hoodie",
    subtitle: "Malam Ini Lepak Mana?",
    series: "JOM LEPAK",
    category: "hoodie",
    collectionId: "lepak-club",
    price: 239,
    compareAtPrice: 269,
    images: {
      front: "/images/products/jom-lepak-front.jpg",
      back: "/images/products/jom-lepak-back.jpg",
      detail: "/images/products/jom-lepak-detail.jpg",
      model: "/images/products/jom-lepak-model.jpg",
    },
    colors: [
      { name: "Obsidian Black", hex: "#080808", value: "black" },
      { name: "Heritage Red", hex: "#8D2025", value: "red" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    badge: "NEW DROP",
    description:
      "Built for late night mamak lepak sessions and chilly air-conditioned malls. 420 GSM fleece-lined hoodie with double-layer hood and internal hidden pocket.",
    material: "420 GSM Heavyweight Terry Fleece.",
    fit: "Relaxed dropped shoulder oversized hoodie silhouette.",
    print: "3D Embroidery front emblem & high-density back print.",
    origin: "Designed in Malaysia.",
    stockStatus: "IN STOCK",
    stockCount: 15,
    featured: true,
    isBestSeller: false,
  },
  {
    id: "prod-07",
    slug: "ngam-lah-batik-sleeve-longsleeve",
    name: "NGAM LAH Batik Sleeve Longsleeve",
    subtitle: "Ngam Fit, Ngam Vibe.",
    series: "NGAM LAH",
    category: "long-sleeve",
    collectionId: "batik-after-dark",
    price: 159,
    images: {
      front: "/images/products/ngam-lah-front.jpg",
      back: "/images/products/ngam-lah-back.jpg",
      detail: "/images/products/ngam-lah-detail.jpg",
      model: "/images/products/ngam-lah-model.jpg",
    },
    colors: [
      { name: "Pitch Black", hex: "#080808", value: "black" },
      { name: "Off White", hex: "#F2EFE8", value: "white" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    badge: "LIMITED RUN",
    description:
      "Long sleeve oversized tee featuring intricate Malay batik motif printed down both sleeves and minimal NGAM LAH typography on cuff ribs.",
    material: "250 GSM Organic Heavy Cotton.",
    fit: "Oversized drop-shoulder longsleeve.",
    print: "Full sleeve rotary screen print.",
    origin: "Designed in Malaysia.",
    stockStatus: "LOW STOCK",
    stockCount: 7,
    featured: false,
    isBestSeller: false,
  },
  {
    id: "prod-08",
    slug: "syok-lah-utility-streetwear-shorts",
    name: "SYOK LAH Utility Streetwear Shorts",
    subtitle: "Rasa Syok Sendiri.",
    series: "SYOK LAH",
    category: "shorts",
    collectionId: "lepak-club",
    price: 139,
    images: {
      front: "/images/products/syok-lah-front.jpg",
      back: "/images/products/syok-lah-back.jpg",
      detail: "/images/products/syok-lah-detail.jpg",
      model: "/images/products/syok-lah-model.jpg",
    },
    colors: [
      { name: "Dark Charcoal", hex: "#111111", value: "charcoal" },
      { name: "Dark Teal", hex: "#0E5B5F", value: "teal" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    badge: "NEW DROP",
    description:
      "Heavyweight nylon-blend utility shorts with deep cargo pockets, Acid Lime drawstring tips, and woven LOKAL//LOUD batik patch.",
    material: "Heavyweight Nylon-Cotton Blend, 280 GSM.",
    fit: "Above-the-knee relaxed fit with elastic waist band.",
    print: "Woven rubber patch & reflective printed logo.",
    origin: "Designed in Malaysia.",
    stockStatus: "IN STOCK",
    stockCount: 20,
    featured: false,
    isBestSeller: false,
  },
  {
    id: "prod-09",
    slug: "lokal-loud-acid-lime-distressed-cap",
    name: "LOKAL//LOUD Acid Lime Distressed Cap",
    subtitle: "Topi Slang Local.",
    series: "SEMBANG KENCANG",
    category: "accessories",
    collectionId: "local-irony",
    price: 89,
    images: {
      front: "/images/products/cap-front.jpg",
      back: "/images/products/cap-back.jpg",
      detail: "/images/products/cap-detail.jpg",
      model: "/images/products/cap-model.jpg",
    },
    colors: [
      { name: "Washed Black / Acid Lime", hex: "#C8FF00", value: "lime" },
      { name: "Triple Black", hex: "#080808", value: "black" },
    ],
    sizes: ["ONE SIZE"],
    badge: "BEST SELLER",
    description:
      "Unstructured 6-panel dad cap with heavy distressing, 3D embroidered LOKAL//LOUD typography, and brass buckle strap.",
    material: "100% Distressed Cotton Twill.",
    fit: "Adjustable strapback curve brim.",
    print: "High-density 3D embroidery.",
    origin: "Designed in Malaysia.",
    stockStatus: "IN STOCK",
    stockCount: 40,
    featured: false,
    isBestSeller: false,
  },
  {
    id: "prod-10",
    slug: "batik-reworked-crossbody-sling-bag",
    name: "BATIK REWORKED Crossbody Sling Bag",
    subtitle: "Beg Lepak Streetwear.",
    series: "TERPALING ON",
    category: "accessories",
    collectionId: "batik-after-dark",
    price: 119,
    images: {
      front: "/images/products/bag-front.jpg",
      back: "/images/products/bag-back.jpg",
      detail: "/images/products/bag-detail.jpg",
      model: "/images/products/bag-model.jpg",
    },
    colors: [
      { name: "Tactical Black & Gold", hex: "#B7945A", value: "gold" },
    ],
    sizes: ["ONE SIZE"],
    badge: "HOT",
    description:
      "Water-resistant Cordura sling bag lined with custom Batik pattern polyester inner lining. Features Fidlock magnetic buckle and heavy webbing strap.",
    material: "1000D Cordura Nylon with Batik Lined Interior.",
    fit: "Multi-way adjustable strap.",
    print: "Woven label and embossed matte black hardware.",
    origin: "Designed in Malaysia.",
    stockStatus: "IN STOCK",
    stockCount: 16,
    featured: false,
    isBestSeller: false,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getRelatedProducts(currentId: string, limit = 4): Product[] {
  return PRODUCTS.filter((p) => p.id !== currentId).slice(0, limit);
}
