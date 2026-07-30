"use client";

import React from "react";
import { Instagram, Eye } from "lucide-react";

const SOCIAL_POSTS = [
  {
    id: "soc-1",
    handle: "@akmal_street",
    image: "/images/social/social-01.jpg",
    likes: "1.4k",
  },
  {
    id: "soc-2",
    handle: "@siti_loud",
    image: "/images/social/social-02.jpg",
    likes: "2.1k",
  },
  {
    id: "soc-3",
    handle: "@subang_crew",
    image: "/images/social/social-03.jpg",
    likes: "980",
  },
  {
    id: "soc-4",
    handle: "@danial_vibes",
    image: "/images/social/social-04.jpg",
    likes: "3.2k",
  },
];

export const SocialCommunity: React.FC = () => {
  return (
    <section className="w-full py-20 bg-[#080808] border-b border-[#292929]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <span className="text-xs font-mono tracking-widest text-[#C8FF00] uppercase block mb-1">
          // COMMUNITY FIT SHOWCASE
        </span>
        <h2 className="font-display text-4xl sm:text-6xl text-[#F2EFE8] tracking-wider uppercase">
          #LOKALLOUD
        </h2>
        <p className="text-sm font-mono text-[#8C8C8C] mt-2">
          Tag us on Instagram & TikTok to be featured. Wear it your way.
        </p>
      </div>

      {/* Grid of 4 posts */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        {SOCIAL_POSTS.map((post) => (
          <div
            key={post.id}
            className="group relative aspect-square bg-[#111111] border border-[#292929] rounded-sm overflow-hidden"
          >
            {/* Image */}
            <div
              className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
              style={{ backgroundImage: `url(${post.image})` }}
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-[#080808]/80 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center space-y-3">
              <Instagram className="w-8 h-8 text-[#C8FF00]" />
              <span className="font-mono text-sm font-bold text-[#F2EFE8]">{post.handle}</span>
              <span className="text-xs font-mono text-[#8C8C8C]">{post.likes} LIKES</span>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 bg-[#C8FF00] text-[#080808] font-mono text-xs font-black tracking-wider uppercase rounded-xs hover:bg-white transition-colors flex items-center space-x-1"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>VIEW POST</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
