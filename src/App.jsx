import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero';
import AboutSection from './Components/AboutSection/AboutSection';
import ServicesSection from './Components/ServicesSection/ServicesSection';
import PortfolioSection from './Components/PortfolioSection/PortfolioSection';
import WhyChooseUsSection from './Components/WhyChooseUsSection/WhyChooseUsSection';
import TestimonialsSection from './Components/TestimonialsSection/TestimonialsSection';
import About from './Page/About/About';
import Services from './Page/Services/Services'
import WebDevelopment from './Page/Services/WebDevelopment/WebDevelopment';
import Portfolio from './Page/Portfolio/Portfolio';
import FitnessClubWebsite from './Page/Portfolio/FitnessClubWebsite/FitnessClubWebsite';
import Contact from './Page/Contact/Contact';
function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <AboutSection />
                <ServicesSection />
                <PortfolioSection />
                <WhyChooseUsSection />
                <TestimonialsSection />
              </>
            } />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} /> 
            <Route path="/services/web-development" element={<WebDevelopment />} /> 
            <Route path="/portfolio" element={<Portfolio />} /> 
            <Route path="/portfolio/fitness-club" element={<FitnessClubWebsite />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;