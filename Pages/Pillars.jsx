import React from "react";
import "./Pillars.css";
import { FaCode, FaShieldAlt, FaBrain } from "react-icons/fa";

const Pillars = () => {
    return (
        <div className="pillars-section">
            <div className="pillars-header">
                <h1>The Three Pillars of DevSecAI</h1>
                <p>Integrated mastery of Development, Security, and Artificial Intelligence.</p>
            </div>

            <div className="pillars-grid">
                {/* Pillar 1: Development */}
                <div className="pillar-card dev">
                    <div className="icon-box">
                        <FaCode />
                    </div>
                    <h2>Development</h2>
                    <h3>Modern coding, DevOps, and Cloud-Native practices.</h3>
                    <p>
                        Build scalable, efficient, and robust applications ready for deployment using industry-standard tools and frameworks.
                    </p>
                </div>

                {/* Pillar 2: Cybersecurity */}
                <div className="pillar-card sec">
                    <div className="icon-box">
                        <FaShieldAlt />
                    </div>
                    <h2>Cybersecurity</h2>
                    <h3>Secure Coding, Threat Modeling, and Automated Security (Sec).</h3>
                    <p>
                        Protect applications and infrastructure by embedding security from the start. Learn offensive and defensive strategies.
                    </p>
                </div>

                {/* Pillar 3: AI */}
                <div className="pillar-card ai">
                    <div className="icon-box">
                        <FaBrain />
                    </div>
                    <h2>Artificial Intelligence</h2>
                    <h3>ML, Deep Learning, and AI integration for automation.</h3>
                    <p>
                        Automate tasks, detect anomalies, and implement intelligent features using cutting-edge AI and Machine Learning models.
                    </p>
                </div>
            </div>

            <div className="integration-info">
                <h3>Integrated Power</h3>
                <p>
                    DevSecAI isn't just three separate topics—it's the synergy. AI automates security; Security protects AI models; Development builds the platform for both.
                    Become the engineer who understands the entire ecosystem.
                </p>
            </div>
        </div>
    );
};

export default Pillars;
