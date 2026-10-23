import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  CalendarCheck,
  Clock,
  MessageSquare,
  AlertCircle,
  CheckCircle2,
  ArrowRight,
  MapPin,
  Laptop,
  Phone,
  Scale,
} from "lucide-react";
import { getActiveSession } from "../../services/dashboardStorage";
import {
  useGetAppointmentsQuery,
  useUpdateAppointmentMutation,
} from "../../services/appointmentApi";
import {
  useGetContactInquiriesQuery,
  useUpdateContactInquiryMutation,
} from "../../services/contactApi";
import { FIRM_DETAILS } from "../../data/firm";

export const DashboardOverviewPage: React.FC = () => {
  const session = getActiveSession();
  const { data: appointments = [] } = useGetAppointmentsQuery();
  const { data: inquiries = [] } = useGetContactInquiriesQuery();
  const [updateAppointment] = useUpdateAppointmentMutation();
  const [updateInquiry] = useUpdateContactInquiryMutation();

  // Compute metrics
  const totalAppointments = appointments.length;
  const pendingAppointments = appointments.filter(
    (a) => a.status === "pending",
  );
  const confirmedAppointments = appointments.filter(
    (a) => a.status === "confirmed",
  );
  const completedAppointments = appointments.filter(
    (a) => a.status === "completed",
  );
  const unreadInquiries = inquiries.filter((i) => i.status === "unread");

  // Revenue calculation: NPR 500 per completed or confirmed consultation
  const totalFeeCollected =
    (confirmedAppointments.length + completedAppointments.length) * 500;

  const handleQuickStatusChange = async (
    refCode: string,
    newStatus: "confirmed" | "completed" | "cancelled",
  ) => {
    await updateAppointment({ idOrRef: refCode, status: newStatus });
  };

  const handleMarkInquiryReplied = async (id: string) => {
    await updateInquiry({
      id,
      status: "resolved",
      internalNotes: "Marked as resolved from overview dashboard",
    });
  };

  return (
    <div className="space-y-8">
      {/* Welcome Banner */}
      <div className="bg-[#101C2C] text-white p-6 sm:p-8 rounded-sm border border-[#223A5C] shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-96 bg-gradient-to-l from-[#17283F]/60 to-transparent pointer-events-none" />
        <div className="relative z-10">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#C7A56A] font-semibold mb-1.5">
            <Scale className="w-3.5 h-3.5" />
            <span>Chamber Management Dashboard · Kathmandu, Nepal</span>
          </div>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Namaste, {session?.name || "Adv. Sahil Raut Gaddi"}
          </h1>
          <p className="text-xs text-slate-300 mt-1 max-w-xl leading-relaxed">
            Here is the current chamber schedule and incoming client inquiries
            for <strong>Raut Legal Associates</strong>. You have{" "}
            <strong className="text-amber-300">
              {pendingAppointments.length} pending appointment requests
            </strong>{" "}
            and{" "}
            <strong className="text-rose-300">
              {unreadInquiries.length} unread queries
            </strong>{" "}
            awaiting review.
          </p>
        </div>

        <div className="relative z-10 flex flex-wrap items-center gap-3 shrink-0">
          <Link
            to="/dashboard/appointments"
            className="px-4 py-2.5 bg-[#C7A56A] hover:bg-[#D8B983] text-[#101C2C] font-semibold text-xs uppercase tracking-wider rounded-sm transition-colors flex items-center gap-2 shadow-sm"
          >
            <CalendarCheck className="w-4 h-4" />
            <span>Manage Appointments</span>
          </Link>
          <Link
            to="/dashboard/contacts"
            className="px-4 py-2.5 bg-[#17283F] hover:bg-[#203756] text-white border border-[#223A5C] text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors flex items-center gap-2"
          >
            <MessageSquare className="w-4 h-4" />
            <span>View Inquiries</span>
          </Link>
        </div>
      </div>

      {/* KPI Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {/* Card 1: Total Appointments */}
        <div className="bg-white p-5 rounded-sm border border-[#E2DBCD] shadow-xs">
          <div className="flex items-center justify-between text-slate-500 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider">
              All Bookings
            </span>
            <div className="p-2 bg-blue-50 text-blue-700 rounded-sm">
              <CalendarCheck className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-bold font-serif text-[#101C2C]">
            {totalAppointments}
          </div>
          <div className="text-[11px] text-slate-500 mt-1 flex items-center gap-1">
            <span>Website &amp; Chatbot submissions</span>
          </div>
        </div>

        {/* Card 2: Pending Review */}
        <div className="bg-white p-5 rounded-sm border border-amber-300/80 shadow-xs bg-gradient-to-b from-amber-50/40 to-white">
          <div className="flex items-center justify-between text-amber-800 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider">
              Pending Review
            </span>
            <div className="p-2 bg-amber-100 text-amber-700 rounded-sm">
              <Clock className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-bold font-serif text-amber-900">
            {pendingAppointments.length}
          </div>
          <div className="text-[11px] text-amber-700 mt-1 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" />
            <span>Requires schedule confirmation</span>
          </div>
        </div>

        {/* Card 3: Confirmed / Scheduled */}
        <div className="bg-white p-5 rounded-sm border border-emerald-300/80 shadow-xs bg-gradient-to-b from-emerald-50/40 to-white">
          <div className="flex items-center justify-between text-emerald-800 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider">
              Confirmed
            </span>
            <div className="p-2 bg-emerald-100 text-emerald-700 rounded-sm">
              <CheckCircle2 className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-bold font-serif text-emerald-900">
            {confirmedAppointments.length}
          </div>
          <div className="text-[11px] text-emerald-700 mt-1 flex items-center gap-1">
            <span>Client notified by coordinator</span>
          </div>
        </div>

        {/* Card 4: Unread Inquiries */}
        <div className="bg-white p-5 rounded-sm border border-rose-300/80 shadow-xs bg-gradient-to-b from-rose-50/40 to-white">
          <div className="flex items-center justify-between text-rose-800 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider">
              Unread Queries
            </span>
            <div className="p-2 bg-rose-100 text-rose-700 rounded-sm">
              <MessageSquare className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-bold font-serif text-rose-900">
            {unreadInquiries.length}
          </div>
          <div className="text-[11px] text-rose-700 mt-1 flex items-center gap-1">
            <span>{inquiries.length} total client messages</span>
          </div>
        </div>

        {/* Card 5: Estimated Consultation Fees */}
        <div className="bg-white p-5 rounded-sm border border-[#C7A56A]/60 shadow-xs bg-gradient-to-b from-[#FAF8F5] to-white">
          <div className="flex items-center justify-between text-slate-700 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#A07A3B]">
              Assessment Fees
            </span>
            <div className="p-2 bg-amber-100 text-amber-800 rounded-sm font-bold text-xs">
              NPR
            </div>
          </div>
          <div className="text-2xl font-bold font-serif text-[#101C2C]">
            Rs. {totalFeeCollected.toLocaleString()}
          </div>
          <div className="text-[11px] text-slate-500 mt-1 flex items-center gap-1">
            <span>NPR 500 nominal initial fee</span>
          </div>
        </div>
      </div>

      {/* Two Columns: Recent Appointments vs Recent Inquiries */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Recent Appointments (7 cols) */}
        <div className="lg:col-span-7 bg-white rounded-sm border border-[#E2DBCD] shadow-xs overflow-hidden">
          <div className="p-5 border-b border-[#E2DBCD] flex items-center justify-between bg-[#FAF8F5]">
            <div className="flex items-center gap-2">
              <CalendarCheck className="w-4 h-4 text-[#C7A56A]" />
              <h2 className="font-serif text-lg font-bold text-[#101C2C]">
                Recent Appointments
              </h2>
            </div>
            <Link
              to="/dashboard/appointments"
              className="text-xs text-[#101C2C] hover:text-[#C7A56A] font-semibold flex items-center gap-1 transition-colors"
            >
              <span>View All ({appointments.length})</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="divide-y divide-slate-100">
            {appointments.slice(0, 4).map((apt) => (
              <div
                key={apt.id}
                className="p-4 sm:p-5 hover:bg-slate-50/70 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2">
                  <div>
                    <div className="flex items-center gap-2.5">
                      <span className="font-semibold text-slate-900 text-sm">
                        {apt.fullName}
                      </span>
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5 flex flex-wrap items-center gap-2">
                      <span className="text-[#A07A3B] font-medium">
                        {apt.serviceCategory}
                      </span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        {apt.consultationMode === "in-person" ? (
                          <>
                            <MapPin className="w-3 h-3 text-emerald-600" />
                            <span>In-Person Chamber</span>
                          </>
                        ) : (
                          <>
                            <Laptop className="w-3 h-3 text-blue-600" />
                            <span>Online Video / Call</span>
                          </>
                        )}
                      </span>
                    </div>
                  </div>

                  {/* Status Badge */}
                  <div>
                    <span
                      className={`inline-flex items-center px-2.5 py-1 rounded-xs text-[11px] font-semibold uppercase tracking-wider ${
                        apt.status === "pending"
                          ? "bg-amber-100 text-amber-800 border border-amber-300"
                          : apt.status === "confirmed"
                            ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                            : apt.status === "completed"
                              ? "bg-blue-100 text-blue-800 border border-blue-300"
                              : "bg-slate-100 text-slate-700 border border-slate-300"
                      }`}
                    >
                      {apt.status}
                    </span>
                  </div>
                </div>

                {/* Date & Contact Info */}
                <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600 bg-[#FAF8F5] p-2.5 rounded-sm border border-slate-200/80 mt-2.5">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1.5 font-medium text-slate-800">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>
                        {apt.preferredDate} at {apt.preferredTime}
                      </span>
                    </span>
                    <a
                      href={`tel:${apt.phone}`}
                      className="flex items-center gap-1 text-slate-600 hover:text-[#101C2C]"
                    >
                      <Phone className="w-3 h-3 text-[#C7A56A]" />
                      <span>{apt.phone}</span>
                    </a>
                  </div>

                  {/* Quick Action */}
                  <div className="flex items-center gap-2">
                    {apt.status === "pending" && (
                      <button
                        onClick={() =>
                          handleQuickStatusChange(
                            apt.id,
                            "confirmed",
                          )
                        }
                        className="px-2.5 py-1 text-[11px] font-semibold bg-emerald-700 hover:bg-emerald-800 text-white rounded-xs transition-colors cursor-pointer"
                      >
                        Confirm
                      </button>
                    )}
                    {apt.status === "confirmed" && (
                      <button
                        onClick={() =>
                          handleQuickStatusChange(
                            apt.id,
                            "completed",
                          )
                        }
                        className="px-2.5 py-1 text-[11px] font-semibold bg-[#101C2C] hover:bg-[#17283F] text-white rounded-xs transition-colors cursor-pointer"
                      >
                        Mark Completed
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-3 text-center bg-slate-50 border-t border-slate-200">
            <Link
              to="/dashboard/appointments"
              className="text-xs font-semibold text-[#101C2C] hover:text-[#C7A56A] transition-colors"
            >
              Open Full Appointments Management Table &rarr;
            </Link>
          </div>
        </div>

        {/* Right Column: Recent Client Inquiries (5 cols) */}
        <div className="lg:col-span-5 bg-white rounded-sm border border-[#E2DBCD] shadow-xs overflow-hidden">
          <div className="p-5 border-b border-[#E2DBCD] flex items-center justify-between bg-[#FAF8F5]">
            <div className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-[#C7A56A]" />
              <h2 className="font-serif text-lg font-bold text-[#101C2C]">
                Client Inquiries
              </h2>
            </div>
            <Link
              to="/dashboard/contacts"
              className="text-xs text-[#101C2C] hover:text-[#C7A56A] font-semibold flex items-center gap-1 transition-colors"
            >
              <span>View All ({inquiries.length})</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="divide-y divide-slate-100">
            {inquiries.slice(0, 4).map((inq) => (
              <div
                key={inq.id}
                className="p-4 sm:p-5 hover:bg-slate-50/70 transition-colors"
              >
                <div className="flex items-start justify-between gap-2 mb-1.5">
                  <div>
                    <h3 className="font-semibold text-slate-900 text-xs">
                      {inq.name}
                    </h3>
                    <div className="text-[11px] text-slate-500">
                      {inq.emailOrPhone}
                    </div>
                  </div>
                  <span
                    className={`inline-flex items-center px-2 py-0.5 rounded-xs text-[10px] font-semibold uppercase tracking-wider ${
                      inq.status === "unread"
                        ? "bg-rose-100 text-rose-800 border border-rose-300"
                        : inq.status === "in-review"
                          ? "bg-amber-100 text-amber-800 border border-amber-300"
                          : "bg-slate-100 text-slate-700 border border-slate-300"
                    }`}
                  >
                    {inq.status}
                  </span>
                </div>

                <div className="text-xs font-medium text-slate-800 line-clamp-1 mb-1">
                  {inq.subject}
                </div>
                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                  {inq.message}
                </p>

                <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px]">
                  <span className="text-slate-400">
                    {new Date(inq.receivedAt).toLocaleDateString()}
                  </span>
                  <div className="flex items-center gap-2">
                    {inq.status !== "resolved" && (
                      <button
                        onClick={() => handleMarkInquiryReplied(inq.id)}
                        className="text-xs font-semibold text-emerald-700 hover:text-emerald-900"
                      >
                        Mark Resolved
                      </button>
                    )}
                    <Link
                      to="/dashboard/contacts"
                      className="text-xs font-semibold text-[#101C2C] hover:text-[#C7A56A]"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-3 text-center bg-slate-50 border-t border-slate-200">
            <Link
              to="/dashboard/contacts"
              className="text-xs font-semibold text-[#101C2C] hover:text-[#C7A56A] transition-colors"
            >
              Open Full Inquiries &amp; Queries Manager &rarr;
            </Link>
          </div>
        </div>
      </div>

      {/* Chamber Schedule & Quick Protocol Notice */}
      <div className="bg-[#FAF8F5] border border-[#E2DBCD] rounded-sm p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-xs text-slate-700">
        <div className="space-y-1">
          <div className="font-semibold text-slate-900 text-sm flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#C7A56A]" />
            <span>Standard Chamber Working Schedule (Nepal Time)</span>
          </div>
          <p className="text-slate-600 leading-relaxed max-w-2xl">
            Chamber doors in <strong>Basundhara-5, Tokha, Kathmandu</strong> are
            open{" "}
            <strong className="text-slate-900">
              {FIRM_DETAILS.officeHours}
            </strong>
            . In-person client meetings must adhere to pre-booked slots to
            maintain document confidentiality.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <a
            href={`tel:${FIRM_DETAILS.phone}`}
            className="px-3.5 py-2 bg-[#101C2C] hover:bg-[#17283F] text-white rounded-sm font-semibold text-xs flex items-center gap-1.5 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#C7A56A]" />
            <span>Chamber Desk: {FIRM_DETAILS.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
