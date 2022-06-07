import React from "react";
import { useGlobalContext } from "../../context";
import OrderCard from "./cards/OrderCard";
// import ShareModal from "./ShareModal";
import "./MyOrders.css";
import ShareModal from "./ShareModal";

const MyOrdersPage = () => {
  const { lang, showShareModal, data } = useGlobalContext();
  return (
    <>
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
      {/* <ShareModal /> */}
    </>
  );
};

export default MyOrdersPage;
