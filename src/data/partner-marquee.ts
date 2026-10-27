/**
 * Partner Universities Marquee Configuration & Data
 * Single source of truth for speeds, rotations, university items, and preview assets.
 */

export interface UniversityItem {
  id: string;
  name: string;
  country: "UK" | "USA" | "Canada" | "Australia";
  flag: string;
  city: string;
  image: string; // Campus photo for Step 2 hover preview
  style?: "solid" | "outline";
}

export const MARQUEE_CONFIG = {
  // Speed multipliers (pixels per frame at 60fps)
  speeds: {
    row1: 1.2, // moves left
    row2: 0.95, // moves right
    row3: 1.35, // moves left
  },

  // Rotation angles for layered ribbon aesthetic
  rotations: {
    row1: -2,    // -2 deg
    row2: 1.5,   // +1.5 deg
    row3: -1,    // -1 deg
  },

  // Velocity reactivity parameters
  velocity: {
    maxMultiplier: 3.5, // Max speed boost on fast scroll
    skewMax: 6,         // Max skewX degrees (up to 6deg as requested)
    lerpDecay: 0.06,    // Smooth return to base speed
  },

  perspective: 1200,
};

// Row 1 (UK & USA Focus): Moves Left
export const ROW_1_UNIVERSITIES: UniversityItem[] = [
  {
    id: "oxford",
    name: "UNIVERSITY OF OXFORD",
    country: "UK",
    flag: "🇬🇧",
    city: "Oxford",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=600&q=80",
    style: "solid",
  },
  {
    id: "harvard",
    name: "HARVARD UNIVERSITY",
    country: "USA",
    flag: "🇺🇸",
    city: "Cambridge, MA",
    image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=600&q=80",
    style: "outline",
  },
  {
    id: "cambridge",
    name: "UNIVERSITY OF CAMBRIDGE",
    country: "UK",
    flag: "🇬🇧",
    city: "Cambridge",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80",
    style: "solid",
  },
  {
    id: "mit",
    name: "MIT",
    country: "USA",
    flag: "🇺🇸",
    city: "Cambridge, MA",
    image: "https://images.unsplash.com/photo-1534430480872-3498386e7856?auto=format&fit=crop&w=600&q=80",
    style: "outline",
  },
  {
    id: "imperial",
    name: "IMPERIAL COLLEGE LONDON",
    country: "UK",
    flag: "🇬🇧",
    city: "London",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=600&q=80",
    style: "solid",
  },
  {
    id: "stanford",
    name: "STANFORD UNIVERSITY",
    country: "USA",
    flag: "🇺🇸",
    city: "Stanford, CA",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&q=80",
    style: "outline",
  },
];

// Row 2 (Canada & UK Focus): Moves Right
export const ROW_2_UNIVERSITIES: UniversityItem[] = [
  {
    id: "toronto",
    name: "UNIVERSITY OF TORONTO",
    country: "Canada",
    flag: "🇨🇦",
    city: "Toronto",
    image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=600&q=80",
    style: "outline",
  },
  {
    id: "columbia",
    name: "COLUMBIA UNIVERSITY",
    country: "USA",
    flag: "🇺🇸",
    city: "New York",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80",
    style: "solid",
  },
  {
    id: "ubc",
    name: "UNIVERSITY OF BRITISH COLUMBIA",
    country: "Canada",
    flag: "🇨🇦",
    city: "Vancouver",
    image: "https://images.unsplash.com/photo-1519832979-6fa011b8766b?auto=format&fit=crop&w=600&q=80",
    style: "outline",
  },
  {
    id: "ucl",
    name: "UCL LONDON",
    country: "UK",
    flag: "🇬🇧",
    city: "London",
    image: "https://images.unsplash.com/photo-1549918864-48ac978761a4?auto=format&fit=crop&w=600&q=80",
    style: "solid",
  },
  {
    id: "mcgill",
    name: "MCGILL UNIVERSITY",
    country: "Canada",
    flag: "🇨🇦",
    city: "Montreal",
    image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=600&q=80",
    style: "outline",
  },
  {
    id: "edinburgh",
    name: "UNIVERSITY OF EDINBURGH",
    country: "UK",
    flag: "🇬🇧",
    city: "Edinburgh",
    image: "https://images.unsplash.com/photo-1525921429624-479b6a26d84d?auto=format&fit=crop&w=600&q=80",
    style: "solid",
  },
];

// Row 3 (Australia & Canada Focus): Moves Left
export const ROW_3_UNIVERSITIES: UniversityItem[] = [
  {
    id: "melbourne",
    name: "UNIVERSITY OF MELBOURNE",
    country: "Australia",
    flag: "🇦🇺",
    city: "Melbourne",
    image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=600&q=80",
    style: "solid",
  },
  {
    id: "waterloo",
    name: "UNIVERSITY OF WATERLOO",
    country: "Canada",
    flag: "🇨🇦",
    city: "Waterloo",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80",
    style: "outline",
  },
  {
    id: "sydney",
    name: "UNIVERSITY OF SYDNEY",
    country: "Australia",
    flag: "🇦🇺",
    city: "Sydney",
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=600&q=80",
    style: "solid",
  },
  {
    id: "anu",
    name: "AUSTRALIAN NATIONAL UNIVERSITY",
    country: "Australia",
    flag: "🇦🇺",
    city: "Canberra",
    image: "https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&w=600&q=80",
    style: "outline",
  },
  {
    id: "monash",
    name: "MONASH UNIVERSITY",
    country: "Australia",
    flag: "🇦🇺",
    city: "Melbourne",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    style: "solid",
  },
];
