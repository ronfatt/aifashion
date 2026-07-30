"use client";

import React from "react";
import { Check, ShieldCheck, Sparkles, Flame, Scissors } from "lucide-react";
import { SITE_CONFIG } from "@/data/config";

export const BrandStory: React.FC = () => {
  return (
    <section id="about" className="w-full py-20 bg-[#111111] border-b border-[#292929] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Text & Values */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-mono tracking-widest text-[#C8FF00] uppercase block">
              // OUR BRAND PHILOSOPHY
            </span>

            <h2 className="font-display text-4xl sm:text-6xl text-[#F2EFE8] tracking-tight uppercase leading-none">
              {SITE_CONFIG.storyTitle}
            </h2>

            <p className="text-base sm:text-xl font-mono text-[#F2EFE8]/90 leading-relaxed">
              {SITE_CONFIG.storyText}
            </p>

            <p className="text-xs sm:text-sm text-[#8C8C8C] leading-relaxed">
              Founded in Kuala Lumpur, we reject generic minimalist copycats and bland template fashion. We embrace the chaotic, ironic, loud Malaysian street culture—converting raw kopitiam banter, viral slang, and intricate Terengganu batik into heavyweight 260 GSM drop-shoulder uniforms.
            </p>

            {/* 4 Feature Badges */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-[#292929]">
              {[
                { title: "MADE IN MALAYSIA", sub: "Designed & printed locally" },
                { title: "LIMITED RUN", sub: "Max 100 pieces per drop" },
                { title: "ORIGINAL ARTWORK", sub: "Batik reworked motifs" },
                { title: "PREMIUM HEAVY COTTON", sub: "240 - 260 GSM drop shoulder" },
              ].map((badge) => (
                <div
                  key={badge.title}
                  className="bg-[#080808] border border-[#292929] p-4 rounded-sm hover:border-[#C8FF00] transition-colors"
                >
                  <div className="flex items-center space-x-2 text-[#C8FF00] mb-1">
                    <Check className="w-4 h-4" />
                    <span className="font-mono text-xs font-black tracking-wider uppercase">
                      {badge.title}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-[#8C8C8C] block">{badge.sub}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Process Cards */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-[#080808] border border-[#292929] rounded-sm p-4 text-center space-y-2 group hover:border-[#C8FF00] transition-colors">
                <div className="h-32 bg-[#171717] rounded-sm flex items-center justify-center border border-[#292929] overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                    style={{ backgroundImage: `url(/images/products/sembang-kencang-detail.jpg)` }}
                  />
                </div>
                <span className="text-[11px] font-mono text-[#C8FF00] block uppercase font-bold">
                  01 // BATIK ARTWORK
                </span>
              </div>

              <div className="bg-[#080808] border border-[#292929] rounded-sm p-4 text-center space-y-2 group hover:border-[#C8FF00] transition-colors">
                <div className="h-32 bg-[#171717] rounded-sm flex items-center justify-center border border-[#292929] overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                    style={{ backgroundImage: `url(/images/products/terpaling-on-detail.jpg)` }}
                  />
                </div>
                <span className="text-[11px] font-mono text-[#C8FF00] block uppercase font-bold">
                  02 // SILKSCREEN PRINT
                </span>
              </div>
            </div>

            <div className="space-y-4 pt-6">
              <div className="bg-[#080808] border border-[#292929] rounded-sm p-4 text-center space-y-2 group hover:border-[#C8FF00] transition-colors">
                <div className="h-32 bg-[#171717] rounded-sm flex items-center justify-center border border-[#292929] overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                    style={{ backgroundImage: `url(/images/products/acah-padu-detail.jpg)` }}
                  />
                </div>
                <span className="text-[11px] font-mono text-[#C8FF00] block uppercase font-bold">
                  03 // HEAVY FABRIC
                </span>
              </div>

              <div className="bg-[#080808] border border-[#292929] rounded-sm p-4 text-center space-y-2 group hover:border-[#C8FF00] transition-colors">
                <div className="h-32 bg-[#171717] rounded-sm flex items-center justify-center border border-[#292929] overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                    style={{ backgroundImage: `url(/images/products/cap-detail.jpg)` }}
                  />
                </div>
                <span className="text-[11px] font-mono text-[#C8FF00] block uppercase font-bold">
                  04 // CUSTOM TAGS
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
