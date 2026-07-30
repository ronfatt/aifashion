"use client";

import React from "react";
import { Truck, RotateCcw, ShieldCheck, MapPin } from "lucide-react";

export const ServiceBenefits: React.FC = () => {
  const BENEFITS = [
    {
      icon: Truck,
      title: "FREE SHIPPING",
      subtitle: "Malaysia orders over RM200",
    },
    {
      icon: RotateCcw,
      title: "EASY RETURNS",
      subtitle: "Return within 7 days",
    },
    {
      icon: ShieldCheck,
      title: "SECURE PAYMENT",
      subtitle: "FPX, cards and e-wallets",
    },
    {
      icon: MapPin,
      title: "LOCAL SUPPORT",
      subtitle: "Based in Malaysia",
    },
  ];

  return (
    <section className="w-full py-12 bg-[#111111] border-b border-[#292929]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {BENEFITS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex items-center space-x-4 p-4 bg-[#080808] border border-[#292929] rounded-sm hover:border-[#C8FF00] transition-colors"
              >
                <div className="p-3 bg-[#171717] text-[#C8FF00] rounded-sm border border-[#292929]">
                  <Icon className="w-6 h-6 stroke-[1.5]" />
                </div>
                <div>
                  <h4 className="font-mono text-xs font-black text-[#F2EFE8] tracking-widest uppercase">
                    {item.title}
                  </h4>
                  <p className="text-[11px] font-mono text-[#8C8C8C] mt-0.5">{item.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
