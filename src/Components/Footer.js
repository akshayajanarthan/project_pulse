import React from "react";
import Logo from "../Assets/Logo.png";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" height={200} width={450} />
        </div>
        
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <h2>Explore</h2>
          <a href="#">About Us</a>
          <a href="#faq">FAQ</a>
          <a href="#termsofservice">Terms Of Service</a>
          <a href="#termsofuse">Terms of Use</a>
        </div>
        <div className="footer-section-columns">
        <h2>Dive Into</h2>
          <a href="#whyus">Why Us</a>
          <a href="#careers">Careers</a>
          <a href="#credits">Credits</a>
          <a href="#license">License</a>
        </div>
        <div className="footer-section-columns">
        <h2>Contents</h2>
          <a href="#privacypolicy">Privacy Policy</a>
          <a href="#support">Support</a>
          <a href="#help">Help</a>
          <a href="#termsof conditions">License</a>
        </div>
        <div className="footer-section-columns">
        <h2>Contact Us On</h2>
          <a href="#">Instagram</a>
          <a href="#">Mail</a>
          <a href="#">Twitter</a>
          <a href="#">LinkedIn</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
