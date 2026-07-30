"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const HERO_SLIDES = [
  {
    id: 1,
    image: "/images/hero/hero-01.jpg",
    titleLine1: "BE LOUD.",
    titleLine2: "BE LOKAL.",
    subtitle: "Pakai attitude. Bukan sekadar baju.",
    chinese: "穿的不只是衣服，是我们的态度。",
    badge: "VOL. 01 STREET SATIRE",
  },
  {
    id: 2,
    image: "/images/hero/hero-02.jpg",
    titleLine1: "BATIK",
    titleLine2: "REWORKED.",
    subtitle: "Warisan lama. Attitude baru.",
    chinese: "继承传统，炸裂街头。",
    badge: "BATIK AFTER DARK",
  },
  {
    id: 3,
    image: "/images/hero/hero-03.jpg",
    titleLine1: "LEPAK",
    titleLine2: "EVERYWHERE.",
    subtitle: "No agenda. Just Malaysian vibes.",
    chinese: "不按常理出牌，街头就是主场。",
    badge: "LEPAK CLUB UNIFORM",
  },
];

export const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Mouse move parallax for desktop
  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const offsetX = (clientX / windowWidth - 0.5) * 12;
    const offsetY = (clientY / windowHeight - 0.5) * 12;
    setMousePos({ x: offsetX, y: offsetY });
  };

  // Auto slide timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const slide = HERO_SLIDES[currentSlide];

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative w-full min-h-[85vh] lg:h-[calc(100vh-80px)] bg-[#080808] flex items-center overflow-hidden select-none border-b border-[#292929]"
    >
      {/* Background Image Carousel with Slow Zoom and Subtle Parallax */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{
            opacity: 1,
            scale: 1,
            x: mousePos.x,
            y: mousePos.y,
          }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{
            opacity: { duration: 0.8 },
            scale: { duration: 8, ease: "linear" },
            x: { duration: 0.2, ease: "easeOut" },
            y: { duration: 0.2, ease: "easeOut" },
          }}
          className="absolute inset-0 z-0"
        >
          {/* Background Image */}
          <div
            className="w-full h-full bg-cover bg-right md:bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
            role="img"
            aria-label={`Hero banner ${slide.titleLine1} ${slide.titleLine2}`}
          />

          {/* Dark Overlay Gradients */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/85 to-transparent w-full md:w-[65%]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-[#080808]/50" />
        </motion.div>
      </AnimatePresence>

      {/* Hero Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-0">
        <div className="max-w-2xl">
          {/* Series Badge */}
          <motion.div
            key={`badge-${currentSlide}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center space-x-2 bg-[#171717]/90 backdrop-blur-md border border-[#292929] px-3 py-1.5 rounded-sm mb-4 sm:mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#C8FF00] animate-ping" />
            <span className="text-xs font-mono tracking-widest text-[#C8FF00] uppercase font-bold">
              {slide.badge}
            </span>
          </motion.div>

          {/* Main Title - Responsive line-by-line reveal */}
          <div className="overflow-hidden mb-1">
            <motion.h1
              key={`line1-${currentSlide}`}
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-5xl sm:text-7xl lg:text-9xl tracking-tight text-[#F2EFE8] leading-none uppercase"
            >
              {slide.titleLine1}
            </motion.h1>
          </div>

          <div className="overflow-hidden mb-4 sm:mb-6">
            <motion.h1
              key={`line2-${currentSlide}`}
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-5xl sm:text-7xl lg:text-9xl tracking-tight text-[#C8FF00] leading-none uppercase"
            >
              {slide.titleLine2}
            </motion.h1>
          </div>

          {/* Subtitle & Chinese text */}
          <motion.div
            key={`sub-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="space-y-1.5 mb-8"
          >
            <p className="text-base sm:text-2xl font-medium text-[#F2EFE8] tracking-wide leading-snug">
              {slide.subtitle}
            </p>
            <p className="text-xs sm:text-sm font-mono text-[#8C8C8C] tracking-widest">
              {slide.chinese}
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            key={`btn-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4"
          >
            {/* Primary CTA */}
            <Link
              href="#best-sellers"
              className="min-h-[48px] px-8 py-4 bg-[#C8FF00] text-[#080808] font-bold font-mono tracking-widest text-sm uppercase rounded-sm hover:bg-[#d4ff33] active:scale-98 transition-all flex items-center justify-center space-x-3 group shadow-2xl"
            >
              <span>SHOP NEW DROP</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            {/* Secondary CTA */}
            <Link
              href="#lookbook"
              className="min-h-[48px] px-8 py-4 bg-[#111111]/90 backdrop-blur-md border border-[#292929] text-[#F2EFE8] font-bold font-mono tracking-widest text-sm uppercase rounded-sm hover:border-[#C8FF00] hover:text-[#C8FF00] transition-colors flex items-center justify-center"
            >
              VIEW LOOKBOOK
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Carousel Controls & Counter (Bottom Right) */}
      <div className="absolute bottom-6 right-4 sm:right-6 lg:right-12 z-20 flex items-center space-x-4 sm:space-x-6">
        {/* Counter */}
        <div className="flex items-center space-x-2 font-mono text-xs text-[#8C8C8C]">
          <span className="text-sm font-bold text-[#C8FF00]">0{currentSlide + 1}</span>
          <span>/</span>
          <span>0{HERO_SLIDES.length}</span>
        </div>

        {/* Progress Line */}
        <div className="w-16 sm:w-32 h-[2px] bg-[#292929] relative overflow-hidden rounded-full">
          <motion.div
            key={currentSlide}
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 7, ease: "linear" }}
            className="h-full bg-[#C8FF00]"
          />
        </div>

        {/* Carousel Buttons */}
        <div className="flex items-center space-x-2">
          <button
            onClick={() =>
              setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1))
            }
            className="min-w-[40px] min-h-[40px] flex items-center justify-center bg-[#111111]/80 border border-[#292929] text-[#F2EFE8] hover:border-[#C8FF00] hover:text-[#C8FF00] transition-colors rounded-sm"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)}
            className="min-w-[40px] min-h-[40px] flex items-center justify-center bg-[#111111]/80 border border-[#292929] text-[#F2EFE8] hover:border-[#C8FF00] hover:text-[#C8FF00] transition-colors rounded-sm"
            aria-label="Next slide"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Scroll Down Hint (Bottom Left - Desktop) */}
      <div className="hidden lg:flex absolute bottom-6 left-12 z-20 items-center space-x-3 text-xs font-mono text-[#8C8C8C]">
        <div className="w-5 h-8 border border-[#292929] rounded-full flex justify-center pt-1">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-[#C8FF00] rounded-full"
          />
        </div>
        <span className="tracking-widest">SCROLL TO EXPLORE</span>
      </div>
    </section>
  );
};
