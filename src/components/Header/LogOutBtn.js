import React, { useRef, useEffect } from "react";
import { RiLogoutCircleLine } from "react-icons/ri";

const LogOutBtn = ({ setUser, lang, showLink }) => {
  const logoutContainer = useRef(null);

  useEffect(() => {
    if (showLink) {
      logoutContainer.current.style.height = "auto";
      logoutContainer.current.style["margin-bottom"] = "16px";
    } else {
      logoutContainer.current.style.height = "0px";
      logoutContainer.current.style["margin-bottom"] = "0px";
    }
  }, [showLink]);

  return (
    <div className="security" ref={logoutContainer}>
      <a href="#" onClick={() => setUser(null)}>
        <RiLogoutCircleLine />
        <span>
          {lang === "En"
            ? "Logout"
            : lang === "Ru"
            ? "Выйти"
            : lang === "Kz"
            ? "Шығу"
            : "Сhiqish"}
        </span>
      </a>
    </div>
  );
};

export default LogOutBtn;
