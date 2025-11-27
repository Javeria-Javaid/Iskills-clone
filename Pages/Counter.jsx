import React from "react";
import "./Counter.css";

const statsData = [
  { icon: <img src="https://iskills.com/wp-content/uploads/2024/03/calander.svg" />, number: "8+", label: "Years of Experience" },
  { icon: <img src="https://iskills.com/wp-content/uploads/2024/03/batch-star.svg" />, number: "14+", label: "Successful Batches" },
  { icon: <img src="https://iskills.com/wp-content/uploads/2024/03/user-star.svg" />, number: "14,000+", label: "Graduated Students" },
  { icon: <img src="https://iskills.com/wp-content/uploads/2024/03/dollar.svg"/>, number: "$300M+", label: "Cumulative Revenue" },
];

const StatsSection = () => {
  return (
    <section className="stats-section">
      <h2 className="stats-heading">Our numbers speaks for itself</h2>
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
