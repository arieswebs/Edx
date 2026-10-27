"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const PARTNERS = [
  { name: "University of Oxford", country: "UK", flag: "🇬🇧" },
  { name: "University of Toronto", country: "Canada", flag: "🇨🇦" },
  { name: "University of Melbourne", country: "Australia", flag: "🇦🇺" },
  { name: "TU Munich", country: "Germany", flag: "🇩🇪" },
  { name: "Imperial College London", country: "UK", flag: "🇬🇧" },
  { name: "Trinity College Dublin", country: "Ireland", flag: "🇮🇪" },
  { name: "University of British Columbia", country: "Canada", flag: "🇨🇦" },
  { name: "UNSW Sydney", country: "Australia", flag: "🇦🇺" },
  { name: "University of Leeds", country: "UK", flag: "🇬🇧" },
  { name: "RWTH Aachen University", country: "Germany", flag: "🇩🇪" },
];

export default function VelocityMarquee() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!trackRef.current) return;

    let x = 0;
    const speed = 0.8;
    let velocityMultiplier = 1;

    // Track scroll velocity via ScrollTrigger
    const scrollObserver = ScrollTrigger.create({
      onUpdate: (self) => {
        const vel = self.getVelocity();
        // If scrolling fast down, increase speed; if scrolling up, invert
        if (Math.abs(vel) > 100) {
          velocityMultiplier = 1 + Math.min(Math.abs(vel) / 500, 3.5);
        }
      },
    });

    let animationId: number;
    const animate = () => {
      // Decay velocity multiplier back toward 1
      velocityMultiplier += (1 - velocityMultiplier) * 0.05;

      x -= speed * velocityMultiplier;
      if (trackRef.current) {
        const totalWidth = trackRef.current.scrollWidth / 2;
        if (Math.abs(x) >= totalWidth) {
          x = 0;
        }
        trackRef.current.style.transform = `translate3d(${x}px, 0, 0)`;
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
      scrollObserver.kill();
    };
  }, []);

  return (
    <div
      ref={marqueeRef}
      className="w-full overflow-hidden py-6 border-y border-slate-100 bg-white/60 backdrop-blur-sm select-none"
    >
      <div className="max-w-7xl mx-auto px-4 mb-2">
        <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400">
          Recognized Across 150+ Global Universities
        </span>
      </div>

      <div ref={trackRef} className="flex gap-8 whitespace-nowrap will-change-transform">
        {[...PARTNERS, ...PARTNERS].map((item, idx) => (
          <div
            key={idx}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#FAFBFD] border border-slate-200/60 shadow-xs text-xs font-semibold text-[#0C1A30]"
          >
            <span className="text-base">{item.flag}</span>
            <span>{item.name}</span>
            <span className="text-[10px] text-slate-400 font-normal">({item.country})</span>
          </div>
        ))}
      </div>
    </div>
  );
}
