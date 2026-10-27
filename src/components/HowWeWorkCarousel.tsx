"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, MessageSquare, Search, FileText, Plane } from "lucide-react";
import { HOW_WE_WORK_STEPS } from "@/data/company";
import { MOTION_CONFIG } from "@/config/motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const iconMap: Record<string, any> = {
  "01": MessageSquare,
  "02": Search,
  "03": FileText,
  "04": Plane,
};

export default function HowWeWorkCarousel() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const totalSteps = HOW_WE_WORK_STEPS.length;

  const updateScrollState = () => {
    if (!containerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);

    const cardWidth = scrollWidth / totalSteps;
    const newIdx = Math.min(
      totalSteps - 1,
      Math.max(0, Math.round(scrollLeft / cardWidth))
    );
    setActiveIndex(newIdx);
  };

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    el.addEventListener("scroll", updateScrollState, { passive: true });
    updateScrollState();
    return () => el.removeEventListener("scroll", updateScrollState);
  }, []);

  // GSAP Desktop Scroll-Driven Horizontal Scrub
  useGSAP(
    () => {
      if (typeof window === "undefined" || !wrapperRef.current || !containerRef.current) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        const track = containerRef.current;
        if (!track) return;

        const maxScroll = track.scrollWidth - track.clientWidth;
        if (maxScroll <= 10) return;

        const st = ScrollTrigger.create({
          trigger: wrapperRef.current,
          start: "top 22%",
          end: `+=${maxScroll * 1.2}px`,
          pin: true,
          scrub: 1.2,
          onUpdate: (self) => {
            track.scrollLeft = self.progress * maxScroll;
            const newIndex = Math.min(
              totalSteps - 1,
              Math.floor(self.progress * totalSteps)
            );
            setActiveIndex(newIndex);
          },
        });

        return () => st.kill();
      });

      return () => mm.revert();
    },
    { scope: wrapperRef }
  );

  const scrollToStep = (idx: number) => {
    if (!containerRef.current) return;
    const el = containerRef.current;
    const card = el.children[idx] as HTMLElement;
    if (card) {
      card.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
    }
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      scrollToStep(activeIndex - 1);
    }
  };

  const handleNext = () => {
    if (activeIndex < totalSteps - 1) {
      scrollToStep(activeIndex + 1);
    }
  };

  const progressPercent = ((activeIndex + 1) / totalSteps) * 100;

  return (
    <div ref={wrapperRef} className="space-y-6">
      {/* Top Carousel Navigation Bar */}
      <div className="flex items-center justify-between pb-2">
        {/* Progress tracker */}
        <div className="flex items-center gap-3">
          <span className="text-xs font-bold text-[#0C1A30]">
            Step 0{activeIndex + 1} of 0{totalSteps}
          </span>
          <div className="w-24 sm:w-36 h-1.5 bg-slate-200/80 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#0C1A30] rounded-full transition-all duration-300"
              style={{
                width: `${progressPercent}%`,
                transitionTimingFunction: MOTION_CONFIG.easeString,
              }}
            />
          </div>
        </div>

        {/* Carousel Working Arrows with Disabled State */}
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            disabled={!canScrollLeft}
            aria-label="Previous step"
            className={`w-9 h-9 rounded-full border transition-all duration-200 flex items-center justify-center cursor-pointer ${
              canScrollLeft
                ? "border-slate-300 text-slate-800 hover:border-[#0C1A30] hover:bg-slate-50"
                : "border-slate-200 text-slate-300 cursor-not-allowed opacity-50"
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button
            onClick={handleNext}
            disabled={!canScrollRight}
            aria-label="Next step"
            className={`w-9 h-9 rounded-full border transition-all duration-200 flex items-center justify-center cursor-pointer ${
              canScrollRight
                ? "bg-[#0C1A30] border-[#0C1A30] text-white hover:bg-[#162744] shadow-sm"
                : "bg-slate-100 border-slate-200 text-slate-300 cursor-not-allowed opacity-50"
            }`}
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Draggable/Swipeable Cards Track with Snap Points */}
      <div
        ref={containerRef}
        data-cursor="drag"
        className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-none cursor-grab active:cursor-grabbing select-none"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {HOW_WE_WORK_STEPS.map((step, idx) => {
          const IconComp = iconMap[step.step] || MessageSquare;
          return (
            <div
              key={step.step}
              className="snap-start shrink-0 w-[280px] sm:w-[310px] lg:w-[calc(25%-18px)] bg-white rounded-[26px] p-5 shadow-sm border border-slate-200/80 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Step Header */}
              <div className="space-y-3 mb-6">
                <div className="w-10 h-10 rounded-2xl bg-[#EEF4FA] text-[#0C1A30] flex items-center justify-center font-bold">
                  <IconComp className="w-5 h-5 text-[#0C1A30]" />
                </div>

                <div>
                  <span className="text-[11px] font-bold text-slate-400 block mb-0.5">
                    {step.step}
                  </span>
                  <h3 className="font-heading font-bold text-base text-[#0C1A30]">
                    {step.title}
                  </h3>
                </div>

                <p className="text-xs text-slate-500 leading-relaxed min-h-[44px]">
                  {step.desc}
                </p>
              </div>

              {/* Bottom Rounded Thumbnail with Hover Zoom */}
              <div
                style={{ position: "relative" }}
                className="relative w-full aspect-[4/2.7] rounded-[18px] overflow-hidden bg-slate-100 mt-auto"
              >
                <Image
                  src={step.image}
                  alt={step.imageAlt}
                  fill
                  sizes="(max-width: 640px) 280px, 320px"
                  className="object-cover group-hover:scale-108 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
