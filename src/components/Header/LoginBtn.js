import React, { useRef, useEffect } from "react";
import { RiLoginCircleLine } from "react-icons/ri";
import { useGlobalContext } from "../../context";
import { useNavigate } from "react-router-dom";

const LoginBtn = () => {
  const { currentUser, setUser, lang, showLink } = useGlobalContext();
  const navigate = useNavigate();
  const loginContainer = useRef(null);

  useEffect(() => {
    if (showLink) {
      loginContainer.current.style.height = "auto";
      loginContainer.current.style["margin-bottom"] = "16px";
    } else {
      loginContainer.current.style.height = "0px";
      loginContainer.current.style["margin-bottom"] = "0px";
    }
  }, [showLink]);

  const processLogin = () => {
    // setUser(currentUser);
    navigate("/login");
  };

  return (
    <div className="security" ref={loginContainer}>
      <a href="#" onClick={processLogin}>
        <RiLoginCircleLine />
        <span>
          {lang === "En"
            ? "Login"
            : lang === "Ru"
            ? "Вход"
            : lang === "Kz"
            ? "Кіру"
            : "Кirish"}
        </span>
      </a>
    </div>
  );
};

export default LoginBtn;
