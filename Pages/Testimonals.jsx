import React, { useState } from "react";
import "./Testimonals.css";
import { FaChevronLeft, FaChevronRight, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Ahmed Hassan",
    earned: "PKR 150,000/month",
    source: "Full Stack Development",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200",
    text: "ATechSkills' DEVSECAI Bootcamp transformed my career. The hands-on projects and expert guidance from Javeria helped me land a full-stack developer role at a leading tech company in Lahore.",
  },
  {
    id: 2,
    name: "Fatima Ali",
    earned: "PKR 180,000/month",
    source: "Cybersecurity",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200",
    text: "Learning cybersecurity from Mustansar Riaz was incredible. His real-world experience and practical approach helped me secure a position as a Security Analyst. ATechSkills changed my life!",
  },
  {
    id: 3,
    name: "Bilal Khan",
    earned: "PKR 200,000/month",
    source: "AI & Machine Learning",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200",
    text: "The AI track with Haseeb Akmal was outstanding. I learned everything from basics to advanced deep learning. Now I'm working as an AI Engineer, building intelligent solutions for businesses.",
  },
  {
    id: 4,
    name: "Sara Malik",
    earned: "PKR 120,000/month",
    source: "Full Stack Development",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200",
    text: "ATechSkills provided the perfect environment to learn. The 24/7 support and lifetime access to course materials helped me master React and Node.js. Highly recommended!",
  },
  {
    id: 5,
    name: "Usman Tariq",
    earned: "PKR 160,000/month",
    source: "Cybersecurity",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200",
    text: "The DEVSECAI Bootcamp's cybersecurity track gave me practical skills I use every day. Mustansar's teaching style and industry insights are invaluable. Best investment in my career!",
  }
];

const Testimonials = () => {
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

    <div className="testimonial-container">
      <button className="arrow left" onClick={prevSlide} aria-label="Previous testimonial">
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

      <button className="arrow right" onClick={nextSlide} aria-label="Next testimonial">
        <FaChevronRight />
      </button>
    </div>

  )
}

export default Testimonials;
