import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "./Training.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaAngleRight ,FaPhone, FaEnvelope, FaLocationDot } from "react-icons/fa6";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const courses = [
  {
    title: "SEBT Batch 15 – SEO, AI & Freelancing",
    trainer: "M Tanveer Nandla",
    role: "Trainer",
    image: "https://iskills.com/wp-content/uploads/2025/10/SEBT-15.webp",
    description:
      "Join SEBT Batch 15 by iSkills – Best SEO Training in Pakistan 2025, led by industry expert Tanveer Nandla. Learn SEO, Blogging, AI, and Freelancing.",
    graduates: "12,000+",
    duration: "6 Months",
  },
  {
    title: "iVAM – Video Animation & Monetization",
    trainer: "Faisal Waqar",
    role: "Trainer",
    image: "https://iskills.com/wp-content/uploads/2024/03/faisal-edit-_1_.webp",
    description:
      "Unlock the power of video animation and monetization with iVAM training. Learn to create captivating animations and earn from them.",
    graduates: "600+",
    duration: "3 Months",
  },
  {
    title: "iKids – iSkills Kids Coding Summer Camp",
    trainer: "Rooh ul Amin",
    role: "Trainer",
    image: "https://iskills.com/wp-content/uploads/2024/07/iKids-Summer-Camp-by-iSkills-iKids-Summer-Camp-by-iSkills.webp",
    description:
      'Join "iKids – Introduction to Computer Science Fundamentals Using Block Programming" by iSkills for young learners!',
    graduates: "1,000+",
    duration: "1 Month",
  },
   {
    title: "SEBT Batch 15 – SEO, AI & Freelancing",
    trainer: "Shah Jahan Labar",
    role: "Trainer",
    image: "https://iskills.com/wp-content/uploads/2024/03/icommerce-training.webp",
    description:
      "Join the best of best! Get certified training to master your E-Commerce skill .",
    graduates: "1000+",
    duration: "3 Months",
  }
];
const PrevArrow = ({ onClick }) => (
  <div className="arrow prev-arrow" onClick={onClick}>
    <span>❮</span>
  </div>
);

// Custom right arrow component
const NextArrow = ({ onClick }) => (
  <div className="arrow next-arrow" onClick={onClick}>
    <span>❯</span>
  </div>
);
const Training = () => {


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


     const textRef0 = useRef(null);
    const [fillPercent0, setFillPercent0] = useState(0);
  
    useEffect(() => {
      const handleScroll = () => {
        if (!textRef0.current) return;
        const rect = textRef0.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
  
        // Calculate scroll percentage (smooth transition)
        const visible = Math.min(windowHeight - rect.top, rect.height);
        const percent = Math.max(0, Math.min(visible / rect.height, 1)) * 100;
        setFillPercent0(percent);
      };
  
      window.addEventListener("scroll", handleScroll);
      handleScroll();
  
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000, 
    speed: 1800,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    pauseOnHover: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };



  return (
    <div className="course-slider">
        <div className="pro">
        <p className="firstP">Professional to ——— —</p>
        <h1>Lead Trainings by iSkills</h1>
        <p className="secondP">Enhance your career with iSkills' professional training programs in SEO, digital marketing, eCommerce and more. Learn from industry experts through practical<br/>
         training in key digital marketing areas.</p>
         </div>
      <Slider {...settings}>
        {courses.map((course, index) => (
          <div className="course-card" key={index}>
            <div className="course-image">
              <img src={course.image} alt={course.title} />
            </div>
            <div className="course-content">
              <h3 className="course-title">{course.title}</h3>
              <p className="trainer">
                <span className="dot">👤</span> {course.trainer}{" "}
                <span className="role">({course.role})</span>
              </p>
              <p className="description">{course.description}</p>
              <div className="stats">
                <p>👥 {course.graduates} (Graduates)</p>
                <p>⏱ {course.duration} (Duration)</p>
              </div>
              <button className="enroll-btn1"> Get Enrolled Now  < FaAngleRight size={13} />  </button>
            </div>
          </div>
        ))}
      </Slider>
      <div className="btt">
      <button className="view">View All</button>
      </div>
    <div className="mission">
     <div className='intro'> 
         <img src='https://iskills.com/wp-content/uploads/2024/04/mission-model.webp'/>
            <div className='intro-lines'>
             <p id='introS'> M Tanveer Nandla ——— — </p>
             <h1>Message & Our Mission</h1>
             <p  ref={textRef1}
      className="scroll-fill-text1"
      style={{
        backgroundSize: `${fillPercent1}% 100%`,
      }}>iSkills reflects my dedication as CEO to creating a supportive environment that empowers our team and 
             <br/>students throughout Pakistan. My goal is to build a transformative education system that leverages our
             <br/> success in digital marketing and SEO training to help reduce youth unemployment in Pakistan.<br/></p>
             </div>
        </div>
        </div>


         <p id='introS'> Our Centers ——— — </p>
             <h1>iSkills Incubators</h1><br/>
             <p  ref={textRef0}
      className="scroll-fill-text1"
      style={{
        backgroundSize: `${fillPercent0}% 100%`,
      }}>iSkills not only spearheads South Punjab from its Multan-based headquarter but has also taken the initiative to establish digital marketing training institutes across 
             <br/>major cities in Pakistan, beginning with Gujranwala and now successfully established in Faisalabad and Islamabad.</p>


    <div className="locations">    

      {/* Multan */}
      <div className="contact-card" >
        <div className="icon-circle orange">
          <img src="https://iskills.com/wp-content/uploads/2024/03/multan.svg" alt="Multan" />
        </div>
        <h2>Multan – iSkills Headquarter</h2>
        <div className="divider"></div>
        <ul>
          <li><FaPhone /> +92-300-0451111</li>
          <li><FaEnvelope /> info@iskills.com</li>
          <li>
            <FaLocationDot /> House # 5, 5 Multan Public School Road, near DHA
            Office, Model Town B Block B Model Town, Multan, Punjab 60000
          </li>
        </ul>
      </div>

      {/* Faisalabad */}
      <div className="contact-card purple-card" >
        <div className="icon-circleF white">
          <img src="https://iskills.com/wp-content/uploads/2024/03/faisalabad.svg" alt="Faisalabad" />
        </div>
        <h2>Faisalabad</h2>
        <div className="divider white-line"></div>
        <ul>
          <li><FaPhone /> +92-300-0451111</li>
          <li><FaEnvelope /> fsd@iskills.com</li>
          <li>
            <FaLocationDot /> P-64, 2nd Floor, Burhan Plaza, Shahr-e-Faisal,
            Block B People's Colony No 1, Faisalabad
          </li>
        </ul>
      </div>

      {/* Gujranwala */}
      <div className="contact-cardG" >
        <div className="icon-circle orange">
          <img src="https://iskills.com/wp-content/uploads/2024/03/gujranwala.svg" alt="Gujranwala" />
        </div>
        <h2>Gujranwala</h2>
        <div className="divider"></div>
        <ul>
          <li><FaPhone /> +92-300-0451111</li>
          <li><FaEnvelope /> gjw@iskills.com</li>
          <li>
            <FaLocationDot /> Mumtaz Market, Grand Trunk Rd, opposite Chase up,
            near Second Cup, Civil Lines, Gujranwala
          </li>
        </ul>
      </div>

    </div>

     <p id='introS'> Our Centers ——— — </p>
             <h1>iSkills Incubators</h1><br/>
             <p id='introP'>iSkills not only spearheads South Punjab from its Multan-based headquarter but has also taken the initiative to establish digital marketing training institutes across 
             <br/>major cities in Pakistan, beginning with Gujranwala and now successfully established in Faisalabad and Islamabad.</p>
    </div>


    
  );
};

export default Training;
