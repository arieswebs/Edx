"use client";

import { useState, useEffect } from "react";
import { X, CheckCircle2, MessageCircle, Send, Sparkles } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export default function ConsultationModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Study Abroad Counselling",
    destination: "United Kingdom",
    notes: "",
  });

  useEffect(() => {
    const handleOpen = () => {
      setIsSubmitted(false);
      setIsOpen(true);
    };
    window.addEventListener("open-consultation-modal", handleOpen);
    return () => window.removeEventListener("open-consultation-modal", handleOpen);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    // Also trigger WhatsApp redirect with the user data
    const message = encodeURIComponent(
      `Hello EDX! I would like to book a free consultation.\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Email:* ${formData.email || "Not specified"}\n` +
      `*Service Required:* ${formData.service}\n` +
      `*Destination/Target:* ${formData.destination}\n` +
      `*Details:* ${formData.notes || "None"}`
    );

    setTimeout(() => {
      window.open(`https://wa.me/919207926005?text=${message}`, "_blank");
    }, 1200);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B1B3D]/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-[32px] p-6 sm:p-8 shadow-2xl border border-slate-100 overflow-hidden">
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5B324]/20 text-[#0B1B3D] text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#EAA412]" />
              Direct Expert Advisory
            </div>
            <h3 className="text-2xl font-heading font-bold text-[#0B1B3D] mb-1">
              Book Your Free Consultation
            </h3>
            <p className="text-slate-500 text-sm mb-6">
              Connect with senior study abroad advisors and certified ATS CV specialists at EDX Pathanapuram.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#0B1B3D] focus:ring-1 focus:ring-[#0B1B3D] transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                    WhatsApp / Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 9207926005"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#0B1B3D] focus:ring-1 focus:ring-[#0B1B3D] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="student@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#0B1B3D] focus:ring-1 focus:ring-[#0B1B3D] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                    Service Required
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#0B1B3D] bg-white transition-colors"
                  >
                    <option value="Study Abroad Counselling">Study Abroad Counselling</option>
                    <option value="ATS CV Writing">ATS CV Writing</option>
                    <option value="Europass CV Writing">Europass CV Writing</option>
                    <option value="SOP & LOR Assistance">SOP & LOR Assistance</option>
                    <option value="IELTS / PTE Coaching">IELTS / PTE Coaching</option>
                    <option value="Visa Guidance">Visa Guidance</option>
                    <option value="Education Loan Assistance">Education Loan Assistance</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                    Target Country
                  </label>
                  <select
                    value={formData.destination}
                    onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#0B1B3D] bg-white transition-colors"
                  >
                    <option value="United Kingdom">United Kingdom (UK)</option>
                    <option value="Canada">Canada</option>
                    <option value="Australia">Australia</option>
                    <option value="United States">United States (USA)</option>
                    <option value="Germany">Germany</option>
                    <option value="Ireland">Ireland</option>
                    <option value="New Zealand">New Zealand</option>
                    <option value="Other / Europe">Other / Europe</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                  Brief Note or Question (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Planning for Masters in Fall 2026 intake..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#0B1B3D] transition-colors resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full btn-primary-pill justify-center py-3 text-base shadow-lg cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit & Connect on WhatsApp</span>
                </button>
              </div>

              <p className="text-center text-[11px] text-slate-600">
                🔒 Your privacy is 100% guaranteed. No spam, ever.
              </p>
            </form>
          </div>
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4 animate-bounce">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h3 className="text-2xl font-heading font-bold text-[#0B1B3D] mb-2">
              Request Received!
            </h3>
            <p className="text-slate-600 text-sm max-w-sm mx-auto mb-6">
              Thank you, <span className="font-semibold text-[#0B1B3D]">{formData.name}</span>. We are opening WhatsApp now to connect you directly with your assigned EDX advisor.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={COMPANY_INFO.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold-pill text-sm py-2.5 px-6"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Open WhatsApp Now</span>
              </a>
              <button
                onClick={() => setIsOpen(false)}
                className="btn-secondary-pill text-sm py-2.5 px-6 cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
