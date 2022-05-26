import React from "react";
import { RiLoginCircleLine } from "react-icons/ri";
// import { useEffect } from "react";

const LoginBtn = ({ setUser, lang }) => {
  let currentUser = { email: "meruyert@baigroupkz.com" };
  
  const processLogin = () =>{
    setUser(currentUser)
  }

  return (
    <div className="security">
      <a href="#" onClick={processLogin}>
        <RiLoginCircleLine />
        <span>
          {
            lang === "En"? "Login":
            lang === "Ru"? "Вход":
            lang === "Kz"? "Кіру": "Кirish"
          }
          
          
          </span>
      </a>
    </div>
  );
};

export default LoginBtn;
