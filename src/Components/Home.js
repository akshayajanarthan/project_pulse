import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/about-background-image.jpg";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
          🌟Project Pulse🌟 
          </h1>
          <p className="primary-text">
          We are a software company and training platform offering industry-leading courses 📚 and hands-on internships 💼. 
          <br />Our mission is to empower aspiring professionals with cutting edge tech solutions and real-world experience to thrive in the ever-evolving digital landscape 🌐. 
          Build your future with us!✨
          </p>
          <br />
          <button className="secondary-button">
            Contact Us <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
