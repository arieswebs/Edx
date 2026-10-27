import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Bricolage_Grotesque, Instrument_Serif, Caveat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ConsultationModal from "@/components/ConsultationModal";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://edxeducation.com"),
  title: "EDX | Shaping Futures - Study Abroad & ATS CV Writing",
  description:
    "Official website of EDX. Premier education consultancy, overseas university admissions, ATS CV writing, Europass CV, IELTS coaching, visa & scholarship guidance in Pathanapuram, Kollam.",
  keywords: [
    "EDX",
    "Shaping Futures",
    "Study Abroad Kerala",
    "Education Consultancy Kollam",
    "ATS CV Writing",
    "Europass CV",
    "Cover Letter Writing",
    "IELTS Coaching Pathanapuram",
    "University Admissions UK Canada Australia Europe",
    "Visa Assistance",
  ],
  openGraph: {
    title: "EDX | Shaping Futures",
    description: "Premier education consultancy, study abroad admissions, and ATS CV writing experts.",
    url: "https://edxeducation.com",
    siteName: "EDX Shaping Futures",
    images: [
      {
        url: "/images/edx-logo.jpg",
        width: 800,
        height: 600,
        alt: "EDX Shaping Futures Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import CustomCursor from "@/components/CustomCursor";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${plusJakartaSans.variable} ${bricolageGrotesque.variable} ${instrumentSerif.variable} ${caveat.variable} h-full antialiased scroll-smooth`}
    >
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col font-sans bg-[#F4F7FC] text-[#0B1B3D] selection:bg-[#EAA412]/30 selection:text-[#0B1B3D] relative"
      >
        <SmoothScrollProvider>
          <CustomCursor />
          <div className="grain-overlay" aria-hidden="true" />
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
          <FloatingWhatsApp />
          <ConsultationModal />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
