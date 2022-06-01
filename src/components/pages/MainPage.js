import React, { useState } from "react";
import NewOrderCard from "./cards/NewOrderCard";
import ShareModal from "./ShareModal";
import { useGlobalContext } from "../../context";
import data from "../../orders-data";
const user = { user: { $oid: "6280b7593b5ae121eb8f7f8c" } };

const MainPage = () => {
  const { showShareModal } = useGlobalContext();
  return (
    <div className="main-page-container">
      {data.map((item) => {
        if (item.status === "new") {
          return <NewOrderCard item={item} key={item._id.$oid} />;
        }
      })}
      {showShareModal && <ShareModal />}
    </div>
  );
};

export default MainPage;
