import React, { useState } from "react";
import { useGlobalContext } from "../../../context";

import Comments from "./commentsComponent/Comments";
import useDateNormaliser from "../../../hooks/useDateNormaliser";

import ShareButton from "../ShareButton";
import PhoneCallComponent from "./PhoneCallComponent";
import {
  FaRegUserCircle,
  FaBookmark,
  FaCalendarCheck,
  FaPhone,
  FaComments,
  FaEdit,
  FaRegSave,
  FaFireAlt,
} from "react-icons/fa";
import { ImCoinDollar } from "react-icons/im";
import { BsGeoAlt } from "react-icons/bs";

const OrderCard = ({
  _id,
  name,
  page,
  source,
  createdAt,
  comments,
  assignee,
  phone,
  status,
  updatedAt,
  user,
}) => {
  const {
    // showTooltip,
    // setShowTooltip,
    showShareModal,
    setShowShareModal,
    lang,
  } = useGlobalContext();
  const [showComments, setShowComments] = useState(false);

  const dateInfo = useDateNormaliser(createdAt);

  const handleShowComments = () => {
    setShowComments(!showComments);
  };

  // const toggleTooltip = (e) => {
  //   if (e.target.className === "row-item geo") {
  //     setTooltipId(e.target.id);
  //     let tooltipStyle = useTooltipPosition(e.target);
  //     setTtpos(tooltipStyle);
  //     setShowTooltip(true);
  //   }
  // };
  // const hideTooltip = () => {
  //   setShowTooltip(false);
  //   setTtpos({});
  //   setTooltipId("");
  // };

  return (
    <div className="my-order-card" key={_id.$oid}>
      <div className="my-order-card__top">
        <div className="row-item geo" id="geo">
          <span>
            <BsGeoAlt />
          </span>
          {page}
        </div>
        <div className="row-item name">
          <FaRegUserCircle />
          {name}
        </div>
        <PhoneCallComponent className="row-item phone" phone={phone} />
      </div>
      <div className="row-item-right">
        <div className="row-item top-status">
          {status}
          <FaBookmark />
          <div className="order-type-mark">
            {source === "Manual" ? "m" : "w"}
          </div>
        </div>
        <ShareButton
          className="my-order-share-btn"
          showShareModal={showShareModal}
          setShowShareModal={setShowShareModal}
          id={_id.$oid}
          page={page}
        />

        <button className="my-order-close-btn">
          <ImCoinDollar />
          Close
        </button>
      </div>
      <div className="my-order-card__bottom">
        <div
          className={`${
            dateInfo.days > 0 ? "row-item burning-order" : "row-item"
          }`}
        >
          <FaCalendarCheck />
          {/* {createdAt} */}
          {dateInfo.date}
          {dateInfo.days > 0 && <FaFireAlt />}
        </div>
        <div className="row-item">
          {lang === "En"
            ? "Since creation:"
            : lang === "Ru"
            ? "?????????? ????????????:"
            : "???????????????? ??????????????"}{" "}
          {dateInfo.days} {lang === "En" ? "d." : lang === "Ru" ? "????." : "??"}{" "}
          {dateInfo.hours} {lang === "En" ? "h" : lang === "Ru" ? "??" : "??"}{" "}
          {dateInfo.minutes} {lang === "En" ? "m" : lang === "Ru" ? "??" : "??"}
        </div>
        <div className="row-item">
          <button className="comments-btn" onClick={handleShowComments}>
            <FaComments />
            {comments.length}{" "}
            {lang === "En"
              ? "Comments"
              : lang === "Ru"
              ? "??????????????????????"
              : "????????????????????????????"}
          </button>
        </div>
      </div>
      {showComments ? (
        <Comments id={_id} comments={comments} user={user} />
      ) : null}
    </div>
  );
};

export default OrderCard;
