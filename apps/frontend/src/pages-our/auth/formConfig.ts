import * as Yup from "yup";

// for employer
export const emplaoyerInitialvalues = {
  name: "",
  email: "",
  number: "",
  password: "",
  companyName: "",
  positionInCompany: "",
  companyWebsite: "",
  companyAddress: "",
  companyCinNumber: "",
  companyPanNumber: "",
  companyGstNumber: "",
};

export const employerValidate = Yup.object().shape({
  name: Yup.string().required("Name name is required"),
  email: Yup.string().required("Email name is required"),
  number: Yup.string().required("Number is required"),
  password: Yup.string().required("Password is required"),
  companyName: Yup.string().required("Company name is required"),
  positionInCompany: Yup.string().required("Position name is required"),
  companyWebsite: Yup.string().required("Batch name is required"),
  companyAddress: Yup.string().required("Batch name is required"),
  companyCinNumber: Yup.string().required("Batch name is required"),
  companyPanNumber: Yup.string().required("Batch name is required"),
  companyGstNumber: Yup.string().required("Batch name is required"),
});

// for employee
export const emplaoyeeInitialvalues = {
  name: "",
  email: "",
  number: "",
  password: "",
  aadharNumber: "",
};

export const employeeValidate = Yup.object().shape({
  name: Yup.string().required("Name name is required"),
  email: Yup.string().email("Invalid email").required("Email name is required"),
  number: Yup.string()
    .matches(/^\d{10}$/, "Number must be exactly 10 digits")
    .required("Number is required"),
  password: Yup.string().required("Password is required"),
  aadharNumber: Yup.string()
    .matches(/^\d{12}$/, "Number must be exactly 10 digits")
    .required("Number is required"),
});

// for login
export const loginInitialvalues = {
  email: "",
  password: "",
};

export const loginValidate = Yup.object().shape({
  password: Yup.string().required("Name name is required"),
  email: Yup.string().email("Invalid Email").required("Email name is required"),
});

// for otp
export const otpInitialvalues = {
  emailotp1: "",
  emailotp2: "",
  emailotp3: "",
  emailotp4: "",
  emailotp5: "",
  emailotp6: "",
  numberotp1: "",
  numberotp2: "",
  numberotp3: "",
  numberotp4: "",
  numberotp5: "",
  numberotp6: "",
};

export const otpValidate = Yup.object().shape({
  emailotp1: Yup.string().required("Name name is required"),
  emailotp2: Yup.string().required("Name name is required"),
  emailotp3: Yup.string().required("Name name is required"),
  emailotp4: Yup.string().required("Name name is required"),
  emailotp5: Yup.string().required("Name name is required"),
  emailotp6: Yup.string().required("Name name is required"),
  numberotp1: Yup.string().required("Name name is required"),
  numberotp2: Yup.string().required("Name name is required"),
  numberotp3: Yup.string().required("Name name is required"),
  numberotp4: Yup.string().required("Name name is required"),
  numberotp5: Yup.string().required("Name name is required"),
  numberotp6: Yup.string().required("Name name is required"),
});
