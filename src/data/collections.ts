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
    image: "/images/collections/collection-local-irony.jpg",
    tags: ["SEMBANG KENCANG", "ACAH PADU", "BOLEH LAH"],
  },
  {
    id: "batik-after-dark",
    number: "02",
    title: "BATIK AFTER DARK",
    subtitle: "Warisan lama. Attitude baru.",
    description: "Reimagined Malaysian heritage batik prints fused with rebellious dark streetwear aesthetic.",
    image: "/images/collections/collection-batik-dark.jpg",
    tags: ["BATIK REWORKED", "LIMITED RUN", "KL NIGHTS"],
  },
  {
    id: "lepak-club",
    number: "03",
    title: "LEPAK CLUB",
    subtitle: "No agenda. Just vibes.",
    description: "Ultra-heavyweight relaxed fits engineered for midnight kopitiam sessions and urban wandering.",
    image: "/images/collections/collection-lepak-club.jpg",
    tags: ["JOM LEPAK", "TERPALING ON", "NGAM LAH"],
  },
];
