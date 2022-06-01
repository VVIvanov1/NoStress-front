import React from "react";
// import { GrMapLocation } from "react-icons/gr";
import ShareButton from "../ShareButton";
import { BsGeoAlt } from "react-icons/bs";
import {
  FaRegUserCircle,
  FaBookmark,
  FaCalendarCheck,
  FaPhoneAlt,
  //   FaShareSquare,
} from "react-icons/fa";
import { ImCoinDollar } from "react-icons/im";

const NewOrderCard = (obj) => {
  let {
    page,
    _id,
    name,
    user,
    source,
    phone,
    status,
    won,
    comments,
    createdAt,
  } = obj.item;

  let date = new Date(Number(createdAt.$date.$numberLong));

  let diff = new Date() - date;
  let days = Math.floor(diff / 86400000);
  let hours = Math.floor((diff - days * 86400000) / 3600000);

  return (
    <div className="order-card">
      <div className="order-card-row">
        <div className="order-card-row-item location main-theme-color">
          <BsGeoAlt className="main-theme-color" /> {page}
        </div>
        <div className="order-card-row-item user main-theme-color">
          <FaRegUserCircle />
          {name}
        </div>
        <div className="order-card-row-item phone main-theme-color">
          <FaPhoneAlt className="main-theme-color" />
          {phone}
        </div>
        <div className="order-card-row-item label main-theme-color">
          {status}
          <FaBookmark className="main-theme-color" />
        </div>
      </div>
      <div className="order-card-row">
        <div className="order-card-row-item calendar color-grey">
          <FaCalendarCheck className={`${days > 0 ? "color-red" : ""}`} />
          {date.toLocaleDateString("ru")}
        </div>
        <div
          className={`${
            days > 0
              ? "order-card-row-item timelapse color-red"
              : "order-card-row-item timelapse"
          }`}
        >
          Since creation: {days} d. {hours} h.
        </div>
        <div className="order-card-manager-row">
          <ShareButton />
          {/* <button className="share-order manager-btn">
            <FaShareSquare /> Share
          </button> */}
          <button
            className={`${
              days > 0
                ? "take-order manager-btn color-red"
                : "take-order manager-btn"
            }`}
          >
            <ImCoinDollar />
            Take
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewOrderCard;
