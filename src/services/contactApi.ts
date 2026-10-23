import { baseApi } from "./api";
import { ContactMessage, ContactResponse } from "../types";

export type InquiryStatus = "unread" | "in-review" | "resolved";

export interface DashboardInquiry {
  id: string;
  name: string;
  emailOrPhone: string;
  subject: string;
  message: string;
  status: InquiryStatus;
  receivedAt: string;
  agreedToPrivacy: boolean;
  assignedAdvocate?: string;
  internalNotes?: string;
  updatedAt?: string;
}

export interface InquiriesListResponse {
  success: boolean;
  count: number;
  inquiries: DashboardInquiry[];
}

export interface UpdateInquiryPayload {
  id: string;
  status?: InquiryStatus;
  internalNotes?: string;
  assignedAdvocate?: string;
}

export const contactApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Submit contact inquiry message
    submitContactMessage: builder.mutation<ContactResponse, ContactMessage>({
      query: (body) => ({
        url: "/contacts",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Contact"],
    }),

    // Get list of all client inquiries
    getContactInquiries: builder.query<
      DashboardInquiry[],
      { status?: string; search?: string; limit?: number } | void
    >({
      query: (params) => {
        const queryParams = new URLSearchParams();
        if (params?.status && params.status !== "all") queryParams.append("status", params.status);
        if (params?.search) queryParams.append("search", params.search);
        if (params?.limit) queryParams.append("limit", String(params.limit));
        const qs = queryParams.toString();
        return `/contacts${qs ? `?${qs}` : ""}`;
      },
      transformResponse: (response: InquiriesListResponse | DashboardInquiry[]) => {
        if ("inquiries" in response && Array.isArray(response.inquiries)) {
          return response.inquiries;
        }
        return Array.isArray(response) ? response : [];
      },
      providesTags: ["Contact"],
    }),

    // Get single inquiry by ID
    getContactInquiryById: builder.query<DashboardInquiry | null, string>({
      query: (id) => `/contacts/${encodeURIComponent(id)}`,
      transformResponse: (response: { success?: boolean; inquiry?: DashboardInquiry } | DashboardInquiry) => {
        if ("inquiry" in response && response.inquiry) {
          return response.inquiry;
        }
        return response as DashboardInquiry;
      },
      providesTags: ["Contact"],
    }),

    // Update inquiry status or internal advocate notes
    updateContactInquiry: builder.mutation<
      { success: boolean; inquiry: DashboardInquiry },
      UpdateInquiryPayload
    >({
      query: ({ id, ...body }) => ({
        url: `/contacts/${encodeURIComponent(id)}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["Contact"],
    }),

    // Delete inquiry
    deleteContactInquiry: builder.mutation<
      { success: boolean; message: string },
      string
    >({
      query: (id) => ({
        url: `/contacts/${encodeURIComponent(id)}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Contact"],
    }),
  }),
});

export const {
  useSubmitContactMessageMutation,
  useGetContactInquiriesQuery,
  useGetContactInquiryByIdQuery,
  useUpdateContactInquiryMutation,
  useDeleteContactInquiryMutation,
} = contactApi;
