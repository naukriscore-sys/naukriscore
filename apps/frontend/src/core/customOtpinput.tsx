"use client";

import { useRef } from "react";

export const CustomOtpInput = (props: any) => {
  const { label, description, otp, setOtp, rootAddClass, formik, name } = props;
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;

    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < inputsRef.current.length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  return (
    <div className={`flex ${rootAddClass}`}>
      <div className="flex flex-col items-start mx-auto">
        <p className="text-sm font-medium mb-2">{label}</p>

        <div className="flex gap-3">
          {otp.map((digit: any, i: number) => {
            console.log(
              "this is a value = ",
              formik.values[`${name}otp${i + 1}`]
            );
            return (
              <input
                key={i}
                type="text"
                maxLength={1}
                // value={formik.values[`${name}otp${i + 1}`]}
                // value={digit}
                name={`${name}otp${i + 1}`}
                ref={(el) => {
                  if (el) {
                    inputsRef.current[i] = el;
                  }
                }}
                onChange={(e) => {
                  formik.handleChange(e);
                  handleChange(i, e);
                }}
                // onChange={(e) => handleChange(i, e)}
                onKeyDown={(e) => handleKeyDown(i, e)}
                className={`w-12 h-12 text-center border ${formik.errors[`${name}otp${i + 1}`] ? "border-red-500" : "border-gray-300"} rounded-lg text-lg
                       focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                       transition-all duration-100 `}
              />
            );
          })}
        </div>

        {description && (
          <p className="text-xs text-gray-500 mt-2">{description}</p>
        )}
      </div>
    </div>
  );
};
