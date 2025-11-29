import React from "react";
import "./Counter.css";

const statsData = [
  { icon: <img src="https://iskills.com/wp-content/uploads/2024/03/calander.svg" alt="experience" />, number: "10+", label: "Years of Excellence" },
  { icon: <img src="https://iskills.com/wp-content/uploads/2024/03/batch-star.svg" alt="batches" />, number: "5+", label: "Successful Bootcamp Batches" },
  { icon: <img src="https://iskills.com/wp-content/uploads/2024/03/user-star.svg" alt="students" />, number: "500+", label: "Tech Professionals Trained" },
  { icon: <img src="https://iskills.com/wp-content/uploads/2024/03/dollar.svg" alt="projects" />, number: "100+", label: "Real-World Projects Delivered" },
];

const StatsSection = () => {
  return (
    <section className="stats-section">
      <h2 className="stats-heading">ATechSkills' Track Record of Excellence</h2>
      <div className="stats-container">
        {statsData.map((item, index) => (
          <div className="stat-box" key={index}>
            <div className="stat-icon">{item.icon}</div>
            <h3 className="stat-number">{item.number}</h3>
            <p className="stat-label">{item.label}</p>
            {index !== statsData.length - 1 && <div className="divider"></div>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
