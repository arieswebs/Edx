export interface Destination {
  id: string;
  name: string;
  code: string;
  flag: string;
  title: string;
  description: string;
  image: string;
  topUniversities: string[];
  popularCourses: string[];
  intakes: string[];
  stayBackPeriod: string;
  averageTuition: string;
  featuredBadge?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  benefits: string[];
  category: "study-abroad" | "cv-career" | "test-prep" | "admissions";
}

export interface CVPackage {
  id: string;
  name: string;
  tagline: string;
  price: string;
  deliveryTime: string;
  features: string[];
  isPopular?: boolean;
  format: string;
}

export const COMPANY_INFO = {
  name: "EDX",
  legalName: "EDX Education Consultancy",
  tagline: "Shaping futures",
  about:
    "Established in 2020, EDX is Kerala's premier international education and career consultancy based in Pathanapuram, Kollam. We empower ambitious students and professionals with world-class study abroad admissions, visa processing, IELTS/PTE coaching, and industry-standard ATS & Europass CV drafting services.",
  foundedYear: 2020,
  address: {
    line1: "Alexander Complex, Kallumkadavu PO",
    city: "Pathanapuram",
    district: "Kollam",
    state: "Kerala",
    country: "India",
    pinCode: "689695",
    full: "Alexander Complex, Kallumkadavu PO, Pathanapuram, Kollam, Kerala - 689695",
  },
  contact: {
    phone: "+91 9207926005",
    rawPhone: "9207926005",
    whatsapp: "9207926005",
    whatsappUrl: "https://wa.me/919207926005?text=Hello%20EDX,%20I%20would%20like%20to%20know%20more%20about%20your%20services.",
    email: "edx.eduworld@gmail.com",
    instagram: "https://www.instagram.com/edx.education?srtk=OWJubm50d25nNXNh",
  },
  stats: [
    { label: "Years of Excellence", value: "5+" },
    { label: "Students Placed", value: "2,500+" },
    { label: "Partner Universities", value: "150+" },
    { label: "Visa Success Rate", value: "98%" },
  ],
};

export const POPULAR_DESTINATIONS: Destination[] = [
  {
    id: "uk",
    name: "United Kingdom",
    code: "UK",
    flag: "🇬🇧",
    title: "World-class universities & global exposure",
    description: "Home to Oxford, Cambridge, and world-ranking Russell Group universities with 2-year post-study work rights.",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80",
    topUniversities: ["University of Oxford", "Imperial College London", "University of Manchester", "University of Leeds"],
    popularCourses: ["Business & Management", "Computer Science & AI", "Data Analytics", "Biomedical Sciences"],
    intakes: ["September / October (Major)", "January / February"],
    stayBackPeriod: "2 Years Graduate Visa",
    averageTuition: "£13,000 - £26,000 / year",
    featuredBadge: "Most In-Demand",
  },
  {
    id: "usa",
    name: "United States",
    code: "USA",
    flag: "🇺🇸",
    title: "Top-ranked institutions & career opportunities",
    description: "Unmatched research funding, Fortune 500 internships, and 3-year STEM OPT work authorizations.",
    image: "https://images.unsplash.com/photo-1534430480872-3498386e7856?auto=format&fit=crop&w=800&q=80",
    topUniversities: ["MIT", "Stanford", "Columbia University", "Northeastern University"],
    popularCourses: ["Computer Science", "Finance & FinTech", "Mechanical Engineering", "Biotechnology"],
    intakes: ["Fall (August/Sept)", "Spring (January)", "Summer (May)"],
    stayBackPeriod: "1 Year OPT + 2 Years STEM Extension (Total 3 Years)",
    averageTuition: "$22,000 - $48,000 / year",
  },
  {
    id: "canada",
    name: "Canada",
    code: "Canada",
    flag: "🇨🇦",
    title: "High-quality education & easier pathways",
    description: "Welcoming immigration policies, affordable tuition, and up to 3 years of post-graduation work permit (PGWP).",
    image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=800&q=80",
    topUniversities: ["University of Toronto", "UBC", "McGill University", "University of Waterloo"],
    popularCourses: ["Information Technology", "Cloud Computing", "Supply Chain Management", "Healthcare"],
    intakes: ["Fall (September)", "Winter (January)", "Spring/Summer (May)"],
    stayBackPeriod: "Up to 3 Years PGWP",
    averageTuition: "CAD $16,000 - $32,000 / year",
  },
  {
    id: "australia",
    name: "Australia",
    code: "Australia",
    flag: "🇦🇺",
    title: "Vibrant lifestyle & strong job prospects",
    description: "Top 8 Group of Eight institutions, exceptional student support, and high part-time earning potential.",
    image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=800&q=80",
    topUniversities: ["University of Melbourne", "UNSW Sydney", "Monash University", "University of Queensland"],
    popularCourses: ["Nursing & Public Health", "Information Systems", "Accounting & Finance", "Engineering"],
    intakes: ["Semester 1 (Feb/March)", "Semester 2 (July/August)", "Trimester (Nov)"],
    stayBackPeriod: "2 to 4 Years Post-Study Work Stream",
    averageTuition: "AUD $24,000 - $42,000 / year",
  },
  {
    id: "germany",
    name: "Germany",
    code: "Germany",
    flag: "🇩🇪",
    title: "Zero or low tuition & industrial innovation",
    description: "World-class engineering hubs, tuition-free public universities, and strong post-study EU residence permits.",
    image: "https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&w=800&q=80",
    topUniversities: ["TU Munich", "Heidelberg University", "RWTH Aachen", "TU Berlin"],
    popularCourses: ["Automotive Engineering", "Data Science", "Renewable Energy", "Robotics"],
    intakes: ["Winter (September/October)", "Summer (March/April)"],
    stayBackPeriod: "18 Months Post-Study Job Seeker Visa",
    averageTuition: "€0 - €3,000 / year (Public Universities)",
  },
  {
    id: "ireland",
    name: "Ireland",
    code: "Ireland",
    flag: "🇮🇪",
    title: "Silicon Valley of Europe & vibrant culture",
    description: "English-speaking European tech and pharma capital with 2-year stay back for masters graduates.",
    image: "https://images.unsplash.com/photo-1549918864-48ac978761a4?auto=format&fit=crop&w=800&q=80",
    topUniversities: ["Trinity College Dublin", "UCD", "University of Galway", "Dublin City University"],
    popularCourses: ["Software Engineering", "Pharmaceutical Sciences", "Cybersecurity", "FinTech"],
    intakes: ["Autumn (September)", "Spring (January)"],
    stayBackPeriod: "2 Years Third Level Graduate Scheme",
    averageTuition: "€12,000 - €22,000 / year",
  },
];

export const CV_SERVICES: CVPackage[] = [
  {
    id: "ats-pro",
    name: "ATS-Optimized Professional CV",
    tagline: "Designed to pass automated screening bots and impress hiring managers worldwide.",
    price: "₹1,499",
    deliveryTime: "24 - 48 Hours",
    format: "ATS-Friendly PDF & Editable Word Doc",
    isPopular: true,
    features: [
      "Targeted industry keyword optimization",
      "Clean single/double column recruiter-friendly layout",
      "Executive professional summary rewrite",
      "Achievement-oriented metrics & bullet points",
      "Applicant Tracking System (ATS) score test report",
      "Free revisions for 14 days",
    ],
  },
  {
    id: "europass-official",
    name: "Official Europass CV & Dossier",
    tagline: "Fully compliant with European Union commission standards for EU universities & jobs.",
    price: "₹1,999",
    deliveryTime: "48 Hours",
    format: "Official Europass XML & Verified PDF",
    features: [
      "Official European Commission framework formatting",
      "CEFR Language proficiency grading matrix",
      "Digital competence & cross-border skill mapping",
      "Ideal for Germany, Netherlands, Ireland & France",
      "Includes Europass-compliant cover letter template",
      "Direct guidance on European job portals (EURES)",
    ],
  },
  {
    id: "academic-sop-lor",
    name: "Ivy-Grade SOP & LOR Package",
    tagline: "Compelling academic narratives that win university admissions & scholarships.",
    price: "₹2,499",
    deliveryTime: "48 - 72 Hours",
    format: "Print-Ready Academic PDF & Editable Docs",
    features: [
      "Custom Statement of Purpose (SOP) tailored to your dream university",
      "2 Academic / Professional Letters of Recommendation (LOR)",
      "Compelling personal motivation & career trajectory narrative",
      "Zero plagiarism & AI-detection guarantee",
      "Review by experienced overseas admission strategists",
    ],
  },
  {
    id: "all-in-one-career",
    name: "All-in-One Global Career Kit",
    tagline: "Complete toolkit for international job seekers and master's applicants.",
    price: "₹3,499",
    deliveryTime: "3 - 4 Days",
    format: "Full Suite (ATS CV + Europass + Cover Letter + LinkedIn)",
    features: [
      "Custom ATS Resume + Europass CV version",
      "Targeted job/visa specific cover letter",
      "Complete LinkedIn profile optimization audit",
      "Interview prep cheat-sheet for international recruiters",
      "Priority 24/7 WhatsApp support & 30 days revisions",
    ],
  },
];

export const ALL_SERVICES: ServiceItem[] = [
  {
    id: "study-abroad-counselling",
    title: "Study Abroad Counselling",
    shortDesc: "One-on-one expert mentoring to identify your academic goals, budget, and long-term career aspirations.",
    fullDesc: "Our seasoned mentors evaluate your academic background, test scores, financial profile, and career goals to map out the ideal international study trajectory.",
    iconName: "Compass",
    benefits: ["Personal profile evaluation", "Budget & ROI planning", "Post-study work trajectory mapping"],
    category: "study-abroad",
  },
  {
    id: "country-course-selection",
    title: "Country & Course Selection",
    shortDesc: "Data-driven matching with global job markets, immigration policies, and university rankings.",
    fullDesc: "We analyze high-demand skill lists across the UK, USA, Canada, Germany, Australia, and Europe to select courses with the highest post-graduation employment rates.",
    iconName: "Globe",
    benefits: ["Stay-back visa comparison", "Skill shortage occupation matching", "Tuition affordability analysis"],
    category: "study-abroad",
  },
  {
    id: "university-selection",
    title: "University Selection & Shortlisting",
    shortDesc: "Curated shortlist across Dream, Target, and Safe institutions to maximize acceptance chances.",
    fullDesc: "We partner directly with leading universities worldwide to deliver verified entry requirements, fee structures, and application fee waivers.",
    iconName: "GraduationCap",
    benefits: ["Partner university fee waivers", "Acceptance rate benchmarking", "Campus life & safety insights"],
    category: "study-abroad",
  },
  {
    id: "admission-assistance",
    title: "Admission Assistance & Documentation",
    shortDesc: "End-to-end management of university portals, application submissions, and offer letter tracking.",
    fullDesc: "From preparing transcript packages to tracking conditional and unconditional offer letters, our admissions desk handles the complete paperwork.",
    iconName: "CheckCircle",
    benefits: ["Error-free portal submissions", "Fast-track offer letters", "Direct communication with university admissions"],
    category: "admissions",
  },
  {
    id: "ats-cv-europass",
    title: "ATS CV & Europass CV Writing",
    shortDesc: "International resume drafting optimized to beat applicant tracking bots and secure interview calls.",
    fullDesc: "Specially engineered resumes for global university admissions and international job markets in the EU, UK, Middle East, and North America.",
    iconName: "FileText",
    benefits: ["95%+ ATS parsing rate", "Official Europass EU format", "Targeted keyword injection"],
    category: "cv-career",
  },
  {
    id: "sop-lor-assistance",
    title: "SOP & LOR Assistance",
    shortDesc: "Compelling Statement of Purpose and Letters of Recommendation written by academic specialists.",
    fullDesc: "We craft persuasive personal narratives that highlight your unique intellectual journey, achievements, and future ambitions without clichés.",
    iconName: "Feather",
    benefits: ["100% original & plagiarism free", "Tailored to university ethos", "Reflects genuine student voice"],
    category: "cv-career",
  },
  {
    id: "visa-guidance",
    title: "Visa Guidance & Mock Interviews",
    shortDesc: "Meticulous documentation and rigorous mock interviews leading to our 98% visa success rate.",
    fullDesc: "Comprehensive financial vetting, statement of funds analysis, appointment booking, and simulated visa officer interview preparation.",
    iconName: "ShieldCheck",
    benefits: ["Step-by-step document checklist", "Financial proof vetting", "Realistic mock interview drills"],
    category: "study-abroad",
  },
  {
    id: "scholarship-assistance",
    title: "Scholarship Assistance",
    shortDesc: "Discovering merit-based, need-based, and governmental scholarships to slash tuition costs.",
    fullDesc: "We actively match student profiles with institutional awards, country bursaries, and commonwealth grants to make overseas education affordable.",
    iconName: "Award",
    benefits: ["Full & partial tuition grants", "Scholarship essay editing", "Early application advantage"],
    category: "admissions",
  },
  {
    id: "education-loan-assistance",
    title: "Education Loan Assistance",
    shortDesc: "Hassle-free student loan sanctioning through leading nationalized, private, and NBFC lenders.",
    fullDesc: "We facilitate both collateral and non-collateral education loans with competitive interest rates, fast approvals, and pre-visa sanction letters.",
    iconName: "Landmark",
    benefits: ["Collateral & non-collateral options", "Pre-visa loan sanction", "Subsidized interest rate matching"],
    category: "study-abroad",
  },
  {
    id: "ielts-pte-toefl-coaching",
    title: "IELTS / PTE / TOEFL Coaching",
    shortDesc: "Results-driven language training with certified instructors and mock tests for top band scores.",
    fullDesc: "Interactive masterclasses, personalized feedback on writing and speaking modules, and simulated test interfaces to achieve 7.5+ IELTS or 68+ PTE.",
    iconName: "BookOpen",
    benefits: ["Certified test trainers", "Daily speaking practice drills", "Comprehensive study kits & mocks"],
    category: "test-prep",
  },
  {
    id: "interview-preparation",
    title: "University & Job Interview Preparation",
    shortDesc: "One-on-one coaching to master admission interviews, credibility interviews, and HR screens.",
    fullDesc: "Learn confident body language, articulate career objectives, and answer challenging behavioral questions with structured frameworks.",
    iconName: "Users",
    benefits: ["Credibility interview drills", "STAR response framework", "Audio/video feedback analysis"],
    category: "cv-career",
  },
  {
    id: "accommodation-assistance",
    title: "Accommodation Assistance",
    shortDesc: "Securing safe, comfortable, and affordable student housing near your university campus.",
    fullDesc: "From on-campus university halls to verified private student apartments (PBSA) and shared student flats, we ensure a warm home away from home.",
    iconName: "Home",
    benefits: ["Verified safe student residences", "Near-campus transit options", "Lease agreement review"],
    category: "study-abroad",
  },
  {
    id: "pre-departure-guidance",
    title: "Pre-Departure & Forex Guidance",
    shortDesc: "Briefings on packing, student banking, international SIM cards, airport pickup, and culture.",
    fullDesc: "Everything you need to step off the plane with confidence: foreign exchange cards, health insurance coverage, winter gear advice, and alumni networking.",
    iconName: "PlaneTakeoff",
    benefits: ["Student forex cards & banking", "Luggage & packing checklist", "Local alumni community connect"],
    category: "study-abroad",
  },
];

export const HOW_WE_WORK_STEPS = [
  {
    step: "01",
    title: "Free Consultation",
    desc: "Understand your goals, academic background, and budget to help you choose the right destination, course, or CV strategy.",
    iconName: "MessageSquare",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Student counselor in friendly consultation session",
  },
  {
    step: "02",
    title: "University & Course Shortlisting",
    desc: "Get a curated list of universities and programs that perfectly match your profile, career ambitions, and budget requirements.",
    iconName: "Search",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Students reviewing university brochures and maps",
  },
  {
    step: "03",
    title: "Application & Documentation Support",
    desc: "We assist with professional SOP/LOR writing, ATS CV polishing, portal submissions, and scholarship applications.",
    iconName: "FileCheck",
    image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Preparing official admission documentation with precision",
  },
  {
    step: "04",
    title: "Visa & Pre-Departure",
    desc: "Complete guidance for visa filing, financial vetting, mock interviews, accommodation booking, and flight departures.",
    iconName: "Plane",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Airplane wing soaring above clouds towards new horizon",
  },
];

export const TESTIMONIALS = [
  {
    name: "Arjun Nair",
    destination: "University of Leeds, UK",
    course: "MSc Data Science",
    text: "EDX Pathanapuram handled everything from university shortlisting to my UK student visa with zero stress. Their ATS CV and SOP writing team made my profile stand out among hundreds of applicants!",
    year: "2024",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Sneha Mathew",
    destination: "Fanshawe College, Canada",
    course: "PG Diploma in Healthcare Administration",
    text: "The team at EDX is honest and extremely transparent. They guided me through financial documentation and visa interview prep. Got my Canada study permit approved within 3 weeks!",
    year: "2023",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Rohan Thomas",
    destination: "TU Munich, Germany",
    course: "MSc Automotive Engineering",
    text: "Their Europass CV and German admission guidance were spot on. I didn't think I could get into a tuition-free public university in Germany, but EDX made it happen.",
    year: "2024",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
  },
];

export const FAQS = [
  {
    question: "Why should I choose EDX for overseas education?",
    answer: "EDX has been shaping futures since 2020 with personalized end-to-end guidance. We do not offer one-size-fits-all advice; we analyze your specific grades, budget, and immigration goals, delivering a 98% visa approval rate and direct partnerships with 150+ institutions.",
  },
  {
    question: "What is an ATS CV and why do I need one?",
    answer: "Most global universities, multinational companies, and foreign employers use Applicant Tracking Systems (ATS) to filter resumes before a human ever sees them. An ATS-compliant CV uses standardized headings, specific keyword density, and clean formatting to guarantee your application passes automated filters with a 95%+ score.",
  },
  {
    question: "Do you offer Europass CV formatting for European applications?",
    answer: "Yes! Europass is the standard CV format recognized across 30+ European nations, particularly essential for universities and employers in Germany, Netherlands, France, and Ireland. We create fully compliant Europass XML and verified PDF profiles.",
  },
  {
    question: "Can I get scholarships for studying abroad?",
    answer: "Absolutely. Our counselors actively track university merit awards, early-bird bursaries, and governmental grants that can reduce your tuition fees by 20% to 100%. We also help you write winning scholarship essays.",
  },
  {
    question: "Where is EDX located and how can I meet the team?",
    answer: "Our main office is located at Alexander Complex, Kallumkadavu PO, Pathanapuram, Kollam, Kerala. You can walk in for a face-to-face consultation, or book an online video counseling session via WhatsApp at 9207926005.",
  },
];
