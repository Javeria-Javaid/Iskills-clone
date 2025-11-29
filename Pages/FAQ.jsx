import React, { useState } from "react";
import "./FAQ.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronDown } from "react-icons/fa";


const courses = [
  {
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=300",
  },
  {
    image: "https://images.unsplash.com/photo-1599658880436-c61792e70672?w=300",
  },
  {
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=300",
  },
  {
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=300",
  },
  {
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=300",
  },
  {
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=300",
  }
];

const faqData = [
  {
    question: "What is the DEVSECAI Bootcamp?",
    answer:
      "DEVSECAI is our comprehensive 6-month bootcamp covering three specialized tracks: Full Stack Development, Cybersecurity, and AI & Machine Learning. You can choose one track or combine multiple tracks based on your career goals.",
  },
  {
    question: "Who are the instructors?",
    answer:
      "Our bootcamp is led by industry experts: Mustansar Riaz (CEO & Cybersecurity Expert with 10+ years experience), Javeria Javaid (Full Stack Development Expert), and Haseeb Akmal (AI & Machine Learning Specialist).",
  },
  {
    question: "What are the prerequisites for joining?",
    answer:
      "Basic computer literacy and passion for technology are the only requirements. Our bootcamp is designed for beginners and professionals alike. No prior coding experience is necessary for the Development and AI tracks.",
  },
  {
    question: "How much does the bootcamp cost?",
    answer:
      "Please contact us for current pricing and payment plans. We offer flexible payment options including installments, early bird discounts, and group discounts.",
  },
  {
    question: "Is the bootcamp online or in-person?",
    answer:
      "We offer both online and hybrid options. Live sessions are conducted via Zoom with recorded lectures available for lifetime access. In-person sessions are available at our Lahore headquarters.",
  },
  {
    question: "Do I receive a certificate upon completion?",
    answer:
      "Yes! Upon successfully completing your track and all projects, you'll receive an industry-recognized certificate from ATechSkills, endorsed by our team of expert instructors.",
  },
  {
    question: "What support is provided during the bootcamp?",
    answer:
      "You'll receive 24/7 support through our dedicated channels, weekly Q&A sessions with instructors, peer discussion groups, career mentorship, and lifetime access to course materials.",
  },
  {
    question: "Can I switch tracks during the bootcamp?",
    answer:
      "Yes, you can switch tracks within the first month. Our advisors will help you choose the best path based on your interests and career goals.",
  },
  {
    question: "What is the class schedule?",
    answer:
      "Classes are held 3-4 times per week in the evening (7 PM - 9 PM PKT) to accommodate working professionals and students. Weekend batches are also available.",
  },
  {
    question: "Do you provide job placement assistance?",
    answer:
      "Yes! We offer career guidance, resume building, interview preparation, and connections with our network of hiring partners in Pakistan's tech industry.",
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
        <h1>Frequently Asked Questions</h1><br />
        <p id='introo'>Got questions? We've got answers. Check out our FAQs to find quick, clear information about ATechSkills' DEVSECAI Bootcamp, enrollment, and support.
          Whether you're a beginner or experienced professional, we're here to help you navigate your tech education journey.</p>
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
        <br /><h1>Didn't find what you're looking for?</h1>

        <button className="enroll"> Contact Support Now </button>
      </div>

      <div className="media">
        <p id='introS'> Trusted by Tech Community 🤝</p>
        <h1>Our Partners & Recognition</h1><br />
        <p id='introo'>ATechSkills is proud to be recognized in Pakistan's growing tech ecosystem. We collaborate with leading companies and
          <br /> organizations to provide our students with the best learning experience and career opportunities.</p>



        <div className="course-slider1">
          <Slider {...settings}>
            {courses.map((course, index) => (
              <div key={index}>
                <div className="course-image1">
                  <img src={course.image} alt="Partner" />
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div className="inTouch">
          <h1>Get in touch now!</h1><br />
          <p>Ready to start your tech career? Contact ATechSkills today via phone, WhatsApp, email, or our online form. Our team is here to guide you<br />
            on your journey to becoming a tech professional.</p>
          <div className="cont">
            <div className="msg">
              <img src='https://iskills.com/wp-content/uploads/2024/03/messanger.svg' alt="messenger" />
              <p> Chat with Messenger</p>
            </div>
            <div className="msg">
              <img src='https://iskills.com/wp-content/uploads/2024/04/call-now.svg' alt="call" />
              <p> +92-XXX-XXXXXXX </p>
            </div>
            <div className="msg">
              <img src='https://iskills.com/wp-content/uploads/2024/03/whatsapp.svg' alt="whatsapp" />
              <p> Chat with WhatsApp</p>
            </div>
          </div>

        </div>
      </div>


    </>
  );
}
