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
  series: string;
  category: "oversized-tee" | "sleeveless";
  collectionId: "local-irony" | "lepak-club" | "street-satire" | "lokal-essentials";
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
  stockStatus: "IN STOCK" | "LOW STOCK";
  stockCount: number;
  featured: boolean;
  isBestSeller: boolean;
  bestSellerRank?: number;
  frontMain: string;
  frontSub: string;
  backCopy: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "prod-01",
    slug: "sembang-kencang-tee",
    name: "SEMBANG KENCANG Oversized Tee",
    subtitle: "Talk Big. Move Slow.",
    series: "SEMBANG KENCANG",
    category: "oversized-tee",
    collectionId: "local-irony",
    price: 129,
    compareAtPrice: 149,
    images: {
      front: "/images/products/sembang-kencang-tee/front.png",
      back: "/images/products/sembang-kencang-tee/back.png",
      detail: "/images/products/sembang-kencang-tee/detail.png",
      model: "/images/products/sembang-kencang-tee/model.png",
    },
    colors: [
      { name: "Obsidian Black", hex: "#080808", value: "black" },
      { name: "Acid Lime Accent", hex: "#C8FF00", value: "lime" },
      { name: "Batik Gold", hex: "#B7945A", value: "gold" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    badge: "BEST SELLER",
    description:
      "Satirical Malaysian streetwear tee targeting loud talkers who move slow. Features heavy silkscreen typography with reworked Batik side motifs.",
    material: "Premium heavyweight cotton, 240–260 GSM.",
    fit: "Oversized drop-shoulder silhouette.",
    print: "High-density puff screen print with batik detail overlay.",
    origin: "Designed in Malaysia.",
    stockStatus: "IN STOCK",
    stockCount: 22,
    featured: true,
    isBestSeller: true,
    bestSellerRank: 1,
    frontMain: "SEMBANG KENCANG",
    frontSub: "Talk Big. Move Slow.",
    backCopy: "Banyak cakap. Sedikit gerak.",
  },
  {
    id: "prod-02",
    slug: "acah-padu-sleeveless",
    name: "ACAH PADU Sleeveless Tee",
    subtitle: "Style Banyak, Kerja Kurang.",
    series: "ACAH PADU",
    category: "sleeveless",
    collectionId: "local-irony",
    price: 109,
    compareAtPrice: 129,
    images: {
      front: "/images/products/acah-padu-sleeveless/front.png",
      back: "/images/products/acah-padu-sleeveless/back.png",
      detail: "/images/products/acah-padu-sleeveless/detail.png",
      model: "/images/products/acah-padu-sleeveless/model.png",
    },
    colors: [
      { name: "Surface Black", hex: "#111111", value: "black" },
      { name: "Burnt Orange", hex: "#D65A20", value: "orange" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    badge: "HOT",
    description:
      "Raw armhole cut sleeveless tee designed for tropical heat and maximum posture. Ironical commentary for those who look solid but produce little.",
    material: "Premium heavyweight cotton, 240–260 GSM.",
    fit: "Oversized drop-shoulder silhouette.",
    print: "Silkscreen crackle print with orange highlight.",
    origin: "Designed in Malaysia.",
    stockStatus: "IN STOCK",
    stockCount: 18,
    featured: true,
    isBestSeller: true,
    bestSellerRank: 2,
    frontMain: "ACAH PADU",
    frontSub: "Style Banyak, Kerja Kurang.",
    backCopy: "Nampak macam power. Itu je.",
  },
  {
    id: "prod-03",
    slug: "terpaling-on-tee",
    name: "TERPALING ON Oversized Tee",
    subtitle: "Reply Laju, Datang Lambat.",
    series: "TERPALING ON",
    category: "oversized-tee",
    collectionId: "lepak-club",
    price: 129,
    images: {
      front: "/images/products/terpaling-on-tee/front.png",
      back: "/images/products/terpaling-on-tee/back.png",
      detail: "/images/products/terpaling-on-tee/detail.png",
      model: "/images/products/terpaling-on-tee/model.png",
    },
    colors: [
      { name: "Pitch Black", hex: "#080808", value: "black" },
      { name: "Acid Lime", hex: "#C8FF00", value: "lime" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    badge: "NEW DROP",
    description:
      "Dedicated to people who reply instant messages in seconds but arrive 2 hours late. Clean front chest text with high-density back print.",
    material: "Premium heavyweight cotton, 240–260 GSM.",
    fit: "Oversized drop-shoulder silhouette.",
    print: "Soft-touch discharge print with acid lime thread.",
    origin: "Designed in Malaysia.",
    stockStatus: "IN STOCK",
    stockCount: 15,
    featured: true,
    isBestSeller: true,
    bestSellerRank: 3,
    frontMain: "TERPALING ON",
    frontSub: "Reply Laju, Datang Lambat.",
    backCopy: "Online sentiasa. Action entah bila.",
  },
  {
    id: "prod-04",
    slug: "boleh-lah-sleeveless",
    name: "BOLEH LAH Sleeveless Tee",
    subtitle: "Not Great. Still Jalan.",
    series: "BOLEH LAH",
    category: "sleeveless",
    collectionId: "local-irony",
    price: 109,
    images: {
      front: "/images/products/boleh-lah-sleeveless/front.png",
      back: "/images/products/boleh-lah-sleeveless/back.png",
      detail: "/images/products/boleh-lah-sleeveless/detail.png",
      model: "/images/products/boleh-lah-sleeveless/model.png",
    },
    colors: [
      { name: "Washed Black", hex: "#171717", value: "black" },
      { name: "Heritage Red", hex: "#8D2025", value: "red" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    badge: "LIMITED RUN",
    description:
      "The definitive Malaysian response to everything. BOLEH LAH relaxed sleeveless tee with distressed hem and back reflective print.",
    material: "Premium heavyweight cotton, 240–260 GSM.",
    fit: "Oversized drop-shoulder silhouette.",
    print: "Distressed rubber print with reflective heat transfer.",
    origin: "Designed in Malaysia.",
    stockStatus: "LOW STOCK",
    stockCount: 6,
    featured: true,
    isBestSeller: true,
    bestSellerRank: 4,
    frontMain: "BOLEH LAH",
    frontSub: "Not Great. Still Jalan.",
    backCopy: "Tak perfect. Tapi lepas.",
  },
  {
    id: "prod-05",
    slug: "padu-gila-tee",
    name: "PADU GILA Oversized Tee",
    subtitle: "Too Loud To Ignore.",
    series: "PADU GILA",
    category: "oversized-tee",
    collectionId: "street-satire",
    price: 129,
    compareAtPrice: 159,
    images: {
      front: "/images/products/padu-gila-tee/front.png",
      back: "/images/products/padu-gila-tee/back.png",
      detail: "/images/products/padu-gila-tee/detail.png",
      model: "/images/products/padu-gila-tee/model.png",
    },
    colors: [
      { name: "Deep Black", hex: "#080808", value: "black" },
      { name: "Acid Lime Accent", hex: "#C8FF00", value: "lime" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    badge: "BEST SELLER",
    description:
      "When something is beyond solid, it's PADU GILA. Heavyweight streetwear tee with Acid Lime typography and Batik watermark shadow print.",
    material: "Premium heavyweight cotton, 240–260 GSM.",
    fit: "Oversized drop-shoulder silhouette.",
    print: "High-density puff screen print.",
    origin: "Designed in Malaysia.",
    stockStatus: "IN STOCK",
    stockCount: 28,
    featured: true,
    isBestSeller: true,
    bestSellerRank: 5,
    frontMain: "PADU GILA",
    frontSub: "Too Loud To Ignore.",
    backCopy: "Local heat. Global attitude.",
  },
  {
    id: "prod-06",
    slug: "jom-lepak-tee",
    name: "JOM LEPAK Oversized Tee",
    subtitle: "No Rush. No Drama.",
    series: "JOM LEPAK",
    category: "oversized-tee",
    collectionId: "lepak-club",
    price: 129,
    images: {
      front: "/images/products/jom-lepak-tee/front.png",
      back: "/images/products/jom-lepak-tee/back.png",
      detail: "/images/products/jom-lepak-tee/detail.png",
      model: "/images/products/jom-lepak-tee/model.png",
    },
    colors: [
      { name: "Background Black", hex: "#080808", value: "black" },
      { name: "Off White", hex: "#F2EFE8", value: "white" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    badge: "NEW DROP",
    description:
      "Engineered for midnight kopitiam lepak sessions. Relaxed boxy fit featuring JOM LEPAK chest embroidery and back coffee cup irony motif.",
    material: "Premium heavyweight cotton, 240–260 GSM.",
    fit: "Oversized drop-shoulder silhouette.",
    print: "3D Embroidery front emblem & high-density back print.",
    origin: "Designed in Malaysia.",
    stockStatus: "IN STOCK",
    stockCount: 19,
    featured: true,
    isBestSeller: false,
    frontMain: "JOM LEPAK",
    frontSub: "No Rush. No Drama.",
    backCopy: "Kopi dulu. Cerita kemudian.",
  },
  {
    id: "prod-07",
    slug: "ngam-lah-tee",
    name: "NGAM LAH Oversized Tee",
    subtitle: "Local Vibes Only.",
    series: "NGAM LAH",
    category: "oversized-tee",
    collectionId: "lokal-essentials",
    price: 129,
    images: {
      front: "/images/products/ngam-lah-tee/front.png",
      back: "/images/products/ngam-lah-tee/back.png",
      detail: "/images/products/ngam-lah-tee/detail.png",
      model: "/images/products/ngam-lah-tee/model.png",
    },
    colors: [
      { name: "Obsidian Black", hex: "#080808", value: "black" },
      { name: "Dark Teal", hex: "#0E5B5F", value: "teal" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    badge: "LIMITED RUN",
    description:
      "When everything aligns perfectly in fit and attitude. Heavy cotton oversized tee with dark teal Batik border accents.",
    material: "Premium heavyweight cotton, 240–260 GSM.",
    fit: "Oversized drop-shoulder silhouette.",
    print: "Full sleeve & chest silkscreen print.",
    origin: "Designed in Malaysia.",
    stockStatus: "LOW STOCK",
    stockCount: 8,
    featured: false,
    isBestSeller: false,
    frontMain: "NGAM LAH",
    frontSub: "Local Vibes Only.",
    backCopy: "Masuk kepala. Masuk gaya.",
  },
  {
    id: "prod-08",
    slug: "syok-lah-tee",
    name: "SYOK LAH Oversized Tee",
    subtitle: "Too Good To Miss.",
    series: "SYOK LAH",
    category: "oversized-tee",
    collectionId: "street-satire",
    price: 129,
    images: {
      front: "/images/products/syok-lah-tee/front.png",
      back: "/images/products/syok-lah-tee/back.png",
      detail: "/images/products/syok-lah-tee/detail.png",
      model: "/images/products/syok-lah-tee/model.png",
    },
    colors: [
      { name: "Surface Black", hex: "#111111", value: "black" },
      { name: "Cream", hex: "#E8DFCF", value: "cream" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    badge: "NEW DROP",
    description:
      "Pure satisfaction in garment form. SYOK LAH oversized tee with distressed white screenprint and contrast collar trim.",
    material: "Premium heavyweight cotton, 240–260 GSM.",
    fit: "Oversized drop-shoulder silhouette.",
    print: "Discharge print with cream accent line.",
    origin: "Designed in Malaysia.",
    stockStatus: "IN STOCK",
    stockCount: 14,
    featured: false,
    isBestSeller: false,
    frontMain: "SYOK LAH",
    frontSub: "Too Good To Miss.",
    backCopy: "Sekali pakai terus jadi.",
  },
  {
    id: "prod-09",
    slug: "sentap-sikit-tee",
    name: "SENTAP SIKIT Oversized Tee",
    subtitle: "Truth Hurts A Bit.",
    series: "SENTAP SIKIT",
    category: "oversized-tee",
    collectionId: "street-satire",
    price: 129,
    images: {
      front: "/images/products/sentap-sikit-tee/front.png",
      back: "/images/products/sentap-sikit-tee/back.png",
      detail: "/images/products/sentap-sikit-tee/detail.png",
      model: "/images/products/sentap-sikit-tee/model.png",
    },
    colors: [
      { name: "Washed Black", hex: "#171717", value: "black" },
      { name: "Heritage Red", hex: "#8D2025", value: "red" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    badge: "HOT",
    description:
      "For the easily offended generation. Truth hurts a bit, but wearing it hurts even more. Heritage red print on obsidian black heavyweight cotton.",
    material: "Premium heavyweight cotton, 240–260 GSM.",
    fit: "Oversized drop-shoulder silhouette.",
    print: "Silkscreen print with red batik accent.",
    origin: "Designed in Malaysia.",
    stockStatus: "IN STOCK",
    stockCount: 17,
    featured: false,
    isBestSeller: false,
    frontMain: "SENTAP SIKIT",
    frontSub: "Truth Hurts A Bit.",
    backCopy: "Kalau terasa, mungkin betul.",
  },
  {
    id: "prod-10",
    slug: "steady-konon-sleeveless",
    name: "STEADY KONON Sleeveless Tee",
    subtitle: "Cool Kat Luar, Panic Kat Dalam.",
    series: "STEADY KONON",
    category: "sleeveless",
    collectionId: "local-irony",
    price: 109,
    images: {
      front: "/images/products/steady-konon-sleeveless/front.png",
      back: "/images/products/steady-konon-sleeveless/back.png",
      detail: "/images/products/steady-konon-sleeveless/detail.png",
      model: "/images/products/steady-konon-sleeveless/model.png",
    },
    colors: [
      { name: "Deep Black", hex: "#080808", value: "black" },
      { name: "Acid Lime Accent", hex: "#C8FF00", value: "lime" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    badge: "LIMITED RUN",
    description:
      "Feigning calm on the outside while experiencing inner chaos. Boxy dropped armhole sleeveless cut with Acid Lime warning label motif.",
    material: "Premium heavyweight cotton, 240–260 GSM.",
    fit: "Oversized drop-shoulder silhouette.",
    print: "High-density screenprint with raw edge finish.",
    origin: "Designed in Malaysia.",
    stockStatus: "LOW STOCK",
    stockCount: 5,
    featured: false,
    isBestSeller: false,
    frontMain: "STEADY KONON",
    frontSub: "Cool Kat Luar, Panic Kat Dalam.",
    backCopy: "Muka relax. Jiwa kalut.",
  },
  {
    id: "prod-11",
    slug: "banyak-alasan-tee",
    name: "BANYAK ALASAN Oversized Tee",
    subtitle: "Excuses Premium Edition.",
    series: "BANYAK ALASAN",
    category: "oversized-tee",
    collectionId: "local-irony",
    price: 129,
    images: {
      front: "/images/products/banyak-alasan-tee/front.png",
      back: "/images/products/banyak-alasan-tee/back.png",
      detail: "/images/products/banyak-alasan-tee/detail.png",
      model: "/images/products/banyak-alasan-tee/model.png",
    },
    colors: [
      { name: "Obsidian Black", hex: "#080808", value: "black" },
      { name: "Burnt Orange", hex: "#D65A20", value: "orange" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    badge: "NEW DROP",
    description:
      "A tribute to the world champions of procrastination. Excuses Premium Edition typography printed on 260 GSM heavyweight cotton.",
    material: "Premium heavyweight cotton, 240–260 GSM.",
    fit: "Oversized drop-shoulder silhouette.",
    print: "Discharge print with burnt orange border line.",
    origin: "Designed in Malaysia.",
    stockStatus: "IN STOCK",
    stockCount: 20,
    featured: false,
    isBestSeller: false,
    frontMain: "BANYAK ALASAN",
    frontSub: "Excuses Premium Edition.",
    backCopy: "Idea ada. Gerak tak ada.",
  },
  {
    id: "prod-12",
    slug: "chill-dulu-tee",
    name: "CHILL DULU Oversized Tee",
    subtitle: "Everything Also Urgent?",
    series: "CHILL DULU",
    category: "oversized-tee",
    collectionId: "lepak-club",
    price: 129,
    images: {
      front: "/images/products/chill-dulu-tee/front.png",
      back: "/images/products/chill-dulu-tee/back.png",
      detail: "/images/products/chill-dulu-tee/detail.png",
      model: "/images/products/chill-dulu-tee/model.png",
    },
    colors: [
      { name: "Background Black", hex: "#080808", value: "black" },
      { name: "Off White", hex: "#F2EFE8", value: "white" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    badge: "BEST SELLER",
    description:
      "An antidote to modern burnout and fake emergencies. Everything also urgent? Relax bro, world hasn't ended. Oversized street uniform.",
    material: "Premium heavyweight cotton, 240–260 GSM.",
    fit: "Oversized drop-shoulder silhouette.",
    print: "Soft-touch screenprint with Batik corner emblem.",
    origin: "Designed in Malaysia.",
    stockStatus: "IN STOCK",
    stockCount: 25,
    featured: true,
    isBestSeller: false,
    frontMain: "CHILL DULU",
    frontSub: "Everything Also Urgent?",
    backCopy: "Relax bro. Dunia belum habis.",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getRelatedProducts(currentId: string, limit = 4): Product[] {
  return PRODUCTS.filter((p) => p.id !== currentId).slice(0, limit);
}
