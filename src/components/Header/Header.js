import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import Account from "./Account";
import LoginBtn from "./LoginBtn";
import LogOutBtn from "./LogOutBtn";
import ChangeLang from "./ChangeLang";
import logo from "./logo.svg";
import { useGlobalContext } from "../../context";
import useAuth from "../../hooks/useAuth";

const Header = () => {
  const { showLink, setShowLinks } = useGlobalContext();
  const { auth } = useAuth();

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

      <Account />
      {auth.accessToken ? <LogOutBtn /> : <LoginBtn />}
    </header>
  );
};

export default Header;
