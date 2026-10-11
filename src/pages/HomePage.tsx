import React from 'react';
import { Link } from 'react-router-dom';
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
  ArrowRight,
  CheckCircle2,
  Calendar,
  Clock,
  Phone,
  MapPin,
  BookOpen,
} from 'lucide-react';
import { FIRM_DETAILS, CORE_VALUES, CONSULTATION_STEPS } from '../data/firm';
import { PRACTICE_AREAS } from '../data/practiceAreas';
import { LAWYERS } from '../data/lawyers';
import { ARTICLES } from '../data/articles';
import { SectionHeading } from '../components/common/SectionHeading';
import { LawyerPlaceholderCard } from '../components/common/LawyerPlaceholderCard';
import { ConsultationBanner } from '../components/common/ConsultationBanner';
import { LegalDisclaimer } from '../components/common/LegalDisclaimer';
import { SEOHead } from '../components/common/SEOHead';
import { BrandLogo } from '../components/common/BrandLogo';

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
};

export const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col">
      <SEOHead
        title="Raut Legal Associates | Advocates in Kathmandu, Nepal"
        description="Trusted advocates in Kathmandu, Nepal. Corporate, civil, land & criminal defense counsel. Schedule consultation for NPR 500. Call +977 9706410516."
        canonicalPath="/"
        keywords={[
          'law firm Kathmandu',
          'lawyers in Nepal',
          'Raut Legal Associates',
          'advocate in Kathmandu',
          'legal counsel Nepal',
          'corporate law Nepal',
          'civil litigation Nepal',
          'Tokha law chamber',
          'property dispute Nepal',
          'NPR 500 consultation'
        ]}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          'mainEntity': [
            {
              '@type': 'Question',
              'name': 'What is the initial consultation fee at Raut Legal Associates?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': 'The initial consultation fee is NPR 500 for a 30 to 45 minute structured legal assessment with a licensed advocate in Tokha, Kathmandu or online.'
              }
            },
            {
              '@type': 'Question',
              'name': 'Where is the chamber of Raut Legal Associates located?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': 'The office is situated at Basundhara-5, Tokha, Kathmandu, Nepal, easily accessible via Ring Road.'
              }
            },
            {
              '@type': 'Question',
              'name': 'Does submitting an appointment request create an advocate-client relationship?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': 'No. Submitting an online request or paying the initial consultation fee does not create an advocate-client relationship until a formal written engagement agreement is executed.'
              }
            }
          ]
        }}
      />
      {/* 1. Hero Section */}
      <section className="relative bg-gradient-to-b from-[#0C1522] via-[#101C2C] to-[#17283F] text-[#F7F5F0] pt-16 sm:pt-24 pb-20 sm:pb-28 overflow-hidden border-b border-[#223A5C]/40">
        {/* Subtle decorative geometry */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#C7A56A_1px,transparent_1px)] [background-size:24px_24px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3.5xl">
            {/* Credibility line with official logo motto */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="text-xs uppercase tracking-[0.25em] text-[#C7A56A] font-bold">
                Your Rights · Our Priority
              </span>
              <span className="text-slate-600 hidden sm:inline">|</span>
              <span className="text-xs uppercase tracking-widest text-slate-300 font-medium">
                Kathmandu, Nepal
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.12] text-balance">
              Trusted Legal Counsel. Stronger Foundations for Your Future.
            </h1>

            {/* Core Practice Strip from Logo */}
            <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs tracking-wider uppercase text-[#C7A56A] font-semibold">
              <span>Corporate</span>
              <span className="text-slate-600">·</span>
              <span>Civil</span>
              <span className="text-slate-600">·</span>
              <span>Criminal</span>
              <span className="text-slate-600">·</span>
              <span>Advisory</span>
            </div>

            {/* Supporting text */}
            <p className="mt-6 text-lg sm:text-xl text-[#E2DBCD] max-w-2xl leading-relaxed font-light">
              Raut Legal Associates provides thoughtful legal guidance, strategic representation, and practical solutions for individuals, businesses, and institutions across Nepal.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/appointments"
                className="px-7 py-4 text-xs font-semibold uppercase tracking-wider text-[#101C2C] bg-[#C7A56A] hover:bg-[#D8B983] active:bg-[#B38E51] transition-all rounded-sm shadow-md hover:shadow-lg inline-flex items-center gap-2"
              >
                <span>Book a Consultation</span>
                <span className="text-[11px] opacity-80">(NPR 500)</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>

              <Link
                to="/services"
                className="px-7 py-4 text-xs font-semibold uppercase tracking-wider text-[#F7F5F0] hover:text-white border border-[#C7A56A]/60 hover:border-[#C7A56A] hover:bg-white/5 transition-all rounded-sm inline-flex items-center gap-2"
              >
                <span>Explore Our Services</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Full-width 4-item Trust / Foundation Strip below Hero Split */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-[#223A5C]/50 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-xs text-slate-300">
            <div>
              <div className="text-[#C7A56A] font-semibold tracking-wider uppercase mb-1">
                Consultation Fee
              </div>
              <div className="text-sm text-white font-medium">
                NPR 500 Fixed Rate
              </div>
            </div>

            <div>
              <div className="text-[#C7A56A] font-semibold tracking-wider uppercase mb-1">
                Chamber Location
              </div>
              <div className="text-sm text-white font-medium">
                Basundhara-5, Tokha, Kathmandu
              </div>
            </div>

            <div>
              <div className="text-[#C7A56A] font-semibold tracking-wider uppercase mb-1">
                Practice Jurisdictions
              </div>
              <div className="text-sm text-white font-medium">
                District, High & Supreme Courts
              </div>
            </div>

            <div>
              <div className="text-[#C7A56A] font-semibold tracking-wider uppercase mb-1">
                Client Privilege
              </div>
              <div className="text-sm text-white font-medium">
                Strict Ethical Confidentiality
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Introduction to the Firm (Split-Layout) */}
      <section className="py-20 sm:py-28 bg-[#F7F5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual Column: Official Brand Emblem Showcase */}
            <div className="lg:col-span-5">
              <div className="bg-[#101C2C] text-[#F7F5F0] rounded-sm p-8 sm:p-10 border border-[#C7A56A]/40 relative shadow-sm flex flex-col items-center">
                <BrandLogo variant="full" theme="dark" className="w-full mb-6" />

                <div className="w-full pt-6 border-t border-slate-800 space-y-2.5 text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C7A56A]" />
                    <span>In-person consultations at Tokha chamber</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C7A56A]" />
                    <span>Transparent fee structure starting at NPR 500</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C7A56A]" />
                    <span>Clear written roadmaps on procedural deadlines</span>
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
                Legal Excellence Built on Trust and Integrity
              </h2>

              <p className="mt-6 text-base text-slate-700 leading-relaxed">
                At Raut Legal Associates, we believe that effective legal counsel begins with a deep, objective understanding of every client’s unique reality. Whether guiding an enterprise through corporate compliance in Nepal or defending individual rights in civil and criminal litigation, our advocates prioritize pragmatic strategy and ethical advocacy.
              </p>

              <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                We reject exaggerated claims and superficial promises. Instead, we offer clients meticulous preparation, rigorous statutory research, clear procedural explanations, and dedicated representation before Kathmandu courts and regulatory authorities.
              </p>

              <div className="mt-8 flex items-center gap-6">
                <Link
                  to="/about"
                  className="px-6 py-3 text-xs font-semibold uppercase tracking-wider bg-[#101C2C] text-white hover:bg-[#17283F] rounded-sm transition-colors inline-flex items-center gap-2"
                >
                  <span>Learn More About the Firm</span>
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

      {/* 3. Practice Areas Grid */}
      <section className="py-20 sm:py-28 bg-[#EDE8DD]/40 border-y border-[#E2DBCD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Legal Services & Representation"
            title="Comprehensive Practice Areas"
            subtitle="Strategic legal representation and advisory across civil, corporate, criminal, and regulatory matters in Nepal."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {PRACTICE_AREAS.map((area) => {
              const IconComponent = iconMap[area.iconName] || Scale;
              return (
                <div
                  key={area.id}
                  className="bg-[#FAF8F5] border border-[#E2DBCD] rounded-sm p-6 sm:p-7 flex flex-col justify-between hover:border-[#C7A56A] hover:shadow-md transition-all group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-sm bg-[#101C2C] text-[#C7A56A] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
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
                    <span className="text-[11px] text-slate-400 uppercase tracking-wider font-medium">
                      Nepal Jurisdiction
                    </span>
                    <Link
                      to={`/services/${area.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#101C2C] group-hover:text-[#B38E51] transition-colors"
                    >
                      <span>Learn More</span>
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
              className="px-7 py-3.5 text-xs font-semibold uppercase tracking-wider border border-[#101C2C] text-[#101C2C] hover:bg-[#101C2C] hover:text-white rounded-sm transition-colors inline-flex items-center gap-2"
            >
              <span>View All 12 Practice Areas in Detail</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Why Choose Raut Legal Associates? */}
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

      {/* 5. Our Lawyers Section */}
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

          <div className="mt-12 text-center text-xs text-slate-500 max-w-2xl mx-auto">
            <p>
              Note: Professional biographies and qualifications include editable placeholders subject to verified Bar records. We uphold transparency in all public-facing representation.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Consultation Process */}
      <section className="py-20 sm:py-28 bg-[#F7F5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="How We Work"
            title="Our Consultation Process"
            subtitle="A clear, respectful approach to evaluating your legal circumstances and determining appropriate action."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {CONSULTATION_STEPS.map((step) => (
              <div
                key={step.step}
                className="p-8 bg-[#FAF8F5] border border-[#E2DBCD] rounded-sm relative flex flex-col justify-between"
              >
                <div>
                  <div className="font-mono text-3xl font-bold text-[#C7A56A] mb-4">
                    {step.step}
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#101C2C] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 max-w-2xl mx-auto">
            <LegalDisclaimer customText="Notice: Submitting an appointment request or participating in an initial consultation does not automatically establish an advocate-client relationship until formal engagement terms are agreed upon in writing." />
          </div>
        </div>
      </section>

      {/* 7. Consultation Fee Section Banner */}
      <ConsultationBanner />

      {/* 8. Our Commitment to Clients (Replaces fabricated testimonials) */}
      <section className="py-20 sm:py-28 bg-[#F7F5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-xs uppercase tracking-widest text-[#B38E51] font-semibold block mb-3">
              Professional Ethics
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#101C2C] mb-6">
              Our Professional Commitment to Every Client
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed mb-10">
              In accordance with legal ethics in Nepal, we do not publish unverified client testimonials or manufactured ratings. Instead, we hold ourselves accountable to rigorous standards of professional conduct, candid risk assessments, and respectful client confidentiality.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              <div className="p-5 bg-[#FAF8F5] border border-[#E2DBCD] rounded-sm">
                <h4 className="font-serif text-lg font-bold text-[#101C2C] mb-1.5">
                  Honest Assessment of Case Merits
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We will never encourage unnecessary litigation if an out-of-court settlement or dispute mitigation better protects your interests and financial resources.
                </p>
              </div>

              <div className="p-5 bg-[#FAF8F5] border border-[#E2DBCD] rounded-sm">
                <h4 className="font-serif text-lg font-bold text-[#101C2C] mb-1.5">
                  Protection of Privileged Data
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Your communications, business deeds, and personal circumstances remain protected under advocate confidentiality laws in Nepal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Legal Insights and Resources */}
      <section className="py-20 sm:py-28 bg-[#EDE8DD]/40 border-t border-[#E2DBCD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#B38E51] font-semibold block mb-2">
                Knowledge & Advisory
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#101C2C]">
                Legal Insights & Articles
              </h2>
            </div>
            <Link
              to="/resources"
              className="mt-4 md:mt-0 text-xs font-semibold uppercase tracking-wider text-[#101C2C] hover:text-[#B38E51] transition-colors inline-flex items-center gap-1.5"
            >
              <span>Explore All Resources</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C7A56A]" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {ARTICLES.map((art) => (
              <div
                key={art.id}
                className="bg-[#FAF8F5] border border-[#E2DBCD] rounded-sm overflow-hidden flex flex-col justify-between hover:border-[#C7A56A] transition-all group"
              >
                <div className="p-6">
                  {/* Category & Date - Unboxed metadata */}
                  <div className="flex items-center gap-2 text-[11px] text-slate-500 mb-3">
                    <span className="text-[#B38E51] font-medium">{art.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{art.publishedDate}</span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#101C2C] mb-2.5 leading-snug group-hover:text-[#B38E51] transition-colors">
                    <Link to={`/resources/${art.slug}`}>{art.title}</Link>
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {art.summary}
                  </p>
                </div>

                <div className="p-6 pt-0 border-t border-[#EDE8DD] mt-4 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400">{art.readTime}</span>
                  <Link
                    to={`/resources/${art.slug}`}
                    className="text-xs font-semibold text-[#101C2C] group-hover:text-[#B38E51] inline-flex items-center gap-1 transition-colors"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3 h-3 text-[#C7A56A] group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Closing Contact CTA Section */}
      <section className="bg-[#101C2C] text-[#F7F5F0] py-20 border-t border-[#223A5C]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs uppercase tracking-widest text-[#C7A56A] font-semibold block mb-3">
            Get in Touch · Tokha, Kathmandu
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-6 text-balance">
            Have a Legal Question? Let’s Discuss Your Next Steps.
          </h2>

          <p className="text-base text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10">
            Reach out to schedule your preliminary consultation or visit our Kathmandu chamber. Initial consultation fee is NPR 500.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/appointments"
              className="px-8 py-4 text-xs font-semibold uppercase tracking-wider text-[#101C2C] bg-[#C7A56A] hover:bg-[#D8B983] transition-colors rounded-sm shadow-md inline-flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Consultation (NPR 500)</span>
            </Link>

            <Link
              to="/contact"
              className="px-8 py-4 text-xs font-semibold uppercase tracking-wider text-white border border-slate-600 hover:border-[#C7A56A] hover:bg-white/5 transition-colors rounded-sm inline-flex items-center gap-2"
            >
              <span>Contact Chamber</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
