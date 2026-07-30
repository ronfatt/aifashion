"use client";

import React from "react";
import Link from "next/link";
import { X, ArrowRight, Instagram, Search, Heart, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { MAIN_NAV } from "@/data/navigation";
import { SITE_CONFIG } from "@/data/config";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { useSearch } from "@/context/SearchContext";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const { totalItems, openCart } = useCart();
  const { wishlistCount, openWishlist } = useWishlist();
  const { openSearch } = useSearch();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 lg:hidden"
          />

          {/* Drawer Menu Panel */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-full sm:w-[380px] bg-[#080808] border-l border-[#292929] z-50 flex flex-col justify-between p-6 overflow-y-auto lg:hidden"
          >
            {/* Top Bar */}
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#292929]">
                <span className="font-display text-2xl tracking-wider text-[#F2EFE8]">
                  LOKAL<span className="text-[#C8FF00]">//</span>LOUD
                </span>
                <button
                  onClick={onClose}
                  className="min-w-[44px] min-h-[44px] flex items-center justify-center text-[#8C8C8C] hover:text-[#C8FF00] hover:bg-[#171717] rounded-full transition-colors"
                  aria-label="Close mobile menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Quick Action Icons bar */}
              <div className="grid grid-cols-3 gap-2 my-6">
                <button
                  onClick={() => {
                    onClose();
                    openSearch();
                  }}
                  className="flex flex-col items-center justify-center py-3 min-h-[50px] bg-[#111111] border border-[#292929] rounded hover:border-[#C8FF00] transition-colors"
                  aria-label="Open search modal"
                >
                  <Search className="w-5 h-5 text-[#C8FF00] mb-1" />
                  <span className="text-[11px] font-mono text-[#8C8C8C]">SEARCH</span>
                </button>
                <button
                  onClick={() => {
                    onClose();
                    openWishlist();
                  }}
                  className="flex flex-col items-center justify-center py-3 min-h-[50px] bg-[#111111] border border-[#292929] rounded hover:border-[#C8FF00] transition-colors relative"
                  aria-label="Open wishlist drawer"
                >
                  <Heart className="w-5 h-5 text-[#C8FF00] mb-1" />
                  <span className="text-[11px] font-mono text-[#8C8C8C]">WISHLIST</span>
                  {wishlistCount > 0 && (
                    <span className="absolute top-2 right-2 w-4 h-4 bg-[#C8FF00] text-[#080808] text-[9px] font-black rounded-full flex items-center justify-center">
                      {wishlistCount}
                    </span>
                  )}
                </button>
                <button
                  onClick={() => {
                    onClose();
                    openCart();
                  }}
                  className="flex flex-col items-center justify-center py-3 min-h-[50px] bg-[#111111] border border-[#292929] rounded hover:border-[#C8FF00] transition-colors relative"
                  aria-label="Open cart drawer"
                >
                  <ShoppingBag className="w-5 h-5 text-[#C8FF00] mb-1" />
                  <span className="text-[11px] font-mono text-[#8C8C8C]">CART</span>
                  {totalItems > 0 && (
                    <span className="absolute top-2 right-2 w-4 h-4 bg-[#C8FF00] text-[#080808] text-[9px] font-black rounded-full flex items-center justify-center">
                      {totalItems}
                    </span>
                  )}
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col space-y-3">
                {MAIN_NAV.map((link, idx) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={onClose}
                    className="flex items-center justify-between min-h-[48px] px-2 text-xl font-display tracking-widest text-[#F2EFE8] hover:text-[#C8FF00] border-b border-[#171717] group transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-xs font-mono text-[#8C8C8C]">0{idx + 1}</span>
                      <span>{link.label}</span>
                      {link.badge && (
                        <span className="text-[10px] px-1.5 py-0.5 bg-[#C8FF00] text-[#080808] font-bold rounded">
                          {link.badge}
                        </span>
                      )}
                    </div>
                    <ArrowRight className="w-5 h-5 text-[#8C8C8C] group-hover:text-[#C8FF00] group-hover:translate-x-1 transition-all" />
                  </Link>
                ))}
              </nav>
            </div>

            {/* Bottom Footer Info */}
            <div className="pt-6 border-t border-[#292929] space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-[#8C8C8C]">
                <span>MALAYSIA · MYR</span>
                <span className="text-[#C8FF00]">FREE SHIPPING &gt; RM200</span>
              </div>
              <p className="text-xs text-[#8C8C8C] font-mono leading-relaxed">
                {SITE_CONFIG.tagline}
              </p>
              <div className="flex items-center space-x-4 pt-2">
                <a
                  href={SITE_CONFIG.social.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="min-w-[44px] min-h-[44px] flex items-center justify-center bg-[#111111] border border-[#292929] rounded text-[#F2EFE8] hover:text-[#C8FF00]"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
