"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import {
  Heart,
  ShoppingBag,
  Check,
  Truck,
  RotateCcw,
  ShieldCheck,
  ChevronDown,
  Ruler,
  Plus,
  Minus,
  ArrowRight,
  Share2,
  AlertCircle,
} from "lucide-react";
import { PRODUCTS, getProductBySlug, getRelatedProducts } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { ProductCard } from "@/components/ProductCard";
import { SizeGuideModal } from "@/components/SizeGuideModal";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { WishlistDrawer } from "@/components/WishlistDrawer";
import { SearchModal } from "@/components/SearchModal";
import { AnnouncementBar } from "@/components/AnnouncementBar";

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const product = getProductBySlug(slug);

  if (!product) {
    return (
      <div className="min-h-screen bg-[#080808] text-[#F2EFE8] flex flex-col justify-between">
        <AnnouncementBar />
        <Navbar />
        <div className="max-w-md mx-auto my-32 text-center space-y-4 px-4">
          <h1 className="font-display text-4xl text-[#F2EFE8]">PRODUCT NOT FOUND</h1>
          <p className="font-mono text-xs text-[#8C8C8C]">
            The product you're looking for doesn't exist or has been dropped from current collection.
          </p>
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-[#C8FF00] text-[#080808] font-mono text-xs font-bold rounded-sm"
          >
            RETURN TO HOMEPAGE
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  // Active states
  const [selectedImageKey, setSelectedImageKey] = useState<"front" | "back" | "detail" | "model">(
    "front"
  );
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>(product.colors[0]?.name || "");
  const [quantity, setQuantity] = useState<number>(1);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState<boolean>(false);

  // Accordion active state
  const [activeAccordion, setActiveAccordion] = useState<string | null>("description");

  const liked = isInWishlist(product.id);
  const relatedProducts = getRelatedProducts(product.id, 4);

  const imagesList = [
    { key: "front", url: product.images.front, label: "Front View" },
    { key: "back", url: product.images.back, label: "Back View" },
    { key: "detail", url: product.images.detail, label: "Print Detail" },
    { key: "model", url: product.images.model, label: "On Model" },
  ].filter((img) => Boolean(img.url));

  const handleAddToCart = () => {
    if (!selectedSize) {
      setErrorMessage("⚠️ Sila pilih saiz (Please select a size first!)");
      return;
    }
    setErrorMessage("");
    addToCart(product, selectedSize, selectedColor || product.colors[0]?.name || "Default", quantity);
  };

  const handleBuyNow = () => {
    if (!selectedSize) {
      setErrorMessage("⚠️ Sila pilih saiz (Please select a size first!)");
      return;
    }
    setErrorMessage("");
    addToCart(product, selectedSize, selectedColor || product.colors[0]?.name || "Default", quantity);
    alert("Redirecting to Express FPX / Card Checkout!");
  };

  const toggleAccordion = (id: string) => {
    setActiveAccordion((prev) => (prev === id ? null : id));
  };

  return (
    <div className="min-h-screen bg-[#080808] text-[#F2EFE8] selection:bg-[#C8FF00] selection:text-[#080808]">
      <AnnouncementBar />
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center space-x-2 text-xs font-mono text-[#8C8C8C] mb-8">
          <Link href="/" className="hover:text-[#C8FF00]">
            HOME
          </Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-[#C8FF00]">
            SHOP
          </Link>
          <span>/</span>
          <span className="text-[#F2EFE8] truncate">{product.name}</span>
        </nav>

        {/* Grid Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Image Gallery (Spans 7 cols) */}
          <div className="lg:col-span-7 flex flex-col-reverse sm:flex-row gap-4">
            {/* Thumbnails list */}
            <div className="flex sm:flex-col gap-3 overflow-x-auto sm:overflow-y-auto no-scrollbar">
              {imagesList.map((img) => (
                <button
                  key={img.key}
                  onClick={() => setSelectedImageKey(img.key as any)}
                  className={`relative w-20 h-24 sm:w-24 sm:h-28 bg-[#111111] border-2 rounded-sm overflow-hidden flex-shrink-0 transition-all ${
                    selectedImageKey === img.key
                      ? "border-[#C8FF00] shadow-[0_0_15px_rgba(200,255,0,0.2)] scale-95"
                      : "border-[#292929] opacity-70 hover:opacity-100"
                  }`}
                >
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${img.url})` }}
                  />
                </button>
              ))}
            </div>

            {/* Main Featured Display Image */}
            <div className="relative flex-grow aspect-[4/5] bg-[#111111] border border-[#292929] rounded-sm overflow-hidden group">
              {product.badge && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 bg-[#C8FF00] text-[#080808] font-mono text-xs font-extrabold tracking-wider uppercase rounded-xs">
                    {product.badge}
                  </span>
                </div>
              )}

              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{
                  backgroundImage: `url(${
                    product.images[selectedImageKey] || product.images.front
                  })`,
                }}
              />
            </div>
          </div>

          {/* Right Column: Product Purchase Info (Spans 5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              {/* Series Tag */}
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-xs font-mono text-[#C8FF00] font-black tracking-widest uppercase bg-[#171717] px-2.5 py-1 border border-[#292929] rounded-sm">
                  {product.series}
                </span>
                <span className="text-xs font-mono text-[#8C8C8C] uppercase">
                  {product.stockStatus === "IN STOCK" ? (
                    <span className="text-emerald-400 font-bold">● IN STOCK (SHIPS IN 24H)</span>
                  ) : (
                    <span className="text-amber-400 font-bold">● LOW STOCK (ONLY {product.stockCount} LEFT)</span>
                  )}
                </span>
              </div>

              {/* Title */}
              <h1 className="font-display text-4xl sm:text-5xl text-[#F2EFE8] uppercase leading-none tracking-tight">
                {product.name}
              </h1>

              <p className="text-sm font-mono text-[#8C8C8C] mt-2 italic">{product.subtitle}</p>

              {/* Price Display */}
              <div className="flex items-baseline space-x-3 mt-4">
                <span className="font-mono text-3xl font-black text-[#C8FF00]">
                  RM{product.price}
                </span>
                {product.compareAtPrice && (
                  <span className="font-mono text-lg text-[#8C8C8C] line-through">
                    RM{product.compareAtPrice}
                  </span>
                )}
                <span className="text-[11px] font-mono text-[#8C8C8C]">Taxes included. Free MY shipping over RM200.</span>
              </div>
            </div>

            <hr className="border-[#292929]" />

            {/* Error Message Toast if No Size Selected */}
            {errorMessage && (
              <div className="p-3 bg-red-900/40 border border-red-500 text-red-200 text-xs font-mono rounded flex items-center space-x-2 animate-bounce">
                <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Color Selection */}
            {product.colors && product.colors.length > 0 && (
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono text-[#8C8C8C]">
                  <span>COLOR: <strong className="text-[#F2EFE8]">{selectedColor}</strong></span>
                </div>
                <div className="flex items-center space-x-3">
                  {product.colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={`w-8 h-8 rounded-full border-2 transition-all flex items-center justify-center ${
                        selectedColor === color.name
                          ? "border-[#C8FF00] scale-110 shadow-[0_0_10px_rgba(200,255,0,0.4)]"
                          : "border-[#292929] opacity-80 hover:opacity-100"
                      }`}
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                    >
                      {selectedColor === color.name && (
                        <Check
                          className={`w-4 h-4 ${
                            color.value === "white" ? "text-black" : "text-white"
                          }`}
                        />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Size Selection */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-[#8C8C8C]">
                <span>
                  SIZE: <strong className="text-[#C8FF00]">{selectedSize || "PLEASE SELECT"}</strong>
                </span>
                <button
                  onClick={() => setIsSizeGuideOpen(true)}
                  className="flex items-center space-x-1 text-[#C8FF00] hover:underline"
                >
                  <Ruler className="w-3.5 h-3.5" />
                  <span>SIZE GUIDE</span>
                </button>
              </div>

              <div className="grid grid-cols-5 gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => {
                      setSelectedSize(size);
                      setErrorMessage("");
                    }}
                    className={`py-3 text-xs font-mono font-bold rounded-sm border transition-all ${
                      selectedSize === size
                        ? "bg-[#C8FF00] text-[#080808] border-[#C8FF00] shadow-[0_0_15px_rgba(200,255,0,0.3)]"
                        : "bg-[#111111] text-[#F2EFE8] border-[#292929] hover:border-[#C8FF00]"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="space-y-2">
              <span className="text-xs font-mono text-[#8C8C8C] block">QUANTITY:</span>
              <div className="inline-flex items-center space-x-4 bg-[#111111] border border-[#292929] rounded-sm px-4 py-2">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="text-[#8C8C8C] hover:text-[#C8FF00]"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="font-mono text-sm font-extrabold text-[#F2EFE8] px-2">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="text-[#8C8C8C] hover:text-[#C8FF00]"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Action Buttons: Add to Cart, Buy Now, Wishlist */}
            <div className="space-y-3 pt-2">
              <button
                onClick={handleAddToCart}
                className="w-full py-4 bg-[#C8FF00] text-[#080808] font-mono text-sm font-black tracking-widest uppercase rounded-sm hover:bg-[#d4ff33] transition-all flex items-center justify-center space-x-2 shadow-2xl"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>ADD TO CART</span>
              </button>

              <button
                onClick={handleBuyNow}
                className="w-full py-4 bg-[#111111] border border-[#292929] text-[#F2EFE8] font-mono text-sm font-bold tracking-widest uppercase rounded-sm hover:border-[#C8FF00] hover:text-[#C8FF00] transition-colors"
              >
                BUY IT NOW
              </button>

              <button
                onClick={() => toggleWishlist(product.id)}
                className="w-full py-3 bg-transparent border border-[#292929] text-[#8C8C8C] font-mono text-xs hover:text-[#F2EFE8] transition-colors rounded-sm flex items-center justify-center space-x-2"
              >
                <Heart className={`w-4 h-4 ${liked ? "fill-current text-[#C8FF00]" : ""}`} />
                <span>{liked ? "REMOVE FROM WISHLIST" : "ADD TO WISHLIST"}</span>
              </button>
            </div>

            {/* Product Accordion Info */}
            <div className="pt-6 border-t border-[#292929] divide-y divide-[#292929]">
              {/* Description */}
              <div>
                <button
                  onClick={() => toggleAccordion("description")}
                  className="w-full py-4 flex items-center justify-between font-mono text-xs font-bold text-[#F2EFE8] uppercase"
                >
                  <span>PRODUCT DESCRIPTION</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#C8FF00] transition-transform ${
                      activeAccordion === "description" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeAccordion === "description" && (
                  <div className="pb-4 text-xs font-mono text-[#8C8C8C] space-y-2 leading-relaxed">
                    <p>{product.description}</p>
                    <p className="text-[#C8FF00]">Fit: {product.fit}</p>
                  </div>
                )}
              </div>

              {/* Material & Specs */}
              <div>
                <button
                  onClick={() => toggleAccordion("specs")}
                  className="w-full py-4 flex items-center justify-between font-mono text-xs font-bold text-[#F2EFE8] uppercase"
                >
                  <span>MATERIAL & SPECIFICATIONS</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#C8FF00] transition-transform ${
                      activeAccordion === "specs" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeAccordion === "specs" && (
                  <div className="pb-4 text-xs font-mono text-[#8C8C8C] space-y-1.5">
                    <p>• <strong>Material:</strong> {product.material}</p>
                    <p>• <strong>Print:</strong> {product.print}</p>
                    <p>• <strong>Origin:</strong> {product.origin}</p>
                    <p>• <strong>Silhouettes:</strong> Drop shoulder boxy cut</p>
                  </div>
                )}
              </div>

              {/* Shipping & Returns */}
              <div>
                <button
                  onClick={() => toggleAccordion("shipping")}
                  className="w-full py-4 flex items-center justify-between font-mono text-xs font-bold text-[#F2EFE8] uppercase"
                >
                  <span>SHIPPING & RETURNS</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#C8FF00] transition-transform ${
                      activeAccordion === "shipping" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeAccordion === "shipping" && (
                  <div className="pb-4 text-xs font-mono text-[#8C8C8C] space-y-1.5">
                    <p>• <strong>Free Shipping:</strong> Malaysia orders over RM200.</p>
                    <p>• <strong>Peninsular MY:</strong> 1-3 business days via PosLaju / J&T.</p>
                    <p>• <strong>East MY:</strong> 3-5 business days.</p>
                    <p>• <strong>Returns:</strong> 7-day hassle free exchange guarantee.</p>
                  </div>
                )}
              </div>

              {/* Care Instructions */}
              <div>
                <button
                  onClick={() => toggleAccordion("care")}
                  className="w-full py-4 flex items-center justify-between font-mono text-xs font-bold text-[#F2EFE8] uppercase"
                >
                  <span>CARE INSTRUCTIONS</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#C8FF00] transition-transform ${
                      activeAccordion === "care" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeAccordion === "care" && (
                  <div className="pb-4 text-xs font-mono text-[#8C8C8C] space-y-1.5">
                    <p>• Cold machine wash inside out.</p>
                    <p>• Do not iron directly over screenprint or batik graphics.</p>
                    <p>• Hang dry in shade to preserve color intensity.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Related Products Grid */}
        <div className="mt-20 pt-12 border-t border-[#292929]">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-display text-3xl sm:text-4xl text-[#F2EFE8] uppercase">
              YOU MAY ALSO LIKE
            </h2>
            <Link
              href="/shop"
              className="text-xs font-mono text-[#C8FF00] hover:underline flex items-center space-x-1"
            >
              <span>VIEW MORE</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {relatedProducts.map((rel) => (
              <ProductCard key={rel.id} product={rel} />
            ))}
          </div>
        </div>
      </main>

      {/* Sticky Add to Cart Bar for Mobile Devices */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 p-3 bg-[#080808]/95 backdrop-blur-md border-t border-[#292929] z-40 flex items-center justify-between gap-3">
        <div>
          <span className="font-display text-lg text-[#F2EFE8] block line-clamp-1">
            {product.name}
          </span>
          <span className="font-mono text-xs text-[#C8FF00] font-bold">RM{product.price}</span>
        </div>
        <button
          onClick={handleAddToCart}
          className="px-5 py-3 bg-[#C8FF00] text-[#080808] font-mono text-xs font-black tracking-wider uppercase rounded-sm flex items-center space-x-1.5 whitespace-nowrap shadow-xl"
        >
          <ShoppingBag className="w-4 h-4" />
          <span>ADD TO CART</span>
        </button>
      </div>

      {/* Size Guide Modal */}
      <SizeGuideModal isOpen={isSizeGuideOpen} onClose={() => setIsSizeGuideOpen(false)} />

      {/* Cart Drawer */}
      <CartDrawer />

      {/* Wishlist Drawer */}
      <WishlistDrawer />

      {/* Search Modal */}
      <SearchModal />

      <Footer />
    </div>
  );
}
