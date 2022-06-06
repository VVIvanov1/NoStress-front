import React from "react";
import { useGlobalContext } from "../../context";
import OrderCard from "./cards/OrderCard";
import "./MyOrders.css";

const MyOrdersPage = () => {
  const { lang, data } = useGlobalContext();
  return (
    <div className="my-orders-container">
      {data.map((item) => {
        if (item.status === "in progress") {
          return <OrderCard {...item} key={item._id.$oid} />;
        }
      })}
    </div>
  );
};

export default MyOrdersPage;
