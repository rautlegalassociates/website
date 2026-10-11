import React from "react";
import { MessageCircle } from "lucide-react";
import { FIRM_DETAILS } from "../../data/firm";

interface WhatsAppButtonProps {
  variant?: "floating" | "button" | "compact";
  customMessage?: string;
  className?: string;
  label?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  variant = "button",
  customMessage = "Hello Raut Legal Associates, I would like to inquire regarding a legal matter in Kathmandu.",
  className = "",
  label = "Chat on WhatsApp",
}) => {
  const cleanPhone = FIRM_DETAILS.phone.replace(/[^0-9]/g, "");
  const encodedText = encodeURIComponent(customMessage);
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodedText}`;

  if (variant === "floating") {
    return (
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Consultation with Raut Legal Associates"
        className={`group relative flex items-center justify-center w-12 h-12 sm:w-13 sm:h-13 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-emerald-500/30 hover:scale-105 active:scale-95 transition-all duration-200 border-2 border-white/80 ${className}`}
        title="Chat directly on WhatsApp with our chamber"
      >
        <MessageCircle className="w-6 h-6 fill-current text-white" />
        <span className="sr-only">Chat on WhatsApp</span>

        {/* Tooltip on hover */}
        <span className="absolute right-full mr-3 px-2.5 py-1 text-xs font-medium text-slate-800 bg-white rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap hidden sm:block">
          WhatsApp: {FIRM_DETAILS.phoneDisplay}
        </span>
      </a>
    );
  }

  if (variant === "compact") {
    return (
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-1.5 text-xs font-semibold text-[#25D366] hover:text-[#1EBE5D] transition-colors ${className}`}
      >
        <MessageCircle className="w-4 h-4 fill-current" />
        <span>WhatsApp</span>
      </a>
    );
  }

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#25D366] hover:bg-[#20BD5A] active:bg-[#1DA850] rounded-sm transition-all shadow-xs hover:shadow-md ${className}`}
    >
      <MessageCircle className="w-4 h-4 fill-current" />
      <span>{label}</span>
    </a>
  );
};
