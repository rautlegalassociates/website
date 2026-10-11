import React, { useState } from "react";
import {
  Settings,
  Building2,
  User,
  RotateCcw,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";
import {
  getActiveSession,
  loginStaff,
  resetChamberData,
  DEMO_STAFF_USERS,
} from "../../services/dashboardStorage";
import { FIRM_DETAILS } from "../../data/firm";

export const DashboardSettingsPage: React.FC = () => {
  const [activeSession, setActiveSession] = useState(getActiveSession());
  const [resetSuccess, setResetSuccess] = useState(false);

  const handleSwitchUser = (userIndex: number) => {
    const user = DEMO_STAFF_USERS[userIndex];
    loginStaff(user);
    setActiveSession(user);
  };

  const handleResetData = () => {
    if (
      window.confirm(
        "Reset all appointments and inquiries to original demo records? Any custom test entries will be replaced.",
      )
    ) {
      resetChamberData();
      setResetSuccess(true);
      setTimeout(() => setResetSuccess(false), 3000);
    }
  };

  return (
    <div className="space-y-6 max-w-4xl">
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

      {resetSuccess && (
        <div className="p-4 bg-emerald-50 border border-emerald-300 rounded-sm text-xs text-emerald-800 flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>Chamber sample records have been successfully restored!</span>
        </div>
      )}

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
                {activeSession?.name || "Adv. Sahil Raut Gaddi"}
              </div>
              <div className="text-xs text-[#A07A3B] font-medium">
                {activeSession?.role || "Senior Advocate"} ·{" "}
                {activeSession?.chamber}
              </div>
              <div className="text-[11px] text-slate-500 mt-0.5">
                {activeSession?.email || "sahil@rautlegalassociates.com"}
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-2">
            {DEMO_STAFF_USERS.map((user, idx) => (
              <button
                key={user.id}
                onClick={() => handleSwitchUser(idx)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-xs border transition-colors cursor-pointer ${
                  activeSession?.email === user.email
                    ? "bg-[#101C2C] text-[#C7A56A] border-[#C7A56A]"
                    : "bg-white text-slate-700 border-slate-300 hover:bg-slate-50"
                }`}
              >
                Switch to {user.name.split(" ")[1] || user.name}
              </button>
            ))}
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

      {/* Card 3: Data Management & Reset */}
      <div className="bg-white rounded-sm border border-[#E2DBCD] p-6 shadow-xs space-y-4">
        <div className="flex items-center gap-2 font-serif text-base font-bold text-[#101C2C] pb-3 border-b border-slate-100">
          <RotateCcw className="w-4 h-4 text-[#C7A56A]" />
          <span>Data Storage &amp; Reset Demo</span>
        </div>

        <div className="p-4 bg-amber-50/60 border border-amber-200 rounded-sm text-xs text-amber-900 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="font-semibold flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4 text-amber-700" />
              <span>Reset Demo Appointments &amp; Inquiries</span>
            </div>
            <p className="text-slate-600 leading-relaxed text-[11px]">
              Restores original sample consultation requests and client messages
              (Company registration, Tokha land dispute, cheque bounce defense,
              etc.).
            </p>
          </div>

          <button
            onClick={handleResetData}
            className="px-4 py-2 bg-[#101C2C] hover:bg-[#17283F] text-white rounded-sm font-semibold text-xs whitespace-nowrap cursor-pointer transition-colors"
          >
            Reset Sample Data
          </button>
        </div>
      </div>
    </div>
  );
};
