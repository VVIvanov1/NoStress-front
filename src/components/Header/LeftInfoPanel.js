import React from "react";

const LeftInfoPanel = () => {
  return (
    <div className="left-side-info-panel">
      <button className="info-row">
        <p>Today new orders</p>
        <span className="main-theme-color">16</span>
      </button>
      <button className="info-row">
        <p>Orphans orders</p>
        <span className="red-theme-color">6</span>
      </button>
      <button className="info-row">
        <p>Closed orders</p>
        <span className="green-theme-color">215</span>
      </button>
      <button className="info-row">
        <p>Need review</p>
        <span className="blue-theme-color">10</span>
      </button>
    </div>
  );
};

export default LeftInfoPanel;
