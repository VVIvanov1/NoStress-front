import axios from "axios";
import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";

const BASE_URL = "http://localhost:5000/orders/get-my-orders";

function useFetchMyOrders() {
  const [data, setData] = useState([]);
  const { auth } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const ords = await axios.get(`${BASE_URL}?user=${auth.email}`, {
          withCredentials: true,
        });
        console.log(ords);
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
