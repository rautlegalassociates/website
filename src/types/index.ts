export type ConsultationMode = "in-person" | "online";

export type AppointmentStatus =
  | "pending"
  | "confirmed"
  | "cancelled"
  | "completed";

export interface PracticeArea {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  overview: string;
  iconName: string;
  category?: "matrimonial" | "secondary";
  badge?: string;
  highlightTimeline?: string;
  commonIssues: string[];
  howWeAssist: string[];
  processSteps: { title: string; description: string }[];
  documentChecklist?: string[];
  faqs: { question: string; answer: string }[];
}

export interface Lawyer {
  id: string;
  slug: string;
  name: string;
  title: string;
  designation: string;
  status: string;
  shortBio: string;
  fullBio: string[];
  practiceAreas: string[];
  qualifications: string[];
  barRegistration: string; // Editable placeholder
  languages: string[];
  emailPlaceholder?: string;
  officeLocation: string;
  imageUrl?: string;
}

export interface LegalArticle {
  id: string;
  slug: string;
  title: string;
  summary: string;
  category: string;
  author: string;
  publishedDate: string;
  updatedDate: string;
  readTime: string;
  isDraftReviewRequired: boolean;
  content: {
    heading: string;
    paragraphs: string[];
  }[];
  keyTakeaways: string[];
  relatedSlugs?: string[];
}

export interface AppointmentRequest {
  id?: string;
  fullName: string;
  phone: string;
  email?: string;
  serviceCategory: string;
  preferredDate: string;
  preferredTime: string;
  consultationMode: ConsultationMode;
  notes: string;
  agreedToPrivacy: boolean;
  feeAmount: number;
  status?: AppointmentStatus;
  createdAt?: string;
}

export interface AppointmentResponse {
  success: boolean;
  id?: string;
  message: string;
  appointment: AppointmentRequest;
}

export interface ContactMessage {
  id?: string;
  name: string;
  emailOrPhone: string;
  subject: string;
  message: string;
  agreedToPrivacy: boolean;
  createdAt?: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
}
