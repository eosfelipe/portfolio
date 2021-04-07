import React from 'react';
import './Sidebar.css';

const Sidebar = ({ isOpen, handleMenu }) => {
  return (
    <div className={isOpen ? 'sidebar active' : 'sidebar'}>
      {isOpen && (
        <ul className="menu" data-aos="fade-up">
          <li>
            <a href="#home" onClick={handleMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={handleMenu}>
              About
            </a>
          </li>
          <li>
            <a href="#services" onClick={handleMenu}>
              Services
            </a>
          </li>
          <li>
            <a href="#work" onClick={handleMenu}>
              Work
            </a>
          </li>
          <li>
            <a href="#contact" onClick={handleMenu}>
              Contact
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Sidebar;
