import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  appointmentFormSchema,
  AppointmentFormData,
} from "../../lib/validations";
import { useSubmitAppointmentMutation } from "../../services/appointmentApi";
import { PRACTICE_AREAS } from "../../data/practiceAreas";
import { FIRM_DETAILS } from "../../data/firm";
import { useToast } from "../../components/ui/Toast";
import {
  Calendar,
  Clock,
  CheckCircle2,
  AlertCircle,
  FileText,
  User,
  Phone,
  Mail,
  MapPin,
  Laptop,
  Scale,
  RefreshCw,
} from "lucide-react";

interface AppointmentFormProps {
  initialCategory?: string;
  onSuccessCallback?: (id?: string) => void;
}

export const AppointmentForm: React.FC<AppointmentFormProps> = ({
  initialCategory,
  onSuccessCallback,
}) => {
  const { showToast } = useToast();
  const [submitAppointment, { isLoading }] = useSubmitAppointmentMutation();
  const [submittedAppointmentId, setSubmittedAppointmentId] = useState<string | null>(
    null,
  );

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<AppointmentFormData>({
    resolver: zodResolver(appointmentFormSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      serviceCategory: initialCategory || "",
      preferredDate: "",
      preferredTime: "11:00 AM",
      consultationMode: "in-person",
      notes: "",
      agreedToPrivacy: false,
    },
  });

  const selectedMode = watch("consultationMode");

  // Today's date string for min date in picker
  const todayStr = new Date().toISOString().split("T")[0];

  const onSubmit = async (data: AppointmentFormData) => {
    try {
      const response = await submitAppointment({
        fullName: data.fullName,
        phone: data.phone,
        email: data.email || undefined,
        serviceCategory: data.serviceCategory,
        preferredDate: data.preferredDate,
        preferredTime: data.preferredTime,
        consultationMode: data.consultationMode,
        notes: data.notes,
        agreedToPrivacy: data.agreedToPrivacy,
        feeAmount: FIRM_DETAILS.consultationFeeNPR,
      }).unwrap();

      if (response.success) {
        const appointmentId = response.id || response.appointment?.id || "submitted";
        setSubmittedAppointmentId(appointmentId);
        showToast({
          type: "success",
          title: "Appointment Request Submitted",
          message: "Your consultation request has been submitted. Awaiting confirmation by firm.",
        });
        if (onSuccessCallback) {
          onSuccessCallback(appointmentId);
        }
      }
    } catch (err: unknown) {
      showToast({
        type: "error",
        title: "Submission Error",
        message:
          "Unable to submit your appointment request at this moment. Please call +977 9706410516 directly.",
      });
    }
  };

  const handleBookAnother = () => {
    setSubmittedAppointmentId(null);
    reset();
  };

  if (submittedAppointmentId) {
    return (
      <div className="bg-[#FAF8F5] border border-[#C7A56A]/50 rounded-sm p-8 sm:p-10 text-center max-w-xl mx-auto shadow-sm">
        <div className="w-16 h-16 rounded-full bg-[#101C2C] text-[#C7A56A] flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <span className="text-xs uppercase tracking-widest text-[#B38E51] font-semibold block mb-1">
          Request Received
        </span>
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#101C2C] mb-3">
          Appointment Request Submitted
        </h3>

        <div className="my-6 p-4 bg-[#EDE8DD] border border-[#C7A56A]/40 rounded-sm">
          <div className="text-xs text-slate-600 mb-1">
            Appointment Request Status:
          </div>
          <div className="font-serif text-lg font-bold text-[#101C2C] tracking-wide">
            Registered with Chamber
          </div>
        </div>

        <div className="text-xs text-slate-600 text-left space-y-2 mb-6 bg-white p-4 rounded-sm border border-slate-200">
          <p className="flex items-start gap-2">
            <span className="font-semibold text-slate-800">Status:</span>
            <span className="text-amber-800 font-medium">
              Pending Review & Scheduling Confirmation
            </span>
          </p>
          <p className="flex items-start gap-2">
            <span className="font-semibold text-slate-800">
              Consultation Fee:
            </span>
            <span>
              NPR {FIRM_DETAILS.consultationFeeNPR} (payable upon confirmation
              or arrival)
            </span>
          </p>
          <p className="flex items-start gap-2">
            <span className="font-semibold text-slate-800">
              Office Location:
            </span>
            <span>{FIRM_DETAILS.address}</span>
          </p>
          <p className="pt-2 text-[11px] text-slate-500 border-t border-slate-100">
            Our chamber coordinator will review your requested time slot and
            phone you at your registered number to finalize the schedule.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={`tel:${FIRM_DETAILS.phone}`}
            className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider bg-[#101C2C] text-white rounded-sm hover:bg-[#17283F] transition-colors"
          >
            Direct Inquiries: {FIRM_DETAILS.phoneDisplay}
          </a>
          <button
            onClick={handleBookAnother}
            className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider border border-slate-300 text-slate-700 rounded-sm hover:bg-slate-100 transition-colors inline-flex items-center justify-center gap-1.5"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Submit Another Request</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-[#FAF8F5] border border-[#E2DBCD] rounded-sm p-6 sm:p-10 shadow-xs space-y-6"
      noValidate
    >
      {/* Fee & Chamber Notice Strip */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-[#EDE8DD]/70 rounded-sm border border-[#C7A56A]/30">
        <div>
          <div className="text-xs uppercase tracking-wider text-slate-500 font-semibold">
            Initial Matter Review Fee
          </div>
          <div className="font-serif text-2xl font-bold text-[#101C2C]">
            NPR {FIRM_DETAILS.consultationFeeNPR}
          </div>
        </div>
        <div className="text-xs text-slate-600 sm:text-right max-w-xs">
          30–45 min structured discussion with a licensed advocate in Tokha,
          Kathmandu or online.
        </div>
      </div>

      {/* Grid of Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Full Name */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
            Full Legal Name <span className="text-rose-600">*</span>
          </label>
          <div className="relative">
            <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3 pointer-events-none" />
            <input
              type="text"
              {...register("fullName")}
              placeholder="e.g. Ramesh Shrestha"
              className={`w-full pl-10 pr-3.5 py-2.5 bg-white border text-sm rounded-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-1 ${
                errors.fullName
                  ? "border-rose-400 focus:ring-rose-500"
                  : "border-slate-300 focus:border-[#C7A56A] focus:ring-[#C7A56A]"
              }`}
            />
          </div>
          {errors.fullName && (
            <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              <span>{errors.fullName.message}</span>
            </p>
          )}
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
            Phone / Mobile Number <span className="text-rose-600">*</span>
          </label>
          <div className="relative">
            <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3 pointer-events-none" />
            <input
              type="tel"
              {...register("phone")}
              placeholder="+977 98XXXXXXXX"
              className={`w-full pl-10 pr-3.5 py-2.5 bg-white border text-sm rounded-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-1 ${
                errors.phone
                  ? "border-rose-400 focus:ring-rose-500"
                  : "border-slate-300 focus:border-[#C7A56A] focus:ring-[#C7A56A]"
              }`}
            />
          </div>
          {errors.phone && (
            <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              <span>{errors.phone.message}</span>
            </p>
          )}
        </div>

        {/* Email Address */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
            Email Address{" "}
            <span className="text-slate-400 text-[10px] font-normal">
              (Optional)
            </span>
          </label>
          <div className="relative">
            <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3 pointer-events-none" />
            <input
              type="email"
              {...register("email")}
              placeholder="name@example.com"
              className={`w-full pl-10 pr-3.5 py-2.5 bg-white border text-sm rounded-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-1 ${
                errors.email
                  ? "border-rose-400 focus:ring-rose-500"
                  : "border-slate-300 focus:border-[#C7A56A] focus:ring-[#C7A56A]"
              }`}
            />
          </div>
          {errors.email && (
            <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              <span>{errors.email.message}</span>
            </p>
          )}
        </div>

        {/* Practice Area / Service Category */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
            Practice Area / Matter Category{" "}
            <span className="text-rose-600">*</span>
          </label>
          <div className="relative">
            <Scale className="w-4 h-4 text-slate-400 absolute left-3.5 top-3 pointer-events-none" />
            <select
              {...register("serviceCategory")}
              className={`w-full pl-10 pr-3.5 py-2.5 bg-white border text-sm rounded-sm text-slate-900 focus:outline-none focus:ring-1 ${
                errors.serviceCategory
                  ? "border-rose-400 focus:ring-rose-500"
                  : "border-slate-300 focus:border-[#C7A56A] focus:ring-[#C7A56A]"
              }`}
            >
              <option value="">-- Select Legal Practice Category --</option>
              <optgroup label="Primary Specialization: Divorce & Family Law">
                {PRACTICE_AREAS.filter((a) => a.category === "matrimonial").map((area) => (
                  <option key={area.id} value={area.title}>
                    {area.title} {area.badge ? `(${area.badge})` : ""}
                  </option>
                ))}
              </optgroup>
              <optgroup label="Secondary Practice Disciplines">
                {PRACTICE_AREAS.filter((a) => a.category !== "matrimonial").map((area) => (
                  <option key={area.id} value={area.title}>
                    {area.title}
                  </option>
                ))}
                <option value="General Legal Opinion">
                  General Legal Opinion / Notary Consultation
                </option>
              </optgroup>
            </select>
          </div>
          {errors.serviceCategory && (
            <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              <span>{errors.serviceCategory.message}</span>
            </p>
          )}
        </div>

        {/* Consultation Mode */}
        <div className="md:col-span-2">
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
            Consultation Mode <span className="text-rose-600">*</span>
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <label
              className={`flex items-center gap-3 p-3.5 rounded-sm border cursor-pointer transition-colors ${
                selectedMode === "in-person"
                  ? "bg-white border-[#C7A56A] ring-1 ring-[#C7A56A]"
                  : "bg-[#FAF8F5] border-slate-200 hover:border-slate-300"
              }`}
            >
              <input
                type="radio"
                value="in-person"
                {...register("consultationMode")}
                className="text-[#C7A56A] focus:ring-[#C7A56A]"
              />
              <MapPin className="w-4 h-4 text-[#C7A56A] shrink-0" />
              <div>
                <div className="text-xs font-semibold text-slate-900">
                  In-Person Consultation
                </div>
                <div className="text-[11px] text-slate-500">
                  Chamber in Basundhara-5, Tokha, Kathmandu
                </div>
              </div>
            </label>

            <label
              className={`flex items-center gap-3 p-3.5 rounded-sm border cursor-pointer transition-colors ${
                selectedMode === "online"
                  ? "bg-white border-[#C7A56A] ring-1 ring-[#C7A56A]"
                  : "bg-[#FAF8F5] border-slate-200 hover:border-slate-300"
              }`}
            >
              <input
                type="radio"
                value="online"
                {...register("consultationMode")}
                className="text-[#C7A56A] focus:ring-[#C7A56A]"
              />
              <Laptop className="w-4 h-4 text-[#C7A56A] shrink-0" />
              <div>
                <div className="text-xs font-semibold text-slate-900">
                  Online Video / Phone Call
                </div>
                <div className="text-[11px] text-slate-500">
                  Google Meet or Phone for remote clients
                </div>
              </div>
            </label>
          </div>
          {errors.consultationMode && (
            <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              <span>{errors.consultationMode.message}</span>
            </p>
          )}
        </div>

        {/* Preferred Date */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
            Preferred Date <span className="text-rose-600">*</span>
          </label>
          <div className="relative">
            <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-3 pointer-events-none" />
            <input
              type="date"
              min={todayStr}
              {...register("preferredDate")}
              className={`w-full pl-10 pr-3.5 py-2.5 bg-white border text-sm rounded-sm text-slate-900 focus:outline-none focus:ring-1 ${
                errors.preferredDate
                  ? "border-rose-400 focus:ring-rose-500"
                  : "border-slate-300 focus:border-[#C7A56A] focus:ring-[#C7A56A]"
              }`}
            />
          </div>
          {errors.preferredDate && (
            <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              <span>{errors.preferredDate.message}</span>
            </p>
          )}
        </div>

        {/* Preferred Time Slot */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
            Preferred Time Slot <span className="text-rose-600">*</span>
          </label>
          <div className="relative">
            <Clock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3 pointer-events-none" />
            <select
              {...register("preferredTime")}
              className={`w-full pl-10 pr-3.5 py-2.5 bg-white border text-sm rounded-sm text-slate-900 focus:outline-none focus:ring-1 ${
                errors.preferredTime
                  ? "border-rose-400 focus:ring-rose-500"
                  : "border-slate-300 focus:border-[#C7A56A] focus:ring-[#C7A56A]"
              }`}
            >
              <option value="08:30 AM">08:30 AM - Early Morning Slot</option>
              <option value="09:30 AM">09:30 AM - Morning Slot</option>
              <option value="10:30 AM">10:30 AM - Mid-Morning Slot</option>
              <option value="11:30 AM">11:30 AM - Late Morning Slot</option>
              <option value="01:30 PM">01:30 PM - Afternoon Slot</option>
              <option value="03:00 PM">03:00 PM - Afternoon Slot</option>
              <option value="04:30 PM">04:30 PM - Late Afternoon Slot</option>
              <option value="05:30 PM">05:30 PM - Evening Slot</option>
            </select>
          </div>
          {errors.preferredTime && (
            <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              <span>{errors.preferredTime.message}</span>
            </p>
          )}
        </div>
      </div>

      {/* Brief Notes */}
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
          Brief Summary of Legal Concern{" "}
          <span className="text-rose-600">*</span>
        </label>
        <div className="relative">
          <FileText className="w-4 h-4 text-slate-400 absolute left-3.5 top-3 pointer-events-none" />
          <textarea
            rows={4}
            {...register("notes")}
            placeholder="Please summarize the facts, dates, agreements, or court notices involved. Do not send highly sensitive credentials or private keys."
            className={`w-full pl-10 pr-3.5 py-2.5 bg-white border text-sm rounded-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-1 ${
              errors.notes
                ? "border-rose-400 focus:ring-rose-500"
                : "border-slate-300 focus:border-[#C7A56A] focus:ring-[#C7A56A]"
            }`}
          />
        </div>
        {errors.notes && (
          <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" />
            <span>{errors.notes.message}</span>
          </p>
        )}
      </div>

      {/* Privacy Agreement Checkbox */}
      <div className="pt-2">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            {...register("agreedToPrivacy")}
            className="mt-1 text-[#C7A56A] rounded-xs focus:ring-[#C7A56A]"
          />
          <span className="text-xs text-slate-600 leading-relaxed">
            I understand that submitting this appointment request and paying the
            NPR 500 consultation fee does not create an advocate-client
            relationship until formally agreed upon in writing. I consent to
            Raut Legal Associates contacting me regarding this legal inquiry.
          </span>
        </label>
        {errors.agreedToPrivacy && (
          <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" />
            <span>{errors.agreedToPrivacy.message}</span>
          </p>
        )}
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={isLoading}
          className="w-full sm:w-auto px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#101C2C] bg-[#C7A56A] hover:bg-[#D8B983] active:bg-[#B38E51] transition-all rounded-sm shadow-xs disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2"
        >
          {isLoading ? (
            <>
              <div className="w-4 h-4 border-2 border-[#101C2C] border-t-transparent rounded-full animate-spin" />
              <span>Processing Request...</span>
            </>
          ) : (
            <span>Submit Appointment Request (Fee: NPR 500)</span>
          )}
        </button>
      </div>
    </form>
  );
};
