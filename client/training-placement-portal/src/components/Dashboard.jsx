// components/Dashboard.jsx
import React from "react";
import { useParams } from "react-router-dom";

const Dashboard = () => {
  const { role } = useParams();
  return (
    <div className="container">
      <h1>Welcome to the {role.charAt(0).toUpperCase() + role.slice(1)} Dashboard</h1>
      <p>This is a protected area accessible only after login.</p>
    </div>
  );
};

export default Dashboard;
