"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CATEGORIES } from "@/data/categories";

export const ShopByCategory: React.FC = () => {
  return (
    <section className="w-full py-16 bg-[#080808] border-b border-[#292929]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8">
          <div>
            <span className="text-xs font-mono tracking-widest text-[#C8FF00] uppercase block mb-1">
              // CATEGORY NAVIGATION
            </span>
            <h2 className="font-display text-4xl sm:text-5xl text-[#F2EFE8] tracking-wider uppercase">
              SHOP BY CATEGORY
            </h2>
          </div>
          <Link
            href="/shop"
            className="mt-4 sm:mt-0 inline-flex items-center space-x-2 text-xs font-mono tracking-widest text-[#8C8C8C] hover:text-[#C8FF00] transition-colors"
          >
            <span>VIEW ALL CATEGORIES ({CATEGORIES.length})</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Categories List - Mobile Horizontal Scrollable / Desktop Grid */}
        <div className="flex overflow-x-auto no-scrollbar gap-4 pb-4 md:grid md:grid-cols-3 lg:grid-cols-6 md:gap-4 md:pb-0">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              href={`/shop?category=${cat.id}`}
              className="group relative min-w-[200px] md:min-w-0 bg-[#111111] border border-[#292929] overflow-hidden rounded-sm transition-all duration-300 hover:bg-[#171717] hover:shadow-[0_0_20px_rgba(200,255,0,0.1)] flex flex-col justify-between"
            >
              {/* Top Image Container */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#080808]">
                <div
                  className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                  style={{ backgroundImage: `url(${cat.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-80" />

                {/* Arrow Icon Top Right */}
                <div className="absolute top-3 right-3 p-1.5 bg-[#080808]/80 border border-[#292929] text-[#8C8C8C] group-hover:text-[#080808] group-hover:bg-[#C8FF00] group-hover:border-[#C8FF00] transition-all rounded-full">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Text Info */}
              <div className="p-4 relative">
                <span className="text-[10px] font-mono text-[#8C8C8C] block mb-1">
                  {cat.count} PRODUCTS
                </span>
                <h3 className="font-display text-xl text-[#F2EFE8] group-hover:text-[#C8FF00] transition-colors leading-tight">
                  {cat.name}
                </h3>
                <p className="text-xs text-[#8C8C8C] font-mono mt-0.5 truncate">{cat.subName}</p>

                {/* Acid Lime Border Slide from left to right on Hover */}
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#C8FF00] transition-all duration-300 group-hover:w-full" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
