import React from "react";
import { Link } from "react-router-dom";
import {
  Scale,
  Building2,
  ShieldAlert,
  Users,
  Home,
  FileText,
  Briefcase,
  Landmark,
  FileCheck2,
  ShieldCheck,
  Gavel,
  Handshake,
  HeartHandshake,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Clock,
  Shield,
  Sparkles,
} from "lucide-react";
import { CORE_VALUES, CONSULTATION_STEPS, FIRM_DETAILS } from "../data/firm";
import { PRACTICE_AREAS } from "../data/practiceAreas";
import { LAWYERS } from "../data/lawyers";
import { ARTICLES } from "../data/articles";
import { SectionHeading } from "../components/common/SectionHeading";
import { LawyerPlaceholderCard } from "../components/common/LawyerPlaceholderCard";
import { ConsultationBanner } from "../components/common/ConsultationBanner";
import { LegalDisclaimer } from "../components/common/LegalDisclaimer";
import { SEOHead } from "../components/common/SEOHead";
import { BrandLogo } from "../components/common/BrandLogo";

const iconMap: Record<string, React.ElementType> = {
  Building2,
  Scale,
  ShieldAlert,
  Users,
  Home,
  FileText,
  Briefcase,
  Landmark,
  FileCheck2,
  ShieldCheck,
  Gavel,
  Handshake,
  HeartHandshake,
};

export const HomePage: React.FC = () => {
  // Separate primary matrimonial practices from secondary general practices
  const matrimonialAreas = PRACTICE_AREAS.filter(
    (area) => area.category === "matrimonial" && area.id !== "family-law",
  );
  const secondaryAreas = PRACTICE_AREAS.filter(
    (area) => area.category === "secondary",
  );

  return (
    <div className="flex flex-col">
      <SEOHead
        title="Divorce & Court Marriage Lawyers in Kathmandu, Nepal | Raut Legal Associates"
        description="Specialized divorce & court marriage lawyers in Kathmandu, Nepal. Fast 2–3 days mutual consent divorce, court marriage registration, child custody, and property partition under Muluki Civil Code 2074. Consultation NPR 500."
        canonicalPath="/"
        keywords={[
          "divorce lawyer Nepal",
          "divorce lawyer Kathmandu",
          "court marriage in Kathmandu",
          "court marriage Nepal",
          "mutual consent divorce Nepal",
          "Nepal family lawyer",
          "child custody lawyer Nepal",
          "property partition divorce Nepal",
          "contested divorce Nepal",
          "court marriage for foreigners Nepal",
          "Muluki Civil Code divorce 2074",
          "Raut Legal Associates",
        ]}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "How long does a mutual consent divorce take in Nepal?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Under Section 95 of the Muluki Civil Code 2074, with proper documentary preparation and both parties in agreement, our advocates conclude mutual consent divorce proceedings within 2 to 3 working days in Kathmandu, Lalitpur, or Bhaktapur District Court.",
              },
            },
            {
              "@type": "Question",
              name: "Can foreigners and inter-caste couples register a court marriage in Nepal?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Court marriage is available to domestic, inter-caste, and international couples before a District Court judge. Foreign nationals require a passport, visa (15+ days stay in Nepal), and an official No Objection Certificate (NOC) from their embassy.",
              },
            },
            {
              "@type": "Question",
              name: "Can Non-Resident Nepalese (NRNs) get divorced without traveling to Nepal?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. By executing a verified Power of Attorney (Adhikrit Waresnama) through the Nepalese Embassy or Consulate abroad, our advocates can legally file, represent, and conclude divorce proceedings in Nepal without requiring your travel.",
              },
            },
            {
              "@type": "Question",
              name: "What is the initial legal consultation fee at Raut Legal Associates?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "The initial legal consultation fee is NPR 500 for a 30 to 45 minute structured assessment of your marriage papers, divorce grounds, or court documents with a licensed advocate in Tokha, Kathmandu or via online video conference.",
              },
            },
          ],
        }}
      />

      {/* 1. Hero Section - Centered on Divorce & Court Marriage */}
      <section className="relative bg-gradient-to-b from-[#0C1522] via-[#101C2C] to-[#17283F] text-[#F7F5F0] pt-16 sm:pt-24 pb-20 sm:pb-28 overflow-hidden border-b border-[#223A5C]/40">
        {/* Subtle decorative geometry */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#C7A56A_1px,transparent_1px)] [background-size:24px_24px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3.5xl">
            {/* Primary Specialization Badge */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C7A56A]/20 border border-[#C7A56A]/40 text-xs uppercase tracking-[0.2em] text-[#C7A56A] font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C7A56A] animate-pulse" />
                Specialized Divorce & Marriage Lawyers
              </span>
              <span className="text-slate-600 hidden sm:inline">|</span>
              <span className="text-xs uppercase tracking-widest text-slate-300 font-medium">
                Kathmandu, Nepal
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6.5xl font-semibold tracking-tight text-white leading-[1.12] text-balance">
              Specialized Divorce & Court Marriage Lawyers in Nepal
            </h1>

            {/* Core Practice Strip */}
            <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs tracking-wider uppercase text-[#C7A56A] font-semibold">
              <span className="text-white font-bold bg-[#C7A56A]/20 px-2 py-0.5 rounded-xs">
                Mutual Consent Divorce (2–3 Days)
              </span>
              <span className="text-slate-600">·</span>
              <span>Court Marriage</span>
              <span className="text-slate-600">·</span>
              <span>Child Custody & Alimony</span>
              <span className="text-slate-600">·</span>
              <span>NRN Waresnama</span>
              <span className="text-slate-600">·</span>
              <span className="text-slate-400 font-normal">
                Civil & Corporate Counsel
              </span>
            </div>

            {/* Supporting text */}
            <p className="mt-6 text-lg sm:text-xl text-[#E2DBCD] max-w-2xl leading-relaxed font-light">
              Raut Legal Associates provides discreet, compassionate, and
              decisive legal representation for mutual consent divorce,
              contested litigation, court marriage registration, child custody,
              and property partition under the Muluki Civil Code 2074.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/appointments"
                className="px-7 py-4 text-xs font-semibold uppercase tracking-wider text-[#101C2C] bg-[#C7A56A] hover:bg-[#D8B983] active:bg-[#B38E51] transition-all rounded-sm shadow-md hover:shadow-lg inline-flex items-center gap-2"
              >
                <span>Book Matrimonial Consultation</span>
                <span className="text-[11px] opacity-80">(NPR 500)</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>

              <Link
                to="/services"
                className="px-7 py-4 text-xs font-semibold uppercase tracking-wider text-[#F7F5F0] hover:text-white border border-[#C7A56A]/60 hover:border-[#C7A56A] hover:bg-white/5 transition-all rounded-sm inline-flex items-center gap-2"
              >
                <span>View All Practice Areas</span>
              </Link>
            </div>
          </div>
        </div>

        {/* 4-item Trust / Foundation Strip below Hero */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-[#223A5C]/50 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-xs text-slate-300">
            <div>
              <div className="text-[#C7A56A] font-semibold tracking-wider uppercase mb-1">
                Mutual Consent Divorce
              </div>
              <div className="text-sm text-white font-medium">
                Completed in 2 to 3 Days
              </div>
            </div>

            <div>
              <div className="text-[#C7A56A] font-semibold tracking-wider uppercase mb-1">
                Court Marriage
              </div>
              <div className="text-sm text-white font-medium">
                Domestic & Foreign Nationals
              </div>
            </div>

            <div>
              <div className="text-[#C7A56A] font-semibold tracking-wider uppercase mb-1">
                Strict Confidentiality
              </div>
              <div className="text-sm text-white font-medium">
                100% Private Client Privilege
              </div>
            </div>

            <div>
              <div className="text-[#C7A56A] font-semibold tracking-wider uppercase mb-1">
                Consultation Fee
              </div>
              <div className="text-sm text-white font-medium">
                NPR 500 Structured Assessment
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Hero Quick-Access Feature Pillars: The 4 Core Matrimonial Services */}
      <section className="py-12 bg-[#FAF8F5] border-b border-[#E2DBCD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              to="/services/mutual-consent-divorce-in-nepal"
              className="bg-white p-6 border border-[#E2DBCD] rounded-sm hover:border-[#C7A56A] hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-sm bg-[#101C2C] text-[#C7A56A] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <span className="text-[10px] uppercase tracking-wider font-bold text-[#C7A56A] block mb-1">
                  Fast-Track Process
                </span>
                <h3 className="font-serif text-lg font-bold text-[#101C2C] group-hover:text-[#B38E51] transition-colors mb-2">
                  Mutual Consent Divorce
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Amicable dissolution in 2–3 working days with complete joint settlement, property waiver, and certified decree.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#101C2C] group-hover:text-[#B38E51]">
                <span>Read Full Guide</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C7A56A] group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              to="/services/court-marriage-registration-nepal"
              className="bg-white p-6 border border-[#E2DBCD] rounded-sm hover:border-[#C7A56A] hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-sm bg-[#101C2C] text-[#C7A56A] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <FileCheck2 className="w-5 h-5" />
                </div>
                <span className="text-[10px] uppercase tracking-wider font-bold text-[#C7A56A] block mb-1">
                  District Court Certificate
                </span>
                <h3 className="font-serif text-lg font-bold text-[#101C2C] group-hover:text-[#B38E51] transition-colors mb-2">
                  Court Marriage in Nepal
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Official marriage registration for Nepali couples, inter-caste marriages, and foreign nationals with embassy NOC support.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#101C2C] group-hover:text-[#B38E51]">
                <span>Read Full Guide</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C7A56A] group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              to="/services/child-custody-and-guardianship-nepal"
              className="bg-white p-6 border border-[#E2DBCD] rounded-sm hover:border-[#C7A56A] hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-sm bg-[#101C2C] text-[#C7A56A] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <Users className="w-5 h-5" />
                </div>
                <span className="text-[10px] uppercase tracking-wider font-bold text-[#C7A56A] block mb-1">
                  Minor Welfare & Custody
                </span>
                <h3 className="font-serif text-lg font-bold text-[#101C2C] group-hover:text-[#B38E51] transition-colors mb-2">
                  Child Custody & Support
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Protecting parental rights (Sanrakshyak), comprehensive visitation agreements, and monthly child maintenance.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#101C2C] group-hover:text-[#B38E51]">
                <span>Read Full Guide</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C7A56A] group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              to="/services/international-and-nrn-divorce-nepal"
              className="bg-white p-6 border border-[#E2DBCD] rounded-sm hover:border-[#C7A56A] hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-sm bg-[#101C2C] text-[#C7A56A] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <Handshake className="w-5 h-5" />
                </div>
                <span className="text-[10px] uppercase tracking-wider font-bold text-[#C7A56A] block mb-1">
                  Remote Embassy Waresnama
                </span>
                <h3 className="font-serif text-lg font-bold text-[#101C2C] group-hover:text-[#B38E51] transition-colors mb-2">
                  International & NRN Divorce
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Remote legal representation for overseas Nepalis via Embassy-certified Power of Attorney without traveling to Nepal.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#101C2C] group-hover:text-[#B38E51]">
                <span>Read Full Guide</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C7A56A] group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Primary Practice Areas: Specialized Matrimonial & Family Law */}
      <section className="py-20 sm:py-28 bg-[#F7F5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Primary Chamber Specialization"
            title="Divorce, Court Marriage & Family Law Services"
            subtitle="Confidential, compassionate, and experienced advocates protecting your rights across all family and matrimonial disputes under the Muluki Civil Code 2074."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {matrimonialAreas.map((area) => {
              const IconComponent = iconMap[area.iconName] || Scale;
              return (
                <div
                  key={area.id}
                  className="bg-white border-2 border-[#E2DBCD] rounded-sm p-6 sm:p-7 flex flex-col justify-between hover:border-[#C7A56A] hover:shadow-lg transition-all group relative overflow-hidden"
                >
                  {area.badge && (
                    <div className="absolute top-0 right-0 bg-[#101C2C] text-[#C7A56A] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-bl-sm border-l border-b border-[#C7A56A]/40">
                      {area.badge}
                    </div>
                  )}

                  <div>
                    <div className="w-12 h-12 rounded-sm bg-[#101C2C] text-[#C7A56A] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform shadow-xs">
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#101C2C] mb-2.5 group-hover:text-[#B38E51] transition-colors">
                      {area.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed mb-6">
                      {area.shortDescription}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#EDE8DD] flex items-center justify-between">
                    <span className="text-[11px] text-[#C7A56A] font-medium tracking-wide">
                      {area.highlightTimeline || "District Court Jurisdiction"}
                    </span>
                    <Link
                      to={`/services/${area.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#101C2C] group-hover:text-[#B38E51] transition-colors"
                    >
                      <span>Explore</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#C7A56A] group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/appointments"
              className="px-8 py-4 text-xs font-semibold uppercase tracking-wider bg-[#101C2C] text-[#FAF8F5] hover:bg-[#1E3048] hover:text-[#C7A56A] rounded-sm transition-colors inline-flex items-center gap-2 shadow-sm"
            >
              <span>Schedule Matrimonial Case Assessment (NPR 500)</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C7A56A]" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Step-by-Step Divorce & Court Marriage Process in Nepal */}
      <section className="py-20 sm:py-28 bg-[#0C1522] text-[#F7F5F0] border-y border-[#223A5C]/40 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            kicker="Procedural Roadmap"
            title="How Divorce & Court Marriage Works in Nepal"
            subtitle="Transparent statutory steps under the Muluki Civil Code 2074 before Kathmandu and nationwide District Courts."
            light={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            <div className="p-6 bg-[#101C2C] border border-[#223A5C] rounded-sm space-y-3 relative group hover:border-[#C7A56A]/60 transition-colors">
              <span className="font-mono text-3xl font-bold text-[#C7A56A] block">
                01.
              </span>
              <h3 className="font-serif text-lg font-bold text-white">
                Confidential Case Review
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Initial consultation to review marriage certificates, citizenship/passport records, and determine whether mutual consent or contested filing applies.
              </p>
            </div>

            <div className="p-6 bg-[#101C2C] border border-[#223A5C] rounded-sm space-y-3 relative group hover:border-[#C7A56A]/60 transition-colors">
              <span className="font-mono text-3xl font-bold text-[#C7A56A] block">
                02.
              </span>
              <h3 className="font-serif text-lg font-bold text-white">
                Drafting & Settlement Deeds
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Formulating the joint petition (Darakhast), child custody agreements, and property partition/waiver deeds with precision.
              </p>
            </div>

            <div className="p-6 bg-[#101C2C] border border-[#223A5C] rounded-sm space-y-3 relative group hover:border-[#C7A56A]/60 transition-colors">
              <span className="font-mono text-3xl font-bold text-[#C7A56A] block">
                03.
              </span>
              <h3 className="font-serif text-lg font-bold text-white">
                District Court Filing & Hearing
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Registration before the District Court judge. Both parties appear (or submit Embassy Waresnama) to confirm voluntary consent.
              </p>
            </div>

            <div className="p-6 bg-[#101C2C] border border-[#223A5C] rounded-sm space-y-3 relative group hover:border-[#C7A56A]/60 transition-colors">
              <span className="font-mono text-3xl font-bold text-[#C7A56A] block">
                04.
              </span>
              <h3 className="font-serif text-lg font-bold text-white">
                Certified Decree / Certificate
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Issuance of the certified court divorce decree or official marriage certificate, complete with certified English translation for embassies.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center text-xs text-slate-400">
            <span>Fast-track mutual consent divorce is typically concluded within </span>
            <strong className="text-[#C7A56A]">2 to 3 working days</strong>
            <span> in Kathmandu, Lalitpur, or Bhaktapur District Court.</span>
          </div>
        </div>
      </section>

      {/* 5. Introduction to Firm & Standards */}
      <section className="py-20 sm:py-28 bg-[#F7F5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual Column */}
            <div className="lg:col-span-5">
              <div className="bg-[#101C2C] text-[#F7F5F0] rounded-sm p-8 sm:p-10 border border-[#C7A56A]/40 relative shadow-sm flex flex-col items-center">
                <BrandLogo variant="full" theme="dark" className="w-full mb-6" />

                <div className="w-full pt-6 border-t border-slate-800 space-y-2.5 text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C7A56A]" />
                    <span>Specialized focus in Divorce & Matrimonial law</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C7A56A]" />
                    <span>In-person Tokha chamber & online video consultation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C7A56A]" />
                    <span>Transparent fee structure starting at NPR 500</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C7A56A]" />
                    <span>Strict compliance with Nepal Bar Council ethical code</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <span className="text-xs uppercase tracking-widest text-[#B38E51] font-semibold mb-3">
                About Raut Legal Associates
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-4.5xl font-semibold tracking-tight text-[#101C2C] text-balance leading-tight">
                Discreet, Compassionate & Tenacious Advocacy in Nepal
              </h2>

              <p className="mt-6 text-base text-slate-700 leading-relaxed">
                Matrimonial disputes and marital transitions are deeply
                personal. At Raut Legal Associates, we provide empathetic counsel
                backed by rigorous courtroom advocacy. Whether negotiating an
                amicable mutual divorce, drafting property partition contracts,
                or registering court marriages for international couples, our
                advocates protect your dignity, your children, and your financial
                interests.
              </p>

              <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                Alongside our primary family practice, our advocates represent
                clients in corporate transactions, land disputes, and general
                civil litigation before the District Courts, High Court Patan,
                and the Supreme Court of Nepal.
              </p>

              <div className="mt-8 flex items-center gap-6">
                <Link
                  to="/about"
                  className="px-6 py-3 text-xs font-semibold uppercase tracking-wider bg-[#101C2C] text-white hover:bg-[#17283F] rounded-sm transition-colors inline-flex items-center gap-2"
                >
                  <span>Learn More About the Chamber</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C7A56A]" />
                </Link>

                <Link
                  to="/team"
                  className="text-xs font-semibold uppercase tracking-wider text-[#101C2C] hover:text-[#B38E51] transition-colors"
                >
                  Meet Our Advocates &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Secondary Practice Areas: Corporate, Property, Civil & Criminal */}
      <section className="py-20 sm:py-28 bg-[#EDE8DD]/50 border-y border-[#E2DBCD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Full-Service Capabilities"
            title="Secondary Practice Areas · Corporate, Property & Civil Counsel"
            subtitle="In addition to our family law specialization, our advocates offer comprehensive counsel across corporate compliance, land & property, civil litigation, and criminal defense."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {secondaryAreas.map((area) => {
              const IconComponent = iconMap[area.iconName] || Scale;
              return (
                <div
                  key={area.id}
                  className="bg-[#FAF8F5] border border-[#E2DBCD] rounded-sm p-6 sm:p-7 flex flex-col justify-between hover:border-[#C7A56A] hover:shadow-md transition-all group"
                >
                  <div>
                    <div className="w-11 h-11 rounded-sm bg-slate-100 text-slate-700 flex items-center justify-center mb-4 group-hover:bg-[#101C2C] group-hover:text-[#C7A56A] transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>

                    <h3 className="font-serif text-lg sm:text-xl font-bold text-[#101C2C] mb-2 group-hover:text-[#B38E51] transition-colors">
                      {area.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed mb-6">
                      {area.shortDescription}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#EDE8DD] flex items-center justify-between">
                    <span className="text-[11px] text-slate-400 uppercase tracking-wider font-medium">
                      Secondary Practice
                    </span>
                    <Link
                      to={`/services/${area.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#101C2C] group-hover:text-[#B38E51] transition-colors"
                    >
                      <span>Details</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#C7A56A] group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="px-7 py-3 text-xs font-semibold uppercase tracking-wider border border-[#101C2C] text-[#101C2C] hover:bg-[#101C2C] hover:text-white rounded-sm transition-colors inline-flex items-center gap-2"
            >
              <span>View All Practice Disciplines</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Why Choose Raut Legal Associates? */}
      <section className="py-20 sm:py-28 bg-[#F7F5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Our Standards"
            title="Why Choose Raut Legal Associates"
            subtitle="Founded on principles of rigorous legal preparation, transparent advisory, and professional responsibility."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CORE_VALUES.map((val, idx) => (
              <div
                key={idx}
                className="p-7 bg-[#FAF8F5] border border-[#E2DBCD] rounded-sm hover:border-[#C7A56A]/60 transition-colors"
              >
                <div className="text-xs font-mono text-[#C7A56A] font-bold mb-3">
                  {`0${idx + 1}.`}
                </div>
                <h3 className="font-serif text-xl font-bold text-[#101C2C] mb-2.5">
                  {val.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Our Lawyers Section */}
      <section className="py-20 sm:py-28 bg-[#EDE8DD]/50 border-y border-[#E2DBCD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="The Legal Team"
            title="Our Advocates & Legal Counsel"
            subtitle="Dedicated legal practitioners advising clients across Kathmandu and throughout Nepal."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {LAWYERS.map((lawyer) => (
              <LawyerPlaceholderCard key={lawyer.id} lawyer={lawyer} />
            ))}
          </div>
        </div>
      </section>

      {/* 9. Consultation Banner */}
      <ConsultationBanner />

      {/* 10. Legal Notice & Disclaimer */}
      <section className="py-12 bg-[#F7F5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <LegalDisclaimer />
        </div>
      </section>
    </div>
  );
};
