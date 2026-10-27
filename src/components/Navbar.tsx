"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import { MOTION_CONFIG } from "@/config/motion";
import MagneticButton from "@/components/MagneticButton";

const NAV_LINKS = [
  { label: "Destinations", href: "/#destinations", id: "destinations" },
  { label: "Why Us", href: "/#why-us", id: "why-us" },
  { label: "How We Work", href: "/#how-it-works", id: "how-it-works" },
  { label: "CV Writing", href: "/#cv-writing", id: "cv-writing", badge: "ATS" },
  { label: "Test Prep", href: "/test-prep", id: "test-prep" },
  { label: "About", href: "/about", id: "about" },
  { label: "Contact", href: "/#contact", id: "contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState<string>("");
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [navVisible, setNavVisible] = useState<boolean>(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const lastScrollY = useRef(0);

  // Scroll progress for thin bottom bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Track scroll state for glassmorphism styling (fixed, no upward hiding)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll spy for homepage sections
  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection("");
      return;
    }

    const sectionIds = ["destinations", "why-us", "how-it-works", "cv-writing", "contact"];
    const handleScrollSpy = () => {
      const scrollPos = window.scrollY + 220;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScrollSpy, { passive: true });
    handleScrollSpy();
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, [pathname]);

  // Body scroll lock on mobile menu open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const openConsultation = () => {
    window.dispatchEvent(new CustomEvent("open-consultation-modal"));
    setMobileMenuOpen(false);
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#") && pathname === "/") {
      e.preventDefault();
      const targetId = href.replace("/#", "");
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-3 sm:top-4 inset-x-0 z-50 px-4 sm:px-6 pointer-events-none">
        <div
          className={`max-w-6xl mx-auto rounded-full transition-all duration-300 pointer-events-auto relative overflow-hidden border ${
            isScrolled
              ? "py-2 sm:py-2.5 px-4 sm:px-6 bg-white/85 backdrop-blur-xl shadow-lg shadow-[#0C1A30]/8 border-white/80"
              : "py-2.5 sm:py-3 px-5 sm:px-7 bg-white/70 backdrop-blur-md shadow-xs border-white/70"
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link
              href="/"
              onClick={(e) => handleLinkClick(e, "/")}
              className="flex items-center gap-2 group cursor-pointer"
            >
              <div
                style={{ position: "relative" }}
                className="relative h-10 w-28 sm:h-11 sm:w-32 overflow-hidden rounded-md transition-transform duration-300 group-hover:scale-102"
              >
                <Image
                  src="/images/edx-logo.jpg"
                  alt="EDX Shaping Futures Logo"
                  fill
                  priority
                  sizes="128px"
                  className="object-contain object-left"
                />
              </div>
            </Link>

            {/* Desktop Navigation with Sliding Highlight Pill */}
            <nav
              onMouseLeave={() => setHoveredIdx(null)}
              className="hidden lg:flex items-center gap-1 text-[13.5px] font-medium text-slate-700 relative"
            >
              {NAV_LINKS.map((link, idx) => {
                const isActive =
                  (link.href.startsWith("/#") && activeSection === link.id) ||
                  pathname === link.href;
                const isHovered = hoveredIdx === idx;

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    onMouseEnter={() => setHoveredIdx(idx)}
                    className={`relative px-3.5 py-1.5 rounded-full transition-colors z-10 flex items-center gap-1.5 ${
                      isActive ? "text-[#0C1A30] font-semibold" : "hover:text-[#0C1A30]"
                    }`}
                  >
                    {/* Hover Sliding Pill */}
                    {isHovered && (
                      <motion.span
                        layoutId="nav-sliding-pill"
                        transition={MOTION_CONFIG.springs.pill}
                        className="absolute inset-0 rounded-full bg-slate-100/90 -z-10"
                      />
                    )}

                    {/* Active State Dot / Indicator */}
                    {isActive && !isHovered && (
                      <motion.span
                        layoutId="nav-active-pill"
                        className="absolute inset-0 rounded-full bg-slate-100/50 -z-10"
                      />
                    )}

                    <span>{link.label}</span>

                    {link.badge && (
                      <span className="text-[9px] font-bold uppercase tracking-wider bg-[#F5B324] text-[#0C1A30] px-1.5 py-0.2 rounded-full">
                        {link.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Magnetic CTA Button on Desktop */}
            <div className="hidden sm:flex items-center gap-3">
              <MagneticButton onClick={openConsultation}>
                <button
                  type="button"
                  suppressHydrationWarning
                  className="bg-[#0C1A30] hover:bg-[#162744] text-white px-5 py-2.5 rounded-full text-[13px] font-semibold flex items-center gap-2.5 transition-all shadow-sm hover:shadow-md group cursor-pointer"
                >
                  <span>Book a Free Consultation</span>
                  <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center transition-transform group-hover:translate-x-1 duration-200">
                    <ArrowRight className="w-3 h-3 text-white" />
                  </span>
                </button>
              </MagneticButton>
            </div>

            {/* Mobile Animated Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-full text-slate-800 hover:bg-slate-100 transition-colors relative w-10 h-10 flex flex-col items-center justify-center gap-1.5"
              aria-label="Toggle mobile menu"
            >
              <motion.span
                animate={mobileMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25, ease: MOTION_CONFIG.ease }}
                className="w-5 h-0.5 bg-[#0C1A30] rounded-full origin-center"
              />
              <motion.span
                animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="w-5 h-0.5 bg-[#0C1A30] rounded-full"
              />
              <motion.span
                animate={mobileMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25, ease: MOTION_CONFIG.ease }}
                className="w-5 h-0.5 bg-[#0C1A30] rounded-full origin-center"
              />
            </button>
          </div>

          {/* Thin scroll-progress bar on the navbar's bottom edge */}
          <motion.div
            style={{ scaleX }}
            className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#6484AA] via-[#F5B324] to-[#0C1A30] origin-left"
          />
        </div>
      </header>

      {/* Full-screen Mobile Menu with Staggered Reveals */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: MOTION_CONFIG.ease }}
            className="lg:hidden fixed inset-0 z-40 bg-[#0C1A30]/80 backdrop-blur-2xl flex flex-col justify-between px-6 pt-24 pb-10"
          >
            <div className="space-y-4">
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#F5B324] mb-3">
                Navigation
              </div>
              <div className="flex flex-col gap-2">
                {NAV_LINKS.map((link, idx) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{
                      delay: idx * MOTION_CONFIG.stagger.navLinks,
                      duration: 0.4,
                      ease: MOTION_CONFIG.ease,
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className="text-2xl font-heading font-bold text-white hover:text-[#F5B324] transition-colors py-2 flex items-center justify-between"
                    >
                      <span>{link.label}</span>
                      {link.badge ? (
                        <span className="text-xs bg-[#F5B324] text-[#0C1A30] px-2 py-0.5 rounded-full font-bold">
                          {link.badge}
                        </span>
                      ) : (
                        <ArrowRight className="w-5 h-5 text-white/40" />
                      )}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.4, ease: MOTION_CONFIG.ease }}
              className="space-y-3 pt-6 border-t border-white/10"
            >
              <button
                onClick={openConsultation}
                className="w-full bg-[#F5B324] text-[#0C1A30] font-bold py-3.5 rounded-full text-center text-sm shadow-lg flex items-center justify-center gap-2"
              >
                <span>Book a Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={COMPANY_INFO.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full border border-white/20 text-white font-semibold py-3 rounded-full text-center text-sm flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Chat via WhatsApp (9207926005)</span>
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
