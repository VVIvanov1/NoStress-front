import React from "react";
import { IoIosRefresh } from "react-icons/io";
import { VscFilter, VscFilterFilled } from "react-icons/vsc";
import { useGlobalContext } from "../../context";
import { useNavigate } from "react-router-dom";
// import "../../right-buttons-block.css";

const RightSideButtons = () => {
  const navigate = useNavigate();
  const {
    lang,
    newOrders,
    setNewOrders,
    notAssigned,
    setNotAssigned,
  } = useGlobalContext();

  const handleRefresh = () => {
    navigate("/main");
  };
  const handleNewOrderClick = () => {
    navigate("/neworder");
  };
  const clearFilter = () => {
    setNotAssigned(false);
    setNewOrders(false);
  };
  const handleNewOrdersClick = () => {
    setNewOrders(true);
  };
  const handleNotAssignedClick = () => {
    setNotAssigned(true);
  };
  return (
    <div className="right-side-buttons">
      <div className="filter-buttons-section">
        <button className="right-side-button-ico" onClick={handleRefresh}>
          <IoIosRefresh />
          {lang === "Ru" ? "Обновить" : lang === "En" ? "Refresh" : "Жаңарту"}
        </button>
        <button className="right-side-button-ico" onClick={clearFilter}>
          {notAssigned ? (
            <VscFilterFilled />
          ) : newOrders ? (
            <VscFilterFilled />
          ) : notAssigned && newOrders ? (
            <VscFilterFilled />
          ) : (
            <VscFilter />
          )}
          {/* <VscFilter /> */}
          {lang === "Ru" ? "Сбросить" : lang === "En" ? "Clear" : "Анық"}
        </button>
        <input
          type="checkbox"
          className="checkbox-custom"
          id="new"
          name="new"
          checked={newOrders}
          onClick={handleNewOrdersClick}
          onChange={() => setNewOrders(!newOrders)}
        />
        <label htmlFor="new" className="checkbox-label">
          {lang === "En" ? "New orders" : lang === "Ru" ? "Новые" : "Жаңа"}
        </label>
        <input
          type="checkbox"
          className="checkbox-custom"
          id="notassigned"
          name="notassigned"
          checked={notAssigned}
          onClick={handleNotAssignedClick}
          onChange={() => setNotAssigned(!notAssigned)}
        />
        <label htmlFor="notassigned" className="checkbox-label">
          {lang === "En"
            ? "Not assigned"
            : lang === "Ru"
            ? "Не назначено"
            : "Тағайындалмаған"}
        </label>
      </div>
      <div className="buttons-right-side-nav">
        {/* <a href="/main" className="right-side-nav-btn btn-active">
          Main
        </a> */}
        <a
          href="/myorders"
          className="right-side-nav-btn"
          onClick={(e) => {
            e.preventDefault();
            navigate("/myorders");
          }}
        >
          {lang === "En"
            ? "My orders"
            : lang === "Ru"
            ? "Мои заказы"
            : "Тапсырыстарым"}
        </a>
        <button className="right-side-nav-btn" onClick={handleNewOrderClick}>
          {lang === "En"
            ? "New order"
            : lang === "Ru"
            ? "Новый заказ"
            : "Жаңа тапсырыс"}
        </button>
        {/* <a href="/neworder" className="right-side-nav-btn">
          New order
        </a> */}
      </div>
    </div>
  );
};

export default RightSideButtons;
