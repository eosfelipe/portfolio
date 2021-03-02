import React from "react";
import "./Home.css";
import Bg from "../../assets/bg.jpg";
import Facebook from "../../assets/facebook.svg";
import Twitter from "../../assets/twitter.svg";
import Instagram from "../../assets/instagram.svg";

const Home = ({ isOpen }) => {
  return (
    <section className="banner" id="home">
      <div className={isOpen ? "imgSidebar activeFilter" : "imgSidebar"}>
        <img src={Bg} alt="" />
      </div>
      <div className="contentBx">
        <h5 className="logoText">My_Portfolio</h5>
        <div>
          <h4>
            <span>Hello</span> I'm
          </h4>
          <h2>Felipe Escobedo</h2>
          <h4>I'm a Front End Web Developer</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
            doloremque quae hic, quas assumenda dicta odio alias vero velit?
            Aliquam aut corporis ipsa laudantium nisi perferendis laboriosam
            molestiae? Error, culpa!
          </p>
          <a href="#about" className="btn">
            About Me
          </a>
        </div>
        <ul className="sci">
          <li>
            <a href="https://facebook.com">
              <img src={Facebook} alt="" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com">
              <img src={Twitter} alt="" />
            </a>
          </li>
          <li>
            <a href="https://instagram.com">
              <img src={Instagram} alt="" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Home;
