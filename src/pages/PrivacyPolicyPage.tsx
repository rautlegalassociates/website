import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumbs } from "../components/common/Breadcrumbs";
import { FIRM_DETAILS } from "../data/firm";
import {
  ShieldCheck,
  Lock,
  Scale,
  AlertCircle,
  Building2,
  CalendarCheck,
  CheckCircle2,
  Phone,
  Mail,
} from "lucide-react";
import { SEOHead } from "../components/common/SEOHead";

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="bg-[#F7F5F0] py-12 sm:py-16">
      <SEOHead
        title="Privacy & Client Privilege | Raut Legal Nepal"
        description="Read our data protection notice under Article 28 of the Constitution of Nepal, Right to Privacy Act 2075, and advocate-client privilege standards."
        canonicalPath="/privacy-policy"
        keywords={[
          "Nepal privacy policy law firm",
          "Right to Privacy Act 2075",
          "Nepal Bar Council confidentiality",
          "advocate client privilege Nepal",
          "Evidence Act 2031 privileged communication",
          "Electronic Transactions Act 2063",
          "Raut Legal Associates privacy",
          "Kathmandu law firm confidentiality",
        ]}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Privacy Notice & Client Privilege Policy",
          description:
            "Data protection and advocate-client privilege framework of Raut Legal Associates under Nepalese law.",
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
                name: "Privacy Policy",
                item: "https://rautlegalassociates.com/privacy-policy",
              },
            ],
          },
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Privacy Policy" }]} />

        {/* Page Header Banner */}
        <div className="mb-12 pb-8 border-b border-[#E2DBCD]">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#C7A56A]" />
            <span className="text-xs uppercase tracking-widest text-[#B38E51] font-semibold">
              Statutory Compliance &amp; Advocate Privilege
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#101C2C] leading-tight">
            Privacy Notice &amp; Client Privilege Policy
          </h1>

          <p className="mt-3 text-sm text-slate-600 leading-relaxed max-w-3xl">
            Governed by the <strong>Constitution of Nepal</strong> (Article 28),
            the <strong>Right to Privacy Act, 2075 (2018)</strong>, the{" "}
            <strong>Electronic Transactions Act, 2063 (2006)</strong>, and the{" "}
            <strong>Nepal Bar Council Code of Conduct, 2051</strong>.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-slate-500">
            <span className="inline-flex items-center gap-1.5 bg-[#FAF8F5] border border-[#E2DBCD] px-3 py-1.5 rounded-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-[#B38E51]" />
              <strong>Chamber:</strong> Basundhara-5, Tokha, Kathmandu
            </span>
            <span className="inline-flex items-center gap-1.5 bg-[#FAF8F5] border border-[#E2DBCD] px-3 py-1.5 rounded-xs">
              <Scale className="w-3.5 h-3.5 text-[#B38E51]" />
              <strong>Jurisdiction:</strong> Federal Democratic Republic of
              Nepal
            </span>
            <span className="inline-flex items-center gap-1.5 bg-[#FAF8F5] border border-[#E2DBCD] px-3 py-1.5 rounded-xs">
              <Lock className="w-3.5 h-3.5 text-[#B38E51]" />
              <strong>Effective:</strong> October 2026
            </span>
          </div>
        </div>

        {/* Highlight Callout Box: Nepal Bar Council Privilege */}
        <div className="mb-12 p-6 sm:p-7 bg-[#101C2C] text-white rounded-xs border border-[#223A5C] shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#C7A56A]/10 rounded-full blur-2xl pointer-events-none" />
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-[#17283F] border border-[#C7A56A]/60 flex items-center justify-center shrink-0 text-[#C7A56A]">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif text-lg sm:text-xl font-bold text-white tracking-wide">
                Special Legal Privilege Notice (वकिल र पक्षकार बीचको
                विशेषाधिकार)
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                Communications between an advocate and a client within our
                chamber are strictly safeguarded under{" "}
                <strong>
                  Sections 40, 41, and 42 of the Nepal Evidence Act, 2031 (1974)
                </strong>{" "}
                and{" "}
                <strong>
                  Rule 3 of the Nepal Bar Council Code of Conduct, 2051
                </strong>
                . No advocate of Raut Legal Associates can be compelled to
                disclose privileged professional communications or advice
                tendered in confidence, save where required by mandatory
                statutory exception or express client consent.
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
              Statutory Basis &amp; Constitutional Mandate
            </h2>
            <p>
              Raut Legal Associates (“RLA”, “we”, “us”, “the firm”) is a premier
              law practice established in Basundhara-5, Tokha, Kathmandu, Nepal,
              represented by licensed advocates Adv. Sahil Raut Gaddi, Adv.
              Avishek Raut, and Adv. Bishwanath Das.
            </p>
            <p>
              We affirm that privacy is not merely a policy commitment, but a
              fundamental right guaranteed under{" "}
              <strong>
                Article 28 of the Constitution of Nepal (गोपनीयताको हक)
              </strong>
              . This Privacy Notice articulates how we collect, process,
              maintain, store, and dispose of information received from
              prospective clients, existing clients, and visitors using our
              official website (
              <code className="bg-[#FAF8F5] px-1.5 py-0.5 rounded-xs text-[#101C2C]">
                https://rautlegalassociates.com
              </code>
              ), our appointment booking portal, our WhatsApp communication
              channel, and our AI consultation assistant.
            </p>
            <p>Our data processing compliance aligns fully with:</p>
            <ul className="grid sm:grid-cols-2 gap-2 mt-2">
              <li className="flex items-start gap-2 bg-[#FAF8F5] p-3 border border-slate-200 rounded-xs">
                <CheckCircle2 className="w-4 h-4 text-[#B38E51] shrink-0 mt-0.5" />
                <span>
                  <strong>Right to Privacy Act, 2075 (2018)</strong> (वैयक्तिक
                  गोपनीयता सम्बन्धी ऐन, २०७५) and Rules, 2077
                </span>
              </li>
              <li className="flex items-start gap-2 bg-[#FAF8F5] p-3 border border-slate-200 rounded-xs">
                <CheckCircle2 className="w-4 h-4 text-[#B38E51] shrink-0 mt-0.5" />
                <span>
                  <strong>Electronic Transactions Act, 2063 (2006)</strong>{" "}
                  (विद्युतीय कारोबार ऐन, २०६३)
                </span>
              </li>
              <li className="flex items-start gap-2 bg-[#FAF8F5] p-3 border border-slate-200 rounded-xs">
                <CheckCircle2 className="w-4 h-4 text-[#B38E51] shrink-0 mt-0.5" />
                <span>
                  <strong>Nepal Bar Council Act, 2050 (1993)</strong> and Code
                  of Conduct, 2051
                </span>
              </li>
              <li className="flex items-start gap-2 bg-[#FAF8F5] p-3 border border-slate-200 rounded-xs">
                <CheckCircle2 className="w-4 h-4 text-[#B38E51] shrink-0 mt-0.5" />
                <span>
                  <strong>Nepal Evidence Act, 2031 (1974)</strong> (Section
                  40–42 Privileged Communications)
                </span>
              </li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="space-y-4 bg-white p-6 sm:p-8 rounded-xs border border-slate-200/80 shadow-2xs">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#101C2C] flex items-center gap-2">
              <span className="text-[#C7A56A] font-sans text-base">2.</span>
              Information We Collect &amp; Lawful Grounds of Processing
            </h2>
            <p>
              Under{" "}
              <strong>
                Section 5 and Section 6 of the Right to Privacy Act, 2075
              </strong>
              , personal data may only be obtained with the voluntary consent of
              the individual for an identified lawful purpose. We collect
              information through three distinct stages of engagement:
            </p>

            <div className="space-y-4 pt-2">
              <div className="border-l-2 border-[#C7A56A] pl-4 py-1">
                <h3 className="font-bold text-[#101C2C] text-sm mb-1">
                  A. Preliminary Web Forms &amp; Consultation Booking (NPR 500
                  Session)
                </h3>
                <p className="text-slate-600">
                  When submitting our online consultation booking form or
                  contact request, we collect your{" "}
                  <strong>Full Legal Name</strong>,{" "}
                  <strong>Nepali Mobile Telephone Number (+977)</strong>,
                  optional <strong>Email Address</strong>, preferred{" "}
                  <strong>Consultation Date &amp; Time Slot</strong>,{" "}
                  <strong>Preferred Mode</strong> (In-person at Tokha chamber or
                  Online via secure video/call), the{" "}
                  <strong>Primary Practice Area</strong>, and a brief{" "}
                  <strong>Matter Summary</strong>.
                </p>
              </div>

              <div className="border-l-2 border-[#C7A56A] pl-4 py-1">
                <h3 className="font-bold text-[#101C2C] text-sm mb-1">
                  B. Substantive Legal Retainer &amp; Case Filing Stage
                </h3>
                <p className="text-slate-600">
                  Upon executing a formal retainer (Vakalatnama/Warisnama), we
                  collect verifiable verification documents required by Nepalese
                  courts and government registries: Nepalese Citizenship
                  Certificate (नागरिकता), Land Ownership Certificates (लालपुर्जा
                  / स्रेस्ता), Cadastral Survey maps (नापी नक्सा), Company
                  Registration Certificates (कम्पनी दर्ता प्रमाण-पत्र) from OCR,
                  Tax/PAN/VAT records from IRD, and formal contracts.
                </p>
              </div>

              <div className="border-l-2 border-[#C7A56A] pl-4 py-1">
                <h3 className="font-bold text-[#101C2C] text-sm mb-1">
                  C. Automated AI Chatbot &amp; Technical Logs
                </h3>
                <p className="text-slate-600">
                  When interacting with our on-site AI Legal Assistant,
                  conversation queries are processed in real-time to generate
                  educational guidance regarding Nepalese statutes. We do not
                  require or advise entering national identification numbers or
                  sensitive banking secrets into the chatbot prompt window.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-3 bg-white p-6 sm:p-8 rounded-xs border border-slate-200/80 shadow-2xs">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#101C2C] flex items-center gap-2">
              <span className="text-[#C7A56A] font-sans text-base">3.</span>
              Exclusive Purposes of Information Utilization
            </h2>
            <p>
              Data collected by Raut Legal Associates is handled exclusively for
              legal, administrative, and statutory duties:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-600">
              <li>
                <strong>
                  Conflict of Interest Verification (स्वार्थको द्वन्द्व
                  परीक्षण):
                </strong>{" "}
                Before accepting any case or scheduling detailed case reviews,
                the Nepal Bar Council Code of Conduct mandates that we verify
                whether representing you would conflict with our obligations to
                existing or prior clients.
              </li>
              <li>
                <strong>Scheduling &amp; Chamber Administration:</strong>{" "}
                Coordinating your NPR 500 consultation appointment at our Tokha
                office, dispatching appointment confirmation codes, and
                providing venue directions.
              </li>
              <li>
                <strong>Legal Drafting &amp; Judicial Representation:</strong>{" "}
                Preparing plaints (फिरादपत्र), defenses (प्रतिउत्तरपत्र),
                rejoinders, affidavits, and corporate minutes when formally
                engaged.
              </li>
              <li>
                <strong>Statutory Accounting:</strong> Issuing formal tax
                invoices and receipts for consultation fees and legal retainers
                in accordance with Inland Revenue Department (IRD) Nepal tax
                regulations.
              </li>
            </ul>
            <div className="p-3.5 bg-[#FAF8F5] border border-[#E2DBCD] text-xs text-slate-700 font-medium">
              Commercial Disclosure Prohibition: Raut Legal Associates does NOT
              sell, rent, monetize, or disclose client names, phone numbers, or
              case records to any commercial marketing agency or advertising
              network.
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-3 bg-white p-6 sm:p-8 rounded-xs border border-slate-200/80 shadow-2xs">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#101C2C] flex items-center gap-2">
              <span className="text-[#C7A56A] font-sans text-base">4.</span>
              Data Security &amp; Confidential Archiving
            </h2>
            <p>
              In compliance with{" "}
              <strong>
                Section 27 and Section 28 of the Right to Privacy Act, 2075
              </strong>
              , we enforce institutional safeguards to ensure that electronic
              and physical records are secured:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
              <li>
                <strong>Transport Security:</strong> All web traffic to our
                website and booking API is encrypted using modern Transport
                Layer Security (HTTPS/TLS).
              </li>
              <li>
                <strong>Physical Chamber Security:</strong> Original client case
                folders and court briefs are maintained within locked archives
                at our chamber in Basundhara-5, Tokha, accessible solely to
                designated advocates and chamber clerks.
              </li>
              <li>
                <strong>Access Control:</strong> Only our enrolled advocates
                (Adv. Sahil Raut Gaddi, Adv. Avishek Raut, Adv. Bishwanath Das)
                and assigned legal researchers bound by non-disclosure
                agreements have access to case files.
              </li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="space-y-3 bg-white p-6 sm:p-8 rounded-xs border border-slate-200/80 shadow-2xs">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#101C2C] flex items-center gap-2">
              <span className="text-[#C7A56A] font-sans text-base">5.</span>
              Retention Periods &amp; Court Limitation Periods (हदम्याद)
            </h2>
            <p>
              Under the <strong>Muluki Civil Procedure Code, 2074</strong> and
              the <strong>Muluki Criminal Procedure Code, 2074</strong>,
              lawsuits, appeals (पुनरावेदन), execution of decrees (फैसला
              कार्यान्वयन), and reviews have statutory limitation periods
              spanning from months to several years.
            </p>
            <p>Accordingly:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
              <li>
                <strong>Unrealized Inquiries:</strong> Preliminary contact
                submissions that do not proceed to a formal consultation are
                archived for 90 days for conflict clearance before being purged.
              </li>
              <li>
                <strong>Active Client Case Files:</strong> Kept throughout the
                duration of litigation, arbitration, or commercial negotiation,
                plus a statutory period of 5 years following final judgment
                decree to facilitate appellate rights or execution of judgment.
              </li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="space-y-3 bg-white p-6 sm:p-8 rounded-xs border border-slate-200/80 shadow-2xs">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#101C2C] flex items-center gap-2">
              <span className="text-[#C7A56A] font-sans text-base">6.</span>
              Your Rights Under the Right to Privacy Act, 2075
            </h2>
            <p>
              As a data subject under Nepalese law, you hold specific
              enforceable statutory rights:
            </p>
            <div className="grid sm:grid-cols-2 gap-3 pt-1">
              <div className="p-3.5 bg-[#FAF8F5] border border-[#E2DBCD] rounded-xs">
                <h4 className="font-bold text-[#101C2C] text-xs">
                  Right to Inspection (हेर्न पाउने अधिकार)
                </h4>
                <p className="text-[11.5px] text-slate-600 mt-1">
                  You may request a summary of the personal information stored
                  in our administrative records.
                </p>
              </div>
              <div className="p-3.5 bg-[#FAF8F5] border border-[#E2DBCD] rounded-xs">
                <h4 className="font-bold text-[#101C2C] text-xs">
                  Right to Rectification (सच्याउने अधिकार)
                </h4>
                <p className="text-[11.5px] text-slate-600 mt-1">
                  You may correct any inaccurate contact information or
                  corporate particulars in your file.
                </p>
              </div>
              <div className="p-3.5 bg-[#FAF8F5] border border-[#E2DBCD] rounded-xs">
                <h4 className="font-bold text-[#101C2C] text-xs">
                  Right to Erasure (मेटाउने अधिकार)
                </h4>
                <p className="text-[11.5px] text-slate-600 mt-1">
                  You may request deletion of non-statutory records once all
                  legal proceedings and invoicing are concluded.
                </p>
              </div>
              <div className="p-3.5 bg-[#FAF8F5] border border-[#E2DBCD] rounded-xs">
                <h4 className="font-bold text-[#101C2C] text-xs">
                  Right to Revoke Consent (सहमति फिर्ता)
                </h4>
                <p className="text-[11.5px] text-slate-600 mt-1">
                  You may withdraw consent for informational newsletters or
                  administrative follow-ups at any time.
                </p>
              </div>
            </div>
          </section>

          {/* Section 7 */}
          <section className="space-y-3 bg-white p-6 sm:p-8 rounded-xs border border-slate-200/80 shadow-2xs">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#101C2C] flex items-center gap-2">
              <span className="text-[#C7A56A] font-sans text-base">7.</span>
              Third-Party Digital Channels &amp; Disclaimers
            </h2>
            <p>
              Our website links to third-party tools for user convenience,
              including <strong>WhatsApp</strong> and{" "}
              <strong>Google Maps</strong>:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
              <li>
                <strong>WhatsApp Inquiries:</strong> When initiating a
                conversation via WhatsApp with our chamber (+977 9706410516),
                communications are subject to WhatsApp's end-to-end encryption
                and terms. We advise clients to refrain from sending
                confidential trial strategies via instant messaging prior to
                executing a retainer.
              </li>
              <li>
                <strong>Digital Payment Gateways:</strong> Payments for the NPR
                500 consultation fee initiated via Fonepay, eSewa, or Khalti are
                processed directly by Nepal Rastra Bank-licensed payment service
                operators. RLA does not store your banking credentials or MPINs.
              </li>
            </ul>
          </section>

          {/* Section 8: Grievance Officer & Contact */}
          <section className="space-y-4 bg-white p-6 sm:p-8 rounded-xs border border-slate-200/80 shadow-2xs">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#101C2C] flex items-center gap-2">
              <span className="text-[#C7A56A] font-sans text-base">8.</span>
              Privacy Officer &amp; Chamber Contact Details
            </h2>
            <p>
              Pursuant to the provisions of the{" "}
              <strong>Right to Privacy Act, 2075</strong>, any concerns,
              grievance, or request regarding personal information should be
              directed to our designated chamber administrator:
            </p>

            <div className="p-5 bg-[#FAF8F5] border border-[#E2DBCD] rounded-xs space-y-2 text-xs">
              <div className="font-serif text-base font-bold text-[#101C2C]">
                Raut Legal Associates — Chamber Office
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <Building2 className="w-4 h-4 text-[#C7A56A]" />
                <span>
                  Basundhara-5, Tokha, Kathmandu, Bagmati Province, Nepal
                </span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <Phone className="w-4 h-4 text-[#C7A56A]" />
                <span>
                  Chamber Telephone &amp; WhatsApp:{" "}
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
                  Advising Advocates: Adv. Sahil Raut Gaddi, Adv. Avishek Raut,
                  Adv. Bishwanath Das
                </span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <AlertCircle className="w-4 h-4 text-[#C7A56A]" />
                <span>Chamber Hours: {FIRM_DETAILS.officeHours}</span>
              </div>
            </div>
          </section>
        </div>

        {/* Quick Action Footer Strip */}
        <div className="mt-12 p-6 bg-[#FAF8F5] border border-[#E2DBCD] rounded-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-600 text-center sm:text-left">
            <span className="font-semibold text-[#101C2C] block text-sm">
              Need a Confidential Case Evaluation?
            </span>
            Book a 30–45 minute consultation with an advocate for{" "}
            <strong>NPR 500</strong>.
          </div>
          <div className="flex items-center gap-3">
            <Link
              to="/terms"
              className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-700 hover:text-[#101C2C] transition-colors"
            >
              View Terms of Service
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
