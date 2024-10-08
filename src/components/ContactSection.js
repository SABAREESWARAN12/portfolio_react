import React from "react";
import linkedin from "../assets/LinkedIn.png";
import insta from "../assets/Instagram.png";
import "../styles/ContactSection.css";

const ContactSection = () => {

  return (
    <section id="contact" className="contact-container">
      <div className="contact-section">
        <div className="text-area">
          <h2>Request for a tallBack</h2>
          <p>Ensure giving hands to raise each other</p>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/sabareeswaran-m-076196173/">
              <i className="icon-discord"></i>
              <img src={linkedin} alt="linkedin" />
            </a>
            <a href="https://www.instagram.com/_.this_is_sabare._/">
              <i className="icon-facebook"></i>
              <img src={insta} alt="insta" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
