import axios from "../api/axios";
import useAuth from "../hooks/useAuth";
import React from "react";

const useLogout = () => {
  const { setAuth } = useAuth();

  const logout = async () => {
    setAuth({});
    try {
      const response = axios.get("/logout", {
        withCredentials: true,
      });
    } catch (error) {
      console.error(error);
    }
  };
  return logout;
};

export default useLogout;
