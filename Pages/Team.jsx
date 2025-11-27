import React from "react";
import "./Team.css";

const Team = () => {
  
  return (
   <div className="team-section">
      {/* Left Side Members */}
      <div className="left-members">
        <div className="left-m1">
        <div className="member">
           <div className="info">
            <h3>Aswad Baloch</h3>
            <p>Director of iSkills Support</p>
          </div>
          <div className="img-circle purple">
            <img src="https://iskills.com/wp-content/uploads/2024/04/aswad-without-bg.png" alt="Aswad Baloch" />
          </div>
        </div>
        </div>
        
        <div className="left-m2">
        <div className="member">
           <div className="info">
            <h3>Abid Rehman</h3>
            <p>WordPress Trainer</p>
          </div>
          <div className="img-circle pink">
            <img src="https://iskills.com/wp-content/uploads/2024/03/abid-banga.webp" alt="Abid Rehman" />
          </div>
          </div>
        </div>

        <div className="left-m3">
        <div className="member">
          <div className="info">
            <h3>Faheem Akhtar</h3>
            <p>Technical SEO Expert</p>
          </div>
          <div className="img-circle green">
            <img src="https://iskills.com/wp-content/uploads/2024/04/Muhammad-Faheem-Akhtar.webp" alt="Faheem Akhtar" />
          </div>
        </div>
        </div>
      </div>

      {/* Center (CEO) */}
  
      <div className="center-ceo">
        <div className="ceo-circle">
          <img src="https://iskills.com/wp-content/uploads/2024/04/Tanveer-Nandla-1.webp" alt="Tanveer Nandla" />
        </div>
        <h2>Tanveer Nandla</h2>
        <p>CEO iSkills</p>
      </div>
  

      {/* Right Side Members */}
      <div className="right-members">
        <div className="right-m1">
        <div className="member">
          <div className="img-circle yellow">
            <img src="https://iskills.com/wp-content/uploads/2024/04/Ammar.webp" alt="Ammar Ashfaq" />
          </div>
          <div className="info">
            <h3>Ammar Ashfaq</h3>
            <p>Content Writing Trainer</p>
          </div>
        </div>
        </div>

        <div className="right-m2">
        <div className="member">
          <div className="img-circle sky">
            <img src="https://iskills.com/wp-content/uploads/2024/04/KM.webp" alt="Khurram Malik" />
          </div>
          <div className="info">
            <h3>Khurram Malik</h3>
            <p>Freelance Trainer</p>
          </div>
        </div>
        </div>

        <div className="right-m3">
        <div className="member">
          <div className="img-circle purple">
            <img src="https://iskills.com/wp-content/uploads/2024/04/Umair.webp" alt="Umair Shehzad" />
          </div>
          <div className="info">
            <h3>Umair Shehzad</h3>
            <p>Freelance Trainer</p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
