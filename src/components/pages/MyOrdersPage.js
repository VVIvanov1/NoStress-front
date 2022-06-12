import React from "react";
import { useGlobalContext } from "../../context";
import OrderCard from "./cards/OrderCard";
import LeftInfoPanel from "../Header/LeftInfoPanel";
import RightSideButtons from "../Header/RightSideButtons";

import "./MyOrders.css";
import ShareModal from "./ShareModal";

const MyOrdersPage = () => {
  const { lang, showShareModal, data, user } = useGlobalContext();
  return (
    <>
      <div className="left-side">
        <LeftInfoPanel />
      </div>
      <div className="right-side">
        <RightSideButtons />
        <div className="my-orders-container">
          {data.map((item) => {
            if (
              item.status === "in progress" &&
              item.user.$oid === "6280b7593b5ae121eb8f7f8c"
            ) {
              return <OrderCard {...item} key={item._id.$oid} />;
            }
          })}
        </div>
        {showShareModal && <ShareModal />}
      </div>
    </>
  );
};

export default MyOrdersPage;
