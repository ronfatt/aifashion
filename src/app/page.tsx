"use client";

import React from "react";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ShopByCategory } from "@/components/ShopByCategory";
import { BestSellers } from "@/components/BestSellers";
import { StatementBanner } from "@/components/StatementBanner";
import { FeaturedCollections } from "@/components/FeaturedCollections";
import { NewDropCountdown } from "@/components/NewDropCountdown";
import { Lookbook } from "@/components/Lookbook";
import { BrandStory } from "@/components/BrandStory";
import { SocialCommunity } from "@/components/SocialCommunity";
import { ServiceBenefits } from "@/components/ServiceBenefits";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { WishlistDrawer } from "@/components/WishlistDrawer";
import { SearchModal } from "@/components/SearchModal";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#080808] text-[#F2EFE8] selection:bg-[#C8FF00] selection:text-[#080808]">
      {/* 1. Announcement Bar */}
      <AnnouncementBar />

      {/* 2. Main Navigation */}
      <Navbar />

      {/* 3. Hero Section */}
      <Hero />

      {/* 4. Shop by Category */}
      <ShopByCategory />

      {/* 5. Best Sellers */}
      <BestSellers />

      {/* 6. Statement Banner */}
      <StatementBanner />

      {/* 7. Featured Collections */}
      <FeaturedCollections />

      {/* 8. New Drop Countdown */}
      <NewDropCountdown />

      {/* 9. Lookbook */}
      <Lookbook />

      {/* 10. Brand Story */}
      <BrandStory />

      {/* 11. Social Community */}
      <SocialCommunity />

      {/* 12. Service Benefits */}
      <ServiceBenefits />

      {/* 13. Footer */}
      <Footer />

      {/* Slide-out Drawers & Overlays */}
      <CartDrawer />
      <WishlistDrawer />
      <SearchModal />
    </div>
  );
}
