import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../context";
import ClockLoader from "react-spinners/cjs/ClockLoader";
import { css } from "@emotion/react";
import MainPageCard from "../components/pages/cards/MainPageCard";
import ShareModal from "../components/pages/ShareModal";
import Paginating from "./Paginating";

const override = css`
  display: block;
  margin: 15em auto;
  border-color: red;
`;

const NewOrders = ({ orders, loading, cardsPerPage, totalCards, paginate }) => {
  const [color, setColor] = useState("#00B0C7");
  const { showShareModal } = useGlobalContext();

  return (
    <div className="main-page-container">
      {loading ? (
        <ClockLoader
          color={color}
          loading={loading}
          css={override}
          size={100}
        />
      ) : (
        <>
          {orders.map((item) => {
            if (item.status !== "closed") {
              return <MainPageCard {...item} key={item._id} />;
            }
          })}
        </>
      )}
      {orders.length > 0 && (
        <Paginating
          data={orders}
          cardsPerPage={cardsPerPage}
          totalCards={totalCards}
          paginate={paginate}
        />
      )}
      {showShareModal && <ShareModal />}
    </div>
  );
};

export default NewOrders;
