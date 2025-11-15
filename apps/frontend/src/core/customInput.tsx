"use client";

import { getIn } from "formik";
import { FormikProps } from "formik";

// const getErrormessage = (name: any, formik: any) => {
//     return (
//         <div className="p-error text-red-500 h-1rem text-xs ml-1 mt-1">
//             {formik.touched[name] && formik.errors[name]}
//         </div>
//     )
// }

interface CustomInputProps {
  name: string;
  label: string;
  formik: FormikProps<any>;
  value?: string;
  link?: boolean;
  linkLabel?: string;
  linkLabeladdClass?: string;
  mandatory?: boolean;
  Function?: () => void;
  rootAddClass?: string;
  [key: string]: any;
}

export const CustomInput: React.FC<CustomInputProps> = (props) => {
  const {
    name,
    label,
    formik,
    value,
    link,
    linkLabel,
    linkLabeladdClass,
    mandatory,
    Function,
    rootAddClass,
    numberInput,
    phoneNumber,
    aadhar,
  } = props;
  const error = getIn(formik.errors, name);
  const touch = getIn(formik.touched, name);
  let numericValue;
  return (
    <div className={`flex flex-col ${rootAddClass}`}>
      {/* <label className="text-sm font-medium mb-1">
                <span>{label}{mandatory ? <span className="text-red-600 pl-1">*</span> : ""} </span>
                {link && (<span onClick={Function} className={`${linkLabeladdClass}`}>{linkLabel}</span>)}
            </label> */}
      <input
        {...props}
        onBlur={formik.handleBlur}
        id={name}
        name={name}
        onChange={
          numberInput
            ? (e: any) => {
                numericValue = e.target.value.replace(/[^0-9]/g, "");
                if (phoneNumber && numericValue.length > 10) {
                  numericValue = numericValue.slice(0, 10);
                }

                if (aadhar && numericValue.length > 12) {
                  numericValue = numericValue.slice(0, 12);
                }
                formik.setFieldValue(name, numericValue);
              }
            : formik.handleChange
        }
        value={value ? value : getIn(formik.values, name)}
        className={`text-sm border-1 px-3 placeholder:text-sm border-gray-200 bg-[#F0EDFF] p-2 rounded-lg ${error && touch ? "border-red-500" : "border-gray-100"}`}
      />
      {/* {getErrormessage(name, formik)}  */}
    </div>
  );
};
