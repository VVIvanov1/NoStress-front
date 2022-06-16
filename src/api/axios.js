import axios from "axios";
const BASE_URL = "http://localhost:5000/users";
const HEROKU = "https://backend-baigroupkz.herokuapp.com/users";
export default axios.create({
  baseURL: BASE_URL,
});

export const axiosPrivate = axios.create({
  baseURL: HEROKU,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});
