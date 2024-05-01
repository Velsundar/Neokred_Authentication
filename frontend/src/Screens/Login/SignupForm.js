import React from "react";
import { styled } from "@mui/system";
import { Typography, Link, Box, Grid } from "@mui/material";
import Mask from "../../Assets/Images/Mask1.png";
import InputField from "../../components/InputFields";
import Button from "../../components/Buttons";
import theme from "../../styles/theme";
import { Formik, Form, Field } from "formik";
import { SignUpSchema } from "../../data/YUP/Signup.yup";
import logo from "../../Assets/Images/logo.png";
import { register } from "../../service/authService";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RootContainer = styled("div")({
  display: "flex",
  height: "100vh",
});

const LeftPane = styled(Box)(({ theme }) => ({
  flex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  padding: theme.spacing(2),
}));

const ImageContainer = styled("div")({
  position: "relative",
  maxWidth: "90%",
  maxHeight: "80%",
  "& img": {
    maxWidth: "100%",
    maxHeight: "100%",
  },
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
});

const Logo = styled("img")({
  position: "absolute",
  top: "20px",
  left: "20px",
  width: "100px",
});

const RightPane = styled("div")(({ theme }) => ({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "left",
  padding: theme.spacing(2),
  [theme.breakpoints.down("sm")]: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
}));
const notifySuccess = () => toast.success("User registered successfully!");

// const LoginForm = styled(Form)(({ theme }) => ({
//   width: "100%",
//   maxWidth: 360,
//   display: "flex",
//   flexDirection: "column",
// }));

const SignupForm = () => {
  const initialValues = {
    fullName: "",
    email: "",
    dateOfBirth: "",
    password: "",
    phoneNumber: "",
    confirmPassword: "",
    securityQuestion: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
  };

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const token = await register(values);
      console.log("Registration successful. Token:", token);
      resetForm();
      notifySuccess();
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };
  return (
    <RootContainer>
      <LeftPane>
        <ImageContainer>
          <img src={Mask} alt="Login" />
          <Logo src={logo} alt="Logo" />
        </ImageContainer>
      </LeftPane>
      <RightPane>
        <Typography
          variant="h6"
          style={{
            fontSize: "1rem",
            color: "#757575",
            textAlign: "left",
            marginBottom: "8px",
          }}
        >
          Welcome
        </Typography>
        <Typography
          variant="h4"
          style={{ textAlign: "left", marginBottom: "8px" }}
        >
          SignUp
        </Typography>
        <Formik
          initialValues={initialValues}
          validationSchema={SignUpSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form noValidate autoComplete="off">
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Field
                    as={InputField}
                    name="fullName"
                    label="Full Name"
                    type="text"
                    color={theme.palette.text.secondary}
                    placeholder={"John Doe"}
                    required
                    error={errors.fullName && touched.fullName}
                    helperText={
                      errors.fullName && touched.fullName && errors.fullName
                    }
                  />
                </Grid>
                <Grid item xs={6}>
                  <Field
                    as={InputField}
                    name="email"
                    label="Email"
                    type="email"
                    color={theme.palette.text.secondary}
                    placeholder={"John@gmail.com"}
                    required
                    error={errors.email && touched.email}
                    helperText={errors.email && touched.email && errors.email}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Field
                    as={InputField}
                    name="dateOfBirth"
                    label="Date of Birth"
                    type="text"
                    color={theme.palette.text.secondary}
                    placeholder={"MM/DD/YYYY"}
                    required
                    error={errors.dateOfBirth && touched.dateOfBirth}
                    helperText={
                      errors.dateOfBirth &&
                      touched.dateOfBirth &&
                      errors.dateOfBirth
                    }
                  />
                </Grid>
                <Grid item xs={6}>
                  <Field
                    as={InputField}
                    name="password"
                    label="Password"
                    type="password"
                    color={theme.palette.text.secondary}
                    placeholder={"*********"}
                    required
                    error={errors.password && touched.password}
                    helperText={
                      errors.password && touched.password && errors.password
                    }
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Field
                    as={InputField}
                    name="phoneNumber"
                    label="Phone number"
                    type="text"
                    color={theme.palette.text.secondary}
                    placeholder={"1234567890"}
                    required
                    error={errors.phoneNumber && touched.phoneNumber}
                    helperText={
                      errors.phoneNumber &&
                      touched.phoneNumber &&
                      errors.phoneNumber
                    }
                  />
                </Grid>
                <Grid item xs={6}>
                  <Field
                    as={InputField}
                    name="confirmPassword"
                    label="Confirm Password"
                    type="password"
                    color={theme.palette.text.secondary}
                    placeholder={"********"}
                    required
                    error={errors.confirmPassword && touched.confirmPassword}
                    helperText={
                      errors.confirmPassword &&
                      touched.confirmPassword &&
                      errors.confirmPassword
                    }
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Field
                    as={InputField}
                    name="securityQuestion"
                    label="Security Question"
                    type="text"
                    color={theme.palette.text.secondary}
                    placeholder={"What is Your school name?"}
                    required
                    error={errors.securityQuestion && touched.securityQuestion}
                    helperText={
                      errors.securityQuestion &&
                      touched.securityQuestion &&
                      errors.securityQuestion
                    }
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Field
                    as={InputField}
                    name="address"
                    label="Address"
                    type="text"
                    color={theme.palette.text.secondary}
                    placeholder={"********"}
                    required
                    error={errors.address && touched.address}
                    helperText={
                      errors.address && touched.address && errors.address
                    }
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={3}>
                  <Field
                    as={InputField}
                    name="city"
                    label="City"
                    type="text"
                    color={theme.palette.text.secondary}
                    placeholder={"*********"}
                    required
                    error={errors.city && touched.city}
                    helperText={errors.city && touched.city && errors.city}
                  />
                </Grid>
                <Grid item xs={3}>
                  <Field
                    as={InputField}
                    name="state"
                    label="State"
                    type="text"
                    color={theme.palette.text.secondary}
                    placeholder={"*********"}
                    required
                    error={errors.state && touched.state}
                    helperText={errors.state && touched.state && errors.state}
                  />
                </Grid>
                <Grid item xs={3}>
                  <Field
                    as={InputField}
                    name="zipCode"
                    label="zipCode"
                    type="text"
                    color={theme.palette.text.secondary}
                    placeholder={"*********"}
                    required
                    error={errors.zipCode && touched.zipCode}
                    helperText={
                      errors.zipCode && touched.zipCode && errors.zipCode
                    }
                  />
                </Grid>
                <Grid item xs={3}>
                  <Field
                    as={InputField}
                    name="country"
                    label="Country"
                    type="text"
                    color={theme.palette.text.secondary}
                    placeholder={"*********"}
                    required
                    error={errors.country && touched.country}
                    helperText={
                      errors.country && touched.country && errors.country
                    }
                  />
                </Grid>
              </Grid>
              <Typography
                variant="body2"
                gutterBottom
                sx={{ alignSelf: "flex-end" }}
              ></Typography>
              <Button
                variant="contained"
                color="primary"
                width="50%"
                type="submit"
                style={{
                  marginTop: "8px",
                  backgroundColor: theme.palette.primary.button,
                }}
              >
                Sign Up
              </Button>
            </Form>
          )}
        </Formik>
        <Typography variant="body2" color={theme.palette.text.secondary}>
          Already have an account?{" "}
          <Link href="/" color="primary">
            LogIn
          </Link>
        </Typography>
      </RightPane>
    </RootContainer>
  );
};

export default SignupForm;
