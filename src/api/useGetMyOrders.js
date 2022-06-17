// import { axiosGetMyOrders } from "../api/axios";
import axios from "./axios";
import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";

var BASE_URL = "";
// const axiosGetMyOrders = axios.create({
//   BASE_URL: "http://localhost:5000/orders",
//   headers: { "Content-Type": "application/json" },
//   withCredentials: true,
// });

if (window.location.origin === "http://localhost:3000") {
  BASE_URL = "http://localhost:5000/orders/get-my-orders";
} else if (window.location.origin === "https://corp-baigroupkz.netlify.app") {
  BASE_URL = "https://backend-baigroupkz.herokuapp.com/orders/get-my-orders";
}

function useFetchMyOrders() {
  const [data, setData] = useState([]);
  const { auth } = useAuth();

  useEffect(() => {
    // const reqIntercept = axiosGetMyOrders.interceptors.request.use(
    //   (config) => {
    //     if (!config.headers["Authorisation"]) {
    //       config.headers["Authorisation"] = `Bearer ${auth.accessToken}`;
    //     }
    //     return config;
    //   },
    //   (error) => Promise.reject(error)
    // );
    // const resIntercept = axiosGetMyOrders.interceptors.response.use(
    //   (response) => response,
    //   (error) => {
    //     return Promise.reject(error);
    //   }
    // );
    const fetchData = async () => {
      try {
        const ords = await axios.get("/orders/get-my-orders", {
          withCredentials: true,
        });

        setData(ords.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
    // axiosGetMyOrders.interceptors.request.eject(reqIntercept);
    // axiosGetMyOrders.interceptors.response.eject(resIntercept);
  }, []);
  return data;
}

export default useFetchMyOrders;
