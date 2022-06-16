import React from "react";
import NewOrderCard from "./cards/NewOrderCard";
import ShareModal from "./ShareModal";
import { useGlobalContext } from "../../context";
import LeftInfoPanel from "../Header/LeftInfoPanel";
import RightSideButtons from "../Header/RightSideButtons";
import useRefreshToken from "../../hooks/useRefreshToken";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

const user = { user: { $oid: "6280b7593b5ae121eb8f7f8c" } };

const MainPage = () => {
  const { showShareModal, data } = useGlobalContext();
  const refresh = useRefreshToken();
  const axiosPrivate = useAxiosPrivate();
  return (
    <>
      <div className="left-side">
        <LeftInfoPanel />
      </div>
      <div className="right-side">
        <RightSideButtons />
        <div className="main-page-container">
          {data.map((item) => {
            if (item.status === "new") {
              return <NewOrderCard item={item} key={item._id.$oid} />;
            }
          })}
          {showShareModal && <ShareModal />}
        </div>
      </div>
    </>
  );
};

export default MainPage;
