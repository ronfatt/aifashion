"use client";

import React, { useRef } from "react";
import { MapPin, ArrowRight } from "lucide-react";
import { LOOKBOOK_ITEMS } from "@/data/lookbook";

export const Lookbook: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="lookbook" className="w-full py-20 bg-[#080808] border-b border-[#292929]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between">
          <div>
            <span className="text-xs font-mono tracking-widest text-[#C8FF00] uppercase block mb-1">
              // EDITORIAL LOOKBOOK 2026
            </span>
            <h2 className="font-display text-4xl sm:text-6xl text-[#F2EFE8] tracking-wider uppercase">
              WORN OUTSIDE. BORN HERE.
            </h2>
          </div>
          <p className="mt-2 sm:mt-0 font-mono text-xs text-[#8C8C8C] max-w-xs">
            Kopitiam midnight vibes, KL alleyway culture, and raw batik elements.
          </p>
        </div>
      </div>

      {/* Draggable / Swipeable Editorial Horizontal Scroll Gallery */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto no-scrollbar space-x-6 px-4 sm:px-6 lg:px-8 pb-8 cursor-grab active:cursor-grabbing select-none"
      >
        {LOOKBOOK_ITEMS.map((item, index) => (
          <div
            key={item.id}
            className="group relative flex-none w-[280px] sm:w-[380px] bg-[#111111] border border-[#292929] rounded-sm overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-[#292929]"
          >
            {/* Image Container */}
            <div className={`relative w-full ${item.aspectRatio} bg-[#080808] overflow-hidden`}>
              <div
                className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                style={{ backgroundImage: `url(${item.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-80" />

              {/* Number Badge Top Left */}
              <div className="absolute top-4 left-4 bg-[#080808]/80 backdrop-blur-md border border-[#292929] px-2.5 py-1 text-xs font-mono text-[#C8FF00] font-black rounded-xs">
                0{index + 1}
              </div>
            </div>

            {/* Content Bottom */}
            <div className="p-5 space-y-2">
              <div className="flex items-center space-x-1.5 text-xs font-mono text-[#C8FF00]">
                <MapPin className="w-3.5 h-3.5" />
                <span>{item.location}</span>
              </div>
              <h3 className="font-display text-2xl text-[#F2EFE8] uppercase leading-tight group-hover:text-[#C8FF00] transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-[#8C8C8C] font-mono leading-relaxed">{item.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
