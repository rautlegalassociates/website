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
  ExternalLink,
  Navigation,
  Car,
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
            hasMap: FIRM_DETAILS.googleMapsUrl,
            geo: {
              "@type": "GeoCoordinates",
              latitude: 27.7475,
              longitude: 85.3255,
            },
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

              <div className="space-y-5 text-xs text-slate-300">
                {/* Distinct Highlighted Office Location Card */}
                <div className="bg-[#18283C] border-2 border-[#C7A56A] rounded-sm p-4 shadow-md relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-28 h-28 bg-[#C7A56A]/10 rounded-full blur-xl pointer-events-none" />

                  <div className="flex items-start gap-3.5">
                    <div className="w-11 h-11 rounded-sm bg-[#C7A56A] text-[#101C2C] flex items-center justify-center shrink-0 shadow-md ring-2 ring-[#C7A56A]/30">
                      <MapPin className="w-6 h-6 fill-[#101C2C]" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#C7A56A]/20 border border-[#C7A56A]/40 text-[#C7A56A] text-[10px] font-bold uppercase tracking-wider mb-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span>Chamber Office Location</span>
                      </div>
                      <strong className="text-white block font-serif text-sm">
                        {FIRM_DETAILS.name}
                      </strong>
                      <span className="text-slate-200 leading-relaxed block mt-0.5">
                        {FIRM_DETAILS.address}
                      </span>
                      <p className="text-[11px] text-[#C7A56A] mt-1">
                        Basundhara-5, Tokha (near Ring Road)
                      </p>

                      <div className="mt-3 pt-2.5 border-t border-slate-700/80 flex items-center justify-between">
                        <span className="text-[10px] text-slate-400">
                          Kathmandu, Nepal
                        </span>
                        <a
                          href={FIRM_DETAILS.googleMapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#101C2C] bg-[#C7A56A] hover:bg-[#D8B983] px-2.5 py-1 rounded-xs transition-colors"
                        >
                          <Navigation className="w-3 h-3" />
                          <span>Get Directions</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Secondary Contact Items */}
                <div className="space-y-3 pt-1">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-800/80 border border-slate-700 flex items-center justify-center shrink-0 text-[#C7A56A]">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[11px]">
                        Telephone / Mobile:
                      </span>
                      <a
                        href={`tel:${FIRM_DETAILS.phone}`}
                        className="text-[#C7A56A] hover:underline font-medium text-sm"
                      >
                        {FIRM_DETAILS.phoneDisplay}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-800/80 border border-slate-700 flex items-center justify-center shrink-0 text-[#C7A56A]">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[11px]">
                        Chamber Office Hours:
                      </span>
                      <span className="text-slate-300 leading-relaxed">
                        {FIRM_DETAILS.officeHours}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-800/80 border border-slate-700 flex items-center justify-center shrink-0 text-[#C7A56A]">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[11px]">
                        Email Communications:
                      </span>
                      <a
                        href={`mailto:${FIRM_DETAILS.email}`}
                        className="text-slate-300 hover:text-[#C7A56A] transition-colors break-all"
                      >
                        {FIRM_DETAILS.email}
                      </a>
                    </div>
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

            {/* Directions Guide */}
            <div className="bg-[#FAF8F5] border border-[#E2DBCD] rounded-sm p-6 space-y-3 text-xs text-slate-600">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 font-serif text-base font-bold text-[#101C2C]">
                  <Compass className="w-4 h-4 text-[#B38E51]" />
                  <span>Directions to Tokha Chamber</span>
                </div>
                <a
                  href={FIRM_DETAILS.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[#B38E51] hover:underline inline-flex items-center gap-1 text-[11px]"
                >
                  <span>Open Map</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
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

        {/* Interactive Chamber Location & Map Section */}
        <div className="mt-14 bg-white rounded-sm border border-[#E2DBCD] overflow-hidden shadow-xs">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 sm:p-8 bg-[#FAF8F5] border-b border-[#E2DBCD]/80">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#B38E51] font-semibold mb-1">
                <MapPin className="w-3.5 h-3.5" />
                <span>Office Location & Access</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#101C2C]">
                Chamber Map & Directions
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
                Located in Basundhara-5, Tokha, Kathmandu — conveniently
                accessible from the Ring Road (Basundhara Chowk).
              </p>
            </div>

            <a
              href={FIRM_DETAILS.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs uppercase tracking-wider font-semibold bg-[#101C2C] text-[#FAF8F5] hover:bg-[#1E3048] hover:text-[#C7A56A] transition-colors rounded-sm shadow-xs self-start md:self-auto shrink-0"
            >
              <Navigation className="w-4 h-4 text-[#C7A56A]" />
              <span>Get Directions on Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-70" />
            </a>
          </div>

          {/* Interactive Map Iframe with Prominent Branded Location Pin & Card */}
          <div className="relative w-full h-[380px] sm:h-[440px] md:h-[480px] bg-slate-100 overflow-hidden">
            <iframe
              title="Raut Legal Associates Office Location Map"
              src={FIRM_DETAILS.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />

            {/* Prominent Floating Office Location Spotlight Card on Map */}
            <div className="hidden sm:flex absolute top-4 left-4 right-4 sm:right-auto sm:max-w-xs z-10 pointer-events-auto">
              <div className="bg-[#101C2C]/95 backdrop-blur-md text-white p-4 rounded-sm border-2 border-[#C7A56A] shadow-2xl space-y-2.5">
                <div className="flex items-center justify-between gap-2">
                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#C7A56A] text-[#101C2C] text-[10px] font-bold uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                    <span>Office Chamber</span>
                  </div>
                  <span className="text-[10px] text-[#C7A56A] font-semibold tracking-wider uppercase">
                    Kathmandu
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-base font-bold text-white flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-[#C7A56A] shrink-0" />
                    <span>Raut Legal Associates</span>
                  </h3>
                  <p className="text-xs text-slate-200 mt-1 leading-relaxed">
                    {FIRM_DETAILS.address}
                  </p>
                  <p className="text-[11px] text-[#C7A56A] mt-0.5 font-medium">
                    Near Basundhara Chowk &middot; Tokha Road
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-700/80 flex items-center justify-between gap-2">
                  <span className="text-[10px] text-slate-400">
                    Sun–Fri: 8AM–6PM
                  </span>
                  <a
                    href={FIRM_DETAILS.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#101C2C] bg-[#C7A56A] hover:bg-[#D8B983] px-2.5 py-1 rounded-xs transition-colors"
                  >
                    <span>Navigate</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Distinct Center Pin Highlight Marker Overlay with Radar Pulse */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full pointer-events-none z-10 flex flex-col items-center">
              {/* Radar Rings */}
              <div className="relative flex items-center justify-center">
                <span className="absolute w-16 h-16 rounded-full bg-[#C7A56A]/30 animate-ping" />
                <span className="absolute w-10 h-10 rounded-full bg-[#C7A56A]/50" />
                {/* Standout Pin Badge */}
                <div className="relative z-10 bg-[#101C2C] border-2 border-[#C7A56A] text-white px-3 py-1.5 rounded shadow-2xl text-xs font-bold flex items-center gap-2 whitespace-nowrap">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <MapPin className="w-4 h-4 text-[#C7A56A] fill-[#C7A56A]" />
                  <span className="tracking-wide">
                    Raut Legal Associates Chamber
                  </span>
                </div>
              </div>
              {/* Pin Arrow */}
              <div className="w-3 h-3.5 bg-[#101C2C] [clip-path:polygon(0_0,100%_0,50%_100%)] -mt-0.5 border-x border-[#C7A56A]/80" />
              {/* Target Dot */}
              <div className="w-3 h-3 rounded-full bg-[#C7A56A] ring-4 ring-white shadow-xl mt-0.5" />
            </div>
          </div>

          {/* Location Key Highlights with Prominent Chamber Focus */}
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#E2DBCD] bg-[#FDFCFB] border-t border-[#E2DBCD] text-xs">
            {/* Column 1: Highlighted Office Landmark */}
            <div className="p-4 sm:p-5 flex items-start gap-3.5 bg-[#FAF5EB] border-l-4 sm:border-l-0 border-l-[#C7A56A]">
              <div className="w-9 h-9 rounded-sm bg-[#C7A56A] text-[#101C2C] flex items-center justify-center shrink-0 shadow-xs ring-2 ring-[#C7A56A]/20">
                <MapPin className="w-5 h-5 fill-[#101C2C]" />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider font-bold text-[#B38E51] block mb-0.5">
                  Main Chamber Landmark
                </span>
                <strong className="block text-[#101C2C] font-semibold mb-0.5">
                  Basundhara-5, Tokha
                </strong>
                <p className="text-slate-600 text-[11px] leading-relaxed">
                  Easily reached via Basundhara Chowk heading along the main
                  Tokha road corridor.
                </p>
              </div>
            </div>

            {/* Column 2: Transit */}
            <div className="p-4 sm:p-5 flex items-start gap-3.5">
              <div className="w-8 h-8 rounded-sm bg-slate-100 text-slate-700 flex items-center justify-center shrink-0 border border-slate-200">
                <Car className="w-4 h-4 text-[#B38E51]" />
              </div>
              <div>
                <strong className="block text-[#101C2C] font-semibold mb-0.5">
                  Transit & Parking
                </strong>
                <p className="text-slate-600 text-[11px] leading-relaxed">
                  Easily reached via public micro-buses, taxis, and ride-shares
                  with parking nearby.
                </p>
              </div>
            </div>

            {/* Column 3: Scheduled Consultations */}
            <div className="p-4 sm:p-5 flex items-start gap-3.5">
              <div className="w-8 h-8 rounded-sm bg-slate-100 text-slate-700 flex items-center justify-center shrink-0 border border-slate-200">
                <Clock className="w-4 h-4 text-[#B38E51]" />
              </div>
              <div>
                <strong className="block text-[#101C2C] font-semibold mb-0.5">
                  Scheduled Consultations
                </strong>
                <p className="text-slate-600 text-[11px] leading-relaxed">
                  Sunday–Friday 8:00 AM – 6:00 PM. Please schedule in advance to
                  confirm advocate availability.
                </p>
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
