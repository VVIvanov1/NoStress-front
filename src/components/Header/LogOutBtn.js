import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RiLogoutCircleLine } from "react-icons/ri";
import { useGlobalContext } from "../../context";
// import useAuth from "../../hooks/useAuth";
import useLogout from "../useLogout";

const LogOutBtn = () => {
  const { lang, showLink } = useGlobalContext();
  const logoutContainer = useRef(null);
  const logout = useLogout();
  const navigate = useNavigate();

  useEffect(() => {
    if (showLink) {
      logoutContainer.current.style.height = "auto";
      logoutContainer.current.style["margin-bottom"] = "16px";
    } else {
      logoutContainer.current.style.height = "0px";
      logoutContainer.current.style["margin-bottom"] = "0px";
    }
  }, [showLink]);

  const setLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <div className="security" ref={logoutContainer}>
      <a href="#" onClick={setLogout}>
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
