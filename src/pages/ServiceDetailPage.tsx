import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { Breadcrumbs } from "../components/common/Breadcrumbs";
import { LegalDisclaimer } from "../components/common/LegalDisclaimer";
import { PRACTICE_AREAS } from "../data/practiceAreas";
import { FIRM_DETAILS } from "../data/firm";
import {
  CheckCircle2,
  HelpCircle,
  CalendarCheck,
  Phone,
  ArrowRight,
  ListChecks,
} from "lucide-react";
import { SEOHead } from "../components/common/SEOHead";

export const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const practiceArea = PRACTICE_AREAS.find((area) => area.slug === slug);

  if (!practiceArea) {
    return <Navigate to="/services" replace />;
  }

  // Construct structured data graph: Service, Breadcrumbs, and FAQs
  const faqSchema =
    practiceArea.faqs.length > 0
      ? {
          "@type": "FAQPage",
          mainEntity: practiceArea.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }
      : null;

  return (
    <div className="bg-[#F7F5F0] py-12 sm:py-16">
      <SEOHead
        title={`${practiceArea.title} | Raut Legal Nepal`}
        description={`${practiceArea.shortDescription.length > 110 ? practiceArea.shortDescription.slice(0, 110).trim() + "..." : practiceArea.shortDescription} Initial matter review fee: NPR 500 in Kathmandu.`}
        canonicalPath={`/services/${practiceArea.slug}`}
        keywords={[
          practiceArea.title.toLowerCase(),
          `${practiceArea.title.toLowerCase()} Nepal`,
          `${practiceArea.title.toLowerCase()} Kathmandu`,
          "advocates in Kathmandu",
          "Nepal legal procedure",
          "Raut Legal Associates",
        ]}
        jsonLd={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              name: practiceArea.title,
              description: practiceArea.overview,
              provider: {
                "@type": "LegalService",
                name: "Raut Legal Associates",
                telephone: "+9779706410516",
                areaServed: [
                  { "@type": "Country", name: "Nepal" },
                  { "@type": "AdministrativeArea", name: "Kathmandu District" },
                  { "@type": "AdministrativeArea", name: "Lalitpur District" },
                  { "@type": "AdministrativeArea", name: "Bhaktapur District" },
                  {
                    "@type": "AdministrativeArea",
                    name: "Kaski District (Pokhara)",
                  },
                  { "@type": "AdministrativeArea", name: "Chitwan District" },
                  {
                    "@type": "AdministrativeArea",
                    name: "Rupandehi District (Butwal)",
                  },
                ],
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Basundhara-5",
                  addressLocality: "Tokha, Kathmandu",
                  addressCountry: "NP",
                },
              },
              offers: {
                "@type": "Offer",
                price: "500",
                priceCurrency: "NPR",
                description:
                  "Initial matter consultation and document evaluation",
              },
            },
            {
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
                {
                  "@type": "ListItem",
                  position: 3,
                  name: practiceArea.title,
                  item: `https://rautlegalassociates.com/services/${practiceArea.slug}`,
                },
              ],
            },
            ...(faqSchema ? [faqSchema] : []),
          ],
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Practice Areas", path: "/services" },
            { label: practiceArea.title },
          ]}
        />

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pb-16 border-b border-[#E2DBCD]">
          <div className="lg:col-span-8">
            <span className="text-xs uppercase tracking-widest text-[#B38E51] font-semibold block mb-2">
              Practice Discipline · Nepal Legal Framework
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#101C2C] leading-tight">
              {practiceArea.title}
            </h1>
            <p className="mt-6 text-base sm:text-lg text-slate-700 leading-relaxed font-light">
              {practiceArea.overview}
            </p>
          </div>

          {/* Quick Consultation Action Card */}
          <div className="lg:col-span-4 bg-[#101C2C] text-white p-7 rounded-sm border border-[#C7A56A]/40 shadow-sm">
            <div className="text-xs uppercase tracking-wider text-[#C7A56A] font-semibold mb-1">
              Matter Consultation
            </div>
            <div className="font-serif text-3xl font-bold text-white mb-1">
              NPR {FIRM_DETAILS.consultationFeeNPR}
            </div>
            <p className="text-xs text-slate-300 leading-relaxed mb-6">
              Discuss this specific legal matter with an advocate in Tokha,
              Kathmandu or online.
            </p>

            <Link
              to={`/appointments`}
              className="w-full text-center py-3 text-xs uppercase tracking-wider font-semibold bg-[#C7A56A] text-[#101C2C] hover:bg-[#D8B983] transition-colors rounded-sm flex items-center justify-center gap-2 mb-3"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Book Appointment</span>
            </Link>

            <a
              href={`tel:${FIRM_DETAILS.phone}`}
              className="w-full text-center py-2.5 text-xs font-medium border border-slate-700 text-slate-300 hover:text-white rounded-sm flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-[#C7A56A]" />
              <span>Call: {FIRM_DETAILS.phoneDisplay}</span>
            </a>
          </div>
        </div>

        {/* 2-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-16">
          <div className="lg:col-span-8 space-y-16">
            {/* Common Issues Addressed */}
            <section>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#101C2C] mb-6">
                Common Legal Matters Addressed
              </h2>
              <div className="space-y-3">
                {practiceArea.commonIssues.map((issue, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-[#FAF8F5] border border-[#E2DBCD] rounded-sm flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#C7A56A] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                      {issue}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* How We Assist */}
            <section>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#101C2C] mb-6">
                How Raut Legal Associates Assists You
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {practiceArea.howWeAssist.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 bg-[#FAF8F5] border border-[#E2DBCD] rounded-sm"
                  >
                    <div className="font-mono text-xs text-[#C7A56A] font-bold mb-2">
                      0{idx + 1}.
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* General Procedural Overview */}
            <section>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#101C2C] mb-6">
                General Procedural Roadmap
              </h2>
              <div className="relative pl-6 border-l-2 border-[#C7A56A]/40 space-y-8">
                {practiceArea.processSteps.map((step, idx) => (
                  <div key={idx} className="relative">
                    <span className="absolute -left-[31px] top-0 w-3.5 h-3.5 rounded-full bg-[#101C2C] border-2 border-[#C7A56A]" />
                    <h3 className="font-serif text-lg font-bold text-[#101C2C] mb-1">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Document Checklist (If available) */}
            {practiceArea.documentChecklist && (
              <section className="p-8 bg-[#FAF8F5] border border-[#E2DBCD] rounded-sm">
                <div className="flex items-center gap-3 mb-6">
                  <ListChecks className="w-5 h-5 text-[#B38E51]" />
                  <h2 className="font-serif text-2xl font-bold text-[#101C2C]">
                    Preliminary Document Checklist
                  </h2>
                </div>
                <p className="text-xs text-slate-600 mb-6 leading-relaxed">
                  To maximize the productivity of your initial consultation,
                  prepare clear copies of these records where applicable:
                </p>
                <ul className="space-y-2.5">
                  {practiceArea.documentChecklist.map((doc, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-xs text-slate-700"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C7A56A] mt-1.5 shrink-0" />
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Frequently Asked Questions */}
            {practiceArea.faqs.length > 0 && (
              <section>
                <div className="flex items-center gap-2.5 mb-6">
                  <HelpCircle className="w-5 h-5 text-[#B38E51]" />
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#101C2C]">
                    Frequently Asked Questions
                  </h2>
                </div>
                <div className="space-y-4">
                  {practiceArea.faqs.map((faq, idx) => (
                    <div
                      key={idx}
                      className="p-6 bg-[#FAF8F5] border border-[#E2DBCD] rounded-sm"
                    >
                      <h3 className="font-serif text-lg font-semibold text-[#101C2C] mb-2">
                        {faq.question}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-8">
            {/* Other Practice Areas */}
            <div className="p-6 bg-[#FAF8F5] border border-[#E2DBCD] rounded-sm">
              <h3 className="font-serif text-lg font-bold text-[#101C2C] mb-4 pb-2 border-b border-[#EDE8DD]">
                Related Practice Areas
              </h3>
              <ul className="space-y-2 text-xs">
                {PRACTICE_AREAS.filter((a) => a.id !== practiceArea.id)
                  .slice(0, 6)
                  .map((otherArea) => (
                    <li key={otherArea.id}>
                      <Link
                        to={`/services/${otherArea.slug}`}
                        className="text-slate-600 hover:text-[#B38E51] transition-colors flex items-center justify-between py-1 group"
                      >
                        <span className="truncate">{otherArea.title}</span>
                        <ArrowRight className="w-3 h-3 text-slate-400 group-hover:text-[#B38E51] shrink-0" />
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>

            {/* Chamber Location Notice */}
            <div className="p-6 bg-[#FAF8F5] border border-[#E2DBCD] rounded-sm text-xs text-slate-600 space-y-3">
              <div className="font-serif text-base font-bold text-[#101C2C]">
                Office & Jurisdiction
              </div>
              <p>
                <strong>Location:</strong> {FIRM_DETAILS.address}
              </p>
              <p>
                <strong>Hours:</strong> {FIRM_DETAILS.officeHours}
              </p>
              <p>
                <strong>Phone:</strong> {FIRM_DETAILS.phoneDisplay}
              </p>
            </div>
          </aside>
        </div>

        {/* Disclaimer */}
        <div className="mt-8">
          <LegalDisclaimer />
        </div>
      </div>
    </div>
  );
};
