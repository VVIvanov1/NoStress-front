import React, { useRef, useState, useEffect } from "react";

import { FaCheck, FaTimes, FaInfoCircle } from "react-icons/fa";
import axios from "../../../api/axios";

import { useGlobalContext } from "../../../context";

const USER_REGEX = /[a-zA-Z].{3,30}/gm;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,24}$/g;
const BASE_URL = "https://corp-baigroupkz.netlify.app/register";

const RegisterPage = () => {
  const { lang } = useGlobalContext();
  const userRef = useRef();
  const errorRef = useRef();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [validName, setValidName] = useState(true);
  const [userFocus, setUserFocus] = useState(false);

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMessage, setErrMessage] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidName(USER_REGEX.test(name));
  }, [name]);
  useEffect(() => {
    setValidMatch(password === matchPwd);
  }, [matchPwd]);
  useEffect(() => {
    setValidPassword(PWD_REGEX.test(password));
  }, [password]);

  useEffect(() => {
    setErrMessage("");
  }, [password, matchPwd]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const v1 = PWD_REGEX.test(password);
    if (!v1) {
      setErrMessage("Пароль неверен!");
      return;
    }
    try {
      const response = await axios.post(
        BASE_URL,
        { name, email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      if (response.data) {
        setSuccess(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {success ? (
        <section className="success-section">
          <h2>Регистрация успешна!</h2>
          <p>
            На почту, указанную при регистрации должно прийти письмо со ссылкой
            для подтверждения адреса. Пожалуйста, пройдите по ссылке в письме.
            После этого вы сможете приступить к работе в STRESS-LESS CRM! Желаем
            вам продуктивной работы! Данное окно можно закрыть.
          </p>
        </section>
      ) : (
        <section className="login-container">
          <p ref={errorRef} aria-live="assertive">
            {errMessage}
          </p>
          <h3>
            {lang === "En"
              ? "Register"
              : lang === "Ru"
              ? "Регистрация"
              : "Тіркеу"}
          </h3>
          <form onSubmit={handleSubmit}>
            <label>
              {lang === "En" ? "Name" : lang === "Ru" ? "Имя" : "Аты"}

              <input
                ref={userRef}
                autoComplete="off"
                onFocus={() => setUserFocus(true)}
                onBlur={() => setUserFocus(false)}
                onChange={(e) => setName(e.target.value)}
                type="text"
                name="name"
                id="name"
                required
              />
            </label>
            <label>
              {lang === "En"
                ? "Email"
                : lang === "Ru"
                ? "Электронная почта"
                : "Электрондық пошта"}
              <input
                type="email"
                name="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
            <label>
              <div className="password-label">
                <span>
                  {lang === "En"
                    ? "Password"
                    : lang === "Ru"
                    ? "Пароль"
                    : "Құпия сөз"}
                </span>
                <span className={validPassword ? "valid" : "hide"}>
                  <FaCheck />
                </span>
                <span
                  className={validPassword || !password ? "hide" : "invalid"}
                >
                  <FaTimes />
                </span>
              </div>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => setPasswordFocus(true)}
                onBlur={() => setPasswordFocus(false)}
                aria-invalid={validPassword ? "false" : "true"}
                aria-describedby="pwdnote"
                name="password"
                id="password"
                required
              />
              <p
                id="pwdnote"
                className={
                  passwordFocus && !validPassword ? "instructions" : "offscreen"
                }
              >
                <FaInfoCircle />
                от 8 до 24 знака <br />
                БОЛЬШИЕ и маленькие буквы, цифры
              </p>
            </label>
            <label>
              <div className="password-label">
                <span>
                  {lang === "En"
                    ? "Confirm password"
                    : lang === "Ru"
                    ? "Повторите пароль"
                    : "Құпия сөзді қайталаңыз"}
                </span>
                <span className={validMatch && matchPwd ? "valid" : "hide"}>
                  <FaCheck />
                </span>
                <span className={validMatch || !matchPwd ? "hide" : "invalid"}>
                  <FaTimes />
                </span>
              </div>
              <input
                type="password"
                onChange={(e) => setMatchPwd(e.target.value)}
                onFocus={() => setMatchFocus(true)}
                onBlur={() => setMatchFocus(false)}
                aria-invalid={validMatch ? "false" : "true"}
                aria-describedby="confirmnote"
                name="password2"
                id="password2"
                required
              />
              <p
                id="confirmnote"
                className={
                  matchFocus && !validMatch ? "instructions" : "offscreen"
                }
              >
                <FaInfoCircle />
                Пароль должен совпадать с паролем введенным ранее
              </p>
            </label>
            <div className="register-button">
              <button
                disabled={!validPassword || !validMatch ? true : false}
                className="submit-login-btn"
              >
                Submit
              </button>
            </div>
          </form>
        </section>
      )}{" "}
    </>
  );
};

export default RegisterPage;
