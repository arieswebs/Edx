"use client";

import { MessageCircle } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export default function FloatingWhatsApp() {
  return (
    <aside
      aria-label="Contact options"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-3 group"
    >
      <div className="hidden sm:block opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-slate-100 text-xs font-semibold text-slate-800 pointer-events-none">
        Chat with EDX Counselor · <span className="text-emerald-600">Online</span>
      </div>

      <a
        href={COMPANY_INFO.contact.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95"
        aria-label="Direct WhatsApp Consultation"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-amber-400 border-2 border-white rounded-full animate-ping" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-amber-400 border-2 border-white rounded-full" />
        <MessageCircle className="w-7 h-7" />
      </a>
    </aside>
  );
}
