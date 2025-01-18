import React from "react";
import Ecommerce from "../Assets/ecommerce.png";
import Machine from "../Assets/machine.jpg";
import Data from "../Assets/data.jpg";
import UI from "../Assets/ui.jpg"
const Work = () => {
  const workInfoData = [
    {
      image: Ecommerce,
      title: "E-commerce Platforms",
      text: "We develop dynamic, scalable, and user-friendly e-commerce platforms designed to drive business growth.",
    },
    {
      image: Machine,
      title: "Machine Learning Projects",
      text: "We help businesses leverage machine learning to forecast trends and drive smarter decisions.",
    },
    {
      image: Data,
      title: "Data Analytics Projects",
      text: "We turn complex datasets into clear, actionable insights with custom data visualizations and dashboards.",
    },
    {
      image: UI,
      title: "UI / UX Designing",
      text: "We create beautiful and functional user interfaces that are easy to navigate, ensuring a seamless experience across devices.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <h1 className="primary-heading">Our Works</h1>
        <p className="primary-text">
        At Project Pulse, we specialize in creating cutting-edge solutions across a wide range of domains.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
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

export default Work;