import React from "react";
import "./Team.css";
import haseebProfile from "../assets/haseeb-profile.jpg";
import mustansarProfile from "../assets/mustansar-profile.png";

const Team = () => {

  // ... lines 7-26 ...

  <div className="center-ceo">
    <div className="ceo-circle">
      <img src={mustansarProfile} alt="Mustansar Riaz" />
    </div>
    <h2>Mustansar Riaz</h2>
    <p>Founder & CEO | Cybersecurity Instructor</p>
  </div>


  {/* Right Side - Haseeb Akmal */ }
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
    </div >
  );
};

export default Team;
