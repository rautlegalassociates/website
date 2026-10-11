import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SectionHeading } from '../components/common/SectionHeading';
import { LawyerPlaceholderCard } from '../components/common/LawyerPlaceholderCard';
import { ConsultationBanner } from '../components/common/ConsultationBanner';
import { LegalDisclaimer } from '../components/common/LegalDisclaimer';
import { FIRM_DETAILS, CORE_VALUES } from '../data/firm';
import { LAWYERS } from '../data/lawyers';
import { Scale, CheckCircle2, Compass, Shield, Award, Users } from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { BrandLogo } from '../components/common/BrandLogo';

export const AboutPage: React.FC = () => {
  return (
    <div className="bg-[#F7F5F0] py-12 sm:py-16">
      <SEOHead
        title="About Our Law Firm | Raut Legal Associates Nepal"
        description="Learn about Raut Legal Associates, our Bar Council advocacy standards, and client-first counsel in Kathmandu, Nepal. Book an advisory session today."
        canonicalPath="/about"
        keywords={['about Raut Legal Associates', 'law firm Kathmandu profile', 'advocates Tokha', 'Nepal legal counsel', 'Nepal Bar Council ethics']}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          'itemListElement': [
            { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://rautlegalassociates.com/' },
            { '@type': 'ListItem', 'position': 2, 'name': 'About the Firm', 'item': 'https://rautlegalassociates.com/about' }
          ]
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'About the Firm' }]} />

        {/* Page Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase tracking-widest text-[#B38E51] font-semibold block mb-2">
            Chamber Profile · Kathmandu, Nepal
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-semibold tracking-tight text-[#101C2C] leading-tight">
            About Raut Legal Associates
          </h1>
          <p className="mt-4 text-lg text-slate-700 leading-relaxed font-light">
            Providing structured legal counsel, court advocacy, and commercial advisory to individuals, businesses, and institutions across Nepal.
          </p>
        </div>

        {/* Firm Introduction Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pb-20 border-b border-[#E2DBCD]">
          <div className="lg:col-span-7 space-y-5 text-sm text-slate-700 leading-relaxed">
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#101C2C]">
              Founded on Responsible Representation & Legal Rigor
            </h2>
            <p>
              Raut Legal Associates is a modern law firm headquartered in Basundhara-5, Tokha, Kathmandu. We were established to bridge the gap between high-calibre statutory precision and transparent, client-centred legal problem-solving.
            </p>
            <p>
              In an evolving economic and regulatory climate in Nepal, individuals and enterprises face increasingly nuanced legal questions—from complex land title verifications and corporate filings at the Office of Company Registrar to delicate matrimonial divisions and commercial arbitration.
            </p>
            <p>
              Our firm approaches every legal matter with disciplined preparation. We examine original deed records, cross-check statutory limitation periods, and evaluate precedent law from the Supreme Court of Nepal to construct durable, ethical solutions.
            </p>
          </div>

          <div className="lg:col-span-5 bg-[#101C2C] text-[#F7F5F0] p-8 sm:p-10 rounded-sm border border-[#C7A56A]/40 shadow-sm">
            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-800">
              <BrandLogo variant="mark" size="lg" />
              <div>
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#C7A56A] font-bold block">
                  Official Insignia
                </span>
                <span className="font-serif text-lg font-bold text-white">
                  Raut Legal Associates
                </span>
              </div>
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-3">
              Chamber Standards
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed mb-6">
              We decline to make exaggerated claims or promise guaranteed judicial outcomes. The law in Nepal is grounded in statutory merit, documentary veracity, and fair judicial evaluation.
            </p>
            <div className="pt-4 border-t border-slate-800 space-y-2.5 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C7A56A]" />
                <span>Clear upfront consultation fee: NPR 500</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C7A56A]" />
                <span>Strict confidentiality and advocate privilege</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C7A56A]" />
                <span>Bilingual advocacy in Nepali and English</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="py-20 border-b border-[#E2DBCD]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#FAF8F5] border border-[#E2DBCD] p-8 sm:p-10 rounded-sm">
              <div className="w-10 h-10 rounded-sm bg-[#EDE8DD] text-[#B38E51] flex items-center justify-center mb-5">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#101C2C] mb-3">
                Our Mission
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                To deliver clear, principled, and pragmatic legal counsel that protects the rights and long-term interests of our clients, resolving conflicts constructively while upholding the highest ethical standards of the Nepal Bar Council.
              </p>
            </div>

            <div className="bg-[#FAF8F5] border border-[#E2DBCD] p-8 sm:p-10 rounded-sm">
              <div className="w-10 h-10 rounded-sm bg-[#EDE8DD] text-[#B38E51] flex items-center justify-center mb-5">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#101C2C] mb-3">
                Our Vision
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                To stand as a respected, accessible, and intellectually rigorous legal practice in Kathmandu, recognized for practical dispute resolution, sound corporate governance, and unwavering client integrity.
              </p>
            </div>
          </div>
        </div>

        {/* Problem-Solving Philosophy */}
        <div className="py-20 border-b border-[#E2DBCD]">
          <SectionHeading
            kicker="Our Methodology"
            title="Our Approach to Legal Problem-Solving"
            subtitle="We adhere to a disciplined four-stage approach to ensure that client goals are pursued with maximum statutory merit and efficiency."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#FAF8F5] border border-[#E2DBCD] p-6 rounded-sm">
              <span className="font-mono text-xs text-[#C7A56A] font-bold block mb-2">01 / Fact Finding</span>
              <h4 className="font-serif text-lg font-bold text-[#101C2C] mb-2">Document Audit</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Thoroughly examining land registries (Lalpurja/Malpot), contracts, bank notices, or police filings to establish verifiable facts.
              </p>
            </div>

            <div className="bg-[#FAF8F5] border border-[#E2DBCD] p-6 rounded-sm">
              <span className="font-mono text-xs text-[#C7A56A] font-bold block mb-2">02 / Statutory Analysis</span>
              <h4 className="font-serif text-lg font-bold text-[#101C2C] mb-2">Legal Benchmarking</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Checking limitation rules (Haddmyad), jurisdiction thresholds, and precedent decisions published in the Nepal Law Journal (NKP).
              </p>
            </div>

            <div className="bg-[#FAF8F5] border border-[#E2DBCD] p-6 rounded-sm">
              <span className="font-mono text-xs text-[#C7A56A] font-bold block mb-2">03 / Strategy Selection</span>
              <h4 className="font-serif text-lg font-bold text-[#101C2C] mb-2">Pragmatic Pathways</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Comparing litigation against mediation (Milapatra) or structured negotiation to protect client resources and time.
              </p>
            </div>

            <div className="bg-[#FAF8F5] border border-[#E2DBCD] p-6 rounded-sm">
              <span className="font-mono text-xs text-[#C7A56A] font-bold block mb-2">04 / Execution</span>
              <h4 className="font-serif text-lg font-bold text-[#101C2C] mb-2">Diligent Advocacy</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Meticulous plaint drafting, court oral pleadings (Bahas), or formal execution of court decrees and commercial pacts.
              </p>
            </div>
          </div>
        </div>

        {/* Legal Team Section */}
        <div className="py-20 border-b border-[#E2DBCD]">
          <SectionHeading
            kicker="Our Practitioners"
            title="Advocates & Legal Team"
            subtitle="Meet the advocates behind Raut Legal Associates."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {LAWYERS.map((lawyer) => (
              <LawyerPlaceholderCard key={lawyer.id} lawyer={lawyer} />
            ))}
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="my-12">
          <LegalDisclaimer />
        </div>
      </div>

      {/* Consultation Banner */}
      <ConsultationBanner />
    </div>
  );
};
