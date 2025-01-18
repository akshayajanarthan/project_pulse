import React from "react";
import Software from "../Assets/software.png";
import Web from "../Assets/web.png";
import Tutoring from "../Assets/Tutoring.jpg";
import Internship from "../Assets/intern.jpg"
const Services = () => {
  const servicesInfoData = [
    {
      image: Software,
      title: "Software Development",
      text: "Our team develops scalable software systems that grow with your business, providing efficient, long-term solutions.",
    },
    {
      image: Web,
      title: "Web Development",
      text: "From sleek, responsive websites to complex e-commerce platforms, we create tailored web solutions that meet the unique needs of our clients.",
    },
    {
      image: Tutoring,
      title: "Tutoring",
      text: "We offer customized learning journeys designed to help individuals grow in their careers and stay ahead of the technology curve.",
    },
    {
      image: Internship,
      title: "Internship",
      text: "We’ve helped countless interns build portfolios that highlight their skills, experience, and professional growth, setting them up for successful careers in tech.",
    },
  ];
  return (
    <div className="service-section-wrapper">
      <div className="service-section-top">
        <h1 className="primary-heading">Our Services</h1>
        <p className="primary-text">
        At Project Pulse, we’re shaping future tech leaders with industry-leading courses and hands-on internships to prepare them for success in the digital world.
        </p>
      </div>
      <div className="service-section-bottom">
        {servicesInfoData.map((data) => (
          <div className="service-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;