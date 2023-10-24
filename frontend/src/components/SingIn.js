import React from "react";
import "../styles/login.css";
import Login from "./login";
import Logo from "../assets/logo.png";
import { Container } from "@mui/material";
function SignIn() {
  return (
    <div className="App">
      <div className="Basic-container">
        <Container className="Left-section">
          <img src={Logo} alt="Logo" className="logo" />

          <h1 className="primary-heading title"></h1>

          <p className="primary-text"></p>
        </Container>

        <Container className="Right-section">
          <Login />
        </Container>
      </div>
    </div>
  );
}
export default SignIn;
