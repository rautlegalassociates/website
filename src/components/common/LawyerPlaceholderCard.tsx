import React from 'react';
import { Link } from 'react-router-dom';
import { Lawyer } from '../../types';
import { ArrowRight, Scale, MapPin } from 'lucide-react';

interface LawyerCardProps {
  lawyer: Lawyer;
}

export const LawyerPlaceholderCard: React.FC<LawyerCardProps> = ({ lawyer }) => {
  // Extract initials for monogram
  const initials = lawyer.name
    .replace('Adv.', '')
    .trim()
    .split(' ')
    .map((n) => n[0])
    .join('')
    .substring(0, 2);

  return (
    <div className="bg-[#FAF8F5] border border-[#E2DBCD] rounded-sm overflow-hidden flex flex-col transition-all hover:border-[#C7A56A]/70 hover:shadow-md group">
      {/* Dignified portrait photo or placeholder monogram */}
      {lawyer.imageUrl ? (
        <div className="h-64 sm:h-72 w-full relative overflow-hidden bg-[#101C2C] border-b border-[#C7A56A]/30">
          <img
            src={lawyer.imageUrl}
            alt={`${lawyer.name} - Profile Portrait`}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#101C2C]/90 via-[#101C2C]/20 to-transparent" />
          <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#101C2C]/90 text-[#C7A56A] border border-[#C7A56A]/40 rounded-xs font-semibold text-[11px] tracking-wider uppercase backdrop-blur-xs">
              <Scale className="w-3 h-3 text-[#C7A56A]" />
              {lawyer.title}
            </span>
            <span className="text-[11px] text-slate-300 font-medium">
              {lawyer.status}
            </span>
          </div>
        </div>
      ) : (
        <div className="h-60 bg-gradient-to-b from-[#17283F] to-[#101C2C] flex flex-col items-center justify-center p-6 text-center relative border-b border-[#223A5C]/40">
          <div className="w-24 h-24 rounded-full border-2 border-[#C7A56A]/50 bg-[#101C2C] flex items-center justify-center text-[#C7A56A] font-serif font-bold text-3xl tracking-widest group-hover:scale-105 transition-transform shadow-inner">
            {initials}
          </div>

          <div className="mt-4 flex items-center gap-1.5 text-xs text-[#C7A56A] font-medium tracking-wider uppercase">
            <Scale className="w-3.5 h-3.5" />
            <span>{lawyer.title}</span>
          </div>

          <span className="text-[11px] text-slate-400 mt-0.5">
            {lawyer.status}
          </span>
        </div>
      )}

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-serif text-2xl font-bold text-[#101C2C] group-hover:text-[#B38E51] transition-colors">
            {lawyer.name}
          </h3>
          <p className="text-xs text-slate-500 font-medium mt-0.5">
            {lawyer.designation}
          </p>

          <p className="text-xs text-slate-600 leading-relaxed mt-3">
            {lawyer.shortBio}
          </p>

          {/* Practice Focus Areas - unboxed metadata */}
          <div className="mt-4 pt-4 border-t border-[#EDE8DD]">
            <div className="text-[11px] uppercase tracking-wider text-slate-400 font-medium mb-1.5">
              Practice Focus:
            </div>
            <ul className="text-xs text-slate-700 space-y-1">
              {lawyer.practiceAreas.slice(0, 3).map((area, idx) => (
                <li key={idx} className="flex items-center gap-1.5 text-slate-600">
                  <span className="w-1 h-1 rounded-full bg-[#C7A56A]" />
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-[#EDE8DD] flex items-center justify-between">
          <div className="flex items-center gap-1 text-[11px] text-slate-500">
            <MapPin className="w-3 h-3 text-[#C7A56A]" />
            <span>Kathmandu</span>
          </div>

          <Link
            to={`/team/${lawyer.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#101C2C] group-hover:text-[#B38E51] transition-colors"
          >
            <span>View Profile</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#C7A56A] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};
