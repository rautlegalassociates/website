import { baseApi } from "./api";
import { AppointmentRequest, AppointmentResponse } from "../types";

// Helper for demo mode in client environment
const isDemoMode = !import.meta.env.VITE_API_BASE_URL;

// Local storage session key for client-only retrieval of the user's OWN submitted appointment
const OWN_APPOINTMENTS_KEY = "rla_own_appointments";

function getStoredOwnAppointments(): Record<string, AppointmentRequest> {
  try {
    const raw = localStorage.getItem(OWN_APPOINTMENTS_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function saveOwnAppointment(app: AppointmentRequest) {
  try {
    const stored = getStoredOwnAppointments();
    if (app.referenceCode) {
      stored[app.referenceCode] = app;
      localStorage.setItem(OWN_APPOINTMENTS_KEY, JSON.stringify(stored));
    }
  } catch {
    // Ignore storage errors
  }
}

export const appointmentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    submitAppointment: builder.mutation<
      AppointmentResponse,
      AppointmentRequest
    >({
      queryFn: async (requestData, _queryApi, _extraOptions, baseQuery) => {
        if (!isDemoMode) {
          const result = await baseQuery({
            url: "/appointments",
            method: "POST",
            body: requestData,
          });
          if (result.error) return { error: result.error };
          return { data: result.data as AppointmentResponse };
        }

        // Demo mode simulation with realistic delay and validation
        await new Promise((resolve) => setTimeout(resolve, 800));

        const randomCode = Math.floor(1000 + Math.random() * 9000);
        const refCode = `RLA-2026-${randomCode}`;
        const appointment: AppointmentRequest = {
          ...requestData,
          id: `apt_${Date.now()}`,
          referenceCode: refCode,
          status: "pending",
          createdAt: new Date().toISOString(),
          feeAmount: 500,
        };

        saveOwnAppointment(appointment);

        return {
          data: {
            success: true,
            referenceCode: refCode,
            message:
              "Appointment request received in Demo Mode. Your request is currently pending advocate review and scheduling confirmation by the firm. The NPR 500 consultation fee is payable upon appointment confirmation.",
            appointment,
          },
        };
      },
      invalidatesTags: ["Appointments"],
    }),

    getAppointmentStatus: builder.query<AppointmentRequest | null, string>({
      queryFn: async (referenceCode, _queryApi, _extraOptions, baseQuery) => {
        if (!isDemoMode) {
          const result = await baseQuery({
            url: `/appointments/${encodeURIComponent(referenceCode)}`,
            method: "GET",
          });
          if (result.error) return { error: result.error };
          return { data: result.data as AppointmentRequest };
        }

        await new Promise((resolve) => setTimeout(resolve, 300));
        const stored = getStoredOwnAppointments();
        const found = stored[referenceCode] || null;
        return { data: found };
      },
      providesTags: ["Appointments"],
    }),
  }),
});

export const { useSubmitAppointmentMutation, useGetAppointmentStatusQuery } =
  appointmentApi;
