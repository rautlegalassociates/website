import React from "react";
import { Phone, MapPin, CalendarCheck } from "lucide-react";
import { FIRM_DETAILS } from "../../data/firm";

export const TopBar: React.FC = () => {
  return (
    <div className="bg-[#0C1522] text-[#E2DBCD] border-b border-[#223A5C]/40 text-xs py-2 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Location & Office */}
        <div className="flex items-center gap-2 text-slate-300">
          <MapPin className="w-3.5 h-3.5 text-[#C7A56A] shrink-0" />
          <span className="truncate">{FIRM_DETAILS.locationCity}</span>
          <span className="hidden md:inline text-slate-600">·</span>
          <span className="hidden md:inline text-slate-400">
            Basundhara-5, Tokha
          </span>
        </div>

        {/* Right: Phone & Consultation fee */}
        <div className="flex items-center gap-4 sm:gap-6 shrink-0">
          <div className="hidden sm:flex items-center gap-1.5 text-slate-300">
            <CalendarCheck className="w-3.5 h-3.5 text-[#C7A56A] shrink-0" />
            <span>
              Consultation:{" "}
              <strong className="text-[#C7A56A] font-semibold">
                NPR {FIRM_DETAILS.consultationFeeNPR}
              </strong>
            </span>
          </div>

          <a
            href={`https://wa.me/${FIRM_DETAILS.phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("Hello Raut Legal Associates, I would like to inquire regarding a consultation.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-1.5 text-[#25D366] hover:text-[#20BD5A] transition-colors font-medium whitespace-nowrap"
            title="Chat on WhatsApp"
          >
            <span className="w-2 h-2 rounded-full bg-[#25D366]" />
            <span>WhatsApp</span>
          </a>

          <a
            href={`tel:${FIRM_DETAILS.phone}`}
            className="flex items-center gap-1.5 text-[#F7F5F0] hover:text-[#C7A56A] transition-colors font-medium whitespace-nowrap"
            title="Call Raut Legal Associates"
          >
            <Phone className="w-3.5 h-3.5 text-[#C7A56A]" />
            <span>{FIRM_DETAILS.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
