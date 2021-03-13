import React from "react";
import "./About.css";
import Img from "../../assets/about.jpg";

const About = ({ title, subtitle, description }) => {
  return (
    <section className="about" id="about">
      <div className="title white">
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
      <div className="content">
        <div className="textBx">
          <p>{description}</p>
        </div>
        <div className="imgBx">
          <img src={Img} alt="about" />
        </div>
      </div>
    </section>
  );
};

export default About;
