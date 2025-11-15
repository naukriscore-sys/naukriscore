"use client";

import { CustomInput, CustomOtpInput, CustomPasswordInput } from "@/core";
import { useFormik } from "formik";
import Link from "next/link";
import {
  emplaoyeeInitialvalues,
  employeeValidate,
  otpInitialvalues,
  otpValidate,
} from "./formConfig";
import { useEffect, useState } from "react";
import {
  useEmployeeRegisterMutation,
  useVerifyOtpMutation,
} from "@/redux/service/auth";
import { toast } from "sonner";
import { Spinner } from "@/components/ui/spinner";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/hooks";
import { addUserdata } from "@/redux/slice/user";

export const EmployeeRegister = () => {
  const dispatch = useAppDispatch();
  const [emailOtp, setEmailotp] = useState<string[]>(Array(6).fill(""));
  const [numberOtp, setNumberotp] = useState<string[]>(Array(6).fill(""));
  const [otpScreen, setOtpscreen] = useState(false);
  const [employeeRegister, { isLoading: registerLoading }] =
    useEmployeeRegisterMutation();
  const [verifyOtp, { isLoading: otpLoading }] = useVerifyOtpMutation();

  const [resendAvailable, setResendAvailable] = useState(false);
  const [timer, setTimer] = useState(180); // 3 minutes = 180 seconds

  const router = useRouter();

  const formik = useFormik({
    initialValues: otpScreen ? otpInitialvalues : emplaoyeeInitialvalues,
    validationSchema: otpScreen ? otpValidate : employeeValidate,
    onSubmit: async (values: any) => {
      if (otpScreen) {
        try {
          const otpPayload = {
            email: values?.email,
            emailOtp: emailOtp.join(""),
            phoneOtp: numberOtp.join(""),
            role: "employee",
          };
          const res = await verifyOtp(otpPayload).unwrap();
          console.log(res);
          toast.success(res?.message);
          router.push("/profile-builder");
          dispatch(addUserdata(res?.data));
          if (res?.data?.token) {
            localStorage.setItem("isAuth", "true");
            localStorage.setItem("token", res.data.token);
          }
        } catch (err: any) {
          toast.error(err?.data?.message || "Something went wrong");
        }
      } else {
        try {
          const res = await employeeRegister(values).unwrap();
          setOtpscreen(res?.success);
          toast.success(res?.message);
        } catch (err: any) {
          toast.error(err?.data?.message || "Something went wrong");
        }
      }
    },
  });

  const handleResendOtp = async () => {
    try {
      const res = await employeeRegister(formik.values).unwrap();
      toast.success("OTP resent successfully");
      setResendAvailable(false);
      setTimer(180); // restart timer
    } catch (err: any) {
      toast.error(
        err?.data?.message || "Something went wrong while resending OTP"
      );
    }
  };

  // Start 3-minute countdown when otpScreen becomes true
  useEffect(() => {
    if (!otpScreen) return;

    setResendAvailable(false);
    setTimer(180);

    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setResendAvailable(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [otpScreen]);

  return (
    <div className="grid grid-cols-12 max-w-7xl mx-auto mt-2 border-1 rounded-3xl">
      <div className="col-span-6 relative">
        <img
          src="/assets/loginRectangle.png"
          className="rounded-l-3xl"
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
      <div className="col-span-6 p-5 py-12 w-7/10 mx-auto">
        <h1 className="text-center text-3xl poppins-semibold">
          Register as employee
        </h1>
        <p className="text-[#525252] text-sm text-center mt-2 poppins-light">
          Join us today and start your journey toward a smarter, easier
          experience.
        </p>
        <form onSubmit={formik.handleSubmit} className="mt-7 px-3">
          {otpScreen ? (
            <div className="flex flex-col">
              <CustomOtpInput
                name={"email"}
                formik={formik}
                label={"Enter Email OTP"}
                description={"Please enter the OTP send to your email"}
                otp={emailOtp}
                setOtp={setEmailotp}
              />
              <CustomOtpInput
                name={"number"}
                formik={formik}
                rootAddClass={"mt-10"}
                label={"Enter Number OTP"}
                description={"Please enter the OTP send to your number"}
                otp={numberOtp}
                setOtp={setNumberotp}
              />
              <button
                disabled={otpLoading}
                className="flex gap-2 items-center justify-center bg-gradient-to-r from-[#9181F4] to-[var(--primary-cards-color)]  p-2 text-white rounded-lg mt-7 cursor-pointer"
              >
                {otpLoading && <Spinner />} Signup
              </button>

              {/* RESEND SECTION */}
              <div className="text-center mt-4">
                {resendAvailable ? (
                  <button
                    type="button"
                    onClick={handleResendOtp}
                    className="text-[var(--primary-cards-color)] underline"
                  >
                    Resend OTP
                  </button>
                ) : (
                  <p className="text-sm text-gray-500">
                    Resend OTP in {Math.floor(timer / 60)}:
                    {String(timer % 60).padStart(2, "0")}
                  </p>
                )}
              </div>
            </div>
          ) : (
            <>
              <CustomInput
                rootAddClass={"mt-4"}
                label="Email Address"
                placeholder={"Full Name"}
                mandatory={true}
                name={"name"}
                formik={formik}
              />
              <CustomInput
                rootAddClass={"mt-4"}
                placeholder={"Email"}
                label="Password"
                mandatory={true}
                name={"email"}
                formik={formik}
              />
              <CustomInput
                phoneNumber
                numberInput
                rootAddClass={"mt-4"}
                placeholder={"Phone Number"}
                label="Password"
                mandatory={true}
                name={"number"}
                formik={formik}
              />
              <CustomPasswordInput
                rootAddClass={"mt-4"}
                placeholder={"Password"}
                label="Password"
                mandatory={true}
                name={"password"}
                formik={formik}
              />
              <CustomInput
                numberInput
                aadhar
                rootAddClass={"mt-4"}
                placeholder={"Aadhar Number"}
                label="Password"
                mandatory={true}
                name={"aadharNumber"}
                formik={formik}
              />
              <button
                type="submit"
                disabled={registerLoading}
                className="flex justify-center gap-2 items-center bg-gradient-to-r from-[#9181F4] to-[var(--primary-cards-color)] w-full p-2 text-white rounded-lg mt-7 cursor-pointer"
              >
                {registerLoading && <Spinner />} Send OTP
              </button>
            </>
          )}

          <p className="text-sm text-center mt-10">
            Already have an account?{" "}
            <Link href={"/login"} className="text-[var(--primary-cards-color)]">
              Login
            </Link>
          </p>
          <p className="text-sm text-center mt-4">
            Want to hire instead?{" "}
            <Link
              href={"/register/employer"}
              className="text-[var(--primary-cards-color)]"
            >
              Get started as Employer
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};
