import React, { useState, useEffect, useRef } from "react";
import { FaBars } from "react-icons/fa";
import Account from "./Account";
import LoginBtn from "./LoginBtn";
import LogOutBtn from "./LogOutBtn";
import ChangeLang from "./ChangeLang";
import logo from "./logo.svg";

const Header = () => {
  let currentUser = { email: "meruyert@baigroupkz.com" };
  const [user, setUser] = useState(null);
  const [lang, setLang] = useState("Ru");
  const [showLink, setShowLinks] = useState(false);

  return (
    <header>
      <div className="left-header">
        <div className="logo-navbar">
          <a href="/" className="logo">
            <img src={logo} alt="logo" />
          </a>
          <span>STRESS-LESS CRM</span>
        </div>
        <button className="nav-toggle" onClick={() => setShowLinks(!showLink)}>
          <FaBars />
        </button>
      </div>
      <ChangeLang lang={lang} setLang={setLang} showLink={showLink} />

      {user && <Account user={currentUser} showLink={showLink} />}
      {!user ? (
        <LoginBtn setUser={setUser} lang={lang} showLink={showLink} />
      ) : (
        <LogOutBtn setUser={setUser} lang={lang} showLink={showLink} />
      )}
    </header>
  );
};

export default Header;
