import React from 'react';
import './Home.css';
import Bg from '../../assets/bg.jpg';
import Github from '../../assets/github.svg';
import Twitter from '../../assets/twitter.svg';

const Home = ({ isOpen }) => {
  return (
    <section className="banner" id="home">
      <div className={isOpen ? 'imgSidebar activeFilter' : 'imgSidebar'}>
        <img
          src={Bg}
          alt=""
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-offset="0"
        />
      </div>
      <div className="contentBx">
        <h5 className="logoText">My_Portfolio</h5>
        <div>
          <h4 data-aos="fade-up" data-aos-delay="300">
            <span>Hello</span> I'm
          </h4>
          <h2 data-aos="fade-up" data-aos-delay="400">
            Felipe Escobedo
          </h2>
          <h4 data-aos="fade-up" data-aos-delay="500">
            I'm a Front End Web Developer
          </h4>
          <p data-aos="fade-up" data-aos-delay="600">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
            doloremque quae hic, quas assumenda dicta odio alias vero velit?
            Aliquam aut corporis ipsa laudantium nisi perferendis laboriosam
            molestiae? Error, culpa!
          </p>
          <a
            href="#about"
            className="btn"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            About Me
          </a>
        </div>
        <ul className="sci" data-aos="fade-up">
          <li>
            <a href="https://github.com/eosfelipe">
              <img src={Github} alt="github" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com">
              <img src={Twitter} alt="twitter" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Home;
