import React, {useEffect, useRef, useState } from "react";
import './SEBT.css'
import { FaStar,FaAngleRight ,FaChevronDown   } from "react-icons/fa"
import Testimonals from "./Testimonals.jsx";
import FAQ2 from "./FAQ2.jsx";
import Footer from '../Component/Footer.jsx'

const faqData = [
  {
    question: "Transform Your Career: Discover Why This Training Is a Game-Changer",
    answer:
       <ul>
              <li>
                <span className="star"></span>
                 <div>
                    <b>Diverse Career Pathways:</b><br/>
                     Build a thriving career in Blogging, Affiliate Marketing, Freelancing, or Digital Services, or secure high-paying jobs in top-tier markets through our comprehensive training.
                </div>
              </li>

              <li>
                <span className="star"></span>
                <div>
                <b>Comprehensive Website Development:</b><br/>Master everything from website setup to monetization. Learn to create, optimize, and profit from blogs or websites using proven strategies.
                </div>
              </li>

              <li>
                <span className="star"></span>
                <div>
                <b>Launch Your Own SEO Agency:</b><br/>Acquire cutting-edge skills to optimize client websites and establish a successful SEO business.
                </div>
              </li>

              <li>
                <span className="star"></span>
                <div>
                <b>Launch an AIO Agency:</b><br/> Be among the first to capitalize on Answer Engine Optimization (AIO), optimizing content for AI-driven search engines like ChatGPT and Gemini, and secure the first-mover advantage.
                </div>
              </li>

               <li>
                <span className="star"></span>
                <div>
                <b>Freelancing Opportunities:</b><br/>Deliver premium SEO and digital marketing services on platforms like Fiverr, Upwork, and iSkillsPro while building a strong portfolio
                </div>
              </li>

               <li>
                <span className="star"></span>
                <div>
                <b> Global Market Competency: </b><br/>Develop SEO expertise tailored to meet the demands of global office-based roles and international clients.
                </div>
              </li>

               <li>
                <span className="star"></span>
                <div>
                <b> Boost Your Online Business: </b><br/>Use SEO to increase traffic, visibility, and sales for platforms like Amazon FBA, Dropshipping stores, or other e-commerce ventures.
                </div>
              </li>

               <li>
                <span className="star"></span>
                <div>
                <b> Exceptional Content Strategies: </b><br/>Stand out as a content creator by crafting impactful, high-ranking content in an increasingly competitive landscape.
                </div>
              </li>

               <li>
                <span className="star"></span>
                <div>
                <b> SEO Specialization: </b><br/>Begin your journey to becoming a certified SEO professional, ready to tackle real-world challenges.
                </div>
              </li>

               <li>
                <span className="star"></span>
                <div>
                <b> Premium Networking Opportunities: </b><br/>Join an elite community of digital marketers, SEO specialists, and influential bloggers to grow your network and career.
                </div>
              </li>

               <li>
                <span className="star"></span>
                <div>
                <b> Learn from an Industry Pioneer: </b><br/>Gain actionable insights from Tanveer Nandla, the ‘Best Blogger of Pakistan’ and recipient of the ‘Pride of Pakistan’ award.
                </div>
              </li>
              </ul>
,
  },
  {
    question: "This Training Might Not Be For You If:",
    answer:
      <ul>
              <li>
                <span className="star"></span>
                 <div>
                    <b>Diverse Career Pathways:</b><br/>
                     Build a thriving career in Blogging, Affiliate Marketing, Freelancing, or Digital Services, or secure high-paying jobs in top-tier markets through our comprehensive training.
                </div>
              </li>

              <li>
                <span className="star"></span>
                <div>
                <b>Comprehensive Website Development:</b><br/>Master everything from website setup to monetization. Learn to create, optimize, and profit from blogs or websites using proven strategies.
                </div>
              </li>

              <li>
                <span className="star"></span>
                <div>
                <b>Launch Your Own SEO Agency:</b><br/>Acquire cutting-edge skills to optimize client websites and establish a successful SEO business.
                </div>
              </li>

              <li>
                <span className="star"></span>
                <div>
                <b>Launch an AIO Agency:</b><br/> Be among the first to capitalize on Answer Engine Optimization (AIO), optimizing content for AI-driven search engines like ChatGPT and Gemini, and secure the first-mover advantage.
                </div>
              </li>

               <li>
                <span className="star"></span>
                <div>
                <b>Freelancing Opportunities:</b><br/>Deliver premium SEO and digital marketing services on platforms like Fiverr, Upwork, and iSkillsPro while building a strong portfolio
                </div>
              </li>

               <li>
                <span className="star"></span>
                <div>
                <b> Global Market Competency: </b><br/>Develop SEO expertise tailored to meet the demands of global office-based roles and international clients.
                </div>
              </li>
              </ul>
,
  }];


const AI = () => {
      const [open, setOpen] = useState(false);
        const [activeTab, setActiveTab] = useState("content");
        const settings = {
            infinite: true,
            autoplay: true,
            autoplaySpeed: 2000, 
            speed: 1800,
            slidesToShow: 3,
            slidesToScroll: 1,
            pauseOnHover: false,
            responsive: [
              { breakpoint: 1024, settings: { slidesToShow: 2 } },
              { breakpoint: 768, settings: { slidesToShow: 1 } },
            ],
          };
          
          const [openIndex, setOpenIndex] = useState(null);
        
          const toggleFAQ = (index) => {
            setOpenIndex(openIndex === index ? null : index);
          };

          const textRef1 = useRef(null);
              const [fillPercent1, setFillPercent1] = useState(0);
            
              useEffect(() => {
                const handleScroll = () => {
                  if (!textRef1.current) return;
                  const rect = textRef1.current.getBoundingClientRect();
                  const windowHeight = window.innerHeight;
            
                  // Calculate scroll percentage (smooth transition)
                  const visible = Math.min(windowHeight - rect.top, rect.height);
                  const percent = Math.max(0, Math.min(visible / rect.height, 1)) * 100;
                  setFillPercent1(percent);
                };
            
                window.addEventListener("scroll", handleScroll);
                handleScroll();
            
                return () => window.removeEventListener("scroll", handleScroll);
              }, []);

               const textRef11 = useRef(null);
              const [fillPercent11, setFillPercent11] = useState(0);
            
              useEffect(() => {
                const handleScroll = () => {
                  if (!textRef11.current) return;
                  const rect = textRef11.current.getBoundingClientRect();
                  const windowHeight = window.innerHeight;
            
                  // Calculate scroll percentage (smooth transition)
                  const visible = Math.min(windowHeight - rect.top, rect.height);
                  const percent = Math.max(0, Math.min(visible / rect.height, 1)) * 100;
                  setFillPercent11(percent);
                };
            
                window.addEventListener("scroll", handleScroll);
                handleScroll();
            
                return () => window.removeEventListener("scroll", handleScroll);
              }, []);


          const textRef = useRef(null);
            const [fillPercent, setFillPercent] = useState(0);
          
            useEffect(() => {
              const handleScroll = () => {
                if (!textRef.current) return;
                const rect = textRef.current.getBoundingClientRect();
                const windowHeight = window.innerHeight;
          
                // Calculate scroll percentage (smooth transition)
                const visible = Math.min(windowHeight - rect.top, rect.height);
                const percent = Math.max(0, Math.min(visible / rect.height, 1)) * 100;
                setFillPercent(percent);
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
              <li><span className="star"></span><b>Computer Vision</b></li>
              <li><span className="star"></span><b>Building AI Applications</b></li>
              <li><span className="star"></span><b>AI in Cybersecurity</b></li>
            </ul><br/>

            <h2>Course Outline:-</h2>

            <ul>
              <li>
                <span className="star"></span>
                 <div>
                    <b>Machine Learning Fundamentals</b>
                </div>
              </li>

              <li>
                <span className="star"></span>
                <div>
                <b>Deep Learning and Neural Networks</b>
                </div>
              </li>

              <li>
                <span className="star"></span>
                <div>
                <b>Natural Language Processing (NLP)</b>
                </div>
              </li>

              <li>
                <span className="star"></span>
                <div>
                <b>Computer Vision</b>
                </div>
              </li>

               <li>
                <span className="star"></span>
                <div>
                <b>AI Tools and Frameworks (TensorFlow, Keras, PyTorch)</b>
                </div>
              </li>

               <li>
                <span className="star"></span>
                <div>
                <b>AI Model Optimization and Deployment</b>
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
                    <b> Basic Programming (Python, R)</b>
                </div>
              </li>

              <li>
                <span className="star"></span>
                <div>
                <b>Data Structures and Algorithms</b>
                </div>
              </li>

               <li>
                <span className="star"></span>
                <div>
                <b>Building AI Applications</b>
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
                    <b> Cybersecurity Fundamentals</b>
                </div>
              </li>

              <li>
                <span className="star"></span>
                <div>
                <b> AI in Cybersecurity</b>
                </div>
              </li>

              <li>
                <span className="star"></span>
                <div>
                <b>Securing AI Models</b>
                </div>
              </li>

              <li>
                <span className="star"></span>
                <div>
                <b>Ethical Implications of AI</b>
                </div>
              </li>

              </ul>

          </div>

        );

      case "vision":
        return (
          <div className="content-box">
            <ul>
              <li>
                <span className="star"></span>
                 <div>
                    <b>Student Achievements:</b><br/>
                     Our alumni have collectively earned over $350 Million—a testament to the real-world impact of iSkills training!
                </div>
              </li>

              <li>
                <span className="star"></span>
                <div>
                <b>Vision for 2030:</b><br/>We aim high: achieving a cumulative alumni revenue of $1 Billion by 2030, In Sha Allah.
                </div>
              </li>

              <li>
                <span className="star"></span>
                <div>
                <b>Community and Support:</b><br/>Be part of a thriving community! Join our free meetups and access tailored guidance through iSkills Success Managers.
                </div>
              </li>

              <li>
                <span className="star"></span>
                <div>
                <b>Why Choose iSkills?</b><br/> Learn high-demand skills in a booming digital economy—SEO alone is valued at over $80 Billion annually in the USA.
                </div>
              </li>

               <li>
                <span className="star"></span>
                <div>
                <b>Our Distinctive Edge:</b><br/>We don’t just teach; we deliver results. iSkills is the ONLY institute where success is measured by tangible outcomes:
                </div>
              </li>

               <li>
                <span className="star"></span>
                <div>
                <b>Your Investment, Your Future:</b><br/> Equip yourself with the skills to thrive in the modern economy.
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
        <h1> AtechSkills<span id="batch"> DevSecAI  </span> Bootcamp - AI Track </h1>
        <div className="rating">
            <img src='https://iskills.com/wp-content/uploads/2024/04/trainer.svg'/>
            <p>Mustanar Riaz <span>(Trainer)</span></p>
            <img src='https://iskills.com/wp-content/uploads//2024/03/user-stars.svg'/>
            <p>12,000+ <span> (Graduates)</span></p>
            <p> 5 <FaStar /> <span> ( 5932 Reviews )</span></p>
        </div>

     <div className="hero-both">
         <div className="hero-bg">
        
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

            <p id="training-program"><b>AtechSkills DevSecAI Bootcamp - AI Track Training Program 2025!</b><br/><br/>
            Led by industry expert <b>M.Mustansar Riaz</b>, master <b>Full stack developer, Cybersecurity expert </b>and<br/>
            <b>AI.</b> Gain practical skills and expert insights to transform your career.<br/><br/>
            Sign up now and become a skilled AI professional!</p><br/>
            <p className="firstP">Bootcamp - AI Track Details & Registration ——— —</p>
            <p id="training">Course Breakdown (60% AI, 20% Development, 20% Cybersecurity)</p>

            {/*--- 4-tabs layout---*/}

            <div className="container">
               
                <div className="tabs">
                <button className={activeTab === "content" ? "active" : ""} onClick={() => setActiveTab("content")}>
                    60% Artificial Intelligence
                </button>

                <button className={activeTab === "important" ? "active" : ""} onClick={() => setActiveTab("important")}>
                    20% Development
                </button>

                <button className={activeTab === "bonuses" ? "active" : ""} onClick={() => setActiveTab("bonuses")}>
                    20% Cybersecurity
                </button>

            </div>

              
                 <div className="tab-content">{renderContent()}</div>
                </div>

                <p ref={textRef1}
                className="scroll-fill-text1" id="para"
                style={{
                backgroundSize: `${fillPercent1}% 100%`,
                }}>Join AtechSkills DevSecAI Bootcamp - AI Track today and turn learning into earning!</p>
                <div className='regis'>
                  <h5  ref={textRef}
                    className="scroll-fill-textt"
                    style={{
                    backgroundSize: `${fillPercent}% 100%`,
                    }}
                    >Get Enrolled Now</h5>
                </div>

                <p ref={textRef1}
                className="scroll-fill-text1" id="para"
                style={{
                backgroundSize: `${fillPercent1}% 100%`,
                }}>Led by Mustansar Riaz, provide practical, industry-aligned training that helps students and
                professionals step confidently into the global tech<br/> marketplace—equipped with the knowledge, skills, and mindset needed to succeed.</p>
                <div className="white-faq">
                    <h2>Bootcamp - AI Track</h2>
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
  )
}

export default AI
