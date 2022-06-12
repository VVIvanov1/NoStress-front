import React from "react";
import "./registerPage.css";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../../context";
import "./loginPage.css";

const RegisterPage = () => {
  const { lang } = useGlobalContext();
  return (
    <section className="login-container">
      <h3>
        {lang === "En" ? "Register" : lang === "Ru" ? "Регистрация" : "Тіркеу"}
      </h3>
      <form>
        <label>
          {lang === "En" ? "Name" : lang === "Ru" ? "Имя" : "Аты"}

          <input type="text" name="name" id="name" required />
        </label>
        <label>
          {lang === "En"
            ? "Email"
            : lang === "Ru"
            ? "Электронная почта"
            : "Электрондық пошта"}
          <input type="email" name="email" id="email" required />
        </label>
        <label>
          {lang === "En" ? "Password" : lang === "Ru" ? "Пароль" : "Құпия сөз"}
          <input type="password" name="password" id="password" required />
        </label>
        <label>
          {lang === "En"
            ? "Confirm password"
            : lang === "Ru"
            ? "Повторите пароль"
            : "Құпия сөзді қайталаңыз"}
          <input type="password" name="password2" id="password2" required />
        </label>
        <div className="login-buttons">
          .<button className="submit-login-btn">Submit</button>
        </div>
      </form>
    </section>
  );
};

export default RegisterPage;
