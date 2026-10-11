import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, ArrowLeft, Home, CalendarCheck } from 'lucide-react';
import { FIRM_DETAILS } from '../data/firm';
import { SEOHead } from '../components/common/SEOHead';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="bg-[#F7F5F0] min-h-[70vh] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      <SEOHead
        title="Page Not Found (404) | Raut Legal Associates"
        description="The requested page could not be located on the Raut Legal Associates website."
        canonicalPath="/404"
      />
      <div className="max-w-lg w-full text-center">
        <div className="w-16 h-16 rounded-full bg-[#101C2C] text-[#C7A56A] flex items-center justify-center mx-auto mb-6 shadow-sm">
          <Scale className="w-8 h-8" />
        </div>

        <span className="text-xs uppercase tracking-widest text-[#B38E51] font-semibold block mb-2">
          Error 404 · Page Not Found
        </span>

        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#101C2C] mb-4">
          The Requested Legal Record Does Not Exist
        </h1>

        <p className="text-sm text-slate-600 leading-relaxed mb-8">
          The page or resource you are seeking may have been renamed, moved, or is temporarily unavailable under this URL path.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/"
            className="px-6 py-3 text-xs font-semibold uppercase tracking-wider bg-[#101C2C] text-white hover:bg-[#17283F] rounded-sm transition-colors inline-flex items-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            to="/appointments"
            className="px-6 py-3 text-xs font-semibold uppercase tracking-wider bg-[#C7A56A] text-[#101C2C] hover:bg-[#D8B983] rounded-sm transition-colors inline-flex items-center gap-2"
          >
            <CalendarCheck className="w-4 h-4" />
            <span>Book Consultation (NPR 500)</span>
          </Link>
        </div>

        <div className="mt-8 pt-6 border-t border-[#E2DBCD] text-xs text-slate-500">
          For immediate legal inquiries: Call {FIRM_DETAILS.phoneDisplay}
        </div>
      </div>
    </div>
  );
};
