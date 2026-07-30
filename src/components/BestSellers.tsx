"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { ProductCard } from "./ProductCard";

export const BestSellers: React.FC = () => {
  // Get 5 best seller items from products array sorted by rank
  const bestSellers = PRODUCTS.filter((p) => p.isBestSeller).sort(
    (a, b) => (a.bestSellerRank || 99) - (b.bestSellerRank || 99)
  );

  return (
    <section id="best-sellers" className="w-full py-20 bg-[#080808] border-b border-[#292929]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-2">
              <span className="text-xs font-mono tracking-widest text-[#C8FF00] uppercase">
                // POPULAR STREET WEAR
              </span>
              {/* Handwritten style badge */}
              <span className="font-[font-family:var(--font-playfair)] italic text-sm text-[#C8FF00] bg-[#171717] px-2.5 py-0.5 border border-[#292929] rounded-full">
                Paling On ✨
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl text-[#F2EFE8] tracking-wider uppercase">
              BEST SELLERS
            </h2>
          </div>

          <Link
            href="/shop"
            className="mt-4 md:mt-0 inline-flex items-center space-x-2 text-xs font-mono font-bold tracking-widest text-[#F2EFE8] hover:text-[#C8FF00] transition-colors group"
          >
            <span>SHOP ALL BESTSELLERS</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#C8FF00]" />
          </Link>
        </div>

        {/* Product Grid - 2 Cols on Mobile, 3 Cols on Tablet, 5 Cols on Desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-6">
          {bestSellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};
