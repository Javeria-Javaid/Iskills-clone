
import React, { useState } from "react";
import "./Testimonals.css"
import { FaChevronLeft, FaChevronRight, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Ayesha Siddiqui",
    earned: "PKR 140,000/month",
    source: "AI & Machine Learning",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200",
    text: "ATechSkills empowered me to break into AI. The supportive environment and expert instruction from Haseeb helped me build confidence and land my dream job as an ML Engineer.",
  },
  {
    id: 2,
    name: "Zainab Ahmed",
    earned: "PKR 130,000/month",
    source: "Full Stack Development",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200",
    text: "Javeria's teaching style made complex concepts easy to understand. ATechSkills' DEVSECAI Bootcamp gave me the skills and confidence to pursue a career in web development.",
  },
  {
    id: 3,
    name: "Hira Malik",
    earned: "PKR 170,000/month",
    source: "Cybersecurity",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200",
    text: "Learning cybersecurity at ATechSkills was life-changing. The hands-on labs and real-world scenarios prepared me perfectly for my role as a Security Consultant.",
  },
  {
    id: 4,
    name: "Mariam Khan",
    earned: "PKR 125,000/month",
    source: "Full Stack Development",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200",
    text: "ATechSkills provided the perfect learning environment. The bootcamp's structured curriculum and supportive instructors helped me transition into tech successfully.",
  },
  {
    id: 5,
    name: "Sana Tariq",
    earned: "PKR 155,000/month",
    source: "AI & Machine Learning",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200",
    text: "The AI track exceeded my expectations. ATechSkills' focus on practical projects and industry-relevant skills helped me secure a position at a leading tech company.",
  }
];


const Testimonial2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };
  return (
    <div className="female-testimonial">
      <div className="about-female">
        <p id='about-F'> Success Stories ✨ ——— — </p>
        <h1>Celebrating Our Students' Achievements!</h1>
        <p id='aboutF-P'>ATechSkills is proud to empower students from all backgrounds to build successful careers in technology. Our DEVSECAI Bootcamp provides equal opportunities for everyone to excel in Development, Cybersecurity, and AI.</p>
      </div>
      <div className="testimonial-container">
        <button className="arrow1 left" onClick={prevSlide} aria-label="Previous testimonial">
          <FaChevronLeft />
        </button>

        <div className="testimonial-slider">
          <div
            className="testimonial-track"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {testimonials.map((t) => (
              <div className="testimonial-card" key={t.id}>
                <div className="profile-section">
                  <img src={t.image} alt={t.name} className="profile-img" />
                  <div className="profile-info">
                    <h3>{t.name}</h3>
                    <p>Earning: <span>{t.earned}</span></p>
                    <p>Track: {t.source}</p>
                  </div>
                </div>

                <div className="quote-section">
                  <FaQuoteLeft className="quote-icon left-quote" />
                  <p>{t.text}</p>
                  <FaQuoteRight className="quote-icon right-quote" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className="arrow1 right" onClick={nextSlide} aria-label="Next testimonial">
          <FaChevronRight />
        </button>
      </div>
    </div>
  )
}

export default Testimonial2
