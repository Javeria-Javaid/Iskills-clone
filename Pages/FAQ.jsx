import React, { useState } from "react";
import "./FAQ.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronDown } from "react-icons/fa";


const courses = [
  {
    image: "https://iskills.com/wp-content/uploads/2024/04/yahoo.webp",
  },
  {
    image: "https://iskills.com/wp-content/uploads/2024/04/dg-skills.webp",
  },
   {
    image: "https://iskills.com/wp-content/uploads/2024/04/propakistani.webp",
  },
  {
    image: "https://iskills.com/wp-content/uploads/2024/04/ptv.webp",
  },
    {
    image: "https://iskills.com/wp-content/uploads/2024/04/forbes-india.webp",
  },
  {
    image: "https://iskills.com/wp-content/uploads/2024/04/samaa.webp",
  },
   {
    image: "https://iskills.com/wp-content/uploads/2024/04/dg-skills.webp",
  },
  {
    image: "https://iskills.com/wp-content/uploads/2024/04/urdupoint.webp",
  },
  {
    image:"https://iskills.com/wp-content/uploads/2024/04/ary.webp",
  }
];

const faqData = [
  {
    question: "How can I contact iSkills for more information?",
    answer:
      "You can reach us by phone, email, or through our website's contact form. All contact details are listed on the ‘Contact Us’ page.",
  },
  {
    question: "Do I receive a certificate upon completing a course?",
    answer:
      "Yes, upon successfully completing your course and meeting all requirements, you’ll receive a certificate from iSkills.",
  },
  {
    question: "Is there a refund policy if I decide to drop a course?",
    answer:
      "Yes, iSkills offers a refund policy. Please review the refund policy section on our website for detailed terms and conditions.",
  },
  {
    question: "What are the payment options for course fees?",
    answer:
      "We accept payments through multiple channels including bank transfer, Easypaisa, JazzCash, and online card payments.",
  },
  {
    question: "How do the live sessions work?",
    answer:
      "Live sessions are conducted online via Zoom or Google Meet, allowing you to interact directly with instructors and peers in real-time.",
  },
  {
    question: "Are there any prerequisites for joining iSkills courses?",
    answer:
      "Most courses are beginner-friendly. However, some advanced courses may have basic skill prerequisites mentioned in their details.",
  },
  {
    question: "What support will I receive during my training?",
    answer:
      "You’ll receive complete support from trainers and our technical team, including Q&A sessions, discussion groups, and mentorship.",
  },
  {
    question: "What Training programs does iSkills offer?",
    answer:
      "iSkills offers various online programs including Freelancing, Blogging, Dropshipping, Amazon, and Digital Marketing.",
  },
  {
    question: "How do I enroll in a course at iSkills?",
    answer:
      "Visit our website, choose your desired course, and click the enroll button. You’ll be guided through a simple registration and payment process.",
  },
  {
    question: "Can I take more than one course at a time?",
    answer:
      "Yes, you can enroll in multiple courses simultaneously depending on your schedule and learning capacity.",
  },
];

export default function FAQSection() {

    const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000, 
    speed: 1800,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };
  
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
    <div className="faq-container">
        <p id='introS'> FAQ's ——— — </p>
             <h1>Frequently Asked Questions</h1><br/>
             <p id='introo'>Got questions? We’ve got answers. Check out our FAQs to find quick, clear information on our courses/trainings, enrollment, and support at iSkills.
              Whether you're a newbie or a seasoned professional, we're here to help you navigate your educational journey with us.</p>
      {faqData.map((faq, index) => (
        <div
          key={index}
          className={`faq-item ${openIndex === index ? "active" : ""}`}
          onClick={() => toggleFAQ(index)}
        >
          <div className="faq-question">
            <h3>{faq.question}</h3>
            <FaChevronDown className="arrow-icon" />
          </div>
          <div
            className="faq-answer"
            style={{
              maxHeight: openIndex === index ? "200px" : "0",
              transition: "max-height 0.5s ease",
            }}
          >
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
      <br/><h1>Didn’t find what you’re looking for?</h1>

       <button className="enroll"> Contact to Support Now </button>
    </div>

        <div className="media">
         <p id='introS'> We're every where 🤝</p>
             <h1>As Seen On</h1><br/>
             <p id='introo'>Explore where iSkills has made headlines! Our commitment to excellence in digital marketing education has been featured on various prestigious platforms and
             <br/> media outlets. See us on:</p>

      

      <div className="course-slider1">
        <Slider {...settings}>
        {courses.map((course) => (
         
            <div className="course-image1">
              <img src={course.image} alt={course.title} />
            </div>
        ))}
      </Slider>
      </div>

      <div className="inTouch">
        <h1>Get in touch now!</h1><br/>
        <p>Need more information or ready to enroll? Contact us today via phone, WhatsApp, email, or our online form. We’re here to help guide you on your journey with<br/>
        iSkills.</p>
        <div className="cont">
        <div className="msg">
            <img src='https://iskills.com/wp-content/uploads/2024/03/messanger.svg'/>
            <p> Chat with Messenger</p>
        </div>
          <div className="msg">
            <img src='https://iskills.com/wp-content/uploads/2024/04/call-now.svg'/>
            <p> +92-300-0451111 </p>
        </div>
          <div className="msg">
            <img src='https://iskills.com/wp-content/uploads/2024/03/whatsapp.svg'/>
            <p> Chat with WhatsApp</p>
        </div>
        </div>

      </div>
    </div>

     
</>
  );
}
