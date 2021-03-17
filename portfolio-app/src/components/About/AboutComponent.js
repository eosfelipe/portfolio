import React from "react";
import "./About.css";
import Img from "../../assets/about.jpg";

const About = ({ title, subtitle, description }) => {
  return (
    <section className="about" id="about">
      <div className="title white">
        <h2 data-aos="fade-up">{title}</h2>
        <p data-aos="fade-up" data-aos-delay="300">
          {subtitle}
        </p>
      </div>
      <div className="content">
        <div className="textBx">
          <p data-aos="fade-up" data-aos-delay="400">
            {description}
          </p>
        </div>
        <div className="imgBx">
          <img src={Img} alt="about" data-aos="fade-up" data-aos-delay="400" />
        </div>
      </div>
    </section>
  );
};

export default About;
