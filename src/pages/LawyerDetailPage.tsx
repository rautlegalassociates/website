import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { Breadcrumbs } from "../components/common/Breadcrumbs";
import { LegalDisclaimer } from "../components/common/LegalDisclaimer";
import { LAWYERS } from "../data/lawyers";
import { FIRM_DETAILS } from "../data/firm";
import {
  Scale,
  MapPin,
  Globe,
  CheckCircle2,
  CalendarCheck,
  Phone,
} from "lucide-react";
import { SEOHead } from "../components/common/SEOHead";

export const LawyerDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const lawyer = LAWYERS.find((l) => l.slug === slug);

  if (!lawyer) {
    return <Navigate to="/team" replace />;
  }

  const initials = lawyer.name
    .replace("Adv.", "")
    .trim()
    .split(" ")
    .map((n) => n[0])
    .join("")
    .substring(0, 2);

  return (
    <div className="bg-[#F7F5F0] py-12 sm:py-16">
      <SEOHead
        title={`${lawyer.name} | Advocate in Kathmandu`}
        description={`${lawyer.shortBio.slice(0, 85)} Practice: ${lawyer.practiceAreas.slice(0, 2).join(", ")}. Book consultation for NPR 500.`}
        canonicalPath={`/team/${lawyer.slug}`}
        ogType="profile"
        ogImage="/og-image.svg"
        ogImageAlt={`${lawyer.name} — Profile`}
        keywords={[
          lawyer.name,
          `${lawyer.name} Kathmandu`,
          "advocate Nepal",
          ...lawyer.practiceAreas.map((p) => p.toLowerCase()),
          "Raut Legal Associates",
        ]}
        jsonLd={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Person",
              name: lawyer.name,
              jobTitle: lawyer.designation,
              worksFor: {
                "@type": "LegalService",
                name: "Raut Legal Associates",
                telephone: "+9779706410516",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Basundhara-5",
                  addressLocality: "Tokha, Kathmandu",
                  addressCountry: "NP",
                },
              },
              knowsAbout: lawyer.practiceAreas,
              address: {
                "@type": "PostalAddress",
                addressLocality: "Kathmandu",
                addressCountry: "NP",
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
                  name: "Our Lawyers",
                  item: "https://rautlegalassociates.com/team",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: lawyer.name,
                  item: `https://rautlegalassociates.com/team/${lawyer.slug}`,
                },
              ],
            },
          ],
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Our Lawyers", path: "/team" },
            { label: lawyer.name },
          ]}
        />

        {/* Profile Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pb-16 border-b border-[#E2DBCD]">
          {/* Left Column: Portrait Monogram Card */}
          <div className="lg:col-span-4">
            <div className="bg-[#101C2C] rounded-sm p-8 text-center border border-[#C7A56A]/50 shadow-sm">
              <div className="w-32 h-32 rounded-full border-2 border-[#C7A56A]/60 bg-[#17283F] flex items-center justify-center text-[#C7A56A] font-serif font-bold text-4xl mx-auto mb-6 shadow-inner">
                {initials}
              </div>

              <div className="text-xs uppercase tracking-widest text-[#C7A56A] font-semibold flex items-center justify-center gap-1.5 mb-1">
                <Scale className="w-3.5 h-3.5" />
                <span>{lawyer.title}</span>
              </div>

              <h1 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">
                {lawyer.name}
              </h1>

              <p className="text-xs text-slate-300 font-medium mb-4">
                {lawyer.designation}
              </p>

              <div className="pt-4 border-t border-slate-800 text-left text-xs text-slate-300 space-y-2.5">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#C7A56A] shrink-0 mt-0.5" />
                  <span>{lawyer.officeLocation}</span>
                </div>
                <div className="flex items-start gap-2">
                  <Globe className="w-4 h-4 text-[#C7A56A] shrink-0 mt-0.5" />
                  <span>Languages: {lawyer.languages.join(", ")}</span>
                </div>
                <div className="flex items-start gap-2">
                  <Scale className="w-4 h-4 text-[#C7A56A] shrink-0 mt-0.5" />
                  <span className="text-[11px] text-slate-400">
                    {lawyer.barRegistration}
                  </span>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-800 flex flex-col gap-3">
                <Link
                  to="/appointments"
                  className="w-full text-center py-3 text-xs uppercase tracking-wider font-semibold bg-[#C7A56A] text-[#101C2C] hover:bg-[#D8B983] transition-colors rounded-sm flex items-center justify-center gap-2"
                >
                  <CalendarCheck className="w-4 h-4" />
                  <span>Consult Advocate (NPR 500)</span>
                </Link>

                <a
                  href={`tel:${FIRM_DETAILS.phone}`}
                  className="w-full text-center py-2 text-xs font-medium border border-slate-700 text-slate-300 hover:text-white rounded-sm flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C7A56A]" />
                  <span>Call: {FIRM_DETAILS.phoneDisplay}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Bio, Qualifications, Focus */}
          <div className="lg:col-span-8 space-y-12">
            {/* Biography */}
            <section>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#101C2C] mb-6">
                Professional Overview & Background
              </h2>
              <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
                {lawyer.fullBio.map((para, idx) => (
                  <p
                    key={idx}
                    className={
                      para.startsWith("[")
                        ? "text-xs text-slate-500 italic bg-[#EDE8DD]/60 p-3 rounded-sm border border-[#E2DBCD]"
                        : ""
                    }
                  >
                    {para}
                  </p>
                ))}
              </div>
            </section>

            {/* Practice Focus */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-[#101C2C] mb-4">
                Primary Practice Focus Areas
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {lawyer.practiceAreas.map((area, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-[#FAF8F5] border border-[#E2DBCD] rounded-sm flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#C7A56A] shrink-0" />
                    <span className="text-xs sm:text-sm font-medium text-slate-800">
                      {area}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Verified Qualifications & Credentials */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-[#101C2C] mb-4">
                Education & Professional Qualifications
              </h2>
              <div className="space-y-2.5">
                {lawyer.qualifications.map((q, idx) => (
                  <div
                    key={idx}
                    className={`p-3.5 rounded-sm border text-xs sm:text-sm ${
                      q.startsWith("[")
                        ? "bg-[#EDE8DD]/50 border-dashed border-[#C7A56A]/50 text-slate-600"
                        : "bg-[#FAF8F5] border-[#E2DBCD] text-slate-800 font-medium"
                    }`}
                  >
                    {q}
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12">
          <LegalDisclaimer />
        </div>
      </div>
    </div>
  );
};
