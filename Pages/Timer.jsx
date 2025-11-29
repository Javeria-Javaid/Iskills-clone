
import React, { useEffect, useRef, useState } from "react";
import './Timer.css'

const Timer = () => {

  const textReff = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setIsVisible(entry.isIntersecting));
      },
      { threshold: 0.2 }
    );

    if (textRef.current) observer.observe(textRef.current);
    return () => observer.disconnect();
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




  const [time, setTime] = useState({
    days: -30,
    hours: -12,
    minutes: -45,
    seconds: -30,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        let { days, hours, minutes, seconds } = prev;

        seconds--; // countdown

        if (seconds < -59) {
          seconds = -0;
          minutes--;
        }
        if (minutes < -59) {
          minutes = -0;
          hours--;
        }
        if (hours < -23) {
          hours = -0;
          days--;
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (

    <>
      <div className='regis'>
        <h1 ref={textRef}
          className="scroll-fill-text"
          style={{
            backgroundSize: `${fillPercent}% 100%`,
          }}
        >Next Batch Enrollment Open</h1>
        <p ref={textReff}
          className={`drop-text ${isVisible ? "visible" : ""}`}>Join DEVSECAI Bootcamp</p>
      </div>
      <section className="timer-section">
        <div className="timer-container">
          <div className="time-box">
            <h4>Days</h4>
            <span>{time.days}</span>
          </div>
          <span className="colon">:</span>
          <div className="time-box">
            <h4>Hours</h4>
            <span>{time.hours}</span>
          </div>
          <span className="colon">:</span>
          <div className="time-box">
            <h4>Minutes</h4>
            <span>{time.minutes}</span>
          </div>
          <span className="colon">:</span>
          <div className="time-box">
            <h4>Seconds</h4>
            <span>{time.seconds}</span>
          </div>
        </div>
      </section>

      <div className="support">
        <p >Meet Our Team 👋🏻 ——— —  </p>
        <h1>Expert Instructors from ATechSkills</h1>
        <p ref={textRef1}
          className="scroll-fill-text1" id="para"
          style={{
            backgroundSize: `${fillPercent1}% 100%`,
          }}>Founded by Mustansar Riaz, ATechSkills has grown into a leading tech training platform. Our DEVSECAI Bootcamp is led by
          <br /> industry experts who bring real-world experience. Learn from professionals who've built successful careers in Development, Cybersecurity, and AI.</p>

        <button className="view">View All Instructors</button>

      </div>
    </>
  );
};

export default Timer
