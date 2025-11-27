
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
    days: -335,
    hours: -9,
    minutes: -52,
    seconds: -25,
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
        <h1  ref={textRef}
      className="scroll-fill-text"
      style={{
        backgroundSize: `${fillPercent}% 100%`,
      }}
      >Registration are Open</h1>
        <p ref={textReff}
      className={`drop-text ${isVisible ? "visible" : ""}`}>Enroll Now</p>
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
      <p >Say hi 👋🏻 ——— —  </p>
      <h1>Our Supporting Trainers</h1>
      <p ref={textRef1}
      className="scroll-fill-text1" id="para"
      style={{
        backgroundSize: `${fillPercent1}% 100%`,
      }}>M Tanveer Nandla began as a one-man army, but today, he leads a team of highly skilled students who’ve
      <br/> mastered their respective micro skills.Meet our main trainers below and learn from the best in the industry.</p>
      
      <button className="view">View All</button>

    </div>
    </>
  );
};

export default Timer
