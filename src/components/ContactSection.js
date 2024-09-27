import React, { useState } from "react";
import linkedin from "../assets/LinkedIn.png";
import insta from "../assets/Instagram.png";
import "../styles/ContactSection.css";

const ContactSection = () => {
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
  });
  const [buttonMessage, setButtonMessage] = useState("Submit");
  const [isLoading, setIsLoading] = useState(false);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [errors, setErrors] = useState({});
  const SECRET_KEY = process.env.HOST;
  const validate = () => {
    const errors = {};
    if (!inputData.name.trim()) {
      errors.name = "Name is required";
    }
    if (!inputData.email.trim()) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(inputData.email)) {
      errors.email = "Invalid email format";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Perform validation
    if (validate()) {
      setButtonMessage("Sending...");
      setIsLoading(true);

      try {
        const response = await fetch(
          "http://13.201.49.150:8080/v1/portfolio/get/PostEmail",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Autorization: "Bearer ${SECRET_KEY}",
            },
            body: JSON.stringify(inputData),
          }
        );

        if (response.ok) {
          const responseData = await response.json();
          console.log("Success:", responseData);
          setButtonMessage("Sent!");
          setInputData({ name: "", email: "" });
        } else {
          console.error("Error:", response.statusText);
          setButtonMessage("Error!");
        }
      } catch (error) {
        console.error("Error:", error);
        setButtonMessage("Error!");
      } finally {
        setIsLoading(false);
        setTimeout(() => setButtonMessage("Submit"), 5000);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
  };

  return (
    <section id="contact" className="contact-container">
      <div className="contact-section">
        <div className="text-area">
          <h2>Request for a tallBack</h2>
          <p>Ensure giving hands to raise each other</p>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/sabareeswaran-m-076196173/" target="_blank">
              <i className="icon-discord"></i>
              <img src={linkedin} alt="linkedin" />
            </a>
            <a href="#">
              <i className="icon-facebook"></i>
              <img src={insta} alt="insta" />
            </a>
          </div>
        </div>
        <div className="form-area">
          <form onSubmit={handleSubmit}>
            {errors.name && <p style={{ color: "red" }}>{errors.name}</p>} {}
            <input
              name="name"
              value={inputData.name}
              type="text"
              placeholder="Name"
              onChange={handleChange}
              required
            />
            {errors.name && <p style={{ color: "red" }}>{errors.email}</p>} {}
            <input
              name="email"
              value={inputData.email}
              type="email"
              placeholder="Email"
              onChange={handleChange}
            />
            <button type="submit" disabled={isLoading}>
              {isLoading ? "Sending..." : buttonMessage}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
