"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { COLLECTIONS } from "@/data/collections";

export const FeaturedCollections: React.FC = () => {
  return (
    <section id="collections" className="w-full py-20 bg-[#080808] border-b border-[#292929]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-xs font-mono tracking-widest text-[#C8FF00] uppercase block mb-1">
            // EDITORIAL CURATION
          </span>
          <h2 className="font-display text-4xl sm:text-6xl text-[#F2EFE8] tracking-wider uppercase">
            FEATURED COLLECTIONS
          </h2>
        </div>

        {/* Desktop Asymmetric Editorial Grid / Mobile Single Column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Collection 01 - Large Card Left (Spans 7 cols) */}
          <Link
            href={`/shop?collection=${COLLECTIONS[0].id}`}
            className="group relative lg:col-span-7 h-[450px] sm:h-[550px] bg-[#111111] border border-[#292929] rounded-sm overflow-hidden flex flex-col justify-end p-8 transition-all duration-500 hover:border-[#292929]"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700 opacity-70 group-hover:opacity-90"
              style={{ backgroundImage: `url(${COLLECTIONS[0].image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/40 to-transparent" />

            {/* Top Number */}
            <div className="absolute top-6 left-6 font-mono text-sm text-[#C8FF00] font-black border border-[#292929] bg-[#080808]/80 px-3 py-1 rounded">
              {COLLECTIONS[0].number} // COLLECTION
            </div>

            {/* Content */}
            <div className="relative z-10 space-y-2 group-hover:-translate-y-1 transition-transform duration-300">
              <h3 className="font-display text-4xl sm:text-6xl text-[#F2EFE8] group-hover:text-[#C8FF00] transition-colors uppercase leading-none">
                {COLLECTIONS[0].title}
              </h3>
              <p className="font-mono text-sm text-[#F2EFE8]/80 italic">
                "{COLLECTIONS[0].subtitle}"
              </p>
              <p className="text-xs text-[#8C8C8C] max-w-md line-clamp-2">
                {COLLECTIONS[0].description}
              </p>
              <div className="pt-4 flex items-center space-x-2 text-xs font-mono font-bold text-[#C8FF00] uppercase">
                <span>VIEW COLLECTION</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </div>
          </Link>

          {/* Right Column Stack for Collection 02 & 03 (Spans 5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Collection 02 */}
            <Link
              href={`/shop?collection=${COLLECTIONS[1].id}`}
              className="group relative h-[260px] sm:h-[263px] bg-[#111111] border border-[#292929] rounded-sm overflow-hidden flex flex-col justify-end p-6 transition-all duration-500 hover:border-[#292929]"
            >
              <div
                className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700 opacity-70 group-hover:opacity-90"
                style={{ backgroundImage: `url(${COLLECTIONS[1].image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/40 to-transparent" />

              <div className="absolute top-4 left-4 font-mono text-xs text-[#C8FF00] font-black border border-[#292929] bg-[#080808]/80 px-2.5 py-0.5 rounded">
                {COLLECTIONS[1].number}
              </div>

              <div className="relative z-10 space-y-1 group-hover:-translate-y-1 transition-transform duration-300">
                <h3 className="font-display text-3xl text-[#F2EFE8] group-hover:text-[#C8FF00] transition-colors uppercase leading-none">
                  {COLLECTIONS[1].title}
                </h3>
                <p className="font-mono text-xs text-[#F2EFE8]/80 italic">
                  "{COLLECTIONS[1].subtitle}"
                </p>
                <div className="pt-2 flex items-center space-x-2 text-[11px] font-mono font-bold text-[#C8FF00]">
                  <span>EXPLORE BATIK</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </Link>

            {/* Collection 03 */}
            <Link
              href={`/shop?collection=${COLLECTIONS[2].id}`}
              className="group relative h-[260px] sm:h-[263px] bg-[#111111] border border-[#292929] rounded-sm overflow-hidden flex flex-col justify-end p-6 transition-all duration-500 hover:border-[#292929]"
            >
              <div
                className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700 opacity-70 group-hover:opacity-90"
                style={{ backgroundImage: `url(${COLLECTIONS[2].image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/40 to-transparent" />

              <div className="absolute top-4 left-4 font-mono text-xs text-[#C8FF00] font-black border border-[#292929] bg-[#080808]/80 px-2.5 py-0.5 rounded">
                {COLLECTIONS[2].number}
              </div>

              <div className="relative z-10 space-y-1 group-hover:-translate-y-1 transition-transform duration-300">
                <h3 className="font-display text-3xl text-[#F2EFE8] group-hover:text-[#C8FF00] transition-colors uppercase leading-none">
                  {COLLECTIONS[2].title}
                </h3>
                <p className="font-mono text-xs text-[#F2EFE8]/80 italic">
                  "{COLLECTIONS[2].subtitle}"
                </p>
                <div className="pt-2 flex items-center space-x-2 text-[11px] font-mono font-bold text-[#C8FF00]">
                  <span>JOIN LEPAK CLUB</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
