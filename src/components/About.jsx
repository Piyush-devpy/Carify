import React from "react";
import "./About.css";
import github from "../assets/github.png"; 

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        
        {/* RIGHT SIDE (CONTENT) */}
        <div className="about-content">
          <h2>About the Developer</h2>

          <p>
            Hi, I’m a passionate developer building modern web applications using
            React. This project is designed to showcase a clean UI with smooth
            interactions and real-world features like product browsing and order tracking.
          </p>

          <p>
            I focus on creating responsive, user-friendly, and visually appealing
            designs. Constantly learning and improving my skills in frontend development.
          </p>

          <div className="socials">
            <a href="https://github.com/Piyush-devpy"><img src={github} alt="Github" />GitHub</a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;