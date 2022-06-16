import React, { useRef, useEffect } from "react";
import { RiLoginCircleLine } from "react-icons/ri";
import { useGlobalContext } from "../../context";

import { Link } from "react-router-dom";

const LoginBtn = () => {
  const { lang, showLink } = useGlobalContext();

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

  return (
    <div className="security" ref={loginContainer}>
      <Link to="/login">
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
      </Link>
    </div>
  );
};

export default LoginBtn;
