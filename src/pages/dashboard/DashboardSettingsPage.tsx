import React, { useState } from "react";
import {
  Settings,
  Building2,
  User,
  RotateCcw,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";
import { getActiveSession } from "../../services/dashboardStorage";
import { FIRM_DETAILS } from "../../data/firm";

export const DashboardSettingsPage: React.FC = () => {
  const [activeSession] = useState(getActiveSession());

  return (
    <div className="space-y-6 max-w-7xl">
      {/* Header */}
      <div className="pb-2 border-b border-[#E2DBCD]">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#B38E51] font-semibold mb-1">
          <Settings className="w-3.5 h-3.5" />
          <span>Administration</span>
        </div>
        <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#101C2C]">
          Chamber Configuration &amp; Profile
        </h1>
        <p className="text-xs text-slate-500 mt-1">
          Chamber credentials, working hours, consultation fee policies, and
          data management.
        </p>
      </div>

      {/* Card 1: Active Staff Account */}
      <div className="bg-white rounded-sm border border-[#E2DBCD] p-6 shadow-xs space-y-4">
        <div className="flex items-center gap-2 font-serif text-base font-bold text-[#101C2C] pb-3 border-b border-slate-100">
          <User className="w-4 h-4 text-[#C7A56A]" />
          <span>Active Advocate Session</span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 bg-[#FAF8F5] rounded-sm border border-slate-200">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#101C2C] border-2 border-[#C7A56A] flex items-center justify-center text-[#C7A56A] font-serif font-bold text-base">
              {activeSession?.name
                ? activeSession.name.slice(0, 2).toUpperCase()
                : "SR"}
            </div>
            <div>
              <div className="font-bold text-slate-900 text-sm">
                {activeSession?.name || "Staff Member"}
              </div>
              <div className="text-xs text-[#A07A3B] font-medium">
                {activeSession?.role || "Advocate"} ·{" "}
                {activeSession?.chamber || "Chamber Tokha, Kathmandu"}
              </div>
              <div className="text-[11px] text-slate-500 mt-0.5">
                {activeSession?.email}
              </div>
            </div>
          </div>

          <div className="text-right sm:text-left">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-xs text-[11px] font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Firebase Auth Verified</span>
            </span>
          </div>
        </div>
      </div>

      {/* Card 2: Chamber Practice Details */}
      <div className="bg-white rounded-sm border border-[#E2DBCD] p-6 shadow-xs space-y-4">
        <div className="flex items-center gap-2 font-serif text-base font-bold text-[#101C2C] pb-3 border-b border-slate-100">
          <Building2 className="w-4 h-4 text-[#C7A56A]" />
          <span>Official Chamber Information</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-700">
          <div className="p-3.5 bg-[#FAF8F5] rounded-sm border border-slate-200">
            <div className="text-slate-500 font-semibold uppercase text-[11px] mb-1">
              Chamber Office
            </div>
            <div className="font-semibold text-slate-900">
              {FIRM_DETAILS.name}
            </div>
            <div className="text-slate-600 mt-0.5">{FIRM_DETAILS.address}</div>
          </div>

          <div className="p-3.5 bg-[#FAF8F5] rounded-sm border border-slate-200">
            <div className="text-slate-500 font-semibold uppercase text-[11px] mb-1">
              Standard Chamber Hours
            </div>
            <div className="font-semibold text-slate-900">
              {FIRM_DETAILS.officeHours}
            </div>
            <div className="text-slate-600 mt-0.5">
              Saturday: Closed for court preparation
            </div>
          </div>

          <div className="p-3.5 bg-[#FAF8F5] rounded-sm border border-slate-200">
            <div className="text-slate-500 font-semibold uppercase text-[11px] mb-1">
              Official Registry Phone
            </div>
            <div className="font-semibold text-slate-900">
              {FIRM_DETAILS.phoneDisplay}
            </div>
            <div className="text-slate-600 mt-0.5">
              WhatsApp enabled for rapid client queries
            </div>
          </div>

          <div className="p-3.5 bg-[#FAF8F5] rounded-sm border border-slate-200">
            <div className="text-slate-500 font-semibold uppercase text-[11px] mb-1">
              Initial Consultation Fee
            </div>
            <div className="font-semibold text-[#101C2C]">
              NPR {FIRM_DETAILS.consultationFeeNPR}
            </div>
            <div className="text-slate-600 mt-0.5">
              Covers 30–45 min matter analysis &amp; document scrutiny
            </div>
          </div>
        </div>
      </div>

      {/* Card 3: Cloud Database & Architecture */}
      <div className="bg-white rounded-sm border border-[#E2DBCD] p-6 shadow-xs space-y-4">
        <div className="flex items-center gap-2 font-serif text-base font-bold text-[#101C2C] pb-3 border-b border-slate-100">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>Cloud Database &amp; Firebase Firestore Integration</span>
        </div>

        <div className="p-4 bg-emerald-50/60 border border-emerald-200 rounded-sm text-xs text-emerald-900 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="font-semibold flex items-center gap-1.5 text-emerald-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Real-time Cloud Firebase Firestore Active</span>
            </div>
            <p className="text-slate-600 leading-relaxed text-[11px]">
              All appointments and client inquiries are directly synchronized with Cloud Firestore via the secure backend REST API. Client-side local storage has been removed.
            </p>
          </div>

          <div className="px-3.5 py-1.5 bg-emerald-700 text-white rounded-sm font-semibold text-xs whitespace-nowrap shadow-xs">
            Backend Port 5001 Live
          </div>
        </div>
      </div>
    </div>
  );
};
