import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { WishlistProvider } from "@/context/WishlistContext";
import { SearchProvider } from "@/context/SearchContext";

export const metadata: Metadata = {
  title: "LOKAL//LOUD — Malaysian Streetwear",
  description:
    "Malaysian streetwear built from local slang, batik culture and oversized attitude. Designed and crafted in Kuala Lumpur.",
  keywords: [
    "Malaysian streetwear",
    "Batik streetwear",
    "Oversized t-shirt Malaysia",
    "Local brand apparel",
    "Sembang Kencang",
    "Acah Padu",
    "KL fashion",
  ],
  openGraph: {
    title: "LOKAL//LOUD — Malaysian Streetwear",
    description: "Pakai attitude. Bukan sekadar baju.",
    url: "https://lokalloud.my",
    siteName: "LOKAL//LOUD",
    locale: "en_MY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LOKAL//LOUD — Malaysian Streetwear",
    description: "Malaysian street irony, printed loud.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-[#080808] text-[#F2EFE8] antialiased">
        <CartProvider>
          <WishlistProvider>
            <SearchProvider>{children}</SearchProvider>
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}
