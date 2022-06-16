import React, { useEffect, useState } from "react";
// import { useGlobalContext } from "../../context";
import OrderCard from "./cards/OrderCard";
import LeftInfoPanel from "../Header/LeftInfoPanel";
import RightSideButtons from "../Header/RightSideButtons";
// import axios from "axios";
import useAuth from "../../hooks/useAuth";
import useGetMyOrders from "../../api/useGetMyOrders";

import "./MyOrders.css";
import ShareModal from "./ShareModal";

const MyOrdersPage = () => {
  // const { lang, showShareModal } = useGlobalContext();
  const [myOrders, setMyOrders] = useState([]);

  const orders = useGetMyOrders();

  useEffect(() => {
    setMyOrders(orders);
  }, []);

  return (
    <>
      <div className="left-side">
        <LeftInfoPanel />
      </div>
      <div className="right-side">
        <RightSideButtons />
        <div className="my-orders-container">
          {orders.map((item) => {
            console.log(item);
            return <OrderCard {...item} key={item._id} />;
          })}
        </div>
        {/* {showShareModal && <ShareModal />} */}
      </div>
    </>
  );
};

export default MyOrdersPage;
