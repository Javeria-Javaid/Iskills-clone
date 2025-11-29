import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "./Training.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaAngleRight, FaPhone, FaEnvelope, FaLocationDot } from "react-icons/fa6";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const courses = [
  {
    title: "Full Stack Development Track",
    trainer: "Javeria Javaid",
    role: "Lead Instructor",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600",
    description:
      "Master modern web development with React, Node.js, databases, and cloud deployment. Build real-world applications from scratch.",
    graduates: "200+",
    duration: "6 Months",
  },
  {
    title: "Cybersecurity Track",
    trainer: "Mustansar Riaz",
    role: "CEO & Lead Instructor",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600",
    description:
      "Learn network security, ethical hacking, penetration testing, and cybersecurity best practices from industry expert with 10+ years experience.",
    graduates: "150+",
    duration: "6 Months",
  },
  {
    title: "AI & Machine Learning Track",
    trainer: "Haseeb Akmal",
    role: "AI Expert",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600",
    description:
      "Dive into artificial intelligence, machine learning algorithms, deep learning, and build intelligent applications with Python and TensorFlow.",
    graduates: "180+",
    duration: "6 Months",
  }
];

const PrevArrow = ({ onClick }) => (
  <div className="arrow prev-arrow" onClick={onClick}>
    <span>❮</span>
  </div>
);

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
    autoplaySpeed: 3000,
    speed: 1800,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="course-slider">
      <div className="pro">
        <p className="firstP">DEVSECAI Bootcamp ——— —</p>
        <h1>Three Specialized Tracks</h1>
        <p className="secondP">Choose your path in tech with ATechSkills' comprehensive bootcamp. Learn from industry experts<br />
          and build a successful career in Development, Cybersecurity, or Artificial Intelligence.</p>
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
        <button className="view">View All Tracks</button>
      </div>
      <div className="mission">
        <div className='intro'>
          <img src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500' alt="Mustansar Riaz" />
          <div className='intro-lines'>
            <p id='introS'> Mustansar Riaz - CEO ——— — </p>
            <h1>Our Vision & Mission</h1>
            <p ref={textRef1}
              className="scroll-fill-text1"
              style={{
                backgroundSize: `${fillPercent1}% 100%`,
              }}>ATechSkills reflects my dedication as Founder & CEO to creating a supportive learning environment that empowers
              <br />students across Pakistan. Our goal is to build a transformative tech education system that leverages our
              <br /> expertise in software development, cybersecurity, and AI to help reduce youth unemployment in Pakistan.<br /></p>
          </div>
        </div>
      </div>


      <p id='introS'> Our Location ——— — </p>
      <h1>ATechSkills Training Center</h1><br />
      <p ref={textRef0}
        className="scroll-fill-text1"
        style={{
          backgroundSize: `${fillPercent0}% 100%`,
        }}>Based in Lahore, Punjab, ATechSkills provides world-class technology training. Our DEVSECAI Bootcamp brings together
        <br />industry expertise and practical learning to prepare students for successful careers in Pakistan's growing tech industry.</p>


      <div className="locations">

        {/* Lahore */}
        <div className="contact-card" >
          <div className="icon-circle orange">
            <img src="https://iskills.com/wp-content/uploads/2024/03/multan.svg" alt="Lahore" />
          </div>
          <h2>Lahore – ATechSkills Headquarters</h2>
          <div className="divider"></div>
          <ul>
            <li><FaPhone /> +92-XXX-XXXXXXX</li>
            <li><FaEnvelope /> training@atechsole.com</li>
            <li>
              <FaLocationDot /> Lahore, Punjab, Pakistan
            </li>
          </ul>
        </div>

      </div>
    </div>

  );
};

export default Training;
