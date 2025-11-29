import React from 'react'
import './Intro.css'
import { FaAngleRight, FaStar } from "react-icons/fa"

const Intro = () => {
  return (
    <section className='intro-container'>
      <div className='intro'>
        <div className="intro-image">
          <img src='https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500' alt="Mustansar Riaz - CEO" />
        </div>
        <div className='intro-lines'>
          <p className='section-subtitle'> Intro ATechSkills ——— — </p>
          <h1>Welcome to ATechSkills</h1>
          <p className='section-description'>
            Powered by <b>ATechSole</b>, Pakistan's leading software development company, <b>ATechSkills</b> is your gateway to mastering <b>Development, Cybersecurity,</b> and <b>Artificial Intelligence.</b>
            Our mission? To empower beginners and professionals with practical, industry-relevant skills that unlock real career opportunities.
          </p>
          <p className='section-description'>
            What sets <b>ATechSkills</b> apart is our <b>expert-led training</b> backed by real-world experience. Led by <b>Mustansar Riaz</b>, Founder & CEO of ATechSole, our instructors bring years of industry expertise.
            With <b>hands-on projects</b> and <b>24/7 support,</b> you're never alone on your learning journey.
          </p>
          <p className='section-description'>
            Join the bootcamp that delivers not just training but <b>career transformation</b>
          </p>
        </div>
      </div>

      {/*--- Courses section ---*/}
      <div className='courses-section'>
        <div className='about-course'>
          <p className='section-subtitle'>DEVSECAI Bootcamp ——— —</p>
          <h1>Master <span>Development, Security & AI</span><br className="desktop-only" /> with Industry Experts</h1>

          <div className='trainer-profile'>
            <img src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200' alt="Trainer" />
            <div className='trainer-info'>
              <h2>Mustansar Riaz</h2>
              <p>Founder & CEO at ATechSole | Cybersecurity Expert | 10+ Years Experience</p>
            </div>
          </div>

          <p className='course-description'>
            Master the three pillars of modern tech: Full Stack Development, Cybersecurity, and Artificial Intelligence.
            Our DEVSECAI Bootcamp combines cutting-edge curriculum with hands-on projects, preparing you for high-demand careers in Pakistan's growing tech industry.
          </p>

          <div className='course-features'>
            <div className="feature-column">
              <span><FaStar /> Full Stack Development</span>
              <span><FaStar /> React & Node.js</span>
              <span><FaStar /> Database Design</span>
              <span><FaStar /> API Development</span>
              <span><FaStar /> Cloud Deployment</span>
            </div>
            <div className="feature-column">
              <span><FaStar /> Cybersecurity Fundamentals</span>
              <span><FaStar /> Network Security</span>
              <span><FaStar /> AI & Machine Learning</span>
              <span><FaStar /> Real-World Projects</span>
            </div>
          </div>
        </div>

        <div className='course-card'>
          <div className='card-image'>
            <img src='https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600' alt="Bootcamp Thumbnail" />
          </div>

          <div className='card-details'>
            <div className='duration-row'>
              <img src='https://iskills.com/wp-content/uploads/2024/03/duration-icon.svg' alt="Duration" />
              <p>Bootcamp Duration: 6 Months</p>
            </div>

            <div className='features-list'>
              <div className='feature-item'>
                <img src='https://iskills.com/wp-content/uploads/2024/03/lcd.svg' alt="icon" />
                <p>150+ Live Sessions</p>
              </div>
              <div className='feature-item'>
                <img src='https://iskills.com/wp-content/uploads/2024/03/support.svg' alt="icon" />
                <p>24/7 Support</p>
              </div>
              <div className='feature-item'>
                <img src='https://iskills.com/wp-content/uploads/2024/03/artificial-intelligence.svg' alt="icon" />
                <p>AI-Powered Learning</p>
              </div>
              <div className='feature-item'>
                <img src='https://iskills.com/wp-content/uploads/2024/03/reservation-smartphone.svg' alt="icon" />
                <p>Mobile App Access</p>
              </div>
              <div className='feature-item'>
                <img src='https://iskills.com/wp-content/uploads/2024/03/lifetime-access.svg' alt="icon" />
                <p>Lifetime Access</p>
              </div>
              <div className='feature-item'>
                <img src='https://iskills.com/wp-content/uploads/2024/03/diploma.svg' alt="icon" />
                <p>Industry Certificate</p>
              </div>
              <div className='feature-item'>
                <img src='https://iskills.com/wp-content/uploads/2024/03/money-bill-wave.svg' alt="icon" />
                <p>15 Days Money Back</p>
              </div>
            </div>

            <button className="enroll-btn-large"> Get Enrolled Now  < FaAngleRight size={13} />  </button>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Intro
