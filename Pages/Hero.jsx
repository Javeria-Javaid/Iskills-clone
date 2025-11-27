import React from "react";
import './Hero.css'
import { Link } from "react-router-dom";


function Hero () {
 
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
          <h2>Learn</h2>
          <h1>
            <img src="https://cdn-icons-png.flaticon.com/128/18905/18905599.png"/>
            A.I. Driven Digital Marketing <br /> Skills in  <span>Pakistan</span>
             
          </h1>
         
          <p>
            Learn A.I., SEO, Blogging, eCommerce, video animation and other in-demand
            Digital Marketing skills online in Pakistan – iSkills.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary"><Link to="/Courses"> iSkills Courses</Link></button>
            <button className="btn-outline">Get in Touch</button>
          </div>
        </div>
      </div>
  )
}

export default Hero
