import React, { useState, useEffect } from "react";
import axios from "../../api/axios";
import LeftInfoPanel from "../Header/LeftInfoPanel";
import RightSideButtons from "../Header/RightSideButtons";

import { css } from "@emotion/react";

import NewOrders from "../NewOrders";

const MainPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [orders, setOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(4);

  useEffect(() => {
    let isMounted = true;
    const getOrders = async () => {
      try {
        const response = await axios.get("/orders", {
          withCredentials: true,
        });
        const newOrders = response.data.filter((i) => i.status === "new");
        setOrders(newOrders);
      } catch (error) {
        console.error(error);
      } finally {
        isMounted && setIsLoading(false);
      }
    };
    getOrders();

    return () => (isMounted = false);
  }, []);

  const Paginate = () => {
    setCurrentPage();
  };

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = orders.slice(indexOfFirstCard, indexOfLastCard);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className="left-side">
        <LeftInfoPanel />
      </div>
      <div className="right-side">
        <RightSideButtons />
        <NewOrders
          orders={currentCards}
          loading={isLoading}
          cardsPerPage={cardsPerPage}
          totalCards={orders.length}
          paginate={paginate}
        />
      </div>
    </>
  );
};

export default MainPage;
