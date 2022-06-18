import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./loginPage.css";
import { useGlobalContext } from "../../../context";
import useAuth from "../../../hooks/useAuth";
import LoginFetch from "./LoginFetch";

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { lang } = useGlobalContext();
  const { setAuth, persist, setPersist } = useAuth();
  const [successMessage, setSuccessMessage] = useState("");
  // const from = location.state.from.pathname || "/main";
  const [proc, setProc] = useState("");
  const [userData, setUserData] = useState({
    login: "",
    password: "",
  });
  const [success, setSuccess] = useState();
  const handleUserInput = (e) => {
    setUserData(() => {
      userData[e.target.name] = e.target.value;
      return userData;
    });
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    setProc("clicked");
    try {
      let response = await LoginFetch(userData);

      let { name, email, id } = response.data;
      const accessToken = response.data.accessToken;

      if (response.status === 200) {
        setUserData({
          login: "",
          password: "",
        });
        setAuth({ name, email, accessToken, id });
        setSuccess(true);
        navigate("/main", { replace: true });
      }
    } catch (error) {
      let message = error.response.data.message;
      setSuccessMessage(message);
      setSuccess(false);
      setUserData({
        login: "",
        password: "",
      });
    }
  };
  const togglePersist = () => {
    setPersist((prev) => !prev);
  };

  useEffect(() => {
    localStorage.setItem("persist", persist);
  }, [persist]);

  return (
    <section className="login-container">
      <h3>{lang === "En" ? "Login" : lang === "Ru" ? "Вход" : "Кіру"}</h3>
      {proc && <p>{proc}</p>}
      <form onChange={(e) => handleUserInput(e)}>
        <label>
          {lang === "En" ? "Login:" : lang === "Ru" ? "Логин:" : "Кіру:"}
          <input type="text" name="login" id="login" required />
        </label>
        <label>
          {lang === "Kz" ? "Кұпия сөз" : lang === "En" ? "Password" : "Пароль"}:
          <input type="password" name="password" id="password" required />
        </label>
        <div className="login-buttons">
          <Link to="/register">
            <p>
              {lang === "En"
                ? "Register"
                : lang === "Ru"
                ? "Регистрация"
                : "Тіркеу"}
            </p>
          </Link>

          <button className="submit-login-btn" onClick={(e) => handleLogin(e)}>
            {lang === "En" ? "Submit" : lang === "Kz" ? "Eнгізу" : "Войти"}
          </button>
        </div>
        <div className="ersistCheck">
          <input
            type="checkbox"
            id="persist"
            onChange={togglePersist}
            checked={persist}
          />
          <label htmlFor="persist">Trust this device</label>
        </div>
        {successMessage && <p className="error-message">{successMessage}</p>}
        <Link to="/password-reset" className="forgot-password">
          <p>
            {lang === "En"
              ? "Forgot password?"
              : lang === "Kz"
              ? "Құпия сөзіңізді ұмыттыңыз?"
              : "Забыли пароль?"}
          </p>
        </Link>
      </form>
    </section>
  );
};

export default LoginPage;
