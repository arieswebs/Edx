"use client";

import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useReducedMotion,
  animate,
} from "framer-motion";
import { MOTION_CONFIG } from "@/config/motion";

/**
 * 1. Masked Word-by-Word / Line-by-Line Heading Reveal
 */
export function MaskedHeading({
  text,
  highlightWord,
  highlightClass = "text-[#6484AA] font-normal",
  className = "",
  tag = "h2",
}: {
  text: string;
  highlightWord?: string;
  highlightClass?: string;
  className?: string;
  tag?: "h1" | "h2" | "h3";
}) {
  const ref = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const shouldReduceMotion = useReducedMotion();
  const words = text.split(" ");

  const Tag = tag;

  return (
    <Tag ref={ref} className={`${className} inline-flex flex-wrap gap-x-[0.28em] gap-y-1`}>
      {words.map((word, i) => {
        const isHighlight =
          highlightWord &&
          word.toLowerCase().replace(/[^a-z]/g, "") ===
            highlightWord.toLowerCase().replace(/[^a-z]/g, "");

        return (
          <span key={i} className="inline-block overflow-hidden py-0.5">
            <motion.span
              initial={{ y: shouldReduceMotion ? 0 : "105%", opacity: shouldReduceMotion ? 1 : 0 }}
              animate={
                isInView
                  ? { y: 0, opacity: 1 }
                  : { y: shouldReduceMotion ? 0 : "105%", opacity: shouldReduceMotion ? 1 : 0 }
              }
              transition={{
                duration: MOTION_CONFIG.durations.reveal,
                delay: i * MOTION_CONFIG.stagger.words,
                ease: MOTION_CONFIG.ease,
              }}
              className={`inline-block ${isHighlight ? highlightClass : ""}`}
            >
              {word}
            </motion.span>
          </span>
        );
      })}
    </Tag>
  );
}

/**
 * 2. Section Scroll Reveal: Fade + 24px upward movement, once only
 */
export function SectionReveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: shouldReduceMotion ? 0 : MOTION_CONFIG.distances.sectionRevealY,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: MOTION_CONFIG.durations.reveal,
        delay,
        ease: MOTION_CONFIG.ease,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * 3. Animated Number Counter on Viewport Entry (10+, 5000+, 30+, 95%)
 */
export function CounterStat({
  target,
  suffix = "+",
  label,
  className = "",
}: {
  target: number;
  suffix?: string;
  label: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const shouldReduceMotion = useReducedMotion();
  const [count, setCount] = useState(shouldReduceMotion ? target : 0);

  useEffect(() => {
    if (!isInView || shouldReduceMotion) return;

    const controls = animate(0, target, {
      duration: MOTION_CONFIG.durations.counter,
      ease: MOTION_CONFIG.ease,
      onUpdate: (latest) => setCount(Math.round(latest)),
    });

    return () => controls.stop();
  }, [isInView, target, shouldReduceMotion]);

  return (
    <div ref={ref} className={className}>
      <div className="text-3xl sm:text-4xl font-heading font-extrabold text-[#0C1A30] tracking-tight">
        {count}
        {suffix}
      </div>
      <div className="text-xs sm:text-[13px] font-medium text-slate-500 mt-0.5">
        {label}
      </div>
    </div>
  );
}

/**
 * 4. Subtle Parallax Effect for Images
 */
export function ParallaxImage({
  children,
  className = "",
  distance = 30,
}: {
  children: React.ReactNode;
  className?: string;
  distance?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [-distance, distance]
  );

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="w-full h-full">
        {children}
      </motion.div>
    </div>
  );
}

/**
 * 5. Interactive Desktop 3D Tilt Card with Cursor Follow
 */
export function TiltCard({
  children,
  className = "",
  maxTilt = 7,
}: {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const shouldReduceMotion = useReducedMotion();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || !ref.current) return;
    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current.getBoundingClientRect();

    const xPos = (clientX - left) / width - 0.5; // -0.5 to 0.5
    const yPos = (clientY - top) / height - 0.5;

    setTilt({
      x: -yPos * maxTilt, // tilt up/down
      y: xPos * maxTilt,  // tilt left/right
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={
        shouldReduceMotion
          ? { rotateX: 0, rotateY: 0, y: 0 }
          : { rotateX: tilt.x, rotateY: tilt.y }
      }
      whileHover={
        shouldReduceMotion
          ? {}
          : { y: MOTION_CONFIG.distances.cardLiftY, transition: { duration: 0.25 } }
      }
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{ perspective: 1000 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * 6. Slow Bobbing Loop Badge
 */
export function BobbingBadge({
  children,
  className = "",
  offset = 7,
}: {
  children: React.ReactNode;
  className?: string;
  offset?: number;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      animate={
        shouldReduceMotion
          ? {}
          : {
              y: [0, -offset, 0],
            }
      }
      transition={{
        duration: MOTION_CONFIG.durations.floatLoop,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * 7. SVG Path Stroke-Draw Animation on Scroll Reveal
 */
export function SvgFlightTrail({ className = "" }: { className?: string }) {
  const ref = useRef<SVGSVGElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <svg
      ref={ref}
      className={className}
      viewBox="0 0 50 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M2 24 C14 8, 30 4, 40 12 C44 15, 42 22, 34 22 C26 22, 24 14, 32 8 C38 4, 44 8, 48 10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="3 3"
        initial={{ pathLength: shouldReduceMotion ? 1 : 0, opacity: 0 }}
        animate={
          isInView
            ? { pathLength: 1, opacity: 1 }
            : { pathLength: shouldReduceMotion ? 1 : 0, opacity: 0 }
        }
        transition={{
          duration: MOTION_CONFIG.durations.drawPath,
          ease: MOTION_CONFIG.ease,
        }}
      />
    </svg>
  );
}

export function SvgPlaneTrail({ className = "" }: { className?: string }) {
  const ref = useRef<SVGSVGElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <svg
      ref={ref}
      className={className}
      viewBox="0 0 60 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M2 20 C18 6, 38 4, 52 14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="3 3"
        initial={{ pathLength: shouldReduceMotion ? 1 : 0, opacity: 0 }}
        animate={
          isInView
            ? { pathLength: 1, opacity: 1 }
            : { pathLength: shouldReduceMotion ? 1 : 0, opacity: 0 }
        }
        transition={{
          duration: MOTION_CONFIG.durations.drawPath,
          ease: MOTION_CONFIG.ease,
        }}
      />
    </svg>
  );
}
