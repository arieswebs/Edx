import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { COMPANY_INFO, POPULAR_DESTINATIONS } from "@/data/company";

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
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

export default function Footer() {
  return (
    <footer className="bg-[#071228] text-white pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Callout Box */}
        <div suppressHydrationWarning className="bg-gradient-to-r from-[#0F2042] to-[#162C5B] rounded-[28px] p-8 sm:p-12 mb-16 border border-white/10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5B324]/20 text-[#F5B324] text-xs font-bold uppercase tracking-wider mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              Empowering Aspirations Since 2020
            </div>
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-2">
              Ready to take the first step towards your global career?
            </h3>
            <p className="text-slate-300 text-sm sm:text-base">
              Speak directly with an overseas education advisor or have your CV audited by our ATS specialists today.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <a
              href={COMPANY_INFO.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              suppressHydrationWarning
              className="w-full sm:w-auto btn-gold-pill justify-center text-sm py-3 px-6"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Us: 9207926005</span>
            </a>
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors"
            >
              <span>Visit Kollam Office</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Main Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14 text-sm">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <div
                style={{ position: "relative" }}
                className="relative h-12 w-40 overflow-hidden bg-white/5 rounded-lg p-1"
              >
                <Image
                  src="/images/edx-logo.jpg"
                  alt="EDX Shaping Futures Logo"
                  fill
                  sizes="160px"
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-slate-300 leading-relaxed text-sm max-w-sm">
              EDX is a premier education consultancy and career acceleration hub. We specialize in international university admissions, study abroad visas, and high-impact ATS & Europass CV drafting.
            </p>

            <div className="pt-2 space-y-2.5 text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#F5B324] shrink-0 mt-1" />
                <span>{COMPANY_INFO.address.full}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#F5B324] shrink-0" />
                <a
                  href={`tel:${COMPANY_INFO.contact.rawPhone}`}
                  className="hover:text-white transition-colors"
                >
                  {COMPANY_INFO.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#F5B324] shrink-0" />
                <a
                  href={`mailto:${COMPANY_INFO.contact.email}`}
                  className="hover:text-white transition-colors"
                >
                  {COMPANY_INFO.contact.email}
                </a>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={COMPANY_INFO.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#F5B324] hover:text-[#0B1B3D] flex items-center justify-center transition-all"
                title="Follow EDX on Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-emerald-500 hover:text-white flex items-center justify-center transition-all"
                title="Chat on WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="text-white font-semibold font-heading text-base mb-4 tracking-wide">
              Top Destinations
            </h4>
            <ul className="space-y-2.5 text-slate-300">
              {POPULAR_DESTINATIONS.map((d) => (
                <li key={d.id}>
                  <Link
                    href={`/study-abroad#${d.id}`}
                    className="hover:text-[#F5B324] transition-colors flex items-center gap-2"
                  >
                    <span>{d.flag}</span>
                    <span>Study in {d.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold font-heading text-base mb-4 tracking-wide">
              Admissions & Visas
            </h4>
            <ul className="space-y-2.5 text-slate-300">
              <li>
                <Link href="/services#counselling" className="hover:text-[#F5B324] transition-colors">
                  Study Abroad Counselling
                </Link>
              </li>
              <li>
                <Link href="/services#universities" className="hover:text-[#F5B324] transition-colors">
                  University Shortlisting
                </Link>
              </li>
              <li>
                <Link href="/services#visas" className="hover:text-[#F5B324] transition-colors">
                  Student Visa Guidance
                </Link>
              </li>
              <li>
                <Link href="/services#scholarships" className="hover:text-[#F5B324] transition-colors">
                  Scholarships & Grants
                </Link>
              </li>
              <li>
                <Link href="/services#loans" className="hover:text-[#F5B324] transition-colors">
                  Education Loan Assistance
                </Link>
              </li>
              <li>
                <Link href="/services#accommodation" className="hover:text-[#F5B324] transition-colors">
                  Accommodation Support
                </Link>
              </li>
            </ul>
          </div>

          {/* CV & Test Prep */}
          <div>
            <h4 className="text-white font-semibold font-heading text-base mb-4 tracking-wide">
              CV & Test Prep
            </h4>
            <ul className="space-y-2.5 text-slate-300">
              <li>
                <Link href="/cv-writing" className="hover:text-[#F5B324] transition-colors flex items-center gap-1.5">
                  <span>ATS Resume Writing</span>
                  <span className="text-[10px] bg-[#F5B324] text-[#0B1B3D] font-bold px-1.5 py-0.2 rounded">
                    HOT
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/cv-writing#europass" className="hover:text-[#F5B324] transition-colors">
                  Europass CV Format
                </Link>
              </li>
              <li>
                <Link href="/cv-writing#cover-letter" className="hover:text-[#F5B324] transition-colors">
                  Cover Letter Writing
                </Link>
              </li>
              <li>
                <Link href="/cv-writing#sop-lor" className="hover:text-[#F5B324] transition-colors">
                  Academic SOP & LORs
                </Link>
              </li>
              <li>
                <Link href="/test-prep#ielts" className="hover:text-[#F5B324] transition-colors">
                  IELTS Coaching (7.5+ Band)
                </Link>
              </li>
              <li>
                <Link href="/test-prep#pte" className="hover:text-[#F5B324] transition-colors">
                  PTE Academic Preparation
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {COMPANY_INFO.foundedYear} - 2026 {COMPANY_INFO.legalName}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Pathanapuram, Kollam, Kerala</span>
            <span>•</span>
            <span className="text-[#F5B324] font-medium">Shaping futures</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
