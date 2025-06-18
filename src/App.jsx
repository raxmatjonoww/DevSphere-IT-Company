import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

import Navbar from "./Components/Navbar/Navbar";
import Home from "./Containers/Home/Home";
import Services from './Containers/Services/Services';
import Works from "./Containers/Works/Works";
import Team from "./Containers/Team/Team";
import Contact from "./Containers/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Portfolio from "./Containers/Portfolio/Portfolio";
import Testimonials from "./Containers/Testimonials/Testimonials";
import FAQ from "./Containers/FAQ/FAQ";

function App() {
  const [stars, setStars] = useState([]);
  const [loading, setLoading] = useState(true); // 🔁 loading state

  useEffect(() => {
    // ── Loading spinner uchun kichik tizim vaqtini qo'shamiz
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // 1.5 soniya - demo uchun

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const totalStars = 80;
    const starElements = [];
    for (let i = 0; i < totalStars; i++) {
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      const size = Math.random() * 2 + 1;
      const delay = Math.random() * 5;
      starElements.push(
        <div
          key={i}
          className="star"
          style={{
            left: `${left}%`,
            top: `${top}%`,
            width: `${size}px`,
            height: `${size}px`,
            animationDelay: `${delay}s`,
          }}
        />
      );
    }
    setStars(starElements);
  }, []);

  if (loading) {
    return (
      <div className="app-loading-overlay">
        <div className="app-spinner"></div>
      </div>
    );
  }

  return (
    <Router>
      <div className="App">
        <div className="stars-wrapper">{stars}</div>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <Services />
              <Works />
              <Testimonials />
              <Team />
              <FAQ />
              <Contact />
            </>
          } />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
