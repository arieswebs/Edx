import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  ShieldCheck,
  Award,
  Users,
  Target,
  Sparkles,
  MapPin,
  HeartHandshake,
  CheckCircle2,
} from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import LeadForm from "@/components/LeadForm";

export const metadata = {
  title: "About EDX | Shaping Futures Since 2020",
  description:
    "Learn about EDX Education Consultancy, founded in 2020 in Pathanapuram, Kollam. Our story, ethical values, and dedicated team empowering global careers.",
};

export default function AboutPage() {
  return (
    <div className="pt-28 pb-20">
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="hero-card-gradient rounded-[36px] sm:rounded-[44px] p-8 sm:p-14 border border-white/80 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 text-[#0B1B3D] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#EAA412]" />
                Founded in 2020 · Kollam, Kerala
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-[#0B1B3D] tracking-tight leading-tight">
                Shaping Futures, <br />
                <span className="text-[#55709B] font-editorial italic font-normal">One Student at a Time</span>
              </h1>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                Founded in 2020 in Pathanapuram, Kollam, EDX was established with a singular, unwavering mission: to provide Kerala&apos;s youth with honest, transparent, and world-class international education counseling and career acceleration.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-[32px] overflow-hidden shadow-2xl border-4 border-white bg-white">
                <Image
                  src="/images/hero-3d-student.jpg"
                  alt="3D Student Graduate Illustration"
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

      {/* Stats Counter Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="bg-[#0B1B3D] rounded-[32px] sm:rounded-[40px] p-8 sm:p-12 text-white shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {COMPANY_INFO.stats.map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-4xl sm:text-5xl font-heading font-extrabold text-[#F5B324] tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-slate-300 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Mission & Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-[30px] p-8 border border-slate-100 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#EBF1F8] text-[#0B1B3D] flex items-center justify-center font-bold">
              <Target className="w-6 h-6 text-[#0B1B3D]" />
            </div>
            <h3 className="font-heading font-bold text-2xl text-[#0B1B3D]">Our Mission</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              To eliminate misinformation in the overseas education industry by providing students and parents with data-backed, verified admission pathways and career-ready CV drafting.
            </p>
          </div>

          <div className="bg-white rounded-[30px] p-8 border border-slate-100 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#EBF1F8] text-[#0B1B3D] flex items-center justify-center font-bold">
              <ShieldCheck className="w-6 h-6 text-[#0B1B3D]" />
            </div>
            <h3 className="font-heading font-bold text-2xl text-[#0B1B3D]">Uncompromising Ethics</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              We never recommend non-accredited or low-quality colleges for quick commissions. Every student recommendation is vetted for post-study work visas, safety, and real job prospects.
            </p>
          </div>

          <div className="bg-white rounded-[30px] p-8 border border-slate-100 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#EBF1F8] text-[#0B1B3D] flex items-center justify-center font-bold">
              <HeartHandshake className="w-6 h-6 text-[#0B1B3D]" />
            </div>
            <h3 className="font-heading font-bold text-2xl text-[#0B1B3D]">End-to-End Care</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              From our office in Alexander Complex, Pathanapuram to student arrival in London, Toronto, or Sydney, our mentors stay in touch to ensure a seamless cultural and academic transition.
            </p>
          </div>
        </div>
      </section>

      {/* Head Office Spotlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="soft-card-gradient rounded-[36px] sm:rounded-[44px] p-8 sm:p-14 border border-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-[#0B1B3D] text-xs font-bold uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5 text-[#EAA412]" />
                Regional Headquarters
              </div>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[#0B1B3D]">
                Visit Us at Pathanapuram, Kollam
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Parents and students are always welcome to walk in for direct, face-to-face consultations. Our counseling desks are fully equipped with official university course catalogs, visa checklist portals, and language testing resources.
              </p>
              <div className="pt-2 text-sm font-semibold text-[#0B1B3D]">
                Address: {COMPANY_INFO.address.full}
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <a
                href={COMPANY_INFO.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-pill justify-center text-sm py-3"
              >
                Book Office Appointment
              </a>
              <a
                href={`tel:${COMPANY_INFO.contact.rawPhone}`}
                className="btn-secondary-pill justify-center text-sm py-3"
              >
                Call: {COMPANY_INFO.contact.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Booking */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <LeadForm
          title="Connect with Our Senior Mentors"
          subtitle="Get direct, unbiased advice on your overseas education journey."
        />
      </section>
    </div>
  );
}
