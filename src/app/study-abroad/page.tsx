import Image from "next/image";
import Link from "next/link";
import {
  GraduationCap,
  Calendar,
  Clock,
  DollarSign,
  ArrowUpRight,
  CheckCircle2,
  BookOpen,
  Building,
  Globe2,
} from "lucide-react";
import { POPULAR_DESTINATIONS, COMPANY_INFO } from "@/data/company";
import LeadForm from "@/components/LeadForm";

export const metadata = {
  title: "Study Abroad Destinations | EDX Shaping Futures",
  description:
    "Explore top study destinations including the UK, USA, Canada, Australia, Germany, and Ireland. University admissions, eligibility, and visa guidance by EDX.",
};

export default function StudyAbroadPage() {
  return (
    <div className="pt-28 pb-20">
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="hero-card-gradient rounded-[36px] sm:rounded-[44px] p-8 sm:p-14 border border-white/80 shadow-md">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 text-[#0B1B3D] text-xs font-bold uppercase tracking-wider">
              <Globe2 className="w-3.5 h-3.5 text-[#EAA412]" />
              Global Destinations Guide
            </div>
            <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-[#0B1B3D] tracking-tight">
              Explore Your Ideal <br />
              <span className="text-[#55709B] font-editorial italic font-normal">Study Destination</span>
            </h1>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Discover top universities, post-study work visa rights, intake timelines, and course fees across the world&apos;s leading education hubs.
            </p>
          </div>
        </div>
      </section>

      {/* Destinations List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="space-y-12">
          {POPULAR_DESTINATIONS.map((dest, index) => (
            <div
              key={dest.id}
              id={dest.id}
              className="bg-white rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                {/* Photo Column */}
                <div className={`lg:col-span-5 ${index % 2 === 1 ? "lg:order-2" : "lg:order-1"}`}>
                  <div
                    style={{ position: "relative" }}
                    className="relative w-full aspect-[4/3.8] rounded-[26px] overflow-hidden bg-slate-100 shadow-md"
                  >
                    <Image
                      src={dest.image}
                      alt={dest.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4 glass-pill px-3 py-1.5 rounded-xl flex items-center gap-2">
                      <span className="text-xl">{dest.flag}</span>
                      <span className="text-xs font-bold text-[#0B1B3D]">{dest.name}</span>
                    </div>
                  </div>
                </div>

                {/* Info Column */}
                <div className={`lg:col-span-7 ${index % 2 === 1 ? "lg:order-1" : "lg:order-2"} space-y-6`}>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">{dest.flag}</span>
                      <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#0B1B3D]">
                        Study in {dest.name}
                      </h2>
                    </div>
                    <p className="text-[#55709B] font-semibold text-sm sm:text-base">
                      {dest.title}
                    </p>
                    <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                      {dest.description}
                    </p>
                  </div>

                  {/* Key Highlights Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div className="p-3.5 rounded-2xl bg-[#F8FAFD] border border-slate-100 space-y-1">
                      <div className="flex items-center gap-1.5 text-slate-500 font-semibold">
                        <Clock className="w-3.5 h-3.5 text-[#0B1B3D]" />
                        <span>Post-Study Work Rights</span>
                      </div>
                      <div className="font-bold text-[#0B1B3D] text-sm">{dest.stayBackPeriod}</div>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-[#F8FAFD] border border-slate-100 space-y-1">
                      <div className="flex items-center gap-1.5 text-slate-500 font-semibold">
                        <Calendar className="w-3.5 h-3.5 text-[#0B1B3D]" />
                        <span>Major Intakes</span>
                      </div>
                      <div className="font-bold text-[#0B1B3D] text-sm">{dest.intakes.join(" · ")}</div>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-[#F8FAFD] border border-slate-100 space-y-1">
                      <div className="flex items-center gap-1.5 text-slate-500 font-semibold">
                        <DollarSign className="w-3.5 h-3.5 text-[#0B1B3D]" />
                        <span>Average Tuition</span>
                      </div>
                      <div className="font-bold text-[#0B1B3D] text-sm">{dest.averageTuition}</div>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-[#F8FAFD] border border-slate-100 space-y-1">
                      <div className="flex items-center gap-1.5 text-slate-500 font-semibold">
                        <BookOpen className="w-3.5 h-3.5 text-[#0B1B3D]" />
                        <span>Popular Fields</span>
                      </div>
                      <div className="font-bold text-[#0B1B3D] text-sm truncate">
                        {dest.popularCourses.slice(0, 2).join(", ")}
                      </div>
                    </div>
                  </div>

                  {/* Top Partner Universities */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                      Representative Universities
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {dest.topUniversities.map((uni, uIdx) => (
                        <span
                          key={uIdx}
                          className="px-3 py-1 rounded-full bg-[#EBF1F8] text-[#0B1B3D] text-xs font-semibold"
                        >
                          {uni}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action CTA */}
                  <div className="pt-2 flex items-center gap-4">
                    <a
                      href={`https://wa.me/919207926005?text=Hello%20EDX,%20I%20am%20interested%20in%20studying%20in%20${encodeURIComponent(dest.name)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary-pill text-xs py-2.5 px-5"
                    >
                      <span>Apply for {dest.name}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Lead Form Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <LeadForm
          title="Get a Free Country & Course Shortlist"
          subtitle="Our counselors in Pathanapuram will match your marks, backlogs, and budget with official eligibility criteria."
        />
      </section>
    </div>
  );
}
