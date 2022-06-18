import React, { useState, useEffect } from "react";
import NewOrderCard from "./cards/NewOrderCard";
import ShareModal from "./ShareModal";
import { useGlobalContext } from "../../context";
import LeftInfoPanel from "../Header/LeftInfoPanel";
import RightSideButtons from "../Header/RightSideButtons";
import axios from "../../api/axios";
import ClockLoader from "react-spinners/cjs/ClockLoader";
import { css } from "@emotion/react";
import MainPageCard from "./cards/MainPageCard";

const override = css`
  display: block;
  margin: 15em auto;
  border-color: red;
`;

const MainPage = () => {
  const { showShareModal } = useGlobalContext();
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [color, setColor] = useState("#00B0C7");

  useEffect(() => {
    let isMounted = true;

    const getOrders = async () => {
      try {
        const response = await axios.get("/orders", {
          withCredentials: true,
        });

        setOrders(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        isMounted && setIsLoading(false);
      }
    };
    getOrders();
    // console.log(orders);
    return () => (isMounted = false);
  }, []);

  return (
    <>
      <div className="left-side">
        <LeftInfoPanel />
      </div>
      <div className="right-side">
        <RightSideButtons />
        <div className="main-page-container">
          {isLoading ? (
            <ClockLoader
              color={color}
              loading={isLoading}
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

          {showShareModal && <ShareModal />}
        </div>
      </div>
    </>
  );
};

export default MainPage;
