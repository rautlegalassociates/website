import React from "react";

interface BrandLogoProps {
  variant?: "horizontal" | "mark" | "full" | "compact";
  theme?: "dark" | "light";
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

/**
 * Professional, Minimalist Serif Monogram 'RLA' Logo for Raut Legal Associates.
 *
 * Design Architecture:
 * - Sophisticated Roman serif typography intertwining R, L, and A with high-contrast hairlines
 * - Minimalist circular gold crest with dual concentric hairline borders
 * - Subtle scales of justice balance axis integrated into the monogram baseline
 * - High-end gold gradient palette (#FFF2D6, #DFBF7E, #C7A56A, #9E7835) paired with deep navy (#101C2C)
 */
export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = "horizontal",
  theme = "dark",
  className = "",
  size = "md",
}) => {
  const isLight = theme === "light";

  const markSizeMap = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-14 h-14",
    xl: "w-24 h-24",
  };

  // Minimalist Serif Monogram 'RLA' Vector Crest
  const RlaMonogramSvg = ({ customClass }: { customClass?: string }) => (
    <svg
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={customClass || markSizeMap[size]}
      aria-label="Raut Legal Associates RLA Serif Monogram"
    >
      <defs>
        {/* Burnished Antique Gold Gradients */}
        <linearGradient id="rlaGoldSheen" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF4DB" />
          <stop offset="25%" stopColor="#E5C88F" />
          <stop offset="60%" stopColor="#C7A56A" />
          <stop offset="100%" stopColor="#8E6A29" />
        </linearGradient>

        <linearGradient id="rlaGoldAccent" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#DFBF7E" />
          <stop offset="50%" stopColor="#C7A56A" />
          <stop offset="100%" stopColor="#75521C" />
        </linearGradient>

        <radialGradient id="rlaCrestBg" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1B2D45" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#0F1A28" stopOpacity="0.95" />
        </radialGradient>

        <filter id="rlaGlow" x="-15%" y="-15%" width="130%" height="130%">
          <feDropShadow
            dx="0"
            dy="1.5"
            stdDeviation="2"
            floodColor="#000"
            floodOpacity="0.35"
          />
        </filter>
      </defs>

      {/* Dual Hairline Circular Outer Frame */}
      <circle
        cx="80"
        cy="80"
        r="75"
        fill="url(#rlaCrestBg)"
        stroke="url(#rlaGoldSheen)"
        strokeWidth="1.75"
        filter="url(#rlaGlow)"
      />
      <circle
        cx="80"
        cy="80"
        r="70.5"
        stroke="url(#rlaGoldSheen)"
        strokeWidth="0.75"
        strokeOpacity="0.5"
      />

      {/* 4 Cardinal Accent Diamonds */}
      <polygon points="80,5 82,8 80,11 78,8" fill="url(#rlaGoldSheen)" />
      <polygon points="80,149 82,152 80,155 78,152" fill="url(#rlaGoldSheen)" />
      <polygon points="5,80 8,82 11,80 8,78" fill="url(#rlaGoldSheen)" />
      <polygon points="149,80 152,82 155,80 152,78" fill="url(#rlaGoldSheen)" />

      {/* Sophisticated Interlocking Serif Monogram: R - L - A */}
      <g filter="url(#rlaGlow)">
        {/* Letter 'R' (Left prominent serif letter) */}
        {/* Vertical Stem */}
        <path
          d="M 36 44 L 54 44 L 54 48 L 47 48 L 47 110 L 54 110 L 54 114 L 36 114 L 36 110 L 43 110 L 43 48 L 36 48 Z"
          fill="url(#rlaGoldSheen)"
        />
        {/* 'R' Bowl */}
        <path
          d="M 47 45 L 68 45 C 80 45 88 51 88 62 C 88 73 80 80 67 80 L 47 80 Z M 47 50 L 47 75 L 66 75 C 75 75 82 70 82 62 C 82 54 75 50 66 50 Z"
          fill="url(#rlaGoldSheen)"
        />
        {/* 'R' Sweeping Leg */}
        <path
          d="M 64 78 L 84 109 C 87 113 91 114 96 114 L 96 110 C 92 110 88 108 85 104 L 67 77 Z"
          fill="url(#rlaGoldAccent)"
        />

        {/* Letter 'A' (Right soaring serif letter) */}
        {/* Left Thin Ascending Stem */}
        <path
          d="M 98 44 L 105 44 L 86 114 L 79 114 Z"
          fill="url(#rlaGoldAccent)"
          opacity="0.85"
        />
        {/* Right Thick Descending Stem with bracketed foot serif */}
        <path
          d="M 103 44 L 110 44 L 128 110 L 135 110 L 135 114 L 117 114 L 117 110 L 123 110 L 113 75 L 89 75 L 87 81 L 97 81 L 96 85 L 85 85 L 83 91 L 101 91 Z"
          fill="url(#rlaGoldSheen)"
        />
        {/* 'A' Apex Serif */}
        <path
          d="M 97 43 L 111 43 L 108 47 L 100 47 Z"
          fill="url(#rlaGoldSheen)"
        />

        {/* Letter 'L' (Intertwined Central/Lower Anchor) */}
        {/* 'L' Horizontal Base Bar extending along the baseline */}
        <path
          d="M 52 111 L 108 111 C 114 111 118 108 120 102 L 123 102 L 121 115 L 48 115 L 48 111 Z"
          fill="url(#rlaGoldSheen)"
        />

        {/* Subtle Minimalist Scales of Justice Pivot / Axis Dot */}
        <circle cx="80" cy="41" r="2.5" fill="url(#rlaGoldSheen)" />
        <line
          x1="68"
          y1="41"
          x2="92"
          y2="41"
          stroke="url(#rlaGoldSheen)"
          strokeWidth="0.75"
        />
      </g>
    </svg>
  );

  // 1. Mark Only Variant
  if (variant === "mark") {
    return (
      <div
        className={`inline-flex items-center justify-center shrink-0 ${className}`}
      >
        <RlaMonogramSvg />
      </div>
    );
  }

  // 2. Compact Variant (Mobile navigation)
  if (variant === "compact") {
    return (
      <div className={`inline-flex items-center gap-3 shrink-0 ${className}`}>
        <RlaMonogramSvg customClass="w-9 h-9 sm:w-10 sm:h-10" />
        <div className="flex flex-col">
          <span
            className={`font-serif text-lg sm:text-xl font-bold tracking-[0.12em] leading-none ${
              isLight ? "text-[#101C2C]" : "text-[#F7F5F0]"
            }`}
          >
            RAUT
          </span>
          <span className="text-[10px] tracking-[0.25em] uppercase font-semibold text-[#C7A56A] mt-1 leading-none">
            Legal Associates
          </span>
        </div>
      </div>
    );
  }

  // 3. Horizontal Lockup (Standard Navbar & Footer)
  if (variant === "horizontal") {
    return (
      <div className={`inline-flex items-center gap-3.5 shrink-0 ${className}`}>
        <RlaMonogramSvg customClass="w-10 h-10 sm:w-11 sm:h-11" />
        <div className="flex flex-col">
          <span
            className={`font-serif text-xl sm:text-2xl font-bold tracking-[0.15em] leading-none ${
              isLight ? "text-[#101C2C]" : "text-[#F7F5F0]"
            }`}
          >
            RAUT
          </span>
          <span className="text-[9.5px] sm:text-[10.5px] tracking-[0.28em] uppercase font-semibold text-[#C7A56A] mt-1 leading-none">
            Legal Associates
          </span>
          <span className="text-[7.5px] sm:text-[8px] tracking-[0.2em] uppercase text-slate-400 mt-1 leading-none hidden sm:block">
            Advocates &amp; Legal Counsel · Kathmandu
          </span>
        </div>
      </div>
    );
  }

  // 4. Full / Editorial Centered Presentation (Hero / About)
  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      {/* Monogram Crest */}
      <RlaMonogramSvg customClass="w-24 h-24 sm:w-28 sm:h-28" />

      {/* Primary Wordmark */}
      <h2
        className={`font-serif text-3xl sm:text-4xl font-bold tracking-[0.2em] mt-3.5 leading-tight ${
          isLight ? "text-[#101C2C]" : "text-white"
        }`}
      >
        RAUT
      </h2>

      {/* Subtitle */}
      <p className="text-xs sm:text-sm tracking-[0.32em] uppercase font-semibold text-[#C7A56A] mt-1">
        Legal Associates
      </p>

      {/* Hairline Divider & Slogan */}
      <div className="flex items-center justify-center gap-3 w-full max-w-xs mt-3.5">
        <span className="flex-1 h-px bg-[#C7A56A]/40" />
        <span className="text-[10px] tracking-[0.22em] uppercase font-medium text-slate-300 whitespace-nowrap">
          Your Rights · Our Priority
        </span>
        <span className="flex-1 h-px bg-[#C7A56A]/40" />
      </div>

      {/* Practice Pillars */}
      <div className="text-[9px] tracking-[0.24em] uppercase text-slate-400 mt-2 font-light">
        Corporate &nbsp;|&nbsp; Civil &nbsp;|&nbsp; Criminal &nbsp;|&nbsp;
        Advisory
      </div>
    </div>
  );
};
