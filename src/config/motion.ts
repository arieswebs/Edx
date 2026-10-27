/**
 * Centralized Motion & Animation Configuration
 * Single source of truth for easings, durations, springs, and distances.
 */

export const MOTION_CONFIG = {
  // Master easing curve as specified: cubic-bezier(0.22, 1, 0.36, 1)
  ease: [0.22, 1, 0.36, 1] as const,
  easeString: "cubic-bezier(0.22, 1, 0.36, 1)",

  // Durations (in seconds)
  durations: {
    reveal: 0.75, // 0.6s to 0.9s
    revealSlow: 0.9,
    revealFast: 0.6,
    hover: 0.25, // 0.2s to 0.3s
    tap: 0.15,
    navSlide: 0.3,
    counter: 1.8,
    drawPath: 1.4,
    floatLoop: 4.5,
  },

  // Stagger delays
  stagger: {
    words: 0.04,
    lines: 0.08,
    cards: 0.12,
    navLinks: 0.06,
  },

  // Distances (in pixels)
  distances: {
    sectionRevealY: 24,
    cardLiftY: -8,
    buttonTapScale: 0.96,
    buttonHoverScale: 1.02,
    parallaxHero: 35,
    parallaxFeature: 25,
  },

  // Spring physics configs
  springs: {
    magnetic: {
      type: "spring" as const,
      stiffness: 250,
      damping: 18,
      mass: 0.6,
    },
    pill: {
      type: "spring" as const,
      stiffness: 380,
      damping: 32,
    },
    carousel: {
      type: "spring" as const,
      stiffness: 280,
      damping: 28,
    },
  },
};
