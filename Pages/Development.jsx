import React, { useEffect, useRef, useState } from "react";
import "./SEBT.css";
import { FaStar, FaAngleRight } from "react-icons/fa";
import Footer from "../Component/Footer.jsx";

const Development = () => {
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
              <li><span className="star"></span><b>Full-Stack Projects</b></li>
              <li><span className="star"></span><b>Modern Frontend Frameworks</b></li>
              <li><span className="star"></span><b>UI/UX Design principles</b></li>
            </ul><br/>

            <h2>Course Outline:-</h2>
            <ul>
              <li>
                <span className="star"></span>
                <div>
                  <b>Front-End Development:HTML, CSS, JavaScript Fundamentals</b>
                </div>
              </li>
              <li>
                <span className="star"></span>
                <div>
                   <b>Back-end Development: Python with Node.js</b>
                </div>
              </li>
              <li>
                <span className="star"></span>
                <div>
                  <b>Web Development frameworks: React, Angular</b>
                </div>
              </li>
              <li>
                <span className="star"></span>
                <div>
                  <b>Database Management (SQL/NoSQL)</b>
                </div>
              </li>
              <li>
                <span className="star"></span>
                <div>
                  <b>Software Development life Cycle(SDLC)</b>
                </div>
              </li>
              <li>
                <span className="star"></span>
                <div>
                  <b>Version Control with Git</b>
                </div>
              </li>
              <li>
                <span className="star"></span>
                <div>
                  <b>UI/UX Design principles</b>
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
                  <b>Introduction to AI</b>
                </div>
              </li>
              <li>
                <span className="star"></span>
                <div>
                  <b>Machine Learning fundamentals</b>
                </div>
              </li>
              <li>
                <span className="star"></span>
                <div>
                  <b>Deep Learning Basics</b>
                </div>
              </li>
              <li>
                <span className="star"></span>
                <div>
                  <b>data processing and analysis</b>
                </div>
              </li>
              <li>
                <span className="star"></span>
                <div>
                  <b>AI tools and frameworks(TensorFlow, Pytorch)</b>
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
                  <b>Cyber Security Fundamentals </b>
                </div>
              </li>
              <li>
                <span className="star"></span>
                <div>
                  <b>Threat Modeling and Risk Management</b>
                </div>
              </li>
              <li>
                <span className="star"></span>
                <div>
                  <b>Network Security Fundamentals</b>
                </div>
              </li>
              <li>
                <span className="star"></span>
                <div>
                  <b>Web Application Security</b>
                </div>
              </li>
              <li>
                <span className="star"></span>
                <div>
                  <b>Cryptography Basics</b>
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
        <h1> AtechSkills<span id="batch"> DevSecAI </span> Bootcamp - Development Track </h1>
        <div className="rating">
          <img src="https://iskills.com/wp-content/uploads/2024/04/trainer.svg"/>
          <p>Mustanar Riaz <span>(Trainer)</span></p>
          <img src="https://iskills.com/wp-content/uploads//2024/03/user-stars.svg"/>
          <p>12,000+ <span> (Graduates)</span></p>
          <p> 5 <FaStar /> <span> ( 5932 Reviews )</span></p>
        </div>

        <div className="hero-both">
          <div className="hero-Dbg">
           
          </div>

          {open && (
            <div className="video-overlay">
              <div className="video-box">
                <span className="close" onClick={() => setOpen(false)}>✖</span>
                <iframe
                  src="https://youtu.be/-DhuMYRSmP0"
                  title="YouTube video"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}

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

        <p id="training-program"><b>AtechSkills DevSecAI Bootcamp - Development Track Training Program 2025!</b><br/><br/>
          Led by industry expert <b>M.Mustansar Riaz</b>, master <b>Full stack developer, Cybersecurity expert</b> and <b>AI</b>.
          <br/>Gain practical skills and expert insights to transform your career.<br/><br/>
          Sign up now and become a skilled full-stack developer!</p><br/>
        <p className="firstP">Bootcamp - Development Track Details & Registration ——— —</p>
        <p id="training">Course Breakdown (60% Development, 20% AI, 20% Cybersecurity)</p>

        <div className="container">
          <div className="tabs">
            <button className={activeTab === "content" ? "active" : ""} onClick={() => setActiveTab("content")}>
              60% Development
            </button>
            <button className={activeTab === "important" ? "active" : ""} onClick={() => setActiveTab("important")}>
              20% AI
            </button>
            <button className={activeTab === "bonuses" ? "active" : ""} onClick={() => setActiveTab("bonuses")}>
              20% Cybersecurity
            </button>
          </div>
          <div className="tab-content">{renderContent()}</div>
        </div>

        <p
          ref={textRef1}
          className="scroll-fill-text1" id="para"
          style={{ backgroundSize: `${fillPercent1}% 100%` }}
        >Join AtechSkills DevSecAI Bootcamp - Development Track today and turn learning into earning!</p>
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
          <h2>Bootcamp - Development Track</h2>
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

export default Development;

