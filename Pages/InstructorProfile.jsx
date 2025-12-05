import React from "react";
import "./InstructorProfile.css";

const InstructorProfile = () => {
    return (
        <div className="instructor-profile-section">
            <div className="profile-container">
                <div className="profile-image">
                    {/* Using the asset we moved earlier */}
                    <img src="/assets/haseeb-profile.jpg" alt="Rana Haseeb Akmal" />
                </div>
                <div className="profile-content">
                    <h2>Meet Your Lead AI & Machine Learning Trainer</h2>
                    <h3>Rana Haseeb Akmal</h3>
                    <p className="tagline">Artificial Intelligence | Machine Learning | Deep Learning Trainer</p>

                    <div className="credentials">
                        <h4>Key Credentials</h4>
                        <ul>
                            <li>India EduxLabs Certified – Artificial Intelligence | Machine Learning</li>
                            <li>LUMS Certified – Data Science and Machine Learning Using Python</li>
                            <li>NAVTTC Artificial Intelligence Trainer</li>
                            <li>FAST Certified – Data Analytics & Microsoft Power BI</li>
                            <li>MS Information Technology (IT), UMT</li>
                        </ul>
                    </div>

                    <div className="experience">
                        <h4>Academic Experience</h4>
                        <ul>
                            <li>Former Faculty Member – University of Central Punjab (UCP), NCBA&E</li>
                            <li>Internal Examiner Computer Studies, University of the Punjab (PU)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InstructorProfile;
