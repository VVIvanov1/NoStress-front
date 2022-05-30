import React, { useRef, useEffect } from "react";
import { RiLogoutCircleLine } from "react-icons/ri";
import { useGlobalContext } from "../../context";

const LogOutBtn = () => {
  const { setUser, lang, showLink } = useGlobalContext();
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
