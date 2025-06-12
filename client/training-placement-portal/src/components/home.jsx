import React from "react";
import "../styles/Home.css";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Home = () => {
  return (
    <div className="home-page">
      <div className="social-icons">
        <a href="#"><FaFacebook /></a>
        <a href="#"><FaTwitter /></a>
        <a href="#"><FaLinkedin /></a>
        <a href="#"><FaInstagram /></a>
      </div>

      <div className="navbar">
        <a href="#">Home</a>
        <a href="#">About Us</a>
        <a href="#">Pages</a>
        <a href="#">Courses</a>
        <a href="#">Blog</a>
      </div>

      <h1>Training and Placement Portal</h1>

      <div className="card-container">
        <div className="card">Student </div>
        <div className="card">Admin </div>
        <div className="card">TPO </div>
        <div className="card">Company </div>
      </div>
    </div>
  );
};

export default Home;
