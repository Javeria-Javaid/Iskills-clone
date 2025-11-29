import React from 'react'
import Navbar from './Component/Navbar.jsx'
import Home from './Pages/Home.jsx'
import ToolsPage from './Pages/ToolsPage.jsx'
import Success from './Pages/Success.jsx'
import Blog from './Pages/Blog.jsx'
import Contact from './Pages/Contact.jsx'
import AI from './Pages/AI.jsx'
import Cybersecurity from './Pages/Cybersecurity.jsx'
import Development from './Pages/Development.jsx'
import Enroll from './Pages/Enroll.jsx'
import Courses from './Pages/Courses.jsx'
import Index from './Index.jsx'
import { Routes, Route, } from "react-router-dom";


function App() {

  return (
    <div>

      <Navbar />
      <Index />


      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/ToolsPage" element={<ToolsPage />} />
        <Route path="/Success" element={<Success />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/AI" element={<AI />} />
        <Route path="/Cybersecurity" element={<Cybersecurity />} />
        <Route path="/Development" element={<Development />} />
        <Route path="/Courses" element={<Courses />} />
        <Route path="/Enroll" element={<Enroll />} />
      </Routes>


    </div>



  )
}

export default App
