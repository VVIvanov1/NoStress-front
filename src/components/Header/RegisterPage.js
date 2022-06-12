import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../../context";

const RegisterPage = () => {
  const { user, setUser } = useGlobalContext();

  return (
    <>
      <div className="register-form">
        <h1>Register</h1>
      </div>
    </>
  );
};

export default RegisterPage;
