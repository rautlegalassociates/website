import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, ContactFormData } from "../../lib/validations";
import { useSubmitContactMessageMutation } from "../../services/contactApi";
import { useToast } from "../../components/ui/Toast";
import { User, Mail, FileText, CheckCircle2, AlertCircle } from "lucide-react";

export const ContactForm: React.FC = () => {
  const { showToast } = useToast();
  const [submitContact, { isLoading }] = useSubmitContactMessageMutation();
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      emailOrPhone: "",
      subject: "",
      message: "",
      agreedToPrivacy: false,
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await submitContact(data).unwrap();
      if (response.success) {
        setIsSuccess(true);
        showToast({
          type: "success",
          title: "Inquiry Received",
          message: "Your message has been received by our chamber coordinator.",
        });
        reset();
      }
    } catch {
      showToast({
        type: "error",
        title: "Error Sending Inquiry",
        message:
          "Could not send message. Please contact +977 9706410516 directly.",
      });
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-[#FAF8F5] border border-[#C7A56A]/50 rounded-sm p-8 text-center">
        <CheckCircle2 className="w-12 h-12 text-[#C7A56A] mx-auto mb-4" />
        <h4 className="font-serif text-2xl font-bold text-[#101C2C] mb-2">
          Thank You for Contacting Us
        </h4>
        <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed mb-6">
          Your legal inquiry has been registered. Our legal team will review
          your matter and respond to you during our standard chamber hours
          (Sunday to Friday, 8:00 AM – 6:00 PM).
        </p>
        <button
          onClick={() => setIsSuccess(false)}
          className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider bg-[#101C2C] text-white rounded-sm hover:bg-[#17283F] transition-colors"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-[#FAF8F5] border border-[#E2DBCD] rounded-sm p-6 sm:p-8 space-y-5"
      noValidate
    >
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
          Your Name <span className="text-rose-600">*</span>
        </label>
        <div className="relative">
          <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3 pointer-events-none" />
          <input
            type="text"
            {...register("name")}
            placeholder="Full Name"
            className={`w-full pl-10 pr-3.5 py-2.5 bg-white border text-sm rounded-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-1 ${
              errors.name
                ? "border-rose-400 focus:ring-rose-500"
                : "border-slate-300 focus:border-[#C7A56A] focus:ring-[#C7A56A]"
            }`}
          />
        </div>
        {errors.name && (
          <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" />
            <span>{errors.name.message}</span>
          </p>
        )}
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
          Phone Number or Email Address <span className="text-rose-600">*</span>
        </label>
        <div className="relative">
          <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3 pointer-events-none" />
          <input
            type="text"
            {...register("emailOrPhone")}
            placeholder="+977 98XXXXXXXX or email@domain.com"
            className={`w-full pl-10 pr-3.5 py-2.5 bg-white border text-sm rounded-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-1 ${
              errors.emailOrPhone
                ? "border-rose-400 focus:ring-rose-500"
                : "border-slate-300 focus:border-[#C7A56A] focus:ring-[#C7A56A]"
            }`}
          />
        </div>
        {errors.emailOrPhone && (
          <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" />
            <span>{errors.emailOrPhone.message}</span>
          </p>
        )}
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
          Subject <span className="text-rose-600">*</span>
        </label>
        <input
          type="text"
          {...register("subject")}
          placeholder="e.g. Inquiries regarding Land Title verification in Kathmandu"
          className={`w-full px-3.5 py-2.5 bg-white border text-sm rounded-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-1 ${
            errors.subject
              ? "border-rose-400 focus:ring-rose-500"
              : "border-slate-300 focus:border-[#C7A56A] focus:ring-[#C7A56A]"
          }`}
        />
        {errors.subject && (
          <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" />
            <span>{errors.subject.message}</span>
          </p>
        )}
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
          Your Message <span className="text-rose-600">*</span>
        </label>
        <div className="relative">
          <FileText className="w-4 h-4 text-slate-400 absolute left-3.5 top-3 pointer-events-none" />
          <textarea
            rows={5}
            {...register("message")}
            placeholder="Briefly state your inquiry, relevant dates, or background details..."
            className={`w-full pl-10 pr-3.5 py-2.5 bg-white border text-sm rounded-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-1 ${
              errors.message
                ? "border-rose-400 focus:ring-rose-500"
                : "border-slate-300 focus:border-[#C7A56A] focus:ring-[#C7A56A]"
            }`}
          />
        </div>
        {errors.message && (
          <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" />
            <span>{errors.message.message}</span>
          </p>
        )}
      </div>

      <div>
        <label className="flex items-start gap-2.5 cursor-pointer">
          <input
            type="checkbox"
            {...register("agreedToPrivacy")}
            className="mt-1 text-[#C7A56A] rounded-xs focus:ring-[#C7A56A]"
          />
          <span className="text-xs text-slate-600 leading-relaxed">
            I agree that this message is for inquiry purposes and does not
            create an advocate-client relationship.
          </span>
        </label>
        {errors.agreedToPrivacy && (
          <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" />
            <span>{errors.agreedToPrivacy.message}</span>
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full sm:w-auto px-7 py-3 text-xs font-semibold uppercase tracking-wider text-[#101C2C] bg-[#C7A56A] hover:bg-[#D8B983] transition-colors rounded-sm disabled:opacity-50 inline-flex items-center justify-center gap-2"
      >
        {isLoading ? (
          <>
            <div className="w-4 h-4 border-2 border-[#101C2C] border-t-transparent rounded-full animate-spin" />
            <span>Sending...</span>
          </>
        ) : (
          <span>Send Message</span>
        )}
      </button>
    </form>
  );
};
