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
          <img src="https://cdn-icons-png.flaticon.com/128/4712/4712109.png" alt="icon" />
          Master Development, Security & AI <br /> Skills in <span>Pakistan</span>
        </h1>

        <p>
          Join ATechSkills' DEVSECAI Bootcamp - Learn Full Stack Development,
          Cybersecurity, and Artificial Intelligence from industry experts at ATechSkills.
        </p>
        <div className="hero-buttons">
          <button className="btn-primary"><Link to="/Courses">Explore Bootcamp</Link></button>
          <button className="btn-outline"><Link to="/Contact">Get in Touch</Link></button>
        </div>
      </div>
    </div>
  )
}

export default Hero
