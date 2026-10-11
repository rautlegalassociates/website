import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Read baseUrl from environment variable, falling back to local /api
const baseUrl = import.meta.env.VITE_API_BASE_URL || "/api";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  tagTypes: ["Appointments", "Contact"],
  endpoints: () => ({}),
});
