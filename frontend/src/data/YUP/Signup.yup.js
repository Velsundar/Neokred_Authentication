import * as Yup from "yup";

export const SignUpSchema = Yup.object().shape({
  fullName: Yup.string()
    .matches(/^[A-Za-z]+$/, "Full Name must contain only alphabetic characters")
    .max(50, "Full Name must be at most 50 characters long")
    .required("Full Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[A-Z])(?=.*\d)/,
      "Password must contain at least one uppercase letter and one digit"
    ),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
  dateOfBirth: Yup.date()
    .required("Date of birth is required")
    .min(new Date(1900, 0, 1), "Date of birth must be after 01/01/1900")
    .max(new Date(), "Date of birth cannot be in the future"),
  phoneNumber: Yup.string()
    .matches(/^\d{10}$/, "Phone Number must be a valid 10-digit number")
    .required("Phone Number is Required"),
  address: Yup.string()
    .max(100, "Address must be at most 100 characters long")
    .required("Address is required"),
  city: Yup.string()
    .matches(/^[A-Za-z]+$/, "City must contain only alphabetic characters")
    .max(50, "City must be at most 50 characters long")
    .required("City is required"),
  state: Yup.string().required("State is required"),
  zipCode: Yup.string()
    .matches(/^\d{6}$/, "Zip Code must be a 6-digit number")
    .required("Zip Code is required"),
  country: Yup.string().required("Country is required"),
  securityQuestion: Yup.string()
    .max(100, "security answer must be at most 100 characters long")
    .required("Security Questions is required"),
});
