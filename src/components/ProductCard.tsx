"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Heart, Plus, Eye } from "lucide-react";
import { Product } from "@/data/products";
import { useWishlist } from "@/context/WishlistContext";
import { QuickAddModal } from "./QuickAddModal";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { isInWishlist, toggleWishlist } = useWishlist();
  const [isHovered, setIsHovered] = useState(false);
  const [isQuickAddOpen, setIsQuickAddOpen] = useState(false);

  const liked = isInWishlist(product.id);

  return (
    <>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative bg-[#111111] border border-[#292929] rounded-sm overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-[#292929] hover:shadow-[0_0_25px_rgba(200,255,0,0.08)]"
      >
        {/* Top Media / Aspect Ratio 4:5 */}
        <div className="relative aspect-[4/5] w-full bg-[#080808] overflow-hidden select-none">
          {/* Badge */}
          {product.badge && (
            <div className="absolute top-3 left-3 z-20">
              <span className="px-2 py-1 bg-[#C8FF00] text-[#080808] font-mono text-[10px] font-extrabold tracking-wider uppercase rounded-xs">
                {product.badge}
              </span>
            </div>
          )}

          {/* Wishlist Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleWishlist(product.id);
            }}
            className={`absolute top-3 right-3 z-20 p-2 rounded-full backdrop-blur-md transition-all ${
              liked
                ? "bg-[#C8FF00] text-[#080808]"
                : "bg-[#080808]/70 text-[#F2EFE8] hover:text-[#C8FF00] hover:bg-[#171717]"
            }`}
            aria-label="Toggle wishlist"
          >
            <Heart className={`w-4 h-4 ${liked ? "fill-current" : ""}`} />
          </button>

          {/* Front & Back Images (Hover Flip Effect) */}
          <Link href={`/products/${product.slug}`} className="block w-full h-full">
            {/* Front Image */}
            <div
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${
                isHovered && product.images.back ? "opacity-0" : "opacity-100"
              }`}
              style={{ backgroundImage: `url(${product.images.front})` }}
            />

            {/* Back Image (Shown on hover) */}
            {product.images.back && (
              <div
                className={`absolute inset-0 bg-cover bg-center transition-all duration-500 scale-105 ${
                  isHovered ? "opacity-100" : "opacity-0"
                }`}
                style={{ backgroundImage: `url(${product.images.back})` }}
              />
            )}
          </Link>

          {/* Quick Add Button - Slides up from bottom */}
          <div
            className={`absolute inset-x-3 bottom-3 z-20 transition-all duration-300 ${
              isHovered
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0 pointer-events-none md:pointer-events-auto"
            }`}
          >
            <button
              onClick={() => setIsQuickAddOpen(true)}
              className="w-full py-2.5 bg-[#C8FF00] text-[#080808] font-mono text-xs font-black tracking-widest uppercase rounded-sm hover:bg-[#d4ff33] transition-all flex items-center justify-center space-x-1.5 shadow-lg"
            >
              <Plus className="w-4 h-4" />
              <span>QUICK ADD</span>
            </button>
          </div>
        </div>

        {/* Product Details Info */}
        <div className="p-4 flex flex-col justify-between flex-grow">
          <div>
            {/* Series Tag */}
            <span className="text-[10px] font-mono text-[#C8FF00] tracking-widest uppercase block mb-1">
              {product.series}
            </span>

            {/* Title */}
            <Link
              href={`/products/${product.slug}`}
              className="font-display text-xl text-[#F2EFE8] group-hover:text-[#C8FF00] transition-colors leading-tight line-clamp-1 uppercase"
            >
              {product.name}
            </Link>

            <p className="text-xs text-[#8C8C8C] font-mono mt-0.5 line-clamp-1">
              {product.subtitle}
            </p>
          </div>

          {/* Price & Colors Footer */}
          <div className="mt-4 pt-3 border-t border-[#292929]/60 flex items-center justify-between">
            {/* Price */}
            <div className="flex items-baseline space-x-2">
              <span className="font-mono text-base font-extrabold text-[#F2EFE8]">
                RM{product.price}
              </span>
              {product.compareAtPrice && (
                <span className="font-mono text-xs text-[#8C8C8C] line-through">
                  RM{product.compareAtPrice}
                </span>
              )}
            </div>

            {/* Colors Dots */}
            {product.colors && product.colors.length > 0 && (
              <div className="flex items-center space-x-1.5">
                {product.colors.slice(0, 3).map((c) => (
                  <span
                    key={c.name}
                    className="w-2.5 h-2.5 rounded-full border border-[#292929]"
                    style={{ backgroundColor: c.hex }}
                    title={c.name}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Quick Add Modal */}
      <QuickAddModal
        product={product}
        isOpen={isQuickAddOpen}
        onClose={() => setIsQuickAddOpen(false)}
      />
    </>
  );
};
