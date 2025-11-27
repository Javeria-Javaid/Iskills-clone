import React, { useState } from "react";
import Footer from '../Component/Footer.jsx'
import "./ToolsPage.css";

const toolsData = {
  seo: [
    { id: 1, title: "Text to Speech Converter", img: "https://iskills.com/wp-content/uploads/2024/05/text-to-speech.webp" },
    { id: 2, title: "SHA256 Generator", img: "https://iskills.com/wp-content/uploads/2024/04/placeholder-post-thumbnail.webp" },
    { id: 3, title: "Free Online Word Counter", img: "https://iskills.com/wp-content/uploads/2024/04/DALL%C2%B7E-2024-05-01-01.09.48-A-modern-and-colorful-digital-workspace-featuring-a-large-vibrant-computer-screen-displaying-a-word-counter-application-with-numbers-and-text.-The-ba.webp" },
    { id: 4, title: "Free Online Word Counter", img: "https://iskills.com/wp-content/uploads/2024/04/tools-thumnail.svg" },
    { id: 5, title: "Free Online Word Counter", img: "https://iskills.com/wp-content/uploads/2024/04/tools-thumnail.svg" },
  ],
  uncategorized: [
    { id: 6, title: "Text to Speech Converter", img: "https://iskills.com/wp-content/uploads/2024/05/text-to-speech.webp" },
    { id: 7, title: "SHA256 Generator", img: "https://iskills.com/wp-content/uploads/2024/04/placeholder-post-thumbnail.webp" },
    { id: 8, title: "Free Online Word Counter", img: "https://iskills.com/wp-content/uploads/2024/04/DALL%C2%B7E-2024-05-01-01.09.48-A-modern-and-colorful-digital-workspace-featuring-a-large-vibrant-computer-screen-displaying-a-word-counter-application-with-numbers-and-text.-The-ba.webp" },
    { id: 9, title: "Free Online Word Counter", img: "https://iskills.com/wp-content/uploads/2024/04/tools-thumnail.svg" },
  ],
  writing: [
    { id: 10, title: "Free Online Word Counter", img: "https://iskills.com/wp-content/uploads/2024/04/DALL%C2%B7E-2024-05-01-01.09.48-A-modern-and-colorful-digital-workspace-featuring-a-large-vibrant-computer-screen-displaying-a-word-counter-application-with-numbers-and-text.-The-ba.webp" },
    { id: 11, title: "Free Online Word Counter", img: "https://iskills.com/wp-content/uploads/2024/04/tools-thumnail.svg" },
    { id: 12, title: "Free Online Word Counter", img: "https://iskills.com/wp-content/uploads/2024/04/tools-thumnail.svg" },
  ]
};

const ToolsPage = () => {
  const [activeCategory, setActiveCategory] = useState("seo");
  const [search, setSearch] = useState("");

  const filteredTools = toolsData[activeCategory].filter((tool) =>
    tool.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="tools-wrapper">

      <div className="seo-header">

      <h1 className="heading">iSkills SEO Tools</h1>

      <p className="sub">
        Explore our suite of SEO tools designed to enhance your digital marketing efforts.
      </p>

      <div className="search-bar">
        <span className="icon">🔍︎</span>
        <input type="text" placeholder="Search your query!" />
      </div>

    </div>
    
      <div className="buttons">
        <button 
          className={activeCategory === "seo" ? "active" : ""} 
          onClick={() => setActiveCategory("seo")}
        >
          All SEO Tools
        </button>

        <button 
          className={activeCategory === "uncategorized" ? "active" : ""} 
          onClick={() => setActiveCategory("uncategorized")}
        >
          Uncategorized
        </button>

        <button 
          className={activeCategory === "writing" ? "active" : ""} 
          onClick={() => setActiveCategory("writing")}
        >
          Writing Tools
        </button>
      </div>

      {/* TOOL CARDS */}
      <div className="tools-grid">
        {toolsData[activeCategory].map((tool) => (
          <div key={tool.id} className="card">
             <img src={tool.img} className="card-img" alt="tool" />
           
             <p className="card-title">{tool.title}</p>
          </div>
        ))}
         
      </div>
         
        <h1>Looking for a specific tool?</h1><br/>
        <p className="subb">If you are looking for a specific tool with functionalities, Write to us now, we will try our best to facilitate your request.</p>
        <button className="contact-btn">Contact Now</button>

        <Footer/>

    </div>
  );
};

export default ToolsPage;
