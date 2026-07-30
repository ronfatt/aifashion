"use client";

import React, { useState } from "react";
import { X, ShoppingBag, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

interface QuickAddModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export const QuickAddModal: React.FC<QuickAddModalProps> = ({ product, isOpen, onClose }) => {
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  if (!product) return null;

  const handleAddToCart = () => {
    if (!selectedSize) {
      setErrorMessage("Sila pilih saiz / Please select a size before adding!");
      return;
    }
    const colorToUse = selectedColor || product.colors[0]?.name || "Default";
    addToCart(product, selectedSize, colorToUse, 1);
    setErrorMessage("");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
          />

          {/* Modal Container */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`Quick add ${product.name} to cart`}
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            className="fixed inset-x-4 top-1/2 -translate-y-1/2 max-w-md mx-auto bg-[#111111] border border-[#292929] rounded-md z-50 overflow-hidden shadow-2xl p-6"
          >
            {/* Header */}
            <div className="flex items-start justify-between pb-4 border-b border-[#292929]">
              <div>
                <span className="text-[10px] font-mono text-[#C8FF00] tracking-widest uppercase">
                  QUICK ADD TO CART
                </span>
                <h3 className="font-display text-2xl text-[#F2EFE8] leading-tight">
                  {product.name}
                </h3>
                <p className="text-sm font-bold font-mono text-[#C8FF00] mt-1">
                  RM{product.price}
                  {product.compareAtPrice && (
                    <span className="ml-2 text-xs text-[#8C8C8C] line-through font-normal">
                      RM{product.compareAtPrice}
                    </span>
                  )}
                </p>
              </div>
              <button
                onClick={onClose}
                className="min-w-[44px] min-h-[44px] flex items-center justify-center text-[#8C8C8C] hover:text-[#C8FF00] hover:bg-[#171717] rounded-full transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Error Toast / Alert */}
            {errorMessage && (
              <div className="mt-4 p-3 bg-red-900/40 border border-red-500/50 text-red-200 text-xs font-mono rounded flex items-center justify-between animate-shake">
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Size Selector */}
            <div className="my-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-[#8C8C8C] uppercase">
                  SELECT SIZE <span className="text-red-400">*</span>
                </span>
                <span className="text-[10px] font-mono text-[#C8FF00]">{product.fit}</span>
              </div>
              <div className="grid grid-cols-5 gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => {
                      setSelectedSize(size);
                      setErrorMessage("");
                    }}
                    className={`min-h-[44px] py-2.5 text-xs font-bold font-mono rounded-sm transition-all border ${
                      selectedSize === size
                        ? "bg-[#C8FF00] text-[#080808] border-[#C8FF00] shadow-[0_0_10px_rgba(200,255,0,0.3)]"
                        : "bg-[#171717] text-[#F2EFE8] border-[#292929] hover:border-[#C8FF00]"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selector */}
            {product.colors && product.colors.length > 0 && (
              <div className="mb-6">
                <span className="text-xs font-mono text-[#8C8C8C] uppercase block mb-2">
                  SELECT COLOR: {selectedColor || product.colors[0].name}
                </span>
                <div className="flex items-center space-x-3">
                  {product.colors.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => setSelectedColor(c.name)}
                      className={`w-9 h-9 rounded-full border-2 transition-transform flex items-center justify-center ${
                        (selectedColor || product.colors[0].name) === c.name
                          ? "border-[#C8FF00] scale-110"
                          : "border-transparent opacity-80 hover:opacity-100"
                      }`}
                      style={{ backgroundColor: c.hex }}
                      title={c.name}
                      aria-label={`Select color ${c.name}`}
                    >
                      {(selectedColor || product.colors[0].name) === c.name && (
                        <Check
                          className={`w-4 h-4 ${
                            c.value === "white" ? "text-black" : "text-white"
                          }`}
                        />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Add to Cart CTA */}
            <button
              onClick={handleAddToCart}
              className="w-full min-h-[48px] py-4 bg-[#C8FF00] text-[#080808] font-bold font-mono text-sm tracking-widest uppercase rounded-sm hover:bg-[#d4ff33] active:scale-98 transition-all flex items-center justify-center space-x-2 shadow-xl"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>CONFIRM & ADD TO CART</span>
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
