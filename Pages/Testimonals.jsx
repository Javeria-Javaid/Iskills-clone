import React, { useState } from "react";
import "./Testimonals.css";
import { FaChevronLeft, FaChevronRight, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Faisal Fateh Khan",
    earned: "–",
    source: "Blogging",
    image: "https://iskills.com/wp-content/uploads/2025/01/Faisal-Fateh-Khan.jpg",
    text: "Faisal Fateh Khan, a student from the SEBT-7 batch at iSkills Pakistan, has achieved outstanding success with the guidance and mentorship provided by the team.",
  },
  {
    id: 2,
    name: "Syed Shaban Gillani",
    earned: "-",
    source: "Freelancing",
    image: "https://iskills.com/wp-content/uploads/2025/01/83059302_1779673302175865_3713603205263515712_n.jpg",
    text: " Syed Shaban Gillani built her freelancing career through iSkills mentorship and now earns consistently from international clients.",
  },
  {
    id: 3,
    name: "Imran Ahmed",
    earned: "-",
    source: "Blogging",
    image: "https://iskills.com/wp-content/uploads/2025/01/441507169_10229500861979312_594136384836286616_n-1.webp",
    text: "Imran Ahmed, a student of iSkills pakistan in the SEBT batch, has acheived remarkable success under tthe guidance of..",
  },
  {
    id: 4,
    name: "Hamza Jahangir",
    earned: "-",
    source: "Freelancing",
    image: "https://iskills.com/wp-content/uploads/2025/01/53d40229-09e9-437b-860b-d533db32d89f.jpeg",
    text: "Imran Ahmed, a briliant student of iSkills pakistan in the SEBT batch, mentored byy Tanveer Nadla, has achieved remarkable success ..",
  },
  {
    id: 5,
    name: "Hamza yaseen ",
    earned: "-",
    source: "Drop-shipping",
    image: "https://iskills.com/wp-content/uploads/2025/01/459572829_2225907071122221_1930914950131812498_n.jpg",
    text: "Hamza, a student of iSkills pakistan in the SEBT batch, has acheived remarkable success under tthe guidance of..",
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
                  <p>Earned: <span>{t.earned}</span></p>
                  <p>Source: {t.source}</p>
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
