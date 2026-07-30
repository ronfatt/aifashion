"use client";

import React from "react";
import { SITE_CONFIG } from "@/data/config";

export const AnnouncementBar: React.FC = () => {
  return (
    <div className="w-full bg-[#111111] border-b border-[#292929] text-xs py-2 px-4 select-none z-50 relative">
      <div className="max-w-7xl mx-auto flex justify-center md:justify-between items-center text-[#8C8C8C] font-mono tracking-wider">
        {/* Desktop Left */}
        <div className="hidden md:flex items-center space-x-2">
          <span className="inline-block w-2 h-2 rounded-full bg-[#C8FF00] animate-pulse"></span>
          <span>{SITE_CONFIG.announcement.desktopLeft}</span>
        </div>

        {/* Center - Visible everywhere */}
        <div className="text-center font-semibold text-[#F2EFE8] flex items-center justify-center space-x-2">
          <span className="md:hidden inline-block w-1.5 h-1.5 rounded-full bg-[#C8FF00] animate-pulse"></span>
          <span className="hidden md:inline">{SITE_CONFIG.announcement.desktopCenter}</span>
          <span className="md:hidden text-[11px] tracking-wide text-[#C8FF00]">
            {SITE_CONFIG.announcement.mobileCenter}
          </span>
        </div>

        {/* Desktop Right */}
        <div className="hidden md:flex items-center space-x-4 text-[11px]">
          <a href="#footer" className="hover:text-[#C8FF00] transition-colors">
            {SITE_CONFIG.announcement.desktopRight}
          </a>
        </div>
      </div>
    </div>
  );
};
