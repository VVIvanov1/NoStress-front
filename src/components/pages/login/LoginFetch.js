import React from "react";
import axios from "axios";

export default async function LoginFetch(obj) {
  const url = "http://localhost:5000/.netlify/functions/api/users/login";
  let body = {
    email: obj.login,
    password: obj.password,
  };
  try {
    let resp = axios.post(url, body, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });
    return resp;
  } catch (error) {
    throw new Error(error);
  }
}
