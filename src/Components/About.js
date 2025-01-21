import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/home-banner-image.png";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <h1 className="primary-heading">
         About Us
        </h1>
        <p className="primary-text">
        At Project Pulse, we bridge the gap between learning and innovation by combining the power of software solutions with impactful training programs. We are a dynamic software company and training platform dedicated to empowering the next generation of tech leaders. Delivering expertly crafted, industry-relevant courses 📚 designed to build strong foundations and specialized skills. Offering immersive, real-world projects 💼 to provide hands-on experience in software development and technology. Creating innovative tools and systems to meet today’s digital challenges.
        </p>
      </div>
    </div>
  );
};

export default About;
