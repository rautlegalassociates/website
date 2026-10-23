import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Read baseUrl from environment variable, falling back to local /api
const baseUrl = import.meta.env.VITE_API_BASE_URL || "/api";

const rawBaseQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders: (headers) => {
    headers.set("Content-Type", "application/json");
    const token = sessionStorage.getItem("rla_staff_token");
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth = async (args: any, api: any, extraOptions: any) => {
  const result = await rawBaseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
    sessionStorage.removeItem("rla_staff_session");
    sessionStorage.removeItem("rla_staff_token");
    if (window.location.pathname.startsWith("/dashboard")) {
      window.location.href = "/login";
    }
  }
  return result;
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["Appointments", "Contact", "Auth"],
  endpoints: () => ({}),
});
