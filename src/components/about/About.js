import React from 'react';
import './About.css';
import aboutImagen from "../../media/aboutImagen.jpg"
const About = () => {
  return (
    <div className="about-container">
      <div className="about-desc">
          <h3>
              Let me tell you somethig about me
          </h3>
          <p>
              Descripcion del parafo 
          </p>
      </div>
      <div className="about-img">
        <img src={aboutImagen} alt="about"/>
      </div>
    </div>
  );
};

export default About;
