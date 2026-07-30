"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Send, Instagram, Facebook, ArrowUp } from "lucide-react";
import { FOOTER_NAV } from "@/data/navigation";
import { SITE_CONFIG } from "@/data/config";

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
      setNewsletterEmail("");
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="footer" className="w-full bg-[#080808] text-[#F2EFE8] border-t border-[#292929]">
      {/* Top Newsletter & Brand Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-[#292929]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <Link href="/" className="inline-block">
              <span className="font-display text-4xl tracking-wider text-[#F2EFE8]">
                LOKAL<span className="text-[#C8FF00]">//</span>LOUD
              </span>
            </Link>
            <p className="font-mono text-sm text-[#C8FF00] font-semibold tracking-wide">
              Pakai kuat. Hidup lagi kuat.
            </p>
            <p className="text-xs font-mono text-[#8C8C8C] max-w-md leading-relaxed">
              Malaysian street irony, printed loud. Combining local slang, batik heritage, and heavyweight oversized streetwear for those who wear attitude with pride.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href={SITE_CONFIG.social.instagram}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 bg-[#111111] border border-[#292929] rounded-sm text-[#F2EFE8] hover:text-[#C8FF00] hover:border-[#C8FF00] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={SITE_CONFIG.social.facebook}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 bg-[#111111] border border-[#292929] rounded-sm text-[#F2EFE8] hover:text-[#C8FF00] hover:border-[#C8FF00] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={SITE_CONFIG.social.tiktok}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 bg-[#111111] border border-[#292929] rounded-sm text-[#F2EFE8] hover:text-[#C8FF00] hover:border-[#C8FF00] transition-colors"
                aria-label="TikTok"
              >
                <span className="font-mono text-xs font-black">TT</span>
              </a>
            </div>
          </div>

          {/* Newsletter Box */}
          <div className="lg:col-span-7 bg-[#111111] border border-[#292929] p-6 sm:p-8 rounded-sm space-y-4">
            <span className="text-xs font-mono tracking-widest text-[#C8FF00] uppercase block">
              // JOIN THE LOKAL MOVEMENT
            </span>
            <h3 className="font-display text-2xl sm:text-3xl text-[#F2EFE8]">
              GET 10% OFF YOUR FIRST OVERSIZED ORDER
            </h3>
            <p className="text-xs font-mono text-[#8C8C8C]">
              Subscribe for exclusive drop access, secret discount codes, and street culture news.
            </p>

            {subscribed ? (
              <div className="p-3 bg-[#080808] border border-[#C8FF00] text-[#C8FF00] text-xs font-mono font-bold rounded-sm">
                SUCCESS! CHECK YOUR INBOX FOR YOUR 10% OFF CODE: [ LOKAL10 ]
              </div>
            ) : (
              <form onSubmit={handleNewsletter} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Your email address..."
                  className="flex-grow bg-[#080808] border border-[#292929] px-4 py-3 text-xs font-mono text-[#F2EFE8] placeholder-[#8C8C8C] focus:outline-none focus:border-[#C8FF00] rounded-sm"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#C8FF00] text-[#080808] font-mono text-xs font-black tracking-widest uppercase rounded-sm hover:bg-[#d4ff33] transition-colors flex items-center justify-center space-x-2"
                >
                  <span>JOIN NOW</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Navigation Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Shop */}
          <div>
            <h4 className="font-mono text-xs font-black text-[#C8FF00] tracking-widest uppercase mb-4">
              SHOP
            </h4>
            <ul className="space-y-2.5 text-xs font-mono text-[#8C8C8C]">
              {FOOTER_NAV.shop.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="hover:text-[#F2EFE8] transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="font-mono text-xs font-black text-[#C8FF00] tracking-widest uppercase mb-4">
              CUSTOMER CARE
            </h4>
            <ul className="space-y-2.5 text-xs font-mono text-[#8C8C8C]">
              {FOOTER_NAV.customerCare.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="hover:text-[#F2EFE8] transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="font-mono text-xs font-black text-[#C8FF00] tracking-widest uppercase mb-4">
              ABOUT
            </h4>
            <ul className="space-y-2.5 text-xs font-mono text-[#8C8C8C]">
              {FOOTER_NAV.about.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="hover:text-[#F2EFE8] transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-mono text-xs font-black text-[#C8FF00] tracking-widest uppercase mb-4">
              LEGAL
            </h4>
            <ul className="space-y-2.5 text-xs font-mono text-[#8C8C8C]">
              {FOOTER_NAV.legal.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="hover:text-[#F2EFE8] transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar & Payment Icons */}
      <div className="bg-[#111111] border-t border-[#292929] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-[#8C8C8C]">
          <div className="flex items-center space-x-3">
            <span>© 2026 LOKAL//LOUD STREETWEAR. ALL RIGHTS RESERVED.</span>
            <span className="inline-flex items-center space-x-1 bg-[#171717] px-2 py-0.5 border border-[#292929] text-[#C8FF00]">
              <span>🇲🇾</span>
              <span>DESIGNED IN MALAYSIA</span>
            </span>
          </div>

          {/* Payment Options */}
          <div className="flex items-center space-x-2 text-[10px] uppercase tracking-wider">
            <span className="px-2 py-1 bg-[#080808] border border-[#292929] rounded">FPX</span>
            <span className="px-2 py-1 bg-[#080808] border border-[#292929] rounded">VISA</span>
            <span className="px-2 py-1 bg-[#080808] border border-[#292929] rounded">MASTERCARD</span>
            <span className="px-2 py-1 bg-[#080808] border border-[#292929] rounded">TOUCH 'N GO</span>
            <span className="px-2 py-1 bg-[#080808] border border-[#292929] rounded">GRABPAY</span>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="p-2 bg-[#080808] border border-[#292929] text-[#F2EFE8] hover:text-[#C8FF00] hover:border-[#C8FF00] transition-colors rounded-sm flex items-center space-x-1"
          >
            <span>TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
