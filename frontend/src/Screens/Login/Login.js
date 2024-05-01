import React from "react";
import { styled } from "@mui/system";
import { Typography, Link, Box } from "@mui/material";
import Mask from "../../Assets/Images/Mask.png";
import InputField from "../../components/InputFields";
import Button from "../../components/Buttons";
import theme from "../../styles/theme";
import { Formik, Form, Field } from "formik";
import { LoginSchema } from "../../data/YUP/Login.yup";

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
  maxWidth: "90%",
  maxHeight: "80%",
  "& img": {
    maxWidth: "100%",
    maxHeight: "100%",
  },
});

const RightPane = styled("div")(({ theme }) => ({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "left",
  padding: theme.spacing(2),
}));

const LoginForm = styled(Form)(({ theme }) => ({
  width: "100%",
  maxWidth: 360,
  display: "flex",
  flexDirection: "column",
}));

const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };
  return (
    <RootContainer>
      <LeftPane>
        <ImageContainer>
          <img src={Mask} alt="Login" />
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
          Login
        </Typography>
        <Formik
          initialValues={initialValues}
          validationSchema={LoginSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <LoginForm noValidate autoComplete="off">
              <Field
                as={InputField}
                name="email"
                label="Email"
                type="email"
                placeholder={"John.snow@gmail.com"}
                required
                color={theme.palette.text.secondary}
                error={errors.email && touched.email}
                helperText={errors.email && touched.email && errors.email}
                style={{ marginBottom: "8px" }}
              />
              <Field
                as={InputField}
                name="password"
                label="Password"
                type="password"
                placeholder={"*********"}
                required
                color={theme.palette.text.secondary}
                error={errors.password && touched.password}
                helperText={
                  errors.password && touched.password && errors.password
                }
                style={{ marginBottom: "8px" }}
              />
              <Typography
                variant="body2"
                gutterBottom
                sx={{ alignSelf: "flex-end" }}
              >
                <Link href="#" color={theme.palette.primary.button}>
                  Forgot password?
                </Link>
              </Typography>
              <Button
                variant="contained"
                color="primary"
                width="75%"
                style={{
                  marginTop: "8px",
                  backgroundColor: theme.palette.primary.button,
                }}
              >
                Login
              </Button>
            </LoginForm>
          )}
        </Formik>
        <Typography variant="body2" color={theme.palette.text.secondary}>
          Don't have an account?{" "}
          <Link href="#" color="primary">
            Sign up
          </Link>
        </Typography>
      </RightPane>
    </RootContainer>
  );
};

export default Login;
