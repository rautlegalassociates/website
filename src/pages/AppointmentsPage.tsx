import React from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { AppointmentForm } from '../features/appointments/AppointmentForm';
import { LegalDisclaimer } from '../components/common/LegalDisclaimer';
import { FIRM_DETAILS, CONSULTATION_STEPS } from '../data/firm';
import { ShieldCheck, Phone, MapPin, Clock, Calendar } from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';

export const AppointmentsPage: React.FC = () => {
  return (
    <div className="bg-[#F7F5F0] py-12 sm:py-16">
      <SEOHead
        title="Book Legal Consultation (NPR 500) | Raut Legal Nepal"
        description="Schedule a 30-45 min consultation with a licensed advocate in Tokha, Kathmandu or online. Professional document and statutory case evaluation for NPR 500."
        canonicalPath="/appointments"
        keywords={['book lawyer consultation Kathmandu', 'Nepal advocate appointment', 'NPR 500 legal consultation', 'Tokha law consultation', 'lawyer online consultation Nepal']}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          'name': 'Book Legal Consultation',
          'description': 'Schedule an initial legal consultation with an advocate at Raut Legal Associates.',
          'offers': {
            '@type': 'Offer',
            'price': '500',
            'priceCurrency': 'NPR',
            'availability': 'https://schema.org/InStock'
          },
          'breadcrumb': {
            '@type': 'BreadcrumbList',
            'itemListElement': [
              { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://rautlegalassociates.com/' },
              { '@type': 'ListItem', 'position': 2, 'name': 'Book Consultation', 'item': 'https://rautlegalassociates.com/appointments' }
            ]
          }
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Book a Consultation' }]} />

        {/* Page Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs uppercase tracking-widest text-[#B38E51] font-semibold block mb-2">
            Chamber Consultations · Kathmandu, Nepal
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-semibold tracking-tight text-[#101C2C]">
            Schedule Your Legal Consultation
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed font-light">
            Meet with our legal team to review your documents, evaluate statutory options, and understand the procedural next steps under Nepalese law.
          </p>
        </div>

        {/* Layout: Sidebar Guide + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Column: Appointment Form */}
          <div className="lg:col-span-8">
            <AppointmentForm />
          </div>

          {/* Sidebar: Details & Instructions */}
          <div className="lg:col-span-4 space-y-6">
            {/* Consultation Policy Card */}
            <div className="bg-[#FAF8F5] border border-[#E2DBCD] rounded-sm p-6 space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B38E51]">
                <Calendar className="w-4 h-4 text-[#C7A56A]" />
                <span>Consultation Framework</span>
              </div>

              <div className="space-y-3 text-xs text-slate-600 leading-relaxed">
                <div>
                  <strong className="text-slate-800 block">Fee: NPR {FIRM_DETAILS.consultationFeeNPR}</strong>
                  <span>Payable upon confirmation or at the chamber. Covers initial 30–45 min matter analysis.</span>
                </div>

                <div className="pt-2 border-t border-slate-200">
                  <strong className="text-slate-800 block">Scheduling Confirmation:</strong>
                  <span>Your requested slot is provisional until confirmed via phone by our chamber clerk.</span>
                </div>

                <div className="pt-2 border-t border-slate-200">
                  <strong className="text-slate-800 block">What to Bring:</strong>
                  <span>Bring all relevant agreements, notices, court summons, or land documents for review.</span>
                </div>
              </div>
            </div>

            {/* Chamber Contact Box */}
            <div className="bg-[#101C2C] text-white rounded-sm p-6 space-y-4 border border-[#C7A56A]/40 shadow-xs">
              <div className="font-serif text-lg font-bold text-white">
                Urgent Assistance
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                For time-sensitive court deadlines, police remand, or immediate bail needs, please call directly:
              </p>
              <a
                href={`tel:${FIRM_DETAILS.phone}`}
                className="flex items-center gap-2 text-sm font-semibold text-[#C7A56A] hover:underline"
              >
                <Phone className="w-4 h-4" />
                <span>{FIRM_DETAILS.phoneDisplay}</span>
              </a>

              <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-400 space-y-1">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#C7A56A] shrink-0" />
                  <span>{FIRM_DETAILS.address}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#C7A56A] shrink-0" />
                  <span>{FIRM_DETAILS.officeHours}</span>
                </div>
              </div>
            </div>

            {/* Steps summary */}
            <div className="bg-[#FAF8F5] border border-[#E2DBCD] rounded-sm p-6">
              <h4 className="font-serif text-base font-bold text-[#101C2C] mb-4">
                3 Simple Steps
              </h4>
              <div className="space-y-4 text-xs text-slate-600">
                {CONSULTATION_STEPS.map((s) => (
                  <div key={s.step} className="flex items-start gap-3">
                    <span className="font-mono font-bold text-[#C7A56A] shrink-0">
                      {s.step}.
                    </span>
                    <div>
                      <strong className="text-slate-800 block">{s.title}</strong>
                      <span className="text-[11px] leading-relaxed">{s.description}</span>
                    </div>
                  </div>
                ))}
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
