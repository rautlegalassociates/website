import { baseApi } from "./api";
import { ContactMessage, ContactResponse } from "../types";
import { saveInquiry } from "./dashboardStorage";

const isDemoMode = !import.meta.env.VITE_API_BASE_URL;

export const contactApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    submitContactMessage: builder.mutation<ContactResponse, ContactMessage>({
      queryFn: async (messageData, _queryApi, _extraOptions, baseQuery) => {
        if (!isDemoMode) {
          const result = await baseQuery({
            url: "/contact",
            method: "POST",
            body: messageData,
          });
          if (result.error) return { error: result.error };
          return { data: result.data as ContactResponse };
        }

        // Realistic demo mode
        await new Promise((resolve) => setTimeout(resolve, 600));
        saveInquiry(messageData);

        return {
          data: {
            success: true,
            message:
              "Thank you. Your inquiry has been submitted in Demo Mode. Our legal team will review your message and contact you via phone or email during office hours.",
          },
        };
      },
      invalidatesTags: ["Contact"],
    }),
  }),
});

export const { useSubmitContactMessageMutation } = contactApi;
