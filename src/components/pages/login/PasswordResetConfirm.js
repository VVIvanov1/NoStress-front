import React, { useRef, useState, useEffect } from "react";

import { FaCheck, FaTimes, FaInfoCircle } from "react-icons/fa";
import axios from "../../../api/axios";
import { useLocation, useNavigate } from "react-router-dom";

import { useGlobalContext } from "../../../context";

// const PWD_REGEX = /[a-zA-Z0-9]{8,24}/g;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,24}$/;
// const BASE_URL = "https://corp-baigroupkz.netlify.app/register";
// const BASE_URL = "http://localhost:5000/users/reset-password-confirm";

const PasswordResetConfirm = () => {
  const { lang } = useGlobalContext();
  const location = useLocation();
  const navigate = useNavigate();
  const errorRef = useRef();
  const pasRef = useRef();
  const [base_url, setBase_url] = useState("");

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMessage, setErrMessage] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (window.location.hostname === "localhost") {
      setBase_url(`http://localhost:5000/users/reset-password-confirm`);
    } else {
      setBase_url(
        `https://corp-baigroupkz.netlify.app/users/reset-password-confirm`
      );
    }
  }, []);

  useEffect(() => {
    if (password.length >= 8) {
      let eq = PWD_REGEX.test(pasRef.current.value);
      if (eq) {
        setValidPassword(true);
      } else {
        setValidPassword(false);
      }
    } else {
      setValidPassword(false);
    }
  }, [password]);

  useEffect(() => {
    setValidMatch(password === matchPwd);
  }, [matchPwd]);

  useEffect(() => {
    setErrMessage("");
  }, [password, matchPwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const v1 = PWD_REGEX.test(password);
    const token = location.search.split("=")[1];
    if (!v1) {
      setErrMessage("Invalid entry!");
      return;
    }
    try {
      const response = await axios.post(
        base_url,
        { password, accessToken: token },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      //   console.log(response);
      if (response.status === 200) {
        setSuccess(true);
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {success ? (
        <section className="success-section">
          <h2>Пароль успешно изменен!</h2>
          <p>Можете войти в систему под новым паролем.</p>
        </section>
      ) : (
        <section className="login-container">
          <p ref={errorRef} aria-live="assertive">
            {errMessage}
          </p>
          <h3>
            {lang === "En"
              ? "Change password"
              : lang === "Ru"
              ? "Смена пароля"
              : "Парольді өзгерту"}
          </h3>
          <form onSubmit={handleSubmit}>
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
                ref={pasRef}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => setPasswordFocus(true)}
                onBlur={() => setPasswordFocus(false)}
                value={password}
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

export default PasswordResetConfirm;
