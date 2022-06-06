import React from "react";
import { useGlobalContext } from "../../context";

const LeftInfoPanel = () => {
  const { lang } = useGlobalContext();
  return (
    <div className="left-side-info-panel">
      <button className="info-row">
        <p>
          {lang === "Ru"
            ? "Новые заказы"
            : lang === "En"
            ? "Today new orders"
            : "Жаңа тапсырыстар"}
        </p>
        <span className="main-theme-color">16</span>
      </button>
      <button className="info-row">
        <p>
          {lang === "Ru"
            ? "Непринятые заказы"
            : lang === "En"
            ? "Orphans orders"
            : "Жетім ордендер"}
        </p>
        <span className="red-theme-color">6</span>
      </button>
      <button className="info-row">
        <p>
          {lang === "Ru"
            ? "Завершенные"
            : lang === "En"
            ? "Closed orders"
            : "Орындалды"}
        </p>
        <span className="green-theme-color">215</span>
      </button>
      <button className="info-row">
        <p>
          {lang === "Ru"
            ? "Требует внимания"
            : lang === "En"
            ? "Need review"
            : "Назар аударыңыз"}
        </p>
        <span className="blue-theme-color">10</span>
      </button>
    </div>
  );
};

export default LeftInfoPanel;
