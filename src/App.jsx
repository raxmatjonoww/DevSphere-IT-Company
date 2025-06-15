import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

import Navbar from "./Components/Navbar/Navbar";
import Home from "./Containers/Home/Home";
import Services from './Containers/Services/Services';
import Works from './Containers/Works/Works';
import Team from "./Containers/Team/Team";
import Contact from "./Containers/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Portfolio from "./Containers/Portfolio/Portfolio";

function App() {
  const [stars, setStars] = useState([]);

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

  return (
    <Router>
      <div className="App">
        {/* Fon yulduzchalar */}
        <div className="stars-wrapper">{stars}</div>

        {/* Navigatsiya */}
        <Navbar />

        {/* Sahifalar */}
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <Services />
              <Works />
              <Team />
              <Contact />
            </>
          } />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>

        {/* Footer har sahifada bo‘ladi */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
