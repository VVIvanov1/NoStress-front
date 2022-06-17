import axios from "axios";
import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";

var BASE_URL = "";

if (window.location.origin === "http://localhost:3000") {
  BASE_URL = "http://localhost:5000/orders/get-my-orders";
} else if (window.location.origin === "https://corp-baigroupkz.netlify.app") {
  BASE_URL = "https://backend-baigroupkz.herokuapp.com/orders/get-my-orders";
}

function useFetchMyOrders() {
  const [data, setData] = useState([]);
  const { auth } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const ords = await axios.get(`${BASE_URL}`, {
          withCredentials: true,
        });

        setData(ords.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  return data;
}

export default useFetchMyOrders;
