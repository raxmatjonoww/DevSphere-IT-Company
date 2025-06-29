import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./Containers/Home/Home";
import Services from "./Containers/Services/Services";
import Works from "./Containers/Works/Works";
import Portfolio from "./Containers/Portfolio/Portfolio";
import Blog from "./Containers/Blog/Blog";
import BlogPost from "./Containers/Blog/BlogPost";
import Contact from "./Containers/Contact/Contact";
import AdminPortfolio from "./Pages/AdminPortfolio";
import AdminPanel from "./Pages/AdminPanel";
import Login from "./Pages/Login";
import Navbar from "./Components/Navbar/Navbar";
import AdminProtectedRoute from "./Pages/AdminProtectedRoute";
import AdminDashboard from "./Pages/AdminDashboard";
import Footer from "./Components/Footer/Footer";
import Testimonials from "./Containers/Testimonials/Testimonials";
import Team from "./Containers/Team/Team";
import FAQ from "./Containers/FAQ/FAQ";
import ScrollToTop from "./Components/ScrollToTop";
import "./App.css";

function generateStars(count = 120) {
  const stars = [];
  for (let i = 0; i < count; i++) {
    const style = {
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      width: `${Math.random() * 2 + 1}px`,
      height: `${Math.random() * 2 + 1}px`,
      animationDuration: `${Math.random() * 3 + 2}s`,
    };
    stars.push(<div key={i} className="star" style={style} />);
  }
  return stars;
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="app-loading-overlay">
        <div className="top-snake-loader" />
        <div className="app-spinner" />
      </div>
    );
  }

  return (
    <Router>
      <div className="stars-wrapper">{generateStars()}</div>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Services />
              <Works />
              <Testimonials />
              <Team />
              <FAQ />
              <Contact />
            </>
          }
        />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/admin"
          element={
            <AdminProtectedRoute>
              <AdminDashboard />
            </AdminProtectedRoute>
          }
        />
        <Route
          path="/admin/portfolio"
          element={
            <AdminProtectedRoute>
              <AdminPortfolio />
            </AdminProtectedRoute>
          }
        />
        <Route
          path="/admin/blogs"
          element={
            <AdminProtectedRoute>
              <AdminPanel />
            </AdminProtectedRoute>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
