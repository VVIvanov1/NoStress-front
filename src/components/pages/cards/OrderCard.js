import React, { useState, useEffect, useRef } from "react";
import { useGlobalContext } from "../../../context";
import Tooltip from "../../tooltip/TooltipCustom";
import Comments from "./commentsComponent/Comments";
import useDateNormaliser from "../../../hooks/useDateNormaliser";
import useTooltipPosition from "../../../hooks/useTooltipPosition";
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
    showTooltip,
    setShowTooltip,
    showShareModal,
    setShowShareModal,
    lang,
  } = useGlobalContext();
  const [showComments, setShowComments] = useState(false);
  // const [toggleComments, setToggleComments] = useState(false);
  const [tooltipId, setTooltipId] = useState("");
  const [ttpos, setTtpos] = useState();

  const dateInfo = useDateNormaliser(createdAt.$date.$numberLong);

  // let commentsText = comments.join("\n");

  const handleShowComments = () => {
    setShowComments(!showComments);
  };

  const toggleTooltip = (e) => {
    if (e.target.className === "row-item geo") {
      setTooltipId(e.target.id);
      let tooltipStyle = useTooltipPosition(e.target);
      setTtpos(tooltipStyle);
      setShowTooltip(true);
    }
  };
  const hideTooltip = () => {
    setShowTooltip(false);
    setTtpos({});
    setTooltipId("");
  };

  return (
    <div className="my-order-card" key={_id.$oid}>
      <div className="my-order-card__top">
        <div
          className="row-item geo"
          id="geo"
          onMouseOver={(e) => toggleTooltip(e)}
          onMouseLeave={() => hideTooltip()}
        >
          <BsGeoAlt />
          {page}
          {showTooltip && tooltipId === "geo" ? (
            <Tooltip
              text={
                lang === "En"
                  ? "Tour or destination for this order"
                  : lang === "Ru"
                  ? "Тур/направление данного заказа"
                  : "Осы тапсырыс үшін тур немесе баратын жер"
              }
              {...ttpos}
            />
          ) : null}
        </div>
        <div
          className="row-item name"
          onMouseOver={(e) => toggleTooltip(e)}
          onMouseLeave={hideTooltip}
        >
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
            {source === "manual" ? "m" : "w"}
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
          {dateInfo.date}
          {dateInfo.days > 0 && <FaFireAlt />}
          {/* {const d = new Date(createdAt.$date.$numberLong)} */}
        </div>
        <div className="row-item">
          {lang === "En"
            ? "Since creation:"
            : lang === "Ru"
            ? "Заказ создан:"
            : "Тапсырыс жасалды"}{" "}
          {dateInfo.days} {lang === "En" ? "d." : lang === "Ru" ? "дн." : "к."}{" "}
          {dateInfo.hours} {lang === "En" ? "h" : lang === "Ru" ? "ч" : "с."}
          {/* <Tooltip text="Lifetime of this order" /> */}
        </div>
        <div className="row-item">
          <button className="comments-btn" onClick={handleShowComments}>
            <FaComments />
            {comments.length}{" "}
            {lang === "En"
              ? "Comments"
              : lang === "Ru"
              ? "Комментарии"
              : "Түсініктемелер"}
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
