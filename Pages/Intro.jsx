import React from 'react'
import './Intro.css'
import { FaAngleRight, FaStar  } from "react-icons/fa"
const Intro = () => {
  return (
    <section className='intro-continer'> 
     <div className='intro'> 
     <img src='https://iskills.com/wp-content/uploads/2024/04/tanveer-nandla-model.webp'/>
     <div className='intro-lines'>
     <p id='introS'> Intro iSkills ——— — </p>
     <h1>Welcome to iSkills</h1>
     <p id='introP'>Established in 2017, <b>iSkills</b> is Pakistan’s leading online platform connecting<br/> learners with expert trainers in <b>AI, SEO, eCommerce,</b> and <b>Video Animation.</b> <br/>
    Our mission? To empower beginners and professionals alike with practical,
    <br/>in-demand skills that unlock real opportunities.<br/>

    <br/>What sets <b>iSkills</b> apart is our <b>proven success</b> backed by data. Thousands of
    <br/>students have achieved measurable results through our trainings. The secret?
    <br/>Our <b>24/7 support system,</b> ensuring you’re never left alone during challenging
    <br/>times.<b/>

    <br/>Join the platform that delivers not just training but <b>success-driven learning</b></p>
    
    </div>
    </div>

    {/*--- Courses section*/}
    
      <div className='courses'>
        <div className='about'>
        <p id='SigC'>Signature Courses ——— —</p>
        <h1>SEBT – <span>SEO & Digital Marketing</span> Training<br/> by Tanveer Nandla</h1>
        <div className='M-tanveer'>
        <img src='https://iskills.com/wp-content/uploads/2024/03/tanveer-nandla-profile-img.webp'/>
            <div className='inner-div'>
                <h2>M Tanveer Nandla</h2>
                 <p>SEBT – Master Trainer. 16+ Years Experienced</p>
            </div>
        </div>
        <p id='aboutP'>If you aspire to acquire a marketing skill that stands the test of time and is integral to an $80 billion<br/>
         industry, SEO is an undeniable focal point. When it comes to mastering SEO in Pakistan, there's no<br/>
          better guide than SEBT by Tanveer Nandla.</p>
          <div className='STAR'>
           <div className="starr">
                    <span><FaStar /> Niche Research</span>
                    <span><FaStar /> OnPage</span>
                    <span><FaStar /> WordPress</span>
                    <span><FaStar /> Content Writing</span>
                    <span><FaStar /> Technical SEO</span>
                  </div>
                  <div className="starr">
                    <span><FaStar />Website Design</span>
                    <span><FaStar /> Content Coverage</span>
                    <span><FaStar /> OffPage</span>
                    <span><FaStar /> Freelancing</span>
                  
                  </div>
          </div>
        </div>
        

        <div className='white-div'>
          <div className='pic-div'>
            <img src='https://iskills.com/wp-content/uploads/2024/03/signature-course-thumbnail.webp'/>
            <div className='pic-innerDiv'>
              <img src='https://iskills.com/wp-content/uploads/2024/03/duration-icon.svg'/>
              <p>Course Duration: 6 Months</p>
            </div>
            <div className='innerDiv'>
            <div className='innerdiv2'>
               <img src='https://iskills.com/wp-content/uploads/2024/03/lcd.svg'/>
               <img src='https://iskills.com/wp-content/uploads/2024/03/support.svg'/>
               <img src='https://iskills.com/wp-content/uploads/2024/03/artificial-intelligence.svg'/>
               <img src='https://iskills.com/wp-content/uploads/2024/03/reservation-smartphone.svg'/>
               <img src='https://iskills.com/wp-content/uploads/2024/03/lifetime-access.svg'/>
               <img src='https://iskills.com/wp-content/uploads/2024/03/diploma.svg'/>
               <img src='https://iskills.com/wp-content/uploads/2024/03/money-bill-wave.svg'/>
              
            </div>
            <div className='innerdiv3'>
               <p>100+ Live Lectures</p>
                <p>24/7 Support</p>
                <p>AI Support</p>
                <p>iOS/Android App Access</p>
                <p>Lifetime Access</p>
                <p>Certificate of Completion</p>
                <p>15 Days Refund Policy</p>

            </div>
            </div>
            <button className="enroll-btn1"> Get Enrolled Now  < FaAngleRight size={13} />  </button>
          
          </div>
        </div>

      </div>
     
    
     
    </section>
    
  )
}

export default Intro
