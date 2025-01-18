import React from "react";
import Frontend from "../Assets/front.jpg";
import Backend from "../Assets/backend.webp";
import Fullstack from "../Assets/fullstack.png";
import UI from "../Assets/ui.avif";
import Data from "../Assets/mll.png";
import Machine from "../Assets/data.avif"
const Internship= () => {
  const internInfoData = [
    {
      image: Frontend,
      title: "Front- End Development",
      text: "Gain hands-on experience in building responsive and interactive user interfaces using the latest web technologies.",
    },
    {
      image: Fullstack,
      title: "Full Stack Web Development",
      text: "Master both front-end and back-end development, working on complete web solutions from concept to deployment.",
    },
    {
      image: Backend,
      title: "Back-end Development",
      text: "Learn to develop robust server-side applications, manage databases, and create APIs for seamless functionality.",
    },
    {
      image: UI,
      title: "UI/UX Desigining",
      text: "Explore UI/UX design principles, create prototypes, and design user-friendly interfaces using tools like Adobe XD and Figma.",
    },
    {
      image: Data,
      title: "Data Analysis",
      text: "Analyze complex datasets, create visualizations, and derive actionable insights to solve real-world business problems.",
    },
    {
      image: Machine,
      title: "Machine Learning",
      text: "Dive into machine learning projects, building predictive models and working on applications like NLP and computer vision.",
    },
  ];
  return (
    <div className="intern-section-wrapper">
      <div className="intern-section-top">
        <h1 className="primary-heading">Internship Offered For</h1>
        <p className="primary-text">
        With hands-on training and personalized mentorship, interns develop the skills needed to become industry-ready professionals.
        </p>
      </div>
      <div className="intern-section-bottom">
        {internInfoData.map((data) => (
          <div className="intern-section-info" key={data.title}>
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

export default Internship;
