"use client";

import React from "react";
import { X, Ruler } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface SizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SizeGuideModal: React.FC<SizeGuideModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
          />

          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="fixed inset-x-4 top-1/2 -translate-y-1/2 max-w-2xl mx-auto bg-[#111111] border border-[#292929] rounded-md z-50 overflow-hidden shadow-2xl p-6 sm:p-8"
          >
            <div className="flex items-center justify-between pb-4 border-b border-[#292929]">
              <div className="flex items-center space-x-2">
                <Ruler className="w-5 h-5 text-[#C8FF00]" />
                <h3 className="font-display text-2xl text-[#F2EFE8]">OVERSIZED FIT SIZE GUIDE</h3>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 text-[#8C8C8C] hover:text-[#C8FF00] hover:bg-[#171717] rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs font-mono text-[#8C8C8C] my-4 leading-relaxed">
              All LOKAL//LOUD apparel is cut with our signature drop-shoulder relaxed boxy fit. If you prefer a true-to-size standard fit, choose one size down.
            </p>

            {/* Table */}
            <div className="overflow-x-auto my-6 border border-[#292929] rounded-sm">
              <table className="w-full text-left font-mono text-xs text-[#F2EFE8]">
                <thead className="bg-[#080808] border-b border-[#292929] text-[#C8FF00]">
                  <tr>
                    <th className="p-3">SIZE</th>
                    <th className="p-3">CHEST (CM)</th>
                    <th className="p-3">LENGTH (CM)</th>
                    <th className="p-3">SHOULDER (CM)</th>
                    <th className="p-3">RECOMMENDED HEIGHT</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#292929]">
                  <tr>
                    <td className="p-3 font-bold">S</td>
                    <td className="p-3">108 cm</td>
                    <td className="p-3">72 cm</td>
                    <td className="p-3">54 cm</td>
                    <td className="p-3 text-[#8C8C8C]">160 - 170 cm</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">M</td>
                    <td className="p-3">114 cm</td>
                    <td className="p-3">74 cm</td>
                    <td className="p-3">57 cm</td>
                    <td className="p-3 text-[#8C8C8C]">170 - 178 cm</td>
                  </tr>
                  <tr className="bg-[#171717]/50">
                    <td className="p-3 font-bold text-[#C8FF00]">L (POPULAR)</td>
                    <td className="p-3 font-bold">120 cm</td>
                    <td className="p-3 font-bold">76 cm</td>
                    <td className="p-3 font-bold">60 cm</td>
                    <td className="p-3 text-[#8C8C8C]">178 - 184 cm</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">XL</td>
                    <td className="p-3">126 cm</td>
                    <td className="p-3">78 cm</td>
                    <td className="p-3">63 cm</td>
                    <td className="p-3 text-[#8C8C8C]">184 - 190 cm</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">XXL</td>
                    <td className="p-3">132 cm</td>
                    <td className="p-3">80 cm</td>
                    <td className="p-3">66 cm</td>
                    <td className="p-3 text-[#8C8C8C]">190+ cm</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <button
              onClick={onClose}
              className="w-full py-3 bg-[#080808] border border-[#292929] text-[#F2EFE8] font-mono text-xs hover:border-[#C8FF00] hover:text-[#C8FF00] transition-colors rounded-sm"
            >
              GOT IT, CLOSE SIZE GUIDE
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
