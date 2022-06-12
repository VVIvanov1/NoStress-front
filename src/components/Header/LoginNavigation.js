import React from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../context";
const LoginNavigation = ({ setLoginScreen }) => {
  const navigate = useNavigate();
  const { lang } = useGlobalContext();
  const handleLogin = () => {
    setLoginScreen(false);
    navigate("/login");
  };
  const handleRegister = () => {
    setLoginScreen(false);
    navigate("/register");
  };

  return (
    <div className="login-screen">
      <h1>
        {lang === "En"
          ? "Welcome!"
          : lang === "Ru"
          ? "Добро пожаловать"
          : "Кош келдіңіз"}
      </h1>
      <div className="security-buttons">
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleRegister}>Register</button>
      </div>
    </div>
  );
};

export default LoginNavigation;
