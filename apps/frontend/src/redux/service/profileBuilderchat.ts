"use client";

import { rootApiSlice } from "./rootApislice";

const profileChatBuilder = rootApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    chat: builder.mutation({
      query: ({ data, type }) => ({
        url: `/chat/${type}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Chat"],
    }),
    getOldchat: builder.query<any, void>({
      query: () => ({
        url: `/get-chats`,
        method: "GET",
      }),
      providesTags: ["FetchChat"],
    }),
    uploadResume: builder.mutation({
      query: (file: File) => {
        const formData = new FormData();
        formData.append("resume", file);

        return {
          url: `resume-upload`,
          method: "POST",
          body: formData,
        };
      },
      invalidatesTags: ["UploadResume"],
    }),
    uploadDocument: builder.mutation({
      query: ({ file, documentType }) => {
        const formData = new FormData();
        formData.append(documentType, file);

        return {
          url: `/common-documents-upload/${documentType}`,
          method: "POST",
          body: formData
        };
      },
      invalidatesTags: ["uploadFile"],
    }),
    getResumeStatus: builder.query<any, void>({
      query: () => `/resume-status`,
      providesTags: ["FetchResume"],
    }),
  }),
});

export const {
  useChatMutation,
  useLazyGetOldchatQuery,
  useUploadResumeMutation,
  useLazyGetResumeStatusQuery,
  useUploadDocumentMutation
} = profileChatBuilder;
