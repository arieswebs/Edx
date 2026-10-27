import Image from "next/image";
import Link from "next/link";
import {
  BookOpen,
  Headphones,
  FileSpreadsheet,
  Mic,
  CheckCircle2,
  Clock,
  Award,
  Users,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import LeadForm from "@/components/LeadForm";

export const metadata = {
  title: "IELTS, PTE & TOEFL Coaching | EDX Shaping Futures",
  description:
    "Master the IELTS, PTE, and TOEFL exams with certified trainers at EDX Pathanapuram. High band score strategies, mock tests, and personalized speaking practice.",
};

export default function TestPrepPage() {
  const tests = [
    {
      name: "IELTS Coaching",
      subtitle: "International English Language Testing System",
      target: "Band 7.5 - 8.5+",
      desc: "Recognized by universities and visa authorities across the UK, Canada, Australia, and New Zealand. Includes both Academic and General Training modules.",
      highlights: [
        "Daily one-on-one speaking mock drills",
        "Rigorous essay correction with band descriptors",
        "Official Cambridge test preparation materials",
        "Simulated full-length Saturday mock exams",
      ],
      badge: "Most Popular",
    },
    {
      name: "PTE Academic",
      subtitle: "Pearson Test of English",
      target: "Score 68 - 79+ (Band 8 Equivalent)",
      desc: "Fast, computer-delivered test with results typically in 48 hours. Widely accepted across Australia, the UK, and Canadian colleges.",
      highlights: [
        "AI-scored mock software matching official algorithms",
        "Templates for repeat sentence & write from dictation",
        "Fluency and pronunciation lab drills",
        "Fast-track 2-week and 4-week crash batches",
      ],
      badge: "Fast Results",
    },
    {
      name: "TOEFL iBT",
      subtitle: "Test of English as a Foreign Language",
      target: "Score 100+ / 120",
      desc: "Preferred standard across Ivy League and top US universities, research institutions, and international scholarships.",
      highlights: [
        "ETS official test simulator software",
        "Integrated speaking and writing templates",
        "Academic reading passage comprehension techniques",
        "Sectional time-management mastery",
      ],
    },
  ];

  const modules = [
    {
      name: "Listening",
      icon: Headphones,
      desc: "Learn note-taking, accent decoding (British, American, Australian), and question prediction techniques.",
    },
    {
      name: "Reading",
      icon: BookOpen,
      desc: "Master skimming, scanning, speed-reading, and identifying True/False/Not Given traps.",
    },
    {
      name: "Writing",
      icon: FileSpreadsheet,
      desc: "Structure Task 1 reports/letters and Task 2 academic essays with high-scoring vocabulary and cohesion.",
    },
    {
      name: "Speaking",
      icon: Mic,
      desc: "Daily interactive conversations to overcome hesitation, build natural fluency, and expand lexical resource.",
    },
  ];

  return (
    <div className="pt-28 pb-20">
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="hero-card-gradient rounded-[36px] sm:rounded-[44px] p-8 sm:p-14 border border-white/80 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 text-[#0B1B3D] text-xs font-bold uppercase tracking-wider">
                <Award className="w-3.5 h-3.5 text-[#EAA412]" />
                Language & Aptitude Excellence
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-[#0B1B3D] tracking-tight leading-tight">
                Unlock Global Admissions with <br />
                <span className="text-[#55709B] font-editorial italic font-normal">Top Band Scores</span>
              </h1>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                Whether you need a 7.5 in IELTS for a UK master&apos;s or a 68+ in PTE for Australia, EDX&apos;s certified coaching desk provides the individual attention and authentic practice you need to succeed on your first attempt.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href={`https://wa.me/919207926005?text=Hello%20EDX,%20I%20would%20like%20to%20enroll%20in%20IELTS/PTE%20coaching.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold-pill text-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Join Next Batch</span>
                </a>
                <a
                  href="#modules"
                  className="btn-secondary-pill text-sm"
                >
                  <span>Explore Modules</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-[30px] overflow-hidden shadow-2xl border-4 border-white bg-white/50">
                <Image
                  src="/images/testprep-3d-asset.jpg"
                  alt="3D IELTS Exam Result Certificate"
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

      {/* Tests Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[#0B1B3D] tracking-tight">
            Our Test Coaching Programs
          </h2>
          <p className="text-slate-500 text-sm mt-2">
            Structured curricula with flexible weekday and weekend timings for college students and working professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tests.map((test, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[32px] p-6 sm:p-8 shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-heading font-bold text-2xl text-[#0B1B3D]">
                    {test.name}
                  </h3>
                  {test.badge && (
                    <span className="text-[10px] bg-[#F5B324] text-[#0B1B3D] font-extrabold uppercase px-2.5 py-1 rounded-full">
                      {test.badge}
                    </span>
                  )}
                </div>
                <p className="text-xs text-[#55709B] font-semibold mb-3">{test.subtitle}</p>

                <div className="p-3 rounded-2xl bg-[#F8FAFD] border border-slate-100 text-xs font-bold text-[#0B1B3D] mb-4">
                  Target: {test.target}
                </div>

                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  {test.desc}
                </p>

                <div className="space-y-2.5 text-xs text-slate-700 mb-6">
                  {test.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href={`https://wa.me/919207926005?text=Hello%20EDX,%20I%20am%20inquiring%20about%20${encodeURIComponent(test.name)}%20batches.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full btn-primary-pill text-xs justify-center py-3"
              >
                <span>Enroll in {test.name}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* 4 Modules */}
      <section id="modules" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="soft-card-gradient rounded-[36px] sm:rounded-[44px] p-8 sm:p-14 border border-white">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[#0B1B3D] tracking-tight">
              Comprehensive 4-Skill Mastery
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Every student receives focused training across all language parameters evaluated by examiners.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {modules.map((m, mIdx) => {
              const IconComp = m.icon;
              return (
                <div
                  key={mIdx}
                  className="bg-white rounded-[26px] p-6 shadow-sm border border-slate-100 space-y-3"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#EBF1F8] text-[#0B1B3D] flex items-center justify-center font-bold">
                    <IconComp className="w-6 h-6 text-[#0B1B3D]" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-[#0B1B3D]">
                    {m.name} Module
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom Booking */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <LeadForm
          title="Book a Free Diagnostic Test"
          subtitle="Take a complimentary assessment test with our instructors in Pathanapuram to evaluate your current band score baseline."
        />
      </section>
    </div>
  );
}
