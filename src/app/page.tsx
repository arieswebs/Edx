"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Play,
  Sparkles,
  CheckCircle2,
  Building,
  MessageSquare,
} from "lucide-react";
import {
  COMPANY_INFO,
  POPULAR_DESTINATIONS,
} from "@/data/company";
import LeadForm from "@/components/LeadForm";
import MagneticButton from "@/components/MagneticButton";
import {
  MaskedHeading,
  SectionReveal,
  CounterStat,
  SvgFlightTrail,
} from "@/components/MotionReveal";
import DestinationCard from "@/components/DestinationCard";
import HowWeWorkCarousel from "@/components/HowWeWorkCarousel";
import Hero3DCanvas from "@/components/Hero3DCanvas";
import PartnerUniversitiesMarquee from "@/components/PartnerUniversitiesMarquee";
import WhyChooseUsStorytelling from "@/components/WhyChooseUsStorytelling";
import { useHeroInteractive, useDestinationsFanIn } from "@/components/ParallaxLayers";
import { motion } from "framer-motion";
import { MOTION_CONFIG } from "@/config/motion";

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const destinationsRef = useRef<HTMLDivElement>(null);

  // 1. Hero Multi-Layer Parallax + Mouse Shift + Stacked Card Transition
  useHeroInteractive(heroRef);

  // 2. Destinations Staggered 3D Fan-In
  useDestinationsFanIn(destinationsRef);

  const openConsultation = () => {
    window.dispatchEvent(new CustomEvent("open-consultation-modal"));
  };

  return (
    <div className="pt-24 sm:pt-28 pb-20 overflow-hidden bg-white text-[#0C1A30]">
      {/* =========================================================================
          SECTION 1: HERO SECTION (4 Parallax Layers + Mouse Shift + 3D Low-Poly Globe)
          ========================================================================= */}
      <section ref={heroRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-28">
        <div
          suppressHydrationWarning
          className="hero-card-bg hero-card-surface rounded-[36px] sm:rounded-[44px] p-7 sm:p-12 lg:p-16 border border-white/90 shadow-sm relative overflow-hidden transition-all duration-300"
        >
          {/* Layer 1: Ambient background light */}
          <div className="hero-bg-ambient absolute top-0 right-1/3 w-96 h-96 bg-white/40 rounded-full blur-3xl pointer-events-none will-change-transform" />

          {/* Layer 1b: Drifting horizontal faint "GLOBAL" text */}
          <div
            aria-hidden="true"
            className="hero-faint-text absolute -top-8 sm:-top-12 -left-6 sm:left-4 text-[13vw] font-black text-slate-300/20 select-none pointer-events-none tracking-tighter z-0 will-change-transform"
          >
            GLOBAL
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center relative z-10">
            {/* Layer 4: Left Content Column with slight lift on scroll */}
            <div className="hero-foreground-text lg:col-span-7 space-y-6 sm:space-y-7 will-change-transform">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: MOTION_CONFIG.ease }}
                className="text-[11px] font-bold tracking-[0.22em] text-[#64748B] uppercase"
              >
                GLOBAL EDUCATION. REAL OPPORTUNITIES.
              </motion.div>

              <div>
                <MaskedHeading
                  text="Your Next Chapter Starts Abroad"
                  highlightWord="Abroad"
                  highlightClass="text-gradient-sweep font-semibold"
                  tag="h1"
                  className="text-4xl sm:text-5xl lg:text-[62px] font-heading font-extrabold text-[#0C1A30] leading-[1.08] tracking-[-0.03em]"
                />
              </div>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35, ease: MOTION_CONFIG.ease }}
                className="text-slate-600 text-base sm:text-[17px] leading-[1.65] max-w-[490px]"
              >
                We help students turn their global education dreams into reality with expert guidance, university admissions support, and end-to-end assistance.
              </motion.p>

              {/* Action Buttons matching reference */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45, ease: MOTION_CONFIG.ease }}
                className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6"
              >
                {/* Primary Magnetic Dark Pill Button */}
                <MagneticButton onClick={openConsultation}>
                  <motion.button
                    type="button"
                    whileTap={{ scale: MOTION_CONFIG.distances.buttonTapScale }}
                    className="bg-[#0C1A30] hover:bg-[#162744] text-white px-7 py-3.5 rounded-full font-semibold text-sm flex items-center gap-3 shadow-lg shadow-[#0C1A30]/15 hover:shadow-[#0C1A30]/25 transition-all duration-200 cursor-pointer group"
                  >
                    <span>Book a Free Consultation</span>
                    <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center transition-transform group-hover:translate-x-1 duration-200">
                      <ArrowRight className="w-3.5 h-3.5 text-white" />
                    </span>
                  </motion.button>
                </MagneticButton>

                {/* Secondary Play Button */}
                <Link
                  href="/about"
                  className="flex items-center gap-3 text-sm font-semibold text-[#0C1A30] hover:text-[#6484AA] transition-colors py-2 px-1 group"
                >
                  <span className="w-9 h-9 rounded-full border border-slate-300 flex items-center justify-center text-slate-700 group-hover:border-[#0C1A30] group-hover:text-[#0C1A30] transition-colors">
                    <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                  </span>
                  <span>Watch Our Story</span>
                </Link>
              </motion.div>
            </div>

            {/* Right Visual Column: Arched Cutout + Stroke Draw Script + Mouse Shift */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0">
              {/* Layer 3: Handwritten Script Note & SVG Flight Trail (Opposite Parallax Direction) */}
              <div className="hero-floating-badge absolute -top-7 sm:-top-9 right-4 sm:right-8 z-20 flex items-center gap-2 will-change-transform">
                <span className="font-script text-2xl sm:text-3xl text-[#55709B] font-medium tracking-wide">
                  A global future awaits you
                </span>
                <SvgFlightTrail className="w-11 h-8 text-[#55709B] inline-block -rotate-6" />
              </div>

              {/* Layer 2: The Organic Arched Mask with Medium Scroll Parallax & Mouse Shift */}
              <div
                style={{ position: "relative" }}
                className="hero-parallax-image relative w-full aspect-[4/4.8] sm:aspect-[4/4.6] hero-arch-mask overflow-hidden shadow-2xl border-4 border-white/90 bg-slate-200 will-change-transform"
              >
                <div style={{ position: "relative" }} className="w-full h-[115%] -mt-[7%]">
                  <Image
                    src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80"
                    alt="Student with backpack admiring Oxford university library and historic domes"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center scale-102 hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Soft foreground vignette so the student appears to sit in front */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C1A30]/35 via-transparent to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Hero 3D Accent: Low-Poly Globe with Orbiting Satellite */}
              <div className="absolute -bottom-8 -left-8 sm:-left-12 z-20 w-32 h-32 sm:w-40 sm:h-40 hidden sm:block pointer-events-none">
                <Hero3DCanvas />
              </div>
            </div>
          </div>

          {/* Stats Bar at Bottom of Hero Card with Viewport Animated Counter */}
          <div className="mt-12 sm:mt-16 pt-8 border-t border-slate-300/60 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 relative z-10">
            <CounterStat target={10} suffix="+" label="Years of Experience" />
            <CounterStat target={5000} suffix="+" label="Students Placed" />
            <CounterStat target={30} suffix="+" label="Partner Universities" />
            <CounterStat target={95} suffix="%" label="Visa Success Rate" />
          </div>
        </div>
      </section>

      {/* COMPACT PARTNER UNIVERSITIES MARQUEE BAND (Just below Hero) */}
      <PartnerUniversitiesMarquee />

      {/* =========================================================================
          SECTION 2: POPULAR STUDY DESTINATIONS (#destinations Scroll-Spy Anchor)
          ========================================================================= */}
      <section
        id="destinations"
        ref={destinationsRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-28 pt-8"
      >
        <SectionReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <MaskedHeading
                text="Popular Study Destinations"
                tag="h2"
                className="text-3xl sm:text-4xl font-heading font-bold text-[#0C1A30] mb-2 tracking-tight"
              />
              <p className="text-slate-500 text-sm sm:text-base max-w-xl">
                Explore world-class education, diverse cultures, and endless opportunities across top destinations.
              </p>
            </div>

            <Link
              href="/study-abroad"
              className="border border-slate-300 hover:border-[#0C1A30] rounded-full px-5 py-2.5 text-xs font-semibold text-[#0C1A30] transition-colors flex items-center gap-2 self-start md:self-auto group hover:bg-slate-50"
            >
              <span>Explore All Destinations</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 duration-200" />
            </Link>
          </div>
        </SectionReveal>

        {/* 4 Destination Cards with 3D Fan-In + 1200px Cursor Tilt + Glare Layer */}
        <div className="destinations-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {POPULAR_DESTINATIONS.slice(0, 4).map((dest) => (
            <div key={dest.id} className="destination-card-item">
              <DestinationCard dest={dest} />
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: WHY CHOOSE US (Pinned Storytelling + Parallax Separation)
          ========================================================================= */}
      <WhyChooseUsStorytelling />

      {/* =========================================================================
          SECTION 4: HOW WE WORK (#how-it-works Scroll-Spy + Swipeable Carousel)
          ========================================================================= */}
      <section id="how-it-works" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 sm:mb-32 pt-8">
        <SectionReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div>
              <MaskedHeading
                text="How We Work"
                tag="h2"
                className="text-3xl sm:text-4xl font-heading font-bold text-[#0C1A30] mb-2 tracking-tight"
              />
              <p className="text-slate-500 text-sm sm:text-base max-w-xl">
                A simple and transparent process to turn your study abroad dreams into reality.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <MagneticButton onClick={openConsultation}>
                <button
                  type="button"
                  className="bg-[#0C1A30] hover:bg-[#162744] text-white px-5 py-2.5 rounded-full text-xs font-semibold flex items-center gap-2 group transition-all"
                >
                  <span>Start Your Journey</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 duration-200" />
                </button>
              </MagneticButton>
            </div>
          </div>
        </SectionReveal>

        {/* Working Swipeable Carousel with Snap Points & Fill Line */}
        <SectionReveal delay={0.15}>
          <HowWeWorkCarousel />
        </SectionReveal>
      </section>

      {/* =========================================================================
          SECTION 5: ATS CV & EUROPASS DIVISION (#cv-writing Scroll-Spy Anchor)
          ========================================================================= */}
      <section id="cv-writing" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 sm:mb-32 pt-8">
        <div className="bg-[#0C1A30] text-white rounded-[36px] sm:rounded-[44px] p-8 sm:p-14 lg:p-16 relative overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#F5B324] text-[11px] font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                Industry-Standard Career Drafting
              </div>

              <div>
                <MaskedHeading
                  text="Stand Out Globally with ATS & Europass CV Writing"
                  highlightWord="Europass"
                  highlightClass="text-[#F5B324] font-normal"
                  tag="h2"
                  className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight leading-tight"
                />
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl">
                Automated applicant tracking systems filter out up to 75% of resumes. Our executive resume strategists craft high-impact CVs, official European Union Europass documents, and Ivy-grade SOPs designed to pass algorithm filters and impress international recruiters.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                  <div className="text-sm font-bold text-white mb-1 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#F5B324]" />
                    ATS Keyword Mapping
                  </div>
                  <p className="text-xs text-slate-300">
                    Engineered for UK, USA, Canada, and Gulf corporate job portals.
                  </p>
                </div>

                <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                  <div className="text-sm font-bold text-white mb-1 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#F5B324]" />
                    Official Europass XML
                  </div>
                  <p className="text-xs text-slate-300">
                    Standardized European Commission framework for Germany, Ireland & France.
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/cv-writing"
                  className="bg-[#F5B324] hover:bg-[#E5A00D] text-[#0C1A30] px-7 py-3.5 rounded-full font-bold text-sm flex items-center gap-2.5 transition-all shadow-md group"
                >
                  <span>Explore CV Packages</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 duration-200" />
                </Link>

                <a
                  href={`https://wa.me/919207926005?text=Hello%20EDX,%20I%20would%20like%20a%20free%20CV%20review.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white/20 hover:border-white/40 text-white px-6 py-3.5 rounded-full font-semibold text-sm transition-colors flex items-center gap-2"
                >
                  <span>Request Free CV Audit</span>
                </a>
              </div>
            </div>

            {/* Right: Clean Editorial Document Card Preview */}
            <div className="lg:col-span-5 perspective-1200">
              <div
                data-cursor="view"
                className="bg-white text-[#0C1A30] rounded-[28px] p-6 sm:p-8 shadow-2xl border border-slate-100 space-y-4 preserve-3d hover:-translate-y-2 hover:rotate-1 transition-all duration-300"
              >
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-bold text-slate-700">ATS Compliance Score</span>
                  </div>
                  <span className="text-xs font-extrabold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
                    98 / 100
                  </span>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="flex items-center justify-between text-slate-600">
                    <span>Keyword Optimization</span>
                    <span className="font-bold text-[#0C1A30]">Passed · 100%</span>
                  </div>
                  <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: MOTION_CONFIG.ease }}
                      className="bg-[#0C1A30] h-full rounded-full"
                    />
                  </div>

                  <div className="flex items-center justify-between text-slate-600">
                    <span>Recruiter Formatting & Hierarchy</span>
                    <span className="font-bold text-[#0C1A30]">High Impact</span>
                  </div>
                  <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "95%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.1, ease: MOTION_CONFIG.ease }}
                      className="bg-[#6484AA] h-full rounded-full"
                    />
                  </div>

                  <div className="flex items-center justify-between text-slate-600">
                    <span>Europass CEFR Language Framework</span>
                    <span className="font-bold text-[#0C1A30]">Compliant</span>
                  </div>
                  <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "92%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.2, ease: MOTION_CONFIG.ease }}
                      className="bg-[#F5B324] h-full rounded-full"
                    />
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                  <span>Fast 24-48h Delivery</span>
                  <span>Word & PDF Format</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: CONSULTATION BOOKING (#contact Scroll-Spy Anchor)
          ========================================================================= */}
      <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Office Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#64748B]">
              VISIT US IN PATHANAPURAM
            </div>

            <div>
              <MaskedHeading
                text="Begin Your Journey with EDX Admissions Desk"
                tag="h2"
                className="text-3xl sm:text-4xl font-heading font-bold text-[#0C1A30] tracking-tight"
              />
            </div>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Have your academic records evaluated, select the most lucrative programs abroad, or get your CV drafted by our specialists.
            </p>

            <div className="space-y-4 pt-1">
              <div className="p-4 rounded-2xl bg-[#FAFBFD] border border-slate-200/80 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-[#0C1A30] shrink-0">
                  <Building className="w-5 h-5 text-[#0C1A30]" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-[#0C1A30]">Kerala Office</h3>
                  <p className="text-xs text-slate-600 mt-0.5">{COMPANY_INFO.address.full}</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAFBFD] border border-slate-200/80 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-[#0C1A30]">WhatsApp & Call</h3>
                  <p className="text-xs text-slate-600 mt-0.5">
                    +91 {COMPANY_INFO.contact.rawPhone} · Mon to Sat, 9:30 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <LeadForm
              title="Schedule a Free Consultation"
              subtitle="Enter your details below and a senior counselor will review your profile and contact you within 2 hours."
            />
          </div>
        </div>
      </section>
    </div>
  );
}
