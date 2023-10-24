import React, { useState } from "react";
import {
  Container,
  CssBaseline,
  Box,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Grid,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LoginAction } from "../redux/Actions/LoginAction";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
});

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const [isRegisterVisible, setIsRegisterVisible] = useState(false);
  const { userInfo } = useSelector((state) => state.login);
  const dispatch = useDispatch();

  const toggleRegister = () => {
    setIsRegisterVisible(!isRegisterVisible);
  };

  const submitForm = async (values) => {
    try {
      setLoading(true);
      if (values.email && typeof values.email === "string") {
        values.email = values.email.toLowerCase();
        values.password = values.password;
      }
      await dispatch(LoginAction(values));
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
      if (error.response && error.response.data && error.response.data.errors) {
        const errors = error.response.data.errors;
        if (errors.length > 0) {
          errors.forEach((error) => {
            console.log(`Error: ${error.msg}`);
          });
        }
      } else {
        console.log("Error:", error.message);
      }
    }
  };

  const theme = createTheme({});

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" className="Right-section">
        <CssBaseline />
        <Box
          sx={{
            backgroundColor: "rgb(255, 255, 255)",
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: 5,
            borderRadius: "75", // Correction de cette propriété
          }}
        >
          <Typography component="h1" variant="h5">
            {isRegisterVisible ? "Register" : "Sign in"}{" "}
            {/* Condition pour afficher "Register" ou "Sign in" */}
          </Typography>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={submitForm}
          >
            <Form>
              <Field
                as={TextField}
                fullWidth
                variant="outlined"
                margin="normal"
                name="email"
                label="Email Address"
                autoComplete="email"
                autoFocus
              />
              <Field
                as={TextField}
                fullWidth
                variant="outlined"
                margin="normal"
                name="password"
                label="Password"
                type="password"
                autoComplete="password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              {isRegisterVisible && (
                // Afficher le formulaire d'inscription si isRegisterVisible est vrai
                <>
                  <Field
                    as={TextField}
                    fullWidth
                    variant="outlined"
                    margin="normal"
                    name="fullName"
                    label="Full Name"
                  />
                  {/* Ajoutez d'autres champs d'inscription au besoin */}
                </>
              )}
              <Button
                type="submit"
                disabled={loading}
                fullWidth
                variant="contained"
                style={{ backgroundColor: "rgb(63, 81, 181)" }}
                sx={{ mt: 3, mb: 2 }}
              >
                {isRegisterVisible ? "Register" : "Sign in"}{" "}
                {/* Texte du bouton basculant entre "Sign in" et "Register" */}
              </Button>

              <Grid container className="minimal-text">
                <Grid item xs>
                  <RouterLink to="/forgotPassword" variant="body2">
                    Forgot password?
                  </RouterLink>
                </Grid>
                <Grid item>
                  <Button type="button" onClick={toggleRegister} variant="text">
                    {isRegisterVisible
                      ? "Sign in"
                      : "Don't have an account? Sign Up"}
                  </Button>
                </Grid>
              </Grid>
            </Form>
          </Formik>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default LoginForm;
