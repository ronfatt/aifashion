"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Heart, ShoppingBag, Menu, User } from "lucide-react";
import { MAIN_NAV } from "@/data/navigation";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { useSearch } from "@/context/SearchContext";
import { MobileMenu } from "./MobileMenu";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalItems, openCart } = useCart();
  const { wishlistCount, openWishlist } = useWishlist();
  const { openSearch } = useSearch();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-[#080808]/90 backdrop-blur-md border-b border-[#292929]/80 py-3 shadow-xl"
            : "bg-gradient-to-b from-[#080808] via-[#080808]/70 to-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="group flex items-center space-x-1.5 focus:outline-none" aria-label="LOKAL//LOUD Homepage">
            <span className="font-display text-2xl sm:text-3xl tracking-wider text-[#F2EFE8] group-hover:text-[#C8FF00] transition-colors font-extrabold">
              LOKAL<span className="text-[#C8FF00]">//</span>LOUD
            </span>
            <span className="hidden sm:inline-block px-1.5 py-0.5 text-[9px] font-mono uppercase bg-[#171717] text-[#C8FF00] border border-[#292929] rounded">
              MY STREETWEAR
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8" aria-label="Main Navigation">
            {MAIN_NAV.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="relative py-1 text-sm font-bold tracking-widest text-[#F2EFE8] hover:text-[#C8FF00] transition-colors group"
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className="ml-1.5 text-[9px] px-1.5 py-0.5 font-mono bg-[#C8FF00] text-[#080808] font-black rounded-sm">
                    {link.badge}
                  </span>
                )}
                {/* Hover Acid Lime Underline */}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#C8FF00] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Search Button */}
            <button
              onClick={openSearch}
              className="p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center text-[#F2EFE8] hover:text-[#C8FF00] hover:bg-[#171717] rounded-full transition-colors relative"
              aria-label="Search catalog"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Account Icon */}
            <button
              onClick={() => alert("Customer Portal demo: Login with mobile or email.")}
              className="hidden sm:flex p-2.5 min-w-[44px] min-h-[44px] items-center justify-center text-[#F2EFE8] hover:text-[#C8FF00] hover:bg-[#171717] rounded-full transition-colors"
              aria-label="Account login"
            >
              <User className="w-5 h-5" />
            </button>

            {/* Wishlist Icon */}
            <button
              onClick={openWishlist}
              className="p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center text-[#F2EFE8] hover:text-[#C8FF00] hover:bg-[#171717] rounded-full transition-colors relative"
              aria-label={`View wishlist (${wishlistCount} items)`}
            >
              <Heart className="w-5 h-5" />
              {wishlistCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-[#C8FF00] text-[#080808] text-[10px] font-extrabold rounded-full flex items-center justify-center shadow-md">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Cart Icon */}
            <button
              onClick={openCart}
              className="p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center text-[#F2EFE8] hover:text-[#C8FF00] hover:bg-[#171717] rounded-full transition-colors relative"
              aria-label={`View shopping cart (${totalItems} items)`}
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute top-1 right-1 min-w-[18px] h-4 px-1 bg-[#C8FF00] text-[#080808] text-[10px] font-black rounded-full flex items-center justify-center shadow-md">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center text-[#F2EFE8] hover:text-[#C8FF00] hover:bg-[#171717] rounded-md transition-colors"
              aria-label="Open mobile navigation menu"
              aria-expanded={isMobileMenuOpen}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
};
