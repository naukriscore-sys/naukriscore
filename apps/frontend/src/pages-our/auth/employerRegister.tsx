"use client";

import {
  useEmployerRegisterMutation,
  useVerifyOtpMutation,
} from "@/redux/service/auth";
import { emplaoyerInitialvalues, employerValidate } from "./formConfig";
import { CustomInput, CustomOtpInput } from "@/core";
import { useFormik } from "formik";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";

export const EmployerRegister = () => {
  const [employerRegister, { isLoading: registerLoading }] =
    useEmployerRegisterMutation();
  const [verifyOtp, { isLoading: otpLoading }] = useVerifyOtpMutation();
  const [otpScreen, setOtpscreen] = useState(false);
  const [emailOtp, setEmailotp] = useState<string[]>(Array(6).fill(""));
  const [numberOtp, setNumberotp] = useState<string[]>(Array(6).fill(""));
  const formik = useFormik({
    initialValues: emplaoyerInitialvalues,
    validationSchema: employerValidate,
    onSubmit: async (values: any) => {
      if (otpScreen) {
        try {
          const otpPayload = {
            email: values?.email,
            emailOtp: emailOtp,
            phoneOtp: numberOtp,
            role: "employer",
          };
          const res = await verifyOtp(otpPayload).unwrap();
          toast.success("Employee created");
          console.log("this is a otp payload = ", otpPayload);
          console.log("this is a response = ", res);
        } catch (err) {
          console.log("first");
          toast.success("some went wrong");
        }
      } else {
        try {
          const res = await employerRegister(values).unwrap();
          toast.success("OTP is send");
          console.log("this is a response = ", res);
          console.log(values);
        } catch (err) {
          console.log("something went wrong -> ", err);
          toast.error("something went wrong");
        }
      }
    },
  });

  return (
    <div className="grid grid-cols-12 mt-2 border-1 rounded-3xl max-w-7xl mx-auto">
      <div className="col-span-6 relative">
        <img
          src="/assets/loginRectangle.png"
          className="rounded-l-3xl object-cover h-full"
          alt=""
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative bg-white opacity-20 h-110 w-80 mx-auto rounded-4xl"></div>
          <p className="text-white poppins-medium left-5 absolute top-5 w-5/10 font-semiBold text-2xl">
            Securely sign in to access your dashboard!
          </p>
          <img
            src="/assets/womenwithtab1.png"
            className="absolute w-66 left-20 top-10 h-auto"
            alt=""
          />
        </div>
      </div>
      <div className="col-span-6 p-5 py-12 w-9/10 mx-auto">
        <h1 className="text-center text-3xl poppins-semibold">
          Register as employee
        </h1>
        <p className="text-[#525252] text-sm text-center mt-2 poppins-light">
          Join us today and start your journey toward a smarter, easier
          experience.
        </p>
        <form onSubmit={formik.handleSubmit} className="mt-7">
          {otpScreen ? (
            <div className="flex flex-col">
              <CustomOtpInput
                label={"Enter Email OTP"}
                description={"Please enter the OTP send to your email"}
                otp={emailOtp}
                setOtp={setEmailotp}
              />
              <CustomOtpInput
                rootAddClass={"mt-10"}
                label={"Enter Number OTP"}
                description={"Please enter the OTP send to your number"}
                otp={numberOtp}
                setOtp={setNumberotp}
              />
              <button className="bg-gradient-to-r from-[#9181F4] to-[#5038ED] mx-15 p-2 text-white rounded-lg mt-7 cursor-pointer">
                Signup
              </button>
            </div>
          ) : (
            <>
              <div className="flex gap-2">
                <CustomInput
                  rootAddClass={"mt-4 w-full"}
                  label=""
                  placeholder={"Full Name"}
                  mandatory={true}
                  name={"name"}
                  formik={formik}
                />

                <CustomInput
                  rootAddClass={"mt-4 w-full"}
                  placeholder={"Email"}
                  label=""
                  mandatory={true}
                  name={"email"}
                  formik={formik}
                />
              </div>

              <div className="flex gap-2">
                <CustomInput
                  rootAddClass={"mt-4 w-full"}
                  placeholder={"Phone Number"}
                  label=""
                  mandatory={true}
                  name={"number"}
                  formik={formik}
                />

                <CustomInput
                  rootAddClass={"mt-4 w-full"}
                  placeholder={"Password"}
                  label=""
                  mandatory={true}
                  name={"password"}
                  formik={formik}
                />
              </div>

              <div className="flex gap-2">
                <CustomInput
                  rootAddClass={"mt-4 w-full"}
                  placeholder={"Company Name"}
                  label=""
                  mandatory={true}
                  name={"companyName"}
                  formik={formik}
                />

                <CustomInput
                  rootAddClass={"mt-4 w-full"}
                  placeholder={"Position in Company"}
                  label=""
                  mandatory={true}
                  name={"positionInCompany"}
                  formik={formik}
                />
              </div>

              <div className="flex gap-2">
                <CustomInput
                  rootAddClass={"mt-4 w-full"}
                  placeholder={"Company Website"}
                  label=""
                  mandatory={true}
                  name={"companyWebsite"}
                  formik={formik}
                />

                <CustomInput
                  rootAddClass={"mt-4 w-full"}
                  placeholder={"Company GST Number"}
                  label=""
                  mandatory={true}
                  name={"companyGstNumber"}
                  formik={formik}
                />
              </div>

              <div className="flex gap-2">
                <CustomInput
                  rootAddClass={"mt-4 w-full"}
                  placeholder={"CIN"}
                  label=""
                  mandatory={true}
                  name={"companyCinNumber"}
                  formik={formik}
                />

                <CustomInput
                  rootAddClass={"mt-4 w-full"}
                  placeholder={"Company Pan Number"}
                  label=""
                  mandatory={true}
                  name={"companyPanNumber"}
                  formik={formik}
                />
              </div>

              <CustomInput
                rootAddClass={"mt-4 w-full"}
                placeholder={"Company Address"}
                label=""
                mandatory={true}
                name={"companyAddress"}
                formik={formik}
              />

              <button className="bg-gradient-to-r from-[#9181F4] to-[#5038ED] w-full p-2 text-white rounded-lg mt-7 cursor-pointer">
                Send OTP
              </button>
            </>
          )}
          <p className="text-sm text-center mt-10">
            Already have an account?{" "}
            <Link href={"#"} className="text-[#5038ED]">
              Login
            </Link>
          </p>
          <p className="text-sm text-center mt-4">
            Want to hire instead?{" "}
            <Link href={"#"} className="text-[#5038ED]">
              Get started as Employer
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};
