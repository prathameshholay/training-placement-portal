import React from "react";
import "./LoginPage.css";
import loginBg from "../assets/login-bg.jpg"; // Ensure this path is correct

const StudentLogin = () => {
  return (
    <div
      className="login-wrapper"
      style={{
        backgroundImage: `url(${loginBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="login-box">
        <h2>Login</h2>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button>Login</button>
      </div>
    </div>
  );
};

export default StudentLogin;
