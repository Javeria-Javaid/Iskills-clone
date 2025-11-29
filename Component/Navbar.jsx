import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

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
          <span className="logo-text">ATechSkills</span>
        </div>

        <button className="menu-toggle" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li onClick={closeMenu}>
            <img src="https://iskills.com/wp-content/uploads/2024/03/home.svg" alt="" />
            <Link to="/Home">Home</Link>
          </li>
          <li className="dropdown">
            <img src="https://iskills.com/wp-content/uploads/2024/03/training.svg" alt="" />
            <Link to="/Courses">Trainings ▾</Link>
            <ul className="dropdown-menu">
              <li onClick={closeMenu}><Link to="/AI">AI Track</Link></li>
              <li onClick={closeMenu}><Link to="/Development">Development Track</Link></li>
              <li onClick={closeMenu}><Link to="/Cybersecurity">Cybersecurity Track</Link></li>
            </ul>
          </li>
          <li onClick={closeMenu}>
            <img src="https://iskills.com/wp-content/uploads/2024/03/cog.svg" alt="" />
            <Link to="/ToolsPage">SEO Tools</Link>
          </li>
          <li onClick={closeMenu}>
            <img src="https://iskills.com/wp-content/uploads/2024/04/success.svg" alt="" />
            <Link to="/Success">Success Stories</Link>
          </li>
          <li onClick={closeMenu}>
            <img src="https://iskills.com/wp-content/uploads/2024/03/file.svg" alt="" />
            <Link to="/Blog">Blog</Link>
          </li>
          <li onClick={closeMenu}>
            <img src="https://iskills.com/wp-content/uploads/2024/03/chat.svg" alt="" />
            <Link to="/Contact">Contact us</Link>
          </li>
        </ul>

        <button className="enroll-btn" onClick={closeMenu}>
          <Link to="/Enroll">Enroll NOW</Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
