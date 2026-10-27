"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Destination } from "@/data/company";
import { GSAP_CONFIG } from "@/config/gsap-config";

export default function DestinationCard({ dest }: { dest: Destination }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });
  const [shadowOffset, setShadowOffset] = useState({ x: 0, y: 10 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.innerWidth < 1024 || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const xPos = (e.clientX - rect.left) / rect.width; // 0 to 1
    const yPos = (e.clientY - rect.top) / rect.height;

    const maxAngle = GSAP_CONFIG.tilt.maxAngle; // 8deg max
    const rotX = (0.5 - yPos) * (maxAngle * 2);
    const rotY = (xPos - 0.5) * (maxAngle * 2);

    setRotate({ x: rotX, y: rotY });
    setGlare({ x: xPos * 100, y: yPos * 100, opacity: GSAP_CONFIG.tilt.glareOpacity });
    // Dynamic soft shadow shifts opposite the tilt
    setShadowOffset({ x: -rotY * 2.5, y: 12 + rotX * 2.5 });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setGlare({ x: 50, y: 50, opacity: 0 });
    setShadowOffset({ x: 0, y: 8 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      data-cursor="view"
      className="perspective-1200 transition-transform duration-300 ease-out"
    >
      <Link
        href={`/study-abroad#${dest.id}`}
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
          boxShadow: `${shadowOffset.x}px ${shadowOffset.y}px 30px -10px rgba(12, 26, 48, 0.12)`,
        }}
        className="group block bg-white rounded-[26px] p-3.5 border border-slate-200/80 preserve-3d transition-all duration-300 relative overflow-hidden"
      >
        {/* Dynamic moving glare / light reflection layer */}
        <div
          className="absolute inset-0 pointer-events-none rounded-[26px] transition-opacity duration-300 z-30"
          style={{
            background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 65%)`,
            opacity: glare.opacity,
          }}
        />

        {/* Tall Landmark Photo with translateZ depth layer */}
        <div
          style={{
            position: "relative",
            transform: `translateZ(${GSAP_CONFIG.tilt.layerZ.image}px)`,
          }}
          className="relative w-full aspect-[3/3.9] rounded-[20px] overflow-hidden mb-3.5 bg-slate-100 shadow-xs"
        >
          <Image
            src={dest.image}
            alt={`${dest.name} landmark`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover group-hover:scale-108 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
          />
        </div>

        {/* Card Meta & Header with higher translateZ for 3D layering */}
        <div
          style={{
            transform: `translateZ(${GSAP_CONFIG.tilt.layerZ.title}px)`,
          }}
          className="px-1.5 pb-1 space-y-1.5"
        >
          <div className="flex items-center justify-between">
            <div
              style={{ transform: `translateZ(${GSAP_CONFIG.tilt.layerZ.flag}px)` }}
              className="flex items-center gap-2"
            >
              <span className="text-lg">{dest.flag}</span>
              <h3 className="font-heading font-bold text-base text-[#0C1A30]">
                {dest.code}
              </h3>
            </div>

            {/* Rotating Arrow Button */}
            <div
              style={{ transform: `translateZ(${GSAP_CONFIG.tilt.layerZ.arrow}px)` }}
              className="w-7 h-7 rounded-full border border-slate-200 text-slate-400 group-hover:border-[#0C1A30] group-hover:bg-[#0C1A30] group-hover:text-white group-hover:-rotate-45 flex items-center justify-center transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
            >
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

          <p className="text-[12px] text-slate-500 leading-snug">
            {dest.title}
          </p>
        </div>
      </Link>
    </div>
  );
}
