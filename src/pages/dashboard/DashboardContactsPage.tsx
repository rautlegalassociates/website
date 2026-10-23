import React, { useState, useEffect, useMemo } from "react";
import {
  MessageSquare,
  Search,
  Download,
  Mail,
  Phone,
  AlertCircle,
  Trash2,
  MessageCircle,
  X,
} from "lucide-react";
import {
  useGetContactInquiriesQuery,
  useUpdateContactInquiryMutation,
  useDeleteContactInquiryMutation,
  DashboardInquiry,
  InquiryStatus,
} from "../../services/contactApi";

export const DashboardContactsPage: React.FC = () => {
  const { data: inquiries = [], isLoading } = useGetContactInquiriesQuery();
  const [updateInquiry] = useUpdateContactInquiryMutation();
  const [deleteInquiry] = useDeleteContactInquiryMutation();

  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [selectedInquiry, setSelectedInquiry] =
    useState<DashboardInquiry | null>(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [internalNotesDraft, setInternalNotesDraft] = useState("");

  const filteredInquiries = useMemo(() => {
    return inquiries.filter((inq) => {
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        inq.name.toLowerCase().includes(q) ||
        inq.emailOrPhone.toLowerCase().includes(q) ||
        inq.subject.toLowerCase().includes(q) ||
        inq.message.toLowerCase().includes(q);

      const matchesStatus =
        statusFilter === "all" || inq.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [inquiries, searchQuery, statusFilter]);

  const handleStatusChange = async (id: string, newStatus: InquiryStatus) => {
    await updateInquiry({ id, status: newStatus });
    if (selectedInquiry && selectedInquiry.id === id) {
      setSelectedInquiry((prev) =>
        prev ? { ...prev, status: newStatus } : null,
      );
    }
  };

  const handleSaveInternalNotes = async () => {
    if (!selectedInquiry) return;
    await updateInquiry({
      id: selectedInquiry.id,
      status: selectedInquiry.status,
      internalNotes: internalNotesDraft,
    });
    setSelectedInquiry((prev) =>
      prev ? { ...prev, internalNotes: internalNotesDraft } : null,
    );
  };

  const handleDelete = async (id: string) => {
    if (
      window.confirm("Are you sure you want to delete this client inquiry?")
    ) {
      await deleteInquiry(id);
      if (selectedInquiry?.id === id) {
        setIsDetailModalOpen(false);
      }
    }
  };

  // Export to CSV
  const handleExportCSV = () => {
    const headers = [
      "ID",
      "Client Name",
      "Contact Info",
      "Subject",
      "Received Date",
      "Status",
      "Message",
    ];
    const rows = filteredInquiries.map((i) => [
      `"${i.id}"`,
      `"${i.name.replace(/"/g, '""')}"`,
      `"${i.emailOrPhone}"`,
      `"${i.subject.replace(/"/g, '""')}"`,
      `"${i.receivedAt}"`,
      `"${i.status}"`,
      `"${i.message.replace(/"/g, '""')}"`,
    ]);

    const csvContent =
      "data:text/csv;charset=utf-8," +
      [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute(
      "download",
      `Raut_Legal_Inquiries_${new Date().toISOString().split("T")[0]}.csv`,
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
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Chamber Communications</span>
          </div>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#101C2C]">
            Client Queries &amp; Inquiries
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Review incoming legal queries from the website contact form and
            client inquiries.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={handleExportCSV}
            className="px-3.5 py-2 bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 text-xs font-semibold rounded-sm transition-colors flex items-center gap-2 shadow-xs cursor-pointer"
          >
            <Download className="w-3.5 h-3.5 text-slate-500" />
            <span>Export CSV</span>
          </button>
        </div>
      </div>

      {/* Filters Toolbar */}
      <div className="bg-white p-4 sm:p-5 rounded-sm border border-[#E2DBCD] shadow-xs space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
          {/* Search Box */}
          <div className="md:col-span-8 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name, email, phone, subject, or message content..."
              className="w-full pl-10 pr-4 py-2.5 bg-[#FAF8F5] border border-slate-200 text-xs rounded-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#C7A56A] focus:bg-white"
            />
          </div>

          {/* Status Filter */}
          <div className="md:col-span-4">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full px-3 py-2.5 bg-[#FAF8F5] border border-slate-200 text-xs rounded-sm text-slate-800 focus:outline-none focus:border-[#C7A56A] focus:bg-white"
            >
              <option value="all">Status: All Inquiries</option>
              <option value="unread">Unread / New</option>
              <option value="in-review">In Review by Advocate</option>
              <option value="resolved">Resolved / Replied</option>
            </select>
          </div>
        </div>

        {/* Counter Summary */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-100 text-xs text-slate-500">
          <div>
            Showing{" "}
            <strong className="text-slate-800">
              {filteredInquiries.length}
            </strong>{" "}
            of <strong className="text-slate-800">{inquiries.length}</strong>{" "}
            total inquiries
          </div>

          {(searchQuery || statusFilter !== "all") && (
            <button
              onClick={() => {
                setSearchQuery("");
                setStatusFilter("all");
              }}
              className="text-xs text-[#B38E51] hover:underline font-semibold cursor-pointer"
            >
              Clear Filters
            </button>
          )}
        </div>
      </div>

      {/* Inquiries Cards / Grid */}
      <div className="space-y-3">
        {filteredInquiries.length === 0 ? (
          <div className="bg-white p-12 text-center text-slate-500 rounded-sm border border-[#E2DBCD]">
            <AlertCircle className="w-10 h-10 text-slate-300 mx-auto mb-3" />
            <h3 className="font-serif text-base font-semibold text-slate-800 mb-1">
              No Client Inquiries Found
            </h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              No messages matched your search query or filter. Incoming messages
              from `/contact` will appear here.
            </p>
          </div>
        ) : (
          filteredInquiries.map((inq) => {
            const isEmail = inq.emailOrPhone.includes("@");
            return (
              <div
                key={inq.id}
                className={`bg-white rounded-sm border p-5 transition-all hover:shadow-xs ${
                  inq.status === "unread"
                    ? "border-rose-300 bg-gradient-to-r from-rose-50/20 via-white to-white"
                    : "border-[#E2DBCD]"
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#101C2C] text-[#C7A56A] flex items-center justify-center font-bold text-xs font-serif shrink-0">
                      {inq.name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 text-sm flex items-center gap-2">
                        <span>{inq.name}</span>
                        {inq.status === "unread" && (
                          <span
                            className="w-2 h-2 rounded-full bg-rose-600 inline-block"
                            title="Unread"
                          />
                        )}
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5 flex items-center gap-2">
                        <span>{inq.emailOrPhone}</span>
                        <span>·</span>
                        <span className="text-slate-400">
                          {new Date(inq.receivedAt).toLocaleDateString()} at{" "}
                          {new Date(inq.receivedAt).toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Status Dropdown */}
                  <div className="flex items-center gap-2">
                    <select
                      value={inq.status}
                      onChange={(e) =>
                        handleStatusChange(
                          inq.id,
                          e.target.value as InquiryStatus,
                        )
                      }
                      className={`text-[11px] font-semibold uppercase tracking-wider py-1 px-2.5 rounded-xs border focus:outline-none cursor-pointer ${
                        inq.status === "unread"
                          ? "bg-rose-50 text-rose-800 border-rose-300"
                          : inq.status === "in-review"
                            ? "bg-amber-50 text-amber-800 border-amber-300"
                            : "bg-emerald-50 text-emerald-800 border-emerald-300"
                      }`}
                    >
                      <option value="unread">Unread / New</option>
                      <option value="in-review">In Review</option>
                      <option value="resolved">Resolved / Replied</option>
                    </select>

                    <button
                      onClick={() => handleDelete(inq.id)}
                      className="p-1 text-slate-400 hover:text-rose-600 transition-colors cursor-pointer"
                      title="Delete inquiry"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Message Body */}
                <div className="pt-3">
                  <h3 className="font-semibold text-slate-900 text-xs mb-1">
                    {inq.subject}
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed whitespace-pre-wrap">
                    {inq.message}
                  </p>

                  {inq.internalNotes && (
                    <div className="mt-3 p-2.5 bg-amber-50/70 border border-amber-200 rounded-xs text-[11px] text-amber-900">
                      <strong>Internal Advocate Remarks:</strong>{" "}
                      {inq.internalNotes}
                    </div>
                  )}
                </div>

                {/* Quick Actions Footer */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2">
                    {isEmail ? (
                      <a
                        href={`mailto:${inq.emailOrPhone}?subject=${encodeURIComponent(`Regarding your legal inquiry to Raut Legal Associates: ${inq.subject}`)}`}
                        className="px-3 py-1.5 bg-[#101C2C] hover:bg-[#17283F] text-white rounded-xs font-semibold flex items-center gap-1.5 transition-colors"
                      >
                        <Mail className="w-3.5 h-3.5 text-[#C7A56A]" />
                        <span>Reply via Email</span>
                      </a>
                    ) : (
                      <>
                        <a
                          href={`tel:${inq.emailOrPhone}`}
                          className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xs font-semibold flex items-center gap-1.5 transition-colors"
                        >
                          <Phone className="w-3.5 h-3.5 text-[#C7A56A]" />
                          <span>Call Phone</span>
                        </a>
                        <a
                          href={`https://wa.me/${inq.emailOrPhone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(`Namaste ${inq.name}, this is Raut Legal Associates replying to your legal query.`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1.5 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-xs font-semibold flex items-center gap-1.5 transition-colors"
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                          <span>WhatsApp</span>
                        </a>
                      </>
                    )}
                  </div>

                  <div>
                    <button
                      onClick={() => {
                        setSelectedInquiry(inq);
                        setInternalNotesDraft(inq.internalNotes || "");
                        setIsDetailModalOpen(true);
                      }}
                      className="px-3 py-1.5 bg-white border border-slate-300 hover:border-[#C7A56A] text-slate-700 hover:text-[#101C2C] rounded-xs font-semibold transition-colors cursor-pointer"
                    >
                      Case Details &amp; Notes
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Modal: Inquiry Detail & Notes */}
      {isDetailModalOpen && selectedInquiry && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-sm border border-[#E2DBCD] shadow-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 bg-[#101C2C] text-white flex items-center justify-between border-b border-[#223A5C]">
              <div>
                <span className="text-xs text-[#C7A56A] font-semibold uppercase tracking-wider block mb-1">
                  Inquiry Detail
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                  {selectedInquiry.name}
                </h3>
              </div>
              <button
                onClick={() => setIsDetailModalOpen(false)}
                className="p-1 text-slate-300 hover:text-white rounded-sm cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-5 text-xs text-slate-700">
              <div className="bg-[#FAF8F5] p-3.5 rounded-sm border border-slate-200 space-y-1.5">
                <div>
                  <span className="text-[11px] text-slate-500 font-semibold uppercase">
                    Contact:{" "}
                  </span>
                  <strong className="text-slate-900">
                    {selectedInquiry.emailOrPhone}
                  </strong>
                </div>
                <div>
                  <span className="text-[11px] text-slate-500 font-semibold uppercase">
                    Received:{" "}
                  </span>
                  <span className="text-slate-800">
                    {new Date(selectedInquiry.receivedAt).toLocaleString()}
                  </span>
                </div>
                <div>
                  <span className="text-[11px] text-slate-500 font-semibold uppercase">
                    Subject:{" "}
                  </span>
                  <strong className="text-slate-900">
                    {selectedInquiry.subject}
                  </strong>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-800 mb-1">
                  Inquiry Content
                </label>
                <div className="p-4 bg-slate-50 rounded-sm border border-slate-200 text-slate-800 leading-relaxed whitespace-pre-wrap">
                  {selectedInquiry.message}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-800 mb-1 flex items-center justify-between">
                  <span>Advocate Internal Remarks</span>
                  <span className="text-[11px] text-slate-400 font-normal">
                    Confidential chamber use
                  </span>
                </label>
                <textarea
                  rows={3}
                  value={internalNotesDraft}
                  onChange={(e) => setInternalNotesDraft(e.target.value)}
                  placeholder="e.g. Sent response via WhatsApp. Client advised to book formal consultation."
                  className="w-full p-3 bg-white border border-slate-300 rounded-sm text-xs text-slate-900 focus:outline-none focus:border-[#C7A56A]"
                />
                <button
                  type="button"
                  onClick={handleSaveInternalNotes}
                  className="mt-2 px-3 py-1.5 bg-[#101C2C] hover:bg-[#17283F] text-white text-xs font-semibold rounded-xs transition-colors cursor-pointer"
                >
                  Save Remarks
                </button>
              </div>

              <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
                <select
                  value={selectedInquiry.status}
                  onChange={(e) =>
                    handleStatusChange(
                      selectedInquiry.id,
                      e.target.value as InquiryStatus,
                    )
                  }
                  className="text-xs font-semibold py-1.5 px-3 rounded-xs border border-slate-300"
                >
                  <option value="unread">Status: Unread</option>
                  <option value="in-review">Status: In Review</option>
                  <option value="resolved">Status: Resolved / Replied</option>
                </select>

                <button
                  onClick={() => setIsDetailModalOpen(false)}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-sm transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
