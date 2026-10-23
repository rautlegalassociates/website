import { baseApi } from "./api";

export interface ChatRequest {
  message: string;
  history?: Array<{ role: "user" | "model"; text: string }>;
}

export interface ChatResponse {
  reply: string;
  error?: string;
}

export const chatApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    sendChatMessage: builder.mutation<ChatResponse, ChatRequest>({
      query: (body) => ({
        url: "/chat",
        method: "POST",
        body,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useSendChatMessageMutation } = chatApi;
