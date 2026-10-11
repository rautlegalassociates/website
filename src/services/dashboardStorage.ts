import { AppointmentRequest, AppointmentStatus, ContactMessage } from '../types';

export type InquiryStatus = 'unread' | 'in-review' | 'resolved';

export interface DashboardAppointment extends AppointmentRequest {
  id: string;
  referenceCode: string;
  advocateNotes?: string;
  assignedAdvocate?: string;
  status: AppointmentStatus;
}

export interface DashboardInquiry {
  id: string;
  name: string;
  emailOrPhone: string;
  subject: string;
  message: string;
  status: InquiryStatus;
  receivedAt: string;
  assignedAdvocate?: string;
  internalNotes?: string;
  agreedToPrivacy: boolean;
}

export interface StaffUser {
  id: string;
  name: string;
  email: string;
  role: 'Senior Advocate' | 'Advocate' | 'Chamber Coordinator';
  chamber: string;
}

const APPOINTMENTS_STORAGE_KEY = 'rla_own_appointments';
const INQUIRIES_STORAGE_KEY = 'rla_contact_messages';
const AUTH_STORAGE_KEY = 'rla_staff_session';

// Seed Initial Nepal Legal Chamber Data if storage is empty
const INITIAL_SEED_APPOINTMENTS: DashboardAppointment[] = [
  {
    id: 'apt_seed_1',
    referenceCode: 'RLA-2026-8412',
    fullName: 'Dipendra Bikram Shah',
    phone: '+977 9841234567',
    email: 'dipendra.b@gmail.com',
    serviceCategory: 'Corporate & Commercial Law',
    preferredDate: '2026-10-14',
    preferredTime: '10:30 AM',
    consultationMode: 'in-person',
    notes: 'Inquiry regarding private company incorporation at Office of the Company Registrar (OCR) and trademark classification registration.',
    agreedToPrivacy: true,
    feeAmount: 500,
    status: 'pending',
    createdAt: '2026-10-10T14:30:00Z',
    assignedAdvocate: 'Adv. Sahil Raut Gaddi',
  },
  {
    id: 'apt_seed_2',
    referenceCode: 'RLA-2026-7291',
    fullName: 'Sunita Adhikari',
    phone: '+977 9851098765',
    email: 'sunita.adhikari@yahoo.com',
    serviceCategory: 'Property, Land & Real Estate Law',
    preferredDate: '2026-10-15',
    preferredTime: '01:30 PM',
    consultationMode: 'in-person',
    notes: 'Boundary dispute and land title deed (Rajinama) due diligence in Tokha Ward-5 before purchase. Malpot verification required.',
    agreedToPrivacy: true,
    feeAmount: 500,
    status: 'confirmed',
    createdAt: '2026-10-09T11:15:00Z',
    assignedAdvocate: 'Adv. Avishek Raut',
    advocateNotes: 'Client will bring original Lalpurja and cadastral trace map from Survey Office.',
  },
  {
    id: 'apt_seed_3',
    referenceCode: 'RLA-2026-6154',
    fullName: 'Raj Kumar Thapa',
    phone: '+977 9813456789',
    email: 'raj.thapa@outlook.com',
    serviceCategory: 'Banking & Financial Disputes',
    preferredDate: '2026-10-16',
    preferredTime: '11:30 AM',
    consultationMode: 'online',
    notes: 'Defense in dishonored cheque complaint under Banking Offenses and Punishment Act 2064. Notice period already lapsed.',
    agreedToPrivacy: true,
    feeAmount: 500,
    status: 'confirmed',
    createdAt: '2026-10-08T09:20:00Z',
    assignedAdvocate: 'Adv. Sahil Raut Gaddi',
  },
  {
    id: 'apt_seed_4',
    referenceCode: 'RLA-2026-5520',
    fullName: 'Anita Sharma',
    phone: '+977 9801239874',
    email: 'anita.sharma99@gmail.com',
    serviceCategory: 'Family & Matrimonial Law',
    preferredDate: '2026-10-12',
    preferredTime: '03:00 PM',
    consultationMode: 'online',
    notes: 'Mutual consent divorce (Bibaha Bichhed) petition filing and property distribution deed under Muluki Civil Code 2074.',
    agreedToPrivacy: true,
    feeAmount: 500,
    status: 'completed',
    createdAt: '2026-10-05T16:00:00Z',
    assignedAdvocate: 'Adv. Bishwanath Das',
    advocateNotes: 'Consultation concluded. Vakalatnama signed; petition drafted for Kathmandu District Court.',
  },
  {
    id: 'apt_seed_5',
    referenceCode: 'RLA-2026-4890',
    fullName: 'Ramesh Bahadur Karki',
    phone: '+977 9860112233',
    email: '',
    serviceCategory: 'Contract Drafting & Review',
    preferredDate: '2026-10-18',
    preferredTime: '04:30 PM',
    consultationMode: 'in-person',
    notes: 'Commercial lease agreement review for a multi-story retail complex in New Baneshwor, Kathmandu.',
    agreedToPrivacy: true,
    feeAmount: 500,
    status: 'pending',
    createdAt: '2026-10-11T08:10:00Z',
    assignedAdvocate: 'Adv. Sahil Raut Gaddi',
  },
];

const INITIAL_SEED_INQUIRIES: DashboardInquiry[] = [
  {
    id: 'inq_seed_1',
    name: 'Santosh Maharjan',
    emailOrPhone: '+977 9841998877',
    subject: 'Company Share Transfer & OCR Approval in Kathmandu',
    message: 'We are a technology startup in Lalitpur wishing to transfer 30% equity to a foreign angel investor. What approvals from Nepal Rastra Bank and the Office of the Company Registrar are needed?',
    status: 'unread',
    receivedAt: '2026-10-11T03:45:00Z',
    assignedAdvocate: 'Adv. Sahil Raut Gaddi',
    agreedToPrivacy: true,
  },
  {
    id: 'inq_seed_2',
    name: 'Pooja Shrestha',
    emailOrPhone: 'pooja.shrestha@nepalmail.com',
    subject: 'Civil Haddmyad Question for Tokha Land Dispute',
    message: 'My neighbor built a wall encroaching 3 feet into our registered Kitta in Tokha. What is the limitation period (Haddmyad) under Chapter 9 of the Muluki Civil Code to file in Kathmandu District Court?',
    status: 'in-review',
    receivedAt: '2026-10-10T12:20:00Z',
    assignedAdvocate: 'Adv. Avishek Raut',
    internalNotes: 'Limitation is 6 months from discovery of encroachment under Section 298. Advised to call for consultation.',
    agreedToPrivacy: true,
  },
  {
    id: 'inq_seed_3',
    name: 'Binod Kumar Yadav',
    emailOrPhone: '+977 9803456123',
    subject: 'Labor Contract Termination & Gratuity Calculation',
    message: 'We employ 24 workers in Birgunj. Need guidance on severance notice and Labour Court procedures under Labour Act 2074.',
    status: 'resolved',
    receivedAt: '2026-10-09T08:05:00Z',
    assignedAdvocate: 'Adv. Bishwanath Das',
    internalNotes: 'Contacted client via telephone. Scheduled formal contract review retainer.',
    agreedToPrivacy: true,
  },
];

// Initialize Appointments
export function getAllAppointments(): DashboardAppointment[] {
  try {
    const raw = localStorage.getItem(APPOINTMENTS_STORAGE_KEY);
    if (!raw) {
      // Seed initial data
      const record: Record<string, DashboardAppointment> = {};
      INITIAL_SEED_APPOINTMENTS.forEach((app) => {
        record[app.referenceCode] = app;
      });
      localStorage.setItem(APPOINTMENTS_STORAGE_KEY, JSON.stringify(record));
      return INITIAL_SEED_APPOINTMENTS;
    }
    const parsed = JSON.parse(raw);
    // Can be an object of key -> appointment or an array
    if (Array.isArray(parsed)) {
      return parsed;
    }
    return Object.values(parsed) as DashboardAppointment[];
  } catch {
    return INITIAL_SEED_APPOINTMENTS;
  }
}

export function saveAppointment(appointment: DashboardAppointment): void {
  try {
    const list = getAllAppointments();
    const existingIndex = list.findIndex(
      (a) => a.id === appointment.id || (a.referenceCode && a.referenceCode === appointment.referenceCode)
    );

    const record: Record<string, DashboardAppointment> = {};
    if (existingIndex >= 0) {
      list[existingIndex] = appointment;
    } else {
      list.unshift(appointment);
    }

    list.forEach((a) => {
      if (a.referenceCode) {
        record[a.referenceCode] = a;
      }
    });

    localStorage.setItem(APPOINTMENTS_STORAGE_KEY, JSON.stringify(record));
    window.dispatchEvent(new Event('storage'));
  } catch (e) {
    console.error('Failed to save appointment', e);
  }
}

export function updateAppointmentStatus(referenceCode: string, status: AppointmentStatus, notes?: string): boolean {
  try {
    const list = getAllAppointments();
    const target = list.find((a) => a.referenceCode === referenceCode);
    if (!target) return false;

    target.status = status;
    if (notes !== undefined) {
      target.advocateNotes = notes;
    }

    const record: Record<string, DashboardAppointment> = {};
    list.forEach((a) => {
      if (a.referenceCode) {
        record[a.referenceCode] = a;
      }
    });

    localStorage.setItem(APPOINTMENTS_STORAGE_KEY, JSON.stringify(record));
    window.dispatchEvent(new Event('storage'));
    return true;
  } catch {
    return false;
  }
}

export function deleteAppointment(referenceCode: string): boolean {
  try {
    const list = getAllAppointments();
    const filtered = list.filter((a) => a.referenceCode !== referenceCode);

    const record: Record<string, DashboardAppointment> = {};
    filtered.forEach((a) => {
      if (a.referenceCode) {
        record[a.referenceCode] = a;
      }
    });

    localStorage.setItem(APPOINTMENTS_STORAGE_KEY, JSON.stringify(record));
    window.dispatchEvent(new Event('storage'));
    return true;
  } catch {
    return false;
  }
}

// Inquiries / Contacts
export function getAllInquiries(): DashboardInquiry[] {
  try {
    const raw = localStorage.getItem(INQUIRIES_STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(INQUIRIES_STORAGE_KEY, JSON.stringify(INITIAL_SEED_INQUIRIES));
      return INITIAL_SEED_INQUIRIES;
    }
    return JSON.parse(raw) as DashboardInquiry[];
  } catch {
    return INITIAL_SEED_INQUIRIES;
  }
}

export function saveInquiry(message: ContactMessage): DashboardInquiry {
  const list = getAllInquiries();
  const newInquiry: DashboardInquiry = {
    id: `inq_${Date.now()}`,
    name: message.name,
    emailOrPhone: message.emailOrPhone,
    subject: message.subject,
    message: message.message,
    status: 'unread',
    receivedAt: new Date().toISOString(),
    agreedToPrivacy: message.agreedToPrivacy,
    assignedAdvocate: 'Adv. Sahil Raut Gaddi',
  };

  list.unshift(newInquiry);
  try {
    localStorage.setItem(INQUIRIES_STORAGE_KEY, JSON.stringify(list));
    window.dispatchEvent(new Event('storage'));
  } catch (e) {
    console.error('Failed to save inquiry', e);
  }
  return newInquiry;
}

export function updateInquiryStatus(id: string, status: InquiryStatus, internalNotes?: string): boolean {
  try {
    const list = getAllInquiries();
    const target = list.find((i) => i.id === id);
    if (!target) return false;

    target.status = status;
    if (internalNotes !== undefined) {
      target.internalNotes = internalNotes;
    }

    localStorage.setItem(INQUIRIES_STORAGE_KEY, JSON.stringify(list));
    window.dispatchEvent(new Event('storage'));
    return true;
  } catch {
    return false;
  }
}

export function deleteInquiry(id: string): boolean {
  try {
    const list = getAllInquiries();
    const filtered = list.filter((i) => i.id !== id);
    localStorage.setItem(INQUIRIES_STORAGE_KEY, JSON.stringify(filtered));
    window.dispatchEvent(new Event('storage'));
    return true;
  } catch {
    return false;
  }
}

// Reset data to seeds
export function resetChamberData(): void {
  const record: Record<string, DashboardAppointment> = {};
  INITIAL_SEED_APPOINTMENTS.forEach((app) => {
    record[app.referenceCode] = app;
  });
  localStorage.setItem(APPOINTMENTS_STORAGE_KEY, JSON.stringify(record));
  localStorage.setItem(INQUIRIES_STORAGE_KEY, JSON.stringify(INITIAL_SEED_INQUIRIES));
  window.dispatchEvent(new Event('storage'));
}

// Authentication Helpers
export const DEMO_STAFF_USERS: StaffUser[] = [
  {
    id: 'staff_sahil',
    name: 'Adv. Sahil Raut Gaddi',
    email: 'sahil@rautlegalassociates.com',
    role: 'Senior Advocate',
    chamber: 'Chamber Tokha, Kathmandu',
  },
  {
    id: 'staff_coordinator',
    name: 'Chamber Coordinator',
    email: 'admin@rautlegalassociates.com',
    role: 'Chamber Coordinator',
    chamber: 'Reception & Registry, Basundhara-5',
  },
  {
    id: 'staff_avishek',
    name: 'Adv. Avishek Raut',
    email: 'avishek@rautlegalassociates.com',
    role: 'Advocate',
    chamber: 'Chamber Tokha, Kathmandu',
  },
];

export function getActiveSession(): StaffUser | null {
  try {
    const raw = localStorage.getItem(AUTH_STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function loginStaff(user: StaffUser): void {
  try {
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
    window.dispatchEvent(new Event('storage'));
  } catch {
    // Ignore
  }
}

export function logoutStaff(): void {
  try {
    localStorage.removeItem(AUTH_STORAGE_KEY);
    window.dispatchEvent(new Event('storage'));
  } catch {
    // Ignore
  }
}
