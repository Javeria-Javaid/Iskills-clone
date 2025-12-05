import React from "react";
import './Hero.css'
import { Link } from "react-router-dom";


function Hero() {

  return (
    <div className="hero-section">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="hero-video">
        <source src="https://cdn.pixabay.com/video/2024/02/02/198901-909564558_large.mp4" type="video/mp4" />
      </video>

      <div className="overlay"></div>

      <div className="hero-content">
        <h2>LEARN</h2>
        <h1>
          Master DevSecAI: Secure Your Future as an Integrated Security & AI Engineer
        </h1>

        <p>
          Go beyond specialized courses. Learn to build secure, intelligent systems using the combined power of Development, Cybersecurity, and AI.
        </p>
        <div className="hero-buttons">
          <button className="btn-primary"><Link to="/Courses">Download the Full DevSecAI Syllabus</Link></button>
          <button className="btn-outline"><Link to="/Contact">Get in Touch</Link></button>
        </div>
      </div>
    </div>
  )
}

export default Hero
