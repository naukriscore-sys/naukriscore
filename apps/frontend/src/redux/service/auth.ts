import { rootApiSlice } from "./rootApislice";

const Auth = rootApiSlice.injectEndpoints({
    endpoints: (builder) => ({
        employerRegister: builder.mutation({
            query: (data) => ({
                url: `/employer-register`,
                method: "POST",
                body: data
            }),
            invalidatesTags: ["employerRegister"]
        }),
        employeeRegister: builder.mutation({
            query: (data) => ({
                url: `/employee-register`,
                method: "POST",
                body: data
            }),
            invalidatesTags: ["employeeRegister"]
        }),
        verifyOtp: builder.mutation({
            query: (data) => ({
                url: `/otp-verify`,
                method: "POST",
                body: data
            }),
            invalidatesTags: ["verifyOtp"]
        }),
        login: builder.mutation({
            query: (data) => ({
                url: `/login`,
                method: "POST",
                body: data
            }),
            invalidatesTags: ["login"]
        })
    })
})

export const { useEmployerRegisterMutation, useEmployeeRegisterMutation, useLoginMutation, useVerifyOtpMutation } = Auth;