import React, { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Breadcrumbs } from "../components/common/Breadcrumbs";
import { ConsultationBanner } from "../components/common/ConsultationBanner";
import { PRACTICE_AREAS } from "../data/practiceAreas";
import { SERVICES_PAGE_FAQS, getServicesFAQSchema } from "../data/faqs";
import {
  MAJOR_DISTRICTS_SERVED,
  getDistrictsAreaServedSchema,
} from "../data/districts";
import {
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
  ArrowRight,
  Search,
  CheckCircle2,
  HelpCircle,
  ChevronDown,
  MapPin,
  Compass,
  Clock,
  Sparkles,
  Shield,
  Award,
} from "lucide-react";
import { SEOHead } from "../components/common/SEOHead";

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

export const ServicesPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get("category");
  const activeTab: "all" | "matrimonial" | "secondary" =
    categoryParam === "matrimonial" || categoryParam === "secondary"
      ? categoryParam
      : "all";

  const [searchTerm, setSearchTerm] = useState("");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [selectedDistrictId, setSelectedDistrictId] =
    useState<string>("kathmandu");

  // Filter out the legacy fallback alias from the primary catalog display to avoid duplicate card
  const distinctPracticeAreas = PRACTICE_AREAS.filter(
    (area) => area.id !== "family-law",
  );

  const matrimonialAreas = distinctPracticeAreas.filter(
    (area) => area.category === "matrimonial",
  );

  const secondaryAreas = distinctPracticeAreas.filter(
    (area) => area.category !== "matrimonial",
  );

  const matchesSearch = (area: (typeof PRACTICE_AREAS)[0]) => {
    if (!searchTerm.trim()) return true;
    const q = searchTerm.toLowerCase();
    return (
      area.title.toLowerCase().includes(q) ||
      area.shortDescription.toLowerCase().includes(q) ||
      area.commonIssues.some((issue) => issue.toLowerCase().includes(q))
    );
  };

  const filteredMatrimonial = matrimonialAreas.filter(matchesSearch);
  const filteredSecondary = secondaryAreas.filter(matchesSearch);

  const handleTabChange = (tab: "all" | "matrimonial" | "secondary") => {
    if (tab === "all") {
      searchParams.delete("category");
      setSearchParams(searchParams, { replace: true });
    } else {
      setSearchParams({ category: tab }, { replace: true });
    }
  };

  const selectedDistrict =
    MAJOR_DISTRICTS_SERVED.find((d) => d.id === selectedDistrictId) ||
    MAJOR_DISTRICTS_SERVED[0];

  const servicesStructuredData = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://rautlegalassociates.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Practice Areas",
          item: "https://rautlegalassociates.com/services",
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "LegalService",
      name: "Raut Legal Associates — Divorce & Legal Practice Areas Nepal",
      url: "https://rautlegalassociates.com/services",
      description:
        "Premier divorce and matrimonial law firm in Kathmandu, Nepal. Fast-track mutual consent divorce in 2–3 days, court marriage registration, child custody, and dedicated corporate and civil litigation.",
      areaServed: getDistrictsAreaServedSchema(),
      priceRange: "NPR 500",
    },
    getServicesFAQSchema(),
  ];

  const renderPracticeCard = (area: (typeof PRACTICE_AREAS)[0]) => {
    const Icon = iconMap[area.iconName] || Scale;
    const isMatrimonial = area.category === "matrimonial";

    return (
      <div
        key={area.id}
        className={`bg-[#FAF8F5] border rounded-sm p-7 flex flex-col justify-between transition-all group ${
          isMatrimonial
            ? "border-[#E2DBCD] hover:border-[#C7A56A] hover:shadow-lg shadow-xs ring-1 ring-[#C7A56A]/15"
            : "border-[#E2DBCD] hover:border-slate-400 hover:shadow-md"
        }`}
      >
        <div>
          <div className="flex items-start justify-between gap-3 mb-5">
            <div
              className={`w-12 h-12 rounded-sm flex items-center justify-center transition-transform group-hover:scale-105 ${
                isMatrimonial
                  ? "bg-[#101C2C] text-[#C7A56A]"
                  : "bg-slate-800 text-slate-200"
              }`}
            >
              <Icon className="w-6 h-6" />
            </div>

            {area.badge && (
              <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-[#101C2C] text-[#C7A56A] rounded-xs border border-[#C7A56A]/30 shrink-0">
                {area.badge}
              </span>
            )}
          </div>

          <h3 className="font-serif text-2xl font-bold text-[#101C2C] mb-2 group-hover:text-[#B38E51] transition-colors leading-snug">
            <Link to={`/services/${area.slug}`}>{area.title}</Link>
          </h3>

          {area.highlightTimeline && (
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 mb-3 text-[11px] font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 rounded-xs">
              <Clock className="w-3 h-3 text-emerald-600" />
              <span>{area.highlightTimeline}</span>
            </div>
          )}

          <p className="text-xs text-slate-600 leading-relaxed mb-6">
            {area.shortDescription}
          </p>

          <div className="space-y-1.5 mb-6 text-xs text-slate-700">
            <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block mb-2">
              Key Advisory Matters:
            </span>
            {area.commonIssues.slice(0, 3).map((issue, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C7A56A] shrink-0 mt-0.5" />
                <span className="line-clamp-1">{issue}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-[#EDE8DD] flex items-center justify-between">
          <Link
            to="/appointments"
            className="text-[11px] font-medium text-slate-500 hover:text-[#101C2C]"
          >
            Consultation: NPR 500
          </Link>

          <Link
            to={`/services/${area.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#101C2C] group-hover:text-[#B38E51] transition-colors"
          >
            <span>Full Details</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#C7A56A] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-[#F7F5F0] py-12 sm:py-16">
      <SEOHead
        title="Divorce, Marriage & Legal Practice Areas Nepal | Raut Legal Associates"
        description="Kathmandu's premier legal chamber specializing in fast-track mutual consent divorce (2–3 days), court marriage for Nepalis and foreigners, child custody, and secondary corporate & civil litigation."
        canonicalPath="/services"
        keywords={[
          "divorce lawyer Nepal",
          "mutual consent divorce Kathmandu 2 days",
          "court marriage registration Nepal",
          "child custody lawyer Nepal",
          "foreign national court marriage Kathmandu",
          "NRN divorce waresnama Nepal",
          "Kathmandu District Court lawyers",
          "Patan High Court advocate",
          "corporate lawyer Nepal",
          "civil litigation Kathmandu",
        ]}
        jsonLd={servicesStructuredData}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Practice Areas" }]} />

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-widest text-[#B38E51] font-semibold block mb-2">
              Primary Focus: Divorce & Matrimonial · Secondary: Corporate &
              Civil
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-semibold tracking-tight text-[#101C2C]">
              Our Practice Areas
            </h1>
            <p className="mt-3 text-base text-slate-700 leading-relaxed font-light">
              We specialize primarily in divorce, court marriage registration,
              child custody, and property partition under the Muluki Civil Code
              2074, while maintaining dedicated trial and advisory practice in
              corporate, civil, and real estate law.
            </p>
          </div>

          {/* Search Box */}
          <div className="w-full md:w-72">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3 pointer-events-none" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search divorce, marriage, land..."
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-300 rounded-sm text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#C7A56A] focus:ring-1 focus:ring-[#C7A56A]"
              />
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-[#E2DBCD]">
          <button
            onClick={() => handleTabChange("all")}
            className={`px-4 py-2 text-xs font-semibold rounded-sm transition-all ${
              activeTab === "all"
                ? "bg-[#101C2C] text-[#C7A56A] shadow-xs"
                : "bg-white border border-[#E2DBCD] text-slate-700 hover:border-[#C7A56A]"
            }`}
          >
            All Practice Areas (12)
          </button>
          <button
            onClick={() => handleTabChange("matrimonial")}
            className={`px-4 py-2 text-xs font-semibold rounded-sm transition-all flex items-center gap-1.5 ${
              activeTab === "matrimonial"
                ? "bg-[#101C2C] text-[#C7A56A] shadow-xs"
                : "bg-white border border-[#E2DBCD] text-slate-700 hover:border-[#C7A56A]"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-[#C7A56A]" />
            <span>Divorce & Court Marriage (Primary Focus - 6)</span>
          </button>
          <button
            onClick={() => handleTabChange("secondary")}
            className={`px-4 py-2 text-xs font-semibold rounded-sm transition-all ${
              activeTab === "secondary"
                ? "bg-[#101C2C] text-[#C7A56A] shadow-xs"
                : "bg-white border border-[#E2DBCD] text-slate-700 hover:border-[#C7A56A]"
            }`}
          >
            Corporate, Civil & Property (Secondary - 6)
          </button>
        </div>

        {/* Search feedback when searching */}
        {searchTerm && (
          <div className="mb-8 p-3.5 bg-white border border-[#E2DBCD] rounded-sm flex items-center justify-between text-xs text-slate-600">
            <span>
              Showing search results matching: <strong>"{searchTerm}"</strong> (
              {filteredMatrimonial.length + filteredSecondary.length} results)
            </span>
            <button
              onClick={() => setSearchTerm("")}
              className="text-[#B38E51] font-semibold underline hover:text-[#101C2C]"
            >
              Clear Search
            </button>
          </div>
        )}

        {/* SECTION 1: Matrimonial & Family Law (Primary) */}
        {(activeTab === "all" || activeTab === "matrimonial") &&
          filteredMatrimonial.length > 0 && (
            <section className="mb-16">
              <div className="mb-6 p-6 bg-gradient-to-r from-[#101C2C] to-[#1E3048] text-white rounded-sm border-l-4 border-[#C7A56A]">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#C7A56A] font-semibold mb-1">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>
                        Primary Legal Practice · प्रमुख कानूनी विशेषज्ञता
                      </span>
                    </div>
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                      Divorce & Court Marriage Practice
                    </h2>
                    <p className="mt-1.5 text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed font-light">
                      Fast-track mutual consent divorce in 2–3 working days,
                      contested divorce litigation, court marriage registration
                      for Nepali and foreign citizens, child custody, and
                      overseas NRN divorce via Embassy Power of Attorney
                      (Waresnama).
                    </p>
                  </div>
                  <Link
                    to="/appointments"
                    className="self-start md:self-center px-4 py-2.5 text-xs font-semibold uppercase tracking-wider bg-[#C7A56A] text-[#101C2C] hover:bg-[#D8B983] rounded-sm whitespace-nowrap transition-colors"
                  >
                    Consult Divorce Advocate
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredMatrimonial.map(renderPracticeCard)}
              </div>
            </section>
          )}

        {/* SECTION 2: Secondary Practice Disciplines */}
        {(activeTab === "all" || activeTab === "secondary") &&
          filteredSecondary.length > 0 && (
            <section className="mb-16">
              <div className="mb-6 pb-3 border-b border-[#E2DBCD]">
                <span className="text-xs uppercase tracking-widest text-[#B38E51] font-semibold block mb-1">
                  Secondary Practice Disciplines · कर्पोरेट, देवानी तथा जग्गा
                  विवाद
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#101C2C]">
                  Corporate, Property & Civil Law
                </h2>
                <p className="mt-1 text-xs sm:text-sm text-slate-600 max-w-3xl font-light">
                  Alongside our matrimonial specialization, our advocates
                  provide comprehensive legal counsel in business formation,
                  commercial contracts, property title due diligence, civil
                  trials, and criminal defense.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredSecondary.map(renderPracticeCard)}
              </div>
            </section>
          )}

        {/* Empty state when no matches */}
        {filteredMatrimonial.length === 0 && filteredSecondary.length === 0 && (
          <div className="text-center py-16 bg-[#FAF8F5] border border-[#E2DBCD] rounded-sm mb-16">
            <Scale className="w-10 h-10 text-slate-400 mx-auto mb-3" />
            <h3 className="font-serif text-xl font-bold text-[#101C2C] mb-1">
              No matching practice areas found
            </h3>
            <p className="text-xs text-slate-500 mb-4">
              Try searching for terms like "divorce", "marriage", "custody",
              "property", or "corporate".
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                handleTabChange("all");
              }}
              className="text-xs text-[#B38E51] font-semibold underline"
            >
              Reset Filters & Search
            </button>
          </div>
        )}

        {/* Section: Major Districts & Jurisdictions Served in Nepal (Regional SEO Section) */}
        <section className="mb-20 pt-10 border-t border-[#E2DBCD]">
          <div className="max-w-7xl mb-8">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#B38E51] font-semibold mb-2">
              <Compass className="w-4 h-4 text-[#C7A56A]" />
              <span>Regional Coverage · नेपाल अधिराज्यभर कानूनी सेवा</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#101C2C]">
              Districts & Court Jurisdictions Served
            </h2>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed font-light">
              While our central chambers are situated in Basundhara-5, Tokha,
              Kathmandu, Raut Legal Associates regularly represents clients and
              provides strategic advisory across major commercial hubs and
              District Courts in Nepal.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* District Selector Pill list */}
            <div className="lg:col-span-5 flex flex-col gap-2">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
                Select District to View Courts & Scope:
              </div>
              <div className="space-y-1.5 max-h-[420px] overflow-y-auto pr-1">
                {MAJOR_DISTRICTS_SERVED.map((d) => {
                  const isSelected = d.id === selectedDistrictId;
                  return (
                    <button
                      key={d.id}
                      onClick={() => setSelectedDistrictId(d.id)}
                      className={`w-full text-left p-3 rounded-sm border transition-all flex items-center justify-between ${
                        isSelected
                          ? "bg-[#101C2C] border-[#101C2C] text-white shadow-xs"
                          : "bg-white border-[#E2DBCD] text-slate-800 hover:border-[#C7A56A] hover:bg-[#FAF8F5]"
                      }`}
                    >
                      <div>
                        <div className="text-xs font-bold flex items-center gap-2">
                          <span>{d.name}</span>
                          <span
                            className={`text-[11px] font-normal ${
                              isSelected ? "text-[#C7A56A]" : "text-slate-500"
                            }`}
                          >
                            ({d.nepaliName.split(" ")[0]})
                          </span>
                        </div>
                        <div
                          className={`text-[11px] mt-0.5 ${
                            isSelected ? "text-slate-300" : "text-slate-500"
                          }`}
                        >
                          {d.province} · {d.headquarters}
                        </div>
                      </div>
                      <MapPin
                        className={`w-4 h-4 shrink-0 ${
                          isSelected ? "text-[#C7A56A]" : "text-slate-400"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* District Information Card */}
            <div className="lg:col-span-7 bg-white border border-[#E2DBCD] rounded-sm p-6 sm:p-8 shadow-xs">
              <div className="flex items-center justify-between gap-4 pb-4 border-b border-slate-100 mb-6">
                <div>
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-[#B38E51]">
                    {selectedDistrict.province} · ISO{" "}
                    {selectedDistrict.isoRegion}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#101C2C] mt-1">
                    {selectedDistrict.name} ({selectedDistrict.nepaliName})
                  </h3>
                </div>
                <div className="text-right text-xs text-slate-500">
                  <div className="font-semibold text-slate-700">
                    Headquarters
                  </div>
                  <div>{selectedDistrict.headquarters}</div>
                </div>
              </div>

              <div className="space-y-5 text-xs text-slate-700">
                <div>
                  <h4 className="text-[11px] uppercase tracking-wider font-bold text-slate-400 mb-2">
                    Primary Courts & Tribunals Covered:
                  </h4>
                  <ul className="space-y-1.5">
                    {selectedDistrict.primaryCourts.map((court, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-slate-800"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C7A56A] shrink-0 mt-0.5" />
                        <span className="font-medium">{court}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-[11px] uppercase tracking-wider font-bold text-slate-400 mb-1.5">
                    Chamber Advisory Scope:
                  </h4>
                  <p className="text-slate-600 leading-relaxed">
                    {selectedDistrict.coverageDetails}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                  <div className="text-[11px] text-slate-500">
                    Coordinates: {selectedDistrict.coordinates.latitude}° N,{" "}
                    {selectedDistrict.coordinates.longitude}° E
                  </div>
                  <Link
                    to="/appointments"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#B38E51] hover:text-[#101C2C] transition-colors"
                  >
                    <span>Book Consultation for this District</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Frequently Asked Questions (FAQPage JSON-LD backed) */}
        <section className="mb-16 pt-10 border-t border-[#E2DBCD]">
          <div className="max-w-7xl mb-10">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#B38E51] font-semibold mb-2">
              <HelpCircle className="w-4 h-4 text-[#C7A56A]" />
              <span>
                Common Legal Questions in Nepal · प्रायः सोधिने प्रश्नहरू
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#101C2C]">
              Frequently Asked Legal Questions
            </h2>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed font-light">
              Clear answers to the most common procedural and regulatory
              questions regarding hiring advocates, court litigation,
              consultation fees, and legal documentation in Nepal.
            </p>
          </div>

          <div className="space-y-4 max-w-7xl">
            {SERVICES_PAGE_FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white border border-[#E2DBCD] rounded-sm transition-all overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 hover:bg-[#FAF8F5] transition-colors"
                    aria-expanded={isOpen}
                  >
                    <div>
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-[#B38E51] block mb-1">
                        {faq.category}
                      </span>
                      <h3 className="font-serif text-lg sm:text-xl font-bold text-[#101C2C] leading-snug">
                        {faq.question}
                      </h3>
                      {faq.questionNepali && (
                        <p className="text-xs text-slate-500 font-light mt-1">
                          {faq.questionNepali}
                        </p>
                      )}
                    </div>
                    <div
                      className={`w-7 h-7 rounded-full bg-[#EDE8DD] flex items-center justify-center shrink-0 mt-0.5 text-[#101C2C] transition-transform duration-200 ${
                        isOpen ? "rotate-180 bg-[#101C2C] text-[#C7A56A]" : ""
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 bg-[#FAF8F5]/60">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </div>

      <ConsultationBanner />
    </div>
  );
};
