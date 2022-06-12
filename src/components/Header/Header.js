import React, { useState, useEffect, useRef } from "react";
import { FaBars } from "react-icons/fa";
import Account from "./Account";
import LoginBtn from "./LoginBtn";
import LogOutBtn from "./LogOutBtn";
import ChangeLang from "./ChangeLang";
import logo from "./logo.svg";
import { useGlobalContext } from "../../context";

const Header = () => {
  const { user, showLink, setShowLinks } = useGlobalContext();
  // let currentUser = { email: "meruyert@baigroupkz.com" };
  // const [user, setUser] = useState(null);
  // const [lang, setLang] = useState("Ru");
  // const [showLink, setShowLinks] = useState(false);

  return (
    <header>
      <nav className="left-header">
        <div className="logo-navbar">
          <a href="/" className="logo">
            <img src={logo} alt="logo" />
          </a>
          <span>STRESS-LESS CRM</span>
        </div>
        <button className="nav-toggle" onClick={() => setShowLinks(!showLink)}>
          <FaBars />
        </button>
      </nav>
      <ChangeLang />

      {user && <Account />}
      {!user ? <LoginBtn /> : <LogOutBtn />}
    </header>
  );
};

export default Header;
