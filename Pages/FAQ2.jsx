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
    question: "Is this training online or in-person?",
    answer:
      "This training is exclusively online. Classes are held twice a week via our portal and mobile apps. You can participate through a desktop computer, laptop, our Android or iOS app, or mobile browsers.",
  },
  {
    question: "I’m new to the online field. Can I join?",
    answer:
      "Certainly! Past success stories indicate that while experience isn't required, commitment, hard work, and dedication are. It's crucial you're able to read, write, communicate in English, and comprehend our teachings.e a certificate from iSkills.",
  },
  {
    question: "Is it so easy that your students earn substantial money?",
    answer:
      "No, it's not easy. Our successful students are sharp, hardworking, consistent, and have diligently applied what they've learned. We aim to impart our knowledge in the most straightforward, supportive manner, but success isn't guaranteed for everyone.",
  },
  {
    question: "Does the training guarantee financial success?",
    answer:
      "The training equips you with the skills needed for various online endeavors. However, we don’t promise instant riches or suggest that everyone will become a millionaire overnight. Effort and application are crucial.",
  },
  {
    question: "Are 100% of your students successful?",
    answer:
      "No, but a significant number of them have achieved financial success. Some have earned over PKR 5 Crore, while others earn more than 1 lac per month. A few are still navigating their way, and some have sought refunds without attending classes. Thus, a 100% success rate isn't feasible, but we ensure top-tier knowledge delivery, support, and motivation.",
  },
  {
    question: "How much time should I invest for potential success?",
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

       <button className="enrolll"> Contact Now </button>
    </div>

     
</>
  );
}
