import React from "react";
import axios from "../api/axios";
import useAuth from "./useAuth";

const useRefreshToken = () => {
  const { setAuth } = useAuth();

  const refresh = async () => {
    const response = await axios.get("/refresh", {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    });
    setAuth((prev) => {
      // console.log(prev);
      return {
        ...prev,
        accessToken: response.data.accessToken,
        name: response.data.name,
        email: response.data.email,
      };
    });
    // console.log(response.data);
    return response.data;
  };
  return refresh;
};

export default useRefreshToken;
