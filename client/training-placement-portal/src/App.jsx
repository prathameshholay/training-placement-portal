// App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/login";
import Dashboard from "./components/Dashboard";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login/:role" element={<Login />} />
        <Route path="/dashboard/:role" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;