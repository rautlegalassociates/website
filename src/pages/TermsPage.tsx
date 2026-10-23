import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumbs } from "../components/common/Breadcrumbs";
import { FIRM_DETAILS } from "../data/firm";
import {
  Scale,
  AlertTriangle,
  Building2,
  CalendarCheck,
  CheckCircle2,
  Phone,
  Mail,
  Coins,
  Gavel,
} from "lucide-react";
import { SEOHead } from "../components/common/SEOHead";

export const TermsPage: React.FC = () => {
  return (
    <div className="bg-[#F7F5F0] py-12 sm:py-16">
      <SEOHead
        title="Terms of Legal Engagement | Raut Legal Associates"
        description="Review client engagement conditions, NPR 500 consultation fee policies, and legal boundaries under Nepalese civil procedure and Bar Council ethics."
        canonicalPath="/terms"
        keywords={[
          "Nepal law firm terms and conditions",
          "Muluki Civil Code 2074 contract terms",
          "Nepal Bar Council code of conduct",
          "NPR 500 legal consultation terms",
          "Vakalatnama representation Nepal",
          "Warisnama power of attorney",
          "Kathmandu law firm terms",
          "Raut Legal Associates legal disclaimer",
        ]}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Terms and Conditions & Legal Consultation Framework",
          description:
            "Website terms of use, consultation agreement rules, and legal representation conditions of Raut Legal Associates under Nepalese law.",
          publisher: {
            "@type": "LegalService",
            name: "Raut Legal Associates",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Basundhara-5",
              addressLocality: "Tokha, Kathmandu",
              addressCountry: "NP",
            },
          },
          breadcrumb: {
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
                name: "Terms and Conditions",
                item: "https://rautlegalassociates.com/terms",
              },
            ],
          },
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Terms and Conditions" }]} />

        {/* Page Header Banner */}
        <div className="mb-12 pb-8 border-b border-[#E2DBCD]">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#C7A56A]" />
            <span className="text-xs uppercase tracking-widest text-[#B38E51] font-semibold">
              Jurisdiction &amp; Professional Engagement Standards
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#101C2C] leading-tight">
            Terms of Use &amp; Consultation Framework
          </h1>

          <p className="mt-3 text-sm text-slate-600 leading-relaxed max-w-3xl">
            Governed by the <strong>Muluki Civil Code, 2074</strong>, the{" "}
            <strong>Muluki Civil Procedure Code, 2074</strong>, the{" "}
            <strong>Nepal Bar Council Act, 2050</strong>, and the{" "}
            <strong>Electronic Transactions Act, 2063</strong>.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-slate-500">
            <span className="inline-flex items-center gap-1.5 bg-[#FAF8F5] border border-[#E2DBCD] px-3 py-1.5 rounded-xs">
              <Building2 className="w-3.5 h-3.5 text-[#B38E51]" />
              <strong>Chamber:</strong> Basundhara-5, Tokha, Kathmandu
            </span>
            <span className="inline-flex items-center gap-1.5 bg-[#FAF8F5] border border-[#E2DBCD] px-3 py-1.5 rounded-xs">
              <Gavel className="w-3.5 h-3.5 text-[#B38E51]" />
              <strong>Governing Law:</strong> Laws of Nepal (नेपालको कानुन)
            </span>
            <span className="inline-flex items-center gap-1.5 bg-[#FAF8F5] border border-[#E2DBCD] px-3 py-1.5 rounded-xs">
              <Coins className="w-3.5 h-3.5 text-[#B38E51]" />
              <strong>Consultation Fee:</strong> NPR 500 per matter evaluation
            </span>
          </div>
        </div>

        {/* Critical Notice Callout: Advocate-Client Relationship */}
        <div className="mb-12 p-6 sm:p-7 bg-[#101C2C] text-white rounded-xs border border-[#223A5C] shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#C7A56A]/10 rounded-full blur-2xl pointer-events-none" />
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-[#17283F] border border-[#C7A56A]/60 flex items-center justify-center shrink-0 text-[#C7A56A]">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif text-lg sm:text-xl font-bold text-white tracking-wide">
                Mandatory Legal Disclaimer (कानुनी प्रतिनिधित्व सम्बन्धी
                उद्घोषणा)
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                Browsing this website, submitting an appointment request, using
                the on-site AI Chatbot, transmitting a WhatsApp message, or
                paying the preliminary NPR 500 consultation fee{" "}
                <strong>
                  does NOT by itself establish an advocate-client relationship
                  (वकिल र पक्षकार बीचको कानुनी सम्बन्ध)
                </strong>
                . Formal legal representation and litigation advocacy commence
                strictly upon bilateral execution of a written Retainer
                Agreement and issuance of a formal{" "}
                <strong>Vakalatnama (वकलतनामा)</strong> or{" "}
                <strong>Warisnama (वारिसनामा)</strong> accepted by our
                advocates.
              </p>
            </div>
          </div>
        </div>

        {/* Structured Sections */}
        <div className="space-y-10 text-xs sm:text-sm text-slate-700 leading-relaxed">
          {/* Section 1 */}
          <section className="space-y-3 bg-white p-6 sm:p-8 rounded-xs border border-slate-200/80 shadow-2xs">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#101C2C] flex items-center gap-2">
              <span className="text-[#C7A56A] font-sans text-base">1.</span>
              Acceptance of Terms &amp; Scope of Application
            </h2>
            <p>
              These Terms and Conditions (“Terms”) constitute a legally binding
              agreement under the{" "}
              <strong>
                Muluki Civil Code, 2074 (मुलुकी देवानी संहिता, २०७४)
              </strong>{" "}
              between any user, visitor, or prospective client (“you”, “client”)
              and <strong>Raut Legal Associates</strong> (“RLA”, “the firm”),
              having its principal chamber situated at Basundhara-5, Tokha,
              Kathmandu, Nepal.
            </p>
            <p>
              By accessing, browsing, reading content, booking appointments, or
              communicating with our chamber via telephone (+977 9706410516),
              WhatsApp, or electronic forms, you agree to be bound by these
              Terms and our companion Privacy Notice. If you do not accept these
              Terms in full, you must discontinue the use of this website.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3 bg-white p-6 sm:p-8 rounded-xs border border-slate-200/80 shadow-2xs">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#101C2C] flex items-center gap-2">
              <span className="text-[#C7A56A] font-sans text-base">2.</span>
              Informational Nature of Website Content &amp; Statutory Precedents
            </h2>
            <p>
              All materials, legal commentary, blog articles, checklists,
              infographics, and statutory analyses presented on this website are
              published solely for general academic and informative orientation.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-600">
              <li>
                <strong>No Customized Legal Advice:</strong> Content on this
                portal does not constitute personalized legal counsel, an
                enforceable legal opinion, or an exhaustive dissertation on
                specific dispute merits under Nepalese law.
              </li>
              <li>
                <strong>Dynamic Jurisprudence:</strong> Laws in Nepal undergo
                continuous parliamentary modification, ministerial notifications
                in the Nepal Gazette (नेपाल राजपत्र), and binding precedent
                established by the Supreme Court of Nepal published in the Nepal
                Law Journal (नेपाल कानुन पत्रिका - NKP).
              </li>
              <li>
                <strong>Independent Professional Guidance:</strong> Users should
                never initiate, settle, or refrain from legal action solely
                based on website articles without consulting an advocate duly
                licensed by the Nepal Bar Council.
              </li>
            </ul>
          </section>

          {/* Section 3: The Consultation Framework */}
          <section className="space-y-4 bg-white p-6 sm:p-8 rounded-xs border border-slate-200/80 shadow-2xs">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#101C2C] flex items-center gap-2">
              <span className="text-[#C7A56A] font-sans text-base">3.</span>
              Preliminary Consultation Framework (NPR 500 Policy)
            </h2>
            <p>
              To maintain accessibility while ensuring disciplined case triage,
              Raut Legal Associates provides a structured initial consultation
              for a fixed administrative fee of{" "}
              <strong>NPR {FIRM_DETAILS.consultationFeeNPR}</strong>.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 pt-1">
              <div className="p-4 bg-[#FAF8F5] border border-[#E2DBCD] rounded-xs space-y-2">
                <div className="flex items-center gap-2 font-bold text-[#101C2C] text-xs">
                  <CheckCircle2 className="w-4 h-4 text-[#B38E51]" />
                  <span>What the NPR 500 Fee Covers:</span>
                </div>
                <ul className="list-disc pl-4 space-y-1 text-[11.5px] text-slate-600">
                  <li>
                    Dedicated 30 to 45-minute consultation session with a
                    licensed advocate.
                  </li>
                  <li>
                    Evaluation of key documents (e.g. contracts, deeds,
                    Lalpurja, notices).
                  </li>
                  <li>
                    Analysis of statutory limitation periods (हदम्याद) under the
                    Muluki Codes.
                  </li>
                  <li>
                    Clear roadmap of legal options (litigation, ADR, or
                    settlement).
                  </li>
                  <li>
                    Conducted in-person at Tokha chamber or online via secure
                    call/video.
                  </li>
                </ul>
              </div>

              <div className="p-4 bg-[#FAF8F5] border border-[#E2DBCD] rounded-xs space-y-2">
                <div className="flex items-center gap-2 font-bold text-[#101C2C] text-xs">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  <span>What the NPR 500 Fee Excludes:</span>
                </div>
                <ul className="list-disc pl-4 space-y-1 text-[11.5px] text-slate-600">
                  <li>
                    Court appearances or bench arguments before any judicial
                    body.
                  </li>
                  <li>
                    Drafting formal plaints (फिरादपत्र) or defenses
                    (प्रतिउत्तरपत्र).
                  </li>
                  <li>
                    Liaison with government registries (Malpot, Napi, OCR,
                    Police).
                  </li>
                  <li>
                    Payment of court registration fees (कोर्ट फि) or revenue
                    stamps.
                  </li>
                  <li>
                    Ongoing retainer or legal representation beyond the
                    allocated session.
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-2 pt-2 text-xs text-slate-600">
              <p>
                <strong>Payment &amp; Scheduling:</strong> Consultation fees are
                payable in advance or at the chamber reception desk via Fonepay
                QR, eSewa, Khalti, direct bank transfer, or cash.
              </p>
              <p>
                <strong>Rescheduling &amp; Cancellation:</strong> Rescheduling
                requests should be communicated at least two (2) hours prior to
                the scheduled slot via phone or WhatsApp at +977 9706410516.
                Confirmed consultation appointments remain valid for
                rescheduling up to thirty (30) days from booking.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-3 bg-white p-6 sm:p-8 rounded-xs border border-slate-200/80 shadow-2xs">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#101C2C] flex items-center gap-2">
              <span className="text-[#C7A56A] font-sans text-base">4.</span>
              Prohibition of Judicial Outcome Guarantees (नेपाल बार काउन्सिलको
              आचारसंहिता)
            </h2>
            <p>
              In accordance with{" "}
              <strong>
                Rule 3 of the Nepal Bar Council Code of Conduct, 2051
              </strong>
              , no licensed advocate or law chamber in Nepal may guarantee or
              warrant any specific judicial victory, acquittal, court decree,
              injunction order, or regulatory outcome.
            </p>
            <p>
              Legal outcomes depend strictly upon the evidentiary record,
              statutory interpretation, judicial discretion of the competent
              bench (District Court, High Court, or Supreme Court), and legal
              arguments presented in court. Any analysis offered during
              consultations constitutes a professional evaluation of statutory
              strengths and risks, not a guarantee of judgment.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3 bg-white p-6 sm:p-8 rounded-xs border border-slate-200/80 shadow-2xs">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#101C2C] flex items-center gap-2">
              <span className="text-[#C7A56A] font-sans text-base">5.</span>
              Client Responsibilities &amp; Evidentiary Truthfulness
            </h2>
            <p>
              Under Nepalese procedural law, clients must act with utmost good
              faith:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
              <li>
                <strong>Veracity of Facts:</strong> Clients must provide honest,
                complete, and accurate factual narratives. Withholding material
                facts or presenting fabricated documents may impair your legal
                remedies.
              </li>
              <li>
                <strong>
                  Prohibition of Forged Documents (किर्ते कागजात):
                </strong>{" "}
                Submitting forged deeds, unauthorized land maps, or fraudulent
                identity cards is a criminal offense under Chapter 25 of the{" "}
                <strong>Muluki Criminal Code, 2074</strong>. Raut Legal
                Associates reserves the right to immediately decline
                representation if forgery is identified.
              </li>
              <li>
                <strong>Timely Evidence Submission:</strong> Clients are
                responsible for supplying certified land deeds (स्रेस्ता), bank
                statements, and witness details well in advance of court
                limitation deadlines (हदम्याद).
              </li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="space-y-3 bg-white p-6 sm:p-8 rounded-xs border border-slate-200/80 shadow-2xs">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#101C2C] flex items-center gap-2">
              <span className="text-[#C7A56A] font-sans text-base">6.</span>
              Acceptable Use of Digital Platforms &amp; AI Chatbot
            </h2>
            <p>
              The digital features of our website, including the appointment
              scheduling form, contact forms, and the AI Assistant, are
              regulated under the{" "}
              <strong>
                Electronic Transactions Act, 2063 (विद्युतीय कारोबार ऐन, २०६३)
              </strong>
              :
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
              <li>
                Users must not transmit automated bots, malware, spam, or
                defamatory communications through our digital contact points.
              </li>
              <li>
                Our AI Legal Assistant is an informational algorithmic utility
                trained on general Nepalese statutory frameworks. AI outputs do
                not carry advocate liability, do not constitute formal legal
                drafting, and must be verified by our human advocates.
              </li>
            </ul>
          </section>

          {/* Section 7 */}
          <section className="space-y-3 bg-white p-6 sm:p-8 rounded-xs border border-slate-200/80 shadow-2xs">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#101C2C] flex items-center gap-2">
              <span className="text-[#C7A56A] font-sans text-base">7.</span>
              Governing Law &amp; Judicial Jurisdiction (क्षेत्राधिकार)
            </h2>
            <p>
              These Terms, the legal consultation agreement, and any claims or
              disputes arising out of your relationship with Raut Legal
              Associates shall be governed strictly and exclusively by the
              substantive and procedural laws of Nepal.
            </p>
            <p>
              In the event of any contractual dispute, the parties shall first
              attempt good-faith mediation at our chamber in Tokha. Should
              amicable resolution fail, the courts situated in{" "}
              <strong>Kathmandu, Nepal</strong> (District Court Kathmandu, High
              Court Patan, and Supreme Court of Nepal) shall have exclusive
              territorial and subject-matter jurisdiction.
            </p>
          </section>

          {/* Section 8: Firm Chamber Details */}
          <section className="space-y-4 bg-white p-6 sm:p-8 rounded-xs border border-slate-200/80 shadow-2xs">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#101C2C] flex items-center gap-2">
              <span className="text-[#C7A56A] font-sans text-base">8.</span>
              Chamber Inquiries &amp; Official Communications
            </h2>
            <p>
              For any formal correspondence regarding these Terms or to schedule
              an appointment with our legal team:
            </p>

            <div className="p-5 bg-[#FAF8F5] border border-[#E2DBCD] rounded-xs space-y-2 text-xs">
              <div className="font-serif text-base font-bold text-[#101C2C]">
                Raut Legal Associates — Legal Chamber
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <Building2 className="w-4 h-4 text-[#C7A56A]" />
                <span>Basundhara-5, Tokha, Kathmandu, Nepal</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <Phone className="w-4 h-4 text-[#C7A56A]" />
                <span>
                  Direct Phone &amp; WhatsApp:{" "}
                  <strong>{FIRM_DETAILS.phoneDisplay}</strong>
                </span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <Mail className="w-4 h-4 text-[#C7A56A]" />
                <span>
                  Official Email:{" "}
                  <a
                    href={`mailto:${FIRM_DETAILS.email}`}
                    className="text-[#101C2C] hover:text-[#C7A56A] font-semibold underline underline-offset-2"
                  >
                    {FIRM_DETAILS.email}
                  </a>
                </span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <Scale className="w-4 h-4 text-[#C7A56A]" />
                <span>
                  Advocates: Adv. Sahil Raut Gaddi, Adv. Avishek Raut, Adv.
                  Bishwanath Das
                </span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <Coins className="w-4 h-4 text-[#C7A56A]" />
                <span>Initial Matter Assessment Fee: NPR 500</span>
              </div>
            </div>
          </section>
        </div>

        {/* Quick Action Footer Strip */}
        <div className="mt-12 p-6 bg-[#FAF8F5] border border-[#E2DBCD] rounded-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-600 text-center sm:text-left">
            <span className="font-semibold text-[#101C2C] block text-sm">
              Ready to Schedule an Evaluation?
            </span>
            Meet with our advocates in Basundhara-5, Tokha or connect online for{" "}
            <strong>NPR 500</strong>.
          </div>
          <div className="flex items-center gap-3">
            <Link
              to="/privacy-policy"
              className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-700 hover:text-[#101C2C] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/appointments"
              className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider bg-[#101C2C] text-white hover:bg-[#17283F] rounded-xs transition-colors flex items-center gap-2 shadow-xs"
            >
              <CalendarCheck className="w-3.5 h-3.5 text-[#C7A56A]" />
              <span>Book Consultation</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
