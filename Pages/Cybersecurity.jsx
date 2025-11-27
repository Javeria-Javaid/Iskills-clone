import React, { useEffect, useRef, useState } from "react";
import "./SEBT.css";
import { FaStar, FaAngleRight } from "react-icons/fa";
import Footer from "../Component/Footer.jsx";

const Cybersecurity = () => {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("content");

  const textRef = useRef(null);
  const textRef1 = useRef(null);
  const [fillPercent, setFillPercent] = useState(0);
  const [fillPercent1, setFillPercent1] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (textRef.current) {
        const rect = textRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const visible = Math.min(windowHeight - rect.top, rect.height);
        const percent = Math.max(0, Math.min(visible / rect.height, 1)) * 100;
        setFillPercent(percent);
      }
      if (textRef1.current) {
        const rect1 = textRef1.current.getBoundingClientRect();
        const windowHeight1 = window.innerHeight;
        const visible1 = Math.min(windowHeight1 - rect1.top, rect1.height);
        const percent1 = Math.max(0, Math.min(visible1 / rect1.height, 1)) * 100;
        setFillPercent1(percent1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case "content":
        return (
          <div className="content-box">
            <h2>Whats New:-</h2>
            <ul>
              <li><span className="star"></span><b>Network Security</b></li>
              <li><span className="star"></span><b>Threat Detection & Response</b></li>
              <li><span className="star"></span><b>Penetration Testing</b></li>
            </ul><br/>

            <h2>Course Outline:-</h2>
            <ul>
              <li>
                <span className="star"></span>
                <div>
                  <b> Cybersecurity Fundamentals</b>
                </div>
              </li>
              <li>
                <span className="star"></span>
                <div>
                  <b> Network Security</b>
                </div>
              </li>
              <li>
                <span className="star"></span>
                <div>
                  <b> Penetration Testing and Ethical Hacking</b>
                </div>
              </li>
              <li>
                <span className="star"></span>
                <div>
                  <b>Security Operations and Monitoring</b>
                </div>
              </li>
              <li>
                <span className="star"></span>
                <div>
                  <b> Cryptography and Data Protection</b>
                </div>
              </li>
              <li>
                <span className="star"></span>
                <div>
                  <b> Incident Response</b>
                </div>
              </li>
              <li>
                <span className="star"></span>
                <div>
                  <b>Security Audits and Risk Assessments</b>
                </div>
              </li>
            </ul>
          </div>
        );
      case "important":
        return (
          <div className="content-box">
            <h2>Course Outline:-</h2>
            <ul>
              <li>
                <span className="star"></span>
                <div>
                  <b>Basic Programming (Python, Bash)</b>
                </div>
              </li>
              <li>
                <span className="star"></span>
                <div>
                  <b>Secure Coding Practices</b>
                </div>
              </li>
              <li>
                <span className="star"></span>
                <div>
                  <b>Web and App Security Vulnerabilities</b>
                </div>
              </li>
              <li>
                <span className="star"></span>
                <div>
                  <b>Secure Software Development Lifecycle (SDLC)</b>
                </div>
              </li>
            </ul>
          </div>
        );
      case "bonuses":
        return (
          <div className="content-box">
            <h2>Course Outline:-</h2>
            <ul>
              <li>
                <span className="star"></span>
                <div>
                  <b> AI Basics and Machine Learning</b>
                </div>
              </li>
              <li>
                <span className="star"></span>
                <div>
                  <b> Automation and AI in Cybersecurity</b>
                </div>
              </li>
              <li>
                <span className="star"></span>
                <div>
                  <b>Anomaly Detection and AI-based Security Solutions</b>
                </div>
              </li>
            </ul>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className="Sebt-container">
        <h1> AtechSkills<span id="batch"> DevSecAI </span> Bootcamp - Cybersecurity Track </h1>
        <div className="rating">
          <img src="https://iskills.com/wp-content/uploads/2024/04/trainer.svg"/>
          <p>Mustanar Riaz <span>(Trainer)</span></p>
          <img src="https://iskills.com/wp-content/uploads//2024/03/user-stars.svg"/>
          <p>12,000+ <span> (Graduates)</span></p>
          <p> 5 <FaStar /> <span> ( 5932 Reviews )</span></p>
        </div>

        <div className="hero-both">
          <div className="hero-CSbg">
          </div>

          <div className='white-div1'>
            <div className='pic-div'>
              <p id="rs"> RS 1,500</p>
               <div className='pic-innerDiv'>
                      <img src='https://iskills.com/wp-content/uploads/2024/03/duration-icon.svg'/>
                      <p>Course Duration: 3 Months</p>
                    </div>
                <div className='innerDiv'>
                  <div className='innerdiv2'>
                    <img src='https://iskills.com/wp-content/uploads/2024/03/lcd.svg'/>
                    <img src='https://iskills.com/wp-content/uploads/2024/03/support.svg'/>
                    <img src='https://iskills.com/wp-content/uploads/2024/03/artificial-intelligence.svg'/>
                    <img src='https://iskills.com/wp-content/uploads/2024/03/reservation-smartphone.svg'/>
                    <img src='https://iskills.com/wp-content/uploads/2024/03/lifetime-access.svg'/>
                    <img src='https://iskills.com/wp-content/uploads/2024/03/diploma.svg'/>
                    <img src='https://iskills.com/wp-content/uploads/2024/03/money-bill-wave.svg'/>
                  </div>
                  <div className='innerdiv3'>
                    <p>100+ Live Lectures</p>
                    <p>24/7 Support</p>
                    <p>AI Support</p>
                    <p>iOS/Android App Access</p>
                    <p>Lifetime Access</p>
                    <p>Certificate of Completion</p>
                    <p>15 Days Refund Policy</p>
                  </div>
                </div>
              <button className="enroll-btn1"> Get Enrolled Now  < FaAngleRight size={13} />  </button>
            </div>
          </div>
        </div>

        <p id="training-program"><b>AtechSkills DevSecAI Bootcamp - Cybersecurity Track Training Program 2025!</b><br/><br/>
          Led by industry expert <b>M.Mustansar Riaz</b>, master <b>Full stack developer, Cybersecurity expert</b> and <b>AI</b>.<br/>
          Gain practical skills and expert insights to transform your career.<br/><br/>
          Sign up now and become a skilled cybersecurity professional!</p><br/>
        <p className="firstP">Bootcamp - Cybersecurity Track Details & Registration ——— —</p>
        <p id="training">Course Breakdown (60% Cybersecurity, 20% Development, 20% AI)</p>

        <div className="container">
          <div className="tabs">
            <button className={activeTab === "content" ? "active" : ""} onClick={() => setActiveTab("content")}>
              60% Cybersecurity
            </button>
            <button className={activeTab === "important" ? "active" : ""} onClick={() => setActiveTab("important")}>
              20% Development
            </button>
            <button className={activeTab === "bonuses" ? "active" : ""} onClick={() => setActiveTab("bonuses")}>
              20% AI
            </button>
          </div>
          <div className="tab-content">{renderContent()}</div>
        </div>

        <p
          ref={textRef1}
          className="scroll-fill-text1" id="para"
          style={{ backgroundSize: `${fillPercent1}% 100%` }}
        >Join AtechSkills DevSecAI Bootcamp - Cybersecurity Track today and turn learning into earning!</p>
        <div className='regis'>
          <h5
            ref={textRef}
            className="scroll-fill-textt"
            style={{ backgroundSize: `${fillPercent}% 100%` }}
          >Get Enrolled Now</h5>
        </div>

        <p
          ref={textRef1}
          className="scroll-fill-text1" id="para"
          style={{ backgroundSize: `${fillPercent1}% 100%` }}
        >Led by Mustansar Riaz, provide practical, industry-aligned training that helps students and professionals step confidently into the global tech marketplace—equipped with the knowledge, skills, and mindset needed to succeed.</p>

        <div className="white-faq">
          <h2>Bootcamp - Cybersecurity Track</h2>
          <p id="price">RS. 1,500</p>
          <p id="div-p">Start Date: 1st Nov 2025<br/>
            Location: Johar Town, Lahore<br/>
            Fee: 1500 Rs (Refundable Security Fee)<br/>
            Contact: 0325 3344552<br/>
            Email: info@atechskills.com<br/>
          </p>
          <button className="enroll-btn1"> Register Now  < FaAngleRight size={13} />  </button>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Cybersecurity;

