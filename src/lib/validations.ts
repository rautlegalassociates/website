import { z } from "zod";

// Nepal phone format helper or international standard
const phoneRegex = /^(\+?977[- ]?)?(9[78]\d{8}|01[- ]?\d{7}|\d{7,14})$/;

export const appointmentFormSchema = z.object({
  fullName: z
    .string()
    .min(3, "Please provide your full legal name (at least 3 characters).")
    .max(100, "Name is too long."),
  phone: z
    .string()
    .min(9, "Please enter a valid phone number (at least 9 digits).")
    .regex(
      phoneRegex,
      "Please enter a valid Nepalese mobile/landline number (e.g. +977 98XXXXXXXX or 97XXXXXXXX).",
    ),
  email: z
    .string()
    .email("Please enter a valid email address.")
    .optional()
    .or(z.literal("")),
  serviceCategory: z
    .string()
    .min(1, "Please select a legal practice area or consultation category."),
  preferredDate: z
    .string()
    .min(1, "Please select a preferred date for the consultation.")
    .refine((val) => {
      const selected = new Date(val);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return selected >= today;
    }, "Appointment date cannot be in the past."),
  preferredTime: z
    .string()
    .min(1, "Please select a preferred consultation time slot."),
  consultationMode: z.enum(["in-person", "online"], {
    message:
      "Please choose between In-person (Kathmandu office) or Online consultation.",
  }),
  notes: z
    .string()
    .min(
      10,
      "Please briefly describe your legal matter (at least 10 characters).",
    )
    .max(1500, "Notes are too long (maximum 1500 characters)."),
  agreedToPrivacy: z.boolean().refine((val) => val === true, {
    message:
      "You must acknowledge the legal consultation terms and privacy notice.",
  }),
});

export type AppointmentFormData = z.infer<typeof appointmentFormSchema>;

export const contactFormSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  emailOrPhone: z
    .string()
    .min(5, "Please provide a valid phone number or email address."),
  subject: z.string().min(3, "Please specify the subject of your inquiry."),
  message: z
    .string()
    .min(10, "Please enter your message (at least 10 characters).")
    .max(2000, "Message cannot exceed 2000 characters."),
  agreedToPrivacy: z.boolean().refine((val) => val === true, {
    message: "Please acknowledge our privacy terms before submitting.",
  }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
