import React from "react";
import { Info } from "lucide-react";
import { FIRM_DETAILS } from "../../data/firm";

interface LegalDisclaimerProps {
  customText?: string;
  className?: string;
}

export const LegalDisclaimer: React.FC<LegalDisclaimerProps> = ({
  customText,
  className = "",
}) => {
  return (
    <div
      className={`p-5 rounded-sm bg-[#EDE8DD]/50 border border-[#C7A56A]/30 text-xs text-[#24282D] leading-relaxed flex items-start gap-3.5 ${className}`}
    >
      <Info className="w-4 h-4 text-[#B38E51] shrink-0 mt-0.5" />
      <div>
        <strong className="font-semibold text-[#101C2C] block mb-1">
          Professional Legal Notice & Disclaimer:
        </strong>
        <p className="text-slate-600">
          {customText || FIRM_DETAILS.disclaimer}
        </p>
      </div>
    </div>
  );
};
