import axios from "axios";

var BASE_URL = "";

if (window.location.origin === "http://localhost:3000") {
  BASE_URL = "http://localhost:5000/users";
} else if (window.location.origin === "https://corp-baigroupkz.netlify.app") {
  BASE_URL = "https://backend-baigroupkz.herokuapp.com/users";
}

export default axios.create({
  baseURL: `${BASE_URL}/users`,
});

export const axiosPrivate = axios.create({
  baseURL: `${BASE_URL}/users`,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});
