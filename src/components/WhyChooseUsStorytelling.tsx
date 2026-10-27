"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { Users, Building2, FileCheck2, Star, Plane } from "lucide-react";
import { MaskedHeading, BobbingBadge, SvgPlaneTrail } from "@/components/MotionReveal";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useWhyUsParallax } from "@/components/ParallaxLayers";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const FEATURES = [
  {
    id: 1,
    icon: Users,
    title: "Personalized Guidance",
    desc: "Tailored support based on your goals and profile.",
    highlight: "1-on-1 strategic mapping with senior education consultants.",
  },
  {
    id: 2,
    icon: Building2,
    title: "Trusted University Network",
    desc: "Partnerships with top-global institutions across 12 countries.",
    highlight: "Direct tier-1 liaison ensuring expedited application review.",
  },
  {
    id: 3,
    icon: FileCheck2,
    title: "End-to-End Support",
    desc: "From application to visa, accommodation, and pre-departure.",
    highlight: "Comprehensive paperwork drafting, SOP editing, and mock interviews.",
  },
  {
    id: 4,
    icon: Star,
    title: "Proven Success",
    desc: "Thousands of students placed worldwide with 98% visa rate.",
    highlight: "Over $1.2M in merit scholarships secured for 2025/2026 intakes.",
  },
];

export default function WhyChooseUsStorytelling() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  // Parallax between cathedral image and floating glass badge
  useWhyUsParallax(sectionRef);

  // Desktop Pinned Storytelling
  useGSAP(
    () => {
      if (typeof window === "undefined" || !sectionRef.current) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        const pinTrigger = ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top 12%",
          end: "+=130%",
          pin: true,
          scrub: 1.2,
          onUpdate: (self) => {
            const step = Math.min(3, Math.floor(self.progress * 4));
            setActiveStep(step);

            // Subtle image shift and scale as steps change
            const imgEl = document.querySelector(".storytelling-cathedral-img");
            if (imgEl) {
              gsap.to(imgEl, {
                scale: 1 + self.progress * 0.08,
                yPercent: -self.progress * 8,
                duration: 0.3,
                overwrite: "auto",
              });
            }
          },
        });

        return () => pinTrigger.kill();
      });

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section id="why-us" ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 sm:mb-32 pt-8">
      <div
        suppressHydrationWarning
        className="feature-card-bg rounded-[36px] sm:rounded-[44px] p-7 sm:p-12 lg:p-16 border border-white/90 shadow-sm relative overflow-hidden"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Visual: Cathedral & Cherry Blossoms with Parallax Layers */}
          <div className="lg:col-span-5 relative">
            <div
              style={{ position: "relative" }}
              className="relative w-full aspect-[4/5] rounded-[32px] sm:rounded-[38px] overflow-hidden shadow-xl border-4 border-white bg-slate-200 clip-reveal-active"
            >
              {/* Slower moving image creating depth behind container */}
              <div
                style={{ position: "absolute", top: "-10%", bottom: "-10%", left: 0, right: 0 }}
                className="why-us-parallax-image absolute inset-x-0 -top-[10%] -bottom-[10%] will-change-transform"
              >
                <Image
                  src="https://images.unsplash.com/photo-1525921429624-479b6a26d84d?auto=format&fit=crop&w=1000&q=80"
                  alt="Historic Gothic stone tower framed by blooming pink cherry blossoms"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="storytelling-cathedral-img object-cover transition-transform duration-700 ease-out"
                />
              </div>

              {/* Faster moving floating glass badge creating visible foreground depth */}
              <div className="why-us-floating-badge absolute top-6 right-6 z-20 will-change-transform">
                <BobbingBadge>
                  <div className="glass-panel-luxury px-4 py-2.5 rounded-2xl flex items-center gap-2.5 shadow-lg">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#6484AA] animate-pulse" />
                    <div className="text-left">
                      <p className="text-[11px] font-bold text-[#0C1A30] leading-tight">Education</p>
                      <p className="text-[10px] text-slate-500 font-medium">Beyond Borders</p>
                    </div>
                  </div>
                </BobbingBadge>
              </div>

              {/* Ambient bottom vignette for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C1A30]/30 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Right Column: Eyebrow, Heading, Plane script, and 4 Features */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between">
              <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#64748B]">
                WHY CHOOSE US
              </div>

              <div className="hidden sm:flex items-center gap-2">
                <span className="font-script text-2xl text-[#6484AA] font-medium">
                  Guiding you to a global future
                </span>
                <SvgPlaneTrail className="w-12 h-6 text-[#6484AA] inline-block" />
                <Plane className="w-4 h-4 text-[#6484AA] -rotate-45" />
              </div>
            </div>

            <div>
              <MaskedHeading
                text="More Than an Admission Partner"
                highlightWord="Admission Partner"
                highlightClass="text-gradient-sweep font-semibold"
                tag="h2"
                className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-[#0C1A30] tracking-tight leading-[1.12]"
              />
            </div>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We are committed to making your study abroad journey simple, transparent, and successful.
            </p>

            {/* 4 Feature Items Grid: Interactive highlight on desktop scrub, clean grid on mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
              {FEATURES.map((feat, idx) => {
                const IconComp = feat.icon;
                const isCurrent = activeStep === idx;

                return (
                  <div
                    key={feat.id}
                    className={`p-4 rounded-2xl transition-all duration-300 border flex items-start gap-4 ${
                      isCurrent
                        ? "bg-white border-[#6484AA]/40 shadow-md scale-[1.02] opacity-100"
                        : "bg-white/50 border-transparent opacity-85 hover:opacity-100 hover:bg-white/80"
                    }`}
                  >
                    <div
                      className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isCurrent
                          ? "bg-[#0C1A30] text-white shadow-sm"
                          : "bg-white shadow-xs border border-slate-200/60 text-[#0C1A30]"
                      }`}
                    >
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <h3
                        className={`font-heading font-bold text-sm sm:text-base mb-0.5 transition-colors ${
                          isCurrent ? "text-[#0C1A30]" : "text-[#0C1A30]/80"
                        }`}
                      >
                        {feat.title}
                      </h3>
                      <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed">
                        {feat.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
