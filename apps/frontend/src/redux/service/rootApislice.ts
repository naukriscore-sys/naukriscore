import { HTTP_URL } from "@/lib/constant";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const rootApiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: HTTP_URL,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: [
    "Chat",
    "FetchChat",
    "UploadResume",
    "FetchResume",
    "employerRegister",
    "verifyOtp",
    "employeeRegister",
    "login",
    "profile",
    "score",
    "uploadFile"
  ],
  endpoints: () => ({}),
});
