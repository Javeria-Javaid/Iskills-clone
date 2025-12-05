import React from "react";
import "./Team.css";
import haseebProfile from "../assets/haseeb-profile.jpg";
import mustansarProfile from "../assets/mustansar-profile.png";

const Team = () => {

  return (
    <div className="team-section">
      {/* Left Side - Javeria Javaid */}
      <div className="left-members">
        <div className="left-m2">
          <div className="member">
            <div className="info">
              <h3>Javeria Javaid</h3>
              <p>Full Stack Development Instructor</p>
            </div>
            <div className="img-circle pink">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300" alt="Javeria Javaid" />
            </div>
          </div>
        </div>
      </div>

      {/* Center (CEO) - Mustansar Riaz */}
      <div className="center-ceo">
        <div className="ceo-circle">
          <img src={mustansarProfile} alt="Mustansar Riaz" />
        </div>
        <h2>Mustansar Riaz</h2>
        <p>Founder & CEO | Cybersecurity Instructor</p>
      </div>


      {/* Right Side - Haseeb Akmal */}
      <div className="right-members">
        <div className="right-m2">
          <div className="member">
            <div className="img-circle sky">
              <img src={haseebProfile} alt="Haseeb Akmal" />
            </div>

            <div className="info">
              <h3>Haseeb Akmal</h3>
              <p>AI & Machine Learning Instructor</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
