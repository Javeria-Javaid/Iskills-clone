
import React, { useState } from "react";
import "./Testimonals.css"
import { FaChevronLeft, FaChevronRight, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Nafia Memon",
    earned: "–",
    source: "Blogging",
    image: "https://iskills.com/wp-content/uploads/2025/01/Female-9.webp",
    text: "Nafia Memon, a student from the SEBT-7 batch at iSkills Pakistan, has achieved outstanding success with the guidance and mentorship provided by the team.",
  },
  {
    id: 2,
    name: "Iqra Marium",
    earned: "-",
    source: "Freelancing",
    image: "https://iskills.com/wp-content/uploads/2025/01/Female-9.webp",
    text: " Iqra Marium built her freelancing career through iSkills mentorship and now earns consistently from international clients.",
  },
  {
    id: 3,
    name: "Shazia Meer",
    earned: "500000",
    source: "Freelancing",
    image: "https://iskills.com/wp-content/uploads/2025/01/Female-9.webp",
    text: "Shazia Meer, a student of iSkills pakistan in the SEBT batch, has acheived remarkable success under tthe guidance of..",
  },
  {
    id: 4,
    name: "Neelum Shehzadi",
    earned: "7200000",
    source: "Freelancing",
    image: "https://iskills.com/wp-content/uploads/2025/01/Female-9.webp",
    text: "Neelum Shehzadi, a briliant student of iSkills pakistan in the SEBT batch, mentored byy Tanveer Nadla, has achieved remarkable success ..",
  },
  {
    id: 5,
    name: "MehMal Baloch",
    earned: "-",
    source: "Drop-shipping",
    image: "https://iskills.com/wp-content/uploads/2025/01/Female-9.webp",
    text: "MehMal Baloch, a student of iSkills pakistan in the SEBT batch, has acheived remarkable success under tthe guidance of..",
  }
];


const Testimonial2 = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

  // Ensure these functions are declared BEFORE they are used in JSX
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
       <p id='about-F'> iSkills Shines ✨ ——— — </p>
             <h1>Celebrating Our Female Stars' Wins!</h1><br/>
             <p id='aboutF-P'>Anas ibn Malik reported: The Messenger of Allah, PBUH, said, “Seeking knowledge is an obligation upon every Muslim (Men & Women).” Sunan Ibn Mājah 224 </p>
      </div>
    <div className="testimonial-container">
      <button className="arrow1 left" onClick={prevSlide}>
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

      <button className="arrow1 right" onClick={nextSlide}>
        <FaChevronRight />
      </button>
    </div>
    </div>
  )
}

export default Testimonial2
