import React from "react";
import "../../main-area.css";
import { AiOutlineInfoCircle } from "react-icons/ai";
import {IoIosRefresh} from 'react-icons/io'
import {VscFilter, VscFilterFilled} from 'react-icons/vsc'
const WorkArea = () => {
  return (
    <div className="main-workarea">
      <div className="left-side">
        <div className="left-side-info-panel">
          {/* <div className="heading-info-panel">
            <h4>Main info</h4>
            <AiOutlineInfoCircle />
          </div> */}
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
      </div>
      <div className="right-side">
        <div className="right-side-buttons">
          <div className="filter-buttons-section">
            <button className="right-side-button-ico">
            <IoIosRefresh/>
          </button>
          <button className="right-side-button-ico">
            <VscFilter/>
          </button>
          </div>
          
          <button className="right-side-nav-btn btn-active">Main</button>
          <button className="right-side-nav-btn">My orders</button>
          <button className="right-side-nav-btn">New order</button>
        </div>
      
      </div>
    </div>
  );
};

export default WorkArea;
