"use client";

import { useState } from "react";
import { ArrowUpRight, CheckCircle2, Send, ShieldCheck, Sparkles } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export default function LeadForm({ title, subtitle }: { title?: string; subtitle?: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Study Abroad Admissions",
    destination: "United Kingdom",
    educationLevel: "Bachelor's Degree",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const message = encodeURIComponent(
      `Hello EDX! I am interested in a free profile evaluation.\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Email:* ${formData.email || "N/A"}\n` +
      `*Service:* ${formData.service}\n` +
      `*Target Country:* ${formData.destination}\n` +
      `*Current Education:* ${formData.educationLevel}`
    );

    setTimeout(() => {
      window.open(`https://wa.me/919207926005?text=${message}`, "_blank");
    }, 1000);
  };

  return (
    <div className="bg-white rounded-[32px] p-6 sm:p-10 shadow-xl border border-slate-100 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#F5B324]/10 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none" />

      {!submitted ? (
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBF1F8] text-[#0B1B3D] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#EAA412]" />
            Fast-Track Consultation
          </div>

          <h3 className="text-2xl sm:text-3xl font-heading font-bold text-[#0B1B3D] mb-2">
            {title || "Start Your Global Journey Today"}
          </h3>
          <p className="text-slate-500 text-sm mb-6">
            {subtitle || "Fill out the quick form below. Our Kerala counselor will review your profile and contact you within 2 hours."}
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                Your Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Ananya Pillai"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-2xl border border-slate-200 text-sm focus:outline-none focus:border-[#0B1B3D] focus:ring-2 focus:ring-[#0B1B3D]/10 transition-all bg-[#F8FAFD]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                  WhatsApp Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="9207926005"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl border border-slate-200 text-sm focus:outline-none focus:border-[#0B1B3D] focus:ring-2 focus:ring-[#0B1B3D]/10 transition-all bg-[#F8FAFD]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="student@gmail.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl border border-slate-200 text-sm focus:outline-none focus:border-[#0B1B3D] focus:ring-2 focus:ring-[#0B1B3D]/10 transition-all bg-[#F8FAFD]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                  Service of Interest
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl border border-slate-200 text-sm focus:outline-none focus:border-[#0B1B3D] bg-[#F8FAFD] transition-all"
                >
                  <option value="Study Abroad Admissions">Study Abroad Admissions</option>
                  <option value="ATS CV Writing & Polish">ATS CV Writing & Polish</option>
                  <option value="Europass CV Writing">Europass CV Writing</option>
                  <option value="IELTS / PTE / TOEFL Coaching">IELTS / PTE Coaching</option>
                  <option value="SOP & LOR Drafting">SOP & LOR Drafting</option>
                  <option value="Education Loan Guidance">Education Loan Guidance</option>
                  <option value="Visa Application & Mock">Visa Application & Mock</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                  Target Destination
                </label>
                <select
                  value={formData.destination}
                  onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl border border-slate-200 text-sm focus:outline-none focus:border-[#0B1B3D] bg-[#F8FAFD] transition-all"
                >
                  <option value="United Kingdom">United Kingdom (UK)</option>
                  <option value="Canada">Canada</option>
                  <option value="Australia">Australia</option>
                  <option value="United States">United States (USA)</option>
                  <option value="Germany">Germany</option>
                  <option value="Ireland">Ireland</option>
                  <option value="New Zealand">New Zealand</option>
                  <option value="European Union">European Union (General)</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full btn-primary-pill justify-center py-4 text-base font-semibold group mt-4 shadow-xl cursor-pointer"
            >
              <span>Get Free Profile Evaluation</span>
              <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </button>

            <div className="flex items-center justify-center gap-6 pt-3 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                100% Free Assessment
              </span>
              <span>•</span>
              <span>No Obligation</span>
              <span>•</span>
              <span>Instant WhatsApp Connect</span>
            </div>
          </form>
        </div>
      ) : (
        <div className="text-center py-10">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4 animate-bounce">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h3 className="text-2xl font-heading font-bold text-[#0B1B3D] mb-2">
            Assessment Booked!
          </h3>
          <p className="text-slate-600 text-sm max-w-md mx-auto mb-6">
            We have routed your details to our senior admissions counselor. You will now be redirected to WhatsApp to chat instantly with an EDX specialist.
          </p>
          <a
            href={COMPANY_INFO.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold-pill py-3 px-8 text-sm"
          >
            Chat with Counselor Now
          </a>
        </div>
      )}
    </div>
  );
}
