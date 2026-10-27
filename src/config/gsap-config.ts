/**
 * Centralized GSAP, Lenis & ScrollTrigger Configuration
 * Single source of truth for all award-site motion timings, depths, and easing.
 */

export const GSAP_CONFIG = {
  // Official award-site easing curves
  easings: {
    reveal: "power3.out",
    revealExpo: "expo.out",
    scrub: "power2.inOut",
    smooth: "power2.out",
    elastic: "elastic.out(1, 0.4)",
  },

  // Animation Durations (seconds)
  durations: {
    reveal: 0.9,
    headingLine: 0.85,
    staggerStep: 0.12,
    badgeBob: 4.5,
    tiltSpring: 0.35,
    clipReveal: 1.1,
  },

  // Parallax Travel Multipliers & Depths (pixels)
  parallax: {
    heroBgGradient: -30,       // Slowest background layer
    heroMaskScaleStart: 1.08,   // Image mask scales from 1.08 to 1
    heroFloatingShapes: -80,   // Floating shapes moving faster, opposite
    heroForegroundText: 25,    // Subtle text lift
    heroFaintTextDrift: 140,   // "GLOBAL" text drifting horizontally
    whyUsImage: -45,           // Cherry blossom/building moves slower than container
    whyUsBadge: -85,           // Floating glass badge moves faster (visible separation)
    velocitySkewMax: 2,        // Max degrees skew based on scroll velocity
  },

  // Lenis Smooth Scroll Configuration
  lenis: {
    duration: 1.2,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: "vertical" as const,
    gestureOrientation: "vertical" as const,
    smoothWheel: true,
    wheelMultiplier: 0.95,
    touchMultiplier: 1.5,
  },

  // 3D Tilt Parameters (CSS 3D)
  tilt: {
    maxAngle: 8, // Max 8 degrees as specified
    perspective: 1200,
    glareOpacity: 0.22,
    layerZ: {
      image: 15,
      flag: 35,
      title: 45,
      arrow: 55,
    },
  },
};
