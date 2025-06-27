import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from '../pages/Home';
import About from '../pages/About';
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import ScrollToTop from '../components/ScrollToTop';
import Navbar from "../components/navbar"; 
import Footer from "../components/footer"; 
import "../index.css";

const AppRoutes = () => {
  return (
    <div className=''>
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
    </div>
  );
};

export default AppRoutes;
