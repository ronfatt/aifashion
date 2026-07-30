export interface LookbookItem {
  id: string;
  title: string;
  location: string;
  image: string;
  aspectRatio: "aspect-[3/4]" | "aspect-[4/5]" | "aspect-[16/9]";
  caption: string;
}

export const LOOKBOOK_ITEMS: LookbookItem[] = [
  {
    id: "lb-01",
    title: "KOPITIAM MIDNIGHT VIBES",
    location: "Chinatown, Kuala Lumpur",
    image: "/images/lookbook/lookbook-01.jpg",
    aspectRatio: "aspect-[3/4]",
    caption: "Heavyweight drop-shoulder tee styled with distressed denim and batik pocket detail.",
  },
  {
    id: "lb-02",
    title: "BATIK REWORKED DETAIL",
    location: "Studio 03, Subang Jaya",
    image: "/images/lookbook/lookbook-02.jpg",
    aspectRatio: "aspect-[4/5]",
    caption: "High-density puff screenprint over traditional Terengganu batik motif pattern.",
  },
  {
    id: "lb-03",
    title: "URBAN ALLEYWAY ATTITUDE",
    location: "RexKL Alleyways",
    image: "/images/lookbook/lookbook-03.jpg",
    aspectRatio: "aspect-[16/9]",
    caption: "ACAH PADU sleeveless shirt worn by local skater crew in nocturnal KL lights.",
  },
  {
    id: "lb-04",
    title: "RAW INDUSTRIAL SILHOUETTE",
    location: "Bangsar South Concrete",
    image: "/images/lookbook/lookbook-04.jpg",
    aspectRatio: "aspect-[3/4]",
    caption: "TERPALING ON oversized hoodie with metallic silver embroidery.",
  },
  {
    id: "lb-05",
    title: "STREET SATIRE UNIFORM",
    location: "Bukit Bintang Crosswalk",
    image: "/images/lookbook/lookbook-05.jpg",
    aspectRatio: "aspect-[4/5]",
    caption: "PADU GILA graphic oversized tee in natural Acid Lime custom dye.",
  },
];
