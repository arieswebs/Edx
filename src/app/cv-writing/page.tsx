import Image from "next/image";
import Link from "next/link";
import {
  FileText,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ShieldCheck,
  Zap,
  Award,
  Sparkles,
  MessageCircle,
  HelpCircle,
} from "lucide-react";
import { CV_SERVICES, COMPANY_INFO } from "@/data/company";
import LeadForm from "@/components/LeadForm";

export const metadata = {
  title: "ATS CV & Europass CV Writing | EDX Shaping Futures",
  description:
    "Professional ATS-optimized CV writing, official Europass CV format, cover letter, and SOP/LOR drafting services by EDX Education Consultancy.",
};

export default function CVWritingPage() {
  return (
    <div className="pt-28 pb-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="hero-card-gradient rounded-[36px] sm:rounded-[44px] p-8 sm:p-14 border border-white/80 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 text-[#0B1B3D] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#EAA412]" />
                Executive & Academic Drafting Desk
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-[#0B1B3D] tracking-tight leading-tight">
                Transform Your Profile with <br />
                <span className="text-[#55709B] font-editorial italic font-normal">ATS & Europass CVs</span>
              </h1>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                Whether applying for top-tier master&apos;s degrees abroad or international jobs in Europe, the UK, or the Middle East, our certified resume strategists craft documents that beat automated algorithms and captivate recruiters.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href={`https://wa.me/919207926005?text=Hello%20EDX,%20I%20would%20like%20to%20get%20my%20CV%20rewritten.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold-pill text-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Order CV via WhatsApp</span>
                </a>
                <a
                  href="#packages"
                  className="btn-secondary-pill text-sm"
                >
                  <span>Explore Packages</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-[30px] overflow-hidden shadow-2xl border-4 border-white bg-white/50">
                <Image
                  src="/images/cv-3d-mockup.jpg"
                  alt="3D ATS Verified CV and Career Portfolio"
                  width={600}
                  height={450}
                  priority
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Difference: Standard vs ATS CV */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[#0B1B3D] tracking-tight">
            Why Standard Resumes Get Rejected
          </h2>
          <p className="text-slate-500 text-sm mt-2">
            Most applicants use fancy graphics or non-standard tables that Applicant Tracking Systems (ATS) cannot parse.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Common Resume Flaws */}
          <div className="bg-red-50/50 rounded-[32px] p-6 sm:p-8 border border-red-100">
            <div className="flex items-center gap-2.5 text-red-600 font-bold mb-4">
              <AlertTriangle className="w-5 h-5" />
              <span>Generic CV (75% Fail Rate)</span>
            </div>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">✕</span>
                <span>Complex tables, textboxes, and icons that confuse ATS parsers</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">✕</span>
                <span>Missing exact job description keywords and skill tags</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">✕</span>
                <span>Passive task descriptions instead of quantifiable impact metrics</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">✕</span>
                <span>Non-compliant formats rejected by European visa/university portals</span>
              </li>
            </ul>
          </div>

          {/* EDX ATS-Optimized CV */}
          <div className="bg-emerald-50/50 rounded-[32px] p-6 sm:p-8 border border-emerald-100">
            <div className="flex items-center gap-2.5 text-emerald-700 font-bold mb-4">
              <CheckCircle2 className="w-5 h-5" />
              <span>EDX ATS & Europass (95%+ Pass Rate)</span>
            </div>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">✓</span>
                <span>Clean, bot-parsable single/double column semantic structure</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">✓</span>
                <span>Targeted keyword insertion mapped to overseas job codes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">✓</span>
                <span>Official European Union Europass XML + verified PDF standards</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">✓</span>
                <span>Executive summary and achievement metrics designed for human recruiters</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section id="packages" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF1F8] text-[#0B1B3D] text-xs font-bold uppercase tracking-wider mb-2">
            <Zap className="w-3.5 h-3.5 text-[#EAA412]" />
            Transparent Pricing
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[#0B1B3D] tracking-tight">
            Select Your CV & Career Package
          </h2>
          <p className="text-slate-500 text-sm mt-2">
            Handcrafted by professional career writers with fast turnaround times and guaranteed revisions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CV_SERVICES.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-[30px] p-6 sm:p-7 border transition-all duration-300 flex flex-col justify-between ${
                pkg.isPopular
                  ? "bg-[#0B1B3D] text-white border-[#F5B324] shadow-2xl scale-102"
                  : "bg-white text-[#0B1B3D] border-slate-200 shadow-sm hover:shadow-xl"
              }`}
            >
              <div>
                {pkg.isPopular && (
                  <div className="inline-block bg-[#F5B324] text-[#0B1B3D] text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full mb-3">
                    Most Popular
                  </div>
                )}
                <h3 className="font-heading font-bold text-xl mb-1">
                  {pkg.name}
                </h3>
                <p className={`text-xs mb-4 min-h-[36px] ${pkg.isPopular ? "text-slate-300" : "text-slate-500"}`}>
                  {pkg.tagline}
                </p>

                <div className="py-4 border-y border-white/10 mb-6">
                  <div className="text-3xl font-heading font-extrabold tracking-tight">
                    {pkg.price}
                  </div>
                  <div className={`text-xs mt-1 ${pkg.isPopular ? "text-[#F5B324]" : "text-[#55709B]"} font-semibold`}>
                    Delivery: {pkg.deliveryTime}
                  </div>
                </div>

                <ul className="space-y-2.5 text-xs mb-6">
                  {pkg.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2">
                      <CheckCircle2
                        className={`w-4 h-4 shrink-0 mt-0.5 ${
                          pkg.isPopular ? "text-[#F5B324]" : "text-emerald-600"
                        }`}
                      />
                      <span className={pkg.isPopular ? "text-slate-200" : "text-slate-600"}>
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={`https://wa.me/919207926005?text=Hello%20EDX,%20I%20would%20like%20to%20order%20the%20${encodeURIComponent(pkg.name)}%20package`}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3 rounded-full text-center text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                  pkg.isPopular
                    ? "btn-gold-pill"
                    : "btn-primary-pill"
                }`}
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Order via WhatsApp</span>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Free CV Review Banner */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <LeadForm
          title="Get a Free ATS Score Check"
          subtitle="Submit your details below and our resume specialists will analyze your current CV against target job roles."
        />
      </section>
    </div>
  );
}
