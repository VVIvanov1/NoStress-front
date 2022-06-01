import React, { useEffect } from "react";
import NewOrderCard from "./cards/NewOrderCard";

import data from "../../orders-data";
const user = { user: { $oid: "6280b7593b5ae121eb8f7f8c" } };

const MainPage = () => {
  return (
    <div className="main-page-container">
      {data.map((item) => {
        if (item.status === "new") {
          return <NewOrderCard item={item} key={item._id.$oid} />;
        }
      })}
    </div>
  );
};

export default MainPage;
