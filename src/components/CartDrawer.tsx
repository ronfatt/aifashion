"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, Truck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    closeCart,
    removeFromCart,
    updateQuantity,
    subtotal,
    totalItems,
    amountToFreeShipping,
    hasFreeShipping,
    freeShippingProgress,
  } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50"
          />

          {/* Cart Panel Drawer (Right side) */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-full sm:w-[450px] bg-[#080808] border-l border-[#292929] z-50 flex flex-col justify-between shadow-2xl"
          >
            {/* Header */}
            <div className="p-6 border-b border-[#292929] flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <ShoppingBag className="w-5 h-5 text-[#C8FF00]" />
                <span className="font-display text-2xl tracking-wider text-[#F2EFE8]">YOUR CART</span>
                <span className="text-xs font-mono px-2 py-0.5 bg-[#171717] text-[#C8FF00] border border-[#292929] rounded-full">
                  {totalItems} ITEMS
                </span>
              </div>
              <button
                onClick={closeCart}
                className="p-2 text-[#8C8C8C] hover:text-[#C8FF00] hover:bg-[#171717] rounded-full transition-colors"
                aria-label="Close cart"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Free Shipping Meter Banner */}
            <div className="bg-[#111111] px-6 py-4 border-b border-[#292929]">
              <div className="flex items-center space-x-2 text-xs font-mono mb-2">
                <Truck className="w-4 h-4 text-[#C8FF00]" />
                {hasFreeShipping ? (
                  <span className="text-[#C8FF00] font-bold">
                    🎉 YOU UNLOCKED FREE MALAYSIA SHIPPING!
                  </span>
                ) : (
                  <span className="text-[#F2EFE8]">
                    Add <strong className="text-[#C8FF00]">RM{amountToFreeShipping}</strong> more for FREE shipping!
                  </span>
                )}
              </div>
              {/* Progress Bar */}
              <div className="w-full h-2 bg-[#171717] rounded-full overflow-hidden border border-[#292929]">
                <div
                  className="h-full bg-[#C8FF00] transition-all duration-500 rounded-full"
                  style={{ width: `${freeShippingProgress}%` }}
                />
              </div>
            </div>

            {/* Cart Items List */}
            <div className="flex-grow overflow-y-auto p-6 space-y-4">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                  <div className="p-4 bg-[#111111] border border-[#292929] rounded-full">
                    <ShoppingBag className="w-10 h-10 text-[#8C8C8C]" />
                  </div>
                  <h3 className="font-display text-2xl text-[#F2EFE8]">YOUR CART IS EMPTY</h3>
                  <p className="text-xs font-mono text-[#8C8C8C] max-w-xs">
                    Looks like you haven't added any Malaysian street satire drip yet.
                  </p>
                  <button
                    onClick={closeCart}
                    className="px-6 py-3 bg-[#C8FF00] text-[#080808] font-mono text-xs font-black tracking-widest uppercase rounded-sm hover:bg-[#d4ff33] transition-colors"
                  >
                    START SHOPPING
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex space-x-4 p-3 bg-[#111111] border border-[#292929] rounded-sm relative group"
                  >
                    {/* Thumbnail */}
                    <div className="w-20 h-24 bg-[#080808] border border-[#292929] rounded-sm overflow-hidden flex-shrink-0 relative">
                      <div
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url(${item.product.images.front})` }}
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-grow flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start">
                          <h4 className="font-display text-lg text-[#F2EFE8] leading-tight line-clamp-1">
                            {item.product.name}
                          </h4>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="p-1 text-[#8C8C8C] hover:text-red-400 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <div className="flex items-center space-x-2 text-[11px] font-mono text-[#8C8C8C] mt-1">
                          <span className="px-1.5 py-0.5 bg-[#171717] border border-[#292929] rounded text-[#C8FF00]">
                            SIZE: {item.selectedSize}
                          </span>
                          <span className="truncate">{item.selectedColor}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#292929]/50">
                        {/* Quantity controls */}
                        <div className="flex items-center space-x-2 bg-[#080808] border border-[#292929] rounded-sm px-2 py-1">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="text-[#8C8C8C] hover:text-[#C8FF00]"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="font-mono text-xs text-[#F2EFE8] font-bold px-1">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="text-[#8C8C8C] hover:text-[#C8FF00]"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        {/* Total Price for item */}
                        <span className="font-mono text-sm font-extrabold text-[#C8FF00]">
                          RM{item.product.price * item.quantity}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer Summary & Checkout Button */}
            {cart.length > 0 && (
              <div className="p-6 bg-[#111111] border-t border-[#292929] space-y-4">
                <div className="space-y-1.5 text-xs font-mono text-[#8C8C8C]">
                  <div className="flex justify-between">
                    <span>SUBTOTAL</span>
                    <span className="text-[#F2EFE8] font-bold">RM{subtotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>ESTIMATED SHIPPING</span>
                    <span className="text-[#C8FF00]">
                      {hasFreeShipping ? "FREE" : "RM 10 (Peninsular) / RM 15 (East MY)"}
                    </span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-[#292929] text-sm text-[#F2EFE8] font-bold">
                    <span>TOTAL</span>
                    <span className="text-[#C8FF00]">
                      RM{hasFreeShipping ? subtotal : subtotal + 10}
                    </span>
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <button
                    onClick={() => {
                      alert("Order Processing Demo: Redirecting to Secure FPX Payment Gateway!");
                      closeCart();
                    }}
                    className="w-full py-4 bg-[#C8FF00] text-[#080808] font-mono text-sm font-black tracking-widest uppercase rounded-sm hover:bg-[#d4ff33] transition-all flex items-center justify-center space-x-2 shadow-xl"
                  >
                    <span>CHECKOUT NOW</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={closeCart}
                    className="w-full py-2.5 bg-[#080808] border border-[#292929] text-[#8C8C8C] font-mono text-xs hover:text-[#F2EFE8] transition-colors rounded-sm text-center"
                  >
                    CONTINUE SHOPPING
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
