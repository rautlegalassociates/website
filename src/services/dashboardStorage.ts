// Re-export entity types from pure API services
export type {
  DashboardAppointment,
  UpdateAppointmentPayload,
} from "./appointmentApi";

export type {
  DashboardInquiry,
  InquiryStatus,
  UpdateInquiryPayload,
} from "./contactApi";

export interface StaffUser {
  id: string;
  uid?: string;
  name: string;
  email: string;
  role: "Senior Advocate" | "Advocate" | "Chamber Coordinator";
  chamber: string;
  customToken?: string;
}

const AUTH_SESSION_KEY = "rla_staff_session";
const AUTH_TOKEN_KEY = "rla_staff_token";

// In-session authentication without persistent local storage
export function getActiveSession(): StaffUser | null {
  try {
    const raw = sessionStorage.getItem(AUTH_SESSION_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function getActiveToken(): string | null {
  try {
    return sessionStorage.getItem(AUTH_TOKEN_KEY);
  } catch {
    return null;
  }
}

export function loginStaff(user: StaffUser, token?: string): void {
  try {
    sessionStorage.setItem(AUTH_SESSION_KEY, JSON.stringify(user));
    if (token) {
      sessionStorage.setItem(AUTH_TOKEN_KEY, token);
    }
  } catch {
    // Ignore session storage errors
  }
}

export function logoutStaff(): void {
  try {
    sessionStorage.removeItem(AUTH_SESSION_KEY);
    sessionStorage.removeItem(AUTH_TOKEN_KEY);
  } catch {
    // Ignore session storage errors
  }
}
