"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { Search, X, ArrowRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useSearch } from "@/context/SearchContext";
import { PRODUCTS } from "@/data/products";

export const SearchModal: React.FC = () => {
  const { isSearchOpen, closeSearch, searchQuery, setSearchQuery } = useSearch();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isSearchOpen]);

  // Filter products matching query
  const filteredProducts = searchQuery.trim()
    ? PRODUCTS.filter((p) => {
        const q = searchQuery.toLowerCase();
        return (
          p.name.toLowerCase().includes(q) ||
          p.series.toLowerCase().includes(q) ||
          p.subtitle.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
        )
      })
    : [];

  const POPULAR_SEARCHES = [
    "SEMBANG KENCANG",
    "ACAH PADU",
    "TERPALING ON",
    "BOLEH LAH",
    "PADU GILA",
    "HOODIE",
    "BATIK",
  ];

  return (
    <AnimatePresence>
      {isSearchOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-[#080808]/95 backdrop-blur-xl z-50 overflow-y-auto p-4 sm:p-8"
        >
          <div className="max-w-4xl mx-auto pt-8">
            {/* Top Close Bar */}
            <div className="flex items-center justify-between pb-6 border-b border-[#292929]">
              <span className="font-display text-2xl tracking-wider text-[#F2EFE8]">
                LOKAL<span className="text-[#C8FF00]">//</span>SEARCH
              </span>
              <button
                onClick={closeSearch}
                className="p-2 text-[#8C8C8C] hover:text-[#C8FF00] hover:bg-[#171717] rounded-full transition-colors"
                aria-label="Close search"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Input Form */}
            <div className="my-8 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-7 h-7 text-[#C8FF00]" />
              <input
                ref={inputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by slang, product name, series (e.g. Sembang Kencang, Padu)..."
                className="w-full bg-[#111111] border-2 border-[#292929] focus:border-[#C8FF00] text-xl sm:text-2xl font-mono text-[#F2EFE8] placeholder-[#8C8C8C] pl-14 pr-12 py-5 rounded-sm focus:outline-none transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8C8C8C] hover:text-[#F2EFE8]"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Popular Searches Quick Tags */}
            {!searchQuery && (
              <div className="space-y-4 my-8">
                <span className="text-xs font-mono text-[#8C8C8C] tracking-widest uppercase block">
                  POPULAR STREET SEARCHES:
                </span>
                <div className="flex flex-wrap gap-2">
                  {POPULAR_SEARCHES.map((term) => (
                    <button
                      key={term}
                      onClick={() => setSearchQuery(term)}
                      className="px-3.5 py-2 bg-[#111111] border border-[#292929] text-xs font-mono text-[#F2EFE8] hover:border-[#C8FF00] hover:text-[#C8FF00] rounded-sm transition-colors flex items-center space-x-1.5"
                    >
                      <Sparkles className="w-3 h-3 text-[#C8FF00]" />
                      <span>{term}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Search Results */}
            {searchQuery && (
              <div className="space-y-6">
                <div className="flex items-center justify-between text-xs font-mono text-[#8C8C8C] pb-2 border-b border-[#292929]">
                  <span>FOUND {filteredProducts.length} RESULTS FOR "{searchQuery.toUpperCase()}"</span>
                </div>

                {filteredProducts.length === 0 ? (
                  <div className="py-16 text-center space-y-4">
                    <p className="font-display text-3xl text-[#F2EFE8]">TAK ADA RESULTS LAH</p>
                    <p className="text-xs font-mono text-[#8C8C8C]">
                      No streetwear items matched your query. Try searching for "Tee", "Hoodie", or "Batik".
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {filteredProducts.map((product) => (
                      <Link
                        key={product.id}
                        href={`/products/${product.slug}`}
                        onClick={closeSearch}
                        className="group flex space-x-4 p-3 bg-[#111111] border border-[#292929] hover:border-[#C8FF00] rounded-sm transition-colors"
                      >
                        <div className="w-20 h-24 bg-[#080808] border border-[#292929] rounded-sm overflow-hidden flex-shrink-0 relative">
                          <div
                            className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform"
                            style={{ backgroundImage: `url(${product.images.front})` }}
                          />
                        </div>

                        <div className="flex-grow flex flex-col justify-between">
                          <div>
                            <span className="text-[9px] font-mono text-[#C8FF00] uppercase block">
                              {product.series}
                            </span>
                            <h4 className="font-display text-lg text-[#F2EFE8] group-hover:text-[#C8FF00] transition-colors leading-tight line-clamp-1">
                              {product.name}
                            </h4>
                          </div>

                          <div className="flex items-center justify-between pt-2 border-t border-[#292929]">
                            <span className="font-mono text-sm font-extrabold text-[#F2EFE8]">
                              RM{product.price}
                            </span>
                            <ArrowRight className="w-4 h-4 text-[#8C8C8C] group-hover:text-[#C8FF00] group-hover:translate-x-1 transition-all" />
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
