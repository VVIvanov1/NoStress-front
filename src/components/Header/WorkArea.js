import React from "react";
import "../../main-area.css";
import { Route, Routes } from "react-router-dom";

import MainPage from "../pages/MainPage";
import MyOrdersPage from "../pages/MyOrdersPage";
import NewOrderPage from "../pages/NewOrderPage";
import RegisterPage from "../pages/login/RegisterPage";
import { useGlobalContext } from "../../context";

import LoginPage from "../pages/login/LoginPage";
const WorkArea = () => {
  const { user } = useGlobalContext();
  return (
    <div className="main-workarea">
      <Routes>
        <Route path="/main" element={<MainPage />} />
        <Route path="/myorders" element={<MyOrdersPage />} />
        <Route path="/neworder" element={<NewOrderPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
};

export default WorkArea;
