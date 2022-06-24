import axios from "axios";

var BASE_URL = "";

if (window.location.origin === "http://localhost:3000") {
  BASE_URL = "http://localhost:5000";
} else if (window.location.origin === "https://corp-baigroupkz.netlify.app") {
  BASE_URL = "https://backend-baigroupkz.herokuapp.com";
}

export default axios.create({
  baseURL: `${BASE_URL}`,
  withCredentials: true,
});

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});
