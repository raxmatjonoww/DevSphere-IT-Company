// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./Containers/Home/Home";
// import Services from "./Containers/Services/Services";
// import Works from "./Containers/Works/Works";
// import Portfolio from "./Containers/Portfolio/Portfolio";
// import Blog from "./Containers/Blog/Blog";
// import BlogPost from "./Containers/Blog/BlogPost";
// import Contact from "./Containers/Contact/Contact";
// import AdminPortfolio from "./Pages/AdminPortfolio";
// import AdminPanel from "./Pages/AdminPanel";
// import Login from "./Pages/Login";
// import Navbar from "./Components/Navbar/Navbar";
// import AdminProtectedRoute from "./Pages/AdminProtectedRoute";
// import AdminDashboard from "./Pages/AdminDashboard";
// import "./App.css"; // Import your global styles

// function App() {
//   return (
//     <Router>
//         <Navbar/>
//       <Routes>
//         <Route path="/" element={<><Home /><Services /><Works /><Contact /></>} />
//         <Route path="/portfolio" element={<Portfolio />} />
//         <Route path="/blog" element={<Blog />} />
//         <Route path="/blog/:id" element={<BlogPost />} />
//         <Route path="/login" element={<Login />} />

//         {/* Admin Protected Routes */}
//         <Route
//           path="/admin/portfolio"
//           element={
//             <AdminProtectedRoute>
//               <AdminPortfolio />
//             </AdminProtectedRoute>
//           }
//         />

//         <Route
//           path="/admin/blogs"
//           element={
//             <AdminProtectedRoute>
//               <AdminPanel />
//             </AdminProtectedRoute>
//           }
//         />
//       </Routes>
//       <Route
//   path="/admin"
//   element={
//     <AdminProtectedRoute>
//       <AdminDashboard />
//     </AdminProtectedRoute>
//   }
// />
//     </Router>
//   );
// }

// export default App;


// src/App.jsx

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Bosh sahifa */}
        <Route
          path="/"
          element={
            <>
              <Home />
              <Services />
              <Works />
              <Contact />
            </>
          }
        />

        {/* Mijozlar uchun sahifalar */}
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/login" element={<Login />} />

        {/* Admin uchun himoyalangan sahifalar */}
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
    </Router>
  );
}

export default App;
