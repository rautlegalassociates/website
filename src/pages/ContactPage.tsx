import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumbs } from "../components/common/Breadcrumbs";
import { ContactForm } from "../features/contact/ContactForm";
import { LegalDisclaimer } from "../components/common/LegalDisclaimer";
import { FIRM_DETAILS } from "../data/firm";
import {
  MapPin,
  Phone,
  Clock,
  Mail,
  Calendar,
  Compass,
  ShieldCheck,
} from "lucide-react";
import { SEOHead } from "../components/common/SEOHead";
import { WhatsAppButton } from "../components/common/WhatsAppButton";

export const ContactPage: React.FC = () => {
  return (
    <div className="bg-[#F7F5F0] py-12 sm:py-16">
      <SEOHead
        title="Contact Our Chamber | Raut Legal Associates Kathmandu"
        description="Connect with our legal chamber in Basundhara-5, Tokha, Kathmandu. Call or WhatsApp +977 9706410516 for inquiries or book an appointment online today."
        canonicalPath="/contact"
        keywords={[
          "contact law firm Kathmandu",
          "Raut Legal Associates phone number",
          "Tokha law office Kathmandu",
          "Nepal lawyer contact",
        ]}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact Raut Legal Associates",
          mainEntity: {
            "@type": "LegalService",
            name: "Raut Legal Associates",
            telephone: "+9779706410516",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Basundhara-5",
              addressLocality: "Tokha, Kathmandu",
              addressRegion: "Bagmati Province",
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
                name: "Contact",
                item: "https://rautlegalassociates.com/contact",
              },
            ],
          },
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Contact Us" }]} />

        {/* Page Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs uppercase tracking-widest text-[#B38E51] font-semibold block mb-2">
            Chamber Inquiries · Kathmandu, Nepal
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-semibold tracking-tight text-[#101C2C]">
            Contact Raut Legal Associates
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed font-light">
            We welcome inquiries from prospective corporate and individual
            clients. Connect with our chamber coordinator or schedule an
            appointment.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="mb-6">
              <h2 className="font-serif text-2xl font-bold text-[#101C2C] mb-2">
                Send a Message to Our Chamber
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Please provide an overview of your inquiry. For time-sensitive
                matters, we encourage calling our direct office line.
              </p>
            </div>

            <ContactForm />
          </div>

          {/* Sidebar: Details, Location & Direction Guide */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Contact Box */}
            <div className="bg-[#101C2C] text-white rounded-sm p-7 border border-[#C7A56A]/40 shadow-sm space-y-6">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#C7A56A] font-semibold block mb-1">
                  Primary Contact
                </span>
                <h3 className="font-serif text-2xl font-bold text-white">
                  Chamber Coordinates
                </h3>
              </div>

              <div className="space-y-4 text-xs text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#C7A56A] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block mb-0.5">
                      Physical Office Address:
                    </strong>
                    <span className="text-slate-300 leading-relaxed">
                      {FIRM_DETAILS.address}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#C7A56A] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block mb-0.5">
                      Telephone / Mobile:
                    </strong>
                    <a
                      href={`tel:${FIRM_DETAILS.phone}`}
                      className="text-[#C7A56A] hover:underline font-medium text-sm"
                    >
                      {FIRM_DETAILS.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#C7A56A] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block mb-0.5">
                      Chamber Office Hours:
                    </strong>
                    <span className="text-slate-300 leading-relaxed">
                      {FIRM_DETAILS.officeHours}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#C7A56A] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block mb-0.5">
                      Email Communications:
                    </strong>
                    <a
                      href={`mailto:${FIRM_DETAILS.email}`}
                      className="text-slate-300 hover:text-[#C7A56A] transition-colors break-all"
                    >
                      {FIRM_DETAILS.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800">
                <div className="text-xs text-slate-400 mb-3">
                  Consultation Fee:{" "}
                  <strong className="text-[#C7A56A]">
                    NPR {FIRM_DETAILS.consultationFeeNPR}
                  </strong>
                </div>
                <Link
                  to="/appointments"
                  className="w-full text-center py-3 text-xs uppercase tracking-wider font-semibold bg-[#C7A56A] text-[#101C2C] hover:bg-[#D8B983] transition-colors rounded-sm flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Consultation Online</span>
                </Link>
              </div>
            </div>

            {/* Directions Guide (No fake map pins) */}
            <div className="bg-[#FAF8F5] border border-[#E2DBCD] rounded-sm p-6 space-y-3 text-xs text-slate-600">
              <div className="flex items-center gap-2 font-serif text-base font-bold text-[#101C2C]">
                <Compass className="w-4 h-4 text-[#B38E51]" />
                <span>Directions to Tokha Chamber</span>
              </div>
              <p className="leading-relaxed">
                Our office is situated in Basundhara-5, Tokha municipality in
                Kathmandu, accessible via the Ring Road (Basundhara Chowk)
                heading towards Tokha road.
              </p>
              <p className="leading-relaxed">
                If traveling by public transit or ride-share, navigate towards
                Basundhara-5 ward area. Parking is available nearby for
                scheduled appointments.
              </p>
              <div className="pt-2 text-[11px] text-slate-500 border-t border-slate-200">
                Please call ahead before visiting to ensure an advocate is
                available and not in court sessions.
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-16">
          <LegalDisclaimer />
        </div>
      </div>
    </div>
  );
};
