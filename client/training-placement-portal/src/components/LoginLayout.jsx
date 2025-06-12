// src/components/LoginLayout.jsx
import React from "react";
import "./LoginPage.css";
import loginBg from "../assets/login-bg.jpeg"; // Make sure the file exists

const LoginLayout = ({ children }) => {
  return (
    <div
      className="login-wrapper"
      style={{
        backgroundImage: `url(${loginBg})`,
      }}
    >
      {children}
    </div>
  );
};

export default LoginLayout;
