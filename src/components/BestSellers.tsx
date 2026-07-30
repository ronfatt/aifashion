"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Flame, Sparkles } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { ProductCard } from "./ProductCard";

export const BestSellers: React.FC = () => {
  // Get 5 best seller items from products array sorted by rank
  const bestSellers = PRODUCTS.filter((p) => p.isBestSeller).sort(
    (a, b) => (a.bestSellerRank || 99) - (b.bestSellerRank || 99)
  );

  return (
    <section id="best-sellers" className="w-full py-20 bg-[#080808] border-b border-[#292929] relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#C8FF00]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-2">
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 bg-[#171717] border border-[#292929] text-[11px] font-mono text-[#C8FF00] font-bold rounded-sm uppercase tracking-wider">
                <Flame className="w-3.5 h-3.5 fill-current text-[#C8FF00]" />
                <span>TOP STREETWEAR DROPS</span>
              </span>

              {/* Handwritten style badge */}
              <span className="font-[font-family:var(--font-playfair)] italic text-sm text-[#C8FF00] bg-[#111111] px-3 py-0.5 border border-[#C8FF00]/30 rounded-full shadow-[0_0_15px_rgba(200,255,0,0.15)]">
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
