"use client";

import { ArrowUpRight, ArrowRight } from "lucide-react";

interface ConsultationButtonProps {
  label?: string;
  variant?: "primary" | "gold" | "secondary";
  className?: string;
  showIcon?: boolean;
}

export default function ConsultationButton({
  label = "Book a Free Consultation",
  variant = "primary",
  className = "",
  showIcon = true,
}: ConsultationButtonProps) {
  const handleClick = () => {
    window.dispatchEvent(new CustomEvent("open-consultation-modal"));
  };

  const baseClass =
    variant === "primary"
      ? "btn-primary-pill"
      : variant === "gold"
      ? "btn-gold-pill"
      : "btn-secondary-pill";

  return (
    <button
      type="button"
      onClick={handleClick}
      suppressHydrationWarning
      className={`${baseClass} group cursor-pointer ${className}`}
    >
      <span>{label}</span>
      {showIcon && (
        <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5">
          <ArrowUpRight className="w-3.5 h-3.5" />
        </span>
      )}
    </button>
  );
}
