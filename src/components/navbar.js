import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {



  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <h1>SABAREESWARAN</h1>
        </div>
        <ul className={`nav-links`}>
          <li>
            <a href="#about" >About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
