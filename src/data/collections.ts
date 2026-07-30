export interface Collection {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tags: string[];
}

export const COLLECTIONS: Collection[] = [
  {
    id: "local-irony",
    number: "01",
    title: "LOCAL IRONY",
    subtitle: "Banyak cakap. Sedikit gerak.",
    description: "Satirical Malaysian street statements printed on 260 GSM drop-shoulder silhouettes.",
    image: "/images/products/sembang-kencang-tee/model.png",
    tags: ["SEMBANG KENCANG", "ACAH PADU", "BOLEH LAH"],
  },
  {
    id: "street-satire",
    number: "02",
    title: "STREET SATIRE",
    subtitle: "Warisan lama. Attitude baru.",
    description: "Reimagined Malaysian slang fused with rebellious dark streetwear aesthetics and batik motifs.",
    image: "/images/products/padu-gila-tee/model.png",
    tags: ["PADU GILA", "SENTAP SIKIT", "SYOK LAH"],
  },
  {
    id: "lepak-club",
    number: "03",
    title: "LEPAK CLUB",
    subtitle: "No agenda. Just vibes.",
    description: "Ultra-heavyweight relaxed fits engineered for midnight kopitiam sessions and urban wandering.",
    image: "/images/products/jom-lepak-tee/model.png",
    tags: ["JOM LEPAK", "TERPALING ON", "CHILL DULU"],
  },
];
