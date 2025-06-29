import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { FaPhoneAlt, FaUserShield, FaSignOutAlt } from "react-icons/fa";
import { supabase } from "../../supabaseClient";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";
  const [user, setUser] = useState(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user);
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
    });

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  const handleToggle = () => setIsOpen(!isOpen);
  const handleClose = () => setIsOpen(false);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
    setUser(null);
  };

  const isAdmin = user?.email === "devsphere.uz@gmail.com";

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <HashLink smooth to="/" className="logo" onClick={handleClose}>
          DevSphere
        </HashLink>

        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          {!isAdmin ? (
            <>
              <li><HashLink smooth to="/#home" className="nav-link" onClick={handleClose}>Главная</HashLink></li>
              <li className="divider">|</li>
              <li><HashLink smooth to="/#services" className="nav-link" onClick={handleClose}>Услуги</HashLink></li>
              <li className="divider">|</li>
              <li><HashLink smooth to="/#works" className="nav-link" onClick={handleClose}>Работы</HashLink></li>
              <li className="divider">|</li>
              <li><HashLink smooth to="/#testimonials" className="nav-link" onClick={handleClose}>Отзывы</HashLink></li>
              <li className="divider">|</li>
              <li><HashLink smooth to="/#team" className="nav-link" onClick={handleClose}>О нас</HashLink></li>
              <li className="divider">|</li>
              <li><HashLink smooth to="/#faq" className="nav-link" onClick={handleClose}>FAQ</HashLink></li>
              <li className="divider">|</li>
              <li><HashLink smooth to="/#contact" className="nav-link" onClick={handleClose}>Контакты</HashLink></li>
              <li className="divider">|</li>
              <li><Link to="/portfolio" className="nav-link" onClick={handleClose}>Портфолио</Link></li>
              <li className="divider">|</li>
              <li><Link to="/blog" className="nav-link" onClick={handleClose}>Блог</Link></li>
              <li className="divider">|</li>
              <li>
                <Link to="/login" className="nav-link" onClick={handleClose} title="Admin Login">
                  <FaUserShield />
                </Link>
              </li>
              <li className="divider">|</li>
              <li>
                <a href="tel:+998999909569" className="call-icon" aria-label="Позвонить">
                  <FaPhoneAlt />
                </a>
              </li>
            </>
          ) : (
            <>
              <li><Link to="/admin/portfolio" className="nav-link" onClick={handleClose}>Portfolio</Link></li>
              <li className="divider">|</li>
              <li><Link to="/admin/blogs" className="nav-link" onClick={handleClose}>Blog</Link></li>
              <li className="divider">|</li>
              <li>
                <Link to="/admin" className="nav-link" onClick={handleClose} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <FaUserShield /> Admin
                </Link>
              </li>
              <li className="divider">|</li>
              <li>
                <button
                  onClick={handleLogout}
                  className="nav-link"
                  style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: "6px" }}
                >
                  <FaSignOutAlt /> Logout
                </button>
              </li>
            </>
          )}
        </ul>

        <div className="burger" onClick={handleToggle}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
