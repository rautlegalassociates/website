import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Scale, ArrowUpRight } from 'lucide-react';
import { FIRM_DETAILS } from '../../data/firm';
import { PRACTICE_AREAS } from '../../data/practiceAreas';
import { BrandLogo } from './BrandLogo';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  // Marquee subset of services for footer
  const featuredPracticeAreas = PRACTICE_AREAS.slice(0, 6);

  return (
    <footer className="bg-[#0A121E] text-[#E2DBCD] border-t border-[#17283F] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-[#17283F]">
          {/* Column 1: Firm Identity */}
          <div className="flex flex-col gap-4">
            <Link to="/" className="inline-block group">
              <BrandLogo variant="horizontal" theme="dark" />
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed mt-2">
              Providing strategic legal counsel, dispute resolution, contract formulation, and advocate representation in Kathmandu, Nepal. Grounded in integrity, thorough preparation, and client-centered diligence.
            </p>

            <div className="mt-2 pt-3 border-t border-slate-800/80 text-xs text-slate-300">
              <div className="text-slate-400">Consultation Fee:</div>
              <div className="text-sm font-semibold text-[#C7A56A]">
                NPR {FIRM_DETAILS.consultationFeeNPR} <span className="text-xs text-slate-400 font-normal">/ initial assessment</span>
              </div>
            </div>
          </div>

          {/* Column 2: Practice Areas */}
          <div>
            <h3 className="font-serif text-base text-[#F7F5F0] font-semibold tracking-wide mb-4">
              Practice Areas
            </h3>
            <ul className="flex flex-col gap-2.5 text-xs text-slate-300">
              {featuredPracticeAreas.map((area) => (
                <li key={area.id}>
                  <Link
                    to={`/services/${area.slug}`}
                    className="hover:text-[#C7A56A] transition-colors flex items-center justify-between group"
                  >
                    <span>{area.title}</span>
                    <ArrowUpRight className="w-3 h-3 text-slate-600 group-hover:text-[#C7A56A] transition-colors" />
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link
                  to="/services"
                  className="text-[#C7A56A] hover:underline text-xs font-medium inline-flex items-center gap-1"
                >
                  View all practice areas &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Navigation & Firm */}
          <div>
            <h3 className="font-serif text-base text-[#F7F5F0] font-semibold tracking-wide mb-4">
              Firm & Resources
            </h3>
            <ul className="flex flex-col gap-2.5 text-xs text-slate-300">
              <li>
                <Link to="/about" className="hover:text-[#C7A56A] transition-colors">
                  About the Firm
                </Link>
              </li>
              <li>
                <Link to="/team" className="hover:text-[#C7A56A] transition-colors">
                  Our Legal Team & Advocates
                </Link>
              </li>
              <li>
                <Link to="/resources" className="hover:text-[#C7A56A] transition-colors">
                  Legal Articles & Guides
                </Link>
              </li>
              <li>
                <Link to="/appointments" className="hover:text-[#C7A56A] transition-colors">
                  Book Consultation (NPR 500)
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#C7A56A] transition-colors">
                  Contact & Office Directions
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-[#C7A56A] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-[#C7A56A] transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Location */}
          <div>
            <h3 className="font-serif text-base text-[#F7F5F0] font-semibold tracking-wide mb-4">
              Chamber Location
            </h3>
            <div className="flex flex-col gap-3 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C7A56A] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {FIRM_DETAILS.address}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C7A56A] shrink-0" />
                <a
                  href={`tel:${FIRM_DETAILS.phone}`}
                  className="hover:text-[#C7A56A] transition-colors text-slate-200 font-medium"
                >
                  {FIRM_DETAILS.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C7A56A] shrink-0" />
                <a
                  href={`mailto:${FIRM_DETAILS.email}`}
                  className="hover:text-[#C7A56A] transition-colors text-slate-300 break-all text-[11px]"
                >
                  {FIRM_DETAILS.email}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#C7A56A] shrink-0 mt-0.5" />
                <span className="leading-relaxed text-slate-400">
                  {FIRM_DETAILS.officeHours}
                </span>
              </div>

              <div className="flex items-center gap-2.5 pt-1 text-slate-400">
                <Scale className="w-4 h-4 text-[#C7A56A] shrink-0" />
                <span>Jurisdiction: Nepal</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-xs text-slate-400">
          <p className="max-w-3xl leading-relaxed text-[11px] text-slate-500">
            <strong>Legal Notice:</strong> The materials and articles on this website are for general informational purposes only and do not constitute formal legal counsel. Prior consultation or message transmission does not by itself establish an advocate-client relationship. Representation is formalized only after a formal agreement.
          </p>
          <div className="shrink-0 text-slate-500 whitespace-nowrap">
            &copy; {currentYear} {FIRM_DETAILS.name}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
