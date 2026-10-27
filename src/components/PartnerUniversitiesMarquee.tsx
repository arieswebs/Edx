"use client";

import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles, Plane, Globe, Star } from "lucide-react";
import {
  MARQUEE_CONFIG,
  ROW_1_UNIVERSITIES,
  ROW_2_UNIVERSITIES,
  ROW_3_UNIVERSITIES,
} from "@/data/partner-marquee";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const SEPARATOR_ICONS = [Sparkles, Globe, Plane, Star];

function RowSeparator({ index }: { index: number }) {
  const IconComponent = SEPARATOR_ICONS[index % SEPARATOR_ICONS.length];
  return (
    <span className="inline-flex items-center justify-center mx-4 sm:mx-6 text-[#F5B324] shrink-0">
      <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-[#F5B324]" />
    </span>
  );
}

export default function PartnerUniversitiesMarquee() {
  const containerRef = useRef<HTMLDivElement>(null);
  const row1TrackRef = useRef<HTMLDivElement>(null);
  const row2TrackRef = useRef<HTMLDivElement>(null);

  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [pausedRows, setPausedRows] = useState<Record<number, boolean>>({});

  useEffect(() => {
    setIsReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  // Marquee Motion Engine: Smooth Infinite Loops + Scroll Velocity Surge + Skew
  useEffect(() => {
    if (isReducedMotion) return;

    const track1 = row1TrackRef.current;
    const track2 = row2TrackRef.current;
    if (!track1 || !track2) return;

    let x1 = 0;
    let x2 = 0;

    let velocityFactor = 1;
    let scrollDirection = 1;
    let targetSkew = 0;
    let currentSkew = 0;

    const velocityTrigger = ScrollTrigger.create({
      onUpdate: (self) => {
        const vel = self.getVelocity();
        const absVel = Math.abs(vel);

        if (absVel > 40) {
          velocityFactor = Math.min(
            1 + (absVel / 700) * MARQUEE_CONFIG.velocity.maxMultiplier,
            MARQUEE_CONFIG.velocity.maxMultiplier * 1.8
          );
          scrollDirection = vel < -80 ? -1 : 1;
          const skewSign = vel > 0 ? 1 : -1;
          targetSkew = Math.min((absVel / 1200) * 4, 4) * skewSign;
        }
      },
    });

    let isVisible = true;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          isVisible = e.isIntersecting;
        });
      },
      { threshold: 0.05 }
    );
    if (containerRef.current) observer.observe(containerRef.current);

    let animationId: number;

    const updateLoop = () => {
      animationId = requestAnimationFrame(updateLoop);
      if (!isVisible) return;

      velocityFactor += (1 - velocityFactor) * MARQUEE_CONFIG.velocity.lerpDecay;
      targetSkew += (0 - targetSkew) * 0.08;
      currentSkew += (targetSkew - currentSkew) * 0.15;

      const skewTransform = Math.abs(currentSkew) > 0.05 ? `skewX(${currentSkew}deg)` : "";

      // Track 1: Moves Left
      if (!pausedRows[1]) {
        const speed1 = 1.1 * velocityFactor * scrollDirection;
        x1 -= speed1;
        const halfWidth1 = track1.scrollWidth / 2;
        if (halfWidth1 > 0) {
          if (x1 <= -halfWidth1) x1 += halfWidth1;
          if (x1 > 0) x1 -= halfWidth1;
        }
        track1.style.transform = `translate3d(${x1}px, 0, 0) ${skewTransform}`;
      }

      // Track 2: Moves Right
      if (!pausedRows[2]) {
        const speed2 = 0.9 * velocityFactor * scrollDirection;
        x2 += speed2;
        const halfWidth2 = track2.scrollWidth / 2;
        if (halfWidth2 > 0) {
          if (x2 >= 0) x2 -= halfWidth2;
          if (x2 < -halfWidth2) x2 += halfWidth2;
        }
        track2.style.transform = `translate3d(${x2}px, 0, 0) ${skewTransform}`;
      }
    };

    animationId = requestAnimationFrame(updateLoop);

    return () => {
      cancelAnimationFrame(animationId);
      velocityTrigger.kill();
      observer.disconnect();
    };
  }, [isReducedMotion, pausedRows]);

  const toggleRowPause = (rowNum: number) => {
    setPausedRows((prev) => ({ ...prev, [rowNum]: !prev[rowNum] }));
  };

  const row1Items = [...ROW_1_UNIVERSITIES, ...ROW_3_UNIVERSITIES.slice(0, 2)];
  const row2Items = [...ROW_2_UNIVERSITIES, ...ROW_3_UNIVERSITIES.slice(2)];
  const allUniversities = [...row1Items, ...row2Items];

  return (
    <div
      ref={containerRef}
      aria-label="Partner Universities Marquee"
      className="w-full mb-14 sm:mb-20 overflow-hidden"
    >
      {/* Screen Reader Visually Hidden List */}
      <div className="sr-only">
        <h2>Partner Universities Network</h2>
        <ul>
          {allUniversities.map((uni, idx) => (
            <li key={idx}>
              {uni.name} ({uni.city}, {uni.country})
            </li>
          ))}
        </ul>
      </div>

      {/* Full-Screen Edge-to-Edge Ribbon with Warm Golden Champagne Tint */}
      {isReducedMotion ? (
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="p-4 rounded-2xl bg-[#FFFDF7] border border-[#F5B324]/30">
            <div className="flex flex-wrap gap-2 justify-center">
              {allUniversities.map((uni) => (
                <span
                  key={uni.id}
                  className="px-3 py-1 rounded-full bg-white border border-amber-200 text-xs font-bold text-[#0C1A30]"
                >
                  {uni.flag} {uni.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="relative w-full py-4 sm:py-5 bg-gradient-to-r from-[#FFFDF7] via-[#FAF4E5] to-[#FFFBF0] border-y border-[#F5B324]/30 shadow-xs overflow-hidden select-none">
          {/* Subtle Ambient Warm Golden Blobs */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#F5B324]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#EAA412]/8 rounded-full blur-3xl pointer-events-none" />

          {/* Top Micro-Bar Aligned with Page Grid */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-3 pb-2.5 border-b border-[#F5B324]/20 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F5B324] animate-pulse shadow-xs shadow-[#F5B324]/50" />
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-[#0C1A30]">
                OUR PARTNER NETWORK · 150+ INSTITUTIONS
              </span>
              <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full bg-[#F5B324]/20 text-[#A06E05] text-[10px] font-bold tracking-wider uppercase">
                Global Accreditation
              </span>
            </div>

            <div className="hidden sm:flex items-center gap-1.5">
              <span className="font-script text-lg sm:text-xl text-[#A06E05] font-medium tracking-wide">
                Doors open worldwide
              </span>
              <Plane className="w-3.5 h-3.5 text-[#F5B324] -rotate-45" />
            </div>
          </div>

          {/* Left and Right Edge Gradient Masks */}
          <div className="marquee-edge-mask space-y-2 sm:space-y-3">
            {/* ROW 1: Moves Left */}
            <div
              onClick={() => toggleRowPause(1)}
              className="overflow-hidden py-0.5 cursor-pointer will-change-transform"
              title="Click to pause/resume row"
            >
              <div
                ref={row1TrackRef}
                className="flex items-center whitespace-nowrap will-change-transform"
              >
                {[...row1Items, ...row1Items].map((uni, idx) => {
                  const isOutline = uni.style === "outline";
                  return (
                    <span key={idx} className="inline-flex items-center shrink-0">
                      <span
                        className={`text-xl sm:text-2xl lg:text-[28px] font-heading font-black tracking-tight uppercase transition-colors duration-200 ${
                          isOutline ? "text-stroke-navy" : "text-[#0C1A30]"
                        }`}
                      >
                        {uni.name}
                      </span>
                      <RowSeparator index={idx} />
                    </span>
                  );
                })}
              </div>
            </div>

            {/* ROW 2: Moves Right */}
            <div
              onClick={() => toggleRowPause(2)}
              className="overflow-hidden py-0.5 cursor-pointer will-change-transform"
              title="Click to pause/resume row"
            >
              <div
                ref={row2TrackRef}
                className="flex items-center whitespace-nowrap will-change-transform"
              >
                {[...row2Items, ...row2Items].map((uni, idx) => {
                  const isOutline = uni.style === "outline";
                  return (
                    <span key={idx} className="inline-flex items-center shrink-0">
                      <span
                        className={`text-xl sm:text-2xl lg:text-[28px] font-heading font-black tracking-tight uppercase transition-colors duration-200 ${
                          isOutline ? "text-stroke-navy" : "text-[#0C1A30]"
                        }`}
                      >
                        {uni.name}
                      </span>
                      <RowSeparator index={idx + 1} />
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
