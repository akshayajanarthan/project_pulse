import React from "react";
import HtmlCssJs from "../Assets/html-css-js.jpg";
import Figma from "../Assets/figma.png";
import react from "../Assets/react.jpg";
import Angular from "../Assets/angular.jpg";
import Html from "../Assets/HTML-CSS-and-Bootstrap.png";
import Typejs from "../Assets/tsjs.png";
import C from "../Assets/csharp.jpg";
import Cp from "../Assets/cplus.jpg";
import Python from "../Assets/python.png";
import ReactN from "../Assets/react.jpg";
import  Adobe from "../Assets/adobexd.png";
import Flutter from "../Assets/Flutter.png";
import Sql from "../Assets/sql.jpg";
import Php from "../Assets/php.png";
import Mongo from "../Assets/mongodb-logo.png";
import Go from "../Assets/Go.png";
import Mern from "../Assets/mern.png";
import Java from "../Assets/java.png";
import Jquery from "../Assets/jquery.jpg";
import Vue from "../Assets/vue.png";
const Courses = () => {
  const coursesInfoData = [
    {
      image: HtmlCssJs,
      title: "HTML & CSS & Javascript",
    },
    {
      image: Figma,
      title: "Figma",
    },
    {
      image: react,
      title: "React JS",
    },
    {
      image: Angular,
      title: "Angular JS",
    },
    {
      image: Html,
      title: "HTML & CSS & Bootstrap",
    },
    {
      image: Typejs,
      title: "TypeScript and JavaScript",
    },
    {
      image: C,
      title: "C#",
    },
    {
      image: Cp,
      title: "C++",
    },
    {
        image: Python,
        title: "Python",
    },
    {
        image: ReactN,
        title: "React-Native",
    },
    {
        image: Adobe,
        title: "Adobe XD",
    },
    {
        image: Flutter,
        title: "Flutter",
    },
    {
        image: Sql,
        title: "SQL",
    },
    {
        image: Php,
        title: "PHP",
    },
    {
        image: Mongo,
        title: "Mongo DB",
    },
    {
        image: Go,
        title: "GO",
    },
    {
        image: Mern,
        title: "MERN Stack",
    },
    {
        image: Jquery,
        title: "JQuery",
    },
    {
        image: Java,
        title: "Java",
    },
    {
        image: Vue,
        title: "Vue JS",
    }
  ];
  return (
    <div className="courses-section-wrapper">
      <div className="courses-section-top">
        <h1 className="primary-heading">Courses Offered</h1>
        <p className="primary-text">
        Our diverse range of courses is designed to equip you with the skills needed to excel in the fast-paced world of software development and design.
        </p>
      </div>
      <div className="courses-section-bottom">
        {coursesInfoData.map((data) => (
          <div className="courses-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
