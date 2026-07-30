"use client";

import React from "react";
import Link from "next/link";
import { X, Heart, ShoppingBag, Trash2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";

export const WishlistDrawer: React.FC = () => {
  const { wishlistProducts, isWishlistOpen, closeWishlist, toggleWishlist } = useWishlist();
  const { addToCart } = useCart();

  return (
    <AnimatePresence>
      {isWishlistOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeWishlist}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50"
          />

          {/* Wishlist Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-full sm:w-[420px] bg-[#080808] border-l border-[#292929] z-50 flex flex-col justify-between shadow-2xl"
          >
            {/* Header */}
            <div className="p-6 border-b border-[#292929] flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Heart className="w-5 h-5 text-[#C8FF00] fill-current" />
                <span className="font-display text-2xl tracking-wider text-[#F2EFE8]">
                  MY WISHLIST
                </span>
                <span className="text-xs font-mono px-2 py-0.5 bg-[#171717] text-[#C8FF00] border border-[#292929] rounded-full">
                  {wishlistProducts.length} SAVED
                </span>
              </div>
              <button
                onClick={closeWishlist}
                className="p-2 text-[#8C8C8C] hover:text-[#C8FF00] hover:bg-[#171717] rounded-full transition-colors"
                aria-label="Close wishlist"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Content list */}
            <div className="flex-grow overflow-y-auto p-6 space-y-4">
              {wishlistProducts.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                  <div className="p-4 bg-[#111111] border border-[#292929] rounded-full">
                    <Heart className="w-10 h-10 text-[#8C8C8C]" />
                  </div>
                  <h3 className="font-display text-2xl text-[#F2EFE8]">NO SAVED ITEMS</h3>
                  <p className="text-xs font-mono text-[#8C8C8C] max-w-xs">
                    Click the heart icon on any product to save your favorite street items.
                  </p>
                </div>
              ) : (
                wishlistProducts.map((product) => (
                  <div
                    key={product.id}
                    className="flex space-x-4 p-3 bg-[#111111] border border-[#292929] rounded-sm relative group"
                  >
                    <div className="w-20 h-24 bg-[#080808] border border-[#292929] rounded-sm overflow-hidden flex-shrink-0 relative">
                      <div
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url(${product.images.front})` }}
                      />
                    </div>

                    <div className="flex-grow flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start">
                          <Link
                            href={`/products/${product.slug}`}
                            onClick={closeWishlist}
                            className="font-display text-lg text-[#F2EFE8] hover:text-[#C8FF00] transition-colors leading-tight line-clamp-1"
                          >
                            {product.name}
                          </Link>
                          <button
                            onClick={() => toggleWishlist(product.id)}
                            className="p-1 text-[#8C8C8C] hover:text-red-400 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <span className="text-[10px] font-mono text-[#C8FF00] uppercase block mt-0.5">
                          {product.series}
                        </span>
                        <span className="font-mono text-sm font-extrabold text-[#F2EFE8] block mt-1">
                          RM{product.price}
                        </span>
                      </div>

                      <button
                        onClick={() => {
                          const defaultSize = product.sizes[0] || "L";
                          const defaultColor = product.colors[0]?.name || "Default";
                          addToCart(product, defaultSize, defaultColor, 1);
                        }}
                        className="w-full mt-2 py-2 bg-[#C8FF00] text-[#080808] font-mono text-[11px] font-black tracking-widest uppercase rounded-sm hover:bg-[#d4ff33] transition-colors flex items-center justify-center space-x-1.5"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        <span>MOVE TO CART</span>
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            <div className="p-6 bg-[#111111] border-t border-[#292929]">
              <button
                onClick={closeWishlist}
                className="w-full py-3 bg-[#080808] border border-[#292929] text-[#8C8C8C] font-mono text-xs hover:text-[#F2EFE8] transition-colors rounded-sm text-center"
              >
                BACK TO STORE
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
