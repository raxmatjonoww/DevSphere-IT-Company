import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../supabaseClient";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // 👈 ikonlar
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (email !== "devsphere.uz@gmail.com") {
      alert("Только администратор может войти");
      setLoading(false);
      return;
    }

    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      alert("Ошибка: " + error.message);
      setLoading(false);
    } else {
      navigate("/admin");
    }
  };

  return (
    <>
      {loading && (
        <div className="app-loading-overlay">
          <div className="app-spinner"></div>
        </div>
      )}

      <div className="login-page">
        <form onSubmit={handleLogin} className="login-form">
          <h2>Вход администратора</h2>

          <input
            type="email"
            placeholder="Электронная почта"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <div className="password-input-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span
              className="toggle-password"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <button type="submit" disabled={loading}>
            Войти
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
