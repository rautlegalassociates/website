import React, { useState, useMemo } from "react";
import {
  CalendarCheck,
  Search,
  Download,
  Plus,
  Clock,
  MapPin,
  Laptop,
  Phone,
  Mail,
  AlertCircle,
  MessageCircle,
  Trash2,
  X,
} from "lucide-react";
import {
  useGetAppointmentsQuery,
  useSubmitAppointmentMutation,
  useUpdateAppointmentMutation,
  useDeleteAppointmentMutation,
  DashboardAppointment,
} from "../../services/appointmentApi";
import { PRACTICE_AREAS } from "../../data/practiceAreas";
import { AppointmentStatus, ConsultationMode } from "../../types";

export const DashboardAppointmentsPage: React.FC = () => {
  const { data: appointments = [], isLoading } = useGetAppointmentsQuery();
  const [submitAppointment] = useSubmitAppointmentMutation();
  const [updateAppointment] = useUpdateAppointmentMutation();
  const [deleteAppointment] = useDeleteAppointmentMutation();

  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [modeFilter, setModeFilter] = useState<string>("all");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");

  // Modal states
  const [selectedAppointment, setSelectedAppointment] =
    useState<DashboardAppointment | null>(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [advocateNotesDraft, setAdvocateNotesDraft] = useState("");

  // New Appointment Form State
  const [newClientName, setNewClientName] = useState("");
  const [newClientPhone, setNewClientPhone] = useState("");
  const [newClientEmail, setNewClientEmail] = useState("");
  const [newCategory, setNewCategory] = useState(
    PRACTICE_AREAS[0]?.title || "Corporate & Commercial Law",
  );
  const [newDate, setNewDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split("T")[0];
  });
  const [newTime, setNewTime] = useState("10:30 AM");
  const [newMode, setNewMode] = useState<ConsultationMode>("in-person");
  const [newNotes, setNewNotes] = useState("");

  // Filtered Appointments
  const filteredAppointments = useMemo(() => {
    return appointments.filter((apt) => {
      // Search query
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        apt.id.toLowerCase().includes(q) ||
        apt.fullName.toLowerCase().includes(q) ||
        apt.phone.toLowerCase().includes(q) ||
        (apt.email && apt.email.toLowerCase().includes(q)) ||
        apt.serviceCategory.toLowerCase().includes(q) ||
        apt.notes.toLowerCase().includes(q);

      // Status
      const matchesStatus =
        statusFilter === "all" || apt.status === statusFilter;

      // Mode
      const matchesMode =
        modeFilter === "all" || apt.consultationMode === modeFilter;

      // Category
      const matchesCategory =
        categoryFilter === "all" || apt.serviceCategory === categoryFilter;

      return matchesSearch && matchesStatus && matchesMode && matchesCategory;
    });
  }, [appointments, searchQuery, statusFilter, modeFilter, categoryFilter]);

  // Handle status change
  const handleStatusChange = async (
    appointmentId: string,
    newStatus: AppointmentStatus,
  ) => {
    await updateAppointment({ idOrRef: appointmentId, status: newStatus });
    if (selectedAppointment && selectedAppointment.id === appointmentId) {
      setSelectedAppointment((prev) =>
        prev ? { ...prev, status: newStatus } : null,
      );
    }
  };

  // Handle save advocate notes
  const handleSaveNotes = async () => {
    if (!selectedAppointment) return;
    await updateAppointment({
      idOrRef: selectedAppointment.id,
      status: selectedAppointment.status,
      advocateNotes: advocateNotesDraft,
    });
    setSelectedAppointment((prev) =>
      prev ? { ...prev, advocateNotes: advocateNotesDraft } : null,
    );
  };

  // Handle delete
  const handleDelete = async (appointmentId: string) => {
    if (window.confirm(`Are you sure you want to delete this appointment?`)) {
      await deleteAppointment(appointmentId);
      if (selectedAppointment?.id === appointmentId) {
        setIsDetailModalOpen(false);
      }
    }
  };

  // Handle Add Appointment submit
  const handleAddAppointmentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newClientName || !newClientPhone) return;

    await submitAppointment({
      fullName: newClientName.trim(),
      phone: newClientPhone.trim(),
      email: newClientEmail.trim() || undefined,
      serviceCategory: newCategory,
      preferredDate: newDate,
      preferredTime: newTime,
      consultationMode: newMode,
      notes: newNotes.trim() || "Manual booking recorded at Tokha chamber.",
      agreedToPrivacy: true,
      feeAmount: 500,
    });

    setIsAddModalOpen(false);

    // Reset fields
    setNewClientName("");
    setNewClientPhone("");
    setNewClientEmail("");
    setNewNotes("");
  };

  // Export to CSV
  const handleExportCSV = () => {
    const headers = [
      "Client Name",
      "Phone",
      "Email",
      "Service Category",
      "Consultation Date",
      "Time Slot",
      "Mode",
      "Fee NPR",
      "Status",
      "Notes",
    ];

    const rows = filteredAppointments.map((a) => [
      `"${a.fullName.replace(/"/g, '""')}"`,
      `"${a.phone}"`,
      `"${a.email || ""}"`,
      `"${a.serviceCategory}"`,
      `"${a.preferredDate}"`,
      `"${a.preferredTime}"`,
      `"${a.consultationMode}"`,
      `"${a.feeAmount}"`,
      `"${a.status}"`,
      `"${(a.notes || "").replace(/"/g, '""')}"`,
    ]);

    const csvContent =
      "data:text/csv;charset=utf-8," +
      [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute(
      "download",
      `Raut_Legal_Appointments_${new Date().toISOString().split("T")[0]}.csv`,
    );
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-[#E2DBCD]">
        <div>
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#B38E51] font-semibold mb-1">
            <CalendarCheck className="w-3.5 h-3.5" />
            <span>Chamber Registry</span>
          </div>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#101C2C]">
            Appointments &amp; Consultations
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Manage incoming consultation bookings, schedule confirmations, and
            client matter files.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <button
            onClick={handleExportCSV}
            className="px-3.5 py-2 bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 text-xs font-semibold rounded-sm transition-colors flex items-center gap-2 shadow-xs cursor-pointer"
          >
            <Download className="w-3.5 h-3.5 text-slate-500" />
            <span>Export CSV</span>
          </button>
          <button
            onClick={() => setIsAddModalOpen(true)}
            className="px-4 py-2 bg-[#C7A56A] hover:bg-[#D8B983] text-[#101C2C] text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors flex items-center gap-1.5 shadow-xs cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>New Appointment</span>
          </button>
        </div>
      </div>

      {/* Filters & Search Toolbar */}
      <div className="bg-white p-4 sm:p-5 rounded-sm border border-[#E2DBCD] shadow-xs space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
          {/* Search Box */}
          <div className="md:col-span-5 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by client name, phone, reference code, notes..."
              className="w-full pl-10 pr-4 py-2.5 bg-[#FAF8F5] border border-slate-200 text-xs rounded-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#C7A56A] focus:bg-white"
            />
          </div>

          {/* Status Filter */}
          <div className="md:col-span-3">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full px-3 py-2.5 bg-[#FAF8F5] border border-slate-200 text-xs rounded-sm text-slate-800 focus:outline-none focus:border-[#C7A56A] focus:bg-white"
            >
              <option value="all">Status: All Statuses</option>
              <option value="pending">Pending Review</option>
              <option value="confirmed">Confirmed / Scheduled</option>
              <option value="completed">Completed Consultation</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>

          {/* Mode Filter */}
          <div className="md:col-span-2">
            <select
              value={modeFilter}
              onChange={(e) => setModeFilter(e.target.value)}
              className="w-full px-3 py-2.5 bg-[#FAF8F5] border border-slate-200 text-xs rounded-sm text-slate-800 focus:outline-none focus:border-[#C7A56A] focus:bg-white"
            >
              <option value="all">Mode: All</option>
              <option value="in-person">In-Person (Tokha)</option>
              <option value="online">Online (Video/Call)</option>
            </select>
          </div>

          {/* Category Filter */}
          <div className="md:col-span-2">
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="w-full px-3 py-2.5 bg-[#FAF8F5] border border-slate-200 text-xs rounded-sm text-slate-800 focus:outline-none focus:border-[#C7A56A] focus:bg-white"
            >
              <option value="all">Practice Area: All</option>
              {PRACTICE_AREAS.map((p) => (
                <option key={p.id} value={p.title}>
                  {p.title}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Filter Pills & Result Summary */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-100 text-xs text-slate-500">
          <div>
            Showing{" "}
            <strong className="text-slate-800">
              {filteredAppointments.length}
            </strong>{" "}
            of <strong className="text-slate-800">{appointments.length}</strong>{" "}
            total registered consultations
          </div>

          {(searchQuery ||
            statusFilter !== "all" ||
            modeFilter !== "all" ||
            categoryFilter !== "all") && (
            <button
              onClick={() => {
                setSearchQuery("");
                setStatusFilter("all");
                setModeFilter("all");
                setCategoryFilter("all");
              }}
              className="text-xs text-[#B38E51] hover:underline font-semibold cursor-pointer"
            >
              Clear All Filters
            </button>
          )}
        </div>
      </div>

      {/* Appointments List / Table */}
      <div className="bg-white rounded-sm border border-[#E2DBCD] shadow-xs overflow-hidden">
        {filteredAppointments.length === 0 ? (
          <div className="p-12 text-center text-slate-500">
            <AlertCircle className="w-10 h-10 text-slate-300 mx-auto mb-3" />
            <h3 className="font-serif text-base font-semibold text-slate-800 mb-1">
              No Appointments Found
            </h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              No appointments matched your query or filter criteria. Try
              clearing your filters or creating a new manual booking.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-[#FAF8F5] border-b border-[#E2DBCD] text-slate-600 font-semibold uppercase tracking-wider text-[11px]">
                  <th className="py-3.5 px-4">Client Details</th>
                  <th className="py-3.5 px-4">Service &amp; Mode</th>
                  <th className="py-3.5 px-4">Date &amp; Slot</th>
                  <th className="py-3.5 px-4">Status</th>
                  <th className="py-3.5 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredAppointments.map((apt) => (
                  <tr
                    key={apt.id}
                    className="hover:bg-slate-50/80 transition-colors"
                  >
                    {/* Client Details */}
                    <td className="py-4 px-4">
                      <div className="font-semibold text-slate-900 text-xs mb-0.5">
                        {apt.fullName}
                      </div>
                      <div className="flex items-center gap-3 text-[11px] text-slate-500">
                        <a
                          href={`tel:${apt.phone}`}
                          className="flex items-center gap-1 hover:text-[#101C2C]"
                        >
                          <Phone className="w-3 h-3 text-[#C7A56A]" />
                          <span>{apt.phone}</span>
                        </a>
                        <a
                          href={`https://wa.me/${apt.phone.replace(/[^0-9]/g, "")}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#25D366] hover:text-[#20BD5A] flex items-center gap-1"
                          title="Message on WhatsApp"
                        >
                          <MessageCircle className="w-3 h-3" />
                          <span>WhatsApp</span>
                        </a>
                      </div>
                      {apt.email && (
                        <div className="text-[11px] text-slate-400 flex items-center gap-1 mt-0.5">
                          <Mail className="w-2.5 h-2.5 text-slate-400" />
                          <span>{apt.email}</span>
                        </div>
                      )}
                    </td>

                    {/* Service & Mode */}
                    <td className="py-4 px-4">
                      <div className="font-medium text-slate-800 line-clamp-1 max-w-[200px]">
                        {apt.serviceCategory}
                      </div>
                      <div className="flex items-center gap-1.5 text-[11px] text-slate-500 mt-1">
                        {apt.consultationMode === "in-person" ? (
                          <span className="inline-flex items-center gap-1 px-1.5 py-0.5 bg-emerald-50 text-emerald-700 rounded-xs border border-emerald-200">
                            <MapPin className="w-3 h-3" />
                            <span>In-Person Chamber</span>
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 px-1.5 py-0.5 bg-blue-50 text-blue-700 rounded-xs border border-blue-200">
                            <Laptop className="w-3 h-3" />
                            <span>Online Video / Call</span>
                          </span>
                        )}
                      </div>
                    </td>

                    {/* Date & Slot */}
                    <td className="py-4 px-4 whitespace-nowrap">
                      <div className="font-semibold text-slate-900 flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#C7A56A]" />
                        <span>{apt.preferredDate}</span>
                      </div>
                      <div className="text-[11px] text-slate-500 mt-0.5">
                        Slot:{" "}
                        <strong className="text-slate-700">
                          {apt.preferredTime}
                        </strong>
                      </div>
                    </td>

                    {/* Status Dropdown */}
                    <td className="py-4 px-4 whitespace-nowrap">
                      <select
                        value={apt.status}
                        onChange={(e) =>
                          handleStatusChange(
                            apt.id,
                            e.target.value as AppointmentStatus,
                          )
                        }
                        className={`text-[11px] font-semibold uppercase tracking-wider py-1 px-2.5 rounded-xs border focus:outline-none cursor-pointer ${
                          apt.status === "pending"
                            ? "bg-amber-50 text-amber-800 border-amber-300"
                            : apt.status === "confirmed"
                              ? "bg-emerald-50 text-emerald-800 border-emerald-300"
                              : apt.status === "completed"
                                ? "bg-blue-50 text-blue-800 border-blue-300"
                                : "bg-slate-100 text-slate-700 border-slate-300"
                        }`}
                      >
                        <option value="pending">Pending</option>
                        <option value="confirmed">Confirmed</option>
                        <option value="completed">Completed</option>
                        <option value="cancelled">Cancelled</option>
                      </select>
                    </td>

                    {/* Actions */}
                    <td className="py-4 px-4 text-right whitespace-nowrap">
                      <div className="flex items-center justify-end gap-1.5">
                        <button
                          onClick={() => {
                            setSelectedAppointment(apt);
                            setAdvocateNotesDraft(apt.advocateNotes || "");
                            setIsDetailModalOpen(true);
                          }}
                          className="px-2.5 py-1 text-xs font-semibold bg-[#101C2C] text-white hover:bg-[#17283F] rounded-xs transition-colors cursor-pointer"
                        >
                          View Case
                        </button>
                        <button
                          onClick={() => handleDelete(apt.id)}
                          className="p-1 text-slate-400 hover:text-rose-600 transition-colors cursor-pointer"
                          title="Delete appointment"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Modal 1: Appointment Details & Case Notes */}
      {isDetailModalOpen && selectedAppointment && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-sm border border-[#E2DBCD] shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="p-6 bg-[#101C2C] text-white flex items-center justify-between border-b border-[#223A5C]">
              <div>
                <div className="flex items-center gap-2 text-xs text-[#C7A56A] font-semibold uppercase tracking-wider mb-1">
                  <CalendarCheck className="w-4 h-4" />
                  <span>Case Matter File</span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                  {selectedAppointment.fullName}
                </h3>
              </div>
              <button
                onClick={() => setIsDetailModalOpen(false)}
                className="p-1 text-slate-300 hover:text-white rounded-sm cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6 text-xs text-slate-700">
              {/* Top Summary Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#FAF8F5] p-4 rounded-sm border border-slate-200">
                <div>
                  <div className="text-[11px] text-slate-500 uppercase font-semibold">
                    Contact Phone
                  </div>
                  <div className="text-sm font-semibold text-slate-900 mt-0.5">
                    {selectedAppointment.phone}
                  </div>
                </div>
                <div>
                  <div className="text-[11px] text-slate-500 uppercase font-semibold">
                    Email Address
                  </div>
                  <div className="text-sm font-semibold text-slate-900 mt-0.5">
                    {selectedAppointment.email || "Not provided"}
                  </div>
                </div>
                <div>
                  <div className="text-[11px] text-slate-500 uppercase font-semibold">
                    Scheduled Date &amp; Time
                  </div>
                  <div className="text-sm font-semibold text-[#101C2C] mt-0.5">
                    {selectedAppointment.preferredDate} at{" "}
                    {selectedAppointment.preferredTime}
                  </div>
                </div>
                <div>
                  <div className="text-[11px] text-slate-500 uppercase font-semibold">
                    Consultation Mode
                  </div>
                  <div className="text-sm font-semibold text-slate-900 mt-0.5 capitalize">
                    {selectedAppointment.consultationMode === "in-person"
                      ? "In-Person Chamber (Tokha)"
                      : "Online Video / Phone"}
                  </div>
                </div>
              </div>

              {/* Practice Area & Fee */}
              <div className="flex flex-wrap items-center justify-between gap-4 p-3 bg-white border border-slate-200 rounded-sm">
                <div>
                  <span className="text-[11px] text-slate-500 block">
                    Practice Area Category
                  </span>
                  <strong className="text-slate-900 text-sm">
                    {selectedAppointment.serviceCategory}
                  </strong>
                </div>
                <div>
                  <span className="text-[11px] text-slate-500 block">
                    Consultation Fee
                  </span>
                  <strong className="text-[#C7A56A] text-sm">
                    NPR {selectedAppointment.feeAmount}
                  </strong>
                </div>
                <div>
                  <span className="text-[11px] text-slate-500 block">
                    Status
                  </span>
                  <span className="font-semibold uppercase text-xs">
                    {selectedAppointment.status}
                  </span>
                </div>
              </div>

              {/* Client Brief & Notes */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-800 mb-1.5">
                  Client Stated Legal Issue / Notes
                </label>
                <div className="p-3.5 bg-slate-50 rounded-sm border border-slate-200 text-slate-800 leading-relaxed">
                  {selectedAppointment.notes ||
                    "No preliminary notes provided."}
                </div>
              </div>

              {/* Advocate Internal Remarks */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-800 mb-1.5 flex items-center justify-between">
                  <span>Advocate Internal Notes &amp; Preparation</span>
                  <span className="text-[11px] text-slate-400 font-normal">
                    Confidential chamber use
                  </span>
                </label>
                <textarea
                  rows={3}
                  value={advocateNotesDraft}
                  onChange={(e) => setAdvocateNotesDraft(e.target.value)}
                  placeholder="e.g. Advised client to bring cadastral map and Malpot receipts. Vakalatnama prepared for signature."
                  className="w-full p-3 bg-white border border-slate-300 rounded-sm text-xs text-slate-900 focus:outline-none focus:border-[#C7A56A]"
                />
                <button
                  type="button"
                  onClick={handleSaveNotes}
                  className="mt-2 px-3 py-1.5 bg-[#101C2C] hover:bg-[#17283F] text-white text-xs font-semibold rounded-xs transition-colors cursor-pointer"
                >
                  Save Internal Remarks
                </button>
              </div>

              {/* Quick Communication Actions */}
              <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <a
                    href={`tel:${selectedAppointment.phone}`}
                    className="px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-sm font-semibold flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#C7A56A]" />
                    <span>Call Client</span>
                  </a>
                  <a
                    href={`https://wa.me/${selectedAppointment.phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(`Namaste ${selectedAppointment.fullName}, this is Raut Legal Associates regarding your legal consultation appointment.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-sm font-semibold flex items-center gap-1.5"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() =>
                      handleStatusChange(selectedAppointment.id, "confirmed")
                    }
                    className="px-3 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-sm font-semibold cursor-pointer"
                  >
                    Confirm
                  </button>
                  <button
                    onClick={() =>
                      handleStatusChange(selectedAppointment.id, "completed")
                    }
                    className="px-3 py-2 bg-[#101C2C] hover:bg-[#17283F] text-white rounded-sm font-semibold cursor-pointer"
                  >
                    Complete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal 2: Add Manual Appointment */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-sm border border-[#E2DBCD] shadow-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="p-6 bg-[#101C2C] text-white flex items-center justify-between border-b border-[#223A5C]">
              <div>
                <span className="text-xs text-[#C7A56A] font-semibold uppercase tracking-wider block mb-1">
                  Chamber Reception / Phone Desk
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                  Record New Appointment
                </h3>
              </div>
              <button
                onClick={() => setIsAddModalOpen(false)}
                className="p-1 text-slate-300 hover:text-white rounded-sm cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Form */}
            <form
              onSubmit={handleAddAppointmentSubmit}
              className="p-6 space-y-4 text-xs text-slate-700"
            >
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                  Client Full Name <span className="text-rose-600">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={newClientName}
                  onChange={(e) => setNewClientName(e.target.value)}
                  placeholder="e.g. Bikash Thapa"
                  className="w-full px-3 py-2 bg-white border border-slate-300 text-xs rounded-sm text-slate-900 focus:outline-none focus:border-[#C7A56A]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                    Phone (+977) <span className="text-rose-600">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={newClientPhone}
                    onChange={(e) => setNewClientPhone(e.target.value)}
                    placeholder="+977 98XXXXXXXX"
                    className="w-full px-3 py-2 bg-white border border-slate-300 text-xs rounded-sm text-slate-900 focus:outline-none focus:border-[#C7A56A]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    value={newClientEmail}
                    onChange={(e) => setNewClientEmail(e.target.value)}
                    placeholder="client@example.com"
                    className="w-full px-3 py-2 bg-white border border-slate-300 text-xs rounded-sm text-slate-900 focus:outline-none focus:border-[#C7A56A]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                  Practice Area
                </label>
                <select
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-slate-300 text-xs rounded-sm text-slate-900 focus:outline-none focus:border-[#C7A56A]"
                >
                  {PRACTICE_AREAS.map((p) => (
                    <option key={p.id} value={p.title}>
                      {p.title}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                    Consultation Date
                  </label>
                  <input
                    type="date"
                    required
                    value={newDate}
                    onChange={(e) => setNewDate(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-slate-300 text-xs rounded-sm text-slate-900 focus:outline-none focus:border-[#C7A56A]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                    Time Slot
                  </label>
                  <select
                    value={newTime}
                    onChange={(e) => setNewTime(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-slate-300 text-xs rounded-sm text-slate-900 focus:outline-none focus:border-[#C7A56A]"
                  >
                    <option value="08:30 AM">
                      08:30 AM - Early Morning Slot
                    </option>
                    <option value="09:30 AM">09:30 AM - Morning Slot</option>
                    <option value="10:30 AM">
                      10:30 AM - Mid-Morning Slot
                    </option>
                    <option value="11:30 AM">
                      11:30 AM - Late Morning Slot
                    </option>
                    <option value="01:30 PM">01:30 PM - Afternoon Slot</option>
                    <option value="03:00 PM">03:00 PM - Afternoon Slot</option>
                    <option value="04:30 PM">
                      04:30 PM - Late Afternoon Slot
                    </option>
                    <option value="05:30 PM">05:30 PM - Evening Slot</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                  Consultation Mode
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="mode"
                      value="in-person"
                      checked={newMode === "in-person"}
                      onChange={() => setNewMode("in-person")}
                      className="text-[#C7A56A] focus:ring-[#C7A56A]"
                    />
                    <span>In-Person Chamber (Tokha)</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="mode"
                      value="online"
                      checked={newMode === "online"}
                      onChange={() => setNewMode("online")}
                      className="text-[#C7A56A] focus:ring-[#C7A56A]"
                    />
                    <span>Online (Video / Phone Call)</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                  Case Brief / Notes
                </label>
                <textarea
                  rows={3}
                  value={newNotes}
                  onChange={(e) => setNewNotes(e.target.value)}
                  placeholder="Summary of legal issue or preliminary documents brought..."
                  className="w-full px-3 py-2 bg-white border border-slate-300 text-xs rounded-sm text-slate-900 focus:outline-none focus:border-[#C7A56A]"
                />
              </div>

              <div className="pt-3 border-t border-slate-200 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-sm transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-[#C7A56A] hover:bg-[#D8B983] text-[#101C2C] text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors cursor-pointer"
                >
                  Save Appointment
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
