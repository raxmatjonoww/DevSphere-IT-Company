import React from "react";
import './App.css'; 
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Containers/Home/Home"; // Home komponenti
import Services from './Containers/Services/Services';
import Works from './Containers/Works/Works';
import Team from "./Containers/Team/Team";
import Contact from "./Containers/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />

      {/* Asosiy bo‘limlar */}
      <Home />
      <Services/>
      <Works />
      <Team />
      <Contact />
    </div>
  );
}

export default App;
