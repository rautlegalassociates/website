import React from "react";
import { Link } from "react-router-dom";
import { CalendarCheck, Phone, CheckCircle, ArrowRight } from "lucide-react";
import { FIRM_DETAILS } from "../../data/firm";

export const ConsultationBanner: React.FC = () => {
  return (
    <section className="bg-[#101C2C] text-[#F7F5F0] py-16 sm:py-20 relative overflow-hidden">
      {/* Subtle fine architectural border overlay */}
      <div className="absolute inset-0 border-y border-[#223A5C]/40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-br from-[#17283F] to-[#101C2C] rounded-sm border border-[#C7A56A]/40 p-8 sm:p-12 lg:p-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 flex flex-col gap-4">
              <span className="text-xs uppercase tracking-widest text-[#C7A56A] font-semibold">
                Initial Legal Assessment · Kathmandu, Nepal
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-4.5xl font-semibold tracking-tight text-white text-balance leading-tight">
                Start With a Professional Legal Consultation
              </h2>

              <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                Request an appointment with our legal team to discuss your legal
                concerns, review critical documents, and understand the
                appropriate next steps under Nepalese law.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#C7A56A]" />
                  <span>Basundhara-5, Tokha Office or Virtual Call</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#C7A56A]" />
                  <span>Direct Review with Licensed Advocates</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#C7A56A]" />
                  <span>Strict Professional Confidentiality</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center p-6 bg-[#101C2C]/90 rounded-sm border border-[#223A5C]/60">
              <div className="text-xs uppercase tracking-wider text-slate-400 mb-1">
                Consultation Fee
              </div>
              <div className="font-serif text-4xl sm:text-5xl font-bold text-[#C7A56A] tabular-nums tracking-tight">
                NPR {FIRM_DETAILS.consultationFeeNPR}
              </div>
              <div className="text-xs text-slate-400 mt-1 mb-6">
                Per initial 30–45 min matter evaluation
              </div>

              <div className="w-full flex flex-col gap-3">
                <Link
                  to="/appointments"
                  className="w-full text-center inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#101C2C] bg-[#C7A56A] hover:bg-[#D8B983] transition-colors rounded-sm shadow-sm"
                >
                  <CalendarCheck className="w-4 h-4" />
                  <span>Book Your Appointment</span>
                </Link>

                <a
                  href={`tel:${FIRM_DETAILS.phone}`}
                  className="w-full text-center inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-medium text-slate-300 hover:text-white border border-slate-700 hover:border-slate-500 transition-colors rounded-sm"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C7A56A]" />
                  <span>Call {FIRM_DETAILS.phoneDisplay}</span>
                </a>
              </div>

              <p className="text-[10px] text-slate-500 mt-3 text-center leading-normal">
                Subject to scheduling confirmation by the firm. No prior
                attorney-client relationship is created by request submission.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
