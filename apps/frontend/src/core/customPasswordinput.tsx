"use client";

import { getIn, FormikProps } from "formik";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

interface PasswordInputProps {
  name: string;
  label?: string;
  formik: FormikProps<any>;
  value?: string;
  mandatory?: boolean;
  rootAddClass?: string;
  [key: string]: any;
}

export const CustomPasswordInput: React.FC<PasswordInputProps> = (props) => {
  const { name, formik, value, mandatory, rootAddClass, ...rest } = props;
  const [visible, setVisible] = useState(false);

  const error = getIn(formik.errors, name);
  const touch = getIn(formik.touched, name);

  return (
    <div className={`flex flex-col ${rootAddClass}`}>
      {/* {props.label && (
                <label className="text-sm font-medium mb-1">
                    {props.label}
                    {mandatory && <span className="text-red-600 pl-1">*</span>}
                </label>
            )} */}

      <div className="relative">
        <input
          autoComplete="off"
          {...rest}
          id={name}
          name={name}
          type={visible ? "text" : "password"}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={value ? value : getIn(formik.values, name)}
          className={`text-sm border-1 px-3 placeholder:text-sm border-gray-200 bg-[#F0EDFF] p-2 rounded-lg w-full ${
            error && touch ? "border-red-500" : "border-gray-100"
          }`}
        />
        <button
          type="button"
          onClick={() => setVisible((v) => !v)}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-gray-500"
        >
          <FontAwesomeIcon icon={visible ? faEyeSlash : faEye} />
        </button>
      </div>
      {/* 
            {error && touch && (
                <div className="text-red-500 text-xs mt-1 ml-1">{error}</div>
            )} */}
    </div>
  );
};
