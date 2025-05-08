import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
