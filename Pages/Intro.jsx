import React from 'react'
import './Intro.css'
import { FaAngleRight, FaStar } from "react-icons/fa"

const Intro = () => {
  return (
    <section className='intro-container'>
      <div className='intro'>
        <div className="intro-image">
          <img src='https://iskills.com/wp-content/uploads/2024/04/tanveer-nandla-model.webp' alt="Tanveer Nandla" />
        </div>
        <div className='intro-lines'>
          <p className='section-subtitle'> Intro iSkills ——— — </p>
          <h1>Welcome to iSkills</h1>
          <p className='section-description'>
            Established in 2017, <b>iSkills</b> is Pakistan’s leading online platform connecting learners with expert trainers in <b>AI, SEO, eCommerce,</b> and <b>Video Animation.</b>
            Our mission? To empower beginners and professionals alike with practical, in-demand skills that unlock real opportunities.
          </p>
          <p className='section-description'>
            What sets <b>iSkills</b> apart is our <b>proven success</b> backed by data. Thousands of students have achieved measurable results through our trainings. The secret?
            Our <b>24/7 support system,</b> ensuring you’re never left alone during challenging times.
          </p>
          <p className='section-description'>
            Join the platform that delivers not just training but <b>success-driven learning</b>
          </p>
        </div>
      </div>

      {/*--- Courses section ---*/}
      <div className='courses-section'>
        <div className='about-course'>
          <p className='section-subtitle'>Signature Courses ——— —</p>
          <h1>SEBT – <span>SEO & Digital Marketing</span> Training<br className="desktop-only" /> by Tanveer Nandla</h1>

          <div className='trainer-profile'>
            <img src='https://iskills.com/wp-content/uploads/2024/03/tanveer-nandla-profile-img.webp' alt="Trainer" />
            <div className='trainer-info'>
              <h2>M Tanveer Nandla</h2>
              <p>SEBT – Master Trainer. 16+ Years Experienced</p>
            </div>
          </div>

          <p className='course-description'>
            If you aspire to acquire a marketing skill that stands the test of time and is integral to an $80 billion industry, SEO is an undeniable focal point. When it comes to mastering SEO in Pakistan, there's no better guide than SEBT by Tanveer Nandla.
          </p>

          <div className='course-features'>
            <div className="feature-column">
              <span><FaStar /> Niche Research</span>
              <span><FaStar /> OnPage</span>
              <span><FaStar /> WordPress</span>
              <span><FaStar /> Content Writing</span>
              <span><FaStar /> Technical SEO</span>
            </div>
            <div className="feature-column">
              <span><FaStar />Website Design</span>
              <span><FaStar /> Content Coverage</span>
              <span><FaStar /> OffPage</span>
              <span><FaStar /> Freelancing</span>
            </div>
          </div>
        </div>

        <div className='course-card'>
          <div className='card-image'>
            <img src='https://iskills.com/wp-content/uploads/2024/03/signature-course-thumbnail.webp' alt="Course Thumbnail" />
          </div>

          <div className='card-details'>
            <div className='duration-row'>
              <img src='https://iskills.com/wp-content/uploads/2024/03/duration-icon.svg' alt="Duration" />
              <p>Course Duration: 6 Months</p>
            </div>

            <div className='features-list'>
              <div className='feature-item'>
                <img src='https://iskills.com/wp-content/uploads/2024/03/lcd.svg' alt="icon" />
                <p>100+ Live Lectures</p>
              </div>
              <div className='feature-item'>
                <img src='https://iskills.com/wp-content/uploads/2024/03/support.svg' alt="icon" />
                <p>24/7 Support</p>
              </div>
              <div className='feature-item'>
                <img src='https://iskills.com/wp-content/uploads/2024/03/artificial-intelligence.svg' alt="icon" />
                <p>AI Support</p>
              </div>
              <div className='feature-item'>
                <img src='https://iskills.com/wp-content/uploads/2024/03/reservation-smartphone.svg' alt="icon" />
                <p>iOS/Android App Access</p>
              </div>
              <div className='feature-item'>
                <img src='https://iskills.com/wp-content/uploads/2024/03/lifetime-access.svg' alt="icon" />
                <p>Lifetime Access</p>
              </div>
              <div className='feature-item'>
                <img src='https://iskills.com/wp-content/uploads/2024/03/diploma.svg' alt="icon" />
                <p>Certificate of Completion</p>
              </div>
              <div className='feature-item'>
                <img src='https://iskills.com/wp-content/uploads/2024/03/money-bill-wave.svg' alt="icon" />
                <p>15 Days Refund Policy</p>
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
