"use client";

import React, { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { SlidersHorizontal } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { CATEGORIES } from "@/data/categories";
import { ProductCard } from "@/components/ProductCard";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { CartDrawer } from "@/components/CartDrawer";
import { WishlistDrawer } from "@/components/WishlistDrawer";
import { SearchModal } from "@/components/SearchModal";

function ShopContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";
  const initialCollection = searchParams.get("collection") || "all";
  const initialSale = searchParams.get("sale") === "true";

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [selectedCollection, setSelectedCollection] = useState<string>(initialCollection);
  const [onlySale, setOnlySale] = useState<boolean>(initialSale);
  const [sortBy, setSortBy] = useState<string>("featured");

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      if (selectedCategory !== "all" && p.category !== selectedCategory) return false;
      if (selectedCollection !== "all" && p.collectionId !== selectedCollection) return false;
      if (onlySale && !p.compareAtPrice) return false;
      return true;
    }).sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      if (sortBy === "newest") return b.id.localeCompare(a.id);
      return 0; // featured
    });
  }, [selectedCategory, selectedCollection, onlySale, sortBy]);

  return (
    <div className="min-h-screen bg-[#080808] text-[#F2EFE8]">
      <AnnouncementBar />
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Header */}
        <div className="mb-10 text-center sm:text-left">
          <span className="text-xs font-mono tracking-widest text-[#C8FF00] uppercase block mb-1">
            // OFFICIAL STREETWEAR CATALOG
          </span>
          <h1 className="font-display text-5xl sm:text-7xl text-[#F2EFE8] uppercase tracking-wider">
            ALL OVERSIZED UNIFORMS
          </h1>
          <p className="font-mono text-xs sm:text-sm text-[#8C8C8C] mt-2">
            Showing {filteredProducts.length} street satire garments (240–260 GSM Heavyweight Cotton).
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-[#111111] border border-[#292929] p-4 rounded-sm mb-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar pb-2 md:pb-0">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`min-h-[44px] px-4 py-2 font-mono text-xs font-bold rounded-sm border whitespace-nowrap transition-colors ${
                selectedCategory === "all"
                  ? "bg-[#C8FF00] text-[#080808] border-[#C8FF00]"
                  : "bg-[#080808] text-[#8C8C8C] border-[#292929] hover:text-[#F2EFE8]"
              }`}
            >
              ALL PRODUCTS ({PRODUCTS.length})
            </button>

            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`min-h-[44px] px-4 py-2 font-mono text-xs font-bold rounded-sm border whitespace-nowrap transition-colors ${
                  selectedCategory === cat.id
                    ? "bg-[#C8FF00] text-[#080808] border-[#C8FF00]"
                    : "bg-[#080808] text-[#8C8C8C] border-[#292929] hover:text-[#F2EFE8]"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center space-x-3 text-xs font-mono text-[#8C8C8C]">
            <SlidersHorizontal className="w-4 h-4 text-[#C8FF00]" />
            <span>SORT BY:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-[#080808] border border-[#292929] text-[#F2EFE8] px-3 py-2 rounded-sm focus:outline-none focus:border-[#C8FF00] min-h-[44px]"
            >
              <option value="featured">FEATURED</option>
              <option value="price-low">PRICE: LOW TO HIGH</option>
              <option value="price-high">PRICE: HIGH TO LOW</option>
              <option value="newest">NEWEST DROPS</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="py-24 text-center space-y-4">
            <h2 className="font-display text-3xl text-[#F2EFE8]">NO PRODUCTS MATCH YOUR FILTER</h2>
            <button
              onClick={() => {
                setSelectedCategory("all");
                setSelectedCollection("all");
                setOnlySale(false);
              }}
              className="px-6 py-3 bg-[#C8FF00] text-[#080808] font-mono text-xs font-bold rounded-sm"
            >
              RESET ALL FILTERS
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </main>

      <CartDrawer />
      <WishlistDrawer />
      <SearchModal />
      <Footer />
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#080808]" />}>
      <ShopContent />
    </Suspense>
  );
}
