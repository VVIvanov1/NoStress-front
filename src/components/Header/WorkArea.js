import React from "react";
import "../../main-area.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LeftInfoPanel from "./LeftInfoPanel";
import RightSideButtons from "./RightSideButtons";
import MainPage from "../pages/MainPage";
import MyOrdersPage from "../pages/MyOrdersPage";
import NewOrderPage from "../pages/NewOrderPage";
const WorkArea = () => {
  return (
    <div className="main-workarea">
      <div className="left-side">
        <LeftInfoPanel />
      </div>
      <div className="right-side">
        <Router>
          <RightSideButtons />
          <Routes>
            <Route path="/main" element={<MainPage />} />
            <Route path="/myorders" element={<MyOrdersPage />} />
            <Route path="/neworder" element={<NewOrderPage />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
};

export default WorkArea;
