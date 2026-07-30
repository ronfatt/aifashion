"use client";

import React from "react";
import Link from "next/link";
import { SITE_CONFIG } from "@/data/config";

export const StatementBanner: React.FC = () => {
  return (
    <section className="w-full relative bg-[#080808] border-b border-[#292929] overflow-hidden">
      {/* Infinite Moving Marquee Ribbon Top */}
      <div className="w-full bg-[#C8FF00] py-3 overflow-hidden select-none">
        <div className="flex w-[200%] animate-marquee">
          <div className="flex space-x-8 text-[#080808] font-mono text-sm font-black tracking-widest uppercase whitespace-nowrap">
            {SITE_CONFIG.marqueeItems.concat(SITE_CONFIG.marqueeItems).map((item, idx) => (
              <span key={idx} className="flex items-center space-x-6">
                <span>{item}</span>
                <span>—</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main Banner Visual */}
      <div className="relative min-h-[450px] lg:min-h-[550px] flex items-center justify-center p-8 lg:p-16">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center filter brightness-[0.4]"
          style={{ backgroundImage: `url(/images/hero/hero-02.jpg)` }}
        />

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-[#080808]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/90 via-[#080808]/60 to-[#080808]/90" />

        {/* Content Box */}
        <div className="relative z-10 max-w-4xl text-center space-y-6">
          <span className="text-xs font-mono tracking-widest text-[#C8FF00] uppercase px-3 py-1 bg-[#111111]/80 border border-[#292929] rounded-sm inline-block">
            MALAYSIAN STREET IRONY // PRINTED LOUD
          </span>

          <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl tracking-tight text-[#F2EFE8] leading-tight uppercase">
            {SITE_CONFIG.statementTitle}
          </h2>

          <p className="text-base sm:text-xl font-mono text-[#8C8C8C] max-w-xl mx-auto">
            {SITE_CONFIG.statementSub}
          </p>

          <div className="pt-4">
            <Link
              href="#best-sellers"
              className="inline-flex items-center justify-center px-10 py-4 bg-[#F2EFE8] text-[#080808] font-mono font-bold text-sm tracking-widest uppercase rounded-sm hover:bg-[#C8FF00] transition-colors shadow-2xl"
            >
              EXPLORE COLLECTION
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
