"use client";

import { CustomInput, CustomPasswordInput } from "@/core";
import { useFormik } from "formik";
import Link from "next/link";
import { loginInitialvalues, loginValidate } from "./formConfig";
import { useLoginMutation } from "@/redux/service/auth";
import { toast } from "sonner";
import { Spinner } from "@/components/ui/spinner";
import { addUserdata } from "@/redux/slice/user";
import { useAppDispatch } from "@/redux/hooks";
import { useRouter } from "next/navigation";

export const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useRouter();
  const [Login, { isLoading }] = useLoginMutation();

  const formik = useFormik({
    initialValues: loginInitialvalues,
    validationSchema: loginValidate,
    onSubmit: async (values: any) => {
      const payload = {
        ...values,
        userType: "employee",
      };
      try {
        const res = await Login(payload).unwrap();
        dispatch(addUserdata(res?.data));
        toast.success(res?.message);
        navigate.push(res?.data?.redirectUrl ?? "/dashboard");
        localStorage.setItem("token", res?.data?.token);
        localStorage.setItem("isAuth", "true");
      } catch (err: any) {
        console.log(err);
        toast.error(err?.data?.message || "Something went wrong");
      }
    },
  });
  return (
    <div className="grid grid-cols-12 mt-2 border-1 max-w-7xl mx-auto rounded-3xl">
      <div className="col-span-6 p-5 my-12 py-12 w-7/10 mx-auto">
        <h1 className="text-center text-3xl poppins-semibold">LOGIN</h1>
        <p className="text-[#525252] text-sm text-center mt-2 poppins-light">
          Hello again! Enter your credentials to pick up right where you left
          off.
        </p>
        <form onSubmit={formik.handleSubmit} className="mt-10 px-3">
          <CustomInput
            rootAddClass={"mt-4"}
            label="Email Address"
            placeholder={"johndoe@gmail.com"}
            mandatory={true}
            name={"email"}
            formik={formik}
          />
          <CustomPasswordInput
            rootAddClass={"mt-4"}
            placeholder={"9877hds7sv"}
            label="Password"
            mandatory={true}
            name={"password"}
            formik={formik}
          />
          <button
            type="submit"
            disabled={isLoading}
            className="flex gap-2 items-center justify-center bg-gradient-to-r from-[#3a43ca] to-[var(--primary-cards-color)] w-full p-2 text-white rounded-lg mt-7 cursor-pointer"
          >
            {isLoading && <Spinner />} Login
          </button>
          <p className="text-sm text-center mt-10">
            Don't have an account?{" "}
            <Link
              href={"/register/employee"}
              className="text-[var(--primary-cards-color)]"
            >
              Sign Up
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
      <div className="col-span-6 relative">
        <img
          src="/assets/loginRectangle.png"
          className="rounded-r-3xl"
          alt="Login Image"
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
    </div>
  );
};
