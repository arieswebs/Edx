"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { GSAP_CONFIG } from "@/config/gsap-config";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * 1. Hero Multi-Layer Parallax + Mouse Shift + Stacked-Cards Transition
 */
export function useHeroInteractive(containerRef: React.RefObject<HTMLDivElement | null>) {
  useGSAP(
    () => {
      if (typeof window === "undefined" || !containerRef.current) return;
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) return;

      const container = containerRef.current;

      const mm = gsap.matchMedia();

      // ==========================================
      // DESKTOP: Full Scroll Parallax + Stacked Cards
      // ==========================================
      mm.add("(min-width: 1024px)", () => {
        // Multi-Layer Scroll Parallax
        const parallaxTl = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            start: "top top",
            end: "bottom top",
            scrub: 1.2,
          },
        });

        // Layer 1: Ambient background glow (slowest)
        parallaxTl.to(
          ".hero-bg-ambient",
          {
            y: GSAP_CONFIG.parallax.heroBgGradient,
            ease: "none",
          },
          0
        );

        // Layer 1b: Drifting horizontal text "GLOBAL"
        parallaxTl.to(
          ".hero-faint-text",
          {
            x: GSAP_CONFIG.parallax.heroFaintTextDrift,
            ease: "none",
          },
          0
        );

        // Layer 2: Hero arched image mask (moves medium speed + scales down 1.08 -> 1)
        parallaxTl.fromTo(
          ".hero-parallax-image",
          {
            scale: GSAP_CONFIG.parallax.heroMaskScaleStart,
            y: 0,
          },
          {
            scale: 1,
            y: -40,
            ease: "none",
          },
          0
        );

        // Layer 3: Floating decorative badges & script (faster opposite direction)
        parallaxTl.to(
          ".hero-floating-badge",
          {
            y: GSAP_CONFIG.parallax.heroFloatingShapes,
            ease: "none",
          },
          0
        );

        // Layer 4: Foreground text slight upward lift
        parallaxTl.to(
          ".hero-foreground-text",
          {
            y: GSAP_CONFIG.parallax.heroForegroundText,
            ease: "none",
          },
          0
        );

        // STACKED-CARDS TRANSITION: Hero card scales down and rounds as Destinations approaches
        gsap.to(".hero-card-surface", {
          scrollTrigger: {
            trigger: container,
            start: "bottom 90%",
            end: "bottom 20%",
            scrub: 1,
          },
          scale: 0.96,
          borderRadius: "56px",
          opacity: 0.94,
          ease: "power2.inOut",
        });

        // Mouse Parallax for Hero Elements using quickTo
        const imgX = gsap.quickTo(".hero-parallax-image", "x", { duration: 0.6, ease: "power2.out" });
        const imgY = gsap.quickTo(".hero-parallax-image", "y", { duration: 0.6, ease: "power2.out" });

        const badgeX = gsap.quickTo(".hero-floating-badge", "x", { duration: 0.8, ease: "power2.out" });
        const badgeY = gsap.quickTo(".hero-floating-badge", "y", { duration: 0.8, ease: "power2.out" });

        const handleMouseMove = (e: MouseEvent) => {
          const rect = container.getBoundingClientRect();
          if (
            e.clientY < rect.top ||
            e.clientY > rect.bottom ||
            e.clientX < rect.left ||
            e.clientX > rect.right
          ) {
            return;
          }

          const normX = (e.clientX - rect.left) / rect.width - 0.5;
          const normY = (e.clientY - rect.top) / rect.height - 0.5;

          // Image moves slightly opposite to cursor
          imgX(-normX * 14);
          imgY(-normY * 10);

          // Badge floats opposite direction with more travel
          badgeX(normX * 22);
          badgeY(normY * 16);
        };

        window.addEventListener("mousemove", handleMouseMove, { passive: true });

        return () => {
          window.removeEventListener("mousemove", handleMouseMove);
        };
      });

      // ==========================================
      // MOBILE: Lightweight Scrub
      // ==========================================
      mm.add("(max-width: 1023px)", () => {
        gsap.to(".hero-parallax-image", {
          scrollTrigger: {
            trigger: container,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
          scale: 1,
          ease: "none",
        });
      });

      return () => mm.revert();
    },
    { scope: containerRef }
  );
}

/**
 * 2. Destinations Staggered 3D Fan-In
 */
export function useDestinationsFanIn(containerRef: React.RefObject<HTMLDivElement | null>) {
  useGSAP(
    () => {
      if (typeof window === "undefined" || !containerRef.current) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const cards = gsap.utils.toArray<HTMLElement>(".destination-card-item");
      if (!cards.length) return;

      gsap.fromTo(
        cards,
        {
          opacity: 0,
          y: 45,
          rotateX: -12,
          rotateY: (index: number) => (index - 1.5) * 4,
          transformOrigin: "center bottom",
        },
        {
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 82%",
            toggleActions: "play none none none",
          },
          opacity: 1,
          y: 0,
          rotateX: 0,
          rotateY: 0,
          duration: 0.95,
          stagger: 0.12,
          ease: "power3.out",
        }
      );
    },
    { scope: containerRef }
  );
}

/**
 * 3. "Why Choose Us" Parallax & Storytelling
 */
export function useWhyUsParallax(containerRef: React.RefObject<HTMLDivElement | null>) {
  useGSAP(
    () => {
      if (typeof window === "undefined" || !containerRef.current) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      // Cathedral building moves slower than container
      tl.to(
        ".why-us-parallax-image",
        {
          y: GSAP_CONFIG.parallax.whyUsImage,
          ease: "none",
        },
        0
      );

      // Floating glass badge moves significantly faster creating visible depth
      tl.to(
        ".why-us-floating-badge",
        {
          y: GSAP_CONFIG.parallax.whyUsBadge,
          ease: "none",
        },
        0
      );
    },
    { scope: containerRef }
  );
}

