"use client";

import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [cursorLabel, setCursorLabel] = useState<string>("");
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    // Only enable on desktop pointer devices
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isTouch || prefersReducedMotion) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // Fast GSAP quickTo for 60fps tracking
    const xToDot = gsap.quickTo(dot, "x", { duration: 0.1, ease: "power3.out" });
    const yToDot = gsap.quickTo(dot, "y", { duration: 0.1, ease: "power3.out" });

    const xToRing = gsap.quickTo(ring, "x", { duration: 0.35, ease: "power2.out" });
    const yToRing = gsap.quickTo(ring, "y", { duration: 0.35, ease: "power2.out" });

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);

      xToDot(e.clientX);
      yToDot(e.clientY);

      xToRing(e.clientX);
      yToRing(e.clientY);

      // Check hovered element for cursor modes
      const target = e.target as HTMLElement;
      const viewEl = target.closest("[data-cursor='view']");
      const dragEl = target.closest("[data-cursor='drag']");

      if (viewEl) {
        setIsHovered(true);
        setCursorLabel("View");
      } else if (dragEl) {
        setIsHovered(true);
        setCursorLabel("Drag");
      } else {
        setIsHovered(false);
        setCursorLabel("");
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden hidden md:block">
      {/* Central Cursor Dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 w-2 h-2 -ml-1 -mt-1 rounded-full bg-[#0C1A30] transition-opacity duration-200 ${
          isHovered ? "opacity-0" : "opacity-90"
        }`}
      />

      {/* Trailing Ring with Expand & Label */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 rounded-full flex items-center justify-center transition-all duration-300 ease-out border ${
          isHovered
            ? "w-14 h-14 -ml-7 -mt-7 bg-[#0C1A30]/90 border-transparent text-white text-[11px] font-bold shadow-xl backdrop-blur-sm"
            : "w-8 h-8 -ml-4 -mt-4 bg-transparent border-slate-400/60"
        }`}
      >
        {isHovered && <span className="select-none">{cursorLabel}</span>}
      </div>
    </div>
  );
}
