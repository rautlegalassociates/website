import React from "react";
import { Breadcrumbs } from "../components/common/Breadcrumbs";
import { LawyerPlaceholderCard } from "../components/common/LawyerPlaceholderCard";
import { ConsultationBanner } from "../components/common/ConsultationBanner";
import { LegalDisclaimer } from "../components/common/LegalDisclaimer";
import { LAWYERS } from "../data/lawyers";
import { SEOHead } from "../components/common/SEOHead";

export const TeamPage: React.FC = () => {
  return (
    <div className="bg-[#F7F5F0] py-12 sm:py-16">
      <SEOHead
        title="Advocates & Legal Team | Raut Legal Associates"
        description="Meet licensed advocates Adv. Sahil Raut Gaddi, Adv. Avishek Raut, and Adv. Bishwanath Das in Kathmandu, Nepal. Schedule your legal consultation for NPR 500."
        canonicalPath="/team"
        keywords={[
          "lawyers in Kathmandu",
          "advocates Nepal",
          "Adv. Sahil Raut Gaddi",
          "Adv. Avishek Raut",
          "Adv. Bishwanath Das",
          "Raut Legal Associates team",
        ]}
        jsonLd={{
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
              name: "Our Lawyers",
              item: "https://rautlegalassociates.com/team",
            },
          ],
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Our Lawyers" }]} />

        {/* Page Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase tracking-widest text-[#B38E51] font-semibold block mb-2">
            Legal Practitioners · Kathmandu, Nepal
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-semibold tracking-tight text-[#101C2C]">
            Our Advocates & Legal Team
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed font-light">
            Dedicated legal practitioners providing principled advocacy, careful
            research, and practical solutions across Nepalese jurisdictions.
          </p>
        </div>

        {/* Grid of Lawyers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-16">
          {LAWYERS.map((lawyer) => (
            <LawyerPlaceholderCard key={lawyer.id} lawyer={lawyer} />
          ))}
        </div>

        {/* Professional Standards Callout */}
        <div className="p-8 bg-[#FAF8F5] border border-[#E2DBCD] rounded-sm mb-16">
          <h3 className="font-serif text-2xl font-bold text-[#101C2C] mb-3">
            Commitment to Professional Verification
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl">
            In compliance with professional standards and the Nepal Bar Council
            regulatory framework, Raut Legal Associates presents verified
            advocate designations without unverifiable marketing claims or
            fabricated success counts. All advocate registrations are verifiable
            through the official Nepal Bar Council register.
          </p>
        </div>

        {/* Disclaimer */}
        <div className="mb-12">
          <LegalDisclaimer />
        </div>
      </div>

      <ConsultationBanner />
    </div>
  );
};
