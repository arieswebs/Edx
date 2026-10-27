"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Compass,
  Globe,
  GraduationCap,
  CheckCircle,
  FileText,
  Feather,
  ShieldCheck,
  Award,
  Landmark,
  BookOpen,
  Users,
  Home,
  PlaneTakeoff,
  ArrowRight,
  Sparkles,
  Check,
} from "lucide-react";
import { ALL_SERVICES } from "@/data/company";
import LeadForm from "@/components/LeadForm";

const iconMap: Record<string, any> = {
  Compass,
  Globe,
  GraduationCap,
  CheckCircle,
  FileText,
  Feather,
  ShieldCheck,
  Award,
  Landmark,
  BookOpen,
  Users,
  Home,
  PlaneTakeoff,
};

export default function ServicesPage() {
  const [filter, setFilter] = useState<string>("all");

  const filteredServices =
    filter === "all"
      ? ALL_SERVICES
      : ALL_SERVICES.filter((s) => s.category === filter);

  return (
    <div className="pt-28 pb-20">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="hero-card-gradient rounded-[36px] sm:rounded-[44px] p-8 sm:p-14 border border-white/80 shadow-md">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 text-[#0B1B3D] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#EAA412]" />
              End-to-End Solutions
            </div>
            <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-[#0B1B3D] tracking-tight">
              Our Comprehensive <br />
              <span className="text-[#55709B] font-editorial italic font-normal">Education & Career Services</span>
            </h1>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              From the moment you decide to study abroad to your flight landing and career placement, EDX provides verified, transparent, and personalized support.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-wrap items-center gap-3">
          {[
            { id: "all", label: "All 14+ Services" },
            { id: "study-abroad", label: "Study Abroad & Visas" },
            { id: "cv-career", label: "ATS CV & Career Services" },
            { id: "admissions", label: "Admissions & Scholarships" },
            { id: "test-prep", label: "Language Test Prep" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                filter === tab.id
                  ? "bg-[#0B1B3D] text-white shadow-md"
                  : "bg-white text-slate-600 border border-slate-200 hover:border-slate-400"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((srv) => {
            const IconComponent = iconMap[srv.iconName] || Compass;
            return (
              <div
                key={srv.id}
                id={srv.id}
                className="bg-white rounded-[30px] p-6 sm:p-7 shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#EBF1F8] text-[#0B1B3D] flex items-center justify-center font-bold">
                    <IconComponent className="w-6 h-6 text-[#0B1B3D]" />
                  </div>

                  <div>
                    <h3 className="font-heading font-bold text-xl text-[#0B1B3D] mb-2">
                      {srv.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                      {srv.fullDesc}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-100 space-y-2">
                    {srv.benefits.map((b, bIdx) => (
                      <div key={bIdx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6">
                  <a
                    href={`https://wa.me/919207926005?text=Hello%20EDX,%20I%20am%20inquiring%20about%20your%20service:%20${encodeURIComponent(srv.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#0B1B3D] hover:text-[#EAA412] transition-colors"
                  >
                    <span>Inquire About This Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom Lead Form */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <LeadForm
          title="Need Customized Counseling?"
          subtitle="Speak with an EDX advisor in Pathanapuram to design a customized service roadmap for your goals."
        />
      </section>
    </div>
  );
}
