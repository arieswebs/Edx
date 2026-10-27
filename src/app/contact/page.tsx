"use client";

import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Clock,
  ChevronDown,
  Sparkles,
} from "lucide-react";
import { COMPANY_INFO, FAQS } from "@/data/company";
import LeadForm from "@/components/LeadForm";

function InstagramIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="pt-28 pb-20">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="hero-card-gradient rounded-[36px] sm:rounded-[44px] p-8 sm:p-14 border border-white/80 shadow-md">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 text-[#0B1B3D] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#EAA412]" />
              We Are Here to Guide You
            </div>
            <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-[#0B1B3D] tracking-tight">
              Get in Touch with <br />
              <span className="text-[#55709B] font-editorial italic font-normal">EDX Admissions Desk</span>
            </h1>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Visit our office in Pathanapuram, Kollam, or connect instantly with our team via WhatsApp and phone for immediate counseling.
            </p>
          </div>
        </div>
      </section>

      {/* Main Info & Lead Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Contact Details Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-[32px] p-8 border border-slate-100 shadow-sm space-y-6">
              <h2 className="text-2xl font-heading font-bold text-[#0B1B3D]">
                Office & Direct Connect
              </h2>

              <div className="space-y-5 text-sm">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#EBF1F8] text-[#0B1B3D] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#0B1B3D]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0B1B3D] mb-1">Office Address</h3>
                    <p className="text-slate-600 leading-relaxed text-xs sm:text-sm">
                      {COMPANY_INFO.address.full}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0B1B3D] mb-1">Phone & WhatsApp</h3>
                    <p className="text-slate-600 text-xs sm:text-sm">
                      <a
                        href={`tel:${COMPANY_INFO.contact.rawPhone}`}
                        className="hover:text-[#0B1B3D] font-semibold"
                      >
                        +91 {COMPANY_INFO.contact.rawPhone}
                      </a>
                    </p>
                    <a
                      href={COMPANY_INFO.contact.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-emerald-600 font-bold mt-1"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      Chat on WhatsApp Now
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0B1B3D] mb-1">Official Email</h3>
                    <p className="text-slate-600 text-xs sm:text-sm">
                      <a
                        href={`mailto:${COMPANY_INFO.contact.email}`}
                        className="hover:text-[#0B1B3D] font-semibold"
                      >
                        {COMPANY_INFO.contact.email}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0B1B3D] mb-1">Office Hours</h3>
                    <p className="text-slate-600 text-xs sm:text-sm">
                      Monday to Saturday: 9:30 AM - 6:00 PM <br />
                      Sunday: Closed (Online WhatsApp queries active)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-pink-50 text-pink-600 flex items-center justify-center shrink-0">
                    <InstagramIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0B1B3D] mb-1">Follow Our Journey</h3>
                    <a
                      href={COMPANY_INFO.contact.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-pink-600 font-bold hover:underline"
                    >
                      @edx.education on Instagram
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <LeadForm
              title="Send Us a Message"
              subtitle="Submit your query and our education counselors will get back to you with tailored advice."
            />
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold text-[#0B1B3D] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-500 text-sm mt-2">
            Clear answers about overseas admissions, ATS CV writing, and visa processes.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 font-heading font-bold text-[#0B1B3D] hover:text-[#55709B] transition-colors cursor-pointer"
                >
                  <span className="text-sm sm:text-base">{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "transform rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-50">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
