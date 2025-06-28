import React, { useEffect, useState, useRef } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigationType,
  useLocation
} from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import toast, { Toaster } from "react-hot-toast";
import ReactGA from "react-ga4";
import "./App.css";

import Navbar from "./Components/Navbar/Navbar";
import Home from "./Containers/Home/Home";
import Services from "./Containers/Services/Services";
import Works from "./Containers/Works/Works";
import Team from "./Containers/Team/Team";
import Contact from "./Containers/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Portfolio from "./Containers/Portfolio/Portfolio";
import Testimonials from "./Containers/Testimonials/Testimonials";
import FAQ from "./Containers/FAQ/FAQ";
import Blog from "./Containers/Blog/Blog";
import BlogPost from "./Containers/Blog/BlogPost"; // ✅

const GA_MEASUREMENT_ID = "G-XXXXXXXXXX";

function GAListener() {
  const location = useLocation();
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: location.pathname + location.search
    });
  }, [location]);
  return null;
}

function AppContent() {
  const ref = useRef(null);
  const navigationType = useNavigationType();

  useEffect(() => {
    ReactGA.initialize(GA_MEASUREMENT_ID);
  }, []);

  useEffect(() => {
    ref.current?.continuousStart();
    const timer = setTimeout(() => ref.current?.complete(), 800);
    return () => clearTimeout(timer);
  }, [navigationType]);

  return (
    <>
      <LoadingBar color="#376fff" ref={ref} height={3} />
      <Toaster position="top-center" reverseOrder={false} />
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
            <Contact toast={toast} />
          </>
        } />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} /> {/* ✅ */}
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  const [stars, setStars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const arr = [];
    for (let i = 0; i < 100; i++) {
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      const size = Math.random() * 2 + 1;
      const delay = Math.random() * 5;
      arr.push(
        <div
          key={i}
          className="star"
          style={{
            left: `${left}%`,
            top: `${top}%`,
            width: `${size}px`,
            height: `${size}px`,
            animationDelay: `${delay}s`
          }}
        />
      );
    }
    setStars(arr);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
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
      <GAListener />
      <div className="App">
        <div className="stars-wrapper">{stars}</div>
        <AppContent />
      </div>
    </Router>
  );
}

export default App;
