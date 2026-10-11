import React from "react";

interface SectionHeadingProps {
  kicker?: string;
  title: string;
  subtitle?: string;
  alignment?: "left" | "center";
  light?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  kicker,
  title,
  subtitle,
  alignment = "center",
  light = false,
}) => {
  return (
    <div
      className={`max-w-3xl mb-12 sm:mb-16 ${
        alignment === "center" ? "mx-auto text-center" : "text-left"
      }`}
    >
      {kicker && (
        <span
          className={`block text-xs uppercase tracking-widest font-semibold mb-3 ${
            light ? "text-[#C7A56A]" : "text-[#B38E51]"
          }`}
        >
          {kicker}
        </span>
      )}
      <h2
        className={`font-serif text-3xl sm:text-4xl lg:text-4.5xl font-semibold tracking-tight text-balance leading-tight ${
          light ? "text-[#F7F5F0]" : "text-[#101C2C]"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            light ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
