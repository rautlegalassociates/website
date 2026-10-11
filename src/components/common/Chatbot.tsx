import React, { useState, useRef, useEffect } from "react";
import {
  X,
  Send,
  Calendar,
  MessageCircle,
  Scale,
  Sparkles,
  RefreshCw,
  MapPin,
  Laptop,
  CheckCircle2,
  Copy,
  Check,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { FIRM_DETAILS } from "../../data/firm";
import { PRACTICE_AREAS } from "../../data/practiceAreas";
import { BrandLogo } from "./BrandLogo";
import { AppointmentRequest } from "../../types";

interface ChatMessage {
  id: string;
  role: "user" | "model";
  text: string;
  timestamp: string;
  isConfirmationCard?: boolean;
  appointmentData?: Partial<AppointmentRequest>;
}

type BookingStep =
  | "IDLE"
  | "NAME"
  | "PHONE"
  | "CATEGORY"
  | "DATE"
  | "TIME"
  | "MODE"
  | "NOTES"
  | "CONFIRMATION";

const STARTER_PROMPTS = [
  "📅 Book an appointment (NPR 500)",
  "What is the consultation fee structure?",
  "How to register a company in Nepal?",
  "Land due diligence & Rokka check process",
  "Divorce procedure under Muluki Civil Code",
  "Advocate team profiles (Sahil, Avishek, Bishwanath)",
  "Cheque bounce defense & banking laws",
];

const TIME_SLOTS = [
  "08:30 AM",
  "09:30 AM",
  "10:30 AM",
  "11:30 AM",
  "01:30 PM",
  "03:00 PM",
  "04:30 PM",
  "05:30 PM",
];

// Helper to save appointments in localStorage
const OWN_APPOINTMENTS_KEY = "rla_own_appointments";
function saveToLocalStorage(appointment: AppointmentRequest) {
  try {
    const raw = localStorage.getItem(OWN_APPOINTMENTS_KEY);
    const stored: Record<string, AppointmentRequest> = raw
      ? JSON.parse(raw)
      : {};
    if (appointment.referenceCode) {
      stored[appointment.referenceCode] = appointment;
      localStorage.setItem(OWN_APPOINTMENTS_KEY, JSON.stringify(stored));
      // Dispatch storage event so other components update if listening
      window.dispatchEvent(new Event("storage"));
    }
  } catch (e) {
    console.error("Failed to save appointment to local storage", e);
  }
}

export const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  // In-Chat Appointment Booking State Machine
  const [bookingStep, setBookingStep] = useState<BookingStep>("IDLE");
  const [bookingData, setBookingData] = useState<Partial<AppointmentRequest>>({
    feeAmount: 500,
    consultationMode: "in-person",
    preferredTime: "11:30 AM",
  });

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      role: "model",
      text: `Namaste! Welcome to Raut Legal Associates in Kathmandu, Nepal.\n\nI can assist you with comprehensive information on Nepalese statutes, all 10 practice areas, advocate profiles (Adv. Sahil Raut Gaddi, Adv. Avishek Raut, Adv. Bishwanath Das), and book a legal consultation directly in this chat for NPR 500.\n\nHow may I help with your legal matter today?`,
      timestamp: "Just now",
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll on new messages
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen, bookingStep]);

  // Focus input when modal opens or step changes
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen, bookingStep]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Helper to append a user message
  const addUserMessage = (text: string) => {
    const userMsg: ChatMessage = {
      id: `usr_${Date.now()}`,
      role: "user",
      text,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    setMessages((prev) => [...prev, userMsg]);
    return userMsg;
  };

  // Helper to append a bot message
  const addBotMessage = (
    text: string,
    isCard = false,
    appointmentData?: Partial<AppointmentRequest>,
  ) => {
    const botMsg: ChatMessage = {
      id: `bot_${Date.now()}`,
      role: "model",
      text,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      isConfirmationCard: isCard,
      appointmentData,
    };
    setMessages((prev) => [...prev, botMsg]);
    return botMsg;
  };

  // Start appointment booking flow
  const startAppointmentBooking = () => {
    setBookingStep("NAME");
    setBookingData({
      feeAmount: 500,
      consultationMode: "in-person",
      preferredTime: "11:30 AM",
    });
    addBotMessage(
      `📅 Let's schedule your legal consultation with an advocate at Raut Legal Associates.\n\n• Initial Fee: NPR 500 (30–45 min matter & document review)\n• Chamber: Basundhara-5, Tokha, Kathmandu or Online\n\nStep 1 of 6: To get started, what is your Full Legal Name?`,
    );
  };

  // Cancel booking flow
  const cancelBooking = () => {
    setBookingStep("IDLE");
    setBookingData({ feeAmount: 500 });
    addBotMessage(
      `Appointment booking cancelled. How else may I assist you with your legal inquiries or questions under Nepalese law?`,
    );
  };

  // Handle in-chat booking step submissions
  const handleBookingInput = (rawVal: string) => {
    const value = rawVal.trim();
    if (!value) return;

    if (
      value.toLowerCase() === "cancel" ||
      value.toLowerCase() === "cancel booking"
    ) {
      addUserMessage(value);
      cancelBooking();
      return;
    }

    if (bookingStep === "NAME") {
      if (value.length < 2) {
        addUserMessage(value);
        addBotMessage(
          "Please provide your full legal name (at least 2 letters):",
        );
        return;
      }
      addUserMessage(value);
      setBookingData((prev) => ({ ...prev, fullName: value }));
      setBookingStep("PHONE");
      addBotMessage(
        `Thank you, ${value}.\n\nStep 2 of 6: What is your primary phone number for SMS or call confirmation? (e.g. +977 98XXXXXXXX or 97XXXXXXXX)`,
      );
      return;
    }

    if (bookingStep === "PHONE") {
      const cleaned = value.replace(/[^0-9+]/g, "");
      if (cleaned.length < 8) {
        addUserMessage(value);
        addBotMessage(
          "Please enter a valid phone number with at least 8 digits so our chamber clerk can contact you:",
        );
        return;
      }
      addUserMessage(value);
      setBookingData((prev) => ({ ...prev, phone: value }));
      setBookingStep("CATEGORY");
      addBotMessage(
        `Got it: ${value}.\n\nStep 3 of 6: Which legal practice area does your inquiry relate to?\n\nPlease select one of the options below or type your custom matter:`,
      );
      return;
    }

    if (bookingStep === "CATEGORY") {
      addUserMessage(value);
      setBookingData((prev) => ({ ...prev, serviceCategory: value }));
      setBookingStep("DATE");

      // Calculate suggested dates
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      const tomorrowStr = tomorrow.toISOString().split("T")[0];

      addBotMessage(
        `Selected category: ${value}.\n\nStep 4 of 6: What is your preferred date for the consultation?\n\nYou can select a suggested date below or enter a date (YYYY-MM-DD):`,
      );
      return;
    }

    if (bookingStep === "DATE") {
      addUserMessage(value);
      setBookingData((prev) => ({ ...prev, preferredDate: value }));
      setBookingStep("TIME");
      addBotMessage(
        `Preferred date: ${value}.\n\nStep 5 of 6: Please choose your preferred time slot (Chamber hours: Sunday – Friday, 8:00 AM – 6:00 PM):`,
      );
      return;
    }

    if (bookingStep === "TIME") {
      addUserMessage(value);
      setBookingData((prev) => ({ ...prev, preferredTime: value }));
      setBookingStep("MODE");
      addBotMessage(
        `Time slot: ${value}.\n\nStep 6 of 6: Would you prefer an In-Person consultation at our chamber in Tokha, or an Online meeting?`,
      );
      return;
    }

    if (bookingStep === "MODE") {
      const mode = value.toLowerCase().includes("online")
        ? "online"
        : "in-person";
      addUserMessage(
        mode === "online"
          ? "Online (Google Meet / Phone)"
          : "In-Person (Tokha Chamber)",
      );
      setBookingData((prev) => ({ ...prev, consultationMode: mode }));
      setBookingStep("NOTES");
      addBotMessage(
        `Consultation mode: ${
          mode === "online"
            ? "Online Consultation"
            : "In-Person at Tokha Chamber"
        }.\n\nOptional: Briefly describe your legal matter or documents (contracts, land papers, court summons). Or click "Skip Brief Notes":`,
      );
      return;
    }

    if (bookingStep === "NOTES") {
      const notes = value.toLowerCase() === "skip" ? "" : value;
      addUserMessage(value.toLowerCase() === "skip" ? "Skipped notes" : value);
      const updated = { ...bookingData, notes };
      setBookingData(updated);
      setBookingStep("CONFIRMATION");
      addBotMessage(
        `Please review your consultation details:\n\n• Client Name: ${updated.fullName}\n• Phone: ${updated.phone}\n• Legal Area: ${updated.serviceCategory}\n• Date & Time: ${updated.preferredDate} at ${updated.preferredTime}\n• Mode: ${
          updated.consultationMode === "online"
            ? "Online Consultation"
            : "In-Person (Tokha Chamber)"
        }\n• Consultation Fee: NPR 500\n• Notes: ${notes || "None provided"}\n\nReady to submit your appointment request?`,
      );
      return;
    }
  };

  // Finalize and submit appointment
  const handleFinalSubmit = async () => {
    setIsLoading(true);
    const randomCode = Math.floor(1000 + Math.random() * 9000);
    const refCode = `RLA-2026-${randomCode}`;

    const appointmentPayload: AppointmentRequest = {
      id: `apt_${Date.now()}`,
      referenceCode: refCode,
      fullName: bookingData.fullName || "Valued Client",
      phone: bookingData.phone || "",
      serviceCategory: bookingData.serviceCategory || "Legal Consultation",
      preferredDate:
        bookingData.preferredDate || new Date().toISOString().split("T")[0],
      preferredTime: bookingData.preferredTime || "11:30 AM",
      consultationMode: bookingData.consultationMode || "in-person",
      notes: bookingData.notes || "",
      feeAmount: 500,
      agreedToPrivacy: true,
      status: "pending",
      createdAt: new Date().toISOString(),
    };

    try {
      // Send to server endpoint
      await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(appointmentPayload),
      });
    } catch {
      // Continue even if network is restricted in demo mode
    }

    // Save to local storage for site-wide continuity
    saveToLocalStorage(appointmentPayload);

    setIsLoading(false);
    setBookingStep("IDLE");

    addBotMessage(
      `🎉 Your legal consultation request has been successfully registered!\n\nReference Code: ${refCode}`,
      true,
      appointmentPayload,
    );
  };

  // Standard Q&A handler
  const handleSendMessage = async (textToSend?: string) => {
    const messageContent = (textToSend || input).trim();
    if (!messageContent || isLoading) return;

    // Check if in booking step
    if (bookingStep !== "IDLE") {
      setInput("");
      handleBookingInput(messageContent);
      return;
    }

    // Check if user wants to start booking an appointment
    const lower = messageContent.toLowerCase();
    const isBookingIntent =
      lower.includes("book appointment") ||
      lower.includes("book an appointment") ||
      lower.includes("schedule consultation") ||
      lower.includes("schedule appointment") ||
      lower.includes("book consultation") ||
      lower.includes("book a slot") ||
      lower.includes("schedule a meeting") ||
      lower.includes("book in chat") ||
      lower.includes("start booking") ||
      lower.startsWith("book ");

    if (isBookingIntent) {
      addUserMessage(messageContent);
      setInput("");
      startAppointmentBooking();
      return;
    }

    addUserMessage(messageContent);
    setInput("");
    setIsLoading(true);

    try {
      // Prepare multi-turn history excluding cards
      const history = messages
        .filter((m) => m.id !== "welcome" && !m.isConfirmationCard)
        .map((m) => ({
          role: m.role === "user" ? "user" : "model",
          text: m.text,
        }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: messageContent,
          history,
        }),
      });

      if (!res.ok) {
        throw new Error("Server error");
      }

      const data = await res.json();
      const replyText =
        data.reply ||
        "Thank you for your question. You can schedule an initial consultation (NPR 500) with our advocates directly in this chat or at /appointments.";

      addBotMessage(replyText);
    } catch {
      addBotMessage(
        `We are currently experiencing a brief connection delay. Please feel free to call or WhatsApp our chamber directly at ${FIRM_DETAILS.phoneDisplay} or schedule an appointment online.`,
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const copyRefCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2500);
  };

  const cleanPhone = FIRM_DETAILS.phone.replace(/[^0-9]/g, "");
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(
    "Namaste Raut Legal Associates, I would like to inquire about a legal consultation.",
  )}`;

  // Quick dates for date step
  const getSuggestedDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 1; i <= 4; i++) {
      const d = new Date();
      d.setDate(today.getDate() + i);
      // Skip Saturday (closed in Nepal)
      if (d.getDay() === 6) continue;
      const dateStr = d.toISOString().split("T")[0];
      const label =
        i === 1
          ? `Tomorrow (${d.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })})`
          : d.toLocaleDateString("en-US", {
              weekday: "short",
              month: "short",
              day: "numeric",
            });
      dates.push({ label, val: dateStr });
    }
    return dates;
  };

  return (
    <>
      {/* Floating Launcher Trigger */}
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close Legal AI Chat" : "Open Legal AI Chat"}
          className="flex items-center gap-2.5 px-4 py-3 bg-[#101C2C] text-[#F7F5F0] rounded-full shadow-xl hover:bg-[#17283F] border border-[#C7A56A]/60 transition-all duration-200 hover:scale-105 active:scale-95 group cursor-pointer"
        >
          <div className="w-6 h-6 rounded-full bg-[#17283F] border border-[#C7A56A] flex items-center justify-center text-[#C7A56A] text-xs font-bold font-serif">
            <Sparkles className="w-3.5 h-3.5 text-[#C7A56A]" />
          </div>
          <span className="text-xs font-semibold tracking-wider uppercase text-white whitespace-nowrap hidden sm:inline">
            Legal AI & Booking
          </span>
          <span className="w-2 h-2 rounded-full bg-[#C7A56A] animate-pulse" />
        </button>
      </div>

      {/* Slide-Up / Floating Chat Window */}
      {isOpen && (
        <div
          role="dialog"
          aria-label="Raut Legal Associates AI Chatbot"
          className="fixed bottom-20 sm:bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[440px] max-h-[85vh] h-[620px] bg-[#FAF8F5] border border-[#C7A56A]/60 rounded-sm shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200"
        >
          {/* Header */}
          <div className="bg-[#101C2C] text-white px-4 py-3.5 border-b border-[#223A5C]/40 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <BrandLogo variant="mark" size="sm" />
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="font-serif text-sm font-bold text-white tracking-wide">
                    RLA Legal AI Assistant
                  </h3>
                </div>
                <div className="text-[10px] text-slate-400">
                  Kathmandu Chamber · Basundhara-5, Tokha
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1">
              {bookingStep !== "IDLE" && (
                <button
                  onClick={cancelBooking}
                  className="px-2 py-1 text-[10px] font-semibold text-rose-300 hover:text-white bg-rose-950/40 hover:bg-rose-900/60 rounded-xs border border-rose-800/50 transition-colors mr-1 cursor-pointer"
                  title="Cancel booking and return to chat"
                >
                  Exit Booking
                </button>
              )}

              <button
                onClick={() => {
                  setBookingStep("IDLE");
                  setBookingData({ feeAmount: 500 });
                  setMessages([
                    {
                      id: "welcome",
                      role: "model",
                      text: `Conversation restarted. How may I assist you with your legal inquiries or appointments today?`,
                      timestamp: "Just now",
                    },
                  ]);
                }}
                className="p-1.5 text-slate-400 hover:text-white rounded-xs transition-colors cursor-pointer"
                title="Restart chat conversation"
              >
                <RefreshCw className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-slate-400 hover:text-white rounded-xs transition-colors cursor-pointer"
                aria-label="Close Chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Notice Banner & Mode Pill */}
          <div className="bg-[#EDE8DD] px-3.5 py-1.5 border-b border-[#E2DBCD] flex items-center justify-between text-[10.5px] text-slate-700 shrink-0">
            <div className="flex items-center gap-1.5">
              <Scale className="w-3.5 h-3.5 text-[#B38E51]" />
              <span>
                Initial Fee: <strong className="text-[#101C2C]">NPR 500</strong>
              </span>
            </div>

            {bookingStep === "IDLE" ? (
              <button
                onClick={startAppointmentBooking}
                className="text-xs font-semibold text-[#101C2C] bg-[#C7A56A] hover:bg-[#B38E51] text-white px-2 py-0.5 rounded-xs flex items-center gap-1 transition-colors cursor-pointer"
              >
                <Calendar className="w-3 h-3" />
                <span>Book in Chat</span>
              </button>
            ) : (
              <span className="text-[10px] font-semibold uppercase tracking-wider text-[#B38E51] bg-[#101C2C] text-[#FAF8F5] px-2 py-0.5 rounded-xs">
                Booking Mode: {bookingStep}
              </span>
            )}
          </div>

          {/* Messages Thread */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 text-xs">
            {messages.map((msg) => {
              const isUser = msg.role === "user";
              return (
                <div
                  key={msg.id}
                  className={`flex flex-col ${isUser ? "items-end" : "items-start"}`}
                >
                  {/* Normal Text Message */}
                  {!msg.isConfirmationCard ? (
                    <div
                      className={`max-w-[88%] rounded-sm p-3.5 leading-relaxed whitespace-pre-wrap ${
                        isUser
                          ? "bg-[#101C2C] text-[#F7F5F0] border border-[#223A5C]"
                          : "bg-white text-slate-800 border border-slate-200 shadow-2xs"
                      }`}
                    >
                      {msg.text}
                    </div>
                  ) : (
                    /* In-Chat Official Booking Confirmation Card */
                    <div className="w-full max-w-[95%] bg-white border-2 border-[#C7A56A] rounded-sm p-4 shadow-md space-y-3">
                      <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
                        <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0" />
                        <span>Appointment Registered Successfully</span>
                      </div>

                      <div className="bg-[#FAF8F5] border border-[#E2DBCD] p-3 rounded-xs space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-[10.5px] uppercase font-bold tracking-wider text-[#737780]">
                            Reference Code
                          </span>
                          <div className="flex items-center gap-1.5">
                            <span className="font-mono font-bold text-sm text-[#101C2C]">
                              {msg.appointmentData?.referenceCode}
                            </span>
                            <button
                              onClick={() =>
                                copyRefCode(
                                  msg.appointmentData?.referenceCode || "",
                                )
                              }
                              className="p-1 text-slate-500 hover:text-slate-800 cursor-pointer"
                              title="Copy Reference Code"
                            >
                              {copiedCode ===
                              msg.appointmentData?.referenceCode ? (
                                <Check className="w-3.5 h-3.5 text-emerald-600" />
                              ) : (
                                <Copy className="w-3.5 h-3.5" />
                              )}
                            </button>
                          </div>
                        </div>

                        <div className="pt-2 border-t border-slate-200 text-[11px] text-slate-700 grid grid-cols-2 gap-2">
                          <div>
                            <span className="text-slate-500 block text-[10px]">
                              Client:
                            </span>
                            <span className="font-medium text-slate-900">
                              {msg.appointmentData?.fullName}
                            </span>
                          </div>
                          <div>
                            <span className="text-slate-500 block text-[10px]">
                              Phone:
                            </span>
                            <span className="font-medium text-slate-900">
                              {msg.appointmentData?.phone}
                            </span>
                          </div>
                          <div>
                            <span className="text-slate-500 block text-[10px]">
                              Date & Time:
                            </span>
                            <span className="font-medium text-slate-900">
                              {msg.appointmentData?.preferredDate} ·{" "}
                              {msg.appointmentData?.preferredTime}
                            </span>
                          </div>
                          <div>
                            <span className="text-slate-500 block text-[10px]">
                              Mode:
                            </span>
                            <span className="font-medium text-slate-900">
                              {msg.appointmentData?.consultationMode ===
                              "online"
                                ? "Online Meet"
                                : "Tokha Chamber"}
                            </span>
                          </div>
                        </div>

                        <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-xs font-semibold">
                          <span className="text-slate-600">
                            Consultation Fee:
                          </span>
                          <span className="text-[#101C2C]">NPR 500</span>
                        </div>
                      </div>

                      <p className="text-[11px] text-slate-600 leading-relaxed">
                        Our chamber clerk will contact you on{" "}
                        <strong>{msg.appointmentData?.phone}</strong> to confirm
                        your slot. The NPR 500 consultation fee is payable upon
                        confirmation or at the Tokha chamber.
                      </p>

                      <div className="flex flex-col sm:flex-row gap-2 pt-1">
                        <a
                          href={`https://wa.me/${cleanPhone}?text=${encodeURIComponent(
                            `Namaste, I booked a consultation via chatbot with Reference Code: ${msg.appointmentData?.referenceCode}. Client: ${msg.appointmentData?.fullName}. Please confirm my slot.`,
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-[#25D366] hover:bg-[#20bd5a] text-white text-center py-2 px-3 rounded-xs font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                        >
                          <MessageCircle className="w-3.5 h-3.5 fill-current" />
                          <span>WhatsApp Confirmation</span>
                        </a>

                        <button
                          onClick={() => {
                            addBotMessage(
                              `You're welcome! You can continue asking questions about Nepalese statutes or our practice areas whenever you like.`,
                            );
                          }}
                          className="bg-[#101C2C] hover:bg-[#17283F] text-white text-center py-2 px-3 rounded-xs font-medium text-xs transition-colors cursor-pointer"
                        >
                          Ask Question
                        </button>
                      </div>
                    </div>
                  )}

                  <span className="text-[9.5px] text-slate-400 mt-1 px-1">
                    {msg.timestamp}
                  </span>
                </div>
              );
            })}

            {/* Interactive Step Widgets inside messages when active */}
            {bookingStep === "CATEGORY" && (
              <div className="bg-white border border-[#C7A56A]/60 rounded-sm p-3.5 space-y-2.5 animate-in fade-in">
                <span className="text-[11px] font-bold text-[#101C2C] block">
                  Select Practice Area Category:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                  {PRACTICE_AREAS.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => handleBookingInput(p.title)}
                      className="text-left text-[11px] p-2 bg-[#FAF8F5] hover:bg-[#EDE8DD] border border-slate-200 rounded-xs text-slate-800 transition-colors flex items-center justify-between cursor-pointer"
                    >
                      <span className="truncate pr-1">{p.title}</span>
                      <ArrowRight className="w-3 h-3 text-[#B38E51] shrink-0" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {bookingStep === "DATE" && (
              <div className="bg-white border border-[#C7A56A]/60 rounded-sm p-3.5 space-y-2.5 animate-in fade-in">
                <span className="text-[11px] font-bold text-[#101C2C] block">
                  Select Suggested Date:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {getSuggestedDates().map((d, i) => (
                    <button
                      key={i}
                      onClick={() => handleBookingInput(d.val)}
                      className="text-[11px] py-1.5 px-3 bg-[#FAF8F5] hover:bg-[#EDE8DD] border border-slate-300 rounded-xs text-slate-800 font-medium transition-colors cursor-pointer"
                    >
                      {d.label}
                    </button>
                  ))}
                </div>
                <div className="pt-2 border-t border-slate-200">
                  <span className="text-[10px] text-slate-500 block mb-1">
                    Or select from calendar picker:
                  </span>
                  <input
                    type="date"
                    min={new Date().toISOString().split("T")[0]}
                    onChange={(e) => {
                      if (e.target.value) handleBookingInput(e.target.value);
                    }}
                    className="w-full text-xs bg-[#FAF8F5] border border-slate-300 rounded-xs p-1.5 text-slate-800 focus:outline-none focus:border-[#C7A56A]"
                  />
                </div>
              </div>
            )}

            {bookingStep === "TIME" && (
              <div className="bg-white border border-[#C7A56A]/60 rounded-sm p-3.5 space-y-2.5 animate-in fade-in">
                <span className="text-[11px] font-bold text-[#101C2C] block">
                  Select Preferred Consultation Time:
                </span>
                <div className="grid grid-cols-3 gap-1.5">
                  {TIME_SLOTS.map((slot) => (
                    <button
                      key={slot}
                      onClick={() => handleBookingInput(slot)}
                      className="text-[11px] py-2 text-center bg-[#FAF8F5] hover:bg-[#101C2C] hover:text-white border border-slate-300 rounded-xs text-slate-800 font-medium transition-colors cursor-pointer"
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {bookingStep === "MODE" && (
              <div className="bg-white border border-[#C7A56A]/60 rounded-sm p-3.5 space-y-2.5 animate-in fade-in">
                <span className="text-[11px] font-bold text-[#101C2C] block">
                  Choose Consultation Format:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <button
                    onClick={() =>
                      handleBookingInput("In-Person (Tokha Chamber)")
                    }
                    className="text-left p-2.5 bg-[#FAF8F5] hover:bg-[#EDE8DD] border border-slate-300 rounded-xs transition-colors cursor-pointer flex flex-col gap-1"
                  >
                    <div className="flex items-center gap-1.5 font-bold text-xs text-[#101C2C]">
                      <MapPin className="w-3.5 h-3.5 text-[#C7A56A]" />
                      <span>In-Person Chamber</span>
                    </div>
                    <span className="text-[10px] text-slate-600">
                      Basundhara-5, Tokha, Kathmandu
                    </span>
                  </button>

                  <button
                    onClick={() =>
                      handleBookingInput("Online (Google Meet / Phone)")
                    }
                    className="text-left p-2.5 bg-[#FAF8F5] hover:bg-[#EDE8DD] border border-slate-300 rounded-xs transition-colors cursor-pointer flex flex-col gap-1"
                  >
                    <div className="flex items-center gap-1.5 font-bold text-xs text-[#101C2C]">
                      <Laptop className="w-3.5 h-3.5 text-[#C7A56A]" />
                      <span>Online / Virtual</span>
                    </div>
                    <span className="text-[10px] text-slate-600">
                      Google Meet or Direct Phone Call
                    </span>
                  </button>
                </div>
              </div>
            )}

            {bookingStep === "NOTES" && (
              <div className="flex justify-end gap-2 animate-in fade-in">
                <button
                  onClick={() => handleBookingInput("skip")}
                  className="px-3 py-1.5 bg-[#EDE8DD] hover:bg-[#E2DBCD] text-slate-800 text-[11px] font-medium rounded-xs border border-slate-300 transition-colors cursor-pointer"
                >
                  Skip Brief Notes
                </button>
              </div>
            )}

            {bookingStep === "CONFIRMATION" && (
              <div className="bg-white border-2 border-[#C7A56A] rounded-sm p-4 space-y-3 animate-in fade-in">
                <div className="flex items-center gap-2 text-[#101C2C] font-bold text-xs">
                  <ShieldCheck className="w-4 h-4 text-[#C7A56A]" />
                  <span>Ready to confirm appointment request</span>
                </div>
                <div className="text-[11px] text-slate-600 space-y-1 bg-[#FAF8F5] p-2.5 rounded-xs border border-slate-200">
                  <div>
                    <strong>Client:</strong> {bookingData.fullName} (
                    {bookingData.phone})
                  </div>
                  <div>
                    <strong>Category:</strong> {bookingData.serviceCategory}
                  </div>
                  <div>
                    <strong>Date & Time:</strong> {bookingData.preferredDate} at{" "}
                    {bookingData.preferredTime}
                  </div>
                  <div>
                    <strong>Mode:</strong>{" "}
                    {bookingData.consultationMode === "online"
                      ? "Online (Google Meet / Phone)"
                      : "In-Person (Tokha Chamber)"}
                  </div>
                  <div>
                    <strong>Fee:</strong> NPR 500
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={handleFinalSubmit}
                    disabled={isLoading}
                    className="flex-1 bg-[#101C2C] hover:bg-[#17283F] text-white py-2 px-3 rounded-xs font-bold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50"
                  >
                    {isLoading ? (
                      <span>Submitting...</span>
                    ) : (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-[#C7A56A]" />
                        <span>Confirm & Submit</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={cancelBooking}
                    className="px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xs text-xs font-medium cursor-pointer"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}

            {isLoading && (
              <div className="flex items-start gap-2">
                <div className="bg-white border border-slate-200 rounded-sm p-3.5 text-slate-500 flex items-center gap-2">
                  <div className="w-3 h-3 border-2 border-[#C7A56A] border-t-transparent rounded-full animate-spin" />
                  <span className="text-[11px]">
                    Advocate Assistant is thinking...
                  </span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Starter Prompts Carousel / Pills */}
          {messages.length <= 2 && bookingStep === "IDLE" && (
            <div className="px-3 pb-2 pt-1 border-t border-slate-200 bg-[#FAF8F5] shrink-0">
              <span className="text-[10px] text-slate-500 font-medium block mb-1.5">
                Suggested Questions & Actions:
              </span>
              <div className="flex flex-wrap gap-1.5 max-h-24 overflow-y-auto">
                {STARTER_PROMPTS.map((prompt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSendMessage(prompt)}
                    className="text-[10.5px] text-slate-700 bg-white hover:bg-[#EDE8DD] border border-slate-300 rounded-xs px-2.5 py-1 text-left transition-colors cursor-pointer"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quick Actions Strip */}
          <div className="px-3 py-1.5 bg-[#F2EFE9] border-t border-slate-200 flex items-center justify-between text-[11px] shrink-0">
            {bookingStep === "IDLE" ? (
              <button
                onClick={startAppointmentBooking}
                className="text-[#101C2C] hover:text-[#B38E51] font-semibold flex items-center gap-1 cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5 text-[#C7A56A]" />
                <span>Book Appointment (NPR 500)</span>
              </button>
            ) : (
              <button
                onClick={cancelBooking}
                className="text-rose-700 hover:underline font-semibold flex items-center gap-1 cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
                <span>Cancel Booking Mode</span>
              </button>
            )}
            <span className="text-slate-400">·</span>
            <a
              href={`tel:${FIRM_DETAILS.phone}`}
              className="text-slate-600 hover:text-slate-900 font-medium"
            >
              Call {FIRM_DETAILS.phoneDisplay}
            </a>
          </div>

          {/* Input Box */}
          <div className="p-3 bg-white border-t border-slate-200 shrink-0">
            <div className="flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={
                  bookingStep === "NAME"
                    ? "Type your Full Legal Name..."
                    : bookingStep === "PHONE"
                      ? "Type your phone number (e.g. 98XXXXXXXX)..."
                      : bookingStep === "CATEGORY"
                        ? "Type or click your practice area category..."
                        : bookingStep === "DATE"
                          ? "Type date (YYYY-MM-DD) or pick above..."
                          : bookingStep === "TIME"
                            ? "Type time slot or pick above..."
                            : bookingStep === "MODE"
                              ? "Type In-Person or Online..."
                              : bookingStep === "NOTES"
                                ? 'Brief notes or type "skip"...'
                                : 'Ask about Nepalese law or type "book appointment"...'
                }
                className="flex-1 bg-[#FAF8F5] border border-slate-300 rounded-sm px-3.5 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#C7A56A] focus:ring-1 focus:ring-[#C7A56A]"
              />
              <button
                onClick={() => handleSendMessage()}
                disabled={isLoading || !input.trim()}
                className="p-2.5 bg-[#101C2C] text-[#C7A56A] hover:bg-[#17283F] disabled:opacity-40 disabled:cursor-not-allowed rounded-sm transition-colors cursor-pointer"
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            <div className="text-[9.5px] text-slate-400 text-center mt-1.5 leading-tight">
              Informational AI guidance only. Formal representation begins upon
              execution of Vakalatnama.
            </div>
          </div>
        </div>
      )}
    </>
  );
};
