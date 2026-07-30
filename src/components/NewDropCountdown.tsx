"use client";

import React, { useState, useEffect } from "react";
import { Clock, CheckCircle2, Send } from "lucide-react";
import { SITE_CONFIG } from "@/data/config";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const NewDropCountdown: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Calculate remaining time until target date
  useEffect(() => {
    const target = new Date(SITE_CONFIG.nextDropDate).getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubmitted(true);
    }
  };

  return (
    <section id="new-drop" className="w-full py-20 bg-[#111111] border-b border-[#292929] relative overflow-hidden">
      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 bg-[radial-gradient(#292929_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header */}
        <div className="inline-flex items-center space-x-2 bg-[#080808] border border-[#292929] px-3.5 py-1.5 rounded-full mb-6">
          <Clock className="w-4 h-4 text-[#C8FF00] animate-pulse" />
          <span className="text-xs font-mono text-[#C8FF00] tracking-widest uppercase font-bold">
            LIMITED DROP COUNTDOWN
          </span>
        </div>

        <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl text-[#F2EFE8] tracking-tight uppercase leading-none mb-3">
          NEXT DROP
        </h2>

        <p className="font-mono text-sm sm:text-base text-[#8C8C8C] uppercase tracking-widest mb-12">
          MALAYSIA STREET SATIRE · VOL. 01
        </p>

        {/* Live Countdown Display Cards */}
        <div className="grid grid-cols-4 gap-2 sm:gap-6 max-w-2xl mx-auto mb-12">
          {[
            { label: "DAYS", value: timeLeft.days },
            { label: "HOURS", value: timeLeft.hours },
            { label: "MINUTES", value: timeLeft.minutes },
            { label: "SECONDS", value: timeLeft.seconds },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-[#080808] border border-[#292929] rounded-sm p-4 sm:p-6 shadow-xl flex flex-col items-center justify-center group hover:border-[#C8FF00] transition-colors"
            >
              <span className="font-display text-4xl sm:text-6xl text-[#C8FF00] tracking-wider leading-none">
                {String(item.value).padStart(2, "0")}
              </span>
              <span className="text-[10px] sm:text-xs font-mono text-[#8C8C8C] tracking-widest mt-2 uppercase">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Remind Me Form */}
        <div className="max-w-md mx-auto">
          {isSubmitted ? (
            <div className="p-4 bg-[#080808] border border-[#C8FF00] rounded-sm flex items-center justify-center space-x-3 text-[#C8FF00] font-mono text-sm font-bold tracking-widest uppercase animate-fade-in">
              <CheckCircle2 className="w-5 h-5 text-[#C8FF00]" />
              <span>YOU’RE ON THE LIST.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-stretch gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email for early access..."
                className="flex-grow bg-[#080808] border border-[#292929] px-4 py-3.5 text-sm font-mono text-[#F2EFE8] placeholder-[#8C8C8C] focus:outline-none focus:border-[#C8FF00] rounded-sm"
              />
              <button
                type="submit"
                className="px-6 py-3.5 bg-[#C8FF00] text-[#080808] font-mono font-black text-xs tracking-widest uppercase rounded-sm hover:bg-[#d4ff33] transition-colors flex items-center justify-center space-x-2 whitespace-nowrap"
              >
                <span>REMIND ME</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          )}
          <p className="text-[11px] font-mono text-[#8C8C8C] mt-3">
            Get early access pass 1 hour before public release. No spam, just drop notifications.
          </p>
        </div>
      </div>
    </section>
  );
};
