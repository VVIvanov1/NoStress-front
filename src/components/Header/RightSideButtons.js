import React from "react";
import { IoIosRefresh } from "react-icons/io";
import { VscFilter } from "react-icons/vsc";
import { useGlobalContext } from "../../context";

const RightSideButtons = () => {
  const {
    lang,
    newOrders,
    setNewOrders,
    notAssigned,
    setNotAssigned,
  } = useGlobalContext();
  return (
    <div className="right-side-buttons">
      <div className="filter-buttons-section">
        <button className="right-side-button-ico">
          <IoIosRefresh />
          {lang === "Ru" ? "Обновить" : "Refresh"}
        </button>
        <button className="right-side-button-ico">
          <VscFilter />
          {lang === "Ru" ? "Сбросить" : "Clear filter"}
        </button>
        <input
          type="checkbox"
          className="checkbox-custom"
          id="new"
          name="new"
          onChange={() => setNewOrders(!newOrders)}
        />
        <label htmlFor="new" className="checkbox-label">
          New orders
        </label>
        <input
          type="checkbox"
          className="checkbox-custom"
          id="notassigned"
          name="notassigned"
          onChange={() => setNotAssigned(!notAssigned)}
        />
        <label htmlFor="notassigned" className="checkbox-label">
          Not assigned
        </label>
      </div>
      <div className="buttons-right-side-nav">
        <a href="/main" className="right-side-nav-btn btn-active">
          Main
        </a>
        <a href="/myorders" className="right-side-nav-btn">
          My orders
        </a>
        <a href="/neworder" className="right-side-nav-btn">
          New order
        </a>
      </div>
    </div>
  );
};

export default RightSideButtons;
