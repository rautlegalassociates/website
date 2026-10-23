import { baseApi } from "./api";
import { AppointmentRequest, AppointmentResponse, AppointmentStatus } from "../types";

export interface DashboardAppointment extends AppointmentRequest {
  id: string;
  advocateNotes?: string;
  assignedAdvocate?: string;
  status: AppointmentStatus;
}

export interface AppointmentsListResponse {
  success: boolean;
  count: number;
  appointments: DashboardAppointment[];
}

export interface UpdateAppointmentPayload {
  idOrRef: string;
  status?: AppointmentStatus;
  advocateNotes?: string;
  assignedAdvocate?: string;
  preferredDate?: string;
  preferredTime?: string;
  consultationMode?: string;
}

export const appointmentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Submit appointment from public portal or chat
    submitAppointment: builder.mutation<
      AppointmentResponse,
      AppointmentRequest
    >({
      query: (requestData) => ({
        url: "/appointments",
        method: "POST",
        body: requestData,
      }),
      invalidatesTags: ["Appointments"],
    }),

    // Fetch all appointments for chamber dashboard
    getAppointments: builder.query<
      DashboardAppointment[],
      { status?: string; search?: string; category?: string; limit?: number } | void
    >({
      query: (params) => {
        const queryParams = new URLSearchParams();
        if (params?.status && params.status !== "all") queryParams.append("status", params.status);
        if (params?.search) queryParams.append("search", params.search);
        if (params?.category && params.category !== "all") queryParams.append("category", params.category);
        if (params?.limit) queryParams.append("limit", String(params.limit));
        const qs = queryParams.toString();
        return `/appointments${qs ? `?${qs}` : ""}`;
      },
      transformResponse: (response: AppointmentsListResponse | DashboardAppointment[]) => {
        if ("appointments" in response && Array.isArray(response.appointments)) {
          return response.appointments;
        }
        return Array.isArray(response) ? response : [];
      },
      providesTags: ["Appointments"],
    }),

    // Get appointment details by ID
    getAppointmentStatus: builder.query<DashboardAppointment | null, string>({
      query: (id) => `/appointments/${encodeURIComponent(id)}`,
      transformResponse: (response: { success?: boolean; appointment?: DashboardAppointment } | DashboardAppointment) => {
        if ("appointment" in response && response.appointment) {
          return response.appointment;
        }
        return response as DashboardAppointment;
      },
      providesTags: ["Appointments"],
    }),

    // Update appointment status / advocate notes
    updateAppointment: builder.mutation<
      { success: boolean; appointment: DashboardAppointment },
      UpdateAppointmentPayload
    >({
      query: ({ idOrRef, ...body }) => ({
        url: `/appointments/${encodeURIComponent(idOrRef)}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["Appointments"],
    }),

    // Delete appointment
    deleteAppointment: builder.mutation<
      { success: boolean; message: string },
      string
    >({
      query: (idOrRef) => ({
        url: `/appointments/${encodeURIComponent(idOrRef)}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Appointments"],
    }),
  }),
});

export const {
  useSubmitAppointmentMutation,
  useGetAppointmentsQuery,
  useGetAppointmentStatusQuery,
  useUpdateAppointmentMutation,
  useDeleteAppointmentMutation,
} = appointmentApi;
