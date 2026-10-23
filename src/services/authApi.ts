import { baseApi } from "./api";

export interface StaffUser {
  id: string;
  uid?: string;
  name: string;
  email: string;
  role: "Senior Advocate" | "Advocate" | "Chamber Coordinator";
  chamber: string;
  customToken?: string;
}

export interface LoginRequest {
  email?: string;
  password?: string;
  idToken?: string;
}

export interface AuthApiResponse {
  success: boolean;
  user?: {
    uid: string;
    email: string;
    displayName: string;
    role: "Senior Advocate" | "Advocate" | "Chamber Coordinator";
    chamber: string;
    customToken?: string;
  };
  token?: string;
  message?: string;
  error?: string;
}

export interface StaffDirectoryItem {
  id: string;
  email: string;
  name: string;
  role: "Senior Advocate" | "Advocate" | "Chamber Coordinator";
  chamber: string;
}

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    loginStaff: builder.mutation<AuthApiResponse, LoginRequest>({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
    getCurrentUser: builder.query<{ success: boolean; user: StaffUser }, void>({
      query: () => "/auth/me",
    }),
    logoutStaff: builder.mutation<{ success: boolean; message: string }, void>({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
    }),
    getStaffDirectory: builder.query<StaffDirectoryItem[], void>({
      query: () => "/auth/staff-directory",
      transformResponse: (response: { success: boolean; data: StaffDirectoryItem[] }) =>
        response.data || [],
    }),
  }),
  overrideExisting: false,
});

export const {
  useLoginStaffMutation,
  useGetCurrentUserQuery,
  useLogoutStaffMutation,
  useGetStaffDirectoryQuery,
} = authApi;

