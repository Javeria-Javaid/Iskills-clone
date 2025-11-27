import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="navbar-container">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="contact-info">
          <span><FaPhoneAlt /> +92-300-0451111</span>
          <span><FaEnvelope /> info@iskills.com</span>
          <span><FaMapMarkerAlt /> 5/5 MPS Road Multan</span>
        </div>

        <div className="social-icons">
          <FaFacebookF />
          <FaInstagram />
          <FaLinkedinIn />
          <FaTiktok />
        </div>
      </div>

      {/* Main Navbar */}
      <div className="main-navbar">
        <div className="logo">
          <span className="logo-text">ATechSole</span>
        </div>

        <button className="menu-toggle" aria-label="Toggle menu" onClick={() => setMenuOpen((v) => !v)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <ul className={"nav-links" + (menuOpen ? " open" : "") }>
          <li><img src="https://iskills.com/wp-content/uploads/2024/03/home.svg"/><Link to="/Home"> Home </Link></li>
          <li className="dropdown" ><img src="https://iskills.com/wp-content/uploads/2024/03/training.svg"/> 

          <Link to="/Courses"> Trainings ▾</Link>
          <ul className="dropdown-menu">
            <li><Link to="/AI">AI Track</Link></li>
            <li><Link to="/Development">Development Track</Link></li>
            <li><Link to="/Cybersecurity">Cybersecurity Track</Link></li>
          </ul>
        </li>
          <li><img src="https://iskills.com/wp-content/uploads/2024/03/cog.svg"/> <Link to="/ToolsPage"> SEO Tools</Link></li>
          <li><img src="https://iskills.com/wp-content/uploads/2024/04/success.svg"/> <Link to="/Success">Sucesss Stories</Link></li>
          <li><img src="https://iskills.com/wp-content/uploads/2024/03/file.svg"/> <Link to="/Blog"> Blog</Link></li>
          <li><img src="https://iskills.com/wp-content/uploads/2024/03/chat.svg"/>  <Link to="/Contact">Contact us</Link></li>
         
        </ul>

        <button className="enroll-btn"><Link to="/Enroll">Enroll NOW</Link></button>
      </div>
    </div>
  );
};

export default Navbar;
